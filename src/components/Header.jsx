import OutlinedBtn from './OutlinedBtn';
import FilledBtn from './FilledBtn';
import LogoText from './LogoText';

function Header() {
  return (
      <header className="flex flex-col md:flex-row bg-headerBg text-white h-20 w-full py-4 justify-center md:justify-between items-center px-2 md:px-10 lg:px-20 sticky top-0 z-20">
      <LogoText />
      <nav className='flex flex-row gap-1 md:gap-2.5'>
          <OutlinedBtn text="Login" onClick={() => console.log("clicked login")} />
          <FilledBtn text="Sign up" onClick={() => console.log("clicked signup")} />
           
          </nav>
    </header>
  )
}

export default Header