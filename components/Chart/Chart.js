import { Chart as ChartJS } from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import styles from "./Chart.module.scss";
import ChartButtons from "../chartButtons/ChartButtons";
import { useState } from "react";

export default function Chart(props) {
  const lastCots = props.last30days.cot;

  const [cotPeriodo, setCotPeriodo] = useState(lastCots);
  const [cotDate, setCotDate] = useState(props.last30days.cotDate);

  const [buttonOn1, setButtonOn1] = useState("#222222");
  const [buttonOn2, setButtonOn2] = useState("#4c4c4c");
  const [buttonOn3, setButtonOn3] = useState("#222222");

  async function select7days() {
    setCotPeriodo(props.last7days.cot);
    setCotDate(props.last7days.cotDate);

    setButtonOn1("#4c4c4c");
    setButtonOn2("#222222");
    setButtonOn3("#222222");
  }

  function select30days() {
    setCotPeriodo(props.last30days.cot);
    setCotDate(props.last30days.cotDate);

    setButtonOn1("#222222");
    setButtonOn2("#4c4c4c");
    setButtonOn3("#222222");
  }

  const select365days = async () => {
    setCotPeriodo(props.last365days.cot);
    setCotDate(props.last365days.cotDate);

    setButtonOn1("#222222");
    setButtonOn2("#222222");
    setButtonOn3("#4c4c4c");
  };

  ChartJS
    .register
    //CategoryScale,
    //LinearScale,
    //PointElement,
    //LineElement,
    //Title,
    //Tooltip,
    //Legend
    ();

  const data = {
    labels: cotDate,
    datasets: [
      {
        label: `${props.code} Para BRL`,
        data: cotPeriodo,
        fill: true,
        pointRadius: 0,
        backgroundColor: "rgb(19, 98, 168, 0.2)",
        borderColor: "#1363DF",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className={styles.chart_area}>
      <div className={styles.chart_div}>
        <ChartButtons
          select7days={select7days}
          select30days={select30days}
          select365days={select365days}
          buttonOn1={buttonOn1}
          buttonOn2={buttonOn2}
          buttonOn3={buttonOn3}
        />
        <Line data={data} options={options} width="320" height="200" />
      </div>
    </div>
  );
}
