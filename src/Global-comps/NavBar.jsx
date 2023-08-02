import ctl from "@netlify/classnames-template-literals";
import { NavLink } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { Slide } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function NavBar() {
  const [active, setActive] = useToggle();

  return (
    <>
      <Header setActive={setActive} />
      <NavLinksMenu active={active} />
    </>
  );
}

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
        <NavLink to="/" className="justify-self-center w-fit">
          <img src="logo.svg" alt="" className="w-[16rem] max-w-full" />
        </NavLink>
        <button
          onClick={() => setActive((prev) => !prev)}
          className="w-fit justify-self-end"
        >
          menu
        </button>
        <span className="order-first"></span>
      </nav>
    </header>
  );
};

// nav links slider
const NavLinksMenu = (props) => {
  const active = props.active;

  const navlinks = [
    { url: "", name: "link" },
    { url: "", name: "link" },
    { url: "", name: "link" },
  ];

  // -----style classes
  const styles = {
    slide_wrapper: ctl(`
    h-screen
    w-screen
    fixed
    inset-0
    transition-all 
    delay-150
    ${active ? "z-[99]" : "-z-10 !delay-1000"}  
  `),
    slide: ctl(`
    !-z-10
    !h-full
    !bg-gray-400
    transition-all
    ease-linear
    delay-0 
    duration-150
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
  };

  const variant = {
    init: {
      y: 30,
    },
    animate: {
      y: active ? 0 : 30,
      opacity: active ? 1 : 0,
    },
  };

  return (
    <div className={styles.slide_wrapper}>
      <Slide direction="bottom" in={active} className={styles.slide}></Slide>
      {/* links */}
      <div className={styles.menu_wrapper}>
        {navlinks.map(({ url, name }, i) => (
          <div className="overflow-y-hidden w-fit" key={i}>
            <motion.div
              variants={variant}
              initial="init"
              animate="animate"
              transition={{
                delay: !active ? 0.19 * i : 0.6,
                duration: 0.8,
              }}
            >
              <NavLink className={styles.link}>{name}</NavLink>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

