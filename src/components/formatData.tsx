function FormatData({ data, expiredData }: { data: Date, expiredData?: boolean }) {
    const nawDate = new Date()
    const newData = new Date(data)

    const addZero = (num: number) => {
        return num > 9 ? num : '0' + num
    }

    const isnawDate = (newData.getDate() === nawDate.getDate())

    return (
        <div className={`flex gap-1 ${expiredData && 'text-red-700'}`}>
            <span>{!isnawDate && `${addZero(newData.getDate())}.${addZero(newData.getMonth() + 1)}`}</span>
            <span>{addZero(newData.getHours())}:{addZero(newData.getMinutes())}</span>
        </div>
    )
}

export default FormatData
