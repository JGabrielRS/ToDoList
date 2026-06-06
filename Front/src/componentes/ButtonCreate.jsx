import PropTypes from "prop-types";

function ButtonCreate(props) {
    return (
        <button
            className="flex items-center justify-center font-inter h-7 w-full bg-black/90 text-white hover:bg-black/80 cursor-pointer font-medium tracking-widest p-5"
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