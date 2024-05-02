import PropTypes from "prop-types";
import {useState} from "react"

export default function CustomInput({
  value,
  onChange,
  placeholder,
  id,
  type,
}) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password"
    
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
    
  return (
    <div className="flex flex-col gap-[8px] w-full relative justify-center  ">
      <label
        htmlFor={id}
        className="font-bold text-[14px] font-merriweather leading-[20px]"
      >
       {placeholder}
      </label>
     <input
        type={showPassword === false ? "text" : 'password'}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-inputBg px-5 py-3 text-heroBg placeholder-gray-500 rounded-[5px] w-full"
        required
          />
          {!!isPassword && <button type="button" onClick={togglePasswordVisibility}
              className="absolute right-[5%]    top-[55%] text-lato text-sm">
        {showPassword ? 'Hide' : 'Show'}
      </button>}
          
    </div>
  );
}

CustomInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};
