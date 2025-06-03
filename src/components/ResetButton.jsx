export default function ResetButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full uppercase p-2 rounded-2xl font-bold shadow-md transition-colors cursor-pointer text-input ${
        disabled
          ? "bg-cyan text-cyan-900 cursor-not-allowed opacity-50"
          : "bg-cyan text-cyan-900 hover:bg-cyan-300"
      }`}
    >
      Reset
    </button>
  );
}
