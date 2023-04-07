// index.js
Page({
  data: {
    src: '../../images/cy.jpg',
    name: 'Hello World'
  },
  getMyInfo(){
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res);
        this.setData({
          src: res.userInfo.avatarUrl,
          name: res.userInfo.nickName
        })
      }
    })
  }
})
