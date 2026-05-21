import PropTypes from "prop-types";

function ButtonCheck(props) {
    return (
        <button
            className={`w-full bg-gray-500 text-amber-50 p-2 rounded-md hover:bg-gray-600 cursor-pointer ${props.isFinished ? "line-through" : ""}`}
            {...props}
        >
            {props.children}
        </button>
    );
}

ButtonCheck.propTypes = {
    children: PropTypes.node.isRequired,
    isFinished: PropTypes.bool.isRequired,
};

export default ButtonCheck;