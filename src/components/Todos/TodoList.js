import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos }) {
    return (
        <div className={styles.todoListContainer}>
            {todos.map((todo, idx) => <Todo key={idx} todo={todo}/>)}
        </div>
    );
}