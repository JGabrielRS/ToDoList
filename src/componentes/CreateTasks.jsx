import { useState } from 'react'

function CreateTasks({onAddTaskSubmition}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="bg-slate-200 p-3 rounded-md">
            <div>
                <h1 className="text-6xl text-gray-500 text-center mb-3 font-bold">
                    Criar Tasks
                </h1>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <input 
                type="text" 
                className="w-full text-gray-500 bg-amber-50 rounded-md p-1" 
                placeholder="Digite o titulo de sua task:"
                value={title}
                onChange={(event => setTitle(event.target.value))}
                />
                <input 
                type="text" 
                className="w-full text-gray-500 bg-amber-50 rounded-md p-1" 
                placeholder="Digite o conteudo de sua task:" 
                value={description}
                onChange={(event => setDescription(event.target.value))}
                />
                <div className="flex justify-center">
                    <button 
                    onClick={() => {
                        if (!title.trim() || !description.trim()){
                            return alert("Insira um titulo ou descrição para a task!!!")
                        }
                        onAddTaskSubmition(title, description);
                        setTitle("");
                        setDescription("");
                    }}
                    className="h-7 w-full bg-gray-500 text-amber-50 rounded-md hover:bg-gray-600 cursor-pointer text-center font-medium">
                        criar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateTasks