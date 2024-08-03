import { useQuery } from "@tanstack/react-query";
import { fetchShiftList, Shift } from "../services/use-shift";
import { FaRegClock } from "react-icons/fa";
import { FaRegHandPointUp } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import SelectMonth from "../components/selectMonth";

const Home = () => {
  const collaboratorCode = "4SXXFMF";
  const totalHours = "180:30";

  // Estado para armazenar o valor selecionado do input
  const [selectedValue, setSelectedValue] = useState("");

  const { data } = useQuery({
    queryKey: ["shiftList", { collaboratorCode }],
    queryFn: async () => fetchShiftList({ collaboratorCode, dateSring: selectedValue }),
  });

  // Agrupando os turnos por data e calculando o total de horas
  const groupedShifts = data?.reduce<{ [key: string]: Shift[] }>((acc, shift) => {
    const date = new Date(shift.entry).toLocaleDateString("pt-BR");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(shift);
    return acc;
  }, {});

  const formatTotalDuration = (shifts: Shift[]): string => {
    const totalMs = shifts.reduce((sum, shift) => sum + shift.totalDurationMs, 0);
    const totalMinutes = Math.floor(totalMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  };

  // Função para lidar com mudanças no select
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue);
  const shiftsGroupded = Object.entries(groupedShifts || {});

  return (
    <section className="min-h-screen flex flex-col bg-bg-primary text-color-text px-20 py-10">
      <div className="space-y-4 flex flex-col items-center justify-center mb-6">
        <img src="/assets/ilumeo-logo.png" alt="Ilumeo Logo" className="w-56" />
        <h1 className="font-medium text-4xl">#{collaboratorCode}</h1>
        <p className="font-bold text-4xl">{totalHours}</p>
      </div>
      {/* ------------------------- */}
      <div className="flex justify-between py-6">
        <SelectMonth handleChange={handleChange} selectedValue={selectedValue} />
        <button type="submit" className="bg-primary py-2 px-14 rounded-md flex items-center justify-center gap-1">
          <FaRegHandPointUp />
          Marcar ponto
        </button>
      </div>
      {/* ------------------------- */}
      <div className="flex flex-col gap-3 w-full">
        {shiftsGroupded?.map(([date, shifts]) => (
          <div key={date} className="flex items-center bg-bg-secondary w-full rounded-lg py-4 px-14 gap-6">
            <div className="flex items-center justify-center rounded-full w-16 h-16 border-2 border-primary">
              <p className="text-base font-semibold">{formatTotalDuration(shifts)}</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-base font-semibold">
                {shifts[0].entry.getDate()} de {shifts[0].entry.toLocaleString("pt-BR", { month: "long" })}
              </p>

              <div className="flex flex-row gap-10">
                {shifts.map(shift => (
                  <div key={shift.id} className="flex flex-row gap-10">
                    <p className="text-zinc-400 flex items-center justify-center gap-1">
                      <FaRegClock />
                      {shift.entry.getHours().toString().padStart(2, "0")}:
                      {shift.entry.getMinutes().toString().padStart(2, "0")}
                    </p>
                    {shift.exit && (
                      <p className="text-zinc-400 flex items-center justify-center gap-1">
                        <FaRegClock />
                        {shift.exit.getHours().toString().padStart(2, "0")}:
                        {shift.exit.getMinutes().toString().padStart(2, "0")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
