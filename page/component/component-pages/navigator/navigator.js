Page({
  data: {
    canReLaunch: !!my.reLaunch,
  },
  navigate(e) {
    const { url, openType = 'navigateTo' } = e.target.dataset;
    my[openType]({ url });
  },
});
