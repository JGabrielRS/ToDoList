import PropTypes from "prop-types";
import { Check } from "lucide-react";

function ButtonCheck({isfinished, ...props}) {
    return (
        <button
            {...props}
            className={`w-6 h-6 rounded-full border transition-all duration-100 flex items-center justify-center shrink-0 
            ${isfinished ? "bg-neutral-900 border-neutral-900": "border-neutral-400 hover:border-neutral-900"}`}>
            {isfinished && <Check size={12} strokeWidth={2} className="text-white"/>}
        </button>
    );
}

ButtonCheck.propTypes = {
    isfinished: PropTypes.bool.isRequired,
};

export default ButtonCheck;