import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { createCollaborator } from "../services/create-collaborator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (collaborateData: { code: string }) => {
      return createCollaborator(collaborateData);
    },
  });

  const [collaboratorCode, setCollaboratorCode] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCollaboratorCode(event.target.value);
  };

  if (mutation.error) {
    toast.error(mutation.error.message, {
      theme: "dark",
    });
  }

  if (mutation.isSuccess) {
    sessionStorage.setItem("collaboratorCode", mutation.data.collaborator.code);
    navigate("/home");
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-color-text border-4 md:border-8 border-bg-secondary p-5 md:p-20 rounded-md">
        <div className="space-y-4 flex flex-col items-center">
          <img src="/assets/ilumeo-logo.png" alt="Ilumeo Logo" className="w-48 md:w-56" />
          <h1 className="font-semibold text-3xl md:text-4xl">Ponto Digital</h1>
        </div>

        {mutation.isError ? <div>An error occurred: {mutation.error.message}</div> : null}

        <div className="flex flex-col py-8 w-[20rem] gap-8">
          <div className="flex flex-col bg-bg-secondary py-1 px-5 gap-1 rounded-md">
            <label htmlFor="collaborateCode" className="text-sm font-light text-gray-300">
              Código do colaborador
            </label>
            <input
              type="text"
              name="collaborateCode"
              className="bg-transparent focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-orange-500 h-12 px-20 rounded-md"
            onClick={() => mutation.mutate({ code: collaboratorCode })}
          >
            Entra
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
