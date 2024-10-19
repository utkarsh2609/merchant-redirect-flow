import { RouterProvider } from 'react-router-dom'
import routes from './appRoutes.js';

import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
