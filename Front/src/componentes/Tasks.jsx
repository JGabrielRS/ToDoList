import { ChevronRightIcon } from "lucide-react"
import { Trash } from "lucide-react"
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import ButtonCheck from "./ButtonCheck.jsx";
import PropTypes from "prop-types";

function Tasks(props){
    const navigate = useNavigate();

    function onSeeDetailsClick(tasks){
        const query = new URLSearchParams();
        query.set("title", tasks.title);
        query.set("content", tasks.content);
        navigate(`/home/tasks?${query.toString()}`);
    }

    return (
        <div className="flex-1">
            <ul className="space-y-4 p-5 bg-slate-200 rounded-md">
                {props.tasks.map((tasks) =>
                <li key={tasks.id} className="flex gap-1">
                    <ButtonCheck
                    isfinished={tasks.checked}
                    onClick={() => props.onTaskClick(tasks.id)}
                    >
                        {tasks.title}
                    </ButtonCheck>
                    <Button
                    onClick={() => onSeeDetailsClick(tasks)}
                    >
                        <ChevronRightIcon/>
                    </Button>
                    <Button
                    onClick={() => props.onDeleteTaskClick(tasks.id)}
                    >
                        <Trash />
                    </Button>
                </li>)}
            </ul>
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onTaskClick: PropTypes.func.isRequired,
    onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks