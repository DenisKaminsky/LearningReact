import React, { createContext, useState } from "react";
import TodoItemType from "../models/TodoItem";

type AppContextType = {
    items: TodoItemType[],
    add: (title: string) => void,
    remove: (id: number) => void
}

const AppContext = createContext<AppContextType>({
    items: [],
    add: (title: string) => { },
    remove: (id: number) => { }
});

const AppContextProvider: React.FC = (props) => {
    const [items, setItems] = useState<TodoItemType[]>([]);

    const addNewItem = (title: string): void => {
        setItems((prevItems) => {
            return prevItems.concat(new TodoItemType(Math.random(), title));
        });
    }

    const removeItem = (id: number): void => {
        setItems((prevItems) => {
            return prevItems.filter(x => x.id !== id);
        });
    }

    return (
        <AppContext.Provider value={{ items: items, add: addNewItem, remove: removeItem }}>
            { props.children }
        </AppContext.Provider >
    );
}

export default AppContextProvider;
export { AppContext };