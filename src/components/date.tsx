import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
    Input,
    Popover,
    PopoverContent,
    PopoverHandler,
} from "@material-tailwind/react";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Example({ newDate, day }: { newDate: any, day?: string }) {

    const nawDate = new Date();
    nawDate.setHours(nawDate.getHours() + 4);
    const initialDate = day ? new Date(day) : nawDate;
    const initialTime = `${initialDate.getHours()}:${initialDate.getMinutes()}`;

    const [date, setDate] = useState<Date>(initialDate);
    const [time, setTime] = useState(initialTime);

    const newdate = new Date(date);
    const [hours, minut] = time.split(':').map(Number)
    newdate.setHours(hours);
    newdate.setMinutes(minut);

    useEffect(() => {
        newDate(newdate);
    }, [newDate, date, time]);

    return (
        <div>
            <Popover placement="bottom">
                <PopoverHandler className="!min-w-[100px]">
                    <Input
                        label={"Выберите дату"}
                        onChange={() => null}
                        value={date ? format(date, "PPP", { locale: ru }) + ' ' + time : ""}
                    />
                </PopoverHandler>
                <PopoverContent className="z-[10000]">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={(day) => {
                            if (day) {
                                setDate(day);
                            }
                        }}
                        locale={ru}
                        showOutsideDays
                        className="border-0"
                        classNames={{
                            caption: "flex justify-center py-0 mb-4 relative items-center",
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button: "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-8 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-5 w-8 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected: "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside: "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-gray-500 opacity-50",
                            day_hidden: "invisible",
                        }}
                        components={{
                            IconLeft: ({ ...props }) => (
                                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            IconRight: ({ ...props }) => (
                                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                        }}
                    />
                    <div className="flex items-center mt-4 justify-center">
                        <input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            type="time"
                            className="border-gray-300 outline-none focus:ring-blue-500 text-[18px] focus:border-blue-500 rounded-md"
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
