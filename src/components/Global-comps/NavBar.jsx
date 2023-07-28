import ctl from "@netlify/classnames-template-literals";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
}

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink to="/" className="justify-self-center w-fit">
        <img src="logo.svg" alt="" className="w-[16rem] max-w-full" />
      </NavLink>
      <button className="w-fit justify-self-end">menu</button>
      <span className="order-first"></span>
    </nav>
  </header>
);

const styles = {
  header: ctl(`
  py-8
  w-full
`),
  nav: ctl(`
  w-[90%]
  mx-auto
  grid
  grid-cols-3
`),
};
const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex gap-x-8 justify-center">
      <button onClick={() => setIndex((prev) => prev - 1)}>left</button>
      {[1, 2, 3, 4, 5].map((ele, i) => (
        <div
          className={`translate-x-[${i * 100}%0] h-[40rem] bg-gray-400 w-[90vw]`}
          key={i}
        >
          {ele}
        </div>
      ))}
      <button onClick={() => setIndex((prev) => prev + 1)}>right</button>
    </div>
  );
};
