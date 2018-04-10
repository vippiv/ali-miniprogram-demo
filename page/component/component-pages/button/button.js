Page({
  data: {},
  onShareAppMessage() {
    return {
      title: 'button page',
      path: 'page/component/component-pages/button/button',
    };
  },
  onSubmit() {
    my.alert({ title: 'You click submit' });
  },
  onReset() {
    my.alert({ title: 'You click reset' });
  },
});

