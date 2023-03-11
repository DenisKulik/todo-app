import Todo from './Todo';

export default function TodoList({ todos }) {
    return todos.map((todo, idx) => <Todo key={idx} todo={todo}/>);
}