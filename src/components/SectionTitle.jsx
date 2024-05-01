import PropTypes from "prop-types"

export default function SectionTitle({title}) {
  return (
    <h2 className='text-golden font-bold text-[28px] leading-[34px]'>{title}</h2>
  )
}

SectionTitle.propTypes = {
title: PropTypes.string
}