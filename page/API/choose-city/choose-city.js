Page({
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({
          title: 'chooseAlipayContact response: ' + JSON.stringify(res),
        });
      },
    });
  },
});

// my.chooseCity api还有两个参数，cities和hotCities，
// 这两个都是数组，如果自定义将会显示自定义的，如果不写，则调用支付宝写好的城市数据