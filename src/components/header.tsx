import { useQuery } from "@tanstack/react-query";
import { fetchTotalHours } from "../services/fetch-total-hours";

interface HeaderProps {
  selectedValue: string;
}

export const Header = ({ selectedValue }: HeaderProps) => {
  const collaboratorCode = sessionStorage.getItem("collaboratorCode");

  const { data: dataTotalHours } = useQuery({
    queryKey: ["TotalHours", collaboratorCode, selectedValue],
    queryFn: async () => fetchTotalHours({ collaboratorCode, dateFilterString: selectedValue }),
  });

  const totalHours = dataTotalHours;

  return (
    <div className="space-y-4 flex flex-col items-center justify-center mb-6">
      <img src="/assets/ilumeo-logo.png" alt="Ilumeo Logo" className="w-56" />
      <h1 className="font-medium text-4xl">#{collaboratorCode}</h1>
      {totalHours && <p className="font-bold text-4xl">{totalHours} H</p>}
    </div>
  );
};
