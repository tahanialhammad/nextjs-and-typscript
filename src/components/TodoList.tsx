// default case in next > 13 is server side, good for SEO

import { TodoType } from "@/app/types/app";
import Link from "next/link";

// type TodoType = {
//     id: number;
//     userId: number;
//     title: string;
//     completed: boolean;
// } // and export it fron types folder

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function TodoList() {
    const todos: TodoType[] = await fetchTodos();

    return (
        todos.map((todo) => (
            <div key={todo.id}>
                <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
            </div>
        ))
    )
}
