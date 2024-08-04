import { formatHours } from "../utils/formatHours";

interface PropsUseTotalHoursList {
  collaboratorCode: string | null;
  dateFilterString: string;
}

export async function fetchTotalHours({ collaboratorCode, dateFilterString }: PropsUseTotalHoursList) {
  const apiUrl = process.env.REACT_APP_API_URL;

  const dateFilter = new Date(dateFilterString);
  const year = dateFilter.getFullYear();
  const month = dateFilter.getMonth() + 1;

  const response = await fetch(
    `${apiUrl}/total-hours?collaboratorCode=${collaboratorCode}&year=${year}&month=${month}`
  );

  const result: number = await response.json();

  const totalHours = formatHours(result);

  return totalHours;
}
