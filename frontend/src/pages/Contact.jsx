import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 lg:border mx-auto max-w-[730px]">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-7 lg:mb-10 font-light text-center text__para">
          Got a technical issues? Want to send feedback about a beta feature?
          Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-solid border=[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor: pointer rounded-md mt-1 "
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="w-full px-4 py-2 border border-solid border=[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor: pointer rounded-md mt-1 "
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="3"
              type="text"
              name="message"
              placeholder="Leave a comment....."
              className="w-full px-4 py-2 border border-solid border=[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor: pointer rounded-md mt-1 "
            />
            <div className="flex justify-center">
              <button type="submit" className="btn w-[80%]">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;