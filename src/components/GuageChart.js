import React from 'react';
import Plot from 'react-plotly.js';

export default function ({ metadata, id }) {

  const demographicInfo = metadata.filter(d => d.id === parseInt(id, 10))[0];
  const wFreq = demographicInfo.wfreq;

  console.log('wfre', wFreq);

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
    <Plot data={
      [{
        type: 'scatter',
        x: [0], y: [0],
        marker: { size: 28, color: '850000' },
        showlegend: false,
        name: 'Wash Frequnecy',
        text: wFreqLevel,
        hoverinfo: 'text+name'
      },
      {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
        textinfo: 'text',
        textposition: 'inside',
        marker: {
          colors: ['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
            'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
            'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
            'rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
            'rgba(170, 202, 42, .5)',
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
        height: 480,
        width: 480,
        xaxis: {
          zeroline: false, showticklabels: false,
          showgrid: false, range: [-1, 1]
        },
        yaxis: {
          zeroline: false, showticklabels: false,
          showgrid: false, range: [-1, 1]
        }

      }}
    />
  </div>
  )
}



