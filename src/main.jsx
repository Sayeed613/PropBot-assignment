import { createRoot } from 'react-dom/client'
BrowserRouter
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {UserProvider} from './context/UserContext.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <UserProvider>
    <App />
</UserProvider>
  </BrowserRouter>,
)
