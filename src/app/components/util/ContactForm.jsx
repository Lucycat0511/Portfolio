"use client";

import { useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const { name, subject, email, message } = form.current;
    const formData = {
      subject: subject.value,
      name: name.value,
      email: email.value,
      message: message.value,
    };
    emailjs.send(
      "service_23onxo4",
      "template_wlw4bxn",
      formData,
      "oAEv0ovRcAVzeb9JQ"
    );
  }
  return (
    <div
      className="w-full p-8 border-2 border-secondary rounded-lg
    dark:border-tertiary"
    >
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-1"
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          className="mb-4 p-1 rounded-md
          dark:text-black"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          className="mb-4 p-1 rounded-md
          dark:text-black"
        ></input>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          required
          className="mb-4 p-1 rounded-md
          dark:text-black"
        ></input>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          className="mb-4 p-1 rounded-md
          dark:text-black"
        ></textarea>
        <div className="flex justify-center">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
}
