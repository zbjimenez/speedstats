function main() {
  const FIG = document.getElementsByTagName('figure')[0];

  var tog1 = true;
  var data = [
    {
      type: "bar",
      y: ['001-4', '001-3', '001-2', '001-1'],
      x: [2*60000, 4*60000, 8*60000, 16*60000],
      base: 0,
      // xaxis: 'x1',
      // yaxis: 'y1',
      orientation: 'h',
      ticks: 'inside',
      visible: tog1,
    },
    {
      type: "bar",
      y: ['001-4', '001-3', '001-2', '001-1'],
      x: [2*60000, 3*60000, 3*60000, 4*60000],
      base: 17*60000,
      // xaxis: 'x1',
      // yaxis: 'y1',
      orientation: 'h',
      visible: tog1,
    },
    {
      type: "bar",
      y: ['001-4', '001-3', '001-2', '001-1'],
      x: [1*60000, 4*60000, 5*60000, 6*60000],
      base: 22*60000,
      // xaxis: 'x1',
      // yaxis: 'y1',
      orientation: 'h',
      visible: tog1,
    },

    {
      type: "bar",
      y: ['002-4', '002-3', '002-2', '002-1'],
      x: [2*60000, 4*60000, 8*60000, 16*60000],
      base: 0,
      // xaxis: 'x3',
      // yaxis: 'y3',
      orientation: 'h',
      ticks: 'inside',
    },
    {
      type: "bar",
      y: ['002-4', '002-3', '002-2', '002-1'],
      x: [2*60000, 3*60000, 3*60000, 4*60000],
      base: 17*60000,
      // xaxis: 'x3',
      // yaxis: 'y3',
      orientation: 'h',
    },
    {
      type: "bar",
      y: ['002-4', '002-3', '002-2', '002-1'],
      x: [1*60000, 4*60000, 5*60000, 6*60000],
      base: 22*60000,
      // xaxis: 'x3',
      // yaxis: 'y3',
      orientation: 'h',
    },
    
    {
      name: '1',
      type: "bar",
      x: [2*60000],
      y: ['001-x'],
      base: 0,
      width: .2,
      // xaxis: 'x2',
      // yaxis: 'y2',
      orientation: 'h',
    },
    {
      name: '2',
      type: "bar",
      x: [2*60000],
      y: ['001-x'],
      base: 2*60000,
      width: .2,
      // xaxis: 'x2',
      // yaxis: 'y2',
      orientation: 'h',
    },
    {
      name: '3',
      type: "bar",
      x: [1*60000],
      y: ['001-x'],
      base: 4*60000,
      width: .2,
      // xaxis: 'x2',
      // yaxis: 'y2',
      orientation: 'h',
    },
    // {
    //   type: 'funnel', name: 'a',
    //   x: [2*60000, 2*60000],
    //   xaxis: 'x4',
    //   yaxis: 'y4',
    // },
    // {
    //   type: 'funnel', name: 'blank1',
    //   x: [16*60000-2, 0], 
    //   xaxis: 'x4',
    //   yaxis: 'y4',
    // },
    // {
    //   type: 'funnel', name: 'b',
    //   x: [2*60000, 2*60000],
    //   xaxis: 'x4',
    //   yaxis: 'y4',
    // },
    // {
    //   type: 'funnel', name: 'blank2',
    //   x: [4*60000-2, 0], 
    //   xaxis: 'x4',
    //   yaxis: 'y4',
    // },
    // {
    //   type: 'funnel', name: 'c',
    //   x: [1*60000, 1*60000],
    //   xaxis: 'x4',
    //   yaxis: 'y4',
    // },
    // {
    //   type: 'funnel', name: 'blank3',
    //   x: [6*60000-1, 26-5], 
    //   xaxis: 'x4',
    //   yaxis: 'y4',
    // },
  ];

  var layout = {
    // grid: {
    //   columns: 1,
    //   rows: 3,
    //   pattern: 'independent',
    //   xgap: 0,
    // },
    // hovertemplate: '%{M:x}:%{S:x}.%{L:x}',
    barmode: 'stack',
    margin: {
      t:0, b:100, r:0, l:100
    },
    showlegend: false,
    // xaxis: {
    //   domain: [0, 16/26],
    //   range: [0, 16],
    // },
    // xaxis2: {
    //   domain: [16/26, 20/26],
    //   range: [0, 4],
    // },
    // xaxis3: {
    //   domain: [20/26, 1],
    //   range: [0, 6],
    // },
    xaxis: {
      type: 'date',
      tickformat: '%M:%S.%L',
      // range: [new Date(0), new Date(0,0,0, 0, 30)],
    },
    yaxis: {
      categoryorder: 'category descending'
    }
    // xaxis2: {
    //   // domain: [0, 1],
    //   range: [0, 26],
    // },
    // xaxis5: {domain: [1, 1]},
    // xaxis6: {domain: [1, 1]},
    // yaxis1: {visible: false},
    // yaxis2: {visible: false},
    // yaxis3: {visible: false},
    // yaxis4: {
    //   visible: false,
    //   // domain: [.25, .5],
    // },
    // yaxis5: {visible: false},
    // yaxis6: {visible: false},
    // plot_bgcolor: '#fff',
    // paper_bgcolor: '#*60000',
  };

  var config = {
    modeBarButtonsToRemove: [
      'zoom2d', 'zoomin2d', 'zoomout2d', 'autoscale2d', 'pan2d', 'select2d'
    ],
  }

  Plotly.newPlot( FIG, data, layout, config );

  console.log(data);
}