
import React, { useState, useMemo } from 'react';
import { AppSection } from './types';
import { NAV_ITEMS, GLOSSARY_DATA, POLICIES_SUMMARY, INTERNSHIP_MODELS } from './constants';
import { 
  BookOpen, Scale, FileText, Heart, ShieldCheck, ExternalLink, 
  Briefcase, GraduationCap, ArrowLeft, Download, Clock, Users, 
  Target, Activity, Landmark, Compass, Building2, Lock, LayoutGrid, Info, 
  CheckCircle2, ShieldAlert, Search, Info as InfoIcon, PieChart, 
  ClipboardCheck, ArrowRight, School, Notebook, PenTool, Eye, UserCheck, 
  Rocket, SearchCheck, Building, TrendingUp, FileCheck, Globe
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  
  // States para interação local
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  // Categorias únicas do glossário para o filtro
  const categories = useMemo(() => {
    const cats = Array.from(new Set(GLOSSARY_DATA.map(item => item.category)));
    return ['Todos', ...cats];
  }, []);

  // Filtragem do glossário baseada em busca e categoria
  const filteredGlossary = useMemo(() => {
    return GLOSSARY_DATA.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  // --- RENDERS DE CONTEÚDO DETALHADO (POLÍTICAS) ---

  const renderSaudeDetailed = () => (
    <div className="space-y-10 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-6 hover:bg-brand hover:text-slate-900 transition-all group shadow-sm border border-brand/20">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Painel
      </button>

      <header className="border-b-2 border-brand-light pb-8">
        <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600">
                <Heart size={32} />
            </div>
            <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Saúde (SUS)</h1>
        </div>
        <p className="text-slate-500 font-medium text-lg italic">Direito de todos e dever do Estado - Constituição Federal de 1988</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-brand-deep border-l-4 border-brand pl-4">Diretrizes do SUS</h2>
          <div className="space-y-4">
            {[
              { title: "Universalidade", desc: "Acesso para todos, independente de qualquer condição." },
              { title: "Equidade", desc: "Tratar desigualmente os desiguais para atingir a igualdade." },
              { title: "Integralidade", desc: "Ver o indivíduo como um todo: físico, mental e social." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="text-brand mt-1 flex-shrink-0" />
                <div><strong className="text-slate-800 block">{p.title}</strong><p className="text-sm text-slate-500">{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-brand-deep border-l-4 border-brand pl-4">Rede de Atenção</h2>
          <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
             <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand text-slate-900 flex items-center justify-center font-black">1</div>
                    <div className="text-sm"><strong>Atenção Primária:</strong> Porta de entrada (UBS). Prevenção e promoção.</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-black">2</div>
                    <div className="text-sm"><strong>Atenção Secundária:</strong> Especialidades e UPAs.</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-deep text-white flex items-center justify-center font-black">3</div>
                    <div className="text-sm"><strong>Atenção Terciária:</strong> Alta tecnologia e Hospitais.</div>
                </div>
             </div>
             <Activity size={200} className="absolute -right-20 -bottom-20 text-brand-light opacity-30" />
          </div>
        </div>
      </section>

      <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-3 text-brand">
                  <PieChart size={28} /> Financiamento e Controle
              </h3>
              <p className="text-lg opacity-90 leading-relaxed italic border-l-4 border-brand pl-6">"O SUS é financiado por toda a sociedade, através de impostos e contribuições sociais, com participação popular garantida pelos Conselhos de Saúde."</p>
          </div>
          <Lock size={150} className="absolute -right-10 -bottom-10 text-white opacity-5 rotate-12" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-brand transition-all shadow-sm group">
            <span className="font-bold text-slate-800">Lei 8.080/90 (Operacionalização)</span>
            <ExternalLink className="text-slate-300 group-hover:text-brand transition-colors" />
        </a>
        <a href="https://www.planalto.gov.br/ccivil_03/leis/l8142.htm" target="_blank" className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-brand transition-all shadow-sm group">
            <span className="font-bold text-slate-800">Lei 8.142/90 (Participação Popular)</span>
            <ExternalLink className="text-slate-300 group-hover:text-brand transition-colors" />
        </a>
      </div>
    </div>
  );

  const renderAssistenciaDetailed = () => (
    <div className="space-y-10 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-6 hover:bg-brand hover:text-slate-900 transition-all group shadow-sm border border-brand/20">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Painel
      </button>

      <header className="border-b-2 border-brand-light pb-8">
        <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Assistência (SUAS)</h1>
        </div>
        <p className="text-slate-500 font-medium text-lg italic">Política não contributiva - LOAS (Lei 8.742/93)</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-brand-deep border-l-4 border-brand pl-4">Proteções Sociais</h2>
          <div className="space-y-4">
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-brand" size={18} />
                    <strong className="text-slate-800">Proteção Social Básica</strong>
                </div>
                <p className="text-xs text-slate-500">Unidade: CRAS. Foco na prevenção e fortalecimento de vínculos familiares no território.</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="text-rose-500" size={18} />
                    <strong className="text-slate-800">Proteção Social Especial</strong>
                </div>
                <p className="text-xs text-slate-500">Unidade: CREAS. Atendimento a famílias com direitos já violados (Média e Alta Complexidade).</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-brand-deep border-l-4 border-brand pl-4">Seguranças do SUAS</h2>
          <div className="grid grid-cols-2 gap-3">
            {["Acolhida", "Renda", "Convívio", "Autonomia"].map((s, i) => (
                <div key={i} className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center">
                    <span className="text-[10px] font-black text-amber-800 uppercase">{s}</span>
                </div>
            ))}
          </div>
          <div className="bg-amber-100/30 p-4 rounded-2xl border border-amber-200">
            <p className="text-[11px] text-amber-900 leading-relaxed"><strong>BPC (Benefício de Prestação Continuada):</strong> Direito garantido pela LOAS, assegura um salário mínimo mensal à pessoa com deficiência e ao idoso sem meios de prover a própria manutenção.</p>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <a href="https://www.planalto.gov.br/ccivil_03/leis/l8742.htm" target="_blank" className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-brand transition-all shadow-sm group">
            <span className="font-bold text-slate-800">Lei Orgânica da Assistência Social (LOAS)</span>
            <ExternalLink className="text-slate-300 group-hover:text-brand transition-colors" />
        </a>
      </div>
    </div>
  );

  const renderEducacaoDetailed = () => (
    <div className="space-y-10 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-5 py-2.5 rounded-2xl font-bold mb-6 hover:bg-brand hover:text-slate-900 transition-all group shadow-sm border border-brand/20">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Painel
      </button>

      <header className="border-b-2 border-brand-light pb-8">
        <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <School size={32} />
            </div>
            <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Educação</h1>
        </div>
        <p className="text-slate-500 font-medium text-lg italic">Direito social e base da cidadania - LDB (Lei 9.394/96)</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-brand-deep border-l-4 border-brand pl-4">Serviço Social na Educação</h2>
          <div className="space-y-4">
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <Users className="text-indigo-500" size={18} />
                    <strong className="text-slate-800">Lei 13.935/2019</strong>
                </div>
                <p className="text-xs text-slate-500">Dispõe sobre a prestação de serviços de psicologia e de serviço social na rede pública de educação básica.</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <Target className="text-indigo-500" size={18} />
                    <strong className="text-slate-800">Foco de Atuação</strong>
                </div>
                <p className="text-xs text-slate-500">Combate à evasão escolar, enfrentamento de violações de direitos e articulação com a rede de proteção.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-brand-deep border-l-4 border-brand pl-4">Níveis de Ensino</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
              <div className="w-8 h-8 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center font-black">EB</div>
              <div className="text-sm"><strong>Educação Básica:</strong> Infantil, Fundamental e Médio.</div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
              <div className="w-8 h-8 rounded-full bg-indigo-300 text-indigo-900 flex items-center justify-center font-black">ES</div>
              <div className="text-sm"><strong>Ensino Superior:</strong> Graduação e Pós-graduação.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <a href="https://www.planalto.gov.br/ccivil_03/leis/l9394.htm" target="_blank" className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-brand transition-all shadow-sm group">
            <span className="font-bold text-slate-800">Lei de Diretrizes e Bases (LDB)</span>
            <ExternalLink className="text-slate-300 group-hover:text-brand transition-colors" />
        </a>
      </div>
    </div>
  );

  const renderAcademicDetailed = () => {
    const handleBack = () => setSelectedDoc(null);

    if (selectedDoc === 'etica') {
      return (
        <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
          <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-4 py-2 rounded-xl font-bold mb-6 hover:bg-brand transition-all group border border-brand/20">
            <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar
          </button>
          <header className="border-b border-brand-light pb-6">
            <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase">Código de Ética Profissional</h1>
            <p className="text-slate-500 font-medium italic">Resolução CFESS nº 273/93 - O Pilar da Profissão</p>
          </header>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
            <p className="text-lg">O Código de Ética de 1993 rompe com a neutralidade profissional e assume um compromisso político com a classe trabalhadora.</p>
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="text-brand font-black mb-3">Princípio Fundamental I</h4>
                    <p className="italic border-l-4 border-brand pl-4">"Reconhecimento da liberdade como valor ético central e das demandas políticas a ela inerentes."</p>
                </div>
                <Compass size={120} className="absolute -right-5 -bottom-5 text-white opacity-5 rotate-12" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white border rounded-2xl">
                    <h5 className="font-bold mb-2">Sigilo Profissional</h5>
                    <p className="text-xs">Dever do profissional e direito do usuário. Só pode ser quebrado em situações extremas previstas em lei.</p>
                </div>
                <div className="p-5 bg-white border rounded-2xl">
                    <h5 className="font-bold mb-2">Justiça Social</h5>
                    <p className="text-xs">Compromisso com a eliminação de todas as formas de preconceito e discriminação.</p>
                </div>
            </div>
            <div className="pt-4">
                <a href="https://www.cfess.org.br/arquivos/CEP_CFESS-SITE.pdf" target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase hover:bg-brand-dark hover:text-white transition-all">
                    <Download size={20} /> Baixar Código Completo (PDF)
                </a>
            </div>
          </div>
        </div>
      );
    }
    
    if (selectedDoc === 'lei8662') {
      return (
        <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
          <button onClick={handleBack} className="flex items-center gap-2 text-brand-deep bg-brand-light/50 px-4 py-2 rounded-xl font-bold mb-6 hover:bg-brand transition-all group border border-brand/20">
            <ArrowLeft size={20} className="group-hover:-translate-x-1" /> Voltar
          </button>
          <header className="border-b border-brand-light pb-6">
            <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase">Lei nº 8.662/93</h1>
            <p className="text-slate-500 font-medium italic">Lei de Regulamentação da Profissão</p>
          </header>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>Estabelece quem pode ser assistente social, as competências e as atribuições privativas da categoria.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                    <h4 className="font-black text-brand-deep mb-3 text-sm">Competências (Art. 4º)</h4>
                    <ul className="text-[10px] space-y-2 list-disc pl-4">
                        <li>Formular e executar políticas sociais.</li>
                        <li>Elaborar planos, programas e projetos sociais.</li>
                        <li>Treinar e supervisionar estagiários.</li>
                    </ul>
                </div>
                <div className="p-6 bg-brand-light rounded-[2rem] border-2 border-brand/30">
                    <h4 className="font-black text-brand-deep mb-3 text-sm">Privativas (Art. 5º)</h4>
                    <ul className="text-[10px] space-y-2 list-disc pl-4">
                        <li>Realizar perícias, laudos e pareceres técnicos.</li>
                        <li>Coordenar cursos de Serviço Social.</li>
                        <li>Supervisão direta de estagiários da área.</li>
                    </ul>
                </div>
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

  // --- RENDERS DAS SEÇÕES PRINCIPAIS ---

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.HOME:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="py-12 px-8 bg-gradient-to-br from-brand via-brand-dark to-brand-deep text-white rounded-[3rem] shadow-2xl mb-8 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-5xl font-black mb-4 tracking-tighter">Ser Social</h1>
                <p className="text-xl opacity-90 max-w-2xl font-medium leading-relaxed">O ecossistema informativo para o estudante de Serviço Social. Conhecimento técnico e offline.</p>
              </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: AppSection.ACADEMIC, title: "Acadêmico", icon: <BookOpen size={32}/>, desc: "Glossário, legislações e diretrizes curriculares.", color: "text-brand-dark" },
                { id: AppSection.POLICIES, title: "Políticas Públicas", icon: <Scale size={32}/>, desc: "Guia completo de Saúde, Assistência e Previdência.", color: "text-blue-500" },
                { id: AppSection.INTERNSHIP, title: "Apoio ao Estágio", icon: <Briefcase size={32}/>, desc: "Modelos de relatórios e guia de postura profissional.", color: "text-amber-500" },
                { id: AppSection.CAREER, title: "Carreira", icon: <Rocket size={32}/>, desc: "Planejador de mercado, radar de concursos e áreas de atuação.", color: "text-purple-500" }
              ].map(card => (
                <div key={card.id} onClick={() => { setCurrentSection(card.id); setSelectedDoc(null); }} className="group cursor-pointer bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-brand-dark transition-all hover:shadow-2xl flex items-start gap-6">
                  <div className={`bg-slate-50 ${card.color} p-5 rounded-3xl group-hover:bg-brand group-hover:text-slate-900 transition-colors`}>{card.icon}</div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 text-slate-800 tracking-tight">{card.title}</h3>
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
                  { title: "Terceiro Sector", icon: <Globe />, color: "bg-amber-50 text-amber-600", desc: "Gestão de ONGs e captação de recursos para projetos de impacto." },
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
      {/* Sidebar - Desktop */}
      <nav className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-100 h-screen sticky top-0 p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-12 text-brand-deep">
            <BookOpen size={40} className="fill-brand/30" />
            <span className="text-2xl font-black tracking-tighter uppercase">Ser Social</span>
        </div>
        <div className="flex-1 space-y-3">
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

      {/* Mobile Nav */}
      <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-xl border border-white/10 px-8 py-5 flex justify-between items-center z-50 rounded-[2.5rem] shadow-2xl">
        {NAV_ITEMS.map(item => (
          <button key={item.id} onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }} className={`flex flex-col items-center gap-1.5 transition-all ${currentSection === item.id ? 'text-brand scale-125' : 'text-white/40'}`}>
            {item.icon}
            <span className="text-[8px] font-black uppercase tracking-tighter">{item.label}</span>
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
