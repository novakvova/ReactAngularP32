import './App.css';
import TodoStore from "./TodoStore";
import {useEffect, useState} from "react";
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

    useEffect(() => {
        const onChange = () => setList(getTodoState().todos);
        TodoStore.addChangeListener(onChange);
        return () => TodoStore.removeChangeListener(onChange);
    }, []);


    //Додаємо нове значення
    const handleAddName = () => {
        if(newName.trim()) { //Забирає пусті символи у рядку
            TodoActions.addTodo(newName);
            setNewName(''); //для очищення інпута
        }
    }

    const handleRemoveName = (id) => {
        TodoActions.removeTodo(id);
    }

    console.log("items", list);
    console.log("newName", newName);

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

            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => handleRemoveName(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>

    );
}

export default App;
