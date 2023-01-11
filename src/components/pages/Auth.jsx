import { useState } from 'react'
import Register from './Register'

const Auth = () => {
  const [open, setOpen] = useState(false)

  const handleSetOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div style={{ width: '100%', height: '100vh', background: open && '#ccc' }}>
      <div
        style={{
          width: '1000px',
          margin: '0 auto',
        }}
      >
        <div>
          <h1>Auth</h1>
          <button
            onClick={handleSetOpen}
            style={{
              border: 'none',
              background: '#0062ff',
              display: 'flex',
              color: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              width: '150px',
              height: '30px',
              borderRadius: '10px',
              outline: '#0062ff',
              cursor: 'pointer',
            }}
          >
            Open Register
          </button>

          {open && <Register formTitle={'My Form'} />}
        </div>
      </div>
    </div>
  )
}

export default Auth
