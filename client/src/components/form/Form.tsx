import Button from "@/components/button/Button";

const Form = () => {
  return (
    <form className="flex-1">
      <input
        className="w-full mb-5 px-3 py-2 border-2"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-full mb-5 px-3 py-2 border-2"
        type="text"
        placeholder="Email"
      />
      <textarea className="w-full h-20 mb-5 px-3 py-2 border-2 resize-none"></textarea>
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
