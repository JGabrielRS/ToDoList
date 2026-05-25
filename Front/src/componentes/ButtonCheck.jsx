import PropTypes from "prop-types";

function ButtonCheck({isfinished, ...props}) {
    return (
        <button
            {...props}
            className={`w-full bg-gray-500 text-amber-50 p-2 rounded-md hover:bg-gray-600 cursor-pointer ${isfinished ? "line-through" : ""}`}
        >
            {props.children}
        </button>
    );
}

ButtonCheck.propTypes = {
    children: PropTypes.node.isRequired,
    isfinished: PropTypes.bool.isRequired,
};

export default ButtonCheck;