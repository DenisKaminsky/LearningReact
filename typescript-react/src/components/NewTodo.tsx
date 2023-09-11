import React, { useRef } from "react";

type NewTodoProps = {
    onSubmit: (title: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (props.onSubmit) {
            let value = textRef.current?.value ?? '';
            props.onSubmit(value);
        }
    }

    return <form onSubmit={onSubmit}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={textRef} />
        <button type="submit">Add</button>
    </form>
}

export default NewTodo;
