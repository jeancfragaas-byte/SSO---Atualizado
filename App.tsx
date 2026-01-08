
import React, { useState, useMemo } from 'react';
import { AppSection } from './types';
import { NAV_ITEMS, GLOSSARY_DATA, POLICIES_SUMMARY, INTERNSHIP_MODELS, BIBLIOGRAPHY_DATA } from './constants';
import { 
  BookOpen, Scale, FileText, Heart, ShieldCheck, ExternalLink, 
  Briefcase, GraduationCap, ArrowLeft, Download, Clock, Users, 
  Target, Activity, Landmark, Compass, Building2, Lock, LayoutGrid, Info, 
  CheckCircle2, ShieldAlert, Search, Info as InfoIcon, PieChart, 
  ClipboardCheck, ArrowRight, School, Notebook, PenTool, Eye, UserCheck, 
  Rocket, SearchCheck, Building, TrendingUp, FileCheck, Globe, Gavel, 
  UserPlus, Award, AlertCircle, Quote, Home, Shield, Flag, UserMinus,
  RefreshCw, Book, MapPin, ClipboardList, MessageCircle, FileSearch, Scale as ScaleIcon,
  Settings, Library, BookMarked, Sparkles
} from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chama/Tocha */}
    <path d="M50 10C55 25 65 30 65 40C65 50 55 55 50 55C45 55 35 50 35 40C35 30 45 25 50 10Z" fill="url(#flameGradient)" />
    <circle cx="42" cy="28" r="2" fill="#FFB74D" />
    <circle cx="58" cy="28" r="2" fill="#FFB74D" />
    
    {/* Haste Central */}
    <path d="M50 50V75" stroke="#1E3A3A" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="52" r="4" fill="#1E3A3A" />
    <circle cx="50" cy="65" r="3" fill="#1E3A3A" />
    <circle cx="50" cy="73" r="3" fill="#1E3A3A" />
    
    {/* Base */}
    <path d="M38 80H62" stroke="#1E3A3A" strokeWidth="3" strokeLinecap="round" />
    <path d="M35 85H65" stroke="#1E3A3A" strokeWidth="5" strokeLinecap="round" />
    
    {/* Braços da Balança */}
    <path d="M30 45C35 35 45 42 50 42C55 42 65 35 70 45" stroke="#1E3A3A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Pratos */}
    <path d="M25 50L30 65H45L50 50" stroke="#1E3A3A" strokeWidth="0" fill="none" />
    <path d="M26 55C26 62 33 65 38 65C43 65 50 62 50 55H26Z" fill="#264D4D" stroke="#1E3A3A" strokeWidth="2" />
    <path d="M50 55C50 62 57 65 62 65C67 65 74 62 74 55H50Z" fill="#264D4D" stroke="#1E3A3A" strokeWidth="2" />
    
    {/* Detalhes de brilho nos pratos */}
    <path d="M45 58C46 58 48 59 48 61" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M69 58C70 58 72 59 72 61" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

    <defs>
      <linearGradient id="flameGradient" x1="50" y1="10" x2="50" y2="55" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="50%" stopColor="#FB8C00" />
        <stop offset="100%" stopColor="#E64A19" />
      </linearGradient>
    </defs>
  </svg>
);

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(GLOSSARY_DATA.map(item => item.category)));
    return ['Todos', ...cats];
  }, []);

  const filteredGlossary = useMemo(() => {
    return GLOSSARY_DATA.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const renderAcademicDetailed = () => {
    const handleBack = () => setSelectedDoc(null);

    if (selectedDoc === 'etica') {
      return (
        <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
          <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
            <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
          </button>

          <header className="border-b-4 border-brand-light pb-8 relative">
            <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Código de Ética</h1>
            <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
              "Resolução CFESS nº 273/93 - A bússola do Projeto Ético-Político."
            </p>
            <div className="absolute right-0 bottom-8 hidden md:block opacity-10">
              <Compass size={120} />
            </div>
          </header>

          <div className="space-y-12">
            <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
              <p className="text-lg">
                O <strong>Código de Ética do/a Assistente Social</strong>, instituído pela Resolução CFESS nº 273/93, é a materialização de um Projeto Ético-Político construído pela categoria ao longo de décadas. 
                Ele não é apenas um conjunto de normas, mas um instrumento que vincula o exercício profissional à defesa dos interesses da classe trabalhadora e à construção de uma sociedade mais justa e democrática.
              </p>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-10 w-2 bg-brand rounded-full"></div>
                 <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">1. Princípios Fundamentais</h2>
              </div>
              <p className="text-slate-600 mb-6">O Código está fundamentado em 11 princípios que norteiam a conduta do profissional, destacando-se:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Liberdade", d: "Valor ético central, visando a autonomia e emancipação plena dos indivíduos.", icon: <Flag className="text-brand" /> },
                  { t: "Direitos Humanos", d: "Defesa intransigente e recusa a qualquer forma de arbítrio ou autoritarismo.", icon: <ShieldCheck className="text-brand" /> },
                  { t: "Democracia", d: "Valor ético-político central, capaz de assegurar liberdade e equidade.", icon: <Globe className="text-brand" /> },
                  { t: "Diversidade", d: "Eliminação de preconceitos, respeito a gênero, etnia, religião e orientação sexual.", icon: <Users className="text-brand" /> },
                  { t: "Nova Ordem", d: "Opção por uma nova ordem societária, sem dominação ou exploração de classe.", icon: <Target className="text-brand" /> }
                ].map((p, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2rem] flex items-start gap-4 shadow-sm hover:border-brand transition-colors group">
                    <div className="p-3 bg-brand-light rounded-xl group-hover:bg-brand transition-colors">{p.icon}</div>
                    <div>
                      <h4 className="font-black text-slate-800 text-sm uppercase mb-1">{p.t}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-[3rem] shadow-xl text-white space-y-6">
                <h3 className="text-xl font-black uppercase text-brand flex items-center gap-3">
                  <UserCheck size={24} /> 2. Direitos e Deveres
                </h3>
                <div className="space-y-4 text-sm text-slate-300">
                  <p><strong className="text-white">Autonomia Profissional:</strong> Direito à ampla autonomia, garantindo a inviolabilidade do local de trabalho e documentos.</p>
                  <p><strong className="text-white">Usuários/as:</strong> Dever de democratizar informações e garantir participação. Vedado usar autoridade para cercear decisão.</p>
                  <p><strong className="text-white">Instituições:</strong> Dever de denunciar falhas que firam princípios éticos e lutar por condições dignas.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-100 p-8 rounded-[3rem] shadow-sm space-y-6">
                <h3 className="text-xl font-black uppercase text-slate-800 flex items-center gap-3">
                  <Lock size={24} className="text-brand" /> 3. Sigilo Profissional
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O sigilo é tratado tanto como um <strong>direito quanto como um dever</strong>. Ele protege o usuário em tudo o que o profissional venha a saber em função do seu trabalho.
                </p>
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3">
                   <AlertCircle className="text-rose-500 shrink-0" size={20} />
                   <p className="text-[11px] text-rose-800 font-medium">A quebra do sigilo só é admissível em situações de extrema gravidade, onde a omissão possa trazer prejuízo ao usuário, a terceiros ou à coletividade.</p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-10 w-2 bg-brand rounded-full"></div>
                 <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">4. Fiscalização e Penalidades</h2>
              </div>
              <p className="text-sm text-slate-600">Cabe ao sistema <strong>CFESS/CRESS</strong> zelar pela observância do Código. As penalidades podem variar conforme a gravidade:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Multa", "Advertência", "Suspensão", "Cassação"].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] text-center flex flex-col items-center gap-3 group hover:bg-slate-900 transition-colors">
                     <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-slate-800 transition-colors">
                        {i === 0 && <Scale className="text-slate-400" size={20}/>}
                        {i === 1 && <Info className="text-slate-400" size={20}/>}
                        {i === 2 && <Clock className="text-slate-400" size={20}/>}
                        {i === 3 && <UserMinus className="text-rose-400" size={20}/>}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-brand">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-brand-light/30 p-10 rounded-[3rem] border border-brand/20">
              <h3 className="text-xl font-black uppercase text-brand-deep mb-6 flex items-center gap-3">
                <RefreshCw size={24} /> 5. Atualizações Importantes
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                A edição de 2011 trouxe avanços como a adequação à <strong>linguagem de gênero</strong> (combatendo o machismo gramatical) e a substituição de "opção sexual" por <strong>"orientação sexual"</strong>, além da inclusão da "identidade de gênero" como condição protegida.
              </p>
            </section>

            <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center shrink-0 shadow-lg animate-pulse">
                  <Compass size={48} className="text-slate-900" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black uppercase tracking-tight text-brand">A Bússola Ética</h4>
                  <p className="text-lg font-medium leading-relaxed italic opacity-90 text-slate-100">
                    "Imagine que este código funciona como uma <strong>bússola ética</strong>: em um mar de pressões institucionais e desigualdades sociais, ele aponta invariavelmente para a direção da dignidade humana e da democracia, impedindo que o profissional se perca em práticas burocráticas ou autoritárias."
                  </p>
                </div>
              </div>
              <Compass size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 group-hover:rotate-45 transition-transform duration-1000" />
            </div>

            <div className="pt-8 flex justify-center">
                <a href="http://www.cfess.org.br/arquivos/CEP_CFESS-SITE.pdf" target="_blank" className="flex items-center justify-center gap-4 px-10 py-5 bg-slate-900 text-brand rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-xl group">
                    <Download size={24} className="group-hover:translate-y-1 transition-transform" /> Baixar Código Completo (PDF)
                </a>
            </div>
          </div>
        </div>
      );
    }
    
    if (selectedDoc === 'lei8662') {
      return (
        <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
          <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
            <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
          </button>

          <header className="border-b-4 border-brand-light pb-8 relative">
            <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Lei nº 8.662/93</h1>
            <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
              "Dispõe sobre a profissão de Assistente Social e dá outras providências."
            </p>
            <div className="absolute right-0 bottom-8 hidden md:block opacity-10">
              <Gavel size={120} />
            </div>
          </header>

          <div className="space-y-12">
            <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
              <p className="text-lg">
                A <strong>Lei nº 8.662, de 7 de junho de 1993</strong>, é o instrumento jurídico fundamental que dispõe sobre a profissão de Assistente Social no Brasil. 
                Ela substituiu a regulamentação anterior de 1957, representando um marco para a categoria ao imprimir à profissão uma dimensão não apenas técnica, mas também sociopolítica, 
                consolidando um projeto profissional voltado para a defesa da classe trabalhadora e a construção de uma sociedade mais justa.
              </p>
              <p className="text-lg">
                De acordo com as fontes, a definição e os pilares dessa lei podem ser detalhados nos seguintes pontos:
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3 text-brand-deep mb-2">
                  <UserPlus className="shrink-0" size={24} />
                  <h3 className="text-xl font-black uppercase tracking-tight">1. Requisitos para o Exercício</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A lei estabelece que o exercício da profissão é livre em todo o país, mas impõe condições rigorosas: o profissional deve possuir <strong>diploma de graduação em Serviço Social</strong>, oficialmente reconhecido e registrado, e obrigatoriamente realizar o <strong>prévio registro no Conselho Regional de Serviço Social (CRESS)</strong> da sua área de atuação. A designação "Assistente Social" é privativa daqueles habilitados conforme estas normas.
                </p>
              </div>

              <div className="bg-brand-light/30 p-8 rounded-[2.5rem] border border-brand/20 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3 text-brand-deep mb-2">
                  <Clock className="shrink-0" size={24} />
                  <h3 className="text-xl font-black uppercase tracking-tight">4. Jornada de Trabalho</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Uma mudança crucial foi introduzida pela <strong>Lei nº 12.317/2010</strong>, que acrescentou o Artigo 5º-A à Lei 8.662/93, instituindo a carga horária de <strong>30 horas semanais sem redução de salário</strong> para os assistentes sociais. Essa medida foi julgada constitucional de forma unânime pelo STF em 2020.
                </p>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-10 w-2 bg-brand rounded-full"></div>
                 <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Competências e Atribuições</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-slate-100 p-8 rounded-[3rem] shadow-sm relative overflow-hidden group hover:border-brand transition-colors">
                  <h4 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                    <Users size={20} className="text-slate-400" /> Competências (Art. 4)
                  </h4>
                  <p className="text-xs text-slate-500 mb-6 italic">Atividades que podem ser compartilhadas com outras categorias.</p>
                  <ul className="space-y-4">
                    {[
                      "Elaborar, implementar e avaliar políticas e programas sociais.",
                      "Prestar orientação social e encaminhar providências a indivíduos e grupos.",
                      "Realizar estudos socioeconômicos para fins de acesso a benefícios e serviços sociais."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group border-2 border-transparent hover:border-brand/50 transition-colors">
                  <h4 className="text-lg font-black text-brand mb-6 flex items-center gap-2">
                    <Award size={20} className="text-brand/50" /> Atribuições Privativas (Art. 5)
                  </h4>
                  <p className="text-xs text-brand/30 mb-6 italic">Exclusivas do Assistente Social.</p>
                  <ul className="space-y-4">
                    {[
                      "Coordenar, supervisionar e avaliar estudos, pesquisas e projetos na área de Serviço Social.",
                      "Prestar assessoria e consultoria em matéria de Serviço Social.",
                      "Realizar vistorias, perícias técnicas, laudos e pareceres sociais.",
                      "Magistério, coordenação de cursos e supervisão direta de estagiários de Serviço Social."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-300">
                        <ShieldCheck size={18} className="text-brand shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Lock size={120} className="absolute -right-10 -bottom-10 text-white opacity-5 rotate-12" />
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                  <Landmark className="text-brand-dark" size={28} /> 5. Sistema CFESS/CRESS
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A lei institui o <strong>Conselho Federal de Serviço Social (CFESS)</strong> e os <strong>Conselhos Regionais (CRESS)</strong> como uma entidade federativa com o objetivo de disciplinar e defender a profissão. O CFESS atua como órgão normativo e Tribunal Superior de Ética, enquanto os CRESS funcionam como órgãos executivos e de fiscalização em primeira instância.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                  <AlertCircle className="text-rose-500" size={28} /> 6. Análise Crítica
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Embora seja um pilar do projeto ético-político, fontes apontam fragilidades terminológicas. Críticos como Jonis Felippe destacam que termos como "matéria" ou "área" são vagos, dificultando a fiscalização. O processo legislativo resultou em perdas, como a retirada da obrigatoriedade em certas instituições e a classificação de tarefas históricas (como estudos socioeconômicos) apenas como competências genéricas.
                </p>
              </div>
            </section>

            <div className="bg-brand text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <Quote size={48} className="text-slate-900 opacity-60" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black uppercase tracking-tight">A Analogia da Casa</h4>
                  <p className="text-lg font-medium leading-relaxed italic opacity-90">
                    "A Lei 8.662/93 funciona como a <strong>escritura e a planta de uma casa</strong>: ela define quem tem a chave para entrar (os habilitados), quais cômodos são de uso comum (competências) e quais são quartos privativos onde só o dono pode entrar (atribuições privativas). Contudo, assim como uma planta antiga, algumas lines podem parecer borradas, exigindo interpretação constante dos conselhos para evitar que estranhos ocupem espaços que deveriam ser exclusivos."
                  </p>
                </div>
              </div>
              <Building2 size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="pt-8 flex justify-center">
                <a href="https://www.planalto.gov.br/ccivil_03/leis/l8662.htm" target="_blank" className="flex items-center justify-center gap-4 px-10 py-5 bg-slate-900 text-brand rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-xl group">
                    <ExternalLink size={24} className="group-hover:rotate-12 transition-transform" /> Ler Texto Oficial da Lei no Planalto
                </a>
            </div>
          </div>
        </div>
      );
    }

    if (selectedDoc === 'diretrizes') {
        return (
          <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
            <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-4 py-2 rounded-xl font-bold mb-6 hover:bg-brand transition-all group border border-brand/20">
              <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar
            </button>
            <header className="border-b border-brand-light pb-6">
              <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase">Diretrizes da ABEPSS</h1>
              <p className="text-slate-500 font-medium italic">O Currículo Mínimo de 1996</p>
            </header>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
                <p>Define a base da formação do assistente social no Brasil, estruturada em três núcleos fundamentais que garantem uma formação generalista e crítica.</p>
                <div className="space-y-4">
                    {[
                        { n: "1", t: "Fundamentos Teórico-Metodológicos", d: "Compreensão da vida social, da história e das teorias sociais." },
                        { n: "2", t: "Particularidade da Formação Social Brasileira", d: "Entendimento da realidade do Brasil, desigualdades e história." },
                        { n: "3", t: "Trabalho Profissional", d: "A instrumentalidade, ética e prática do serviço social no campo." }
                    ].map(item => (
                        <div key={item.n} className="flex items-center gap-4 p-5 bg-white border border-slate-100 shadow-sm rounded-3xl">
                            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-slate-900 font-black shrink-0">{item.n}</div>
                            <div>
                                <h5 className="font-black text-slate-800 text-sm">{item.t}</h5>
                                <p className="text-[11px] text-slate-500">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );
    }
    return null;
  };

  const renderSaudeDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-rose-600 bg-rose-50 px-4 py-2 rounded-xl font-bold mb-6 hover:bg-rose-100 transition-all group border border-rose-200">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar
        </button>
        <header className="border-b border-rose-100 pb-6">
          <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase">SUS - Sistema Único de Saúde</h1>
          <p className="text-slate-500 font-medium italic">Saúde como Direito de Todos e Dever do Estado</p>
        </header>
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Universalidade", d: "Acesso para todo e qualquer cidadão sem discriminação." },
              { t: "Integralidade", d: "Atendimento em todos os níveis de complexidade do sistema." },
              { t: "Equidade", d: "Tratar desigualmente os desiguais para promover justiça." }
            ].map((p, i) => (
              <div key={i} className="p-5 bg-rose-50 border border-rose-100 rounded-2xl">
                <h5 className="font-bold text-rose-900 mb-1">{p.t}</h5>
                <p className="text-[10px] text-rose-700">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-lg">O SUS fundamenta-se na descentralização, com direção única em cada esfera de governo, e na participação da comunidade através dos Conselhos de Saúde.</p>
        </div>
      </div>
    );
  };

  const renderAssistenciaDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-xl font-bold mb-6 hover:bg-amber-100 transition-all group border border-amber-200">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar
        </button>
        <header className="border-b border-amber-100 pb-6">
          <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase">SUAS - Assistência Social</h1>
          <p className="text-slate-500 font-medium italic">Proteção Social, Vigilância Socioassistencial e Defesa de Direitos</p>
        </header>
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-amber-100 rounded-3xl shadow-sm">
              <h4 className="font-black text-amber-800 mb-3 flex items-center gap-2"><Home size={18}/> Proteção Básica (CRAS)</h4>
              <p className="text-xs text-slate-600">Unidade pública estatal que atua na prevenção de situações de risco através do PAIF (Proteção e Atendimento Integral à Família).</p>
            </div>
            <div className="p-6 bg-white border border-amber-100 rounded-3xl shadow-sm">
              <h4 className="font-black text-amber-800 mb-3 flex items-center gap-2"><ShieldAlert size={18}/> Proteção Especial (CREAS)</h4>
              <p className="text-xs text-slate-600">Atendimento especializado a famílias e indivíduos com direitos violados, como violência, exploração ou negligência.</p>
            </div>
          </div>
          <p className="text-lg">A Assistência Social é um direito do cidadão e dever do Estado, sendo uma política de Seguridade Social não contributiva.</p>
        </div>
      </div>
    );
  };

  const renderEducacaoDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl font-bold mb-6 hover:bg-indigo-100 transition-all group border border-indigo-200">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar
        </button>
        <header className="border-b border-indigo-100 pb-6">
          <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase">Política de Educação</h1>
          <p className="text-slate-500 font-medium italic">Lei 13.935/2019 e a atuação do Serviço Social</p>
        </header>
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
          <p className="text-lg">A inserção de assistentes sociais na educação básica pública é uma conquista histórica que visa garantir o acesso, a permanência e o sucesso escolar dos estudantes.</p>
          <div className="bg-slate-50 p-6 rounded-3xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2">Papel do Assistente Social na Escola:</h4>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>Identificação de barreiras socioeconômicas ao aprendizado.</li>
              <li>Mediação de conflitos entre escola, família e comunidade.</li>
              <li>Encaminhamento para a rede de proteção social (CRAS, CREAS, CAPS).</li>
              <li>Combate à evasão escolar e ao trabalho infantil.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderInstrumentsSection = () => {
    return (
      <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
        <header className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-brand-deep text-brand rounded-[2rem] shadow-lg"><PenTool size={36} /></div>
                <div>
                  <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Instrumentos Técnico-Operativos</h2>
                  <p className="text-slate-500 font-medium">As ferramentas que materializam a prática profissional e o compromisso ético.</p>
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Entrevista", 
                icon: <MessageCircle />, 
                desc: "Diálogo intencional e técnico para coleta de dados, compreensão da realidade e orientação qualificada.",
                details: "Não é apenas uma conversa, mas um instrumento de escuta ativa e interpretação da demanda."
              },
              { 
                title: "Visita Domiciliar", 
                icon: <MapPin />, 
                desc: "Observação direta do cotidiano, rede de relações e condições de vida no habitat do usuário.",
                details: "Fundamental para compreender a realidade socioeconômica e dinâmica familiar real."
              },
              { 
                title: "Diário de Campo", 
                icon: <ClipboardList />, 
                desc: "Registro sistemático e contínuo das ações, impressões e reflexões críticas do profissional.",
                details: "Instrumento vital para a auto-avaliação e o planejamento das intervenções futuras."
              },
              { 
                title: "Relatório Social", 
                icon: <FileText />, 
                desc: "Documento descritivo e interpretativo que sintetiza uma situação social específica.",
                details: "Visa informar, subsidiar decisões e registrar a trajetória de atendimento do usuário."
              },
              { 
                title: "Parecer Social", 
                icon: <FileSearch />, 
                desc: "Opinião técnica fundamentada e conclusiva sobre uma matéria de Serviço Social.",
                details: "Deve ser pautado na teoria e na ética, oferecendo uma análise conclusiva sobre o caso."
              },
              { 
                title: "Laudo Social", 
                icon: <ScaleIcon />, 
                desc: "Documento resultante de perícia, com análise profunda para subsidiar decisões judiciais.",
                details: "Exige rigor técnico e é privativo do assistente social em contextos de perícia."
              }
            ].map((inst, i) => (
              <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col gap-6">
                <div className="w-14 h-14 bg-brand-light text-brand-dark rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-slate-900 transition-colors shadow-sm">{inst.icon}</div>
                <div>
                    <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight uppercase">{inst.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{inst.desc}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mt-auto">
                    <p className="text-[11px] text-slate-400 italic leading-relaxed">{inst.details}</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
              </div>
            ))}
        </div>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <InfoIcon size={48} className="text-slate-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight text-brand">Instrumentalidade</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90 text-slate-100">
                  "A instrumentalidade é a mediação entre a <strong>teoria</strong> e a <strong>prática</strong>. Não se resume ao uso mecânico de técnicas, mas sim à capacidade do profissional de utilizar seu arsenal técnico para transformar a realidade social."
                </p>
              </div>
            </div>
            <Settings size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 group-hover:rotate-180 transition-transform duration-1000" />
        </section>
      </div>
    );
  };

  const renderBibliographySection = () => {
    return (
      <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
        <header className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 text-blue-600 rounded-[2rem] shadow-lg"><Library size={36} /></div>
                <div>
                  <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Sugestões Bibliográficas</h2>
                  <p className="text-slate-500 font-medium">As leituras fundamentais que sustentam o conhecimento crítico do Serviço Social.</p>
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BIBLIOGRAPHY_DATA.map((book, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex gap-6">
              <div className="w-24 h-32 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:border-brand group-hover:bg-brand-light transition-all">
                <BookMarked size={40} className="text-slate-300 group-hover:text-brand" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-brand-light text-brand-deep rounded-full text-[9px] font-black uppercase tracking-widest">{book.category}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 tracking-tight leading-tight">{book.title}</h3>
                <p className="text-brand-dark font-bold text-sm">{book.author}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{book.desc}</p>
                <div className="pt-2 flex items-center gap-2">
                  <Target size={14} className="text-brand" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">{book.importance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-200 text-center space-y-4">
           <h4 className="text-xl font-black text-slate-800 uppercase">Dica de Estudo</h4>
           <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed italic">
             "Não busque apenas decorar conceitos. Tente correlacionar as teorias clássicas com as expressões da questão social que você observa em seu estágio."
           </p>
        </div>
      </div>
    );
  };

  const renderAboutSection = () => {
    return (
      <div className="space-y-12 animate-in slide-in-from-right-4 duration-300 max-w-4xl mx-auto">
        <header className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="p-4 bg-brand text-slate-900 rounded-[2rem] shadow-lg"><InfoIcon size={36} /></div>
                <div>
                  <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Sobre o Ser Social</h2>
                  <p className="text-slate-500 font-medium">Conectando estudantes ao conhecimento que transforma realidades.</p>
                </div>
            </div>
        </header>

        <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-48 h-48 bg-brand-light rounded-[3rem] flex items-center justify-center border-2 border-brand/20 shrink-0">
                    <Logo className="w-32 h-32" />
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Nossa Missão</h3>
                    <p className="text-slate-600 leading-relaxed">
                        O <strong>Ser Social</strong> nasceu da necessidade de centralizar as principais normativas, legislações e instrumentos técnicos da profissão em um único ecossistema digital acessível, intuitivo e moderno.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Acreditamos que o acesso rápido à informação de qualidade é um pilar fundamental para uma formação crítica e para a materialização do <strong>Projeto Ético-Político</strong> no cotidiano profissional.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                {[
                    { t: "Offline First", d: "Acesse os conteúdos essenciais de qualquer lugar.", i: <Clock className="text-blue-500" /> },
                    { t: "Foco Técnico", i: <Target className="text-brand" />, d: "Conteúdo curado especificamente para as necessidades do estudante." }
                ].map((f, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-[2.5rem] space-y-3 border border-slate-100">
                        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm">{f.i}</div>
                        <h4 className="font-black text-slate-800 text-xs uppercase">{f.t}</h4>
                        <p className="text-[10px] text-slate-500 leading-tight">{f.d}</p>
                    </div>
                ))}
            </div>
        </section>

        <footer className="text-center pt-8 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Versão 2.5.0 • Estável</p>
            <p className="text-[11px] text-slate-300 italic italic leading-relaxed">"O Serviço Social não é um favor, é um direito. E a educação é a ferramenta para defendê-lo."</p>
        </footer>
      </div>
    );
  }

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.HOME:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="py-12 px-8 bg-gradient-to-br from-brand via-brand-dark to-brand-deep text-white rounded-[3rem] shadow-2xl mb-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shrink-0 shadow-inner group overflow-hidden">
                <Logo className="w-32 h-32 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <h1 className="text-5xl font-black mb-4 tracking-tighter">Ser Social</h1>
                <p className="text-xl opacity-90 max-w-2xl font-medium leading-relaxed">O ecossistema informativo para o estudante de Serviço Social. Conhecimento técnico e offline.</p>
              </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                { id: AppSection.ACADEMIC, title: "Acadêmico", icon: <BookOpen size={32}/>, desc: "Glossário, legislações e diretrizes curriculares.", color: "text-brand-dark" },
                { id: AppSection.POLICIES, title: "Políticas Públicas", icon: <Scale size={32}/>, desc: "Guia completo de Saúde, Assistência e Previdência.", color: "text-blue-500" },
                { id: AppSection.INSTRUMENTS, title: "Instrumentos", icon: <PenTool size={32}/>, desc: "Entrevistas, visitas domiciliares, relatórios e pareceres.", color: "text-brand-deep" },
                { id: AppSection.BIBLIOGRAPHY, title: "Sugestões Bibliográficas", icon: <Library size={32}/>, desc: "As obras clássicas e contemporâneas fundamentais.", color: "text-blue-600" },
                { id: AppSection.INTERNSHIP, title: "Apoio ao Estágio", icon: <Briefcase size={32}/>, desc: "Modelos de relatórios e guia de postura profissional.", color: "text-amber-500" },
                { id: AppSection.CAREER, title: "Carreira", icon: <Rocket size={32}/>, desc: "Planejador de mercado, radar de concursos e áreas de atuação.", color: "text-purple-500" },
                { id: AppSection.SELFCARE, title: "Autocuidado", icon: <Heart size={32}/>, desc: "Resistência profissional e saúde mental.", color: "text-rose-500" },
                { id: AppSection.ABOUT, title: "Sobre a Plataforma", icon: <InfoIcon size={32}/>, desc: "Nossa missão e os pilares do Ser Social.", color: "text-slate-500" }
              ].map(card => (
                <div key={card.id} onClick={() => { setCurrentSection(card.id); setSelectedDoc(null); }} className="group cursor-pointer bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-brand-dark transition-all hover:shadow-2xl flex items-start gap-6">
                  <div className={`bg-slate-50 ${card.color} p-5 rounded-3xl group-hover:bg-brand group-hover:text-slate-900 transition-colors`}>{card.icon}</div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 text-slate-800 tracking-tight leading-tight">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case AppSection.ACADEMIC:
        if (selectedDoc) return renderAcademicDetailed();
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header>
                <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3 uppercase tracking-tighter">
                    <BookOpen className="text-brand-dark" /> Biblioteca Acadêmica
                </h2>
                <p className="text-slate-500 text-sm mt-1">Conhecimento normativo e conceitual para a sua formação.</p>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Lei nº 8.662/93', id: 'lei8662', icon: <Landmark className="text-brand" /> }, 
                { label: 'Código de Ética', id: 'etica', icon: <Compass className="text-brand" /> },
                { label: 'Diretrizes ABEPSS', id: 'diretrizes', icon: <LayoutGrid className="text-brand" /> }
              ].map(item => (
                <div key={item.id} onClick={() => setSelectedDoc(item.id)} className="p-6 bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all cursor-pointer hover:border-brand group flex flex-col gap-4 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center group-hover:bg-brand transition-colors">{item.icon}</div>
                  <h4 className="font-black text-slate-800 text-sm leading-tight">{item.label}</h4>
                </div>
              ))}
            </div>

            <section className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h3 className="text-2xl font-black text-brand-deep uppercase tracking-tighter">Glossário Técnico</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Buscar conceito..." 
                            className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-brand outline-none w-full sm:w-72 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                  {categories.map(cat => (
                      <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === cat ? 'bg-brand text-slate-900 border-brand shadow-lg' : 'bg-white text-slate-400 border-slate-200 hover:border-brand'}`}>
                          {cat}
                      </button>
                  ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGlossary.map((item) => (
                  <div key={item.term} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-5">
                      <div className="text-brand-dark bg-brand-light p-4 rounded-2xl flex-shrink-0 group-hover:bg-brand group-hover:text-slate-900 transition-colors">{item.icon || <Info />}</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <h4 className="font-black text-brand-deep text-lg">{item.term}</h4>
                            <span className="text-[9px] font-black text-slate-400 uppercase px-2 py-0.5 bg-slate-50 rounded-lg">{item.category}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.definition}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case AppSection.POLICIES:
        if (selectedDoc === 'sus-detalhado') return renderSaudeDetailed();
        if (selectedDoc === 'suas-detalhado') return renderAssistenciaDetailed();
        if (selectedDoc === 'prev-detalhado') return <div className="p-10 text-center text-slate-500 font-bold">Resumo da Previdência Social disponível no manual do usuário.</div>;
        if (selectedDoc === 'edu-detalhado') return renderEducacaoDetailed();
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header className="space-y-4">
                <div className="flex items-center gap-3">
                    <Scale size={42} className="text-brand-dark" />
                    <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Políticas Públicas</h2>
                </div>
                <p className="text-slate-500 font-medium max-w-2xl">O assistente social é o executor e o gestor das políticas sociais no Brasil. Conheça as bases da Seguridade Social.</p>
            </header>

            <section className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                    <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Comparativo de Acesso</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="p-6 font-black text-slate-400 text-[10px] uppercase">Política</th>
                                <th className="p-6 font-black text-slate-400 text-[10px] uppercase">Caráter</th>
                                <th className="p-6 font-black text-slate-400 text-[10px] uppercase">Público-Alvo</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <tr>
                                <td className="p-6 font-black text-rose-600">Saúde (SUS)</td>
                                <td className="p-6 text-slate-600">Não Contributivo</td>
                                <td className="p-6"><span className="px-4 py-1.5 bg-rose-50 text-rose-700 rounded-full text-[10px] font-black uppercase">Universal</span></td>
                            </tr>
                            <tr>
                                <td className="p-6 font-black text-indigo-600">Educação</td>
                                <td className="p-6 text-slate-600">Não Contributivo</td>
                                <td className="p-6"><span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase">Universal</span></td>
                            </tr>
                            <tr>
                                <td className="p-6 font-black text-amber-600">Assistência (SUAS)</td>
                                <td className="p-6 text-slate-600">Não Contributivo</td>
                                <td className="p-6"><span className="px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-[10px] font-black uppercase">Seletivo (Necessidade)</span></td>
                            </tr>
                            <tr>
                                <td className="p-6 font-black text-blue-600">Previdência</td>
                                <td className="p-6 text-slate-600 font-bold">Contributivo</td>
                                <td className="p-6"><span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase">Contribuintes</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'sus', title: 'Saúde', icon: <Heart className="text-rose-500" />, color: 'border-rose-100', bg: 'bg-rose-50' },
                { id: 'edu', title: 'Educação', icon: <School className="text-indigo-500" />, color: 'border-indigo-100', bg: 'bg-indigo-50' },
                { id: 'suas', title: 'Assistência', icon: <ShieldCheck className="text-amber-500" />, color: 'border-amber-100', bg: 'bg-amber-50' },
                { id: 'prev', title: 'Previdência', icon: <Lock className="text-blue-500" />, color: 'border-blue-100', bg: 'bg-blue-50' }
              ].map(policy => (
                <div key={policy.id} className={`p-8 rounded-[2.5rem] border ${policy.color} ${policy.bg} shadow-sm flex flex-col gap-6 group hover:shadow-2xl transition-all`}>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">{policy.icon}</div>
                  <h3 className="text-xl font-black text-slate-800">{policy.title}</h3>
                  <button onClick={() => setSelectedDoc(`${policy.id}-detalhado`)} className="mt-auto w-full py-3 bg-white text-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm border border-slate-100">
                    Ver Guia Técnico
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case AppSection.INSTRUMENTS:
        return renderInstrumentsSection();

      case AppSection.BIBLIOGRAPHY:
        return renderBibliographySection();

      case AppSection.ABOUT:
        return renderAboutSection();

      case AppSection.INTERNSHIP:
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="p-4 bg-brand-deep text-brand rounded-[2rem] shadow-lg"><Briefcase size={36} /></div>
                  <div>
                    <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Apoio ao Estágio</h2>
                    <p className="text-slate-500 font-medium">O momento decisivo da sua formação profissional.</p>
                  </div>
               </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Observação', icon: <Eye />, desc: 'Análise do território e da rotina institucional.', color: 'text-blue-500' },
                  { title: 'Co-participação', icon: <Users />, desc: 'Atuação direta com o supervisor de campo.', color: 'text-amber-500' },
                  { title: 'Intervenção', icon: <PenTool />, desc: 'Execução do seu projeto de intervenção.', color: 'text-brand-dark' }
                ].map((phase, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                    <div className={`${phase.color} mb-6 group-hover:scale-110 transition-transform`}>{phase.icon}</div>
                    <h4 className="font-black text-slate-800 mb-2 text-lg">{phase.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{phase.desc}</p>
                    <div className="absolute -right-3 -bottom-3 text-[80px] font-black opacity-[0.03] select-none">{i+1}</div>
                  </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="space-y-6">
                <h3 className="text-2xl font-black text-brand-deep flex items-center gap-3 uppercase tracking-tighter"><UserCheck className="text-brand-dark" /> Postura Profissional</h3>
                <div className="space-y-4">
                  {[
                    { t: "Sigilo", d: "Não exponha os dados do usuário em redes sociais ou conversas informais." },
                    { t: "Instrumentalidade", d: "Prepare-se para visitas domiciliares com roteiros claros." },
                    { t: "Ética", d: "O assistente social defende direitos, não concede favores." }
                  ].map((p, i) => (
                    <div key={i} className="p-5 bg-white border border-slate-100 rounded-[2rem] flex items-start gap-4 shadow-sm">
                      <div className="mt-1 w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                      <div>
                        <strong className="text-sm text-slate-800">{p.t}</strong>
                        <p className="text-xs text-slate-500 mt-1">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="space-y-6">
                <h3 className="text-2xl font-black text-brand-deep flex items-center gap-3 uppercase tracking-tighter"><ClipboardCheck className="text-brand-dark" /> Kit de Estágio</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Código de Ética", "Diário de Campo", "Caneta", "Identificação", "Lei 8.662/93", "Garrafa de Água"].map((item, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-[11px] font-black text-slate-600 group hover:border-brand transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand group-hover:scale-125 transition-transform" />
                        {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="space-y-8">
              <h3 className="text-2xl font-black text-brand-deep flex items-center gap-3 uppercase tracking-tighter"><FileText className="text-brand-dark" /> Templates de Documentos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INTERNSHIP_MODELS.map((model, i) => (
                  <div key={i} className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-4 bg-brand-light text-brand rounded-2xl group-hover:bg-brand group-hover:text-slate-900 transition-colors"><FileText size={24} /></div>
                        <span className="text-[10px] font-black text-slate-300 uppercase">{model.type}</span>
                    </div>
                    <h4 className="font-black text-slate-800 text-lg mb-3 tracking-tight">{model.title}</h4>
                    <p className="text-xs text-slate-500 mb-8 flex-1 leading-relaxed">{model.desc}</p>
                    <button className="w-full py-4 bg-slate-900 text-brand rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-lg">Acessar Modelo</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case AppSection.CAREER:
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div className="flex items-center gap-4">
                  <div className="p-4 bg-purple-600 text-white rounded-[2rem] shadow-xl"><Rocket size={36} /></div>
                  <div>
                    <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Planejador de Carreira</h2>
                    <p className="text-slate-500 font-medium">Estratégias de inserção e crescimento no mercado social.</p>
                  </div>
               </div>
            </header>

            <section className="space-y-8">
              <h3 className="text-2xl font-black text-brand-deep flex items-center gap-3 uppercase tracking-tighter"><SearchCheck className="text-brand-dark" /> Áreas de Atuação</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Sociojurídico", icon: <Scale />, color: "bg-blue-50 text-blue-600", desc: "TJ, Defensoria, MP. Foco em perícias, laudos e medidas socioeducativas." },
                  { title: "Saúde", icon: <Activity />, color: "bg-rose-50 text-rose-600", desc: "Hospitais e CAPS. Atendimento integral à família e viabilização de direitos." },
                  { title: "Empresas", icon: <Building />, color: "bg-slate-100 text-slate-600", desc: "Responsabilidade Social e ESG. Bem-estar dos colaboradores." },
                  { title: "Educação", icon: <School />, color: "bg-indigo-50 text-indigo-600", desc: "Permanência escolar e combate a violações de direitos no ambiente escolar." },
                  { title: "Terceiro Setor", icon: <Globe />, color: "bg-amber-50 text-amber-600", desc: "Gestão de ONGs e captação de recursos para projetos de impacto." },
                  { title: "Estado (SUAS)", icon: <Landmark />, color: "bg-brand-light text-brand-deep", desc: "CRAS, CREAS e Gestão Pública. Carreira estável via concurso." }
                ].map((area, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${area.color} group-hover:scale-110 transition-transform shadow-sm`}>{area.icon}</div>
                    <h4 className="font-black text-slate-800 text-lg tracking-tight">{area.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{area.desc}</p>
                    <button className="text-[10px] font-black text-brand-dark uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Ver Detalhes <ArrowRight size={16} /></button>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
               <h3 className="text-2xl font-black text-brand-deep flex items-center gap-3 uppercase tracking-tighter"><TrendingUp className="text-brand-dark" /> Roadmap Profissional</h3>
               <div className="relative p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                  <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-50 -translate-y-1/2 hidden lg:block" />
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                     {[
                       { label: "Formação", step: "1", desc: "Domínio teórico e ético." },
                       { label: "Prática", step: "2", desc: "Estágio e vivência real." },
                       { label: "CRESS", step: "3", desc: "Habilitação profissional." },
                       { label: "Especialista", step: "4", desc: "Nicho e autoridade." }
                     ].map((point, i) => (
                       <div key={i} className="relative z-10 flex flex-col items-center text-center gap-6">
                          <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-slate-900 shadow-xl border-4 border-white font-black text-xl">{point.step}</div>
                          <div>
                             <h4 className="font-black text-slate-800 text-lg tracking-tight">{point.label}</h4>
                             <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{point.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </section>
          </div>
        );

      case AppSection.SELFCARE:
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header className="flex items-center gap-4">
                <div className="p-4 bg-rose-100 text-rose-600 rounded-[2rem] shadow-lg"><Heart size={36} /></div>
                <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Resistência e Autocuidado</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-rose-50 p-10 rounded-[3rem] border border-rose-100 shadow-sm space-y-6">
                    <h3 className="text-2xl font-black text-rose-900 tracking-tight">Cuidar de quem cuida</h3>
                    <p className="text-rose-800 leading-relaxed">O Serviço Social lida diariamente com a dor e a exclusão. O autocuidado não é luxo, é estratégia de resistência profissional para não sucumbir ao adoecimento ocupacional.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { t: "Supervisão", d: "A troca com colegas e supervisores ajuda a processar os casos mais pesados." },
                        { t: "Desconexão", d: "Estabeleça limites claros entre o trabalho e sua vida pessoal." },
                        { t: "Educação Permanente", d: "Saber o que fazer traz segurança e reduz a ansiedade." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex items-center gap-4">
                            <div className="w-2 h-10 bg-rose-400 rounded-full" />
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">{item.t}</h4>
                                <p className="text-xs text-slate-500">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="min-h-screen pb-24 lg:pb-8 flex flex-col lg:flex-row max-w-7xl mx-auto px-4 lg:px-0">
      <nav className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-100 h-screen sticky top-0 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-12 text-brand-deep group cursor-pointer" onClick={() => setCurrentSection(AppSection.HOME)}>
            <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center group-hover:bg-brand transition-colors p-1 overflow-hidden border border-brand/20">
              <Logo className="w-full h-full" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Ser Social</span>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto no-scrollbar">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }} className={`w-full flex items-center gap-4 px-6 py-4 rounded-[2rem] transition-all ${currentSection === item.id ? 'bg-brand text-slate-900 shadow-xl font-black scale-105' : 'text-slate-400 hover:bg-slate-50 hover:text-brand-deep'}`}>
              <span className={currentSection === item.id ? 'text-slate-900' : 'text-slate-300'}>{item.icon}</span>
              <span className="text-sm uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-auto pt-8 border-t border-slate-50 text-[10px] text-slate-300 font-bold uppercase text-center">
            Projeto Ético-Político Profissional
        </div>
      </nav>

      <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-xl border border-white/10 px-4 py-4 flex justify-around items-center z-50 rounded-[2.5rem] shadow-2xl">
        {NAV_ITEMS.filter(i => [AppSection.HOME, AppSection.ACADEMIC, AppSection.INSTRUMENTS, AppSection.SELFCARE, AppSection.ABOUT].includes(i.id)).map(item => (
          <button key={item.id} onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }} className={`flex flex-col items-center gap-1 transition-all ${currentSection === item.id ? 'text-brand scale-110' : 'text-white/40'}`}>
            {item.icon}
            <span className="text-[7px] font-black uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>

      <main className="flex-1 p-6 lg:p-12">
        <div className="max-w-5xl mx-auto">{renderSection()}</div>
      </main>
    </div>
  );
};

export default App;
