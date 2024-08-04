import { useQuery } from "@tanstack/react-query";
import { fetchShiftList } from "../services/use-shift";
import { ChangeEvent, useState } from "react";
import SelectMonth from "../components/selectMonth";
import { ButtonMarkPoint } from "../components/buttonMarkPoint";
import { ShiftCardList } from "../components/shiftCardList";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";

const Home = () => {
  const navigate = useNavigate();

  const collaboratorCode = sessionStorage.getItem("collaboratorCode");

  if (!collaboratorCode) {
    navigate("/");
  }

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const { data, refetch } = useQuery({
    queryKey: ["shiftList", collaboratorCode, selectedValue],
    queryFn: async () => fetchShiftList({ collaboratorCode, dateFilterString: selectedValue }),
  });

  return (
    <section className="min-h-screen flex flex-col text-color-text px-4 md:px-20 py-10">
      <Header selectedValue={selectedValue} />
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-4 gap-y-3">
        <SelectMonth handleChange={handleChange} selectedValue={selectedValue} />
        <ButtonMarkPoint refetch={refetch} />
      </div>
      <ShiftCardList shiftList={data} />
    </section>
  );
};

export default Home;
