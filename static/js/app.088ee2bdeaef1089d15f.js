webpackJsonp([0],{"04Ey":function(t,i,a){t.exports=a.p+"static/img/photo_06_station.7cf7a53.jpg"},"165h":function(t,i){},"1jHB":function(t,i){},"50pE":function(t,i,a){t.exports=a.p+"static/img/photo_09_valley.3be339b.jpg"},"7zck":function(t,i){},BTm2:function(t,i,a){t.exports=a.p+"static/img/photo_08_library.a0b6b73.jpg"},BqgW:function(t,i,a){t.exports=a.p+"static/img/photo_04_bathroom.fb548f6.jpg"},DnMF:function(t,i,a){t.exports=a.p+"static/img/photo_07_stone.95edf47.jpg"},I1Ca:function(t,i,a){t.exports=a.p+"static/img/img_02_shoebox.2fb180a.jpg"},INHU:function(t,i,a){t.exports=a.p+"static/img/img_08_library.56eff4d.jpg"},Jv78:function(t,i,a){t.exports=a.p+"static/img/photo_02_shoebox.614b370.jpg"},Kdcb:function(t,i,a){t.exports=a.p+"static/img/photo_03_tatami.6aa1f8b.jpg"},"N+Ay":function(t,i){},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("7+uW"),o=a("u4Bf"),s=a.n(o),l={name:"App",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{add:function(){this.list.push({name:"Juan"})},replace:function(){this.list=[{name:"Edgard"}]},clone:function(t){return{name:t.name+" cloned"}},log:function(t){window.console.log(t)},showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},g={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"app"}},[a("v-container",[a("h3",{staticClass:"page_title"},[t._v("任務卡片\n        ")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/photo_light_down"}},[t._v("照片/標示/任務下")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/photo_light_top"}},[t._v("照片/標示/任務上")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/photo_nolight_down"}},[t._v("照片/無標示/任務下")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/photo_nolight_top"}},[t._v("照片/無標示/任務上")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/paint_light_down"}},[t._v("插圖/標示/任務下")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/paint_light_top"}},[t._v("插圖/標示/任務上")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/paint_nolight_down"}},[t._v("插圖/無標示/任務下")]),t._v(" "),a("v-btn",{staticClass:"rounterLink",attrs:{"router-link":"",to:"/paint_nolight_top"}},[t._v("插圖/無標示/任務上")]),t._v(" "),a("div",{staticClass:"space"}),t._v(" "),a("router-view")],1)],1)},staticRenderFns:[]};var e=a("VU/8")(l,g,!1,function(t){a("WzK5")},null,null).exports,p=a("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("h1")])}]};var m=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){a("165h")},"data-v-20675774",null).exports,_={name:"photo_light_down",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogInfo)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPhoto}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                "+t._s(t.dialogTask)+"\n            ")])],1)],1)],1)},staticRenderFns:[]},c=a("VU/8")(_,r,!1,null,null,null).exports,u={name:"photo_light_top",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},h={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogTask)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPhoto}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                "+t._s(t.dialogInfo)+"\n            ")])],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")(u,h,!1,null,null,null).exports,f={name:"photo_nolight_top",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},k={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogTask)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPhoto}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                "+t._s(t.dialogInfo)+"\n            ")])],1)],1)],1)},staticRenderFns:[]};var I=a("VU/8")(f,k,!1,function(t){a("QHar")},null,null).exports,C={name:"photo_nolight_down",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},b={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{attrs:{src:i.img_photo}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogInfo)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPhoto}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                "+t._s(t.dialogTask)+"\n            ")])],1)],1)],1)},staticRenderFns:[]};var w=a("VU/8")(C,b,!1,function(t){a("N+Ay")},null,null).exports,x={name:"paint_light_down",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},N={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogInfo)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPaint}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                "+t._s(t.dialogTask)+"\n            ")])],1)],1)],1)},staticRenderFns:[]},P=a("VU/8")(x,N,!1,null,null,null).exports,T={name:"photo_light_top",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},y={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v(" "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v(" "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("div",{staticClass:"task"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogTask)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPaint}}),t._v(" "),a("div",{staticClass:"task"},[t._v("\n                "+t._s(t.dialogInfo)+"\n            ")])],1)],1)],1)},staticRenderFns:[]},E=a("VU/8")(T,y,!1,null,null,null).exports,H={name:"photo_nolight_top",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},B={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogTask)+"\n                    "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.info)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogTask)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPaint}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                "+t._s(t.dialogInfo)+"\n            ")])],1)],1)],1)},staticRenderFns:[]};var j=a("VU/8")(H,B,!1,function(t){a("mBCh")},null,null).exports,Q={name:"photo_nolight_down",components:{draggable:s.a},data:function(){return{dialog:!1,lineHigh:!1,dialogName:"",dialogId:"",dialogInfo:"",dialogTask:"",dialogImgPhoto:"",dialogImgPaint:"",list1:[{name:"花磚池",id:1,info:"由於早期男尊女卑的觀念，女性只能在花磚小池子泡湯。",task:"用自己身體局部與池中的彩色花磗合照，並在臉書公開打卡，標註#我愛溫博館。",img_photo:a("g8az"),img_paint:a("Qu78")},{name:"日式鞋櫃",id:2,info:"進館要換拖鞋，鞋櫃特別從日本引進，每格的木頭鑰匙都不一樣。",task:"請在地圖畫下你的鑰匙外觀。",img_photo:a("Jv78"),img_paint:a("I1Ca")},{name:"日式和室",id:3,info:"二樓的榻榻米和室是泡湯完休息的地方，可以在望樓遠眺風景。",task:"坐在榻榻米上休息片刻，並在日記第7頁的和室俯瞰圖中，標示出你所在的位置。",img_photo:a("Kdcb"),img_paint:a("ni+k")},{name:"瀧乃湯浴室",id:4,info:"新北投現存最古老的日式浴場，由鐵道部興建，又稱鐵之湯，位於北投溪一處布旁，屬於青磺泉質。",task:"浴室旁紀念碑所指的皇太子，是哪位皇太子呢？請在地圖中寫下。",img_photo:a("BqgW"),img_paint:a("xqR1")},{name:"噴水池",id:5,info:"水源是1911年完工的北投水道系統，讓泡湯客流汗排毒後，有乾淨飲水。",task:"噴水池中間曾經被偷走的銅製動物，像是什麼動物？請在地圖中寫下。",img_photo:a("mrh1"),img_paint:a("uQ/4")}],list2:[{name:"新北投車站",id:6,info:"1937年將候車亭擴建成室內月台。屋頂的銅瓦起初為紅色，因硫磺氣影響變成黑色。",task:"觀察屋頂的四扇窗戶，在地圖寫下為何它們彼此的間距不一致呢?",img_photo:a("04Ey"),img_paint:a("l43/")},{name:"北投石",id:7,info:"沈積於其他岩石上，外觀微小呈白色的雞冠狀，含有『鐳』成分，是世界上唯一以台灣地名命名的礦物。",task:"溫博館的北投石旁的密碼1905 /98/300/80/800，分別代表甚麼意涵？在日記第8頁寫下。",img_photo:a("DnMF"),img_paint:a("NX7e")},{name:"北投圖書館",id:8,info:"臺灣首座綠建築圖書館，建物使用可回收再利用的木材及鋼材，屋頂為輕質生態屋頂，設太陽能光電板發電。",task:"在綠建築圖書區中，挑一本書閱讀，並在地圖中寫下書名，以及書中對於綠建築的描述。",img_photo:a("BTm2"),img_paint:a("INHU")},{name:"地熱谷",id:9,info:"「北投」原為凱達格蘭族居住地，是女巫的意思。地熱谷煙霧繚繞，延伸出凱達格蘭族對於女巫的敬畏。",task:"觀察地熱谷的形態，在地圖中畫下你心目中女巫的形象。",img_photo:a("50pE"),img_paint:a("acG3")}]}},methods:{showpop:function(t){this.dialog=!0,this.dialogName=t.name,this.dialogId=t.id,this.dialogInfo=t.info,this.dialogTask=t.task,this.dialogImgPhoto=t.img_photo,this.dialogImgPaint=t.img_paint}}},q={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-row",{staticClass:"cus_card"},[a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list1,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1),t._v(" "),a("v-col",{staticClass:"col_padding",attrs:{cols:"6"}},[a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{start:function(i){t.drag=!0},end:function(i){t.drag=!1}}},t._l(t.list2,function(i){return a("v-list-item-group",{key:i.name,attrs:{"data-app":"true"},nativeOn:{click:function(a){return t.showpop(i)}}},[a("v-list-item-title",[a("span",[t._v(t._s(i.name))])]),t._v("\n                    "+t._s(t.dialogInfo)+"\n                    "),a("v-img",{staticClass:"paint",attrs:{src:i.img_paint}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                        "+t._s(i.task)+"\n                    ")])],1)}),1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[a("v-card",[a("v-list-item-title",[a("span",[t._v(t._s(t.dialogName))])]),t._v("\n            "+t._s(t.dialogInfo)+"\n            "),a("v-img",{attrs:{src:t.dialogImgPaint}}),t._v(" "),a("div",{staticClass:"task nolight"},[t._v("\n                "+t._s(t.dialogTask)+"\n            ")])],1)],1)],1)},staticRenderFns:[]};var F=a("VU/8")(Q,q,!1,function(t){a("1jHB")},null,null).exports;n.default.use(p.a);var R=new p.a({routes:[{path:"/",name:"HelloWorld",component:m},{path:"/photo_light_down",name:"photo_light_down",component:c},{path:"/photo_light_top",name:"photo_light_top",component:v},{path:"/photo_noLight_top",name:"photo_noLight_top",component:I},{path:"/photo_noLight_down",name:"photo_noLight_down",component:w},{path:"/paint_light_down",name:"paint_light_down",component:P},{path:"/paint_light_top",name:"paint_light_top",component:E},{path:"/paint_noLight_top",name:"paint_noLight_top",component:j},{path:"/paint_noLight_down",name:"paint_noLight_down",component:F}]}),U=a("3EgV"),O=a.n(U);a("7zck");n.default.use(O.a);var L=new O.a({});n.default.config.productionTip=!1,new n.default({el:"#app",router:R,vuetify:L,components:{App:e},template:"<App/>"})},NX7e:function(t,i,a){t.exports=a.p+"static/img/img_07_stone.3ea6f5f.jpg"},QHar:function(t,i){},Qu78:function(t,i,a){t.exports=a.p+"static/img/img_01_flowertiles.414a9f5.jpg"},WzK5:function(t,i){},acG3:function(t,i,a){t.exports=a.p+"static/img/img_09_valley.8e86eda.jpg"},g8az:function(t,i,a){t.exports=a.p+"static/img/photo_01_flowertiles.51874b4.jpg"},"l43/":function(t,i,a){t.exports=a.p+"static/img/img_06_station.340ea22.jpg"},mBCh:function(t,i){},mrh1:function(t,i,a){t.exports=a.p+"static/img/photo_05_fountain.80b663f.jpg"},"ni+k":function(t,i,a){t.exports=a.p+"static/img/img_03_tatami.00e74d7.jpg"},"uQ/4":function(t,i,a){t.exports=a.p+"static/img/img_05_fountain.ed1590b.jpg"},xqR1:function(t,i,a){t.exports=a.p+"static/img/img_04_bathroom.48bb257.jpg"}},["NHnr"]);
//# sourceMappingURL=app.088ee2bdeaef1089d15f.js.map