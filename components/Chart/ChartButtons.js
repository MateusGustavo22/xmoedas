export default function ChartButtons(props) {
  return (
    <div className="flex gap-1">
      <button
        style={{ backgroundColor: props.buttonOn1 }}
        onClick={props.select7days}
        className="rounded-[4px] p-1 pl-3 pr-3 text-sm"
      >
        Semana
      </button>
      <button
        style={{ backgroundColor: props.buttonOn2 }}
        onClick={props.select30days}
        className="rounded-[4px] p-1 pl-3 pr-3 text-sm"
      >
        Mes
      </button>
      <button
        style={{ backgroundColor: props.buttonOn3 }}
        onClick={props.select365days}
        className="rounded-[4px] p-1 pl-3 pr-3 text-sm"
      >
        Ano
      </button>
    </div>
  )
}
