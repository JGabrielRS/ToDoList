import { useState } from 'react'
import Input from "./Input.jsx";
import ButtonCreate from "./ButtonCreate.jsx";
import PropTypes from "prop-types";
import Title from "./Title.jsx";

function CreateTasks({onAddTaskSubmission}){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return(
        <div className="bg-slate-200 p-3 rounded-md">
            <div>
                <Title>
                    Criar Tasks
                </Title>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <Input
                type="text"
                placeholder="Digite o titulo de sua task:"
                value={title}
                onChange={(event => setTitle(event.target.value))}
                />
                <Input
                type="text" 
                className="w-full text-gray-500 bg-amber-50 rounded-md p-1" 
                placeholder="Digite o conteudo de sua task:" 
                value={content}
                onChange={(event => setContent(event.target.value))}
                />
                <div className="flex justify-center">
                    <ButtonCreate
                    onClick={() => {
                        if (!title.trim() || !content.trim()){
                            return alert("Insira um título ou descrição para a task!!!")
                        }
                        onAddTaskSubmission(title, content);
                        setTitle("");
                        setContent("");
                    }}
                    >
                        criar
                    </ButtonCreate>
                </div>
            </div>
        </div>
    )
}

CreateTasks.propTypes = {
    onAddTaskSubmission: PropTypes.func.isRequired,
}

export default CreateTasks