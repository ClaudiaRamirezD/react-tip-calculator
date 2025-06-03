import React from "react";
import ResetButton from "./ResetButton";

export default function Results({
  tipAmount,
  totalPerPerson,
  onReset,
  disabled
}) {
  return (
    <section className="bg-cyan-900 rounded-2xl flex flex-col gap-10 p-10 text-white mt-10 md:w-1/2">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">
          Tip Amount
          <br />
          <span className="text-sm text-white/70">/ person</span>
        </p>
        <h2 className="text-input text-cyan font-bold" aria-live="polite">
          ${tipAmount.toFixed(2)}
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">
          Total
          <br />
          <span className="text-sm text-white/70">/ person</span>
        </p>
        <h2 className="text-input text-cyan font-bold" aria-live="polite">
          ${totalPerPerson.toFixed(2)}
        </h2>
      </div>
      <ResetButton
        onClick={onReset}
        disabled={disabled}
        className="md:mt-auto"
      />
    </section>
  );
}
