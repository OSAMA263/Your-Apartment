import FormSocialContact from "../Contact/FormSocialContact";
import ctl from "@netlify/classnames-template-literals";
import SocialLinks from "../Contact/SocialLinks";

export default function Contact() {
  const className = ctl(`
  md:container 
  h-[100dvh]
  m-auto 
  items-center 
  justify-around 
  grid
  grid-cols-2
  gap-x-52
  `);

  return (
    <div className={className}>
      <SocialLinks />
      <FormSocialContact />
    </div>
  );
}
