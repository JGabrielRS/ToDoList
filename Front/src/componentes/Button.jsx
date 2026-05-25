import PropTypes from "prop-types";

function Button(props) {
    return (
        <button
        className="bg-gray-500 text-amber-50 p-2 rounded-md hover:bg-gray-600 cursor-pointer"
        {...props}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button;