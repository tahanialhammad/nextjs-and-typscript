import { TodoType } from "@/app/types/app";

type PagePropsType = {
  params: { id: string; } //output from console.log(props); 
}

//name id is n=match folde name
async function fetchTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
    { next: { revalidate: 60 } } // cache: "force-cache" <==> get static props , but ISR is for revalidate data from server so we need to use next => next : {revalidate: 60 }} update data from sever every 60 sec but this ia defuilf next js is get servier side props ,so revalidate is extra
  ); 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


// export default function TodoPage(props) {
// console.log(props); //in termenal { params: { id: '5' }, searchParams: {} }

// export default async function TodoPage({ params }: PagePropsType) {
//   const todo = await fetchTodo(params.id);

export default async function TodoPage({ params: { id } }: PagePropsType) {
  const todo: TodoType = await fetchTodo(id);
  // console.log(todo); // {userId: 1, id: 7, title: 'illo expedita consequatur quia in',completed: false }
  return (
    <div className="bg-yellow-100 p-4">
      <p>expot type of todo from todolist or make globale type file </p>
      <div>page id: {id} title : {todo.title} : {todo.completed ? "todo is completed" : "todo is not comleted"} </div>
      <hr />
      <div>todo is ceated by : {todo.userId} </div>
    </div>

  )
}
