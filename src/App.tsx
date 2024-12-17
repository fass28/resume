import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { Home } from './Pages'
import I18n from './i18n'

const Routes = createRoutesFromElements(
  <>
    <Route path='/' element={<Home />} />
    <Route path='/:lang' element={<Home />} />
  </>
)

const AppRoutes = () => {
  const router = createBrowserRouter(Routes)
  return <RouterProvider router={router} />
}
function App() {
  I18n.init()
  return <AppRoutes />
}

export default App
