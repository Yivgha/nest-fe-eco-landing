import PropTypes from "prop-types";

export default function FilledBtn({text, onClick, className}) {
  return (
      <button
          onClick={onClick}
    type="button"
      className={`${className}
           bg-golden text-white font-bold text-[16px] leading-5 border-golden border-[1px] py-[11px] w-[150px] md:w-[160px]  rounded-[5px] border-1`}
    >
      {text}
    </button>
  )
}

FilledBtn.propTypes = {
    text: PropTypes.string,
  onClick: PropTypes.func,
    className: PropTypes.string
}
