export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#eceff5", fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>

      {/* ════════════════════════════════════
          HEADER — azul marino oscuro
      ════════════════════════════════════ */}
      <header style={{ backgroundColor: "#0c1380" }}>

        {/* Top navbar - centrado */}
        <div className="header-top" style={{ padding: "18px 40px" }}>
          <div style={{ maxWidth: "980px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.75)", fontSize: "13px", background: "none", border: "none", cursor: "pointer" }}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Go Back
            </button>
            
            <span className="year-text" style={{ color: "white", fontWeight: 900, fontSize: "26px", letterSpacing: "6px" }}>2019</span>
            
            <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white" }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white" }}></span>
            </button>
          </div>
        </div>

        {/* Stepper - más compacto */}
        <div className="content-padding stepper-container" style={{ padding: "0 40px", paddingBottom: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px", maxWidth: "980px", margin: "0 auto" }}>
            <div style={{ gridColumn: "1 / -1", backgroundColor: "#1a2db5", borderRadius: "8px", padding: "20px 36px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="stepper-steps" style={{ display: "flex", alignItems: "center", gap: "32px" }}>

              {/* Step 1 ✓ */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "#f5a623", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="15" height="15" fill="none" stroke="#0c1380" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="step-text" style={{ color: "white", fontSize: "13px", fontWeight: 500 }}>Personal details</span>
              </div>

              {/* Step 2 - activo */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>2</span>
                </div>
                <span className="step-text" style={{ color: "white", fontSize: "13px", fontWeight: 500 }}>Order details</span>
              </div>

              {/* Step 3 */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(12,19,128,0.4)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 700 }}>3</span>
                </div>
                <span className="step-text" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>Payment</span>
              </div>

              {/* Step 4 */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(12,19,128,0.4)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 700 }}>4</span>
                </div>
                <span className="step-text" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>Confirmation</span>
              </div>
            </div>

            {/* Previous step */}
            <button style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer" }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous step
            </button>
          </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════
          MAIN — grid 2 columnas
      ════════════════════════════════════ */}
      <main className="main-content" style={{ padding: "32px 40px", backgroundColor: "#eceff5" }}>
        <div className="main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px", maxWidth: "980px", margin: "0 auto" }}>

          {/* ── Panel izquierdo: Order Items ── */}
          <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "32px", boxShadow: "0 1px 8px rgba(0,10,60,0.07)" }}>

            {/* Cabecera */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", margin: 0 }}>Order items</h2>
              <button style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6b7db8", background: "none", border: "none", cursor: "pointer" }}>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit shopping cart
              </button>
            </div>

            {/* ── Producto 1: Silicone Case ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px 0", borderBottom: "1px solid #f0f2f8" }}>
              {/* Imagen: gradiente teal→azul con silueta de iPhone */}
              <div style={{ width: "72px", height: "72px", borderRadius: "12px", flexShrink: 0, background: "linear-gradient(145deg, #53c8cf 0%, #2b5eb8 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="34" height="42" viewBox="0 0 34 46" fill="none">
                  <rect x="5" y="2" width="24" height="42" rx="5" fill="white" fillOpacity="0.88"/>
                  <rect x="10" y="7" width="14" height="28" rx="2" fill="#5ac8d0" fillOpacity="0.45"/>
                  <circle cx="17" cy="41" r="2.2" fill="rgba(255,255,255,0.55)"/>
                  <rect x="13" y="2" width="8" height="3" rx="1.5" fill="rgba(255,255,255,0.5)"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13.5px", fontWeight: 600, color: "#1540b0", margin: "0 0 4px" }}>Silicone Case for iPhone 7</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: "0 0 2px" }}>Product color: Midnight Blue, Turquoise Blue</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: 0 }}>Quantity: 2 items</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: "20px", fontWeight: 700, color: "#1540b0", margin: "0 0 2px" }}>€ 36.40</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: 0 }}>€ 18.20 per item</p>
              </div>
            </div>

            {/* ── Producto 2: Tempered Glass ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px 0", borderBottom: "1px solid #f0f2f8" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "12px", flexShrink: 0, backgroundColor: "#0f1523", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="40" viewBox="0 0 28 44" fill="none">
                  <rect x="2" y="2" width="24" height="40" rx="4" fill="#1a2540"/>
                  <rect x="6" y="6" width="16" height="28" rx="1.5" fill="#162545"/>
                  <circle cx="14" cy="39" r="2" fill="#4a8fe8"/>
                  <polygon points="10,15 20,21 10,27" fill="#4a8fe8" fillOpacity="0.9"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13.5px", fontWeight: 600, color: "#1540b0", margin: "0 0 4px" }}>Tempered glass for Iphone</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: "0 0 2px" }}>Size: Iphone 7, Iphone 8</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: 0 }}>Quantity: 4 items</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: "20px", fontWeight: 700, color: "#1540b0", margin: "0 0 2px" }}>€ 20.00</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: 0 }}>€ 5.00 per item</p>
              </div>
            </div>

            {/* ── Producto 3: Tempered Glass (igual) ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px 0" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "12px", flexShrink: 0, backgroundColor: "#0f1523", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="40" viewBox="0 0 28 44" fill="none">
                  <rect x="2" y="2" width="24" height="40" rx="4" fill="#1a2540"/>
                  <rect x="6" y="6" width="16" height="28" rx="1.5" fill="#162545"/>
                  <circle cx="14" cy="39" r="2" fill="#4a8fe8"/>
                  <polygon points="10,15 20,21 10,27" fill="#4a8fe8" fillOpacity="0.9"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13.5px", fontWeight: 600, color: "#1540b0", margin: "0 0 4px" }}>Tempered glass for Iphone</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: "0 0 2px" }}>Size: Iphone 7, Iphone 8</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: 0 }}>Quantity: 4 items</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: "20px", fontWeight: 700, color: "#1540b0", margin: "0 0 2px" }}>€ 20.00</p>
                <p style={{ fontSize: "11.5px", color: "#aab3cc", margin: 0 }}>€ 5.00 per item</p>
              </div>
            </div>

            {/* Discount */}
            <div style={{ borderTop: "1px solid #f0f2f8", paddingTop: "20px", textAlign: "center" }}>
              <button style={{ fontSize: "13px", fontWeight: 700, color: "#111827", background: "none", border: "none", cursor: "pointer" }}>
                Have discount code? Click to enter it.
              </button>
            </div>
          </div>

          {/* ── Panel derecho ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Summary card */}
            <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "24px", boxShadow: "0 1px 8px rgba(0,10,60,0.07)" }}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Summary</h2>
              <p style={{ fontSize: "11.5px", color: "#aab3cc", lineHeight: "1.65", margin: "0 0 20px" }}>
                The total cost consist of the tax,<br/>insurance and the delivery charge.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { label: "Subtotal", value: "€ 56.40" },
                  { label: "Delivery", value: "FREE" },
                  { label: "Tax", value: "€ 11.84" },
                  { label: "Insurance", value: "€ 7.00" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", color: "#7c8baa" }}>{row.label}</span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#1540b0" }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #f0f2f8" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>TOTAL:</span>
                  <span style={{ fontSize: "19px", fontWeight: 800, color: "#1540b0" }}>€ 75.24</span>
                </div>
              </div>
            </div>

            {/* Delivery card */}
            <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "18px 24px", boxShadow: "0 1px 8px rgba(0,10,60,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827" }}>Delivery</span>
              <button style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1.5px solid #d5daea", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#7c8baa", lineHeight: 1 }}>
                +
              </button>
            </div>

            {/* Next step */}
            <button style={{ width: "100%", padding: "18px", borderRadius: "12px", backgroundColor: "#0c1380", color: "white", fontWeight: 600, fontSize: "14px", letterSpacing: "0.3px", border: "none", cursor: "pointer" }}>
              Next step
            </button>
          </div>
        </div>
      </main>

      {/* ════════════════════════════════════
          DIVISOR diagonal
      ════════════════════════════════════ */}
      <div className="content-padding" style={{ padding: "0 40px", backgroundColor: "#eceff5" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", paddingTop: "32px", paddingBottom: "32px" }}>
          <div style={{ width: "100%", height: "20px", backgroundColor: "#dde1ec", overflow: "hidden", borderRadius: "4px" }}>
            <svg width="100%" height="20" preserveAspectRatio="none" viewBox="0 0 1400 20">
              {Array.from({ length: 200 }).map((_, i) => (
                <rect
                  key={i}
                  x={i * 7 + 2}
                  y={7}
                  width={5}
                  height={5}
                  transform={`rotate(45 ${i * 7 + 4.5} 9.5)`}
                  fill="#b8bed4"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          FOOTER — 3 trust badges
      ════════════════════════════════════ */}
      <footer style={{ backgroundColor: "#eceff5", padding: "52px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>

          {/* 🔒 Safe */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
              <rect x="10" y="5" width="22" height="28" rx="3" stroke="#f5a623" strokeWidth="2.3" fill="none"/>
              <path d="M15 17h12M15 22h12M15 27h7" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
              <rect x="15" y="1" width="12" height="6" rx="2" stroke="#f5a623" strokeWidth="2" fill="none"/>
            </svg>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", margin: 0 }}>Your information is Safe</p>
            <p style={{ fontSize: "11.5px", color: "#aab3cc", lineHeight: "1.65", margin: 0 }}>
              The total cost consist of the tax,<br/>insurance and the delivery charge.
            </p>
          </div>

          {/* 🛡 Secure */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
              <path d="M21 3L7 9v11c0 8 5.5 15 14 18 8.5-3 14-10 14-18V9L21 3z" stroke="#f5a623" strokeWidth="2.3" fill="none"/>
              <path d="M14 21l5 5 9-9" stroke="#f5a623" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", margin: 0 }}>Secure checkout</p>
            <p style={{ fontSize: "11.5px", color: "#aab3cc", lineHeight: "1.65", margin: 0 }}>
              The total cost consist of the tax,<br/>insurance and the delivery charge.
            </p>
          </div>

          {/* 🎧 Support */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="42" height="42" fill="none" viewBox="0 0 42 42">
              <path d="M7 18C7 10.3 13.3 4 21 4s14 6.3 14 14" stroke="#f5a623" strokeWidth="2.3" fill="none"/>
              <rect x="4" y="18" width="7" height="12" rx="3.5" stroke="#f5a623" strokeWidth="2.3" fill="none"/>
              <rect x="31" y="18" width="7" height="12" rx="3.5" stroke="#f5a623" strokeWidth="2.3" fill="none"/>
              <path d="M35 30c0 5.5-6.3 9-14 9" stroke="#f5a623" strokeWidth="2.3" strokeLinecap="round" fill="none"/>
              <circle cx="21" cy="39" r="2.2" fill="#f5a623"/>
            </svg>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", margin: 0 }}>24/7 Support</p>
            <p style={{ fontSize: "11.5px", color: "#aab3cc", lineHeight: "1.65", margin: 0 }}>
              The total cost consist of the tax,<br/>insurance and the delivery charge.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}