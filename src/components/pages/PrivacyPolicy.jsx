import React from "react";
import Section from "../privacy-policy/Section";
import GetInTouch from "../../Global-shit/GetInTouch";

const PrivacyPolicy = React.memo(() => {
  const data = [
    {
      header: "Privacy Policy",
      text: [
        "Charlie Horner Design is committed to respecting and protecting both your privacy and personal data. We would like to be clear about the data we collect, how we use it and your right to control that information. The following information describes how we gather and use that data when you access our website and do business with us. The amount of information we hold on you and how we use it depends on your relationship with us and some of the sections below may not be relevant to you.",
        "The General Data Protection Regulation (GDPR) impacts how organisations record, store and use personal data. This legislation is designed to give you, as ‘data subjects’, greater control and new rights over how we, as a ‘data controller’ (an organisation which holds your data which you may supply to us), record, store and use your data.",
        "This privacy policy sets out our uses of personal data and our privacy practices.",
      ],
    },
    {
      header: "Our data protection principles:",
      li: [
        "We keep to a minimum the amount of information we hold about you.",
        "We only hold your data for as long as necessary.",
        "We apply appropriate security mechanisms to protect your personal data.",
      ],
      link: "example@exampleQ&A123.com",
    },
    {
      header: "What information do we collect about you?",
      text: [
        "We may collect, use, store and transfer different kinds of personal data about you which you voluntary provide to us, which we have grouped together as follows:",
      ],
      li: [
        "Identity Data – this includes your first name, maiden name, last name or similar identifier, marital status, title, date of birth and gender.",
        "Contact Data – this includes your billing address, delivery address, email address and telephone numbers.",
        "Financial Data – this includes your bank account and payment card details.",
        "Transaction Data – this includes details about payments to and from you and other details of products and services you have purchased from us.",
        "Technical Data – this includes your internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.",
      ],
    },
    {
      header: "Why do we need your information?",
      text: [
        "We will only use your personal data for the purpose for which we collected it which include the following:",
      ],
      li: [
        "To register you as a new customer.",
        "To provide our services including managing payments, fees and charges and collecting and recovering money owed to us.",
        "To manage your relationship with us.",
        "To improve our website, services, marketing or customer relationships.",
        "If you submit an employment application to us, including CVs or resumes, all of the information submitted may be used for any and all purposes ordinarily associated with processing an employment application.",
        "To notify you of site content changes.",
      ],
    },
    {
      header: "Social Media Platforms",
      text: [
        "Communication, engagement and actions taken through external social media platforms that this website and its owners participate on are subject to the terms and conditions and privacy policies held by each social media platform respectively. This website nor its owners will ever ask for sensitive or personal information through social media platforms and encourage users wishing to discuss sensitive details to contact them through primary communication channels such as by email or telephone. Contact details can be found on this website.",
      ],
    },
  ];

  return (
    <>
      <div className="">
        <Section data={data} />
        <GetInTouch/>
      </div>
    </>
  );
});

export default PrivacyPolicy;
