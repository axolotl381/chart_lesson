import React from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: ["React", "Vue", "Angular", "Java", "Type", "Redux", "REST API"],

  datasets: [
    {
      label: "Person A",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [66, 25, 33, 44, 50, 40, 42],
    },
    {
      label: "Person B",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#ff1493",
      pointBackgroundColor: "#ff1493",
      pointBorderColor: "#fff",
      data: [44, 50, 30, 20, 33, 3, 90],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      suggestedMin: 50, //最小値、この数字を下回る値があるなら最小値スケール
      suggestedMax: 100, //最大値、この数字を超えるプロットが存在するなら最大値スケール
      beginAtZero: true,
      ticks: {
        display: true,
        color: "#000000",
      }, //目盛の数値についての設定
      grid: { color: "#FFFFFFF", borderColor: "#00000FF" }, //目盛線についての設定
      angleLines: {
        color: "#0000FF", //軸の線の色
      },
    },
  },
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar options={options} data={data} />
    </div>
  );
};

export default RadarPlot;
