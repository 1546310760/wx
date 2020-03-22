//Page Object
import{request} from "../../request/index.js"
  Page({
    data: {
      // 轮播图数组
      swiperList:[],
      // 导航数组
      catesList:[],
      // 楼层数据
      floorList:[]
    },
  onLoad: function(potions){
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();

    },

    getSwiperList(){
      request({url:"/home/swiperdata"})
      .then(result=>{
          this.setData({
          swiperList:result
        })
      }) 
    },
    getCateList(){
      request({url:"/home/catitems"})
      .then(result=>{
          this.setData({
            catesList:result
        })
      }) 
    },
    // 楼层接口
    getFloorList(){
      request({url:"/home/floordata"})
      .then(result=>{
          this.setData({
            floorList:result
        })
      }) 
    }
});
  
