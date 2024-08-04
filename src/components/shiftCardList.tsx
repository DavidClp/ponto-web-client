import { Shift } from "../services/use-shift";
import { ShiftCard } from "./shiftCard";

interface ShiftCardListProps {
  shiftList: Shift[] | undefined;
}

export const ShiftCardList = ({ shiftList }: ShiftCardListProps) => {
  const groupedShifts = shiftList?.reduce<{ [key: string]: Shift[] }>((acc, shift) => {
    const date = new Date(shift.entry).toLocaleDateString("pt-BR");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(shift);
    return acc;
  }, {});

  const shiftsGroupded = Object.entries(groupedShifts || {});

  return (
    <div className="flex flex-col gap-3 w-full mb-8">
      {shiftsGroupded?.map(([date, shifts]) => (
        <ShiftCard date={date} shifts={shifts} />
      ))}
    </div>
  );
};
