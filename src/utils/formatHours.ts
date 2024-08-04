import { Shift } from "../services/use-shift";

export const formatTotalHours = (shifts: Shift[]): string => {
  const totalMs = shifts.reduce((sum, shift) => sum + shift.totalDurationMs, 0);
  return formatHours(totalMs);
};

export const formatHours = (timeMs: number): string => {
  const totalMinutes = Math.floor(timeMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
};
