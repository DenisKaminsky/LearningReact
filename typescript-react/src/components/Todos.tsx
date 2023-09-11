import React from "react";
import TodoItemType from '../models/TodoItem';
import TodoItem from "./TodoItem";

type TodosProps = {
    items: TodoItemType[],
    onClick: (id: number) => void
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.items.map(x =>
                <TodoItem key={x.id} text={x.text} onClick={() => props.onClick(x.id)}/>
            )}
        </ul>
    );
}

export default Todos;