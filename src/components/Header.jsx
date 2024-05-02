import PropTypes from "prop-types"
import OutlinedBtn from './OutlinedBtn';
import FilledBtn from './FilledBtn';
import LogoText from './LogoText';
import { useNavigate } from 'react-router-dom';

export default  function Header({showText = true, showBtns=true}) {
  const navigate = useNavigate();
  return (
      <header className={`flex flex-col md:flex-row bg-headerBg text-white h-20 min-h-20  w-full py-4 justify-center md:justify-between items-center px-2 md:px-10 lg:px-20 sticky top-0 z-20`}>
      {!!showText && <LogoText />}
         {!! showBtns && <nav className='flex flex-row gap-1 md:gap-2.5'>
      <OutlinedBtn text="Login" onClick={() =>  navigate("/login")} />
          <FilledBtn className="w-[150px] md:w-[160px]" type="button" text="Sign up" onClick={() => navigate("/signup")} /> 
         
          </nav>}
    </header>
  )
}

Header.propTypes = {
  showText: PropTypes.bool,
  showBtns: PropTypes.bool,
}