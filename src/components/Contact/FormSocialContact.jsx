import { FormControl, FormLabel, Button } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import { NavLink } from "react-router-dom";
import * as LinkStyled from "../../Global-shit/LinesUnderLink";

export default function FormSocialContact() {
  return <Form />;
}

const Form = () => {
  const inputs = [
    { name_id: "name", label: "Name", type: "text" },
    { name_id: "email", label: "Email", type: "email" },
    { name_id: "phone", label: "Phone Number", type: "number" },
  ];

  const styles = {
    input: ctl(`
  outline-none
  border-[1px]
  border-black
  p-3
  border-opacity-25
  hover:border-opacity-100
  focus:border-opacity-100
  transition-all
  duration-700
  `),

    form_control: ctl(`
  flex
  flex-col
  `),

    submit_btn: ctl(`
  py-4
  px-14 
  bg-black
  hover:bg-gray-600 
  transition-all 
  duration-700 
  text-white
  text-xl
  `),
  };

  return (
    <>
      <form className="space-y-8">
        {inputs.map(({ name_id, label, type }, i) => (
          <FormControl className="flex flex-col" key={i}>
            <FormLabel htmlFor={name_id}>{label}</FormLabel>
            <input
              className={styles.input}
              type={type}
              name={name_id}
              id={name_id}
            />
          </FormControl>
        ))}
        <FormControl className="flex flex-col">
          <FormLabel htmlFor="massage">Massage</FormLabel>
          <textarea
            className={styles.input}
            name="massage"
            id="massage"
            rows="4"
          ></textarea>
        </FormControl>
        {/* PRIVACY LINK */}
        <small className="block">
          By submitting this form I accept the
          <NavLink to="/privacy-policy" className={`ml-1 ${LinkStyled.Class}`}>
            Privacy Policy <LinkStyled.Lines />
          </NavLink>
          of this site.
        </small>
        <Button className={styles.submit_btn}>Submit</Button>
      </form>
    </>
  );
};