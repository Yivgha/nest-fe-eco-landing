import LogoText from "./LogoText";

export default function Footer() {
  return (
      <footer className='flex flex-col md:flex-row items-center justify-between  w-full px-5 md:px-20 pt-2 md:pt-5 pb-1 md:pb:3 bg-headerBg text-white'>
          <LogoText />
          <div className='flex flex-row gap-1 justify-center items-center'>
              <p>Made by:</p>
              <p className='text-golden font-bold text-[18px]'>Yevheniia Plaskon</p>
          </div>
    </footer>
  )
}