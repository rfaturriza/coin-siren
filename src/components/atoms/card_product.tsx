export const CardProduct = () => (
  <div className="flex items-center gap-2 p-4 rounded-lg min-w-[200px] md:min-w-[300px] bg-white/20">
    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-white/20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v-9a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12h18m-9 4.5c.795 0 1.5-.705 1.5-1.5S12.795 12 12 12s-1.5.705-1.5 1.5.705 1.5 1.5 1.5z"
        />
      </svg>
    </div>

    <span className="text-lg font-semibold text-white">퍼블리셔</span>
  </div>
);
