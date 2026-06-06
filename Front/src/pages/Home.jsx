import {useEffect, useState} from 'react'
import './Home.css'
import CreateTasks from '../componentes/CreateTasks'
import Tasks from '../componentes/Tasks'
import API_URL from "../services/api";

function Home() {
    const [tasks, setTasks] = useState( []);

    async function onTaskClick(taskId){
        try {
            await fetch(`${API_URL}/tasks`,
                {method:'PUT',
                    headers: {"Content-Type": "application/json", "ngrok-skip-browser-warning": "true"},
                    body: JSON.stringify({
                        taskId
                    })
                }
            );
            await fetchTask();
        } catch (error) {
            console.log(error);
        }
    }

    async function onDeleteTaskClick(taskId){
        try {
            await fetch(`${API_URL}/tasks`,
                {method:'DELETE',
                    headers: {"Content-Type": "application/json", "ngrok-skip-browser-warning": "true"},
                    body: JSON.stringify({
                        taskId
                    })
                }
            );
            await fetchTask();
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchTask(){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            const response = await fetch(`${API_URL}/tasks?userId=${user.userId}`,
                                                {method:'GET',
                                                    headers: {"ngrok-skip-browser-warning": "true"}
                                                });
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function createTask(title, content){
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            await fetch(`${API_URL}/tasks`,
                {method:'POST',
                    headers: {"Content-Type": "application/json", "ngrok-skip-browser-warning": "true"},
                    body: JSON.stringify({
                        title,
                        content,
                        userId: user.userId,
                    })
                }
            );
            await fetchTask();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTask();
    }, []);
    return (
        <div>
            <div className="flex flex-col justify-center relative mt-8 mb-4">
                <h1 className="font-inter text-6xl text-center font-bold">
                    ToDoList
                </h1>
                <p className="font-inter text-center text-black/40 font-bold mt-4">
                    Organize. Focus. Do things.
                </p>
            </div>
            <div className='w-screen h-screen flex justify-center p-6'>
                <div className='w-125 p-2 flex flex-col gap-3'>
                    <CreateTasks createTask={createTask}/>
                    <div className="my-6 h-px bg-black/50 w-full"></div>
                    <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
                </div>
            </div>
        </div>
    )
}

export default Home
