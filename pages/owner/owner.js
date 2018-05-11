// pages/owner/owner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: [
      {
        id: 'a1',
        title: '聋哑人如何享受音乐',
        body: '虽然聋哑人可以通过触感体验音响，骨面的震动，还可以看歌词，但完整的一首歌要怎么办？',
        image: '/pages/images/owner/1.jpg',
        hasZan: false,
        zan: 5174,
        look: 68302
      }, {
        id: 'a2',
        title: '体障 | 乐园音乐，治愈的是心灵，聋哑人也能欣赏音乐',
        image: '/pages/images/owner/1.jpg',
        hasZan: false,
        zan: 158,
        look: 8085
      }, {
        id: 'a3',
        title: '聋哑人如何享受音乐呢',
        image: '/pages/images/owner/1.jpg',
        hasZan: false,
        zan: 521,
        look: 5217
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  dianzan: function(){
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  redictTo: () => {
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})