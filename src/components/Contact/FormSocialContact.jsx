import { FormControl, Input, FormLabel } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";

export default function FormSocialContact() {
  const cls = ctl(`
  md:container 
  h-[100dvh]
  mx-auto 
  items-center 
  justify-around 
  flex
  `);

  return (
    <div className={cls}>
      <SocialContact />
      <Form />
    </div>
  );
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
  opacity-25
  hover:opacity-100
  focus:opacity-100
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
      <form className="w-[45%] space-y-8">
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
        <small className="block">
          By submitting this form I accept the Privacy Policy of this site.
        </small>
        <button className={styles.submit_btn}>Submit</button>
      </form>
    </>
  );
};

const SocialContact = () => {
  return (
    <div className="w-[45%]">
      <div className="flex md:flex-col text-4xl">
        <span>Get in touch</span>
        <span className="flex items-center">
          <small className="inline-block h-[1px] w-4 bg-black me-2"></small>
          Let’s start a
        </span>
        <span>journey together</span>
      </div>
    </div>
  );
};
