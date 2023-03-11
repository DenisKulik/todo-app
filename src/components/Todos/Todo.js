import styles from './Todo.module.css';

export default function Todo({ todo, index, deleteTodo }) {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <div className={styles.todoText}>{todo}</div>
        </div>
    );
}