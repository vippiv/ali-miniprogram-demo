Page({
  datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '1979-01-01',
      endDate: '2200-01-01',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerHMS() {
    my.datePicker({
      format: 'HH:mm',
      currentDate: '12:12',
      startDate: '0:0',
      endDate: '23:59',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerYMDHMS() {
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: '2012-01-09 11:11',
      startDate: '1979-01-01 00:00',
      endDate: '2212-01-01 23:59',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerYM() {
    my.datePicker({
      format: 'yyyy-MM',
      currentDate: '2012-01',
      startDate: '1979-01',
      endDate: '2212-01',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerY() {
    my.datePicker({
      format: 'yyyy',
      currentDate: '2012-01',
      startDate: '1979-01',
      endDate: '2212-01',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
});
//datePickerYM的UI界面和预期的不一致，不应该出现天数选择项
//datePickerY里日期写法和其他格式不一致，应该写年份就可以了，但只写年份无法正常显示选择项