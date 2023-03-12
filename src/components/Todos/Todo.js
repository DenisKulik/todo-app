import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

export default function Todo({ todo, deleteTodo }) {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
        </div>
    );
}