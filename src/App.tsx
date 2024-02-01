import './global.css'

import { Route, Routes } from 'react-router-dom'

import AuthLayout from './_auth/AuthLayout'
import { Home } from './_root/pages'
import RootLayout from './_root/RootLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Toaster } from './components/ui/toaster'

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* {public Router} */}
        <Route element={<AuthLayout />}>
          <Route path="/mashook" element={<SigninForm />} />
          <Route path="/daftardulukalee" element={<SignupForm />} />
        </Route>

        {/* {private Router} */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App
