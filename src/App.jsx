import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './components/Loader';
import './styles/app.scss';
import { ThemeProvider, createTheme } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import Home from './Pages/Home';
import AuthLayout from './Layouts/AuthLayout';
import SignIn from './Pages/auth/SignIn';
import SignUp from './Pages/auth/SignUp';
import CreateAccount from './Pages/auth/CreateAccount';
import Forgot from './Pages/auth/Forgot';
import Reset from './Pages/auth/Reset';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import RootLayout from './Layouts/RootLayout';
import MainLayout from './Layouts/MainLayout';
import Traning from './Pages/Dashboard/Traning';
import { useEffect } from 'react';
import { useState } from 'react';




function App() {

  const [mode, setMode] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.add(mode);
  }, [mode])

  const theme = createTheme({
    palette: {
      mode: mode
    },
  });

  return (
    <>
      <Toaster />
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<RootLayout />} >
                <Route index element={<Home />} />

                <Route path='dashboard' element={<MainLayout />}>
                  <Route path='traning' element={<Traning />} />
                </Route>

                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
              </Route>


              <Route path='/auth' element={<AuthLayout />}>
                <Route index element={<SignIn />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='create-account' element={<CreateAccount />} />
                <Route path='forgot' element={<Forgot />} />
                <Route path='reset-password' element={<Reset />} />
              </Route>

            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>


    </>
  )
}

export default App
