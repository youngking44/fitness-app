import Button from "@/components/button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email(),
  msg: z.string().trim().min(1, "Enter some texts"),
});

type FormInput = z.infer<typeof FormSchema>;

const Form = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormInput>({ resolver: zodResolver(FormSchema) });

  const handleForm = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      className="flex-1"
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ type: "tween", duration: 0.7 }}
    >
      <form
        target="_blank"
        onSubmit={handleForm}
        action={import.meta.env.VITE_FORMSUBMIT_KEY}
        method="POST"
      >
        <div className="mb-5">
          <input
            className="w-full px-3 py-2 border-2"
            type="text"
            {...register("name")}
            name="name"
            placeholder="Name"
          />
          {errors.name && (
            <p className="mt-2 text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            className="w-full px-3 p y-2 border-2"
            type="text"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="mt-2 text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-5">
          <textarea
            className="w-full h-20 px-3 py-2 border-2 resize-none"
            {...register("msg")}
            name="msg"
          ></textarea>
          {errors.msg && (
            <p className="mt-2 text-red-500">{errors.msg.message}</p>
          )}
        </div>
        <Button>Submit</Button>
      </form>
    </motion.div>
  );
};

export default Form;
