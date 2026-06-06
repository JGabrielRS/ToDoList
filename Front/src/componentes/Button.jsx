import PropTypes from "prop-types";

function Button(props) {
    return (
        <button
        className="cursor-pointer"
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