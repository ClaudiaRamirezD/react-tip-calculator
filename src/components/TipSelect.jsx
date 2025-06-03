export default function TipSelect({ tip, setTip, customTip, setCustomTip }) {
  const handleSelect = (value) => {
    setTip(value);
    setCustomTip("");
  };

  return (
    <fieldset className="flex flex-col gap-4">
      <legend className="text-cyan-600 font-bold">Select tip %</legend>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 ">
        {[5, 10, 15, 25, 50].map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => handleSelect(value / 100)}
            className={`${
              tip === value / 100
                ? "bg-cyan text-cyan-900"
                : "bg-cyan-900 text-cyan-300"
            } text-input font-bold p-4 rounded-xl text-center hover:bg-red-300 hover:text-yellow-900 cursor-pointer`}
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
          className="text-input p-4 md:p-3 bg-cyan-300 text-cyan-900 font-bold rounded placeholder:text-cyan-600 cursor-pointer text-right
"
        />
      </div>
    </fieldset>
  );
}
