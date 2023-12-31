import ctl from "@netlify/classnames-template-literals";
import * as LinkStyled from "../../Global-shit/LinesUnderLink";
import { Fragment } from "react";
import RevealElements from "../../Global-shit/RevealElements";

const Section = ({ data }) => {
  return (
    <>
      <div className="bg-[#e3e3e7] mt-10 space-y-28">
        {data.map(({ header, text, li, link }, i) => (
          <section key={i} className={styles.section}>
            {/* HEADER */}
            <RevealElements>
              <h1 className={styles.h1}>{header}</h1>
            </RevealElements>
            {/* TEXT */}
            <div className={styles.text_wrapper}>
              {text &&
                text.map((ele, i) => (
                  <RevealElements key={i}>
                    <p>{ele}</p>
                  </RevealElements>
                ))}
            </div>
            {/* LIST POINTS */}
            <div className={styles.list_wapper}>
              {li &&
                li.map((ele, i) => (
                  <RevealElements key={i}>
                    <li>{ele}</li>
                  </RevealElements>
                ))}
            </div>
            {/* LINK */}
            {link && (
              <RevealElements>
                <button className={LinkStyled.Class}>
                  {link} <LinkStyled.Lines />
                </button>
              </RevealElements>
            )}
          </section>
        ))}
        <div className={styles.last_content}>
          {end_data.map(({ h1, p }, i) => (
            <Fragment key={i}>
              <RevealElements>
                <h1 className="font-semibold">{h1}</h1>
              </RevealElements>
              <RevealElements>
                <p className="text-lg leading-loose md:text-2xl">{p}</p>
              </RevealElements>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
const end_data = [
  {
    h1: "Data Security",
    p: " Charlie Horner Design is governed by the data protection laws in the United Kingdom and takes all reasonable precautions to keep your personal information secure.",
  },
  {
    h1: "Updates to this policy:",
    p: "We reserve our right to update this Privacy Policy at Any changes we may make to our Privacy Policy will be updated to this page and it is your obligation to regularly check these terms and this policy to satisfy yourself as to the current position.",
  },
];

const styles = {
  section: ctl(`
  border-t-2
  border-gray-300
  flex
  flex-col
  pt-28
  space-y-12
  items-center
  mx-auto 
  text-center 
  [word-spacing:4px] 
  tracking-wider
  xl:w-1/2 
  w-[80%]
  `),
  h1: ctl(`
  xl:text-6xl
  md:text-5xl 
  text-3xl
  font-semibold
  `),
  text_wrapper: ctl(`
  leading-loose 
  space-y-8
  md:text-2xl
  text-lg
  `),
  list_wapper: ctl(`
  leading-relaxed 
  md:text-2xl 
  text-lg
  space-y-8
  `),
  last_content: ctl(`
  mx-auto 
  text-2xl
  text-center 
  flex 
  flex-col 
  gap-y-8 
  pb-32
  xl:w-1/2 
  w-[80%]
  `),
  // ----------------
};

export default Section;
