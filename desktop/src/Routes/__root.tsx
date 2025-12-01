import React from 'react';
import { Toaster } from '../components/@shadcn/ui/sonner';
import TableSkeleton from '../components/ItemTable/TableSkeleton';
import Navbar from '../components/Navbar';
import { useBoutiqueStore } from '../Hooks/Store/UseBoutiqueStore';
import { useQueries } from '@tanstack/react-query';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { HOST } from '../Routes/index';

declare global {
  interface Window {
    electronAPI: {
      settings: {
        getConnectionString: () => Promise<string>;
      };
    };
  }
}



export const Route = createRootRoute({
  component: Home, 
})

function Home() {
    const results = useQueries({
    queries: [
      {
        queryKey: ["getItems"],
        queryFn: async () => {
          const { data } = await axios.get(`${HOST}/v1/items`);
          if (!data.items) {
            throw new Error("Invalid response structure from /v1/items");
          }
          return data.items;
        },
      },
      {
        queryKey: ["getBins"],
        queryFn: async () => {
          const { data } = await axios.get(`${HOST}/v1/bins`);
          return data.data;
        },
      },
    ],
  });

  // Load State
  const setBins = useBoutiqueStore((state) => state.setBins);
  const setItems = useBoutiqueStore((state) => state.setItems);

  // Set Query Data
  const getItems = results[0];
  const getBins = results[1];

  useEffect(() => {
    if (getItems.isError && getItems.error) {
      toast.error(
        `Error fetching items: ${
          (getItems.error as Error).message || "Something went wrong"
        }`,
      );
    }
  }, [getItems.isError, getItems.error]);
  useEffect(() => {
    if (getBins.isError && getBins.error) {
      toast.error(
        `Error fetching bins: ${
          (getBins.error as Error).message || "Something went wrong"
        }`,
      );
    }
  }, [getBins.isError, getBins.error]);
  useEffect(() => {
    if (getBins.data) {
      setBins(getBins.data);
    }
  }, [getBins.data]);
  useEffect(() => {
    if (getItems.data) {
      setItems(getItems.data);
    }
  }, [getItems.data]);
  return (
    <div className="flex flex-col h-full w-full">
      {getItems.isLoading || getBins.isLoading ? (
        <div className='flex items-center min-h-screen min-w-screen justify-center'> 
          <TableSkeleton />
        </div>
      ) : getItems.isError || getBins.isError ? (
        <div className="">
         <Navbar />
          <hr className="text-accent mb-1"/>
          <h1 className='text-2xl text-center  text-muted-foreground'> You may have your data connection set up incorrectly, ensure your server is running and the connection string is correct <Link className='text-accent underline hover:underline-offset-1' to="/settings"> here </Link></h1>
          <Outlet />  
        </div>
      ) : (
        <div className='flex flex-col h-full w-full overflow-hidden'>
          <div className="shrink-0">
             <Navbar />
             <hr className="text-accent mb-1"/>
          </div>

          <main className="flex-1 w-full overflow-y-auto">
             <Outlet />  
          </main>
        </div>
      )}
      <TanStackRouterDevtools />
      <Toaster />
    </div>
  );
}

