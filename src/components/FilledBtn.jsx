import PropTypes from "prop-types";
import clsx from "clsx";

export default function FilledBtn({text, onClick, className, type}) {
  return (
      <button
    onClick={onClick}
    type={type}
      className={clsx(className, "bg-golden text-white font-bold text-[16px] leading-5 border-golden border-[1px] py-[11px]  rounded-[5px] border-1" )}
    >
      {text}
    </button>
  )
}

FilledBtn.propTypes = {
    text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
    type: PropTypes.string
}
