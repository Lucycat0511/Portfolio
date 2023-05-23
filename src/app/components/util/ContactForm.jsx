import Button from "./Button";

export default function ContactForm() {
  return (
    <div
      className="w-full p-8 border-2 border-secondary rounded-lg
    dark:border-tertiary"
    >
      <form className="flex flex-col w-full gap-1">
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
