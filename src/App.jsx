import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoFilter from "./components/TodoFilter.jsx";


const initialStateTodos = [
    {id: 1, title: "Complete online Javascript", complete: "true"},
    {id: 2, title: "Go to the Gym", complete: "true"},
    {id: 3, title: "10 minutes meditation", complete: "false"},
    {id: 4, title: "study aws", complete: "false"},
    {id: 4, title: "Complete todo app frontend mentor", complete: "false"},
]

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo= (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {

    setTodos(todos.filter((todo) => todo.id !== id))
    };

    const updateTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed } : todo))
    };

    const computedItemsLeft = todos.filter((todo) => !todo.complete).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos= () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
            return todos.filter((todo) => todo.completed)
            default:
                return todos;
        }
    }

    return (
        <div className="dark:bg-gray-900 bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen dark:bg-gray-900 g-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 ">
            <Header />

            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo}/>

                <TodoList
                    todos={filteredTodos()}
                    removeTodo = {removeTodo}
                    updateTodo = {updateTodo} />

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter}/>
            </main>

            <footer className="text-center mt-8 dark:text-gray-400">
                Drag and drop to reorder list</footer>
        </div>
    );
    };

export default App;