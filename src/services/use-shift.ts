import { formatHours } from "../utils/formatHours";

interface PropsUseShiftList {
  collaboratorCode: string | null;
  dateFilterString: string;
}

export interface Shift {
  id: number;
  collaboratorCode: string;
  entry: Date;
  exit: Date;
  totalDurationMs: number;
  hours: string;
}

export async function fetchShiftList({ collaboratorCode, dateFilterString }: PropsUseShiftList) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dateFilter = new Date(dateFilterString);
  const year = dateFilter.getFullYear();
  const month = dateFilter.getMonth() + 1;

  const response = await fetch(`${apiUrl}/shift?collaboratorCode=${collaboratorCode}&year=${year}&month=${month}`);
  const result: Shift[] = await response.json();

  result.map(shift => {
    shift.entry = new Date(shift.entry);

    if (shift.exit) {
      shift.exit = new Date(shift.exit);
    }

    shift.hours = formatHours(shift.totalDurationMs);
  });

  return result;
}
