import FormSocialContact from "../Contact/FormSocialContact";
import ctl from "@netlify/classnames-template-literals";
import SocialLinks from "../Contact/SocialLinks";
import RouterAnimate from "../../Global-shit/RouterAnimate";

export default function Contact() {
  return (
    <RouterAnimate>
      <div className={className}>
        <SocialLinks />
        <FormSocialContact />
      </div>
    </RouterAnimate>
  );
}
const className = ctl(`
container 
m-40
mx-auto 
px-4
items-center 
grid
lg:grid-cols-2
lg:grid-rows-1
lg:justify-around 
grid-rows-2
gap-y-10
xl:gap-x-52
`);
