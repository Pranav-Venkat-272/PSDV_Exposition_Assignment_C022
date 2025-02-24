document.addEventListener('DOMContentLoaded', function () {
  // Function to create a chart
  function createChart(containerId, option) {
    var chart = echarts.init(document.getElementById(containerId));
    chart.setOption(option);
  }
  
  // Line Chart
  var lineOption = {
    title: { text: 'Line Chart Example' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'] },
    yAxis: { type: 'value' },
    series: [{ data: [150, 230, 224, 218, 135, 147, 260,189,203,345,124,756], type: 'line' }],
    tooltip:{
      trigger: 'axis'
    }
  };
  createChart('line-chart', lineOption);

  // Bar Chart
  var barOption = {
    title: { text: 'Bar Chart Example' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [
      { value: 120, itemStyle: { color: '#ff0000' } },
      { value: 200, itemStyle: { color: '#00ff00' } },
      { value: 150, itemStyle: { color: '#0000ff' } },
      { value: 80, itemStyle: { color: '#ffff00' } },
      { value: 70, itemStyle: { color: '#ff00ff' } },
      { value: 110, itemStyle: { color: '#00ffff' } },
      { value: 130, itemStyle: { color: '#ff8000' } }],
       type: 'bar' }],
    tooltip:{
      trigger: 'axis'
    }
  };
  createChart('bar-chart', barOption);

  // Scatter Chart
  var scatterOption = {
    title: { text: 'Scatter Chart Example' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [{
      symbolSize: 20,
      data: [[10.0, 8.04], [8.0, 6.95], [13.0, 7.58], [9.0, 8.81], [11.0, 8.33], [14.0, 9.96], [6.0, 7.24], [4.0, 4.26], [12.0, 10.84], [7.0, 4.82], [5.0, 5.68]],
      type: 'scatter'
    }],
    tooltip:{
      trigger: 'axis'
    }
  };
  createChart('scatter-chart', scatterOption);

  // Pie Chart
  var pieOption = {
    title: { text: 'Pie Chart Example' },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [{
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }],
    tooltip:{
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    }
  };
  createChart('pie-chart', pieOption);

  // Interactive Chart
  var interactiveChart = echarts.init(document.getElementById('interactive-chart'));
  var interactiveOption = {
    xAxis: { type: 'category', data: ['1', '2', '3', '4'] },
    yAxis: { type: 'value' },
    series: [{ name: 'Data', type: 'line', data: [5, 20, 40, 10] }],
    tooltip: { trigger: 'axis' },
    dataZoom: [
      { type: 'slider', show: true, xAxisIndex: [0], start: 0, end: 100 },
      { type: 'inside', xAxisIndex: [0], start: 0, end: 100 }
    ]
  };
  interactiveChart.setOption(interactiveOption);

  // Take input from user and update the chart
  document.getElementById('data-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var xAxisData = document.getElementById('x-axis-input').value.split(',');
    var yAxisData = document.getElementById('y-axis-input').value.split(',');
    var chartType = document.getElementById('chart-type').value;

    interactiveOption.series[0].type = chartType;

    if (chartType === 'pie') {
      delete interactiveOption.xAxis;
      delete interactiveOption.yAxis;
      interactiveOption.series[0].data = xAxisData.map((value, index) => ({
        name: value,
        value: yAxisData[index]
      }));
      interactiveOption.tooltip = {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      };
    } else if (chartType === 'scatter') {
      interactiveOption.xAxis = { type: 'value' };
      interactiveOption.yAxis = { type: 'value' };
      interactiveOption.series[0].data = xAxisData.map((x, index) => [x, yAxisData[index]]);
      interactiveOption.tooltip = { trigger: 'axis' };
    } else {
      interactiveOption.xAxis = {
        type: 'category',
        data: xAxisData.map(String)
      };
      interactiveOption.yAxis = { type: 'value' };
      interactiveOption.series[0].data = yAxisData;
      interactiveOption.tooltip = { trigger: 'axis' };
    }

    interactiveChart.setOption(interactiveOption, true);
  });
});
