import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function ConnectionTest() {
  const [organizations, setOrganizations] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOrganizations() {
      try {
        setLoading(true)
        //query the 'organisations' table created in Supabase
        const { data, error } = await supabase.from('organizations').select('*')

        if (error) {
          throw error
        }

        setOrganizations(data || [])
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchOrganizations()
  }, [])

  return (
    <div
      style={{
        padding: '1.5rem',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        background: '#f9fafb',
      }}
    >
      <h2>Supabase Connection Test 🔌</h2>

      {loading && <p>Connecting to Supabase cloud database...</p>}

      {error && (
        <p style={{ color: 'red' }}>
          <strong>Connection Error:</strong> {error}
        </p>
      )}

      {!loading && !error && (
        <div>
          <p style={{ color: '#16a34a', fontWeight: 'bold' }}>
            Successfully connected to Supabase!
          </p>
          <p>Organisations found in database:</p>
          <pre
            style={{
              background: '#e5e7eb',
              padding: '1rem',
              borderRadius: '4px',
            }}
          >
            {JSON.stringify(organizations, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
