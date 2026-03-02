export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#eef0f8" }}>

      {/* HEADER */}
      <header style={{ backgroundColor: "#1a237e" }} className="px-10 py-4 flex items-center justify-between">
        <a href="#" className="text-white text-sm flex items-center gap-2">← Go Back</a>
        <h1 className="text-white text-2xl font-black tracking-widest">201Y</h1>
        <button className="text-white">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <rect width="22" height="2" fill="white" />
            <rect y="7" width="22" height="2" fill="white" />
            <rect y="14" width="22" height="2" fill="white" />
          </svg>
        </button>
      </header>

      {/* STEPPER */}
      <div style={{ backgroundColor: "#1e2d8f" }} className="px-10 py-5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Personal details</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <span className="text-white text-sm font-medium">Order details</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-blue-400 flex items-center justify-center" style={{ backgroundColor: "#1a237e" }}>
              <span className="text-blue-300 text-sm font-bold">3</span>
            </div>
            <span className="text-blue-300 text-sm">Payment</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-blue-400 flex items-center justify-center" style={{ backgroundColor: "#1a237e" }}>
              <span className="text-blue-300 text-sm font-bold">4</span>
            </div>
            <span className="text-blue-300 text-sm">Confirmation</span>
          </div>

          <a href="#" className="text-white text-sm flex items-center gap-2 ml-auto">← Previous step</a>
        </div>
      </div>

      {/* FRANJA AZUL CORTA (fondo detrás de cards) */}
      <div style={{ backgroundColor: "#1a237e" }} className="h-16"></div>

      {/* ÁREA PRINCIPAL */}
      <div className="px-10 -mt-10 pb-10">
        <div className="max-w-5xl mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "20px" }}>

          {/* ======= CARD IZQUIERDA ======= */}
          <div style={{ display: "grid", gridTemplateRows: "1fr auto" }}>

            {/* Parte superior blanca con productos */}
            <div className="bg-white rounded-t-2xl shadow p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold text-gray-900 text-base">Order items</h2>
                <a href="#" className="text-blue-600 text-sm flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M9.5 1.5L11.5 3.5L4 11H2V9L9.5 1.5Z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  Edit shopping cart
                </a>
              </div>

              {/* Producto 1 */}
              <div className="flex items-center gap-4 py-4">
                <div className="w-[72px] h-[72px] rounded-xl flex-shrink-0 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #b2dfdb 0%, #80cbc4 40%, #26c6da 70%, #1565c0 100%)" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/30 rounded-xl transform rotate-12"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-blue-600 font-semibold text-sm">Silicone Case for iPhone 7</p>
                  <p className="text-gray-400 text-xs mt-1">Product color: Midnight Blue, Turquoise Blue</p>
                  <p className="text-gray-400 text-xs">Quantity: 2 items</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 font-bold text-lg">€ 36.40</p>
                  <p className="text-gray-400 text-xs">€ 18.20 per item</p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Producto 2 */}
              <div className="flex items-center gap-4 py-4">
                <div className="w-[72px] h-[72px] rounded-xl flex-shrink-0 bg-gray-900 flex items-center justify-center">
                  <div className="w-10 h-[54px] bg-black rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 opacity-80"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-blue-600 font-semibold text-sm">Tempered glass for Iphone</p>
                  <p className="text-gray-400 text-xs mt-1">Size: Iphone 7, Iphone 8</p>
                  <p className="text-gray-400 text-xs">Quantity: 4 items</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 font-bold text-lg">€ 20.00</p>
                  <p className="text-gray-400 text-xs">€ 5.00 per item</p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Producto 3 */}
              <div className="flex items-center gap-4 py-4">
                <div className="w-[72px] h-[72px] rounded-xl flex-shrink-0 bg-gray-900 flex items-center justify-center">
                  <div className="w-10 h-[54px] bg-black rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 opacity-80"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-blue-600 font-semibold text-sm">Tempered glass for Iphone</p>
                  <p className="text-gray-400 text-xs mt-1">Size: Iphone 7, Iphone 8</p>
                  <p className="text-gray-400 text-xs">Quantity: 4 items</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 font-bold text-lg">€ 20.00</p>
                  <p className="text-gray-400 text-xs">€ 5.00 per item</p>
                </div>
              </div>
            </div>

            {/* Parte inferior gris con descuento — SEPARADA */}
            <div className="rounded-b-2xl py-5 text-center mt-0" style={{ backgroundColor: "#dde1f0" }}>
              <a href="#" className="text-blue-900 font-semibold text-sm">
                Have discount code? Click to enter it.
              </a>
            </div>

          </div>

          {/* ======= COLUMNA DERECHA ======= */}
          <div className="flex flex-col gap-4">

            {/* Card Summary */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Summary</h3>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                The total cost consist of the tax, insurance and the delivery charge.
              </p>

              <div className="flex justify-between py-1.5">
                <span className="text-gray-500 text-sm">Subtotal</span>
                <span className="text-gray-800 text-sm font-semibold">€ 56.40</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-500 text-sm">Delivery</span>
                <span className="text-gray-900 text-sm font-bold">FREE</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-500 text-sm">Tax</span>
                <span className="text-gray-800 text-sm font-semibold">€ 11.84</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-500 text-sm">Insurance</span>
                <span className="text-gray-800 text-sm font-semibold">€ 7.00</span>
              </div>

              <hr className="border-gray-200 my-3" />

              <div className="flex justify-between">
                <span className="text-gray-900 font-bold text-sm">TOTAL:</span>
                <span className="text-gray-900 font-bold text-lg">€ 75.24</span>
              </div>
            </div>

            {/* Card Delivery */}
            <div className="bg-white rounded-2xl shadow p-5 flex justify-between items-center">
              <span className="text-gray-800 font-semibold text-sm">Delivery</span>
              <button className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-xl font-light hover:border-blue-500 transition-colors">
                +
              </button>
            </div>

            {/* Botón Next Step */}
            <button
              className="text-white py-5 rounded-xl font-semibold text-sm shadow hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#1a237e" }}
            >
              Next step
            </button>

          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="px-10 mb-8">
        <div className="max-w-5xl mx-auto border-t-4 border-dashed border-gray-300"></div>
      </div>

      {/* FOOTER */}
      <footer className="pb-16" style={{ backgroundColor: "#eef0f8" }}>
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">

          <div className="flex flex-col items-center gap-3">
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
              <rect x="4" y="14" width="24" height="20" rx="3" stroke="#f59e0b" strokeWidth="2" />
              <path d="M10 14V10C10 6.686 12.686 4 16 4C19.314 4 22 6.686 22 10V14" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="16" cy="24" r="2.5" fill="#f59e0b" />
            </svg>
            <h4 className="text-gray-800 font-bold text-sm">Your information is Safe</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              The total cost consist of the tax, insurance and the delivery charge.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="34" height="36" viewBox="0 0 34 36" fill="none">
              <path d="M17 3L4 8V18C4 25.18 9.76 31.9 17 33C24.24 31.9 30 25.18 30 18V8L17 3Z" stroke="#f59e0b" strokeWidth="2" />
              <path d="M11 17L15 21L23 13" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="text-gray-800 font-bold text-sm">Secure checkout</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              The total cost consist of the tax, insurance and the delivery charge.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
              <path d="M4 18C4 10.268 10.268 4 18 4C25.732 4 32 10.268 32 18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <rect x="2" y="17" width="7" height="11" rx="2" stroke="#f59e0b" strokeWidth="2" />
              <rect x="27" y="17" width="7" height="11" rx="2" stroke="#f59e0b" strokeWidth="2" />
            </svg>
            <h4 className="text-gray-800 font-bold text-sm">24/7 Support</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              The total cost consist of the tax, insurance and the delivery charge.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}