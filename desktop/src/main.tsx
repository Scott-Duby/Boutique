import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

// Used to serve static environment (Electron)
export const history = createHashHistory();

const router = createRouter({ routeTree, basepath: './', history });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
