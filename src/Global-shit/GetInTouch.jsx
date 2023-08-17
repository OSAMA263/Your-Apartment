import { NavLink, useLocation } from "react-router-dom";
import * as LinkStyled from "../Global-shit/LinesUnderLink";
import RevealElements from "./RevealElements";

const GetInTouch = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-[50dvh] w-[70%] py-44 mx-auto">
      <div className="flex flex-col lg:text-6xl md:text-5xl text-3xl space-y-5">
        <RevealElements>
          {pathname !== "/contact" ? (
            <NavLink className={LinkStyled.Class} to="/contact">
              Get in touch <LinkStyled.Lines />
            </NavLink>
          ) : (
            <span>Get in touch</span>
          )}
        </RevealElements>
        {/* ------- */}
        <RevealElements>
          <span className="flex items-center">
            <small className="inline-block h-[1px] w-10 bg-black me-2"></small>
            Let’s start a
          </span>
        </RevealElements>
        <RevealElements>
          <span>journey together</span>
        </RevealElements>
      </div>
    </div>
  );
};

export default GetInTouch;
