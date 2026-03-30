export interface IndicadorODS {
  id: string;
  titulo: string;
  descricao: string;
  tipo: "binario" | "numerico";
  historico: {
    municipio: string;
    dados: { valor: number }[];
    rotulo?: string;
  }[];
}
export const DADOS_QUANTITATIVOS_ODS = [
  {
    id: "11.1",
    titulo: "Moradia, Serviços Básicos e Urbanização de Favelas",
    descricao:"Existência de programas de regularização fundiária ou melhoria habitacional",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 1 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 1 },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 1 },
        ],
      },
    ],
  },
  {
    id: "11.2",
    titulo: "Transporte Público e Acessibilidade",
    descricao: "Ações para mobilidade ativa e acessibilidade (calçadas, rampas, ciclovias)",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 1 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 1 },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 1 },
        ],
      },
    ],
  },
  {
    id: "11.3.2",
    titulo: "Planejamento Urbano Participativo",
    descricao: "Existência do Plano Diretor Municipal.",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 1 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 1 },
        ],
      },
    ],
  },
  {
    id: "11.3.3",
    titulo: "Planejamento Urbano Participativo",
    descricao: "Existência e atuação de conselhos municipais relacionados ao desenvolvimento urbano",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 0 },
        ],
      },
    ],
  },
  {
    id: "11.4.2",
    titulo: "Patrimônio Cultural e  Natural",
    descricao: "Existência de programas municipais de preservação e valorização do patrimônio",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 2  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 2 },
        ],
      },
    ],
  },
  {
    id: "11.5.2",
    titulo: "Riscos e Desastres",
    descricao: "Existência de Plano de Contingência ou Plano Municipal de Defesa Civil",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 0  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 2 },
        ],
      },
    ],
  },
  {
    id: "11.6.3",
    titulo: "Impacto Ambiental Urbano",
    descricao: "Existência de Plano Municipal de Gestão Integrada de Resíduos Sólidos (PMGIRS).",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 1 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 1  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 0 },
        ],
      },
    ],
  },
  {
    id: "11.7.3",
    titulo: "Espaços Públicos e Áreas Verdes",
    descricao: "Existência de projetos de arborização urbana.",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 1  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 2 },
        ],
      },
    ],
  },
  {
    id: "11.8.3",
    titulo: "Espaços Públicos e Áreas Verdes",
    descricao: "Existência de projetos de arborização urbana.",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 1  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 2 },
        ],
      },
    ],
  },
  {
    id: "11.a",
    titulo: "Integração Regional",
    descricao: "Existência de planos ou projetos que integrem áreas urbanas,",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 2  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 2 },
        ],
      },
    ],
  },
  {
    id: "11.b",
    titulo: "Resiliência Climática e Desastres",
    descricao: "Adoção e implementação de políticas e planos integrados para mitigação e adaptação à mudança do clima",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 0  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 1 },
        ],
      },
    ],
  },

  {
    id: "11.b.2",
    titulo: "Resiliência Climática e Desastres",
    descricao: "Existência de Conselho e Fundo Municipal de Meio Ambiente.",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 2 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 0  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 0 },
        ],
      },
    ],
  },
  {
    id: "11.c",
    titulo: "Construção Sustentável",
    descricao: "Existência de regulamentação municipal que incentive ou exija o uso de materiais locais/sustentáveis em novas construções.",
    tipo: "binario",
    historico: [
      {
        municipio: "Patos",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Cajazeiras",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Pombal",
        dados: [
          { valor: 0 },
        ],
      },
      {
        municipio: "Monte Horebe",
        dados: [
          { valor: 0  },
        ],
      },
      {
        municipio: "Sousa",
        dados: [
          { valor: 0 },
        ],
      },
    ],
  },
];
