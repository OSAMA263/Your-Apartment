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
    delay-[3s] 
    ${isReady&&"!h-[0vh]"}
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
    delay-[2s]
    ${isReady&&"sm:-translate-x-1/3"}
    `),
  };

  return (
    <div className={styles.parent}>
      <Progress
        className={styles.progress}
        size="xs"
        isIndeterminate={!isReady}
      />
      <section className={styles.hero_section}>
        <h1 className="text-2xl">O | K DESIGN</h1>
        <div className="absolute sm:block hidden lg:w-auto w-1/2 -right-1/3 top-0 h-screen">
          <img src="loader_img.jpg" className="h-full w-full" alt="" />
        </div>
      </section>
    </div>
  );
};
export default Loader;