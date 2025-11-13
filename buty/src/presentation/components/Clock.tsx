import {useState, useEffect} from "react";

export default function Clock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);


    const monthName = now.toLocaleString("pl-PL", {month: "long"});

    return (
        <div className="Clock">
            <div>Data: {now.getDate()} {monthName} {now.getFullYear()}</div>
            <div>Godzina: {now.toLocaleTimeString()}</div>
        </div>
    )
}