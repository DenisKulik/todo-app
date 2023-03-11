import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, idx) => <Todo key={idx} todo={todo}/>)}
        </div>
    );
}