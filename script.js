document.addEventListener('DOMContentLoaded', function () {
    var myChart = echarts.init(document.getElementById('main'));
  
    var option = {
      title: {
        text: 'ECharts Getting Started Example'
      },
      xAxis: {
        data: ['Jan', 'Feb', 'Mar', 'Apr']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'line',
          data: [5, 20, 40, 10]
        }
      ]
    };
  
    myChart.setOption(option);
  });