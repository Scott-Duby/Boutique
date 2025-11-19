import { flexRender, Table } from '@tanstack/react-table';
import { TableBody, TableRow, TableCell } from '../@shadcn/ui/table';
import { Item } from '@/types/Item';

/**
 * Props for the ItemTableBody component.
 */
interface ITableBodyProps {
  /**
   * The TanStack Table instance.
   */
  table: Table<Item>;
}

/**
 * ItemTableBody component for rendering the body of the item table.
 *
 * This component iterates over the rows and cells of the table and renders them
 * using the provided cell renderers.
 *
 * @param props - The component props.
 * @returns A JSX element representing the table body.
 */
export const ItemTableBody: React.FunctionComponent<ITableBodyProps> = ({ table }) => {
  return (
    <TableBody >
      {table.getRowModel().rows.length === 0 && (
        <TableRow>
          <TableCell colSpan={table.getAllColumns().length} className='text-center'>
            <h1 className='text-2xl underline'>No Items Found</h1>
            <p className=''>Try changing the filters or adding new items.</p>
          </TableCell>
        </TableRow>
      )}
      {table.getRowModel().rows.length > 0 &&
        table.getRowModel().rows.map(row =>
          <TableRow key={row.id} className='text-left'>
            {row.getVisibleCells().map(cell =>
              <TableCell key={cell.id} >
                {
                  flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )
                }
              </TableCell>)}
        </TableRow>)}
    </TableBody>
  ) ;
};