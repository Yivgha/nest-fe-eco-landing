import PropTypes from "prop-types";
import OutlinedBtn from "./OutlinedBtn";
import FilledBtn from "./FilledBtn";
import LogoText from "./LogoText";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions";

export default function Header({ showText = true, showBtns = true }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <header
      className={`flex flex-col md:flex-row bg-headerBg text-white h-20 min-h-20  w-full py-4 justify-center md:justify-between items-center px-2 md:px-10 lg:px-20 sticky top-0 z-20`}
    >
      {!!showText && <LogoText />}
      <nav className="flex flex-row gap-1 md:gap-2.5">
        {user !== null && (
          <div className="flex flex-row gap-1 md:gap-2.5 items-center">
            <p className="text-golden">{user?.name}</p>
            <FilledBtn
              className="w-[150px] md:w-[160px]"
              type="button"
              text="Sign out"
              onClick={() => dispatch(logOut())}
            />
          </div>
        )}
        {!!showBtns && !user && (
          <>
            <OutlinedBtn text="Login" onClick={() => navigate("/login")} />
            <FilledBtn
              className="w-[150px] md:w-[160px]"
              type="button"
              text="Sign up"
              onClick={() => navigate("/signup")}
            />
          </>
        )}
      </nav>
    </header>
  );
}

Header.propTypes = {
  showText: PropTypes.bool,
  showBtns: PropTypes.bool,
};
