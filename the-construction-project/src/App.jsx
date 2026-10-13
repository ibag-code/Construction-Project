import { Routes, Route} from 'react-router'
import { Website } from './Website/website'
import { SignUp } from './Entrance/signup'
import { SignIn } from './Entrance/signin'
import { SignupAuth } from './Entrance/Verify/Signupauth'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Website />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/SignupAuth' element={<SignupAuth />} />
    </Routes>
  )
}

export default App
