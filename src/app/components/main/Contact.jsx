"use client";

import { useInView } from "react-intersection-observer";

import ContactForm from "../util/ContactForm";

export default function Contact() {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-12
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      transition-all ease-out duration-1000`}
    >
      <h1 className="text-2xl font-bold">Get In Touch!</h1>
      <div className="w-3/5">
        <ContactForm />
      </div>
    </div>
  );
}
