import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./metrics.css";
import { useState, useEffect } from "react";
import Button from "../../components/input/button/Button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Metrics() {
  const [ano, setAno] = useState(2023);
  const [dados, setDados] = useState<ExecucaoAgrupada[]>([]);
  const [municipio] = useState("Pombal");

  interface ItemOrcamentario {
    valorFixado: number;
    valorEmpenhado: number;
    valorLiquidado: number;
    valorPago: number;
    ano: number;
    municipio: string;
  }

  interface ExecucaoAgrupada {
    ano: number;
    valorFixado: number;
    valorEmpenhado: number;
  }

  useEffect(() => {
    async function carregar() {
      const resL = await fetch("http://localhost:3000/licitacoes");
      const resD = await fetch("http://localhost:3000/despesas");

      const licitacoes: ItemOrcamentario[] = await resL.json();
      const despesas: ItemOrcamentario[] = await resD.json();

      const combinado = [...licitacoes, ...despesas];

      const agrupado: Record<number, ExecucaoAgrupada> = {};

      combinado.forEach((item) => {
        if (item.municipio !== municipio) return; 

        if (!agrupado[item.ano]) {
          agrupado[item.ano] = {
            ano: item.ano,
            valorFixado: 0,
            valorEmpenhado: 0,
          };
        }

        agrupado[item.ano].valorFixado += item.valorFixado || 0;
        agrupado[item.ano].valorEmpenhado += item.valorEmpenhado || 0;
      });

      setDados(Object.values(agrupado));
    }

    carregar();
  }, []);

  const dadosAno = dados.find((d) => d.ano === ano);

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
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
          </select>

          <select value={municipio}>
            <option>Pombal</option>
          </select>

          <select>
            <option>ODS 11</option>
          </select>

          <Button label="Gerar Relatório" />
        </div>

        <div className="metrics-container">
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
              <XAxis type="number" domain={[0, arredondarProximoFechado(Math.max(fixado, empenhado) * 1.2)]} />
              <YAxis type="category" dataKey="indicador" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
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
