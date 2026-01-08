
import React from 'react';
import { 
  Book, Scale, Briefcase, Heart, Home, GraduationCap, 
  Users, Globe, ShieldCheck, MessageSquare, Compass, 
  Settings, Layers, RefreshCw, Landmark, Shield, 
  AlertTriangle, Network, Activity, Info, PenTool,
  Library, Info as InfoIcon
} from 'lucide-react';
import { AppSection, GlossaryTerm, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: AppSection.HOME, label: 'Início', icon: <Home size={20} /> },
  { id: AppSection.ACADEMIC, label: 'Acadêmico', icon: <Book size={20} /> },
  { id: AppSection.POLICIES, label: 'Políticas', icon: <Scale size={20} /> },
  { id: AppSection.INSTRUMENTS, label: 'Instrumentos', icon: <PenTool size={20} /> },
  { id: AppSection.BIBLIOGRAPHY, label: 'Bibliografia', icon: <Library size={20} /> },
  { id: AppSection.INTERNSHIP, label: 'Estágio', icon: <Briefcase size={20} /> },
  { id: AppSection.CAREER, label: 'Carreira', icon: <GraduationCap size={20} /> },
  { id: AppSection.SELFCARE, label: 'Autocuidado', icon: <Heart size={20} /> },
  { id: AppSection.ABOUT, label: 'Sobre', icon: <InfoIcon size={20} /> },
];

