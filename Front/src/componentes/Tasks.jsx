import { ChevronRightIcon } from "lucide-react"
import { Trash } from "lucide-react"
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import ButtonCheck from "./ButtonCheck.jsx";
import PropTypes from "prop-types";

function Tasks(props){
    const navigate = useNavigate();

    function onSeeDetailsClick(tasks){
        navigate(`/home/tasks/${tasks.id}`);
    }

    return (
        <div className="flex-1">
            <div>
                <h3 className="font-inter text-xl text-left text-center font-bold mb-2">
                    YOUR TASKS
                </h3>
            </div>
            <ul className="space-y-2">
                {props.tasks.map((tasks) =>
                <li key={tasks.id} className=" flex items-center gap-2 border-b-1 border-black/20 pt-4 pb-4">
                    <ButtonCheck
                    isfinished={tasks.checked}
                    onClick={() => props.onTaskClick(tasks.id)}
                    />
                    <div className="flex-1 flex justify-between items-center">
                        <span className={`font-inter text-center text-black ${tasks.checked ? "line-through text-black/50" : ""}`}>
                            {tasks.title}
                        </span>
                        <span className="font-inter  text-sm text-center text-black/50">
                            {`${tasks.creation_date.date.day}/${
                                tasks.creation_date.date.month
                            }/${tasks.creation_date.date.year}`}
                        </span>
                    </div>
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