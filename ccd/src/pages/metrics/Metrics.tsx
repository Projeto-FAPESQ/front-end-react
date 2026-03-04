import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./metrics.css";
import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, ReferenceLine
} from "recharts";
import { DADOS_ODS } from "../../data/dadosODS";
import { DADOS_QUANTITATIVOS_ODS } from "../../data/dadosQuantitativosODS";

export default function Metrics() {
  const [ano, setAno] = useState(2023);
  const [municipio, setMunicipio] = useState("Patos");
  const [indicadorId, setIndicadorId] = useState(DADOS_ODS[0].id);
  const [indicadorQuantId, setIndicadorQuantId] = useState(DADOS_QUANTITATIVOS_ODS[0].id);
  
  const indicadorAtual = DADOS_ODS.find((d) => d.id === indicadorId) || DADOS_ODS[0];
  const indicadorQuantAtual = DADOS_QUANTITATIVOS_ODS.find((d) => d.id === indicadorQuantId) || DADOS_QUANTITATIVOS_ODS[0];

  const isBinario = indicadorAtual.tipo === "binario";
  const isQuantBinario = indicadorQuantAtual.tipo === "binario";

  const unidade = indicadorAtual.eixoLabel || "";

  const listaMunicipios = indicadorAtual.historico.map((h) => h.municipio);
  const listaAnos = indicadorAtual.historico[0].dados.map((d) => d.ano);

  const formatarValor = (valor: number) => {
    if (isBinario) return valor === 1 ? "Sim" : "Não";
    return Number.isInteger(valor) ? `${valor}` : `${valor.toFixed(2)}`;
  };

  const mediaAnoAtual = indicadorAtual.historico.reduce((acc, mun) => {
    const dadoDoAno = mun.dados.find((d) => d.ano === ano);
    return acc + (dadoDoAno ? dadoDoAno.valor : 0);
  }, 0) / (indicadorAtual.historico.length || 1);


  const dadosComparativosAno = indicadorAtual.historico.map((item) => {
    const dadoDoAno = item.dados.find((d) => d.ano === ano);
    return {
      municipio: item.municipio,
      valor: dadoDoAno ? dadoDoAno.valor : 0,
    };
  });
  const dadosHistoricosComMedia = listaAnos.map((anoLoop) => {
    const valorMunicipio = indicadorAtual.historico
      .find((h) => h.municipio === municipio)
      ?.dados.find((d) => d.ano === anoLoop)?.valor || 0;

    let soma = 0;
    let qtd = 0;
    indicadorAtual.historico.forEach((mun) => {
      const d = mun.dados.find((dado) => dado.ano === anoLoop);
      if (d) {
        soma += d.valor;
        qtd++;
      }
    });

    return {
      ano: anoLoop,
      valor: valorMunicipio,
      mediaRegional: qtd > 0 ? soma / qtd : 0,
    };
  });

  const valorAtual = dadosHistoricosComMedia.find((d) => d.ano === ano)?.valor || 0;

  function gerarAnalise() {
    if (isBinario) {
      return valorAtual === 1
        ? `Em ${ano}, ${municipio} cumpre a meta estabelecida.`
        : `Em ${ano}, ${municipio} ainda não atendia aos requisitos da meta.`;
    } else {
      const mediaFormatada = Number.isInteger(mediaAnoAtual) ? mediaAnoAtual : mediaAnoAtual.toFixed(2);
      const comparativo = valorAtual >= mediaAnoAtual ? "acima" : "abaixo";
      
      return `Em ${ano}, ${municipio} registrou ${valorAtual} ${unidade.toLowerCase() || 'ocorrências'} referentes a este indicador. Este resultado está ${comparativo} da média regional do mesmo ano (${mediaFormatada}).`;
    }
  }

  const dadosComparativosQuant = indicadorQuantAtual.historico.map((item) => ({
    municipio: item.municipio,
    valor: item.dados[0]?.valor || 0,
  }));

  const formatarNivelImplementacao = (valor: number): string => {
    switch (valor) {
      case 0: return "Não existente";
      case 1: return "Existente";
      case 2: return "Implementado";
      default: return String(valor);
    }
  };

  function gerarAnaliseQuant() {
    const maior = Math.max(...dadosComparativosQuant.map((d) => d.valor));
    const municipiosDestaque = dadosComparativosQuant
      .filter((d) => d.valor === maior)
      .map((d) => d.municipio)
      .join(", ");

    if (dadosComparativosQuant.filter(e => e.valor == 0).length == 5) {
      return "Nenhum município alcançou um resultado satisfatório para a métrica em questão."
    }
    if (isQuantBinario) {
      return `Os municípios com maior nível de atendimento ao indicador são: ${municipiosDestaque}.`;
    }

    return `O maior valor registrado foi ${maior}, observado em ${municipiosDestaque}.`;
  }

  return (
    <div>
      <Header />
      <section className="metrics">
        <h1 id="title-metrics">Métricas ODS</h1>

        <div className="selection-container">
          <select value={indicadorId} onChange={(e) => setIndicadorId(e.target.value)}>
            {DADOS_ODS.map((ods) => (
              <option key={ods.id} value={ods.id}>{ods.id} - {ods.titulo}</option>
            ))}
          </select>
          <select value={ano} onChange={(e) => setAno(Number(e.target.value))}>
            {listaAnos.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
            {listaMunicipios.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="metrics-container">

          <div className="chart-container">
            <h2>Panorama ({ano})</h2>
            <ResponsiveContainer height={300}>
              <BarChart data={dadosComparativosAno} layout="vertical" margin={{ top: 20, left: 40, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                <XAxis
                  type="number"
                  domain={isBinario ? [0, 1] : [0, 'auto']}
                  hide={isBinario}
                />

                <YAxis type="category" dataKey="municipio" width={100} />

                <Tooltip formatter={(value: number) => [formatarValor(value), unidade]} />
                <Legend />

                {!isBinario && (
                  <ReferenceLine 
                    x={mediaAnoAtual} 
                    stroke="#ef4444" 
                    strokeDasharray="5 5"
                    label={{ 
                      position: 'insideTopRight', 
                      //value: `Média: ${Number.isInteger(mediaAnoAtual) ? mediaAnoAtual : mediaAnoAtual.toFixed(2)}`,
                      fill: '#ef4444',
                      fontSize: 13,
                      fontWeight: 'bold'
                    }} 
                  />
                )}

                <Bar dataKey="valor" fill="#3b82f6" barSize={30} name={unidade || "Valor"} />
                <Bar dataKey="Média geral" fill="#ef4444"></Bar>
              </BarChart>
            </ResponsiveContainer>
                <h3 className="result">Média dos municípios: {Number.isInteger(mediaAnoAtual) ? mediaAnoAtual : mediaAnoAtual.toFixed(2)}</h3>
          </div>

          <div className="chart-container">
            <h2 >Evolução: {municipio}</h2>
            <ResponsiveContainer height={300}>
              <LineChart data={dadosHistoricosComMedia} margin={{ left: 20, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ano" />

                <YAxis
                  domain={isBinario ? [0, 1] : ['auto', 'auto']}
                  ticks={isBinario ? [0, 1] : undefined}
                  tickFormatter={formatarValor}
                  width={40}
                />

                <Tooltip
                  formatter={(value: number) => [formatarValor(value), unidade || "Valor"]}
                  labelFormatter={(v) => `Ano: ${v}`}
                />

                <Legend />

                <Line
                  type={isBinario ? "stepAfter" : "monotone"}
                  dataKey="valor"
                  name={unidade || "Valor do Município"}
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />

                {!isBinario && (
                  <Line
                    type="monotone"
                    dataKey="mediaRegional"
                    name={`Média dos municípios`}
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeDasharray="4 4" 
                    dot={false}
                  />
                )}

                {isBinario && (
                  <ReferenceLine y={1} stroke="#22c55e" strokeDasharray="3 3" label="Meta" />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        <div className="analysis-box">
          <h2>Diagnóstico</h2>
          <p>{gerarAnalise()}</p>
        </div>

        <h1 id="title-metrics">Métricas Qualitativas</h1>

        <div className="selection-container">
          <select
            value={indicadorQuantId}
            onChange={(e) => setIndicadorQuantId(e.target.value)}
          >
            {DADOS_QUANTITATIVOS_ODS.map((ods) => (
              <option key={ods.id} value={ods.id}>
                {ods.id} - {ods.titulo}
              </option>
            ))}
          </select>
        </div>


        <div className="metrics-container">
          <div className="chart-container">
            <h2>Panorama Comparativo</h2>
            <p>{indicadorQuantAtual.descricao}</p>
            <ResponsiveContainer height={300}>
              <BarChart
                data={dadosComparativosQuant}
                margin={{ top: 20, right: 30, left: 100, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis
                  type="category"
                  dataKey="municipio"
                />

                <YAxis
                  type="number"
                  domain={[0, 2]}
                  ticks={[0, 1, 2]}
                  tickFormatter={formatarNivelImplementacao}
                />

                <Tooltip
                  formatter={(value: number) => [
                    formatarNivelImplementacao(value),
                    "Nível de Implementação",
                  ]}
                />

                <Bar
                  dataKey="valor"
                  fill="#3b82f6"
                  barSize={40}
                  name="Valor"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="analysis-box">
          <h2>Diagnóstico Quantitativo</h2>
          <p>{gerarAnaliseQuant()}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}