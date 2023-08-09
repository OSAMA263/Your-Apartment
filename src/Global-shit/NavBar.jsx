import ctl from "@netlify/classnames-template-literals";
import { NavLink, useLocation } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { Slide } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function NavBar() {
  const [active, setActive] = useToggle();
  const { pathname } = useLocation();

  pathname === "/"
    ? document.body.classList.add("overflow-hidden")
    : document.body.classList.remove("overflow-hidden");

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <>
      <Header setActive={setActive} />
      <NavLinksMenu active={active} />
    </>
  );
}
// ---------
const Header = (props) => {
  const setActive = props.setActive;

  const styles = {
    header: ctl(`
  fixed
  bg-white
  py-8
  w-full
  z-[6969]
`),
    nav: ctl(`
  w-[90%]
  mx-auto
  grid
  grid-cols-3
`),
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span></span>
        <NavLink to="/" className="justify-self-center w-fit">
          <img src="logo.svg" alt="" className="w-[16rem] max-w-full" />
        </NavLink>
        <button
          onClick={() => setActive((prev) => !prev)}
          className="w-fit justify-self-end"
        >
          MENU
        </button>
      </nav>
    </header>
  );
};

// nav links slider
const NavLinksMenu = (props) => {
  const active = props.active;

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
    !bg-[#eeeded]
    transition-all
    ease-linear
    delay-0
    duration-300
    ${!active && "!delay-700"}
  `),
    menu_wrapper: ctl(`
    flex
    justify-center
    h-full
    w-[80%]
    mx-auto
    flex-col
  `),
    link: ctl(`
  
  `),
  };

  //------- framer varinats
  const variant = {
    parent: {
      init: {
        opacity: 0,
      },
      animate: {
        opacity: active && 1,
        transition: {
          delay: active ? 0.6 : 0,
          when: "beforeChildren",
        },
      },
    },

    link: {
      init: {
        y: 30,
      },
      animate: (i) => ({
        y: active ? 0 : 30,
        opacity: active ? 1 : 0,
        transition: {
          delay: 0.19 * i,
          duration: 0.8,
        },
      }),
    },
  };

  return (
    <Slide direction="bottom" in={active} className={styles.slide}>
      {" "}
      <div className={styles.menu_wrapper}>
        {navlinks.map(({ url, name }, i) => (
          <motion.div
            variants={variant.parent}
            initial="init"
            animate="animate"
            className="overflow-y-hidden w-fit"
            key={i}
          >
            <motion.div custom={i} variants={variant.link}>
              <NavLink to={url} className={styles.link}>
                {name}
              </NavLink>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
};
