import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Checkbox,
    Dialog,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import React from "react";
import { saveTodos } from "../api";
import Example from "./date";

export function SaveModal({ setTodos }: any) {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [title, setTitle] = React.useState('');
    const [date, newDate] = React.useState();

    return (
        <>            
            <Button
                onClick={handleOpen}
                className="text-white py-0 w-[110px] bg-[#d1b03a] border hover:bg-[#4D4117] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-4xl px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                +
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Создать задачу
                        </Typography>
                        <div className="flex items-center justify-between gap-1 text-lg">
                            Сделать до: <Example newDate={newDate} />
                        </div>
                        <div className="-ml-2.5 -mt-4">
                            <Checkbox label="Важной задачей" />
                        </div>
                        <Textarea className="text-lg" value={title} onChange={(e: any) => setTitle(e.target.value)} label="task" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className="w-full" variant="gradient" onClick={() => { handleOpen(), saveTodos(setTodos, title, date), setTitle('') }}>
                            Сохранить
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
