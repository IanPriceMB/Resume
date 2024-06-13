import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { router } from './router';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)