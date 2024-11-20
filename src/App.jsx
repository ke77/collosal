import React from 'react'
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from  'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  // const router = createBrowserRouter(
    // createRoutesFromElements(
      // <Route path='/' element={<MainLayout />}>
      //   <Route index element={<HomePage />} />
      //   <Route path='*' element={<NotFoundPage />} />
      // </Route>
    // )
  // );

  // return <RouterProvider router={router} />
  return (
    <Router>
      <Switch>
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App