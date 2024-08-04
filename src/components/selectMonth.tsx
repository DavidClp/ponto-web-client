import { useState, useEffect, ChangeEvent, ChangeEventHandler } from "react";

export interface Props {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  selectedValue: string;
}

// Função para gerar a lista de meses e anos
const generateMonthsList = (): { label: string; value: string }[] => {
  const monthsList: { label: string; value: string }[] = [];
  const currentDate = new Date();
  const options = { month: "long", year: "numeric" } as const;

  for (let i = 0; i < 12; i++) {
    const month = currentDate.toLocaleDateString("pt-BR", options);
    const value = currentDate.toISOString();
    monthsList.push({ label: month, value: value });
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return monthsList;
};

const SelectMonth = ({ handleChange, selectedValue }: Props) => {
  const [monthsList, setMonthsList] = useState<{ label: string; value: string }[]>([]);

  // Gerar a lista de meses ao montar o componente
  useEffect(() => {
    const months = generateMonthsList();
    setMonthsList(months);
  }, []);

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="bg-bg-secondary focus:outline-none h-12 rounded-md px-4 md:w-52 w-full shadow-md"
    >
      {monthsList.map((month, index) => (
        <option key={index} value={month.value}>
          {month.label}
        </option>
      ))}
    </select>
  );
};

export default SelectMonth;
