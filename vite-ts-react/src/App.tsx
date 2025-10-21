import './App.css'
import {useEffect, useState} from "react";
import type {ICategoryItem} from "./ICategoryItem.ts";

function App() {
    const [counter, setCounter] = useState<number>(44)

    const [list, setList] = useState<ICategoryItem[]>([]);

    useEffect(() => {
        setList([
            {
                name: "Голодні напої",
                id: 1,
            }
        ])
    }, []);

    return (
        <>
            <h1>Hello Vite {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Click me</button>

            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App
