import ctl from "@netlify/classnames-template-literals";
import Carousel from "../protfolio/Carousel";
export default function Protfolio() {
  const styles = {
    swiper_wrapper: ctl(`
    h-screen
    flex 
    justify-center
    items-center
    `),
  };

  return (
    <>
      <div className={styles.swiper_wrapper}>
        <Carousel />
      </div>
    </>
  );
}
