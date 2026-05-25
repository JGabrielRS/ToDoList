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
    console.log(tasks);
    console.log(tasks.length);
    return (
        <div>
            <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
                <div className='w-125 p-2 flex flex-col gap-3'>
                    <CreateTasks createTask={createTask}/>
                    <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
                </div>
            </div>
        </div>
    )
}

export default Home
