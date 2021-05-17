import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export const MessagesTrendGraph = () => {
    const data = {
        labels: ['Start','1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','Now'],
        series: [[1, 200, 5, 2, 1,8,9,1,2,1, 252, 69, 23, 2,5,99,50,2],[1, 252, 56, 23, 2,5,99,50,2,1, 200, 5, 2, 1,8,9,1,2]]
    };
    
    const options = {
        low: 0,
        showArea: false,
        fullWidth: true,
        axisX: {
        position: 'end',
        showGrid: true
        },
        axisY: {
        // On the y-axis start means left and end means right
        showGrid: true,
        showLabel: true,
        labelInterpolationFnc: value => `$${value / 1}k`
        }
    };
    
    const plugins = [
        ChartistTooltip()
    ]
    
    return (
        <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-double-octave" />
    );
};