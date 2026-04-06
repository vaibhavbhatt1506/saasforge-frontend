import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.logo}>⬡ SaasForge</div>
        <h1 style={s.title}>Welcome back</h1>
        <p style={s.subtitle}>Sign in to your account</p>

        {error && <div style={s.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label style={s.label}>Email</label>
          <input style={s.input} type="email" placeholder="you@example.com"
            value={email} onChange={e => setEmail(e.target.value)} required />

          <label style={s.label}>Password</label>
          <input style={s.input} type="password" placeholder="••••••••"
            value={password} onChange={e => setPassword(e.target.value)} required />

          <button style={loading ? {...s.btn, opacity: 0.7} : s.btn} type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p style={s.footer}>
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

const s = {
  page: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa' },
  card: { width: '100%', maxWidth: '400px', padding: '40px', background: 'white', borderRadius: '12px', border: '1px solid #eaeaea' },
  logo: { fontSize: '20px', fontWeight: '700', marginBottom: '32px', color: '#111' },
  title: { fontSize: '24px', fontWeight: '600', marginBottom: '8px' },
  subtitle: { color: '#666', marginBottom: '28px', fontSize: '15px' },
  label: { display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#333' },
  input: { width: '100%', padding: '10px 12px', marginBottom: '20px', border: '1px solid #eaeaea', borderRadius: '8px', fontSize: '15px', outline: 'none', background: '#fafafa' },
  btn: { width: '100%', padding: '11px', background: '#111', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '500', marginTop: '4px' },
  error: { background: '#fff5f5', color: '#e53e3e', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' },
  footer: { textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }
};