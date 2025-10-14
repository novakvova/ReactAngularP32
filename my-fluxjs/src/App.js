import './App.css';
import TodoStore from "./TodoStore";
import {useState} from "react";
import TodoActions from "./TodoActions";

//Наш store і наші дані
const getTodoState = () => {
    return {
        todos: TodoStore.getAll()
    }
}

const App = () => {

    //Ті дані, що у Store вони знаходяться у list
    const [list, setList] = useState(getTodoState().todos)
    //Зберігаємо нове значення
    const [newName, setNewName] = useState('');

    //Додаємо нове значення
    const handleAddName = () => {
        if(newName.trim()) { //Забирає пусті символи у рядку
            TodoActions.addTodo(newName);
            setNewName(''); //для очищення інпута
        }
    }

    return (
        <>
            <h1>Привіт Flux</h1>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={"Вкажіть ім'я"}
            />
            <button onClick={handleAddName}>Додати ім'я</button>

            
        </>

    );
}

export default App;
