import ctl from "@netlify/classnames-template-literals";
import Carousel from "../protfolio/Carousel";
export default function Protfolio() {
  const styles = ctl(`
    h-screen
    flex 
    justify-center
    items-center
`);

  return (
    <>
      <div className={styles}>
        <Carousel />
      </div>
    </>
  );
}
