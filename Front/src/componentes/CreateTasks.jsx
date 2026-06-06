import { useState } from 'react'
import Input from "./Input.jsx";
import ButtonCreate from "./ButtonCreate.jsx";
import PropTypes from "prop-types";
import Title from "./Title.jsx";

function CreateTasks({createTask}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return(
        <div className="flex flex-col gap-3">
            <div>
                <h3 className="font-inter text-xl text-left text-center font-bold">
                    NEW TASK
                </h3>
            </div>
            <div className="flex flex-col gap-2 justify-center mb-4">
                <Input
                class="font-inter bg-white hover:bg-gray-50 border-b-1 border-black/20 p-2 text-gray-150 mb-4"
                type="text"
                placeholder="Enter the task title:"
                value={title}
                onChange={(event => setTitle(event.target.value))}
                />
                <Input
                class="font-inter bg-white hover:bg-gray-50 border-b-1 border-black/20 p-2 text-gray-150 mb-4"
                type="text"
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
                        CREATE TASK
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