import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import App from './App'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* this is where ill put in my "child" route paths */}
  </Route>,
)

export const router = createBrowserRouter(routes)
