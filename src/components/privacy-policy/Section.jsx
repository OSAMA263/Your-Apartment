import ctl from "@netlify/classnames-template-literals";
import * as LinkStyled from "../../Global-shit/LinesUnderLink";
import { Fragment } from "react";

const Section = (props) => {
  const { data } = props;

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
    w-1/2 
    flex
    flex-col
    pt-28
    space-y-12
    items-center
    mx-auto 
    text-center 
    [word-spacing:4px] 
    tracking-wider
    `),
    h1: ctl(`
    text-6xl 
    font-semibold
    `),
    text_wrapper: ctl(`
    leading-loose 
    space-y-8
    text-2xl
    `),
    list_wapper: ctl(`
    leading-relaxed 
    text-2xl 
    space-y-8
    `),
  };

  return (
    <>
      <div className="bg-[#e3e3e7] mt-10 space-y-28">
        {data.map(({ header, text, li, link }, i) => (
          <section key={i} className={styles.section}>
            {/* HEADER */}
            <h1 className={styles.h1}>{header}</h1>
            {/* TEXT */}
            <div className={styles.text_wrapper}>
              {text && text.map((ele, i) => <p key={i}>{ele}</p>)}
            </div>
            {/* LIST POINTS */}
            <div className={styles.list_wapper}>
              {li && li.map((ele, i) => <li key={i}>{ele}</li>)}
            </div>
            {/* LINK */}
            {link && (
              <button className={LinkStyled.Class}>
                {link} <LinkStyled.Lines />
              </button>
            )}
          </section>
        ))}
        <div className="w-1/2 mx-auto text-2xl text-center flex flex-col gap-y-8 pb-32">
          {end_data.map(({ h1, p }, i) => (
            <Fragment key={i}>
              <h1 className="font-semibold">{h1}</h1>
              <p className="leading-loose">{p}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
