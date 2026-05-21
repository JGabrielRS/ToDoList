import PropTypes from "prop-types";

function Title({ children }) {
    return(
        <h1 className="text-4xl text-gray-500 text-center mb-3 font-bold">
            {children}
        </h1>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;