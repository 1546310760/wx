import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import { login } from "../../utils/asyncWx.js";

Page({
  // 获取用户信息
  async handleGetUserInfo(e) {
    try {
    const { encryptedData, rawData, iv, signature } = e.detail;
    const { code } = await login();
    const loginParams={ encryptedData, rawData, iv, signature ,code};
    const {token}=await request({url:"/users/wxlogin",data:loginParams,method:"post"});
    wx.setStorageSync("token", token);
    wx.navigateBack({
      delta: 1
    });
  
    } catch (error) {
      console.log(error);
    }
  }
})