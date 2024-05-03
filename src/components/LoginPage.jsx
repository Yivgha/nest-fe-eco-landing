import Header from "./Header";
import Footer from "./Footer";
import LoginIMG from "../assets/loginIMG.jpg";
import LoginForm from "./Login/LoginForm";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const textStyle = "font-lato font-semibold text-[14px] leading-[22px]";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full bg-loginBg ">
      <Header showText={false} showBtns={false} showUser={false} />
      <main className="flex flex-col mb-3 md:mb-0 gap-2 md:gap-0 md:flex-row ">
        <div className="flex-1 md:flex-2 w-full md:min-w-[66%] md:w-[890px]  h-[943px]">
          <img
            src={LoginIMG}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-7">
          <h1 className="font-bold text-[28px] leading-[34px] text-heroBg font-merriweather">
            Login
          </h1>
          <LoginForm />
          <p className={clsx(textStyle, "text-heroBg flex gap-1")}>
            Don’t have account?
            <span
              className={clsx(textStyle, "text-golden cursor-pointer")}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
