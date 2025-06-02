export default function TipSelect({ tip, setTip, customTip, setCustomTip }) {
  const handleSelect = (value) => {
    setTip(value);
    setCustomTip("");
  };

  return (
    <fieldset className="flex flex-col gap-4">
      <legend className="text-cyan-600 font-bold">Select tip %</legend>
      <div className="grid grid-cols-2 gap-4">
        {[5, 10, 15, 25, 50].map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => handleSelect(value / 100)}
            className={`${
              tip === value / 100
                ? "bg-cyan-300 text-cyan-900"
                : "bg-cyan-900 text-white"
            } text-xl font-bold p-4 rounded text-center hover:bg-cyan-300 hover:text-cyan-900`}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => {
            setCustomTip(e.target.value);
            setTip(null);
          }}
          className="text-2xl p-4 bg-cyan-100 text-cyan-900 font-bold rounded placeholder:text-cyan-600"
        />
      </div>
    </fieldset>
  );
}
