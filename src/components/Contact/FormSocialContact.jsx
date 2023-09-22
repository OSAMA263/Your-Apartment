import { FormControl, FormLabel } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function FormSocialContact() {
  return <Form />;
}
// ------------------
const Form = () => {
  const [userData, setUserData] = useState(null);

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
  md:p-3
  p-1
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
  md:py-4
  py-2
  md:px-14
  px-10 
  bg-black
  hover:bg-gray-600 
  transition-all 
  duration-700 
  text-white
  text-xl
  `),

    onsubmit_text: ctl(`
    hidden
    px-3 
    py-4 
    text-center 
    bg-slate-100
    ${userData && "!block"}
    `),
  };
  const inputsRefs = useRef([]);
  const handle_submit = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.calue });
    inputsRefs.current.map((ele) => (ele.value = ""));
  };

  return (
    <>
      <form onSubmit={handle_submit} className="space-y-4 md:space-y-8">
        <h1 className={styles.onsubmit_text}>
          Thank you for submitting your details, we will be in touch shortly.
        </h1>
        {inputs.map(({ name_id, label, type }, i) => (
          <FormControl className="flex flex-col" key={i}>
            <FormLabel htmlFor={name_id}>{label}</FormLabel>
            <input
              required
              ref={(ele) => (inputsRefs.current[i] = ele)}
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
            required
            ref={(ele) => (inputsRefs.current[69] = ele)}
            className={styles.input}
            name="massage"
            id="massage"
            rows="4"
          ></textarea>
        </FormControl>
        {/* PRIVACY LINK */}
        <small className="block text-sm">
          By submitting this form I accept the
          <NavLink
            to="/privacy-policy"
            className="mx-1 font-bold border-b-2 border-black"
          >
            Privacy Policy
          </NavLink>
          of this site.
        </small>
        <button className={styles.submit_btn}>Submit</button>
      </form>
    </>
  );
};
