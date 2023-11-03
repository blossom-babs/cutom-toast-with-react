import { useState } from 'react'
import Toast from './Toast'


function App() {
  const [alert, setAlert] = useState(false)

 const handleAlert = () => {setAlert(!alert)}

  return (
    <> 
    <div className='container'>
      <div>
        <img src="https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <h1>Email Verification Link Expired</h1>
        <p>Looks like the Verification link has expired. Not to worry, we can send the link again.</p>
        <button onClick={handleAlert}>Resend Verification Link</button>
      </div>
    </div>

    {alert && <Toast isOpen={alert} closeModal={handleAlert}/>}
    </>
  )
}

export default App
