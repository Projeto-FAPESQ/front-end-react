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
    id: "11.1.1",
    titulo: "Coleta de Esgoto",
    descricao: "Percentual de domicílios com coleta de esgoto adequada.",
    tipo: "percentual",
    eixoLabel: "%",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 9.00 }, { ano: 2017, valor: 15.00 }, { ano: 2018, valor: 15.30 },
          { ano: 2019, valor: 15.40 }, { ano: 2020, valor: 13.70 }, { ano: 2021, valor: 13.40 },
          { ano: 2022, valor: 13.40 }, { ano: 2023, valor: 11.50 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 15.40 }, { ano: 2017, valor: 17.90 }, { ano: 2018, valor: 18.10 },
          { ano: 2019, valor: 18.30 }, { ano: 2020, valor: 18.70 }, { ano: 2021, valor: 18.10 },
          { ano: 2022, valor: 18.00 }, { ano: 2023, valor: 14.80 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 53.50 }, { ano: 2017, valor: 53.40 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 80.20 }, { ano: 2021, valor: 80.20 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 55.50 }, { ano: 2017, valor: 55.10 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 61.60 },
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
    id: "11.1.2",
    titulo: "Abastecimento de Água",
    descricao: "Percentual de domicílios com abastecimento de água adequado.",
    tipo: "percentual",
    eixoLabel: "%",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 95.30 }, { ano: 2023, valor: 96.60 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 82.50 }, { ano: 2023, valor: 81.30 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 84.80 }, { ano: 2023, valor: 80.20 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 62.80 }, { ano: 2023, valor: 55.50 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 86.80 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
  {
    id: "11.1.3",
    titulo: "Coleta de Resíduos Sólidos",
    descricao: "Percentual de domicílios com coleta de resíduos sólidos adequada.",
    tipo: "percentual",
    eixoLabel: "%",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 95.69 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 81.12 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 80.27 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 55.49 }, { ano: 2023, valor: 0 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 0 }, { ano: 2018, valor: 0 },
          { ano: 2019, valor: 0 }, { ano: 2020, valor: 0 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 86.75 }, { ano: 2023, valor: 0 }
        ]
      }
    ]
  },
  {
    id: "11.1.4",
    titulo: "Investimento Per Capita em Habitação e Urbanismo",
    descricao: "Investimento per capita anual em habitação e urbanismo (R$/habitante).",
    tipo: "numerico",
    eixoLabel: "R$/hab",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 242.81 }, { ano: 2017, valor: 266.29 }, { ano: 2018, valor: 242.04 },
          { ano: 2019, valor: 171.93 }, { ano: 2020, valor: 181.53 }, { ano: 2021, valor: 202.40 },
          { ano: 2022, valor: 249.48 }, { ano: 2023, valor: 283.97 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 159.91 }, { ano: 2017, valor: 154.08 }, { ano: 2018, valor: 178.08 },
          { ano: 2019, valor: 182.25 }, { ano: 2020, valor: 190.80 }, { ano: 2021, valor: 0 },
          { ano: 2022, valor: 0 }, { ano: 2023, valor: 215.47 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 194.29 }, { ano: 2017, valor: 147.62 }, { ano: 2018, valor: 189.16 },
          { ano: 2019, valor: 158.53 }, { ano: 2020, valor: 226.02 }, { ano: 2021, valor: 278.79 },
          { ano: 2022, valor: 279.37 }, { ano: 2023, valor: 366.69 }
        ]
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 13.56 }, { ano: 2017, valor: 66.21 }, { ano: 2018, valor: 17.69 },
          { ano: 2019, valor: 46.09 }, { ano: 2020, valor: 156.88 }, { ano: 2021, valor: 81.56 },
          { ano: 2022, valor: 223.84 }, { ano: 2023, valor: 180.99 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 0 }, { ano: 2017, valor: 170.16 }, { ano: 2018, valor: 262.46 },
          { ano: 2019, valor: 231.14 }, { ano: 2020, valor: 313.72 }, { ano: 2021, valor: 301.02 },
          { ano: 2022, valor: 384.98 }, { ano: 2023, valor: 430.15 }
        ]
      }
    ]
  },
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
    id: "11.3",
    titulo: "Frequência de audiências públicas para discussão das leis orçamentárias",
    descricao: "Aumentar a urbanização inclusiva e sustentável, e a capacidade para o planejamento e a gestão participativa, integrada e sustentável dos assentamentos humanos, em todos os países. ",
    tipo: "numerico",
    historico: [
        {
        municipio: "Patos",
        dados: [
          { ano: 2016, valor: 3 }, { ano: 2017, valor: 4 }, { ano: 2018, valor: 3 },
          { ano: 2019, valor: 3 }, { ano: 2020, valor: 2 }, { ano: 2021, valor: 4 },
          { ano: 2022, valor: 4 }, { ano: 2023, valor: 4 }
        ]
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { ano: 2016, valor: 3 }, { ano: 2017, valor: 4 }, { ano: 2018, valor: 3 },
          { ano: 2019, valor: 3 }, { ano: 2020, valor: 3 }, { ano: 2021, valor: 4 },
          { ano: 2022, valor: 3 }, { ano: 2023, valor: 3 }
        ]
      },
      {
        municipio: "Pombal",
        dados: [
          { ano: 2016, valor: 2 }, { ano: 2017, valor: 3 }, { ano: 2018, valor: 2 },
          { ano: 2019, valor: 2 }, { ano: 2020, valor: 2 }, { ano: 2021, valor: 3 },
          { ano: 2022, valor: 2 }, { ano: 2023, valor: 2 }
        ]
      },
      
      {
        municipio: "Monte Horebe",
        dados: [
          { ano: 2016, valor: 3 }, { ano: 2017, valor: 5 }, { ano: 2018, valor: 4 },
          { ano: 2019, valor: 4 }, { ano: 2020, valor: 2 }, { ano: 2021, valor: 5 },
          { ano: 2022, valor: 4 }, { ano: 2023, valor: 4 }
        ]
      },
      {
        municipio: "Sousa",
        dados: [
          { ano: 2016, valor: 3 }, { ano: 2017, valor: 4 }, { ano: 2018, valor: 3 },
          { ano: 2019, valor: 3 }, { ano: 2020, valor: 2 }, { ano: 2021, valor: 4 },
          { ano: 2022, valor: 3 }, { ano: 2023, valor: 3 }
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