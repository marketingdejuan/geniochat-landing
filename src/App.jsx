import React from 'react';
import { 
  Download, CheckCircle2, Shield, LayoutDashboard, MessageSquare, 
  Users, Star, ShoppingCart, Bot, Truck, Clock, Zap, Megaphone, 
  CalendarDays, ArrowRight 
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <ShoppingCart size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">Geniochat</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-600">
              <a href="#features" className="hover:text-emerald-500 transition-colors">Todo lo que incluye</a>
              <a href="#how-it-works" className="hover:text-emerald-500 transition-colors">Cómo funciona</a>
              <a href="#pricing" className="hover:text-emerald-500 transition-colors">Precios</a>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/30">
              <Download size={16} /> Instalar Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200">
            <Star size={14} className="fill-emerald-500" /> El SaaS #1 para potenciar tus ventas
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            El superpoder que le faltaba <br className="hidden md:block"/> a tu <span className="text-emerald-500">WhatsApp Web</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10 leading-relaxed">
            Deja de perder clientes en el caos de los mensajes. Convierte tu WhatsApp en un CRM visual, conecta la IA de Google y gestiona tus pedidos sin salir del chat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/30">
              Comenzar a vender más <ArrowRight size={20} />
            </a>
            <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
              <Download size={20} /> Instalar Extensión
            </button>
          </div>
        </div>
      </div>

      {/* MEGA GRILLA DE CARACTERÍSTICAS */}
      <div id="features" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Un ecosistema completo en tu navegador</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">No es solo organizar chats. Es automatizar, cobrar y despachar a la velocidad de la luz. Diseñado para negocios que quieren escalar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. CRM Kanban */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LayoutDashboard className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">CRM Visual (Kanban)</h3>
              <p className="text-slate-500 text-sm">Arrastra a tus clientes por embudos de venta (Prospectos, Negociando, Reservado, Cerrado) y mide tu efectividad.</p>
            </div>
            
            {/* 2. Copilot AI */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all group">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Copiloto IA (Gemini)</h3>
              <p className="text-slate-500 text-sm">¿Un cliente difícil? Geniochat lee su último mensaje y te redacta 3 opciones perfectas de respuesta al instante.</p>
            </div>

            {/* 3. Punto de Venta */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all group">
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Carrito y Pedidos</h3>
              <p className="text-slate-500 text-sm">Sube tu menú o catálogo. Agrega productos al carrito mientras chateas y genera un ticket de cobro detallado con un clic.</p>
            </div>

            {/* 4. Logística */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all group">
              <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="text-amber-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Control de Logística</h3>
              <p className="text-slate-500 text-sm">Mueve pedidos de "Preparando" a "En Ruta" y el sistema le notificará automáticamente a tu cliente el estado de su envío.</p>
            </div>

            {/* 5. Automatizaciones */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-green-200 transition-all group">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Auto-Reply & Programación</h3>
              <p className="text-slate-500 text-sm">Activa respuestas automáticas para nuevos clientes, o programa mensajes (con imágenes y audios) para enviarse en el futuro.</p>
            </div>

            {/* 6. Respuestas con Autollenado */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all group">
              <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Respuestas Inteligentes</h3>
              <p className="text-slate-500 text-sm">Crea plantillas con comandos como [Nombre] o [Barrio]. Geniochat los reemplaza automáticamente antes de enviar.</p>
            </div>

            {/* 7. Difusión Segura */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all group">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Megaphone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Campañas de Difusión</h3>
              <p className="text-slate-500 text-sm">Pega una lista de números, redacta una promoción y lanza tu campaña masiva con pausas de seguridad anti-baneo.</p>
            </div>

            {/* 8. Privacidad Extrema */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-slate-300 transition-all group">
              <div className="bg-slate-200 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="text-slate-600" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Modo Espía (Privacidad)</h3>
              <p className="text-slate-500 text-sm">Oculta nombres, fotos y mensajes de tu pantalla. Desenfoque instantáneo ideal si trabajas en puntos de venta físicos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <div id="how-it-works" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Empieza a vender como profesional en 3 pasos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-extrabold mb-6 shadow-lg shadow-emerald-500/20">1</div>
              <h3 className="text-xl font-bold mb-2">Instala la Extensión</h3>
              <p className="text-slate-400">Añade Geniochat a tu navegador Chrome en 10 segundos. Es ligero, seguro y 100% libre de virus.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-extrabold mb-6 shadow-lg shadow-emerald-500/20">2</div>
              <h3 className="text-xl font-bold mb-2">Activa tu Licencia</h3>
              <p className="text-slate-400">Adquiere tu código único, ingrésalo en la pestaña "Admin" de la herramienta y desbloquea todo el poder.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-extrabold mb-6 shadow-lg shadow-emerald-500/20">3</div>
              <h3 className="text-xl font-bold mb-2">Cierra más Ventas</h3>
              <p className="text-slate-400">Extrae datos de clientes, programa tus despachos y deja que nuestra Inteligencia Artificial venda por ti.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRECIOS */}
      <div id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Precios simples y transparentes</h2>
            <p className="mt-4 text-lg text-slate-500">Sin contratos forzosos. Mejora cuando tu negocio lo necesite.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* PLAN BÁSICO */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Versión Lite</h3>
              <p className="text-slate-500 mb-6">Para empezar a organizar tu WhatsApp.</p>
              <div className="mb-6"><span className="text-5xl font-extrabold">$0</span><span className="text-slate-500">/mes</span></div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20}/> Filtros de chat superiores</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20}/> Modo privacidad en pantalla (Blur)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20}/> Extracción básica de contactos</li>
              </ul>
              <button 
                onClick={() => alert('Próximamente: El enlace de la Chrome Store estará activo en un par de días. ¡Escríbenos para darte acceso anticipado!')}
                className="w-full py-3 rounded-xl font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                Instalar Gratis
              </button>
            </div>

            {/* PLAN PRO */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl shadow-emerald-500/20 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Negocios Pro</h3>
              <p className="text-slate-400 mb-6">El ecosistema completo para facturar más rápido.</p>
              <div className="mb-6"><span className="text-5xl font-extrabold text-white">$15</span><span className="text-slate-400">/mes</span></div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> <span className="font-semibold text-white">Todo lo de la versión Lite</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> Punto de Venta, Carrito y Tickets</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> Embudo de Ventas (CRM Kanban)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> Copiloto con Inteligencia Artificial</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> Auto-respuestas y Logística</li>
              </ul>
              
              {/* BOTÓN NEQUI */}
              <button 
                onClick={() => window.open('https://wa.me/573003298899?text=Hola%20Juan,%20vengo%20de%20la%20p%C3%A1gina%20web.%20Quiero%20adquirir%20el%20plan%20Negocios%20Pro%20de%20Geniochat.%20%C2%BFMe%20puedes%20pasar%20tu%20Nequi%3F', '_blank')}
                className="w-full py-4 rounded-xl font-bold text-slate-900 bg-emerald-500 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 flex justify-center items-center gap-2 text-lg"
              >
                Comprar Licencia <ShoppingCart size={20} />
              </button>
              <p className="text-center text-[10px] text-slate-500 mt-4">Soporte y pagos 100% seguros vía WhatsApp o Nequi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-lg mb-2">¿Es seguro? ¿Pueden banear mi número?</h4>
              <p className="text-slate-600">Geniochat es 100% seguro. Operamos localmente en tu navegador sin hackear la API oficial de WhatsApp. Nuestras herramientas de difusión tienen pausas programadas para simular el comportamiento humano y proteger tu número.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-lg mb-2">¿Tienen acceso a mis chats o contactos?</h4>
              <p className="text-slate-600">Absolutamente NO. Toda tu información se guarda en tu propio dispositivo (Local Storage). Geniochat no tiene servidores que almacenen la base de datos de tus clientes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-lg mb-2">¿Debo pagar extra por usar la IA de Google Gemini?</h4>
              <p className="text-slate-600">No, es completamente gratis. Dentro de tu panel Admin te enseñamos cómo sacar tu propia llave secreta (API Key) gratuita directamente desde la web de desarrolladores de Google.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <ShoppingCart size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg text-slate-800">Geniochat</span>
          </div>
          
          <p className="text-slate-500 text-sm mb-2">
            © 2026 Geniochat. No estamos afiliados a WhatsApp LLC ni a Meta Platforms, Inc.
          </p>
          <p className="text-slate-400 text-xs mb-6">
            Soporte comercial: +57 300 329 8899
          </p>
          
          <div className="mt-2">
            <a 
              href="/privacidad.html" 
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium underline underline-offset-4 transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;