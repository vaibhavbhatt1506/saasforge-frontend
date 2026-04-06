import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/auth/me')
      .then(res => setUser(res.data))
      .catch(() => navigate('/login'));
    api.get('/api/subscription/status')
      .then(res => setSubscription(res.data))
      .catch(() => {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleUpgrade = async () => {
    try {
      const res = await api.post('/api/subscription/checkout', {
        priceId: 'price_1T7T4TKAKR2e9SXff8pTppw4'
      });
      window.location.href = res.data.url;
    } catch (err) {
      alert('Failed to start checkout. Please try again.');
    }
  };

  if (!user) return (
    <div style={s.loadingPage}>
      <div style={s.spinner} />
    </div>
  );

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navLeft}>
          <span style={s.logo}>⬡ SaasForge</span>
        </div>
        <div style={s.navRight}>
          <span style={s.navEmail}>{user.email}</span>
          <button style={s.logoutBtn} onClick={handleLogout}>Sign out</button>
        </div>
      </nav>

      <main style={s.main}>
        <div style={s.greeting}>
          <h1 style={s.greetingTitle}>Good to see you, {user.name.split(' ')[0]} 👋</h1>
          <p style={s.greetingSubtitle}>Here's what's happening with your account.</p>
        </div>

        <div style={s.grid}>
          <div style={s.card}>
            <div style={s.cardHeader}>
              <span style={s.cardIcon}>👤</span>
              <span style={s.cardLabel}>Account</span>
            </div>
            <div style={s.cardBody}>
              <p style={s.cardName}>{user.name}</p>
              <p style={s.cardEmail}>{user.email}</p>
              <span style={s.badge}>{user.role}</span>
            </div>
          </div>

          <div style={s.card}>
            <div style={s.cardHeader}>
              <span style={s.cardIcon}>⚡</span>
              <span style={s.cardLabel}>Subscription</span>
            </div>
            <div style={s.cardBody}>
              {subscription ? (
                <>
                  <p style={s.planName}>{subscription.planName}</p>
                  <span style={{...s.badge, background: '#f0fdf4', color: '#16a34a'}}>{subscription.status}</span>
                </>
              ) : (
                <>
                  <p style={s.cardEmail}>You're on the free plan.</p>
                  <button style={s.upgradeBtn} onClick={handleUpgrade}>
                    Upgrade to Pro →
                  </button>
                </>
              )}
            </div>
          </div>

          <div style={s.card}>
            <div style={s.cardHeader}>
              <span style={s.cardIcon}>📊</span>
              <span style={s.cardLabel}>Usage</span>
            </div>
            <div style={s.cardBody}>
              <p style={s.cardEmail}>API requests this month</p>
              <p style={s.bigNumber}>0</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const s = {
  page: { minHeight: '100vh', background: '#fafafa' },
  loadingPage: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  spinner: { width: '24px', height: '24px', border: '2px solid #eaeaea', borderTop: '2px solid #111', borderRadius: '50%', animation: 'spin 0.8s linear infinite' },
  nav: { background: 'white', borderBottom: '1px solid #eaeaea', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  navLeft: { display: 'flex', alignItems: 'center', gap: '32px' },
  navRight: { display: 'flex', alignItems: 'center', gap: '16px' },
  logo: { fontSize: '18px', fontWeight: '700', color: '#111' },
  navEmail: { fontSize: '14px', color: '#666' },
  logoutBtn: { padding: '6px 14px', background: 'transparent', border: '1px solid #eaeaea', borderRadius: '6px', fontSize: '14px', color: '#333' },
  main: { maxWidth: '900px', margin: '0 auto', padding: '48px 24px' },
  greeting: { marginBottom: '40px' },
  greetingTitle: { fontSize: '28px', fontWeight: '600', marginBottom: '8px' },
  greetingSubtitle: { color: '#666', fontSize: '15px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' },
  card: { background: 'white', border: '1px solid #eaeaea', borderRadius: '12px', padding: '24px' },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' },
  cardIcon: { fontSize: '20px' },
  cardLabel: { fontSize: '13px', fontWeight: '500', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' },
  cardBody: {},
  cardName: { fontSize: '16px', fontWeight: '600', marginBottom: '4px' },
  cardEmail: { fontSize: '14px', color: '#666', marginBottom: '12px' },
  planName: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' },
  badge: { display: 'inline-block', padding: '3px 10px', background: '#f4f4f5', color: '#52525b', borderRadius: '20px', fontSize: '12px', fontWeight: '500' },
  upgradeBtn: { marginTop: '4px', padding: '8px 16px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500' },
  bigNumber: { fontSize: '32px', fontWeight: '600', marginTop: '8px' },
};