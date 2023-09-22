import * as LinkStyled from "../../Global-shit/LinesUnderLink";
import ctl from "@netlify/classnames-template-literals";

const SocialLinks = () => {
  return (
    <section className={styles.section}>
      <div className="space-y-2 text-4xl lg:text-6xl md:text-5xl">
        <span>Get in touch</span>
        <span className="flex items-center">
          <small className="inline-block h-[1px] w-10 bg-black me-2"></small>
          Let’s start a
        </span>
        <span>journey together</span>
      </div>
      {/* SOCIAL LINKS */}
      {SOCIAL_LINKS.map(({ link, label }, i) => (
        <div className="space-y-4" key={i}>
          <h1 className="text-2xl">{label}</h1>
          <button className={LinkStyled.Class}>
            {link} <LinkStyled.Lines />
          </button>
        </div>
      ))}
    </section>
  );
};
const styles = {
  section: ctl(`
  flex
  flex-col
  justify-between
  gap-y-28
  w-full
  lg:-order-1
  order-1
  `),
};

const SOCIAL_LINKS = [
  { label: "Email Address", link: "example@example123.com" },
  { label: "Social", link: "Instagram" },
];

export default SocialLinks;
