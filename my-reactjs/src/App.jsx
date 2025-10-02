import './App.css';
import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
// import {useState} from "react";
// import HomePage from "./pages/HomePage";

//Кожен компонент може мати свій стан
//По суті ще як private у С#

function App() {
    //Стан може збегіати будь - що
    //Для створення стану
    //counter - це стан, який зберігає ціле число
    //setCounter - метод для зміни значення counter
    //Якщо значення counter буде змінюватися, тоді RENDER



    return (
        <>
            <Header />
            <div className="container">
                <RegisterPage />
            </div>
        </>
    );
}

//Для того, щоб можна було його імпортнути
//import App from './App';
//Інакше не можна буде його так імпортнути
export default App;
