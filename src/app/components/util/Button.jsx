export default function Button({ text }) {
  return (
    <div
      className="bg-secondary rounded-md w-fit
    dark:bg-tertiary"
    >
      <button
        className={` bg-primary px-6 py-2 rounded-md shadow-md text-md font-light border-secondary border 
     dark:bg-quaternary dark:border-tertiary
    hover:-translate-x-1 hover:-translate-y-1
    transition-all ease-out duration-200`}
      >
        {text}
      </button>
    </div>
  );
}
