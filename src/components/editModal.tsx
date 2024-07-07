import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import Example from "./date";
import { editTodos } from "../api";
import { EditIcon } from "./icon";

export function EditModal({ setTodos, el }: any) {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [title, setTitle] = React.useState(el.title);
    const [date, newDate] = React.useState();

    return (
        <>
            <span
                onClick={handleOpen}
            >
                <EditIcon />
            </span>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Изменить задачу
                        </Typography>
                        <div className="flex items-center justify-between gap-1 text-lg">
                            Сделать до: <Example newDate={newDate} day={el.finishDate} />
                        </div>
                        <div className="-ml-2.5 -mt-4">
                            <Checkbox label="Важной задачей" />
                        </div>
                        <Textarea className="text-lg" value={title} onChange={(e: any) => setTitle(e.target.value)} label="task" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className="w-full" variant="gradient" onClick={() => { handleOpen(), editTodos(setTodos, title, date, el._id) }}>
                            Сохранить
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
