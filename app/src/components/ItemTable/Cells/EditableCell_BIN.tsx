import React, { FC } from 'react';
import { CellContext } from "@tanstack/react-table";
import { Item } from "@/types/Item";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader } from '../../@shadcn/ui/dialog';
import { useForm } from '@tanstack/react-form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../@shadcn/ui/select";
import { Label } from '../../@shadcn/ui/label';
import { Button } from '../../@shadcn/ui/button';
import { Pencil } from 'lucide-react';
import { useEditBin } from '@/Hooks/Mutations/Items/useEditItemBin';
import { useBoutiqueStore } from '@/Hooks/Store/UseBoutiqueStore';
import { Badge } from "@/components/@shadcn/ui/badge"


/**
 * EditableBin component for rendering an editable bin selection within a table cell.
 *
 * This component displays the current bin name and provides a dialog to change
 * the bin assignment for a specific item. It uses TanStack React Table for cell
 * context, TanStack Form for form management, TanStack Query for data mutation,
 * and Shadcn UI components for styling.
 *
 * @param props - The CellContext props from TanStack React Table.
 * @returns A JSX element representing the editable bin cell.
 */
const EditableBin: FC<CellContext<Item, unknown>> = ({ getValue, row }) => {

    const bins = useBoutiqueStore((state) => state.bins); // grab state
    const [open, setOpen] = React.useState(false); // State for dialog open state

    // Database query
    const updateBin = useEditBin(setOpen, row); // Custom hook to edit the bin
    // Form handling
    const form = useForm({
        defaultValues: {
            bin: getValue<string>() || "No Bin", // Default to "No Bin" if no value exists
        },
        onSubmit: (values) => {
            const selectedBin = bins.find((bin) => bin.name === values.value.bin);
            
            return updateBin.mutate(selectedBin || null); // Update the bin in the database
        },
         
    });

    return (
        <div className="flex justify-between">
            {getValue<string>() || "No Bin"}
            <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='underline hover:text-green-100 cursor-pointer'>
                <Pencil size={20}/>
            </DialogTrigger>
            <DialogContent className="text-center opacity-90 ">
                <DialogHeader>
                <DialogTitle className="text-center">Edit {getValue<string>()}?</DialogTitle>
                <form  className="space-y-8" onSubmit={(e) => {
                        e.preventDefault(); 
                        form.handleSubmit();
                    }
                }>
                    <DialogDescription className="text-center">Are you sure you want to edit this field?</DialogDescription>
                    <form.Field name="bin" children={( field ) => (
                        <div className='flex flex-col items-center'>
                            <Label htmlFor="bin">Bin:</Label>
                            <Select value={field.state.value} onValueChange={(value) => {
                                field.setValue(value); // Update the form value
                                }
                            
                            } defaultValue={getValue<string>() || "No Bin"} >
                                <SelectTrigger className="w-[240px]">
                                    <SelectValue placeholder="Select a bin" />
                                </SelectTrigger>
                                <SelectContent className=' opacity-90'>
                                    {bins.map((bin) => (
                                        <SelectItem key={bin.id} value={bin.name}>{bin.name} {bin.is_full && (<Badge className='bg-destructive'>Full</Badge>)}</SelectItem>
                                    ))}
                                    <SelectItem value="No Bin">No Bin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )} />
                    <div className='flex justify-center'>
                        <Button type="submit" className='ml-1 mr-1 shadow-2xl cursor-pointer hover:shadow-md' style={{border: "1px solid black"}}>Submit</Button>
                    </div>

                </form>
                </DialogHeader>
            </DialogContent>
            </Dialog>
        </div>

    );
};

export default EditableBin;