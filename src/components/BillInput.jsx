export default function BillInput({ bill, setBill }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="bill" className="text-cyan-600 font-bold">
        Bill
      </label>
      <div className="relative">
        <input
          type="number"
          id="bill"
          placeholder="0"
          step=".01"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full text-right p-2 text-input bg-cyan-300 text-cyan-900 font-bold rounded outline-cyan cursor-pointer"
        />
        <img
          src="/images/icon-dollar.svg"
          alt="dollar"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold text-input size-5"
        />
      </div>
    </div>
  );
}
