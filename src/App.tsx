import { 
  HeartPulse, 
  HandMetal, 
  Users, 
  Brain, 
  Sprout, 
  Scale, 
  Puzzle, 
  UserPlus, 
  Heart, 
  Star, 
  MapPin, 
  Route 
} from 'lucide-react';

import imgSipalki from './assets/images/Sipalki.webp';
import imgMestre from './assets/images/Mestre.png';
import imgInclusao from './assets/images/Sipalki - inclusão.png';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function App() {
  const whatsappLink = "https://wa.me/5545998345874?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Sipalki";

  return (
    <div className="font-body text-amk-white bg-amk-black min-h-screen">
      
      {/* HERO SECTION */}
      <section 
        className="text-center py-40 px-4"
        style={{
          background: "linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.8)), url('http://googleusercontent.com/image_collection/image_retrieval/5425318889590930133') center/cover no-repeat"
        }}
      >
        <h1 className="font-heading font-bold text-4xl md:text-6xl text-amk-white mb-5 uppercase tracking-widest">
          SipalKi Soo Bahk
        </h1>
        <p className="text-xl md:text-2xl text-amk-white max-w-3xl mx-auto mb-8">
          Equipe Saja - Uma escola para a vida. Disciplina, respeito e evolução constante em Foz do Iguaçu.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
           className="inline-flex items-center gap-2 bg-amk-red text-amk-white font-heading font-bold px-8 py-4 rounded uppercase tracking-wide hover:bg-red-700 transition-colors">
          <WhatsAppIcon className="w-5 h-5" /> Entre em contato
        </a>
      </section>

      {/* NOSSA FILOSOFIA */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-white mb-10 border-b-4 border-amk-red inline-block pb-2 uppercase">
              Nossa Filosofia
            </h2>
            <h3 className="font-heading text-2xl text-amk-red mb-4 uppercase">O Sipalki</h3>
            <p className="text-lg text-gray-400 mb-5 leading-relaxed">
              Para quem busca defesa pessoal e saúde, o Sipalki AMK é uma escolha completa, pois une técnicas de combate milenares com um condicionamento físico intenso e funcional.
            </p>
            <p className="text-lg text-gray-400 mb-5 leading-relaxed">
              A prática de artes marciais, é muito importante para quem deseja uma vida saudável, com corpo, alma e espiríto em sintonia.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              O Sipalki Soo Bahk é uma escola da vida! Disciplina, respeito e trabalho em equipe, podem transformar não apenas sua forma física, mas também sua mentalidade.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-[10px_10px_0px_#D31118]">
            <img src={imgSipalki} alt="Prática de Sipalki" className="w-full h-full object-cover block" />
          </div>
        </div>
      </section>

      {/* LIDERANÇA */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-full shadow-[0_0_30px_rgba(211,17,24,0.3)] border-[5px] border-amk-red w-72 h-72 md:w-[400px] md:h-[400px] mx-auto overflow-hidden">
              <img src={imgMestre} alt="Master André Cheiran" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-white mb-10 border-b-4 border-amk-red inline-block pb-2 uppercase">
              Liderança
            </h2>
            <h3 className="font-heading text-2xl text-amk-red mb-4 uppercase">Master André Cheiran</h3>
            <p className="text-lg text-gray-400 mb-5 leading-relaxed">
              Mestre de Sipalki AMK, profissional de Educação Física, Psicomotricista e Terapeuta ABA. Master André reúne mais de 30 anos dedicados à inclusão e desenvolvimento humano.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Idealizador da Academia Sipalki AMK Para Todos, é referência local na integração entre artes marciais e metodologias terapêuticas para todas as idades.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUE TREINAR CONOSCO? */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-white mb-12 border-b-4 border-amk-red inline-block pb-2 uppercase">
          Por que treinar conosco?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { icon: <HeartPulse className="w-12 h-12 text-amk-red mb-5 mx-auto lg:mx-0" />, title: "Condição Física", text: "Melhora a resistência, flexibilidade, postura, respiração e coordenação motora." },
            { icon: <HandMetal className="w-12 h-12 text-amk-red mb-5 mx-auto lg:mx-0" />, title: "Defesa pessoal", text: "Proporciona habilidades práticas de autodefesa eficazes para o dia a dia." },
            { icon: <Users className="w-12 h-12 text-amk-red mb-5 mx-auto lg:mx-0" />, title: "Desenvolvimento Social", text: "Promove a empatia, a compreensão e o respeito mútuo entre os alunos." },
            { icon: <Brain className="w-12 h-12 text-amk-red mb-5 mx-auto lg:mx-0" />, title: "Saúde Mental", text: "Ajuda a lidar com emoções, cria conexão mente-corpo e reduz o estresse e a ansiedade." },
            { icon: <Sprout className="w-12 h-12 text-amk-red mb-5 mx-auto lg:mx-0" />, title: "Crescimento Pessoal", text: "Fomenta o autodescobrimento, a disciplina e o desenvolvimento espiritual e pessoal." },
            { icon: <Scale className="w-12 h-12 text-amk-red mb-5 mx-auto lg:mx-0" />, title: "Autocontrole", text: "Desenvolve a paciência através do respeito aos adversários, da humildade e da coragem." }
          ].map((item, idx) => (
            <div key={idx} className="bg-amk-surface p-8 rounded-lg border-t-4 border-amk-red flex flex-col items-center lg:items-start transition-transform hover:-translate-y-2">
              {item.icon}
              <h3 className="font-heading text-xl text-amk-white mb-4 uppercase">{item.title}</h3>
              <p className="text-gray-400 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOSSAS MODALIDADES */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center md:text-left">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-white mb-12 border-b-4 border-amk-red inline-block pb-2 uppercase">
          Nossas Modalidades
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Sipalki", text: "É uma arte marcial coreana milenar de origem militar, focada no combate real e na defesa pessoal. Envolve tanto o uso desarmado do corpo quanto o arsenal de armas." },
            { title: "Kwon Bop", text: "É um sistema coreano de artes marciais desarmadas. Influenciando fortemente o desenvolvimento moderno do Taekwondo." },
            { title: "Gumkido", text: "É uma arte marcial coreana focada no manejo de espadas. Seu foco principal é o combate contra múltiplos oponentes, enfatizando movimentos dinâmicos, fluidez, meditação e saúde física e mental." }
          ].map((item, idx) => (
            <div key={idx} className="bg-amk-surface p-8 rounded-lg text-center flex flex-col">
              <h3 className="font-heading text-xl text-amk-red mb-4 uppercase">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INCLUSÃO */}
      <section className="bg-white text-amk-black py-20 mt-10 border-y-4 border-amk-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-black mb-5 border-b-4 border-amk-blue inline-block pb-2 uppercase">
              Inclusão Através do Movimento
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Mais que uma arte marcial, o Sipalki AMK é um caminho de desenvolvimento, inclusão e superação!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-2xl text-amk-blue mb-4 uppercase">Sipalki AMK Para Todos</h3>
              <p className="text-gray-800 text-lg mb-4">
                Nossos treinos unem a tradição das artes marciais à ciência da psicomotricidade e à Terapia ABA para o desenvolvimento de crianças atípicas e adultos autistas. Oferecemos um ambiente acolhedor e adaptado para que cada aluno desenvolva habilidades físicas, cognitivas e sociais essenciais para o seu dia a dia.
              </p>
              <p className="text-gray-800 text-lg mb-8">
                Aqui, cada movimento é superação, cada treino é conquista e cada pessoa é parte dessa jornada.
              </p>

              <ul className="space-y-6">
                {[
                  { icon: <Puzzle className="text-amk-blue w-6 h-6 shrink-0 mt-1" />, title: "Respeito e Acolhimento", text: "O ritmo é respeitado, o progresso é celebrado e o aprendizado é para a vida toda. Respeito absoluto às individualidades e ritmos de aprendizado." },
                  { icon: <UserPlus className="text-amk-blue w-6 h-6 shrink-0 mt-1" />, title: "Desenvolvimento Global", text: "Estimula habilidades motoras, cognitivas, sociais e emocionais de forma integrada." },
                  { icon: <Heart className="text-amk-blue w-6 h-6 shrink-0 mt-1" />, title: "Regulação Emocional", text: "Ajuda a lidar com emoções, reduz a ansiedade e promove o equilíbrio." },
                  { icon: <Star className="text-amk-blue w-6 h-6 shrink-0 mt-1" />, title: "Autonomia e Confiança", text: "A criança se sente capaz, conquista novos desafios e acredita mais em si. Favorece a autonomia e a independência funcional." }
                ].map((li, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {li.icon}
                    <div>
                      <h4 className="font-heading font-bold text-lg text-amk-black mb-1">{li.title}</h4>
                      <p className="text-gray-800">{li.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-[10px_10px_0px_#0033A0] min-h-[400px]">
              <img src={imgInclusao} alt="Inclusão e socialização no esporte" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* GRADE DE HORÁRIOS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-white mb-10 border-b-4 border-amk-red inline-block pb-2 uppercase">
          Grade de Horários
        </h2>
        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-amk-red text-amk-white font-heading text-lg">
                <th className="p-5">Dia da Semana</th>
                <th className="p-5">Kwon Bop</th>
                <th className="p-5">Sipalki-Do</th>
                <th className="p-5">Gumkido</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-gray-800">
                <td className="p-5">Terça-feira</td>
                <td className="p-5">19:00</td>
                <td className="p-5 text-amk-red font-bold">20:00</td>
                <td className="p-5">21:00</td>
              </tr>
              <tr className="bg-[#111] border-b border-gray-800">
                <td className="p-5">Quinta-feira</td>
                <td className="p-5">19:00</td>
                <td className="p-5 text-amk-red font-bold">20:00</td>
                <td className="p-5">21:00</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-5">Sábado</td>
                <td className="p-5">16:00</td>
                <td className="p-5 text-amk-red font-bold">17:00</td>
                <td className="p-5">18:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ONDE ESTAMOS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-amk-white mb-10 border-b-4 border-amk-red inline-block pb-2 uppercase">
              Onde Estamos
            </h2>
            <h3 className="font-heading text-2xl text-amk-red mb-4 uppercase">Endereço</h3>
            <p className="flex items-start gap-4 text-gray-400 text-lg mb-8">
              <MapPin className="text-amk-red w-6 h-6 shrink-0 mt-1" />
              Rua Belo Horizonte, 828, 2º Piso<br/>Jardim Laranjeiras, Foz do Iguaçu - PR
            </p>
            
            <h3 className="font-heading text-2xl text-amk-red mb-4 uppercase mt-8">Contato Direto</h3>
            <p className="flex items-center gap-4 text-gray-400 text-lg mb-2">
              <WhatsAppIcon className="text-amk-red w-6 h-6" /> (45) 99834-5874
            </p>
            <p className="flex items-center gap-4 text-gray-400 text-lg mb-8">
              <InstagramIcon className="text-amk-red w-6 h-6" /> @amk.saja
            </p>
            
            <a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Belo+Horizonte,+828,+Jardim+das+Laranjeiras,+Foz+do+Iguaçu+-+PR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-amk-green text-amk-white font-heading font-bold px-8 py-4 rounded uppercase tracking-wide hover:bg-green-600 transition-colors mt-5">
              <Route className="w-5 h-5" /> Google Maps
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-[350px] shadow-[10px_10px_0px_#D31118]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.3787720973617!2d-54.57790588498453!3d-25.509094083751765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f691b000000001%3A0x1a8b940e791e847c!2sR.%20Belo%20Horizonte%2C%20828%20-%20Jardim%20das%20Laranjeiras%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização AMK Saja"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 bg-[#050505] text-[#777] text-sm">
        <p>Sipalki Soo Bahk | AMK Saja Sipalki &copy; 2026</p>
      </footer>

    </div>
  );
}

export default App;