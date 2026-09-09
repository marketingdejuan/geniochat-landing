import React from 'react';
import { Download, CheckCircle2, Shield, LayoutDashboard, MessageSquare, Users, Star, ShoppingCart, Bot } from 'lucide-react';

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
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-emerald-500 transition-colors">Características</a>
              <a href="#pricing" className="hover:text-emerald-500 transition-colors">Precios</a>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/30">
              <Download size={16} /> Instalar en Chrome
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200">
            <Star size={14} className="fill-emerald-500" /> La herramienta #1 para ventas en WhatsApp
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            El superpoder que le faltaba <br className="hidden md:block"/> a tu <span className="text-emerald-500">WhatsApp Web</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
            Convierte tu WhatsApp en un CRM completo. Embudos de venta, respuestas inteligentes, filtros personalizados y carritos de compra sin salir del chat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/30">
              <Download size={20} /> Agregar a Chrome (Es Gratis)
            </button>
            <button className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Ver Demo en Video
            </button>
          </div>
        </div>
      </div>

      {/* CARACTERÍSTICAS */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Todo lo que necesitas para vender más</h2>
            <p className="mt-4 text-lg text-slate-500">Diseñado específicamente para negocios, restaurantes y agencias.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <LayoutDashboard className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pestañas Personalizadas</h3>
              <p className="text-slate-500">Organiza tus chats como WA Web Plus. Crea carpetas para "Domicilios", "Proveedores" o "VIPs".</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Modo Privacidad</h3>
              <p className="text-slate-500">Oculta nombres, fotos y mensajes recientes con un solo clic. Ideal para puntos de venta físicos.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Bot className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Copilot Inteligente</h3>
              <p className="text-slate-500">Nuestra IA lee el último mensaje del cliente y te sugiere respuestas exactas con tu menú y precios.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRECIOS */}
      <div id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Precios simples y transparentes</h2>
            <p className="mt-4 text-lg text-slate-500">Empieza gratis, mejora cuando tu negocio lo necesite.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Básico</h3>
              <p className="text-slate-500 mb-6">Para empezar a organizar tu WhatsApp.</p>
              <div className="mb-6"><span className="text-5xl font-extrabold">$0</span><span className="text-slate-500">/mes</span></div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20}/> Filtros de chat estilo WA Plus</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20}/> Modo privacidad (Blur)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20}/> Guardado de clientes básico</li>
              </ul>
              {/* BOTÓN DEL PLAN BÁSICO (Con alerta mientras aprueban la tienda) */}
              <button 
                onClick={() => alert('Próximamente: El enlace de la Chrome Store estará activo en un par de días. ¡Escríbenos para darte acceso anticipado!')}
                className="w-full py-3 rounded-xl font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                Instalar Gratis
              </button>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-emerald-500/10 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Negocios Pro</h3>
              <p className="text-slate-400 mb-6">El CRM completo para facturar más rápido.</p>
              <div className="mb-6"><span className="text-5xl font-extrabold text-white">$15</span><span className="text-slate-400">/mes</span></div>
              <ul className="flex flex-col gap-4 mb-8 flex-1 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> <span className="font-semibold text-white">Todo lo del Básico</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> Punto de Venta y Carrito</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={20}/> Tablero Kanban para Despachos</li>
              </ul>
              {/* BOTÓN DIRECTO A WHATSAPP PARA PAGO POR NEQUI */}
              <button 
                onClick={() => window.open('https://wa.me/573003298899?text=Hola%20Juan,%20vengo%20de%20la%20p%C3%A1gina%20web.%20Quiero%20adquirir%20el%20plan%20Negocios%20Pro%20de%20Geniochat.%20%C2%BFMe%20puedes%20pasar%20tu%20Nequi%3F', '_blank')}
                className="w-full py-3 rounded-xl font-bold text-slate-900 bg-emerald-500 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/25 flex justify-center items-center gap-2"
              >
                Comprar por Nequi <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER - ACTUALIZADO CON POLÍTICA DE PRIVACIDAD */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <ShoppingCart size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg text-slate-800">Geniochat</span>
          </div>
          
          <p className="text-slate-500 text-sm mb-4">
            © 2026 Geniochat. No estamos afiliados a WhatsApp LLC ni a Meta Platforms, Inc.
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