export function ProgressBar () {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex w-full bg-gray-200 rounded-full">
        <div className="h-4 w-[40%] bg-green-500 rounded-l-full"></div>
        <div className="h-4 w-[30%] bg-amber-400 rounded-r-full"></div>
      </div>
      <div className="flex gap-4 items-center text-sm">
        <p>
          <span className="text-green-500 font-bold">40%</span> Pago
        </p>
        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        <p>
          <span className="text-amber-400 font-bold">30%</span> Reservado
        </p>
      </div>
    </div>
  );
}