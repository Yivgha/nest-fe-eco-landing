import PropTypes from "prop-types"

export default function SelectGender({value, onChange}) {
  return (
   <div className="flex flex-col gap-[8px] w-full relative justify-center  ">
          <label htmlFor='gender' className="font-bold text-[14px] font-merriweather leading-[20px]">Gender</label>
             
          <select name="gender" value={value} id="gender" type="select" onChange={onChange}
              className='bg-inputBg px-5 py-3 text-heroBg placeholder-gray-500 rounded-[5px] w-full' >
                <option value="">Select Gender</option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="u">Unspecified</option>
              </select> 
          </div>
  )
}

SelectGender.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}