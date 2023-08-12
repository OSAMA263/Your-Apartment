import ctl from "@netlify/classnames-template-literals";
import GetInTouch from "../../Global-shit/GetInTouch";

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
    <h1 className="w-[70%] text-balance">
      Charlie Horner is a forward thinking interior designer.
    </h1>
  </section>
);

const Section2 = () => (
  <div className="bg-[#e3e3e7]">
    <section className={styles.section2}>
      <div className="space-y-24 w-[70%] text-center mx-auto">
        <h1 className="text-5xl leading-relaxed">
          A tailored approach to reflect individual client’s needs & aspirations
        </h1>
        <p className={styles.section2_text}>
          Beginning her career with a London based luxury development studio,
          she has worked on a number of high profile projects in some of the
          most exclusive locations across London, New York, Monaco & Dubai.
        </p>
      </div>
      {/* card */}
      <div className={styles.card}>
        <div
          style={{
            backgroundImage: `url("${data.card.img}")`,
          }}
          className="w-full h-full bg-cover bg-center bg-no-repeat "
        ></div>
        <p className={styles.card_text}>{data.card.text}</p>
      </div>
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
    img: "about-lady.jpg",
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
  md:w-[60%]
`),
  section2: ctl(`
  py-48
  flex
  flex-col
  gap-y-56
  mx-auto
  md:w-[60%]
`),
  section2_text: ctl(`
  text-2xl
  w-[80%] 
  mx-auto 
  leading-loose 
  tracking-wider
`),
  card: ctl(`
  justify-center
  items-center
  grid
  grid-cols-2
  mx-auto
  text-center
  h-[660px]
  overflow-hidden
`),
  card_text: ctl(`
  text-2xl
  mx-auto 
  leading-loose 
  px-24
  xl:py-12
  h-full
  flex
  items-center
  bg-white
`),
};
