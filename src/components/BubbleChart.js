import React, { useRef } from 'react';
import Plot from 'react-plotly.js';
import * as d3 from 'd3';

const BubbleChart = ({
  samples,
  id
}) => {

  const bubblechartRef = useRef();

  const sample = samples.filter(s => s.id === id)[0];

  const otuIds = sample.otu_ids;
  const sampleValues = sample.sample_values;

  const maxSampleValue = d3.max(sampleValues);

  return (<div className='App' >
    < Plot
      ref={bubblechartRef}
      data={
        [{
          x: otuIds,
          y: sampleValues,
          mode: 'markers',
          marker: {
            size: sampleValues.map(s => s / maxSampleValue * 150),
            color: sampleValues.map(s => s),
            opacity: 0.5,
            colorscale: 'Rainbow',
          }

        },]
      }
      layout={
        {
          width: 1000,
          height: 450,
          title: {
            text: 'Sample values', font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },

          xaxis: {
            title: {
              text: 'Otu Id',
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#7f7f7f'
              }
            },
          },

          yaxis: {
            title: {
              text: 'Sample values',
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#7f7f7f'
              }
            },
          }
        }
      }
    ></Plot>
  </div>
  )
}

export default BubbleChart;