import React, { useRef } from 'react';
import Plot from 'react-plotly.js';

const BarChart = ({ samples, id }) => {

  const barChartNode = useRef();
  const sample = samples.filter(s => s.id === id)[0];
  const otuIds = sample.otu_ids.slice(0, 10).reverse().map(s => 'OTU ' + s);
  const sampleValues = sample.sample_values.slice(0, 10).reverse();

  return (
    < Plot
      ref={barChartNode}
      data={
        [{
          type: 'bar',
          x: sampleValues,
          y: otuIds,
          orientation: 'h'
        },]
      }
      layout={
        {
          width: 400,
          height: 480,
          title: {
            text: 'Top 10 sample values',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },

          xaxis: {
            title: {
              text: 'Sample values',
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#7f7f7f'
              }
            },
          },

          yaxis: {
            title: {
              text: 'Otu Id',
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#7f7f7f'
              }
            },
          }
        }
      }
    />
  )
}

export default BarChart;