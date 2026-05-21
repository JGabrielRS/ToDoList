import { ChevronRightIcon } from "lucide-react"
import { Trash } from "lucide-react"
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import ButtonCheck from "./ButtonCheck.jsx";
import PropTypes from "prop-types";

function Tasks(props){
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("content", task.content);
        navigate(`/tasks?${query.toString()}`);
    }

    return (
        <div className="flex-1">
            <ul className="space-y-4 p-5 bg-slate-200 rounded-md">
                {props.task.map((task) =>
                <li key={task.id} className="flex gap-1">
                    <ButtonCheck
                    isFinished={task.checked}
                    onClick={() => props.onTaskClick(task.id)}
                    >
                        {task.title}
                    </ButtonCheck>
                    <Button
                    onClick={() => onSeeDetailsClick(task)}
                    >
                        <ChevronRightIcon/>
                    </Button>
                    <Button
                    onClick={() => props.onDeleteTaskClick(task.id)}
                    >
                        <Trash />
                    </Button>
                </li>)}
            </ul>
        </div>
    )
}

Tasks.propTypes = {
    task: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onTaskClick: PropTypes.func.isRequired,
    onAddTaskSubmition: PropTypes.func.isRequired,
    onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks