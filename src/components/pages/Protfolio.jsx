import ctl from "@netlify/classnames-template-literals";
import Carousel from "../protfolio/Carousel";
import RouterAnimate from "../../Global-shit/RouterAnimate";
import Loader from "../protfolio/Loader";
import { useState } from "react";
const Protfolio=()=> {
  const [isReady, setIsReady] = useState(false);

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
      <Loader isReady={isReady} />
      <RouterAnimate>
        <div className={styles.swiper_wrapper}>
          <Carousel setIsReady={setIsReady} />
        </div>
      </RouterAnimate>
    </>
  );
}
export default Protfolio