import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map(
                (todo, idx) =>
                    <Todo key={idx} todo={todo} index={idx}
                          deleteTodo={deleteTodo}/>
            )}
        </div>
    );
}