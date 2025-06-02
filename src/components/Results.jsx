import ResetButton from "./ResetButton";

export default function Results({
  tipAmount,
  totalPerPerson,
  onReset,
  disabled
}) {
  return (
    <section className="bg-cyan-900 rounded-2xl flex flex-col gap-10 p-10 text-white">
      <div className="flex justify-between items-center">
        <p>
          Tip Amount
          <br />
          <span className="text-sm text-white/70">/ person</span>
        </p>
        <h2 className="text-4xl text-cyan-400" aria-live="polite">
          ${tipAmount.toFixed(2)}
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <p>
          Total
          <br />
          <span className="text-sm text-white/70">/ person</span>
        </p>
        <h2 className="text-4xl text-cyan-400" aria-live="polite">
          ${totalPerPerson.toFixed(2)}
        </h2>
      </div>
      <ResetButton onClick={onReset} disabled={disabled} />
    </section>
  );
}
