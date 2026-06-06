import {useNavigate, useParams} from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react";
import { Calendar, CalendarCheck } from "lucide-react"
import { useEffect, useState } from "react";
import API_URL from "../services/api";
import Title from "../componentes/Title.jsx";

function TaskPage(){
    const navigate = useNavigate();
    const {id} = useParams();
    console.log("ID recebido:", id);
    const [task, setTask] = useState(null);
    useEffect(() => {
        async function loadTask(){
            try {
                const response = await fetch(`${API_URL}/tasks/${id}`,
                                                    {method:'GET',
                                                        headers: {"ngrok-skip-browser-warning": "true"}
                                                    });
                console.log("Status:", response.status);                                    
                const data = await response.json();
                console.log("Data recebida:", data);
                setTask(data);
            } catch (error) {
                console.log(error);
            }
        }
        loadTask();
    }, [id]);

    return (
        <div className="w-screen h-screen flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="p-4 border border-black/20 rounded-md">
                    <div className="flex justify-center relative mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="rounded-md absolute left-0 top-0 bottom-0 text-gray-500 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                        >
                            <ChevronLeftIcon className="h-8 w-8"/>
                        </button>
                        <h1 className="font-inter text-3xl text-center">
                            TASK DETAILS
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-inter text-2xl">
                            {task?.title}
                        </h2>
                        <p className="font-inter text-xl">
                            {task?.content}
                        </p>
                        <div className="my-6 h-px bg-black/50 w-full"></div>
                        <div className="flex items-center">
                            <Calendar/>
                            <p>
                                Creation Date:
                            </p>
                        </div>
                        <p >
                            {task &&
                                `${task.creation_date.date.day}/${
                                    task.creation_date.date.month
                                }/${task.creation_date.date.year} , 
                                ${task.creation_date.time.hour}:${task.creation_date.time.minute}`
                            }
                        </p>
                        <div className="flex items-center gap-2">
                            <CalendarCheck/>
                            <p>
                                Checked Date:
                            </p>
                        </div>
                        <p >
                            {task?.checked ? `${task.checked_date.date.day}/${
                            task.checked_date.date.month}/${
                            task.checked_date.date.year} ,
                            ${task.checked_date.time.hour}:${task.checked_date.time.minute}` : ""}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskPage
