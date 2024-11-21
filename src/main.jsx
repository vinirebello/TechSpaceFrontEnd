import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/App.jsx'
import './index.css'
import  Register  from './screens/register/register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
    <Form />
  </StrictMode>,
)
