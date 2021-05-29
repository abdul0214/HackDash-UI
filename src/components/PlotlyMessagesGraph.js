import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";
import Plot from "react-plotly.js";

export const PlotlyMessagesGraph = () => {
  const data = {
    labels: [
      "Start",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "Now",
    ],
    series: [
      [1, 200, 5, 2, 1, 8, 9, 1, 2, 1, 252, 69, 23, 2, 5, 99, 50, 2],
      [1, 252, 56, 23, 2, 5, 99, 50, 2, 1, 200, 5, 2, 1, 8, 9, 1, 2],
    ],
  };

  const options = {
    low: 0,
    showArea: false,
    fullWidth: true,
    axisX: {
      position: "end",
      showGrid: true,
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: true,
      showLabel: true,
      labelInterpolationFnc: (value) => `$${value / 1}k`,
    },
  };

  const plugins = [ChartistTooltip()];

  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{ width: 1000, height: 600, title: "A Fancy Plot" }}
    />
  );
};
