import { Progress } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import { useMediaQuery } from "@uidotdev/usehooks";

const Loader = ({ isReady }) => {
  const onLgScreen = useMediaQuery("(min-width:640px)");

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
    delay-[1.3s]
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
    bg-[#c6c9cb]
    transition-all 
    duration-1000
    delay-500
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
        size="xs"
        isIndeterminate={!isReady}
        role="progressbar"
      />
      <section className={styles.hero_section}>
        <h1 className="text-lg sm:text-2xl">O | K DESIGN</h1>
        {onLgScreen && (
          <div className={styles.img}>
            <img
              src="loader_img.webp"
              className="w-full h-full"
              alt="loading.."
            />
          </div>
        )}
      </section>
    </div>
  );
};
export default Loader;
