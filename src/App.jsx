import { useState } from "react";

import InputsSection from "./components/InputSection";
import Results from "./components/Results";
import { calculateTipAndTotal } from "./utils/calculateTipAndTotal";

import "./App.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null); 
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [error, setError] = useState(false);


  const handleReset = () => {
    setBill("");
    setTip(null);
    setCustomTip("");
    setPeople("");
    setError(false);
  };

  const { tipAmount, totalPerPerson, isValid } = calculateTipAndTotal(
    bill,
    tip,
    customTip,
    people
  );

  return (
    <main className="bg-cyan-400 font-main h-screen md:h-full flex flex-col items-center justify-between md:justify-start">
      <h1 className="text-4xl my-[10%] md:my-18  text-cyan-900 font-bold tracking-[1rem]">
        SPLI
        <br />
        <span>TTER</span>
      </h1>
      <div className="bg-white rounded-t-2xl w-full p-8 md:p-12 md:rounded-4xl md:mb-18 md:flex md:flex-row md:justify-between md:w-3/4 gap-8">
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
