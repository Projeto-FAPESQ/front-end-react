import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./metrics.css";
import { useState, useEffect } from "react";
import Button from "../../components/input/button/Button";
import {   LineChart,
  Line,BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Metrics() {
  const [ano, setAno] = useState(2023);
  const [anoList,setAnoList] = useState([2023])  // fazendo uma lista de anos pra ficar de acordo com o retorno da api 
  const [municipioList,setMunicipioList]= useState(["Pombal"]) // mesma coisa pra municipios 
  const [dados, setDados] = useState<ExecucaoAgrupada[]>([]);
  const [municipio,setMunicipio] = useState("Pombal");

  
  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio",  "Junho", "Julho", "Agosto",  "Setembro","Outubro","Novembro","Dezembro"];
  const dadosPorMes = []  

  const formatarValor = (value: number) => //pra deixar os valores bunitinhos no grafico 
  new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);


  interface ItemOrcamentario {
    valorFixado: number;
    valorEmpenhado: number;
    valorLiquidado: number;
    valorPago: number;
    ano: number;
    municipio: string;
    data: string;
  }

  interface ExecucaoAgrupada {
    ano: number;
    valorFixado: number;
    valorEmpenhado: number;
    valorPormeses: Record <string, {fixado: number, empenhado: number}>
  }

  useEffect(() => {
    async function carregar() {
      const resL = await fetch("http://localhost:3000/licitacoes");
      const resD = await fetch("http://localhost:3000/despesas");
      
      const licitacoes: ItemOrcamentario[] = await resL.json();
      const despesas: ItemOrcamentario[] = await resD.json();

      const combinado = [...licitacoes, ...despesas];
      const agrupado: Record<number, ExecucaoAgrupada> = {};
      const tempAnos = anoList
      const tempMunicipios = municipioList
      
   

      combinado.forEach((item) => {
        
        if (item.municipio !== municipio) return; 
        if(!tempMunicipios.includes(item.municipio))
          tempMunicipios.push(item.municipio)
        const date = new Date(item.data)
        const mes = date.getMonth()


        if (!agrupado[item.ano]) {
          
          if(!tempAnos.includes(item.ano))
            tempAnos.push(item.ano)

          agrupado[item.ano] = {
            ano: item.ano,
            valorFixado: 0,
            valorEmpenhado: 0,
            valorPormeses: {}
          };
        }

        agrupado[item.ano].valorFixado += item.valorFixado || 0;
        agrupado[item.ano].valorEmpenhado += item.valorEmpenhado || 0;
        if(!agrupado[item.ano].valorPormeses[meses[mes]]){
            agrupado[item.ano].valorPormeses[meses[mes]] = {fixado: item.valorFixado, empenhado: item.valorEmpenhado}
        }else{
          agrupado[item.ano].valorPormeses[meses[mes]].fixado += item.valorFixado
          agrupado[item.ano].valorPormeses[meses[mes]].empenhado += item.valorEmpenhado
        }

        
      });
      
      

      
      setDados(Object.values(agrupado));
      tempAnos.sort()
      setAnoList(tempAnos)
      setMunicipioList(tempMunicipios)
    }

    carregar();
  }, [municipio]);

  const dadosAno = dados.find((d) => d.ano === ano);
  const dadosMes = dados.find((d) => d.ano === ano)?.valorPormeses
  let listMes : {mes: string, empenhado: number, fixado: number}[] = [] 
  if(dadosMes){
     meses.forEach((mes)=>{
        if(dadosMes[mes]){
          listMes.push({mes: mes, empenhado: dadosMes[mes].empenhado, fixado: dadosMes[mes].fixado})
        }
     })
  }



  const fixado = dadosAno?.valorFixado || 0;
  const empenhado = dadosAno?.valorEmpenhado || 0;

  

  const ieo = fixado > 0 ? (empenhado / fixado) * 100 : 0;

  function gerarAnalise() {
    if (!fixado && !empenhado)
      return "Não há dados suficientes para análise neste ano.";

    if (ieo < 10)
      return `Execução crítica (${ieo.toFixed(1)}%). O município praticamente não utilizou o orçamento disponível.`;

    if (ieo < 30)
      return `Execução muito baixa (${ieo.toFixed(1)}%). O orçamento existe, mas está sendo pouco utilizado.`;

    if (ieo < 60)
      return `Execução moderada (${ieo.toFixed(1)}%). Há uso parcial do orçamento, mas poderia ser melhor.`;

    return `Execução alta (${ieo.toFixed(1)}%). O município demonstra boa capacidade de utilizar o orçamento planejado.`;
  }

  const analise = gerarAnalise();

function arredondarProximoFechado(valor: number): number {
  if (!isFinite(valor) || valor <= 0) return 0;

  // função ala chatgpt kkkk 
  //foda pai 
  const expoente = Math.floor(Math.log10(valor));
  const step = Math.pow(10, Math.max(0, expoente - 1));
  const arred = Math.ceil(valor / step) * step;

  return arred;
}

  return (
    <div>
      <Header />

      <section className="metrics">
        <h1>Métricas</h1>
        <p>Análise do desenvolvimento sustentável dos municípios da Paraíba</p>

        <div className="selection-container">
          <select value={ano} onChange={(e) => setAno(Number(e.target.value))}>
            {anoList.map((item)=>(
              <option value={item}>{item}</option>
            ))}
            
          </select>

          <select value={municipio} onChange={(e)=> setMunicipio(e.target.value)}>
            {municipioList.map((item)=>(
              <option value={item}>{item}</option>
            ))}
          </select>

          <select>
            <option>ODS 11</option>
          </select>

          <Button label="Gerar Relatório" />
        </div>

        <div className="metrics-container">
          <div className="chart-container">
            <h2>Total</h2>
            <ResponsiveContainer height={300}>
              <BarChart
                data={[
                  { indicador: "Fixado", valor: fixado },
                  { indicador: "Empenhado", valor: empenhado },
                ]}
                layout="vertical"
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    type="number"
                    domain={[
                      0,
                      arredondarProximoFechado(Math.max(fixado, empenhado) * 1.2),
                    ]}
                    tickFormatter={formatarValor}
                  />

                <YAxis type="category" dataKey="indicador" width={100} />
                <Tooltip formatter={(value: number) => formatarValor(value)}/>

                <Legend />
                <Bar dataKey="valor" fill="#3b82f6" />

              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h2>Por Mês</h2>
            <ResponsiveContainer height={300}>
              <LineChart
                data={listMes}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="mes" />

                <YAxis
                  tickFormatter={(value) =>
                    new Intl.NumberFormat("pt-BR").format(value)
                  }
                />

                <Tooltip
                  formatter={(value: number) =>
                    new Intl.NumberFormat("pt-BR", {
                      minimumFractionDigits: 2,
                    }).format(value)
                  }
                />

                <Legend />

                <Line
                  type="monotone"
                  dataKey="fixado"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot
                />

                <Line
                  type="monotone"
                  dataKey="empenhado"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>


        </div>

        <div className="analysis-box">
          <h2>Análise</h2>
          <p>{analise}</p>
        </div>

      </section>

      <Footer />
    </div>
  );
}
