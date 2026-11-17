// src/App.tsx
import { Link, Outlet } from 'react-router'
import ConnectionTest from './components/ConnectionTest'

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Kintree</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Multi-Tenant Childcare & Community Management App
      </p>

      {/* Persistent Navigation */}
      <nav style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        <Link to="/" style={navButtonStyle}>
          Home / Signup
        </Link>
      </nav>

      {/* Render our connection test for now */}
      <ConnectionTest />

      <Outlet />
    </div>
  )
}

const navButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  background: '#2c5e43',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
}
