import {defineStore} from "pinia"
export const MainPageChnage=defineStore("MainPageChnage",{
    state:()=>{
        return{
            MainPageShow: "first"
        }
    }
})