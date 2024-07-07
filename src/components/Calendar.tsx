
function Calendar() {
    const date = new Date();
    const pastDate = new Date(date);
    const arrDate = []
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    for (let i = -3; i <= 3; i++) {
        pastDate.setDate(date.getDate() + i);
        const dayOfWeek = daysOfWeek[pastDate.getDay()];
        const formattedDate = pastDate.getDate();
        arrDate.push({ date: formattedDate, week: dayOfWeek });
    }

    return (
        <div className="flex text-white justify-between mt-3 sm:mt-4">
            {
                arrDate.map((el, i) =>
                    <div key={i} className="flex flex-col items-center rounded-full gap-2 w-[11%] sm:w-[14.3%]">
                        <div className={`flex items-center le justify-center text-[13px] sm:text-[22px] bg-[#4D4117] ${i === 3 ? 'size-[40px] sm:size-[65px] bg-[#DFBD43] -translate-y-2' : 'size-[25px] sm:size-[50px]'} rounded-full`}>{el.date}</div>
                        <div className={`overflow-hidden whitespace-nowrap text-overflow-ellipsis max-w-full text-[12px] sm:text-[19px] tracking-[0.7px] ${i === 3 && 'text-[#DFBD43] -translate-y-2'}`}>{el.week}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Calendar
