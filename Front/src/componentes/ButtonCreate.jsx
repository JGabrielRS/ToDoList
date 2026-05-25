import PropTypes from "prop-types";

function ButtonCreate(props) {
    return (
        <button
            className="h-7 w-full bg-gray-500 text-amber-50 rounded-md hover:bg-gray-600 cursor-pointer text-center font-medium"
            {...props}
        >
            {props.children}
        </button>
    );
}

ButtonCreate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonCreate;