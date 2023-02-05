"use client";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgebogow");

  if (state.succeeded) {
    return (
      <div className="w-screen h-screen flex justify-center items-center p-4 text-4xl md:text-7xl">
        <p>Thanks for your submission!</p>
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center text-2xl md:text-4xl">
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          className="border-2 border-blue-400"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea
          className="border-2 border-blue-400"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="bg-blue-500"
          type="submit"
          disabled={state.submitting}
        >
          Send
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default Contact;
