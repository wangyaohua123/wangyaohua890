// pages/index/index.js
const app = getApp()
Page ({
  data: {
    slides: null
  },
  onLoad() {
    this.setData({
  slides: app.globalData.slides,
  entities: app.globalData.vehicles
    })
  }
})