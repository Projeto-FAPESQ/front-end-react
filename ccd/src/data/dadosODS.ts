export interface IndicadorODS {
  id: string;
  titulo: string;
  descricao: string;
  tipo: "binario" | "numerico" | "percentual"; 
  eixoLabel?: string;
  historico: {
    municipio: string;
    dados: { ano: number; valor: number }[];
    rotulo?: string;
  }[];
}

export const DADOS_ODS = [
  {
    id: "11.2",
    titulo: "Transporte Público e Acessibilidade",
    descricao: "Proporcionar o acesso a sistemas de transporte seguros, acessíveis e sustentáveis.",
    tipo: "binario",
    historico: [
        {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 1 }, { ano: 2023, valor: 1 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
  {
    id: "11.4",
    titulo: "Patrimônio Cultural e Natural ",
    tipo: "binario",
    descricao: "Fortalecer esforços para proteger e salvaguardar o patrimônio cultural e natural do mundo.  ",
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 1 }, { ano: 2017, valor: 1 }, { ano: 2018, valor: 1 },
          { ano: 2019, valor: 1 }, { ano: 2020, valor: 1 }, { ano: 2021, valor: 1 },
          { ano: 2022, valor: 1 }, { ano: 2023, valor: 1 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 1 }, { ano: 2017, valor: 1 }, { ano: 2018, valor: 1 },
          { ano: 2019, valor: 1 }, { ano: 2020, valor: 1 }, { ano: 2021, valor: 1 },
          { ano: 2022, valor: 1 }, { ano: 2023, valor: 1 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 1 }, { ano: 2017, valor: 1 }, { ano: 2018, valor: 1 },
          { ano: 2019, valor: 1 }, { ano: 2020, valor: 1 }, { ano: 2021, valor: 1 },
          { ano: 2022, valor: 1 }, { ano: 2023, valor: 1 }
        ]
      }
    ]
  },
  {
    id: "11.5",
    titulo: "Riscos e Desastres ",
    tipo: "binario",
    descricao: "Reduzir significativamente o número de mortes e o número de pessoas afetadas por catástrofes e diminuir substancialmente as perdas econômicas diretas causadas por elas em relação ao produto interno bruto global, incluindo os desastres relacionados à água, com o foco em proteger os pobres e as pessoas em situação de vulnerabilidade.  esforços para proteger e salvaguardar o patrimônio cultural e natural do mundo.  ",    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
    {
    id: "11.6.1",
    titulo: "Impacto Ambiental Urbano",
    tipo: "percentual",
    eixoLabel: "%",
    descricao: "Reduzir o impacto ambiental negativo per capita das cidades, com atenção à qualidade do ar, gestão de resíduos municipais e outros. ",    
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 40, rotulo: "~40%*" }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 30, rotulo: "~30%*" }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 33, rotulo: "~33%*" }, { ano: 2023, valor: 100, rotulo: "100%*" }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 100, rotulo: "100%*" }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
  {
    id: "11.6.2",
    titulo: "Percentual de domicílios urbanos com esgotamento sanitário adequado (IBGE). ",
    tipo: "percentual",
    eixoLabel: "%",
    descricao: "Reduzir o impacto ambiental negativo per capita das cidades, com atenção à qualidade do ar, gestão de resíduos municipais e outros. ",    
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 91.9, rotulo: "91.9%*" }, { ano: 2023, valor: 0,}
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 75.9, rotulo: "75.9%*" }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 69.3, rotulo: "~69.3%*" }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 52, rotulo: "~52%*" }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 69.3, rotulo: "~69.3%*" }, { ano: 2023, valor: 0}
        ]
      }
    ]
  },
  {
    id: "11.6.3",
    titulo: "Percentual de domicílios urbanos com esgotamento sanitário adequado (SNIS). ",
    tipo: "percentual",
    eixoLabel: "%",
    descricao: "Reduzir o impacto ambiental negativo per capita das cidades, com atenção à qualidade do ar, gestão de resíduos municipais e outros. ",    
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 11.5, rotulo: "~11.5%*" }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 14.8, rotulo: "~14.8%*" }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0}, { ano: 2023, valor: 0, rotulo: "0%*" }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0, rotulo: "0%*" }
        ]
      }
    ]
  },
    {
    id: "11.7.1",
    titulo: "Área verde pública por habitante (m²/hab.).",
    tipo: "numerico",
    eixoLabel: "m²/hab.",
    descricao: "Proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, em particular para as mulheres e crianças, pessoas idosas e pessoas com deficiência. ",    
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 2.45 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0.72 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 1.80 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 1.10 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
  {
    id: "11.7.2",
    titulo: " Despesa liquidada per capita com infraestrutura urbana e paisagismo.",
    tipo: "numerico",
    eixoLabel: "R$/hab.",
    descricao: "Proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, em particular para as mulheres e crianças, pessoas idosas e pessoas com deficiência. ",    
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 160 }, { ano: 2017, valor: 155 }, { ano: 2018, valor: 165 },
          { ano: 2019, valor: 180 }, { ano: 2020, valor: 120 }, { ano: 2021, valor: 190 },
          { ano: 2022, valor: 240 }, { ano: 2023, valor: 271.41}
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 145 }, { ano: 2017, valor: 138 }, { ano: 2018, valor: 150 },
          { ano: 2019, valor: 155 }, { ano: 2020, valor: 110 }, { ano: 2021, valor: 175 },
          { ano: 2022, valor: 190 }, { ano: 2023, valor: 202.40}
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 110 }, { ano: 2017, valor: 105 }, { ano: 2018, valor: 120 },
          { ano: 2019, valor: 135 }, { ano: 2020, valor: 90 }, { ano: 2021, valor: 150 },
          { ano: 2022, valor: 280 }, { ano: 2023, valor: 354.14 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 220 }, { ano: 2017, valor: 210 }, { ano: 2018, valor: 230 },
          { ano: 2019, valor: 250 }, { ano: 2020, valor: 180 }, { ano: 2021, valor: 300 },
          { ano: 2022, valor: 650 }, { ano: 2023, valor: 714.61}
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 130 }, { ano: 2017, valor: 125 }, { ano: 2018, valor: 140 },
          { ano: 2019, valor: 155 }, { ano: 2020, valor: 95 }, { ano: 2021, valor: 160 },
          { ano: 2022, valor: 185 }, { ano: 2023, valor: 215.58 }
        ]
      }
    ]
  },
    {
    id: "11.a",
    titulo: "Integração Regional",
    tipo: "binario",
    eixoLabel: "Participação em consórcio",
    descricao: "Apoiar relações econômicas, sociais e ambientais positivas entre áreas urbanas, periurbanas e rurais, reforçando o planejamento nacional e regional de desenvolvimento.  ",
    historico:[
{
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0},
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 1 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 1 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 1 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
  {
    id: "11.b",
    titulo: "Resiliência Climática e Desastres",
    tipo: "numerico",
    eixoLabel: "ações",
    descricao: "Aumentar substancialmente o número de cidades e assentamentos humanos adotando e implementando políticas e planos integrados para a inclusão, a eficiência dos recursos, mitigação e adaptação à mudança do clima, a resiliência a desastres; e desenvolver e implementar, de acordo com o Marco de Sendai para a Redução do Risco de Desastres 2015-2030, o gerenciamento holístico do risco de desastres em todos os níveis. ",
    historico:[
{
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 5 }, { ano: 2017, valor: 5 }, { ano: 2018, valor: 5 },
          { ano: 2019, valor: 5 }, { ano: 2020, valor: 5 }, { ano: 2021, valor: 5 },
          { ano: 2022, valor: 5 }, { ano: 2023, valor: 5 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 3 }, { ano: 2017, valor: 3 }, { ano: 2018, valor: 3 },
          { ano: 2019, valor: 3 }, { ano: 2020, valor: 3 }, { ano: 2021, valor: 3 },
          { ano: 2022, valor: 3 }, { ano: 2023, valor: 3 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 3 }, { ano: 2017, valor: 3 }, { ano: 2018, valor: 3 },
          { ano: 2019, valor: 3 }, { ano: 2020, valor: 3 }, { ano: 2021, valor: 3 },
          { ano: 2022, valor: 3 }, { ano: 2023, valor: 3 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 1 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 1 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 1 }, { ano: 2017, valor: 1 }, { ano: 2018, valor: 1 },
          { ano: 2019, valor: 1 }, { ano: 2020, valor: 1 }, { ano: 2021, valor: 1 },
          { ano: 2022, valor: 1 }, { ano: 2023, valor: 1 }
        ]
      }
    ]
  },
    {
    id: "11.c",
    titulo: "Construção Sustentável",
    tipo: "porcentagem",
    eixoLabel: "%",
    descricao: "Apoiar os países menos desenvolvidos, inclusive por meio de assistência técnica e financeira, para construções sustentáveis e robustas, utilizando materiais locais. ",    
    historico: [
       {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0}
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0},
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  }

];