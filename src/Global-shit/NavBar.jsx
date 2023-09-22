import ctl from "@netlify/classnames-template-literals";
import { NavLink, useLocation } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { Slide } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import * as LinkStyled from "../Global-shit/LinesUnderLink";

export default function NavBar() {
  const [isOpen, setIsOpen] = useToggle();
  const { pathname } = useLocation();

  //  HIDE SCROLL BAR
  pathname === "/"
    ? document.body.classList.add("overflow-hidden")
    : document.body.classList.remove("overflow-hidden");

  //  CLOSE NAVLINK SLIDER
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Header {...{ isOpen, setIsOpen }} />
      <NavLinksMenu isOpen={isOpen} />
    </>
  );
}
// ---------
const Header = ({ setIsOpen, isOpen }) => {
  const styles = {
    header: ctl(`
    fixed
    top-0
    bg-white
    py-4
    w-full
    z-[6969]
    px-4
  `),
    nav: ctl(`
    w-[90%]
    mx-auto
    grid
    grid-cols-3
  `),
    menu_plus_sign: ctl(`
    absolute
    top-0
    -right-4
    transition-all
    duration-700
    rotate-0 ml-4
    font-extrabold
    text-lg
    ${isOpen && "!rotate-45 !top-2"}
    `),
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span></span>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-lg text-center justify-self-center w-fit lg:text-3xl sm:text-xl"
        >
          <h1>O | K DESIGN</h1>
        </NavLink>
        <button
          aria-label="menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${LinkStyled.Class} justify-self-end relative`}
        >
          MENU <small className={styles.menu_plus_sign}>+</small>
          <LinkStyled.Lines />
        </button>
      </nav>
    </header>
  );
};

// nav links slider
const NavLinksMenu = (props) => {
  const isOpen = props.isOpen;

  const navlinks = [
    { url: "/", name: "Protfolio" },
    { url: "/about-us", name: "About Us" },
    { url: "/contact", name: "Contact Us" },
  ];

  // -----style classes
  const styles = {
    slide: ctl(`
    !z-10
    !h-full
    !bg-[#c6c9cb]
    transition-all
    ease-linear
    delay-0
    duration-300

    ${!isOpen && "!delay-700"}
  `),
    menu_wrapper: ctl(`
    flex
    justify-center
    h-full
    w-[80%]
    mx-auto
    flex-col
    xl:space-y-8
    space-y-
    xl:text-6xl
    text-4xl
  `),
  };

  //------- framer varinats
  const variant = {
    parent: {
      init: {
        opacity: 0,
      },
      animate: {
        opacity: isOpen && 1,
        transition: {
          delay: isOpen ? 0.7 : 0,
          when: "beforeChildren",
        },
      },
    },

    link: {
      init: {
        y: 30,
      },
      animate: (i) => ({
        y: isOpen ? 0 : 70,
        transition: {
          delay: 0.22 * i,
          duration: 0.8,
        },
      }),
    },
  };

  return (
    <Slide direction="bottom" in={isOpen} className={styles.slide}>
      <div className={styles.menu_wrapper}>
        {navlinks.map(({ url, name }, i) => (
          // OVERFLOW LINK WRAPPER
          <motion.div
            variants={variant.parent}
            initial="init"
            animate="animate"
            className="py-2 overflow-y-hidden w-fit"
            key={i}
          >
            {/* LINKS DIV */}
            <motion.div custom={i} variants={variant.link}>
              <NavLink
                to={url}
                className={LinkStyled.Class + " [&.active]:opacity-50"}
              >
                {name} <LinkStyled.Lines />
              </NavLink>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
