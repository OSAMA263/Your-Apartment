import { NavLink, useLocation } from "react-router-dom";
import * as LinkStyled from "../Global-shit/LinesUnderLink";

const GetInTouch = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-[50dvh] w-[70%] py-44 mx-auto">
      <div className="flex flex-col text-5xl space-y-5">
        {pathname !== "/contact" ? (
          <NavLink
            className={LinkStyled.Class}
            to="/contact"
          >
            Get in touch <LinkStyled.Lines />
          </NavLink>
        ) : (
          <span>Get in touch</span>
        )}
        {/* ------- */}
        <span className="flex items-center">
          <small className="inline-block h-[1px] w-10 bg-black me-2"></small>
          Let’s start a
        </span>
        <span>journey together</span>
      </div>
    </div>
  );
};

export default GetInTouch;
