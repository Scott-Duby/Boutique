import { Toaster } from '@/components/@shadcn/ui/sonner';
import TableSkeleton from '@/components/ItemTable/TableSkeleton';
import Navbar from '@/components/Navbar';
import { useBoutiqueStore } from '@/Hooks/Store/UseBoutiqueStore';
import { useQueries } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router'

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const HOST: string = import.meta.env.VITE_API_HOST;


export const Route = createRootRoute({
  component: Home, 
})



function Home() {
    const results = useQueries({
    queries: [
      {
        queryKey: ["getItems"],
        queryFn: async () => {
          const { data } = await axios.get(`http://${HOST}/v1/items`);
          if (!data.items) {
            throw new Error("Invalid response structure from /v1/items");
          }
          return data.items;
        },
      },
      {
        queryKey: ["getBins"],
        queryFn: async () => {
          const { data } = await axios.get(`http://${HOST}/v1/bins`);
          return data.data;
        },
      },
    ],
  });

  // Load State
  const setBins = useBoutiqueStore((state) => state.setBins);
  const setItems = useBoutiqueStore((state) => state.setItems);
  const setSettings = useBoutiqueStore((state) => state.setClientSettings)

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
    <div className="min-h-screen flex flex-col items-center">
      {getItems.isLoading || getBins.isLoading ? (
        <div className='flex items-center min-h-screen min-w-screen justify-center'> 
          <TableSkeleton />
        </div>
      ) : getItems.isError || getBins.isError ? (
        <div className="text-destructive">
          Failed to load data. Please try again later.
        </div>
      ) : (
        <div className='min-w-screen'>
          <Navbar />
          <hr className="text-accent mb-1"/>
          <Outlet />  
        </div>
      )}
      <TanStackRouterDevtools />
      <Toaster />
    </div>
  );
}

