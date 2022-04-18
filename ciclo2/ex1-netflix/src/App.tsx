import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/routes'
import GlobalStyles from './styles/GlobalStyles'

export const App = () => (
  <BrowserRouter>
    <Router />
    <GlobalStyles />
  </BrowserRouter>
)
