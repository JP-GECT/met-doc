"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#336699", "#99CCFF"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const SemiCircleChart = () => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: -90,
          circumference: 180,
          cutout: "60%",
          maintainAspectRatio: true,
          responsive: false,
        }}
      />
      <div
        style={
          {
            // position: "absolute",
            // top: "55%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            // textAlign: "center",
          }
        }
      >
        {/* <div>Text Here</div> */}
      </div>
    </div>
  );
};

export default SemiCircleChart;
