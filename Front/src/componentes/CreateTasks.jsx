import { useState } from 'react'
import Input from "./Input.jsx";
import ButtonCreate from "./ButtonCreate.jsx";
import PropTypes from "prop-types";
import Title from "./Title.jsx";

function CreateTasks({createTask}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return(
        <div className="bg-slate-200 p-3 rounded-md">
            <div>
                <Title>
                    Create Tasks
                </Title>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <Input
                type="text"
                placeholder="Enter the task title:"
                value={title}
                onChange={(event => setTitle(event.target.value))}
                />
                <Input
                type="text" 
                className="w-full text-gray-500 bg-amber-50 rounded-md p-1" 
                placeholder="Enter the task description:"
                value={content}
                onChange={(event => setContent(event.target.value))}
                />
                <div className="flex justify-center">
                    <ButtonCreate
                    onClick={() => {
                        if (!title.trim() || !content.trim()){
                            return alert("A title or description is required");
                        }
                        createTask(title, content);
                        setTitle("");
                        setContent("");
                    }}
                    >
                        Create
                    </ButtonCreate>
                </div>
            </div>
        </div>
    )
}

CreateTasks.propTypes = {
    createTask: PropTypes.func.isRequired,
}

export default CreateTasks