import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <span style={s.logo}>⬡ SaasForge</span>
        <div style={s.navLinks}>
          <button style={s.ghostBtn} onClick={() => navigate('/login')}>Sign in</button>
          <button style={s.darkBtn} onClick={() => navigate('/register')}>Get started</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroInner}>
          <div style={s.heroBadge}>Now in beta · Free to start</div>
          <h1 style={s.heroTitle}>Build your SaaS<br />faster than ever</h1>
          <p style={s.heroSubtitle}>
            SaasForge gives you auth, billing, and a dashboard out of the box.
            Stop rebuilding the same things. Start shipping.
          </p>
          <div style={s.heroBtns}>
            <button style={s.darkBtn} onClick={() => navigate('/register')}>
              Start for free →
            </button>
            <button style={s.ghostBtn} onClick={() => navigate('/login')}>
              Sign in
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={s.features}>
        <h2 style={s.sectionTitle}>Everything you need to launch</h2>
        <p style={s.sectionSubtitle}>Stop wasting time on boilerplate. SaasForge handles the hard parts.</p>
        <div style={s.featureGrid}>
          {[
            { icon: '🔐', title: 'Authentication', desc: 'JWT-based auth with register, login, and protected routes built in.' },
            { icon: '💳', title: 'Stripe Billing', desc: 'Subscription checkout, plan management, and billing portal ready to go.' },
            { icon: '⚡', title: 'REST API', desc: 'Spring Boot backend with PostgreSQL, Hibernate, and clean architecture.' },
            { icon: '🎨', title: 'React Frontend', desc: 'Clean, minimal UI that\\'s easy to customize and extend.' },
            { icon: '🛡️', title: 'Security', desc: 'BCrypt password hashing, CORS config, and stateless sessions.' },
            { icon: '🚀', title: 'Deploy Ready', desc: 'Built for production with environment configs and deployment guides.' },
          ].map((f, i) => (
            <div key={i} style={s.featureCard}>
              <div style={s.featureIcon}>{f.icon}</div>
              <h3 style={s.featureTitle}>{f.title}</h3>
              <p style={s.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={s.pricing}>
        <h2 style={s.sectionTitle}>Simple pricing</h2>
        <p style={s.sectionSubtitle}>Start free. Upgrade when you're ready.</p>
        <div style={s.pricingGrid}>
          <div style={s.pricingCard}>
            <p style={s.planName}>Free</p>
            <div style={s.priceRow}>
              <span style={s.price}>$0</span>
              <span style={s.period}>/month</span>
            </div>
            <ul style={s.featureList}>
              {['1 project', 'Basic auth', 'Community support'].map((f, i) => (
                <li key={i} style={s.featureItem}>✓ {f}</li>
              ))}
            </ul>
            <button style={s.ghostBtn} onClick={() => navigate('/register')}>Get started</button>
          </div>

          <div style={{...s.pricingCard, ...s.pricingCardPro}}>
            <div style={s.proBadge}>Most popular</div>
            <p style={{...s.planName, color: 'white'}}>Pro</p>
            <div style={s.priceRow}>
              <span style={{...s.price, color: 'white'}}>$10</span>
              <span style={{...s.period, color: 'rgba(255,255,255,0.7)'}}>/month</span>
            </div>
            <ul style={s.featureList}>
              {['Unlimited projects', 'Full auth + billing', 'Priority support', 'API access'].map((f, i) => (
                <li key={i} style={{...s.featureItem, color: 'rgba(255,255,255,0.85)'}}>✓ {f}</li>
              ))}
            </ul>
            <button style={s.whiteBtn} onClick={() => navigate('/register')}>Start free trial</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={s.footer}>
        <span style={s.footerLogo}>⬡ SaasForge</span>
        <p style={s.footerText}>Built with Spring Boot + React</p>
      </footer>
    </div>
  );
}

const s = {
  page: { minHeight: '100vh', background: '#fafafa' },
  nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '60px', background: 'white', borderBottom: '1px solid #eaeaea', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '18px', fontWeight: '700' },
  navLinks: { display: 'flex', gap: '12px', alignItems: 'center' },
  ghostBtn: { padding: '8px 16px', background: 'transparent', border: '1px solid #eaeaea', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', color: '#333' },
  darkBtn: { padding: '8px 16px', background: '#111', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', color: 'white' },
  whiteBtn: { padding: '10px 20px', background: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', color: '#111', width: '100%', marginTop: '8px' },
  hero: { padding: '100px 48px', textAlign: 'center' },
  heroInner: { maxWidth: '640px', margin: '0 auto' },
  heroBadge: { display: 'inline-block', padding: '4px 14px', background: '#f4f4f5', borderRadius: '20px', fontSize: '13px', color: '#666', marginBottom: '24px' },
  heroTitle: { fontSize: '56px', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em', marginBottom: '20px' },
  heroSubtitle: { fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '36px' },
  heroBtns: { display: 'flex', gap: '12px', justifyContent: 'center' },
  features: { padding: '80px 48px', background: 'white', borderTop: '1px solid #eaeaea' },
  sectionTitle: { fontSize: '32px', fontWeight: '600', textAlign: 'center', marginBottom: '12px' },
  sectionSubtitle: { fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '48px' },
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' },
  featureCard: { padding: '28px', border: '1px solid #eaeaea', borderRadius: '12px', background: '#fafafa' },
  featureIcon: { fontSize: '28px', marginBottom: '16px' },
  featureTitle: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' },
  featureDesc: { fontSize: '14px', color: '#666', lineHeight: '1.6' },
  pricing: { padding: '80px 48px' },
  pricingGrid: { display: 'flex', gap: '24px', maxWidth: '680px', margin: '0 auto', justifyContent: 'center', flexWrap: 'wrap' },
  pricingCard: { flex: '1', minWidth: '280px', padding: '32px', border: '1px solid #eaeaea', borderRadius: '16px', background: 'white' },
  pricingCardPro: { background: '#111', border: '1px solid #111' },
  proBadge: { display: 'inline-block', padding: '3px 10px', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', fontSize: '12px', color: 'white', marginBottom: '16px' },
  planName: { fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#111' },
  priceRow: { display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' },
  price: { fontSize: '40px', fontWeight: '700', color: '#111' },
  period: { fontSize: '15px', color: '#666' },
  featureList: { listStyle: 'none', marginBottom: '28px' },
  featureItem: { fontSize: '14px', color: '#555', padding: '6px 0', borderBottom: '1px solid #f4f4f5' },
  footer: { padding: '40px 48px', borderTop: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  footerLogo: { fontSize: '16px', fontWeight: '700' },
  footerText: { fontSize: '14px', color: '#999' },
};