export const BIBLIOGRAPHY_DATA = [
  {
    title: "O Serviço Social na Contemporaneidade",
    author: "Marilda Iamamoto",
    category: "Fundamentos",
    desc: "Obra essencial para entender as transformações do trabalho profissional frente à reestruturação produtiva.",
    importance: "Alta - Base da formação contemporânea."
  },
  {
    title: "Serviço Social em Tempo de Capital Fetiche",
    author: "Marilda Villela Iamamoto",
    category: "Fundamentos",
    desc: "Uma análise densa sobre o capital financeiro, a questão social e os desafios do trabalho do assistente social.",
    importance: "Alta - Teoria Crítica."
  },
  {
    title: "Relações Sociais e Serviço Social no Brasil",
    author: "Marilda Villela Iamamoto / Raul de Carvalho",
    category: "História",
    desc: "Livro divisor de águas que introduz a perspectiva dialética e a análise do projeto profissional no Brasil.",
    importance: "Alta - Obra Clássica."
  },
  {
    title: "Ditadura e Serviço Social",
    author: "José Paulo Netto",
    category: "História",
    desc: "Análise crítica sobre o processo de renovação do Serviço Social no Brasil durante o período ditatorial.",
    importance: "Alta - Compreensão do Movimento de Reconceituação."
  },
  {
    title: "Capitalismo Monopolista e Serviço Social",
    author: "José Paulo Netto",
    category: "Teoria Social",
    desc: "Explora a gênese do Serviço Social como uma instituição típica do capitalismo monopolista.",
    importance: "Alta - Fundamentação teórica clássica."
  },
  {
    title: "Introdução ao Estudo do Método de Marx",
    author: "José Paulo Netto",
    category: "Fundamentos",
    desc: "Guia fundamental para compreender a base metodológica da teoria social crítica necessária à profissão.",
    importance: "Alta - Formação Intelectual."
  },
  {
    title: "A Instrumentalidade do Serviço Social",
    author: "Yolanda Guerra",
    category: "Prática Profissional",
    desc: "Exame rigoroso da instrumentalidade como categoria mediadora da prática e sua dimensão ético-política.",
    importance: "Alta - Teoria e Prática."
  },
  {
    title: "Política Social: Fundamentos e História",
    author: "Behring & Boschetti",
    category: "Política Social",
    desc: "Referência fundamental para o estudo da gênese e do desenvolvimento das políticas sociais no capitalismo.",
    importance: "Obrigatória - Concursos e Graduação."
  },
  {
    title: "A Política Social do Estado Capitalista",
    author: "Vicente de Paula Faleiros",
    category: "Política Social",
    desc: "Aborda a política social sob a ótica da luta de classes e as funções do Estado no atendimento às demandas.",
    importance: "Alta - Visão Crítica."
  },
  {
    title: "Serviço Social: Identidade e Alienação",
    author: "Maria Lúcia Martinelli",
    category: "Fundamentos",
    desc: "Investiga a trajetória histórica do Serviço Social e a constante busca pela superação da alienação profissional.",
    importance: "Alta - Reflexão Histórica."
  },
  {
    title: "Estratégias em Serviço Social",
    author: "Vicente Faleiros",
    category: "Prática Profissional",
    desc: "Reflexão sobre a dimensão política da prática e o uso de estratégias de intervenção social.",
    importance: "Média - Foco em metodologias de ação."
  },
  {
    title: "O que é Serviço Social",
    author: "José Paulo Netto / Marilda Iamamoto",
    category: "Introdução",
    desc: "Uma introdução clara e concisa sobre a profissão, ideal para estudantes iniciantes.",
    importance: "Alta - Nivelamento inicial."
  },
  {
    title: "Serviço Social: Direitos Sociais e Competências Profissionais",
    author: "CFESS/ABEPSS",
    category: "Legislação/Ética",
    desc: "Coletânea fundamental que reúne artigos sobre as competências exigidas na atualidade.",
    importance: "Obrigatória - Base normativa e ética."
  }
];

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    term: 'Assistência Social',
    definition: 'Política pública integrante da Seguridade Social, não contributiva, destinada a garantir proteção social a indivíduos e famílias em situação de vulnerabilidade.',
    category: 'Política Social',
    icon: <Heart size={18} />
  },
  {
    term: 'Cidadania',
    definition: 'Condição do indivíduo como sujeito de direitos civis, políticos e sociais garantidos pelo Estado.',
    category: 'Legislação',
    icon: <Globe size={18} />
  },
  {
    term: 'Controle Social',
    definition: 'Participação da sociedade civil na formulação, acompanhamento e fiscalização das políticas públicas, especialmente por meio de conselhos e conferências.',
    category: 'Participação',
    icon: <ShieldCheck size={18} />
  },
  {
    term: 'Demanda Social',
    definition: 'Necessidades e reivindicações apresentadas pela população aos serviços e políticas sociais.',
    category: 'Prática Profissional',
    icon: <MessageSquare size={18} />
  },
  {
    term: 'Direitos Sociais',
    definition: 'Direitos garantidos constitucionalmente, como saúde, educação, trabalho, assistência social, moradia e previdência.',
    category: 'Legislação',
    icon: <Scale size={18} />
  },
  {
    term: 'Ética Profissional',
    definition: 'Conjunto de princípios e values que orientam a atuação do/a assistente social, fundamentados no Código de Ética Profissional.',
    category: 'Ética',
    icon: <Compass size={18} />
  },
  {
    term: 'Instrumental Técnico-Operativo',
    definition: 'Conjunto de técnicas, instrumentos e estratégias utilizadas pelo assistente social, como entrevistas, visitas domiciliares, relatórios e pareceres.',
    category: 'Prática Profissional',
    icon: <Settings size={18} />
  },
  {
    term: 'Interdisciplinaridade',
    definition: 'Articulação entre diferentes áreas do conhecimento para compreender e intervir de forma integral na realidade social.',
    category: 'Prática Profissional',
    icon: <Layers size={18} />
  },
  {
    term: 'Mediação',
    definition: 'Processo pelo qual o assistente social intervém entre sujeitos, instituições e políticas para viabilizar direitos e acesso a serviços.',
    category: 'Prática Profissional',
    icon: <RefreshCw size={18} />
  },
  {
    term: 'Políticas Públicas',
    definition: 'Ações e programas desenvolvidos pelo Estado para atender às necessidades da população e garantir direitos sociais.',
    category: 'Política Social',
    icon: <Landmark size={18} />
  },
  {
    term: 'Proteção Social',
    definition: 'Conjunto de ações voltadas à prevenção e enfrentamento das situações de risco e vulnerabilidade social.',
    category: 'Política Social',
    icon: <Shield size={18} />
  },
  {
    term: 'Questão Social',
    definition: 'Conjunto das expressões das desigualdades da sociedade capitalista madura, que tem uma raiz comum: a produção social é cada vez mais coletiva e a apropriação dos seus resultados é cada vez mais privada.',
    category: 'Fundamentos',
    icon: <AlertTriangle size={18} />
  },
  {
    term: 'Rede Socioassistencial',
    definition: 'Articulação de serviços, programas, projetos e benefícios que compõem o sistema de proteção social.',
    category: 'Política Social',
    icon: <Network size={18} />
  },
  {
    term: 'Universalidade',
    definition: 'Princípio que assegura o acesso de todos os cidadãos às políticas públicas, independentemente de contribuição (no caso da saúde e assistência).',
    category: 'Ética',
    icon: <Activity size={18} />
  },
  {
    term: 'Vulnerabilidade Social',
    definition: 'Situação de fragilidade decorrente de fatores econômicos, sociais, culturais ou relacionais que limitam o acesso a direitos.',
    category: 'Fundamentos',
    icon: <Info size={18} />
  }
];

export const POLICIES_SUMMARY = [
  { id: 'sus', title: 'Saúde', desc: 'Sistema público universal fundamentado na integralidade e equidade, garantindo a saúde como direito de todos.' },
  { id: 'suas', title: 'Assistência Social', desc: 'Política não contributiva de proteção social organizada pelo SUAS através de níveis de complexidade.' },
  { id: 'prev', title: 'Previdência Social', desc: 'Sistema contributivo que garante rendimentos em situações de perda de capacidade laboral.' }
];

export const INTERNSHIP_MODELS = [
  { title: 'Relatório de Estágio', type: 'Template', desc: 'Estrutura básica para relatórios mensais e finais.' },
  { title: 'Plano de Intervenção', type: 'Template', desc: 'Guia para elaboração do projeto de intervenção no campo.' },
  { title: 'Estudo Social', type: 'Didático', desc: 'Exemplo de construção de parecer e estudo social com ética.' }
];
