import { useMutation } from "@tanstack/react-query";
import { FaRegHandPointUp } from "react-icons/fa";
import { createShift } from "../services/create-shift";
import { toast } from "react-toastify";

interface ButtonMarkPointProps {
  refetch: Function;
}

export const ButtonMarkPoint = ({ refetch }: ButtonMarkPointProps) => {
  const mutation = useMutation({
    mutationFn: async (pointData: { collaboratorCode: string; point: Date }) => {
      await createShift(pointData);
    },
    onSuccess: () => {
      refetch();
      toast.success("Ponto marcado!", {
        theme: "dark",
      });
    },
  });
  const collaboratorCode = sessionStorage.getItem("collaboratorCode");

  if (mutation.error) {
    toast.error(mutation.error.message, {
      theme: "dark",
    });
  }

  if (!collaboratorCode) {
    return <div></div>;
  }

  return (
    <button
      type="submit"
      className="bg-primary hover:bg-orange-500 flex items-center justify-center h-12 w-full md:w-52 rounded-md gap-1 shadow-lg 

       "
      onClick={() => mutation.mutate({ collaboratorCode: collaboratorCode, point: new Date() })}
    >
      <FaRegHandPointUp />
      Marcar ponto
    </button>
  );
};

/*      md:relative bottom-0 mb-4 md:mb-0 mr-4 md:mr-0 */
