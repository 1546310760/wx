// components/Tabs/Tabs.js
Component({
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  data: {

  },

  methods: {
    // 点击事件
    handleItemTap(e){
      const {index}=e.currentTarget.dataset;
      this.triggerEvent("tabsItemChange",{index});
      
    }
  }
})
