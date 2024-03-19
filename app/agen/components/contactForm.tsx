"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mleqwjkg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="fullname">Full Name</label>
          <input id="fullName" type="text" name="fullname" />
          <ValidationError prefix="FullName" field="fullname" errors={state.errors} />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </>
  );
}
