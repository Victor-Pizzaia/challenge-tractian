import { ChartIcon, ClickIcon, SensorIcon, ShieldIcon } from "../icons";

const nextHeaderTitle = "Tractian Challenge";

const navItens = [
  { name: "Sobre nós", href: "about" },
  { name: "Serviços", href: "services" },
  { name: "Escolha a Tractian", href: "choose" },
  { name: "Contato", href: "contact" },
];

const introduce = {
  title:
    "Monitore Online Suas Máquinas e Sua Produtividade. Tudo Isso Na Palma da Sua Mão",
  description:
    "Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.",
  link: "Faça uma demonstração",
};

const about = `Queremos que todos os profissionais de manutenção tenham acesso ao monitoramento
    online de equipamentos, e a uma plataforma “braço direito” que analisa,
    fornece insights valiosos, otimiza rotinas e permite tomada de decisões de forma prática e eficaz.
    Tudo isso só é possível combinando uma plataforma fácil de usar com um sensor IoT rápido de implementar.`;

const solutions = {
  content: {
    title: "Serviços",
    description: `
        Com a melhor tecnologia, nós transformamos um processo que hoje é demorado e complexo em uma experiência simples e inteligente.
        Revolucionando a vida dos profissionais de manutenção
    `,
  },
  services: [
    {
      title: "Sensor Tractian",
      description: "Análise de vibração e temperatura em tempo real.",
      icon: <SensorIcon />,
    },
    {
      title: "Plataforma de Monitoramento",
      description: "Monitore a condição das suas máquinas de qualquer lugar.",
      icon: <ClickIcon />,
    },
    {
      title: "Software Gestão da Manutenção",
      description:
        "Gestão da Manutenção com a plataforma mais completa do mercado.",
      icon: <ChartIcon />,
    },
    {
      title: "Funcionalidades do CMMS",
      description:
        "Centralize as atividades do seu time e potencialize seus resultados.",
      icon: <ShieldIcon />,
    },
  ],
};

const choose = {
  title: "A Melhor Solução do Mercado",
  content: [
    {
      title: "Manutenção Preditiva",
      description:
        "Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.",
    },
    {
      title: "Monitoramento Online",
      description:
        "Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.",
    },
    {
      title: "Setup Instantâneo",
      description:
        "Solução Plug & Play, sem necessidade de WiFi industrial, comunicação via 3G/4G independente.",
    },
    {
      title: "CMMS Integrado",
      description:
        "Automatize processos, ordens de serviço e tenha total controle sobre seus ativos e equipe.",
    },
  ],
};

const contact = {
  title: "Entre em contato conosco",
  namePlaceholder: "Digite seu Nome",
  messagePlaceholder: "Digite aqui sua dúvida",
  buttonMessage: "Enviar Mensagem",
};

const footer = "Feito com o ❤ por Victor Hugo Pizzaia";

export const content = {
  nextHeaderTitle,
  navItens,
  introduce,
  about,
  solutions,
  choose,
  contact,
  footer,
};
