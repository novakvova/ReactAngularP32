import './App.css';
import {useState} from "react";
import HomePage from "./pages/HomePage";

//Кожен компонент може мати свій стан
//По суті ще як private у С#

function App() {
    //Стан може збегіати будь - що
    //Для створення стану
    //counter - це стан, який зберігає ціле число
    //setCounter - метод для зміни значення counter
    //Якщо значення counter буде змінюватися, тоді RENDER
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        console.log('clicked');
        setCounter(counter + 1); // поточне значення
    }
    console.log("Render App Component"); //відмальовуємо F5
    return (
        <>
            <h1>Привіт React {counter}</h1>

            { counter >= 10
                &&
                <>
                    <h2 style={{color: "red"}}>Бомба пішла в роботу</h2>
                </>
            }

            <button onClick={handleClick}>Нажми мене {counter}</button>

            <HomePage />
        </>
    );
}

//Для того, щоб можна було його імпортнути
//import App from './App';
//Інакше не можна буде його так імпортнути
export default App;
