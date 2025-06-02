export default function PeopleInput({ people, setPeople, error, setError }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setPeople(value);
    setError(value === "0");
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor="people" className="text-cyan-600 font-bold">
        Number of People
      </label>
      {error && (
        <span className="absolute right-4 top-0 text-red-600 font-bold text-sm">
          Can't be zero
        </span>
      )}
      <div className="relative">
        <input
          type="number"
          placeholder="0"
          id="people"
          value={people}
          onChange={handleChange}
          className={`w-full text-right p-4 text-2xl bg-cyan-100 text-cyan-900 font-bold rounded outline-cyan-400 ${
            error ? "outline-red-600" : ""
          }`}
        />
        <img
          src="/images/icon-person.svg"
          alt="person"
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
}
