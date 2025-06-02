import { useState } from "react";
import InputsSection from "./components/InputSection";
import Results from "./components/Results";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null); 
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [error, setError] = useState(false);

  const numericBill = parseFloat(bill);
  const numericPeople = parseInt(people);
  const selectedTip = tip ?? (customTip ? parseFloat(customTip) / 100 : null);

  const isValid = numericBill > 0 && numericPeople > 0 && selectedTip != null;

  const tipAmount = isValid ? (numericBill * selectedTip) / numericPeople : 0;
  const totalPerPerson = isValid ? numericBill / numericPeople + tipAmount : 0;

  const handleReset = () => {
    setBill("");
    setTip(null);
    setCustomTip("");
    setPeople("");
    setError(false);
  };

  return (
    <main className="bg-cyan-400 font-main h-screen flex flex-col items-center justify-between">
    <h1 className="text-4xl my-[10%]  text-cyan-900 font-bold tracking-[1rem]">
        SPLI
        <br />
        <span>TTER</span>
      </h1>
      <div className="bg-white rounded-t-2xl w-full p-8">
        <InputsSection
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          customTip={customTip}
          setCustomTip={setCustomTip}
          people={people}
          setPeople={setPeople}
          error={error}
          setError={setError}
        />
        <Results
          tipAmount={tipAmount}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
          disabled={!isValid}
        />
      </div>
    </main>
  );
}
