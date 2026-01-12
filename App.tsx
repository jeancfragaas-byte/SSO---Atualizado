
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
  Settings, Library, BookMarked, Sparkles, Binary, Microscope, Clipboard, UserRound, HandHeart,
  User, ShieldHalf, MessageSquare, Layers, AlertTriangle, Coffee, ShieldPlus, Fingerprint,
  Wrench, FileEdit, Network, Puzzle, Brain, Lightbulb, Zap, Handshake, UsersRound,
  FileSearch as FileSearchIcon, ListChecks, Presentation,
  TrendingDown, Ban, Link as LinkIcon, Handshake as HandshakeIcon,
  HeartPulse, UserX, Stethoscope, History, Coins, Map
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

  const handleGlossaryDetail = (term: string) => {
    const lowerTerm = term.toLowerCase();
    
    if (lowerTerm.includes('assistência social')) {
      setCurrentSection(AppSection.POLICIES);
      setSelectedDoc('suas-detalhado');
    } else if (lowerTerm.includes('cidadania')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('cidadania-detalhada');
    } else if (lowerTerm.includes('controle social')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('controle-social-detalhado');
    } else if (lowerTerm.includes('demanda social')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('demanda-social-detalhada');
    } else if (lowerTerm.includes('direitos sociais')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('direitos-sociais-detalhada');
    } else if (lowerTerm.includes('ética profissional')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('etica-profissional-detalhada');
    } else if (lowerTerm.includes('instrumental técnico-operativo')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('instrumental-detalhado');
    } else if (lowerTerm.includes('interdisciplinaridade')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('interdisciplinaridade-detalhada');
    } else if (lowerTerm.includes('mediação')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('mediacao-detalhada');
    } else if (lowerTerm.includes('questão social')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('questao-social-detalhada');
    } else if (lowerTerm.includes('políticas públicas')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('politicas-publicas-detalhada');
    } else if (lowerTerm.includes('proteção social')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('protecao-social-detalhada');
    } else if (lowerTerm.includes('rede socioassistencial')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('rede-socioassistencial-detalhada');
    } else if (lowerTerm.includes('universalidade')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('universalidade-detalhada');
    } else if (lowerTerm.includes('vulnerabilidade social')) {
      setCurrentSection(AppSection.ACADEMIC);
      setSelectedDoc('vulnerabilidade-social-detalhada');
    } else if (lowerTerm.includes('redes') || lowerTerm.includes('socioassistencial')) {
      setCurrentSection(AppSection.POLICIES);
      setSelectedDoc('suas-detalhado');
    } else {
      setSelectedDoc(null);
      setCurrentSection(AppSection.ACADEMIC);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderUniversalidadeDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-brand-dark pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Universalidade</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "Um direito para todos, uma responsabilidade do Estado e um compromisso da profissão."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark">
            <Globe size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Universalidade</strong> é um princípio das políticas sociais e do Serviço Social que estabelece que todos os indivíduos têm direito a acesso aos serviços e benefícios sociais, independentemente de sua condição econômica, social, étnica ou cultural. Ela garante que os direitos sociais sejam oferecidos de forma abrangente e igualitária, sem discriminação.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-brand rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Pilares no Brasil</h2>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">Prevista na Constituição Federal de 1988, the universalidade orienta as principais políticas públicas:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: "Saúde", d: "Atendimento a toda the população via SUS.", icon: <Heart className="text-rose-500" /> },
                { t: "Educação", d: "Garantia de acesso e permanência para todos.", icon: <School className="text-indigo-500" /> },
                { t: "Assistência", d: "Disponível a todos os que necessitarem.", icon: <ShieldPlus className="text-amber-500" /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col gap-4 shadow-sm hover:bg-white hover:border-brand transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">{item.t}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black text-brand uppercase flex items-center gap-3">
                <Target className="text-brand" size={28} /> O Fazer Profissional
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Para o(a) assistente social, the universalidade exige uma postura ética e técnica para:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Intervenção Inclusiva", d: "Planejar ações que assegurem que nenhum grupo social seja excluído do acesso." },
                  { t: "Defesa da Equidade", d: "Garantir que as políticas alcancem todos, respeitando the diversidade de cada território." },
                  { t: "Combate à Seletividade", d: "Denunciar e enfrentar práticas que restrinjam indevidamente o acesso a direitos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm items-center">
                    <CheckCircle2 size={20} className="text-brand shrink-0" />
                    <div>
                      <h5 className="font-bold text-slate-100 text-xs uppercase mb-1">{item.t}</h5>
                      <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Activity size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 rotate-12 transition-transform group-hover:scale-110 duration-1000" />
          </section>

          <section className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                <RefreshCw className="text-brand-dark" size={28} /> Articulações Essenciais
              </h3>
              <p className="text-slate-600 leading-relaxed">
                No Serviço Social, the universalidade não caminha sozinha. Ela se articula com outros princípios fundamentais:
              </p>
              <div className="flex flex-wrap gap-3">
                {["Equidade", "Participação Social", "Intersetorialidade", "Justiça Social", "Cidadania Plena"].map((princ, i) => (
                  <span key={i} className="px-5 py-2.5 bg-brand-light text-brand-deep rounded-full text-xs font-black uppercase tracking-widest border border-brand/20">
                    {princ}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="bg-brand text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <UsersRound size={48} className="text-slate-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">O Horizonte da Dignidade</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "Universalidade significa que the dignidade humana não pode ser fragmentada. Se uma única pessoa é excluída de um direito social, the democracia de todos está em risco."
                </p>
              </div>
            </div>
            <Globe size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    );
  };

  const renderRedeSocioassistencialDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-emerald-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Rede Socioassistencial</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A engrenagem do SUAS: integração e capilaridade territorial para the garantia de direitos."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-emerald-600">
            <Network size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Rede Socioassistencial</strong> é o conjunto articulado de serviços, programs, projetos e benefícios que compõem the assistência social em um território, funcionando de forma integrada para atender às necessidades da população e garantir direitos. Ela organiza the atuação do Sistema Único de Assistência Social (SUAS), garantindo que ações preventivas e de proteção especial sejam oferecidas de maneira coordenada.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-emerald-500 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">O que envolve the Rede</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  t: "Proteção Social Básica", 
                  d: "Realizados em CRAS, voltados à prevenção de vulnerabilidades e ao fortalecimento de vínculos familiares e comunitários.", 
                  icon: <Home /> 
                },
                { 
                  t: "Proteção Social Especial", 
                  d: "Realizados em CREAS, voltados a situações de risco ou violação de direitos, como violência, exploração ou abandono.", 
                  icon: <ShieldAlert /> 
                },
                { 
                  t: "Programas e Benefícios", 
                  d: "Como o Bolsa Família, benefícios eventuais e programs de convivência e fortalecimento de vínculos.", 
                  icon: <HandHeart /> 
                },
                { 
                  t: "Articulação Intersetorial", 
                  d: "Envolvimento direto com Saúde, Educação, Habitação, Justiça e organizações da sociedade civil.", 
                  icon: <LinkIcon /> 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] flex flex-col gap-4 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors text-emerald-600">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-emerald-900 text-sm uppercase">{item.t}</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black text-brand uppercase flex items-center gap-3">
                <Target className="text-brand" size={28} /> Missão do(a) Assistente Social
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Para o profissional, the compreensão e atuação na rede socioassistencial são essenciais para:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { t: "Acesso Efetivo", d: "Garantir acesso integrado e resolutivo aos serviços." },
                  { t: "Continuidade", d: "Promover the continuidade do cuidado e proteção social." },
                  { t: "Coordenação", d: "Favorecer the intersetorialidade entre diferentes políticas." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <CheckCircle2 size={18} className="text-brand mb-3" />
                    <h5 className="font-bold text-slate-100 text-xs uppercase mb-1">{item.t}</h5>
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <Network size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 rotate-45 transition-transform group-hover:rotate-90 duration-[3000ms]" />
          </section>

          <div className="bg-emerald-600 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Puzzle size={48} className="text-white" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">Estratégia Operacional</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90 text-emerald-50">
                  "A rede socioassistencial representa the estratégia operacional do SUAS, materializando the política de assistência social e fortalecendo the proteção dos direitos de indivíduos e famílias em cada território do país."
                </p>
              </div>
            </div>
            <UsersRound size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    );
  };

  const renderQuestaoSocialDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-rose-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Questão Social</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "O objeto de estudo e intervenção que fundamenta the práxis do Serviço Social."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-rose-600">
            <AlertTriangle size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Questão Social</strong> é um concept central no Serviço Social que se refere às expressões da desigualdade, da exclusão e da vulnerabilidade social que emergem na sociedade, especialmente em contextos marcados por injustiças econômicas, políticas e culturais. Ela evidencia como determinadas necessidades e direitos da população não são atendidos pelo Estado ou pela sociedade, gerando desigualdades estruturais.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-rose-500 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Manifestações</h2>
            </div>
            <p className="text-slate-500 font-medium italic">A questão social se manifesta de múltiplas formas no cotidiano:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "Pobreza Estrutural", d: "Desigualdade econômica profunda e privação de condições básicas de sobrevivência.", icon: <TrendingDown /> },
                { t: "Trabalho Precário", d: "Desemprego, subemprego e the perda de direitos trabalhistas históricos.", icon: <Ban /> },
                { t: "Violência e Estigma", d: "Discriminação social, racismo, sexismo e violações físicas e simbólicas.", icon: <ShieldAlert /> },
                { t: "Exclusão Institucional", d: "Dificuldade de acesso a serviços como saúde, educação, moradia e assistência.", icon: <Building2 /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-rose-50 border border-rose-100 rounded-[2.5rem] flex items-start gap-5 hover:bg-white hover:border-rose-300 transition-all shadow-sm group">
                  <div className="p-3 bg-white rounded-2xl shadow-inner shrink-0 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-rose-900 text-sm uppercase mb-1">{item.t}</h4>
                    <p className="text-xs text-rose-800/80 leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black text-brand uppercase flex items-center gap-3">
                <Target className="text-brand" size={28} /> Centralidade Profissional
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Compreender the questão social é fundamental para o(a) assistente social conseguir:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Análise Crítica", d: "Identificar as causas estruturais das desigualdades para além do imediato." },
                  { t: "Orientação da Prática", d: "Atuar na defesa de direitos e na mediação técnica com as políticas públicas." },
                  { t: "Promoção da Cidadania", d: "Contribuir para the inclusão efetiva e mudanças sociais transformadoras." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm items-center">
                    <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                      <span className="text-brand font-black">{i+1}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-100 text-sm uppercase mb-0.5">{item.t}</h5>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Users size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 rotate-12" />
          </section>

          <section className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                <Compass className="text-rose-600" size={28} /> Do Individual ao Coletivo
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Diferentemente de necessidades individuais isoladas, the <strong>questão social</strong> reflete problemas coletivos e estruturais do modo de produção capitalista. Por isso, ela exige respostas organizadas, fundamentadas em:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl flex gap-3 items-center border border-slate-100">
                  <Landmark className="text-brand-dark shrink-0" size={18} />
                  <p className="text-xs font-bold text-slate-700 uppercase">Políticas Públicas</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl flex gap-3 items-center border border-slate-100">
                  <ShieldCheck className="text-brand-dark shrink-0" size={18} />
                  <p className="text-xs font-bold text-slate-700 uppercase">Proteção Social</p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-rose-600 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Quote size={48} className="text-white" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">O Olhar do Especialista</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "A questão social não é um problema a ser 'resolvido' individualmente, mas uma contradição a ser enfrentada politicamente. O assistente social é o profissional que decifra the realidade social para viabilizar direitos onde o capital só vê carência."
                </p>
              </div>
            </div>
            <Globe size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>

          <div className="pt-4 flex justify-center">
             <button 
               onClick={() => { setCurrentSection(AppSection.BIBLIOGRAPHY); setSelectedDoc(null); }}
               className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-brand rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-xl group"
             >
               <Book size={20} /> Aprofundar via Bibliografia
             </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProtecaoSocialDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-slate-200 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Proteção Social</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A garantia de segurança e dignidade como dever do Estado."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark">
            <ShieldCheck size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Proteção Social</strong> é um conjunto de ações, serviços e benefícios oferecidos pelo Estado para garantir segurança e condições mínimas de vida à população, especialmente àquelas em situação de vulnerabilidade ou risco social. Ela visa prevenir, reduzir ou compensar situações de desigualdade, promovendo direitos sociais e cidadania.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-brand rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Estrutura no SUAS</h2>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">No contexto brasileiro, the proteção social é estruturada principalmente pela Seguridade Social e pelo Sistema Único de Assistência Social (SUAS), dividida em dois níveis:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Proteção Básica */}
              <div className="bg-emerald-50 p-8 rounded-[3.5rem] border border-emerald-100 shadow-sm flex flex-col gap-6 group hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Home className="text-emerald-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-emerald-900 uppercase tracking-tight mb-4">Proteção Social Básica</h3>
                  <ul className="space-y-3">
                    {[
                      "Voltada à prevenção de situações de risco social",
                      "Oferecida por serviços como o CRAS",
                      "Foco no fortalecimento de vínculos familiares e comunitários"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-emerald-800">
                        <CheckCircle2 size={18} className="shrink-0 text-emerald-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Proteção Especial */}
              <div className="bg-rose-50 p-8 rounded-[3.5rem] border border-rose-100 shadow-sm flex flex-col gap-6 group hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldAlert className="text-rose-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-rose-900 uppercase tracking-tight mb-4">Proteção Social Especial</h3>
                  <ul className="space-y-3">
                    {[
                      "Voltada a situações de risco ou violação de direitos",
                      "Oferecida por serviços como o CREAS",
                      "Atua em casos de violência, abandono e exploração"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-rose-800">
                        <ShieldAlert size={18} className="shrink-0 text-rose-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black text-brand uppercase flex items-center gap-3">
                <Target className="text-brand" size={28} /> Centralidade Profissional
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Para o(a) assistente social, the proteção social é uma dimensão central da prática profissional, pois envolve:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Mediação entre usuários e políticas públicas",
                  "Defesa intransigente dos direitos sociais",
                  "Prevenção de situações de vulnerabilidade",
                  "Promoção da equidade e justiça social"
                ].map((task, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm items-center">
                    <CheckCircle2 size={20} className="text-brand shrink-0" />
                    <p className="text-sm font-bold text-slate-200">{task}</p>
                  </div>
                ))}
              </div>
            </div>
            <Layers size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 rotate-12" />
          </section>

          <div className="bg-brand text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <HandHeart size={48} className="text-slate-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">O Papel do Estado</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "Proteção Social não é um favor ou caridade, mas uma tecnologia social de direito. É the rede que impede que the vulnerabilidade se transforme em exclusão irreversível."
                </p>
              </div>
            </div>
            <Users size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
          
          <div className="pt-4 flex justify-center">
             <button 
               onClick={() => { setCurrentSection(AppSection.POLICIES); setSelectedDoc('suas-detalhado'); }}
               className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-brand rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-xl group"
             >
               <Layers size={20} /> Ver detalhes do SUAS
             </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPoliticasPublicasDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-brand-dark pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Políticas Públicas</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A materialização dos direitos e o enfrentamento das desigualdades pelo State."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark">
            <Landmark size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Políticas Públicas</strong> são ações, programs, e diretrizes planejadas e executadas pelo Estado com o objetivo de atender às necessidades da população, garantir direitos e promover the justiça social. Elas estruturam the forma como os recursos públicos são utilizados para enfrentar desigualdades e melhorar as condições de vida da sociedade.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-brand rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Áreas de Intervenção</h2>
            </div>
            <p className="text-slate-500 font-medium italic mb-6">No Serviço Social, as políticas públicas orientam the atuação do(a) assistente social em eixos centrais:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Saúde", d: "SUS, programs de prevenção, atendimento básico e especializado.", icon: <Heart className="text-rose-500" /> },
                { t: "Educação", d: "Garantia do acesso à educação básica, inclusiva e permanência escolar.", icon: <School className="text-indigo-500" /> },
                { t: "Assistência Social", d: "Transferência de renda, proteção básica (CRAS) e especial (CREAS).", icon: <ShieldPlus className="text-amber-500" /> },
                { t: "Habitação e Trabalho", d: "Programs de moradia popular, geração de renda e segurança social.", icon: <Home className="text-blue-500" /> },
                { t: "Proteção a Vulneráveis", d: "Crianças, idosos, PCDs e população em situação de rua.", icon: <Users className="text-emerald-500" /> }
              ].map((area, i) => (
                <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-start gap-5 hover:bg-white hover:border-brand transition-all shadow-sm">
                  <div className="p-3 bg-white rounded-2xl shadow-inner shrink-0">{area.icon}</div>
                  <div>
                    <h4 className="font-black text-slate-800 text-sm uppercase mb-1">{area.t}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{area.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border-2 border-brand-light rounded-[3rem] shadow-sm space-y-6">
              <h3 className="text-xl font-black text-brand-deep uppercase flex items-center gap-3">
                <Globe size={24} /> 1. Universais
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Atendem a <strong>toda a população</strong> sem distinção, fundamentadas na ideia de cidadania plena e direito de todos (Ex: SUS, Educação Básica Pública).
              </p>
            </div>
            <div className="p-10 bg-white border-2 border-amber-100 rounded-[3rem] shadow-sm space-y-6">
              <h3 className="text-xl font-black text-amber-700 uppercase flex items-center gap-3">
                <Target size={24} /> 2. Focalizadas
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direcionadas a <strong>grupos específicos</strong> em situação de vulnerabilidade, buscando reduzir desigualdades pontuais e garantir proteção a quem mais precisa.
              </p>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black text-brand uppercase flex items-center gap-3">
                <Settings className="text-brand" size={28} /> O Papel do(a) Assistente Social
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { t: "Implementação e Gestão", d: "Executar e gerir programs sociais na ponta do atendimento." },
                  { t: "Acompanhamento", d: "Monitorar the efetividade das ações junto aos usuários." },
                  { t: "Avaliação", d: "Analisar se the política cumpre seu objetivo de efetivar direitos." },
                  { t: "Controle Social", d: "Fortalecer the participação popular nas decisões do State." }
                ].map((task, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <CheckCircle2 size={20} className="text-brand shrink-0" />
                    <div>
                      <h5 className="font-bold text-slate-200 text-xs mb-1 uppercase">{task.t}</h5>
                      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{task.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Binary size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 rotate-12" />
          </section>

          <div className="bg-brand text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Presentation size={48} className="text-slate-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">Compromisso Ético-Político</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "As políticas públicas não são apenas burocracia estatal; são the materialização da luta social. No Serviço Social, atuamos para que the lei se torne vida e o direito se torne dignidade real para o povo."
                </p>
              </div>
            </div>
            <Layers size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>

          <div className="pt-4 flex justify-center">
             <button 
               onClick={() => { setCurrentSection(AppSection.POLICIES); setSelectedDoc(null); }}
               className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-brand rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-xl group"
             >
               <Scale size={20} /> Explorar Políticas em Detalhes
             </button>
          </div>
        </div>
      </div>
    );
  };

  const renderMediacaoDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-orange-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Mediação</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "Intervir para facilitar caminhos, diálogos e garantir o acesso a direitos."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-orange-600">
            <RefreshCw size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Mediação</strong> é o processo pelo qual o(a) assistente social atua como intermediário entre sujeitos, grupos ou instituições, buscando facilitar the comunicação, the resolution de conflitos e o acesso a direitos. É uma prática que promove o diálogo, the negociação e the construção de soluções coletivas, sem que haja imposição de decisões.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-orange-500 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Contextos de Atuação</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  t: "Usuário vs Instituição", 
                  d: "Garantir que as demandas sociais sejam ouvidas e atendidas de forma adequada pelo aparato estatal ou privado.", 
                  icon: <Building2 /> 
                },
                { 
                  t: "Conflitos Familiares/Grupos", 
                  d: "Atuar na resolução de conflitos internos, fortalecendo vínculos e promovendo the convivência comunitária.", 
                  icon: <UsersRound /> 
                },
                { 
                  t: "Comunidade vs Políticas", 
                  d: "Articular the participação popular e o controle social junto aos órgãos formuladores de políticas públicas.", 
                  icon: <Globe /> 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] flex flex-col gap-4 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-600">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-orange-900 text-sm uppercase">{item.t}</h4>
                  <p className="text-xs text-orange-800 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black text-orange-400 uppercase flex items-center gap-3">
                <HandshakeIcon className="text-orange-400" size={28} /> Habilidades Essenciais
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                A mediação eficaz no Serviço Social exige do profissional um conjunto técnico e humano de competências:
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Escuta Ativa", "Empatia", "Comunicação Clara", "Postura Ética", "Neutralidade Técnica", "Imparcialidade"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/10 text-orange-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <RefreshCw size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 rotate-12" />
          </section>

          <section className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                <UserCheck className="text-orange-600" size={28} /> Respeito à Autonomia
              </h3>
              <p className="text-slate-600 leading-relaxed">
                No contexto profissional, the mediação <strong>não significa substituir decisões</strong> ou impor soluções prontas. O papel do assistente social é facilitar caminhos para que os indivíduos ou grupos conquistem protagonismo sobre sua própria realidade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl flex gap-3 items-center">
                  <CheckCircle2 className="text-brand-dark shrink-0" size={18} />
                  <p className="text-xs font-bold text-slate-700">Fortalecimento da Cidadania</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl flex gap-3 items-center">
                  <CheckCircle2 className="text-brand-dark shrink-0" size={18} />
                  <p className="text-xs font-bold text-slate-700">Construção de Equidade</p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-orange-500 text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Compass size={48} className="text-slate-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">O Papel do Mediador</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "Mediar é abrir portas que the burocracia ou o conflito fecharam. É transformar the barreira institucional em ponte para the dignidade humana."
                </p>
              </div>
            </div>
            <Users size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    );
  };

  const renderInterdisciplinaridadeDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>

        <header className="border-b-4 border-cyan-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Interdisciplinaridade</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A soma de olhares que revela the totalidade da realidade social."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-cyan-600">
            <Puzzle size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <p className="text-lg">
              <strong>Interdisciplinaridade</strong> é the prática de integrar conhecimentos, métodos e perspectivas de different áreas do saber para compreender problemas complexos e desenvolver soluções mais completas. No Serviço Social, the interdisciplinaridade é fundamental porque as questões sociais são <strong>multifacetadas</strong> e envolvem fatores econômicos, políticos, culturais e psicológicos.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-cyan-500 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">O Trabalho em Equipe</h2>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Manifesta-se quando o(a) assistente social atua junto a profissionais de outras áreas, buscando uma intervenção articulada com:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { t: "Psicologia", icon: <Brain size={20} /> },
                { t: "Pedagogia", icon: <School size={20} /> },
                { t: "Saúde", icon: <Activity size={20} /> },
                { t: "Direito", icon: <Scale size={20} /> },
                { t: "Economia", icon: <TrendingUp size={20} /> },
                { t: "Administração", icon: <Building2 size={20} /> },
                { t: "Sociologia", icon: <Users size={20} /> },
                { t: "Antropologia", icon: <Globe size={20} /> }
              ].map((prof, i) => (
                <div key={i} className="p-4 bg-cyan-50 border border-cyan-100 rounded-2xl flex flex-col items-center gap-3 text-center group hover:bg-white transition-all shadow-sm">
                  <div className="text-cyan-600 group-hover:scale-110 transition-transform">{prof.icon}</div>
                  <span className="text-[10px] font-black uppercase text-slate-600">{prof.t}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl font-black text-cyan-400 uppercase flex items-center gap-3">
                <Target className="text-cyan-400" size={28} /> Objetivos Estratégicos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Analisar the realidade social de forma mais ampla e profunda",
                  "Planejar e implementar intervenções mais eficazes e sustentáveis",
                  "Promover the articulação entre different serviços e políticas",
                  "Fortalecer the compreensão das múltiplas dimensões do usuário"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                    <p className="text-sm font-medium text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Network size={200} className="absolute -right-20 -bottom-20 text-white opacity-5" />
          </section>

          <section className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                <AlertCircle className="text-brand-dark" size={28} /> Articulação Crítica
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A interdisciplinaridade no Serviço Social <strong>não significa apenas somar conhecimentos</strong> de different áreas. É um processo de:
              </p>
              <div className="space-y-4">
                {[
                  { t: "Respeito à Identidade", d: "Manter the clareza sobre as competências e atribuições privativas do assistente social." },
                  { t: "Ética e Política", d: "Articular os saberes always respeitando o Projeto Ético-Político da categoria." },
                  { t: "Combate à Fragmentação", d: "Superar the visão isolada das expressões da questão social." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-6 bg-slate-50 rounded-3xl">
                     <div className="w-1.5 h-10 bg-brand rounded-full shrink-0" />
                     <div>
                       <h5 className="font-black text-slate-800 text-xs uppercase mb-1">{item.t}</h5>
                       <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.d}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="bg-cyan-600 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Lightbulb size={48} className="text-white" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">Recurso Estratégico</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90 text-cyan-50">
                  "A realidade social não é dividida em gavetas. A interdisciplinaridade é the ferramenta que nos permite ver o todo, enfrentando the complexidade da questão social com the amplitude que ela exige."
                </p>
              </div>
            </div>
            <Zap size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    );
  };

  /**
   * Renderização detalhada de Cidadania
   */
  const renderCidadaniaDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Cidadania</h1>
          <p className="text-xl text-slate-500 font-medium italic">"O direito a ter direitos: autonomia e participação social."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Globe size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Cidadania é a condição que permite ao indivíduo ser sujeito de direitos e deveres em uma sociedade. No Serviço Social, a defesa da cidadania plena é um compromisso ético-político, visando superar a subalternidade e promover a autonomia dos usuários.</p>
        </section>
      </div>
    );
  };

  /**
   * Renderização detalhada de Controle Social
   */
  const renderControleSocialDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Controle Social</h1>
          <p className="text-xl text-slate-500 font-medium italic">"A vigilância da sociedade sobre o Estado e as políticas públicas."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><ShieldCheck size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">O Controle Social é a participação ativa da sociedade civil na formulação, fiscalização e acompanhamento das políticas públicas. É um pilar da democracia brasileira, materializado em Conselhos de Direitos e Conferências Nacionais.</p>
        </section>
      </div>
    );
  };

  /**
   * Renderização detalhada de Demanda Social
   */
  const renderDemandaSocialDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Demanda Social</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Necessidades que emergem da realidade e exigem respostas profissionais."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><MessageSquare size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Demanda Social refere-se às expressões das necessidades sociais que chegam aos serviços. No Serviço Social, a demanda não é apenas o que o usuário diz querer, mas o que o profissional decifra a partir da realidade social e da Questão Social.</p>
        </section>
      </div>
    );
  };

  /**
   * Renderização detalhada de Direitos Sociais
   */
  const renderDireitosSociaisDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Direitos Sociais</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Garantias fundamentais para a dignidade e o bem-estar social."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Scale size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Direitos Sociais são direitos fundamentais conquistados historicamente e positivados na Constituição de 1988. Eles visam garantir condições mínimas de existência e igualdade de oportunidades, como saúde, educação, previdência e assistência social.</p>
        </section>
      </div>
    );
  };

  /**
   * Renderização detalhada de Ética Profissional
   */
  const renderEticaProfissionalDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Ética Profissional</h1>
          <p className="text-xl text-slate-500 font-medium italic">"O agir profissional pautado em valores emancipatórios."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Compass size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">A Ética Profissional no Serviço Social fundamenta-se no Código de Ética de 1993. Ela não é neutra, mas sim comprometida com a liberdade, a democracia e a justiça social, orientando o exercício profissional em defesa dos direitos humanos.</p>
        </section>
      </div>
    );
  };

  /**
   * Renderização detalhada de Instrumental Técnico-Operativo
   */
  const renderInstrumentalTecnicoOperativoDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Instrumental Técnico</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Ferramentas e técnicas para a materialização da prática."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Settings size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">O instrumental técnico-operativo compõe a dimensão operativa da profissão. Trata-se do conjunto de instrumentos (entrevistas, visitas, relatórios) e técnicas que permitem ao assistente social intervir e transformar a realidade social do usuário.</p>
        </section>
      </div>
    );
  };

  /**
   * Renderização detalhada de Vulnerabilidade Social
   */
  const renderVulnerabilidadeSocialDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-slate-200 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Vulnerabilidade Social</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A exposição a riscos e a fragilização de vínculos sociais."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><InfoIcon size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Vulnerabilidade Social refere-se a uma situação de fragilidade de indivíduos, famílias ou grupos sociais, resultante da carência de recursos e da precariedade de vínculos. Diferente da pobreza monetária, ela abrange múltiplas dimensões que afetam a capacidade de resposta frente a riscos e adversidades, sendo objeto central de intervenção no SUAS.</p>
        </section>
      </div>
    );
  };

  const renderAcademicDetailedContent = () => {
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
                O <strong>Código de Ética do/a Assistente Social</strong>, instituído pela Resolução CFESS nº 273/93, é the materialização de um Projeto Ético-Político construído pela categoria ao longo de décadas. 
                Ele não é apenas um conjunto de normas, mas um instrumento que vincula o exercício profissional à defesa dos interesses da classe trabalhadora e à construção de uma sociedade mais justa e democrática.
              </p>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-10 w-2 bg-brand rounded-full"></div>
                 <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">1. Princípios Fundamentais</h2>
              </div>
              <p className="text-slate-600 mb-6">O Código está fundamentado em 11 princípios que norteiam the conduta do profissional, destacando-se:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Liberdade", d: "Valor ético central, visando the autonomia e emancipação plena dos indivíduos.", icon: <Flag className="text-brand" /> },
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
                  <p><strong className="text-white">Autonomia Profissional:</strong> Direito à ampla autonomia, garantindo the inviolabilidade do local de trabalho e documentos.</p>
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
                   <p className="text-[11px] text-rose-800 font-medium">A quebra do sigilo só é admissível em situações de extrema gravidade, onde the omissão possa trazer prejuízo ao usuário, a terceiros ou à coletividade.</p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-10 w-2 bg-brand rounded-full"></div>
                 <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">4. Fiscalização e Penalidades</h2>
              </div>
              <p className="text-sm text-slate-600">Cabe ao sistema <strong>CFESS/CRESS</strong> zelar pela observância do Código. As penalidades podem variar conforme the gravidade:</p>
              
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
                A edição de 2011 trouxe avanços como the adequação à <strong>linguagem de gênero</strong> (combatendo o machismo gramatical) e the substituicão de "opção sexual" por <strong>"orientação sexual"</strong>, além da inclusão da "identidade de gênero" como condição protegida.
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
                    "Imagine que este código funciona como uma <strong>bússola ética</strong>: em um mar de pressões institucionais e desigualdades sociais, ele aponta invariavelmente para the direção da dignidade humana e da democracia, impedindo que o profissional se perca em práticas burocráticas ou autoritárias."
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
            <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Lei nº 8.662/93</h1>
            <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
              "Dispõe sobre the profissão de Assistente Social e dá outras providências."
            </p>
            <div className="absolute right-0 bottom-8 hidden md:block opacity-10">
              <Gavel size={120} />
            </div>
          </header>

          <div className="space-y-12">
            <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
              <p className="text-lg">
                A <strong>Lei nº 8.662, de 7 de junho de 1993</strong>, é o instrumento jurídico fundamental que dispõe sobre the profissão de Assistente Social no Brasil. 
                Ela substituiu the regulamentação anterior de 1957, representando um marco para the categoria ao imprimir à profissão uma dimensão não apenas técnica, mas também sociopolítica, 
                consolidando um projeto profissional voltado para the defesa da classe trabalhadora e the construção de uma sociedade mais justa.
              </p>
              <p className="text-lg">
                De acordo com as fontes, the definição e os pilares dessa lei podem ser detalhados nos seguintes pontos:
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
                  Uma mudança crucial foi introduzida pela <strong>Lei nº 12.317/2010</strong>, que acrescentou o Artigo 5º-A à Lei 8.662/93, instituindo the carga horária de <strong>30 horas semanais sem redução de salário</strong> para os assistentes sociais. Essa medida foi julgada constitucional de forma unânime pelo STF em 2020.
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
                      "Elaborar, implementar e avaliar políticas e programs sociais.",
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
                  a lei institui o <strong>Conselho Federal de Serviço Social (CFESS)</strong> e os <strong>Conselhos Regionais (CRESS)</strong> como uma entidade federativa com o objetivo de disciplinar e defender the profissão. O CFESS atua como órgão normativo e Tribunal Superior de Ética, enquanto os CRESS funcionam como órgãos executivos e de fiscalização em primeira instância.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3">
                  <AlertCircle className="text-rose-500" size={28} /> 6. Análise Crítica
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Embora seja um pilar do projeto ético-político, fontes apontam fragilidades terminológicas. Críticos como Jonis Felippe destacam que termos como "matéria" ou "área" são vagos, dificultando the fiscalização. O processo legislativo resultou em perdas, como the retirada da obrigatoriedade em certas instituições e the classificação de tarefas históricas (como estudos socioeconômicos) apenas como competências genéricas.
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
                    "A Lei 8.662/93 funciona como the <strong>escritura e the planta de uma casa</strong>: ela define quem tem the chave para entrar (os habilitados), quais cômodos são de uso comum (competências) e quais são quartos privativos onde só o dono pode entrar (atribuições privativas). Contudo, assim como uma planta antiga, algumas linhas podem parecer borradas, exigindo interpretação constante dos conselhos para evitar que estranhos ocupem espaços que deveriam ser exclusivos."
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
          <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
              <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
            </button>

            <header className="border-b-4 border-brand-light pb-8 relative">
              <h1 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Diretrizes da Formação Profissional em Serviço Social</h1>
              <p className="text-lg text-slate-500 font-medium italic leading-relaxed">
                "Orientando the formação de assistentes sociais críticos e éticos."
              </p>
              <div className="absolute right-0 bottom-8 hidden md:block opacity-10">
                <LayoutGrid size={120} />
              </div>
            </header>

            <div className="space-y-12">
              <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl text-slate-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  A formação em Serviço Social está diretamente vinculada às transformações históricas da sociedade, do State e do mundo do trabalho. As diretrizes curriculares aqui apresentadas orientam the formação de assistentes sociais críticos, éticos e comprometidos com o enfrentamento das expressões da <strong>questão social</strong>.
                </p>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-2 bg-brand rounded-full"></div>
                   <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">📌 Pressupostos da Formação</h2>
                </div>
                <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-200 space-y-4 text-slate-600">
                  <p>O Serviço Social é compreendido como uma profissão histórica, inserida na divisão social e técnica do trabalho. Seu fundamento central é the questão social, expressão das desigualdades produzidas pelo desenvolvimento do capitalismo.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      "Transformação conforme mudam relações sociais e políticas",
                      "Mediação entre State, sociedade e classes sociais",
                      "Impacto da reestruturação produtiva e neoliberalismo",
                      "Resposta a demandas sociais complexas e críticas"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs items-center bg-white p-4 rounded-2xl shadow-sm">
                        <CheckCircle2 size={16} className="text-brand shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-2 bg-brand rounded-full"></div>
                   <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">🎓 Princípios da Formação</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Flexibilidade curricular", "Rigor teórico e metodológico", "Teoria social crítica", 
                    "Articulação entre conteúdos", "Integração entre teoria e prática", "Interdisciplinaridade",
                    "Ensino, pesquisa e extensão", "Pluralismo teórico", "Ética como princípio transversal",
                    "Estágio supervisionado", "Qualidade dia e noite"
                  ].map((p, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center gap-2 hover:border-brand transition-colors group">
                      <Binary size={20} className="text-slate-300 group-hover:text-brand transition-colors" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase leading-tight">{p}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="h-10 w-2 bg-brand rounded-full"></div>
                   <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">🧩 Organização Curricular</h2>
                </div>
                <p className="text-sm text-slate-500 italic">Estruturada a partir do trabalho como categoria central da vida social.</p>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { 
                      n: "1", t: "Fundamentos Teórico-Metodológicos da Vida Social", 
                      d: "Estuda o ser social como totalidade histórica, o trabalho, as classes sociais, as relações de poder, the cultura, the ética e as teorias que explicam the realidade social.",
                      icon: <Binary /> 
                    },
                    { 
                      n: "2", t: "Fundamentos da Formação Sócio-Histórica da Sociedade Brasileira", 
                      d: "Analisa the constituição do capitalismo no Brasil, o State, as políticas sociais, as desigualdades sociais, as relações de classe, gênero e raça, e os movimentos sociais.",
                      icon: <Globe /> 
                    },
                    { 
                      n: "3", t: "Fundamentos do Trabalho Profissional", 
                      d: "Compreende o Serviço Social como especialização do trabalho coletivo, abordando o processo de trabalho, estratégias de intervenção, pesquisa e o compromisso ético-político.",
                      icon: <Briefcase /> 
                    }
                  ].map((nucleo, i) => (
                    <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start group hover:border-brand transition-colors">
                      <div className="w-16 h-16 bg-brand-light text-brand rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-slate-900 transition-colors shadow-sm">
                        {nucleo.icon}
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-black text-slate-800 tracking-tight leading-tight uppercase">Núcleo {nucleo.n}: {nucleo.t}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{nucleo.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl text-white space-y-6">
                  <h3 className="text-xl font-black uppercase text-brand flex items-center gap-3">
                    <Microscope size={24} /> Áreas de Conhecimento
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Sociologia", "Ciência Política", "Economia Política", "Filosofia", "Psicologia", "Antropologia", "Direito", "Política Social", "Ética", "Planejamento"].map((a, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-wider">{a}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] shadow-sm space-y-6">
                  <h3 className="text-xl font-black uppercase text-slate-800 flex items-center gap-3">
                    <Clipboard size={24} className="text-brand" /> Atividades Integradoras
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-black text-brand-deep">Estágio Supervisionado</h5>
                      <p className="text-[11px] text-slate-500">Atividade obrigatória com supervisão acadêmica e de campo. Mínimo de 15% da carga horária.</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-brand-deep">Trabalho de Conclusão (TCC)</h5>
                      <p className="text-[11px] text-slate-500">Monografia científica que sintetiza the formação acadêmica e articula teoria e prática.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-brand text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <Award size={48} className="text-slate-900" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase tracking-tight">Formação com Compromisso Social</h4>
                    <p className="text-lg font-medium leading-relaxed italic opacity-90">
                      "O objetivo é preparar profissionais críticos, éticos e qualificados, capazes de compreender the realidade em sua totalidade e intervir comprometidos com the <strong>justiça social, direitos humanos e democracia</strong>."
                    </p>
                  </div>
                </div>
                <Users size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
              </div>

              <div className="flex justify-center gap-8 text-center py-4">
                <div>
                   <span className="block text-2xl font-black text-brand-deep">2.700h</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Carga Mínima</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                   <span className="block text-2xl font-black text-brand-deep">4 Anos</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duração Média</span>
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                  <a href="https://www.abepss.org.br/arquivos/textos/documento_201603311138166377210.pdf" target="_blank" className="flex items-center justify-center gap-4 px-10 py-5 bg-slate-900 text-brand rounded-[2rem] font-black uppercase tracking-widest hover:bg-brand hover:text-slate-900 transition-all shadow-xl group text-center">
                      <ExternalLink size={24} className="group-hover:rotate-12 transition-transform shrink-0" /> Acessar Documento Completo da ABEPSS (PDF)
                  </a>
              </div>
            </div>
          </div>
        );
    }

    if (selectedDoc === 'cidadania-detalhada') return renderCidadaniaDetailed();
    if (selectedDoc === 'controle-social-detalhado') return renderControleSocialDetailed();
    if (selectedDoc === 'demanda-social-detalhada') return renderDemandaSocialDetailed();
    if (selectedDoc === 'direitos-sociais-detalhada') return renderDireitosSociaisDetailed();
    if (selectedDoc === 'etica-profissional-detalhada') return renderEticaProfissionalDetailed();
    if (selectedDoc === 'instrumental-detalhado') return renderInstrumentalTecnicoOperativoDetailed();
    if (selectedDoc === 'interdisciplinaridade-detalhada') return renderInterdisciplinaridadeDetailed();
    if (selectedDoc === 'mediacao-detalhada') return renderMediacaoDetailed();
    if (selectedDoc === 'politicas-publicas-detalhada') return renderPoliticasPublicasDetailed();
    if (selectedDoc === 'protecao-social-detalhada') return renderProtecaoSocialDetailed();
    if (selectedDoc === 'questao-social-detalhada') return renderQuestaoSocialDetailed();
    if (selectedDoc === 'rede-socioassistencial-detalhada') return renderRedeSocioassistencialDetailed();
    if (selectedDoc === 'universalidade-detalhada') return renderUniversalidadeDetailed();
    if (selectedDoc === 'vulnerabilidade-social-detalhada') return renderVulnerabilidadeSocialDetailed();
    
    return null;
  };

  const renderSaudeDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-rose-600 bg-rose-50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-rose-100 transition-all group border border-rose-200 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Políticas
        </button>

        <header className="border-b-4 border-rose-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Saúde (SUS)</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A saúde como direito de todos e dever do Estado: Universalidade, Integralidade e Equidade."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-rose-600">
            <Stethoscope size={120} />
          </div>
        </header>

        <div className="space-y-12">
          {/* 1. Introdução */}
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <h2 className="text-2xl font-black text-rose-900 uppercase flex items-center gap-3 tracking-tight">
              <InfoIcon size={24} /> 1. Introdução
            </h2>
            <p className="text-lg">
              A Política Nacional de Saúde no Brasil é voltada para garantir o direito à saúde como um <strong>direito universal</strong>, conforme previsto na Constituição Federal de 1988 (Art. 196). Este guia aborda a organização, os princípios e os instrumentos que orientam a gestão e a execução das ações de saúde.
            </p>
          </section>

          {/* 2. Histórico */}
          <section className="space-y-8">
            <h2 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
               <History className="text-rose-600" size={24} /> 2. Histórico
            </h2>
            <div className="relative pl-8 border-l-4 border-rose-100 space-y-8">
              {[
                { year: "1940-1970", desc: "Assistência voltada para trabalhadores formais (previdência social); modelo fragmentado." },
                { year: "1970-1980", desc: "Reforma Sanitária, críticas ao modelo excludente e hospitalocêntrico." },
                { year: "1988", desc: "Constituição Federal estabelece a saúde como direito de todos e dever do Estado." },
                { year: "1990", desc: "Criação do Sistema Único de Saúde (SUS), com base nos princípios da universalidade, integralidade e equidade." },
                { year: "2000 em diante", desc: "Consolidação do SUS, com programs estratégicos e ampliação da atenção básica e da saúde da família." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-rose-500 border-4 border-white shadow-sm" />
                  <h4 className="font-black text-rose-900 text-sm mb-1">{item.year}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Princípios Fundamentais */}
          <section className="space-y-8">
            <h2 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
               <ScaleIcon className="text-rose-600" size={24} /> 3. Princípios do SUS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "Universalidade", d: "Garantia de acesso a todos os cidadãos sem discriminação. Engloba prevenção, promoção, tratamento e reabilitação." },
                { t: "Equidade", d: "Priorização de recursos para populações mais vulneráveis. Busca reduzir desigualdades regionais e sociais em saúde." },
                { t: "Integralidade", d: "Ações de atenção à saúde devem ser completas, considerando prevenção, diagnóstico, tratamento e reabilitação." },
                { t: "Descentralização", d: "Gestão compartilhada entre União, estados e municípios, com responsabilidades definidas para cada ente." },
                { t: "Participação Social", d: "Conselhos de saúde e conferências permitem que a população influencie as políticas públicas." }
              ].map((princ, i) => (
                <div key={i} className="p-6 bg-rose-50 border border-rose-100 rounded-[2rem] hover:bg-white transition-all shadow-sm">
                  <h4 className="font-black text-rose-900 text-sm uppercase mb-2">{princ.t}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{princ.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Estrutura do System */}
          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <h2 className="text-2xl font-black text-brand uppercase flex items-center gap-3 tracking-tight">
                <LayoutGrid size={28} /> 4. Estrutura do Sistema
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { t: "Atenção Primária", d: "Portas de entrada (UBS, ESF). Foco em prevenção e promoção.", icon: <Home size={18}/> },
                  { t: "Atenção Secundária", d: "Serviços especializados, consultas específicas e pequenos procedimentos.", icon: <Building2 size={18}/> },
                  { t: "Atenção Terciária", d: "Alta complexidade (hospitais de referência, cirurgias complexas).", icon: <Building size={18}/> }
                ].map((level, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="text-brand mb-3">{level.icon}</div>
                    <h5 className="font-bold text-slate-100 text-xs uppercase mb-2">{level.t}</h5>
                    <p className="text-[10px] text-slate-400 leading-relaxed">{level.d}</p>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-black text-brand text-sm uppercase mb-4">Organização Administrativa</h4>
                <div className="space-y-3">
                  <p className="text-xs"><strong className="text-white">União:</strong> Formulação, regulação e financiamento de programs estratégicos.</p>
                  <p className="text-xs"><strong className="text-white">Estados:</strong> Gestão regional, apoio técnico e financiamento complementar.</p>
                  <p className="text-xs"><strong className="text-white">Municípios:</strong> Gestão direta da atenção básica e execução local dos programs.</p>
                </div>
              </div>
            </div>
            <Activity size={200} className="absolute -right-20 -bottom-20 text-white opacity-5" />
          </section>

          {/* 5. Financiamento */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
               <Coins className="text-rose-600" size={24} /> 5. Financiamento
            </h2>
            <div className="p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col md:flex-row gap-8">
               <div className="space-y-4 flex-1">
                 <p className="text-sm text-slate-600">Fontes principais envolvem impostos e contribuições das três esferas de governo, além de recursos vinculados a programs como o PNI.</p>
                 <div className="flex flex-wrap gap-2">
                   {["Fundo Nacional", "Fundos Estaduais", "Fundos Municipais"].map((f, i) => (
                     <span key={i} className="px-3 py-1 bg-rose-100 text-rose-800 text-[10px] font-black uppercase rounded-lg">{f}</span>
                   ))}
                 </div>
               </div>
               <div className="bg-rose-50 p-6 rounded-3xl md:w-1/3 border border-rose-100">
                 <h5 className="text-xs font-black text-rose-900 mb-2 uppercase flex items-center gap-2"><AlertTriangle size={14}/> Desafios</h5>
                 <p className="text-[10px] text-rose-800 italic">Subfinanciamento crônico, desigualdade na distribution e necessidade de eficiência na gestão.</p>
               </div>
            </div>
          </section>

          {/* 6. Programs e 7. Planejamento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <section className="space-y-6">
               <h3 className="text-xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
                 <Rocket className="text-rose-600" size={20} /> 6. Programas Estratégicos
               </h3>
               <div className="grid grid-cols-1 gap-3">
                 {["Programa Nacional de Imunizações (PNI)", "Estratégia Saúde da Família (ESF)", "Política de Atenção Básica (PNAB)", "Programa de Saúde Mental", "Política de Humanização (PNH)"].map((p, i) => (
                   <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                     <span className="text-[11px] font-bold text-slate-700">{p}</span>
                   </div>
                 ))}
               </div>
             </section>

             <section className="space-y-6">
               <h3 className="text-xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
                 <Map className="text-rose-600" size={20} /> 7. Planejamento
               </h3>
               <div className="space-y-4">
                 <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200">
                   <h5 className="text-xs font-black text-slate-800 uppercase mb-2">Plano Nacional de Saúde (PNS)</h5>
                   <p className="text-[10px] text-slate-500">Diretrizes gerais formuladas a cada 4 anos.</p>
                 </div>
                 <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200">
                   <h5 className="text-xs font-black text-slate-800 uppercase mb-2">Sistemas de Informação</h5>
                   <div className="flex flex-wrap gap-2 mt-2">
                     {["Datasus", "e-SUS", "SISREG"].map((s, i) => (
                       <span key={i} className="px-2 py-1 bg-white text-slate-400 text-[9px] font-bold border border-slate-200 rounded-md uppercase">{s}</span>
                     ))}
                   </div>
                 </div>
               </div>
             </section>
          </div>

          {/* 8. Desafios Atuais */}
          <section className="bg-rose-600 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <AlertCircle size={48} className="text-white" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">8. Desafios Atuais</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Escassez de profissionais em regiões remotas.",
                    "Crescimento de doenças crônicas e envelhecimento.",
                    "Necessidade de integração digital total.",
                    "Redução das desigualdades regionais na saúde."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs font-medium opacity-90">
                      <CheckCircle2 size={16} className="shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <TrendingUp size={200} className="absolute -right-20 -bottom-20 text-white opacity-5" />
          </section>

          {/* Link de acesso */}
          <div className="pt-4 flex justify-center">
             <a 
               href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" 
               target="_blank"
               className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-rose-400 rounded-[2rem] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all shadow-xl group text-center"
             >
               <ExternalLink size={20} /> Acessar Lei 8.080/90
             </a>
          </div>
        </div>
      </div>
    );
  };

  const renderAssistenciaDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-amber-600 bg-amber-50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-amber-100 transition-all group border border-amber-200 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Políticas
        </button>

        <header className="border-b-4 border-amber-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Assistência Social</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "Proteção Social, Vigilância Socioassistencial e Defesa de Direitos."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10">
            <ShieldCheck size={120} />
          </div>
        </header>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              A <strong>Assistência Social</strong> é uma política pública essencial que faz parte da Seguridade Social, juntamente com the saúde e the previdência social. Seu principal objetivo é garantir proteção social e promover the inclusão, assegurando direitos fundamentais a pessoas, famílias e grupos que se encontram em situação de vulnerabilidade ou risco social.
            </p>
            <p className="text-lg leading-relaxed">
              Diferente da previdência, the assistência social <strong>não exige contribuição prévia</strong>, sendo um direito de todo cidadão que dela necessitar. Ela atua na prevenção de situações de exclusão social e no enfrentamento das desigualdades, fortalecendo the autonomia das pessoas e os vínculos familiares e comunitários.
            </p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-amber-400 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Principais Objetivos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Promover the proteção social e the dignidade humana",
                "Reduzir desigualdades sociais e combater the pobreza",
                "Prevenir situações de risco social e violação de direitos",
                "Fortalecer vínculos familiares e comunitários",
                "Garantir acesso a serviços, benefícios e oportunidades"
              ].map((obj, i) => (
                <div key={i} className="p-6 bg-amber-50 border border-amber-100 rounded-3xl flex items-start gap-4 shadow-sm hover:bg-amber-100 transition-colors group">
                  <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform"><CheckCircle2 className="text-amber-500" size={20} /></div>
                  <p className="text-sm font-bold text-amber-900 leading-tight">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-amber-400 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Quem é Atendido</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { t: "Famílias em vulnerabilidade", icon: <Users /> },
                { t: "Crianças e adolescentes", icon: <School className="hidden" /> }, 
                { t: "Idosos", icon: <Users /> },
                { t: "Pessoas com deficiência", icon: <UserCheck /> },
                { t: "Pessoas em situação de rua ou vítimas de violência", icon: <ShieldAlert /> }
              ].map((p, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center gap-4 group hover:border-amber-400 transition-colors">
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    {i === 1 ? <School size={24} /> : i === 0 || i === 2 ? <Users size={24} /> : i === 3 ? <UserCheck size={24} /> : <ShieldAlert size={24} />}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-tight text-slate-600 leading-tight">{p.t}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-amber-400 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Como funciona no Brasil</h2>
            </div>
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  No Brasil, the assistência social é organizada pelo <strong>Sistema Único de Assistência Social (SUAS)</strong>, que estrutura e coordena ações em todo o território nacional.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-black text-amber-400 uppercase mb-2 flex items-center gap-2"><Home size={18}/> CRAS</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">Centros de Referência de Assistência Social: A porta de entrada da assistência. Atua na proteção básica e prevenção.</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-black text-amber-400 uppercase mb-2 flex items-center gap-2"><ShieldAlert size={18}/> CREAS</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">Centros de Referência Especializados: Atendimento especializado a famílias e indivíduos com direitos já violados.</p>
                  </div>
                </div>
              </div>
              <Landmark size={200} className="absolute -right-20 -bottom-20 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="h-10 w-2 bg-amber-400 rounded-full"></div>
               <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Princípios Orientadores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "Universalidade do acesso",
                "Respeito à dignidade e à diversidade",
                "Igualdade de direitos",
                "Participação social e cidadania",
                "Garantia de proteção social"
              ].map((princ, i) => (
                <div key={i} className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm text-center flex items-center justify-center hover:border-amber-400 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-700">{princ}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-amber-400 text-slate-900 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <HandHeart size={48} className="text-slate-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">Cidadania em Movimento</h4>
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "A Assistência Social é, portanto, um importante instrumento de <strong>promoção da cidadania</strong>, contribuindo para uma sociedade mais justa, solidária e inclusiva."
                </p>
              </div>
            </div>
            <Users size={200} className="absolute -right-20 -bottom-20 text-slate-900 opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    );
  };

  const renderEducacaoDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-indigo-100 transition-all group border border-indigo-200 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Políticas
        </button>

        <header className="border-b-4 border-indigo-100 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-tight">Educação</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "Um direito de todos e dever do Estado e da família: base da cidadania e do desenvolvimento."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-indigo-600">
            <School size={120} />
          </div>
        </header>

        <div className="space-y-12">
          {/* 1. Introdução */}
          <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
            <h2 className="text-2xl font-black text-indigo-900 uppercase flex items-center gap-3 tracking-tight">
              <InfoIcon size={24} /> 1. Introdução
            </h2>
            <p className="text-lg">
              A política de educação no Brasil é o conjunto de diretrizes, normas, programs e ações que orientam the oferta e o funcionamento da educação em todas as suas etapas, desde the educação infantil até o ensino superior. O objetivo é garantir o <strong>direito à educação de qualidade</strong>, promovendo the inclusão social e o desenvolvimento do país.
            </p>
          </section>

          {/* 2. Bases Legais */}
          <section className="space-y-8">
            <h2 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
               <Gavel className="text-indigo-600" size={24} /> 2. Bases Legais
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] shadow-sm">
                <h4 className="font-black text-indigo-900 text-sm uppercase mb-3 flex items-center gap-2"><Landmark size={18}/> Constituição Federal (1988)</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">Define the educação como direito de todos (Art. 205) e estabelece princípios como igualdade de condições e pluralismo de ideias (Art. 206).</p>
              </div>
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] shadow-sm">
                <h4 className="font-black text-indigo-900 text-sm uppercase mb-3 flex items-center gap-2"><FileCheck size={18}/> Lei de Diretrizes e Bases (LDB - 9.394/96)</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">Define as etapas da educação, currículos mínimos e prevê the valorização dos profissionais e gestão democrática.</p>
              </div>
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] shadow-sm">
                <h4 className="font-black text-indigo-900 text-sm uppercase mb-3 flex items-center gap-2"><Map size={18}/> Plano Nacional de Educação (PNE)</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">Lei nº 13.005/2014 estabelece 20 metas, incluindo the universalização da educação infantil e alfabetização plena até os 8 anos.</p>
              </div>
            </div>
          </section>

          {/* 3. Estrutura do Sistema */}
          <section className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-2xl font-black text-brand uppercase flex items-center gap-3 tracking-tight">
                <LayoutGrid size={28} /> 3. Estrutura do Sistema Educacional
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h5 className="font-bold text-slate-100 text-xs uppercase mb-3">Educação Básica</h5>
                  <ul className="space-y-2 text-[10px] text-slate-400 font-medium">
                    <li>• Infantil: Creches e pré-escolas.</li>
                    <li>• Fundamental: 6 aos 14 anos (9 anos).</li>
                    <li>• Médio: 15 aos 17 anos (3 anos).</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h5 className="font-bold text-slate-100 text-xs uppercase mb-3">Profissional e Tecnológica</h5>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Articula formação técnica com demandas do mercado, oferecida em nível médio e superior.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h5 className="font-bold text-slate-100 text-xs uppercase mb-3">Educação Superior</h5>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Graduação, pós-graduação, mestrado e doutorado. Regulação do MEC para IES públicas e privadas.</p>
                </div>
              </div>
            </div>
            <School size={200} className="absolute -right-20 -bottom-20 text-white opacity-5" />
          </section>

          {/* 4. Gestão e Financiamento */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
               <Coins className="text-indigo-600" size={24} /> 4. Gestão e Financiamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm">
                 <h4 className="font-black text-indigo-900 text-xs uppercase mb-4">Estrutura de Gestão</h4>
                 <p className="text-[11px] text-slate-500 leading-relaxed">O <strong className="text-slate-800">MEC</strong> coordena as políticas nacionais, enquanto as Secretarias Estaduais e Municipais implementam the educação básica localmente.</p>
               </div>
               <div className="p-8 bg-white border-2 border-indigo-100 rounded-[3rem] shadow-sm">
                 <h4 className="font-black text-indigo-900 text-xs uppercase mb-4">Financiamento (FUNDEB)</h4>
                 <p className="text-[11px] text-slate-500 leading-relaxed">Fundo de manutenção da educação básica, somado a recursos federais e municipais para infraestrutura e valorização docente.</p>
               </div>
            </div>
          </section>

          {/* 5. Principais Programas */}
          <section className="space-y-8">
            <h2 className="text-2xl font-black text-slate-800 uppercase flex items-center gap-3 tracking-tight">
               <Rocket className="text-indigo-600" size={24} /> 5. Programas Atuais
            </h2>
            <div className="flex flex-wrap gap-4">
              {["Mais Educação (Escola Integral)", "Prouni (Bolsas Ensino Superior)", "FIES (Financiamento Estudantil)", "PNAIC (Alfabetização)", "Educação Inclusiva (PCDs)"].map((p, i) => (
                <div key={i} className="px-6 py-4 bg-indigo-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform cursor-default">
                  {p}
                </div>
              ))}
            </div>
          </section>

          {/* 6. Desafios e Perspectivas */}
          <section className="bg-indigo-600 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <AlertCircle size={48} className="text-white" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight">6. Desafios Atuais</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium opacity-90 leading-relaxed">
                  <li>• Reduzir desigualdades regionais e sociais.</li>
                  <li>• Formação contínua de professores.</li>
                  <li>• Ampliar acesso à educação tecnológica.</li>
                  <li>• Integrar inovação digital e metodologias ativas.</li>
                </ul>
              </div>
            </div>
            <TrendingUp size={200} className="absolute -right-20 -bottom-20 text-white opacity-5" />
          </section>

          {/* Link de acesso */}
          <div className="pt-4 flex justify-center">
             <a 
               href="https://www.planalto.gov.br/ccivil_03/leis/l9394.htm" 
               target="_blank"
               className="flex items-center gap-3 px-10 py-5 bg-slate-900 text-indigo-400 rounded-[2rem] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-xl group text-center"
             >
               <ExternalLink size={20} /> Acessar LDB Oficial
             </a>
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
                  <p className="text-slate-500 font-medium">As ferramentas que materializam the prática profissional e o compromisso ético.</p>
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
                details: "Fundamental para compreender the realidade socioeconômica e dinâmica familiar real."
              },
              { 
                title: "Diário de Campo", 
                icon: <ClipboardList />, 
                desc: "Registro sistemático e contínuo das ações, impressões e reflexões críticas do profissional.",
                details: "Instrumento vital para the auto-avaliação e o planejamento das intervenções futuras."
              },
              { 
                title: "Relatório Social", 
                icon: <FileText />, 
                desc: "Documento descritivo e interpretativo que sintetiza uma situação social específica.",
                details: "Visa informar, subsidiar decisões e registrar the trajetória de atendimento do usuário."
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
                  "A instrumentalidade é the mediação entre the <strong>teoria</strong> e the <strong>prática</strong>. Não se resume ao uso mecânico de técnicas, mas sim à capacidade do profissional de utilizar seu arsenal técnico para transformar the realidade social."
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
                        Acreditamos que o acesso rápido à informação de qualidade é um pilar fundamental para uma formação crítica e para the materialização do <strong>Projeto Ético-Político</strong> no cotidiano profissional.
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
            <p className="text-[11px] text-slate-300 italic italic leading-relaxed">"O Serviço Social não é um favor, é um direito. E the educação é the ferramenta para defendê-lo."</p>
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
                { id: AppSection.ABOUT, title: "Sobre the Plataforma", icon: <InfoIcon size={32}/>, desc: "Nossa missão e os pilares do Ser Social.", color: "text-slate-500" }
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
        if (selectedDoc) return renderAcademicDetailedContent();
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header>
                <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3 uppercase tracking-tighter">
                    <BookOpen className="text-brand-dark" /> Biblioteca Acadêmica
                </h2>
                <p className="text-slate-500 text-sm mt-1">Conhecimento normativo e conceitual para the sua formação.</p>
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
                  <div key={item.term} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                    <div className="flex items-start gap-5 flex-1">
                      <div className="text-brand-dark bg-brand-light p-4 rounded-2xl flex-shrink-0 group-hover:bg-brand group-hover:text-slate-900 transition-colors">{item.icon || <Info />}</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <h4 className="font-black text-brand-deep text-lg">{item.term}</h4>
                            <span className="text-[9px] font-black text-slate-400 uppercase px-2 py-0.5 bg-slate-50 rounded-lg">{item.category}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.definition}</p>
                      </div>
                    </div>
                    {/* Botão de acesso para mais informações */}
                    <button 
                      onClick={() => handleGlossaryDetail(item.term)}
                      className="mt-6 flex items-center gap-2 text-[10px] font-black text-brand-dark uppercase tracking-widest hover:text-brand-deep transition-colors group/btn"
                    >
                      Ver detalhes <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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
                  <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
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
                  { title: "Assistência Social", icon: <Landmark />, color: "bg-brand-light text-brand-deep", desc: "CRAS, CREAS e Gestão Pública. Carreira estável via concurso." },
                  { title: "Previdência Social", icon: <ShieldCheck />, color: "bg-cyan-50 text-cyan-600", desc: "INSS. Avaliação social para concessão de benefícios: aposentadorias, pensões e auxílios." },
                  { title: "Habitação e Urbanismo", icon: <Home />, color: "bg-orange-50 text-orange-600", desc: "Programs habitacionais, regularização fundiária, políticas urbanas e comunitárias." },
                  { title: "Políticas para Grupos Específicos", icon: <Users />, color: "bg-teal-50 text-teal-600", desc: "Crianças, idosos, PCDs, mulheres, indígenas, quilombolas e migrantes." },
                  { title: "Ensino, Pesquisa e Planejamento", icon: <GraduationCap />, color: "bg-purple-50 text-purple-600", desc: "Docência superior, pesquisa social, planejamento, gestão e avaliação de políticas públicas." }
                ].map((area, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${area.color} group-hover:scale-110 transition-transform shadow-sm`}>{area.icon}</div>
                    <h4 className="font-black text-slate-800 text-lg tracking-tight leading-tight">{area.title}</h4>
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
                    <p className="text-rose-800 leading-relaxed">O Serviço Social lida diariamente com the dor e the exclusão. O autocuidado não é luxo, é estratégia de resistência profissional para não sucumbir ao adoecimento ocupacional.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { t: "Supervisão", d: "A troca com colegas e supervisores ajuda a processar os casos mais pesados." },
                        { t: "Desconexão", d: "Estabeleça limites claros entre o trabalho e sua vida pessoal." },
                        { t: "Educação Permanente", d: "Saber o que fazer traz segurança e reduz the ansiedade." }
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

  /**
   * Cidadania detailed view placeholder logic (re-using existing structure)
   */
  const renderCidadaniaDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Cidadania</h1>
          <p className="text-xl text-slate-500 font-medium italic">"O direito a ter direitos: autonomia e participação social."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Globe size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Cidadania é a condição que permite ao indivíduo ser sujeito de direitos e deveres em uma sociedade. No Serviço Social, a defesa da cidadania plena é um compromisso ético-político, visando superar a subalternidade e promover a autonomia dos usuários.</p>
        </section>
      </div>
    );
  };

  const renderControleSocialDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Controle Social</h1>
          <p className="text-xl text-slate-500 font-medium italic">"A vigilância da sociedade sobre o Estado e as políticas públicas."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><ShieldCheck size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">O Controle Social é a participação ativa da sociedade civil na formulação, fiscalização e acompanhamento das políticas públicas. É um pilar da democracia brasileira, materializado em Conselhos de Direitos e Conferências Nacionais.</p>
        </section>
      </div>
    );
  };

  const renderDemandaSocialDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Demanda Social</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Necessidades que emergem da realidade e exigem respostas profissionais."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><MessageSquare size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Demanda Social refere-se às expressões das necessidades sociais que chegam aos serviços. No Serviço Social, a demanda não é apenas o que o usuário diz querer, mas o que o profissional decifra a partir da realidade social e da Questão Social.</p>
        </section>
      </div>
    );
  };

  const renderDireitosSociaisDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Direitos Sociais</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Garantias fundamentais para a dignidade e o bem-estar social."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Scale size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Direitos Sociais são direitos fundamentais conquistados historicamente e positivados na Constituição de 1988. Eles visam garantir condições mínimas de existência e igualdade de oportunidades, como saúde, educação, previdência e assistência social.</p>
        </section>
      </div>
    );
  };

  const renderEticaProfissionalDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Ética Profissional</h1>
          <p className="text-xl text-slate-500 font-medium italic">"O agir profissional pautado em valores emancipatórios."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Compass size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">A Ética Profissional no Serviço Social fundamenta-se no Código de Ética de 1993. Ela não é neutra, mas sim comprometida com a liberdade, a democracia e a justiça social, orientando o exercício profissional em defesa dos direitos humanos.</p>
        </section>
      </div>
    );
  };

  const renderInstrumentalTecnicoOperativoDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Instrumental Técnico</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Ferramentas e técnicas para a materialização da prática."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Settings size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">O instrumental técnico-operativo compõe a dimensão operativa da profissão. Trata-se do conjunto de instrumentos (entrevistas, visitas, relatórios) e técnicas que permitem ao assistente social intervir e transformar a realidade social do usuário.</p>
        </section>
      </div>
    );
  };

  /**
   * Vulnerabilidade detailed view placeholder logic
   */
  const renderVulnerabilidadeSocialDetailedView = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-slate-200 pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Vulnerabilidade Social</h1>
          <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl">
            "A exposição a riscos e a fragilização de vínculos sociais."
          </p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><InfoIcon size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg"><strong>Vulnerabilidade Social</strong> é a condição em que indivíduos, grupos ou comunidades estão expostos a riscos ou situações que dificultam o acesso a direitos, oportunidades e proteção social, tornando-se mais suscetíveis à exclusão, à desigualdade e à violação de direitos.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <h4 className="font-black text-xs uppercase mb-2">Econômica</h4>
               <p className="text-[10px] text-slate-500">Desemprego, renda insuficiente, falta de moradia adequada.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <h4 className="font-black text-xs uppercase mb-2">Social</h4>
               <p className="text-[10px] text-slate-500">Exclusão de serviços públicos, discriminação, isolamento comunitário.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <h4 className="font-black text-xs uppercase mb-2">Cultural e Política</h4>
               <p className="text-[10px] text-slate-500">Falta de acesso à educação, participação social limitada, violação de direitos civis.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <h4 className="font-black text-xs uppercase mb-2">Saúde</h4>
               <p className="text-[10px] text-slate-500">Vulnerabilidade a doenças, falta de acesso a serviços de saúde.</p>
             </div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl mt-6 space-y-4">
            <h4 className="font-black text-brand text-sm uppercase">Atuação Profissional</h4>
            <p className="text-xs text-slate-300">Identificar the vulnerabilidade é fundamental para planejar intervenções que promovam proteção social, articular recursos, fortalecer the autonomia e atuar sobre as causas estruturais da exclusão.</p>
          </div>
        </section>
      </div>
    );
  };

  const renderAcademicDetailedContentWithSelection = () => {
    if (selectedDoc === 'cidadania-detalhada') return renderCidadaniaDetailedView();
    if (selectedDoc === 'controle-social-detalhado') return renderControleSocialDetailedView();
    if (selectedDoc === 'demanda-social-detalhada') return renderDemandaSocialDetailedView();
    if (selectedDoc === 'direitos-sociais-detalhada') return renderDireitosSociaisDetailedView();
    if (selectedDoc === 'etica-profissional-detalhada') return renderEticaProfissionalDetailedView();
    if (selectedDoc === 'instrumental-detalhado') return renderInstrumentalTecnicoOperativoDetailedView();
    if (selectedDoc === 'vulnerabilidade-social-detalhada') return renderVulnerabilidadeSocialDetailedView();
    
    // Original switches
    if (selectedDoc === 'etica') return renderEticaProfissionalDetailedView(); // Fixed reference
    if (selectedDoc === 'lei8662') return renderLei8662Detailed(); // Need to implement or reuse
    if (selectedDoc === 'diretrizes') return renderDiretrizesDetailed(); // Need to implement or reuse
    
    return null;
  };

  // Re-implementing missing detailed views for consistency
  const renderLei8662Detailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Lei nº 8.662/93</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Dispõe sobre the profissão de Assistente Social."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><Gavel size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">Esta lei regulamenta the profissão de assistente social no Brasil, definindo as competências e atribuições privativas, além de instituir o sistema CFESS/CRESS.</p>
        </section>
      </div>
    );
  };

  const renderDiretrizesDetailed = () => {
    const handleBack = () => setSelectedDoc(null);
    return (
      <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
        <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-8 hover:bg-brand transition-all group border border-brand/20 shadow-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar para Biblioteca
        </button>
        <header className="border-b-4 border-brand-light pb-8 relative">
          <h1 className="text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Diretrizes ABEPSS</h1>
          <p className="text-xl text-slate-500 font-medium italic">"Os fundamentos da formação profissional."</p>
          <div className="absolute right-0 bottom-8 hidden md:block opacity-10 text-brand-dark"><LayoutGrid size={120} /></div>
        </header>
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl leading-relaxed text-slate-700 space-y-6">
          <p className="text-lg">As diretrizes curriculares da ABEPSS orientam the formação acadêmica, pautada em três núcleos de fundamentação: sócio-histórico, teórico-metodológico e técnico-operativo.</p>
        </section>
      </div>
    );
  };

  // Main render switch overhaul to fix potential bugs and fulfill request
  const renderAppContent = () => {
    if (selectedDoc) {
        if (selectedDoc === 'sus-detalhado') return renderSaudeDetailed();
        if (selectedDoc === 'suas-detalhado') return renderAssistenciaDetailed();
        if (selectedDoc === 'edu-detalhado') return renderEducacaoDetailed();
        if (selectedDoc === 'prev-detalhado') return <div className="p-10 text-center text-slate-500 font-bold">Resumo da Previdência Social em construção.</div>;
        
        // Glossary & Academic detailed
        if (selectedDoc === 'universalidade-detalhada') return renderUniversalidadeDetailed();
        if (selectedDoc === 'vulnerabilidade-social-detalhada') return renderVulnerabilidadeSocialDetailedView();
        if (selectedDoc === 'cidadania-detalhada') return renderCidadaniaDetailedView();
        if (selectedDoc === 'controle-social-detalhado') return renderControleSocialDetailedView();
        if (selectedDoc === 'demanda-social-detalhada') return renderDemandaSocialDetailedView();
        if (selectedDoc === 'direitos-sociais-detalhada') return renderDireitosSociaisDetailedView();
        if (selectedDoc === 'etica-profissional-detalhada') return renderEticaProfissionalDetailedView();
        if (selectedDoc === 'instrumental-detalhado') return renderInstrumentalTecnicoOperativoDetailedView();
        if (selectedDoc === 'interdisciplinaridade-detalhada') return renderInterdisciplinaridadeDetailed();
        if (selectedDoc === 'mediacao-detalhada') return renderMediacaoDetailed();
        if (selectedDoc === 'questao-social-detalhada') return renderQuestaoSocialDetailed();
        if (selectedDoc === 'rede-socioassistencial-detalhada') return renderRedeSocioassistencialDetailed();
        if (selectedDoc === 'politicas-publicas-detalhada') return renderPoliticasPublicasDetailed();
        if (selectedDoc === 'protecao-social-detalhada') return renderProtecaoSocialDetailed();
        
        if (selectedDoc === 'lei8662') return renderLei8662Detailed();
        if (selectedDoc === 'etica') return renderEticaProfissionalDetailedView();
        if (selectedDoc === 'diretrizes') return renderDiretrizesDetailed();
    }

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
                { id: AppSection.ABOUT, title: "Sobre the Plataforma", icon: <InfoIcon size={32}/>, desc: "Nossa missão e os pilares do Ser Social.", color: "text-slate-500" }
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
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header>
                <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3 uppercase tracking-tighter">
                    <BookOpen className="text-brand-dark" /> Biblioteca Acadêmica
                </h2>
                <p className="text-slate-500 text-sm mt-1">Conhecimento normativo e conceitual para the sua formação.</p>
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
                  <div key={item.term} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                    <div className="flex items-start gap-5 flex-1">
                      <div className="text-brand-dark bg-brand-light p-4 rounded-2xl flex-shrink-0 group-hover:bg-brand group-hover:text-slate-900 transition-colors">{item.icon || <Info />}</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <h4 className="font-black text-brand-deep text-lg">{item.term}</h4>
                            <span className="text-[9px] font-black text-slate-400 uppercase px-2 py-0.5 bg-slate-50 rounded-lg">{item.category}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.definition}</p>
                      </div>
                    </div>
                    {/* Botão de acesso para mais informações */}
                    <button 
                      onClick={() => handleGlossaryDetail(item.term)}
                      className="mt-6 flex items-center gap-2 text-[10px] font-black text-brand-dark uppercase tracking-widest hover:text-brand-deep transition-colors group/btn"
                    >
                      Ver detalhes <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case AppSection.POLICIES:
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
                  { title: "Assistência Social", icon: <Landmark />, color: "bg-brand-light text-brand-deep", desc: "CRAS, CREAS e Gestão Pública. Carreira estável via concurso." },
                  { title: "Previdência Social", icon: <ShieldCheck />, color: "bg-cyan-50 text-cyan-600", desc: "INSS. Avaliação social para concessão de benefícios: aposentadorias, pensões e auxílios." },
                  { title: "Habitação e Urbanismo", icon: <Home />, color: "bg-orange-50 text-orange-600", desc: "Programs habitacionais, regularização fundiária, políticas urbanas e comunitárias." },
                  { title: "Políticas para Grupos Específicos", icon: <Users />, color: "bg-teal-50 text-teal-600", desc: "Crianças, idosos, PCDs, mulheres, indígenas, quilombolas e migrantes." },
                  { title: "Ensino, Pesquisa e Planejamento", icon: <GraduationCap />, color: "bg-purple-50 text-purple-600", desc: "Docência superior, pesquisa social, planejamento, gestão e avaliação de políticas públicas." }
                ].map((area, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${area.color} group-hover:scale-110 transition-transform shadow-sm`}>{area.icon}</div>
                    <h4 className="font-black text-slate-800 text-lg tracking-tight leading-tight">{area.title}</h4>
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
                    <p className="text-rose-800 leading-relaxed">O Serviço Social lida diariamente com the dor e the exclusão. O autocuidado não é luxo, é estratégia de resistência profissional para não sucumbir ao adoecimento ocupacional.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { t: "Supervisão", d: "A troca com colegas e supervisores ajuda a processar os casos mais pesados." },
                        { t: "Desconexão", d: "Estabeleça limites claros entre o trabalho e sua vida pessoal." },
                        { t: "Educação Permanente", d: "Saber o que fazer traz segurança e reduz the ansiedade." }
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
        <div className="max-w-5xl mx-auto">{renderAppContent()}</div>
      </main>
    </div>
  );
};

export default App;
