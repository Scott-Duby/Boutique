import { useEffect, useState } from 'react';
import { useBoutiqueStore } from '@/Hooks/Store/UseBoutiqueStore';
import BinBarChart from './BinBarChart';
export interface IChartProps {

}



export default function Chart({ }: IChartProps) {
  const bins = useBoutiqueStore((state) => state.bins);
  const items = useBoutiqueStore((state) => state.items)
  const [data, setData] = useState<{ name: string; itemCount: number }[]>([]);

  useEffect(() => {
    if (Array.isArray(bins)) {
      const transformed = bins.map((bin) => ({
        name: bin.name,
        itemCount: bin.items.length,
      }));
      setData(transformed);
    }
  }, [items, bins]);

  return (
    <div>
      <div className="min-w-screen h-[95vh] opacity-100 overflow-y-auto">

        {/* Bar Chart */}
        <BinBarChart data={data} />

      </div>
    </div>
  );
}
