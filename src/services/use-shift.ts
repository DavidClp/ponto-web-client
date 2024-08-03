interface PropsUseShiftList {
  collaboratorCode: string;
  dateSring: string;
}

export interface Shift {
  id: number;
  collaboratorCode: string;
  entry: Date;
  exit: Date;
  totalDurationMs: number;
  hours: string;
}

export async function fetchShiftList({ collaboratorCode, dateSring }: PropsUseShiftList) {
  const response = await fetch(
    `http://192.168.56.1:8888/shift?collaboratorCode=${collaboratorCode}&year=2024&month=08`
  );

  const result: Shift[] = await response.json();

  result.map(shift => {
    shift.entry = new Date(shift.entry);

    if (shift.exit) {
      shift.exit = new Date(shift.exit);
    }

    // TODO: criar funcao, clean code
    const totalMinutes = Math.floor(shift.totalDurationMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Formatando como uma string "HH:MM"
    const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;

    shift.hours = `${hours}:${minutes.toString().padStart(2, "0")}`;
  });

  return result;
}
