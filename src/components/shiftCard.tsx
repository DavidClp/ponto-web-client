import { FaRegClock } from "react-icons/fa";
import { Shift } from "../services/use-shift";
import { formatTotalHours } from "../utils/formatHours";

interface ShiftCardProps {
  date: string;
  shifts: Shift[];
}

export const ShiftCard = ({ date, shifts }: ShiftCardProps) => {
  return (
    <div
      key={date}
      className="flex items-center bg-bg-secondary w-full rounded-lg py-4 px-8 md:px-14 gap-6 shadow-md  "
    >
      <div className="flex items-center justify-center rounded-full min-w-16 min-h-16 border-2 border-primary">
        <p className="text-base font-semibold">{formatTotalHours(shifts)}</p>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-base font-semibold">
          {shifts[0].entry.getDate()} de {shifts[0].entry.toLocaleString("pt-BR", { month: "long" })}
        </p>

        <div className="flex flex-row flex-wrap">
          {shifts.map(shift => (
            <div key={shift.id} className="flex flex-row text-zinc-400 ">
              <p className="flex items-center gap-1 w-28">
                <FaRegClock />
                {shift.entry.getHours().toString().padStart(2, "0")}:
                {shift.entry.getMinutes().toString().padStart(2, "0")}
              </p>
              {shift.exit && (
                <p className="flex items-center gap-1 w-28 ">
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
  );
};
