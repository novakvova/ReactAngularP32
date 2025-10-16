import './App.css';
import {useEffect, useState} from "react";
import axiosInstance from "./api/axiosInstance";

function App() {

    //Зберігаємо список категорій
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axiosInstance.get("/categories/list");
            //console.log("Result request", response.data);
            setCategories(response.data);
        }
        catch (error) {
            console.error("Помилка запиту на сервер", error)
        }
    }

    return (
        <>
            <h1>Привіт React</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.title}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
