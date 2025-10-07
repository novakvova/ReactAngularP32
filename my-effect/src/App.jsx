import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    //Коли будуть змінюватися параметри пошуку,
    // має відправляти запити на сервер

    const [search, setSearch] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
        }); //вказує парамтери пошуку


    const addCounter = () => {
        setCounter(counter + 1);
    }
    const removeCounter = () => {
        setCounter(counter - 1);
    }


    //Як відловити подію, перший запуск компонента
    //Відправити запит на сервер. Відобразити спливаюче вікно
    //Запустити дію із інтервалом.
    //У Effect вказується парамерт deps - від чого залежить наш useEffect
    //Якщо в deps - пустий, це відслідкувати 1 рендер
    useEffect(() => {
        console.log("UseEffect working request Server DATA", counter);
    }, []);

    //Відкує за counter - змінною і буде спрацьовувати при будь-якому звернені.
    useEffect(() => {
        if(counter == 10)
        {
            alert("Вибухнуло бомба");
        }
        // console.log("UseEffect working counter", counter);
    }, [counter]);

    //Цей useEffect - працює якщо змінюємо search
    useEffect(() => {
        console.log("Search data server", search);
    }, [search]);

    console.log("Render app", counter);

    const handleChangeSearch = (e) => {
        setSearch({...search, [e.target.name]: e.target.value});
    }

    return (
        <>
            <h1>Hello React {counter}</h1>

            <div>
                <label>Ім'я</label>
                <input type="text" name={"firstName"} onChange={handleChangeSearch} />
            </div>

            <div>
                <label>Прізвище</label>
                <input type="text" name={"lastName"} onChange={handleChangeSearch} />
            </div>


            <button onClick={() => addCounter()}>
                + Збільшити на 1
            </button>

            <button onClick={() => removeCounter()}>
                - Зменшити на 1
            </button>
        </>

    );
}

export default App;
