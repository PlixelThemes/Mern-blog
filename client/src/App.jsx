import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, About, SignUp, SignIn, Dashboard, Projects } from './Pages/index'
import {Footer, Header, PrivateRoute} from './Components/index'


 function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route element={<PrivateRoute />} >
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App