
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
        <div className="flex text-white justify-center mt-4">
            {
                arrDate.map((el, i) =>
                    <div key={i} className="flex flex-col items-center rounded-full gap-2  w-[14.3%]">
                        <div className={`flex items-center le justify-center text-[22px] size-[50px] bg-[#4D4117] ${i === 3 && 'size-[65px] bg-[#DFBD43] -translate-y-2'} rounded-full`}>{el.date}</div>
                        <div className={`text-[19px] tracking-[0.7px] ${i === 3 && 'text-[#DFBD43] -translate-y-2'}`}>{el.week}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Calendar
