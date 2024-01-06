import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './components/Loader';
import './styles/app.scss';
import { ThemeProvider, createTheme } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import Home from './Pages/Home';
import RootLayout from './Layouts/RootLayout';
import AppLayout from './Layouts/AppLayout';
import { useEffect } from 'react';
import { useState } from 'react';
import NoPage from './Pages/NoPage';
import TrainingLayout from './Layouts/AppLayout/TrainingLayout';
import Lora from './Pages/app/Traning/Lora';
import Perplexity from './Pages/app/Traning/Perplexity';
import NoteBookLayout from './Layouts/AppLayout/NoteBookLayout';
import Raw from './Pages/app/Notebook/Raw';
import MarkDown from './Pages/app/Notebook/MarkDown';




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

                  <Route path='notebook' element={<NoteBookLayout />} >
                    <Route path='raw' element={<Raw />} />
                    <Route path='markdown' element={<MarkDown />} />

                    <Route path='*' element={<NoPage />} />
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
