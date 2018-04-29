Page({
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      }
    });
  },
  chooseAlipayContact() {
    my.chooseAlipayContact({
      count: 2,
      success: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      }
    });
  },
  chooseContact() {
    my.chooseContact({
      chooseType : "multi",
      includeMe : true,
      multiChooseMax : 10,
      multiChooseMaxTips : "人数已达上限",
      success: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      }
    });
  },
});
