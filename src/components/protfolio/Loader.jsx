import { Progress } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";

const Loader = ({ isReady }) => {
  const styles = {
    parent: ctl(`
    absolute
    h-screen
    z-[696969]
    bottom-0
    w-screen 
    overflow-hidden
    transition-all
    duration-[1s]
    delay-[.7s]
    sm:delay-[2.6s] 
    ${isReady && "!h-[0vh]"}
    `),
    progress: ctl(`
    [&>div]:!bg-gradient-to-r 
    [&>div]:!to-black  
    [&>div]:!from-black 
    `),
    hero_section: ctl(`
    relative
    w-full
    flex
    items-center 
    justify-center 
    h-full 
    bg-gray-200
    transition-all 
    duration-1000
    delay-[1.8s]
    ${isReady && "sm:-translate-x-1/3"}
    `),
    img: ctl(`
    absolute 
    sm:block 
    hidden 
    w-1/2 
    -right-1/2
    top-0 
    h-screen
    `),
  };

  return (
    <div className={styles.parent}>
      <Progress
        className={styles.progress}
        size="sm"
        isIndeterminate={!isReady}
      />
      <section className={styles.hero_section}>
        <h1 className="sm:text-2xl text-lg">O | K DESIGN</h1>
        <div className={styles.img}>
          <img src="loader_img.webp" className="w-full h-full" alt="" />
        </div>
      </section>
    </div>
  );
};
export default Loader;
