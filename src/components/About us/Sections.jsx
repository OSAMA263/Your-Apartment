import ctl from "@netlify/classnames-template-literals";
import GetInTouch from "../../Global-shit/GetInTouch";
import RevealElements from "../../Global-shit/RevealElements";

export default function Sections() {
  return (
    <>
      <div className="h-screen">
        <Section1 />
        <Section2 />
        <GetInTouch />
      </div>
    </>
  );
}

const Section1 = () => (
  <section className={styles.section1}>
    <RevealElements>
      <h1 className="sm:w-[66%] lg:text-5xl text-4xl  text-balance">
        Charlie Horner is a forward thinking interior designer.
      </h1>
    </RevealElements>
  </section>
);

const Section2 = () => (
  <div className="bg-[#e3e3e7]">
    <section className={styles.section2}>
      <div className="space-y-24 md:w-[70%] w-[95%] text-center mx-auto">
        <RevealElements>
          <h1 className="text-4xl leading-relaxed lg:text-5xl">
            A tailored approach to reflect individual client’s needs &
            aspirations
          </h1>
        </RevealElements>
        <RevealElements>
          <p className={styles.section2_text}>
            Beginning her career with a London based luxury development studio,
            she has worked on a number of high profile projects in some of the
            most exclusive locations across London, New York, Monaco & Dubai.
          </p>
        </RevealElements>
      </div>
      {/* card */}
      <RevealElements>
        <div className={styles.card}>
          <div
            style={{
              backgroundImage: `url("${data.card.img}")`,
            }}
            className="w-full h-full bg-center bg-no-repeat bg-cover "
          ></div>
          <p className={styles.card_text}>{data.card.text}</p>
        </div>
      </RevealElements>
    </section>
  </div>
);

const data = {
  section2: {
    header:
      "A tailored approach to reflect individual client’s needs & aspirations",
    text: "Beginning her career with a London based luxury development studio, she has worked on a number of high profile projects in some of the most exclusive locations across London, New York, Monaco & Dubai.",
  },
  card: {
    text: "Charlie’s ever-evolving style is underpinned by neutral, earthy tones layered with natural textures and a rich mix of antique, vintage and modern furniture ultimately creating beautiful interior design solutions for each client.",
    img: "about-lady.webp",
  },
};

const styles = {
  section1: ctl(`
  h-1/2
  mx-auto 
  justify-center 
  text-[2.6rem]
  tracking-wider
  flex 
  flex-col
  mt-10
  w-[80%]
`),
  section2: ctl(`
  py-48
  flex
  flex-col
  gap-y-56
  mx-auto
  xl:w-[80%]
`),
  section2_text: ctl(`
  text-2xl
  mx-auto 
  leading-loose 
  tracking-wider
  w-[80%] 
`),
  card: ctl(`
  justify-center
  items-center
  grid
  mx-auto
  text-center
  overflow-hidden
  grid-rows-2
  md:grid-cols-2
  md:grid-rows-1
  lg:h-[660px]
`),
  card_text: ctl(`
  text-2xl
  mx-auto 
  leading-loose 
  lg:px-24
  px-16
  xl:py-12
  h-full
  flex
  items-center
  bg-white
`),
};
