import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function PlotlyTest() {
    return (
    <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    )
}

// let url = "./json_plotly/boxplot_example.json"

// let xl = []
// let yl = []
// Plotly.d3.json(url, function(figure){
// let data = figure.data
// for (var i=0; i< data.length; i++){
// xl.push(data[i][0])
// yl.push(data[i][1]) }
// let trace = {
// x: xl,
// y: yl }
// Plotly.plot(document.getElementById("graph"), [trace]); })