import React, { useRef } from 'react';
import Plot from 'react-plotly.js';

const GuageChart = ({ metadata, id }) => {

  const guagechartRef = useRef();

  const demographicInfo = metadata.filter(d => d.id === parseInt(id, 10))[0];
  const wFreq = demographicInfo.wfreq;
  const wFreqLevel = 180 * wFreq / 9;

  // Enter a speed between 0 and 180
  // Trig to calc meter point
  const degrees = 180 - wFreqLevel;
  const radius = .5;
  const radians = degrees * Math.PI / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  // Path: may have to change to create a better triangle
  const mainPath = 'M -.0 -0.025 L .0 0.025 L ';
  const pathX = String(x);
  const space = ' ';
  const pathY = String(y);
  const pathEnd = ' Z';
  const path = mainPath.concat(pathX, space, pathY, pathEnd);

  return (<div className='App' >
    <Plot
      ref={guagechartRef}
      data={
        [{
          type: 'scatter',
          x: [0], y: [0],
          marker: { size: 28, color: '850000' },
          showlegend: false,
          name: 'Wash Frequnecy',
          text: wFreq,
          hoverinfo: 'text+name'
        },
        {
          values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
          rotation: 90,
          text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
          textinfo: 'text',
          textposition: 'inside',
          marker: {
            colors: ['rgba(255,102,178, .5)', 'rgba(255,153,204, .5)',
              'rgba(255,204,229, .5)', 'rgba(0,255,0, .5)',
              'rgba(51,255,51, .5)', 'rgba(102,255,102, .5)',
              'rgba(255,255,102, .5)', 'rgba(255,255,153, .5)',
              'rgba(255,255,204, .5)',
              'rgba(255, 255, 255, 0)']
          },
          labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
          hoverinfo: 'label',
          hole: .5,
          type: 'pie',
          showlegend: false
        }]
      }
      layout={{
        shapes: [{
          type: 'path',
          path: path,
          fillcolor: '850000',
          line: {
            color: '850000'
          }
        }],
        title: '<b>Gauge</b> <br> Wash Frequnecy',
        height: 450,
        width: 450,
        xaxis: {
          zeroline: false, showticklabels: false,
          showgrid: false, range: [-1, 1]
        },
        yaxis: {
          zeroline: false, showticklabels: false,
          showgrid: false, range: [-1, 1]
        },
        margin: {
          l: 10,
          r: 10,
          t: 60,
          b: 10

        }

      }}
    />
  </div>
  )
}

export default GuageChart;



