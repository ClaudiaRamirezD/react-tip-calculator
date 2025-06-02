export default function ResetButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full uppercase p-4 rounded font-bold shadow-md transition-colors ${
        disabled
          ? "bg-cyan-800 text-cyan-900 cursor-not-allowed opacity-50"
          : "bg-cyan-400 text-cyan-900 hover:bg-cyan-300"
      }`}
    >
      Reset
    </button>
  );
}
