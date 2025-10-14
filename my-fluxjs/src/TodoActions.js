import AppDispatcher from './dispatcher';

const TodoActions = {
    //Приймаємо значення text і повідомляємо, що виконується дія 'ADD_TODO'
    addTodo(text) {
        //console.log("addTodo", text);
        AppDispatcher.dispatch({
            actionType: 'ADD_TODO',
            text: text
        });
    },
    //Приймаємо id Записує і повідомаляємо, що треба зробити дію 'REMOVE_TODO'
    removeTodo(id) {
        AppDispatcher.dispatch({
            actionType: 'REMOVE_TODO',
            id: id
        });
    }
};

export default TodoActions;