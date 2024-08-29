const Hours = () => {
    const today = new Date()
    const day = today.getDay() - 1
    const attentionTime = () => {
        if (day >= 1 && day <= 5) {
            return "From 10 a.m until 4 p.m"
        } else {
            return "From 9 a.m until 8 p.m"
        }
    }
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <>
            <h1>Attention time today {days[day]}: {attentionTime()}</h1>
        </>
    )
}

export default Hours