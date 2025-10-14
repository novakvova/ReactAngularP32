import { EventEmitter } from 'events';
import AppDispatcher from "./dispatcher";

//Набір даних, який зберігається в store
let _todos = [];

//Клас у якому відбуваються зміннт
class TodoStore extends EventEmitter {
    //повертає список у store
    getAll() {
        return _todos;
    }
    //Відмічаюємо, що були зміни
    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback); //Проведено зміни і викликаємо callback
    }
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

//створили наш Store
const todoStore = new TodoStore();
AppDispatcher.register((action) => {
   switch (action.type) {
       case 'ADD_TODO':
           _todos.push({id: Date.now(), text: action.text});
           todoStore.emitChange();
           break;
       case 'REMOVE_TODO':
           _todos = _todos.filter(todo => todo.id !== action.id);
           todoStore.emitChange();
           break;
       default:
   }
});

export default todoStore;