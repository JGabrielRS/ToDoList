import { ChevronRightIcon } from "lucide-react"
import { Trash } from "lucide-react"

function Tasks(props){
    return(
        <div className="flex-1">
            <ul className="space-y-4 p-5 bg-slate-200 rounded-md">
                {props.task.map((task) => 
                <li key={task.id} className="flex gap-1">
                    <button 
                    onClick={() => props.onTaskClick(task.id)} 
                    className={`w-full bg-gray-500 text-amber-50 p-2 rounded-md hover:bg-gray-600 cursor-pointer ${!task.checked ? "line-through" : null}`}>
                        {task.titulo}
                    </button>
                    <button className="bg-gray-500 text-amber-50 p-2 rounded-md hover:bg-gray-600 cursor-pointer">
                        <ChevronRightIcon/>
                    </button>
                    <button
                    onClick={() => props.onDeleteTaskClick(task.id)} 
                    className="bg-gray-500 text-amber-50 p-2 rounded-md hover:bg-gray-600 cursor-pointer">
                        <Trash />
                    </button>
                </li>)}
            </ul>
        </div>
    )
}

export default Tasks