import './App.css';
import {useState} from "react";
import Home from "./pages/Home";

//компонент
//Код який використовує класи, компоненти і їх події - старівший код.
//Фукнції та Фукнціональні компоненти
const App = () => {

    //Може зберігати інформацію - Він зберіга у собі за допомогою
    //State - стан самого компонента
    //Для того, що відобразити інформацію, яка є в конмоненті,
    //потрібно виконати Render - відмалювати
    //При змінні даних у State - виконується RENDER
    //Для створення State - хук - useState
    //myInt - це число, яке зберігається у State
    //setMyInt - це функція - змінює число myInt - виконуємо RENDER
    //useState - хук - який зберігає на почтку значення - 0
    const [myInt, setMyInt] = useState(0);

    console.log("RENDER COMPONENT"); //викликаємо коли компоннет робить рендер
    const handleClickBtn = () => {
        //console.log('clicked');
        setMyInt(myInt + 1); //збільшив значення на 1
    }

    return (
        <>
            <div className="container">
                <h1 className={"text-center"}>Привіт команда</h1>
                <h2>Hello my friends {myInt}</h2>

                <button className={"btn btn-danger"}
                    onClick={handleClickBtn}>Нажми мене</button>

                <Home></Home>
            </div>
        </>
    );
}

export default App;

