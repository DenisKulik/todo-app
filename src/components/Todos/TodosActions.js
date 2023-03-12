import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosActions.module.css';

export default function TodosActions({
    resetTodos,
    deleteCompletedTodos,
    completedTodosExist
}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button title="Clear Completed Todos"
                    onClick={deleteCompletedTodos}
                    disable={!completedTodosExist}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
    );
}