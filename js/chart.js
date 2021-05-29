window.onload = ()=>{
    //初始化
    let heightChart = echarts.init(document.getElementById('height'));
    //把修改好的代码粘贴到这里
    let heightOption = {
        title: {
            text: '身高',
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [130, 131, 131.5, 132, 132, 132, 132.4,133,134,135,135.5,136],
            type: 'line'
        }]
    };
    //
    heightChart.setOption(heightOption);

      //初始化
      let weightChart = echarts.init(document.getElementById('weight'));
      //把修改好的代码粘贴到这里
      let weightOption = {
          title: {
              text: '体重',
          },
          xAxis: {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [30, 32, 35, 36.4, 36.1, 34, 36.4,37,38,40,38.5,40.1],
              type: 'line'
          }]
      };
      //
      weightChart.setOption(weightOption);
}