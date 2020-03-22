// promise形式的getSetting

export const getSetting=()=>{
    return new Promise((resoLve,reject)=>{
        wx.getSetting({
            success:(result)=>{
                resoLve(result);
            },
            fail:(err)=>{
                reject(err);
            }
        });
    })
}

// promise形式的chooseAddress

export const chooseAddress=()=>{
    return new Promise((resoLve,reject)=>{
        wx.chooseAddress({
            success:(result)=>{
                resoLve(result);
            },
            fail:(err)=>{
                reject(err);
            }
        });
    })
}


// promise形式的openSetting

export const openSetting=()=>{
    return new Promise((resoLve,reject)=>{
        wx.openSetting({
            success:(result)=>{
                resoLve(result);
            },
            fail:(err)=>{
                reject(err);
            }
        });
    })
}


// promise形式的showModal
export const showModal=({content})=>{
    return new Promise((resoLve,reject)=>{
        wx.showModal({
            title: '提示',
            content: content,
            showCancel: true,
            success: (res) => {
                resoLve(res);
            },
            fail:(err)=>{
                reject(err);
            }
          })
    })
}



// promise 形式  showToast
export const showToast=({title})=>{
    return new Promise((resoLve,reject)=>{
        wx.showToast({
            title: title,
            icon: "none",
            success: (res) => {
                resoLve(res);
            },
            fail:(err)=>{
                reject(err);
            }
          })
    })
}



// promise 形式  login
export const login=()=>{
    return new Promise((resoLve,reject)=>{
        wx.login({
            timeout:10000,
            success: (result) => {
                resoLve(result);
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {}
        });
          
    })
}