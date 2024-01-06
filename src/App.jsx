import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './components/Loader';
import './styles/app.scss';
import { ThemeProvider, createTheme } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import Home from './Pages/Home';
import RootLayout from './Layouts/RootLayout';
import AppLayout from './Layouts/AppLayout';
// import Traning from './Pages/app/Traning';
import { useEffect } from 'react';
import { useState } from 'react';
// import Access from './Pages/app/Access';
import NoPage from './Pages/NoPage';
import TrainingLayout from './Layouts/AppLayout/TrainingLayout';
import Lora from './Pages/app/Traning/Lora';
import Perplexity from './Pages/app/Traning/Perplexity';




function App() {
  const [mode, setMode] = useState('light')
  useEffect(() => { document.documentElement.classList.add(mode) }, [mode])
  const theme = createTheme({ palette: { mode: mode }, });


  return (
    <>
      <Toaster />
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<RootLayout />} >
                <Route index element={<Home />} />
                <Route path='app' element={<AppLayout />}>
                  <Route path='traning' element={<TrainingLayout />} >
                    <Route path='lora' element={<Lora />} />
                    <Route path='perplexity' element={<Perplexity />} />
                  </Route>
                  {/* <Route path='traning' element={<Traning />} />
                  <Route path='access' element={<Access />} /> */}
                </Route>

                <Route path='*' element={<NoPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>


    </>
  )
}

export default App
