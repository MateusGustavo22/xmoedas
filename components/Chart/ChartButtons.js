export default function ChartButtons(props) {
  return (
    <div className="flex gap-1">
      <button
        style={{ backgroundColor: props.buttonOn1 }}
        onClick={props.select7days}
        className="pl-3 pr-3 p-1 rounded-[4px] text-sm"
      >
        Semana
      </button>
      <button
        style={{ backgroundColor: props.buttonOn2 }}
        onClick={props.select30days}
        className="pl-3 pr-3 p-1 rounded-[4px] text-sm"
      >
        Mes
      </button>
      <button
        style={{ backgroundColor: props.buttonOn3 }}
        onClick={props.select365days}
        className="pl-3 pr-3 p-1 rounded-[4px] text-sm"
      >
        Ano
      </button>
    </div>
  );
}
