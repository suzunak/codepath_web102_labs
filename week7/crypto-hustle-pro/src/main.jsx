import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './routes/Layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
)
