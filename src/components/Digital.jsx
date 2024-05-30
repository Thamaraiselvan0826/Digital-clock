import { useEffect, useState } from 'react'
import './Digital.css'

const Digital = () => {

    const [current, setCurrent] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(new Date())
        }, 1000);
        return () => clearInterval(timer)
    }, [])

    const zeroExtra = (num) => {
        return num < 10 ? `0${num}` : num
    }
    const formatTimer = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }

    const formatDate = (date) => {
        const opt = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
        return date.toLocaleDateString(undefined,opt);
    }

    return (
        <>
            <div className="digital-clock">
                <h1>Digital Clock</h1>
                <p>Normal Time</p>
                <h3>{
                    zeroExtra(formatTimer(current.getHours()))
                }:{
                        zeroExtra(current.getMinutes())
                    }:{
                        zeroExtra(current.getSeconds())
                    }
                    {current.getHours() >= 12 ?  " PM" : " AM"}
                </h3>
                <p>Railway Time</p>
                <h3>{zeroExtra(current.getHours())} : {zeroExtra(current.getMinutes())} : {zeroExtra(current.getSeconds())} </h3>
                <h6>{formatDate(current)}</h6>
            </div></>
    )
}

export default Digital

