// 输入框用防抖 
// 下拉,上拉用节流

import{request} from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    goods:[],
    isFocus:false
  },
  TimeId:-1,
  handleInput(e){
    const {value}=e.detail;
    if(!value.trim()){
      this.setData({
        goods:[],
        isFocus:false,
        inpValue:""
      })
      return;
    }
    
    this.setData({
      isFocus:true
    })
    // 防抖,定义一个定时器
    clearTimeout(this.TimeId);
    this.TimeId=setTimeout(() => {
      this.qsearch(value);
    }, 1000);
    
  },
  async qsearch(query){
    const res=await request({url:"/goods/qsearch",data:{query}});
    console.log(res);
    this.setData({
      goods:res
    })
    
  },
  handleCancel(){
    this.setData({
      inpValue:"",
      isFocus:false,
      goods:[]
    })
  }
})