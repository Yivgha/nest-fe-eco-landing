import PropTypes from "prop-types"

export default function LogoText({onClick}) {
  return (
    <div className='flex flex-row gap-1 justify-center items-center cursor-pointer' onClick={onClick}>
              <p className='text-golden font-bold text-[18px] md:text-[34px] uppercase'>Eco Landing</p>
          </div>
  )
}

LogoText.propTypes = {
  onClick: PropTypes.func
}