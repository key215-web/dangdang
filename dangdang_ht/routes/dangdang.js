var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/banner', function (req, res, next) {

  var arr=[
    "http://img50.ddimg.cn/86030065873680_y.jpg",
    "http://img54.ddimg.cn/186920113075064_y.jpg",
    "http://img56.ddimg.cn/178320113869846_y.jpg",
    "http://img63.ddimg.cn/upload_img/00271/gemen/1242-366-1576735571.jpg"

  ]
  res.send(arr);
});


/* GET 获取分类 */
router.get('/categoryList', function (req, res, next) {

  var arr=[
    "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png",
    "http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png",
    "http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png",
    "http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png",
    "http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png",
    "http://img50.ddimg.cn/116550067538580_y.jpg",
    "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png",
    "http://img61.ddimg.cn/upload_img/00528/000/00000-1564393723.png",
    "http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png",
    "http://img63.ddimg.cn/upload_img/00528/0000/12311-1556245256.jpg"

  ]
  res.send(arr);
});



router.get("/msproduct",function(req,res,next){
  var arr=[
   {
     imgurl:"http://img3m9.ddimg.cn/85/10/1564053169-1_h_2.jpg",
     desc:"1元秒杀，限量抢购，抢完即止！",
     yprice:100,
     price:159.00
   },
   {
    imgurl:"http://img3m1.ddimg.cn/32/9/22557281-1_h_6.jpg",
    desc:"人间失格（太宰治绝望的告白，独家收录太宰治绝笔之作《Goodbye》）",
    yprice:10,
    price:159.00
   }

   ,  {
    imgurl:"http://img3m2.ddimg.cn/8/11/1568684312-1_h_1.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:100,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m3.ddimg.cn/77/23/1507667513-1_h_2.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:100,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m4.ddimg.cn/45/24/1373845914-1_h_2.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:1,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m7.ddimg.cn/10/26/1532402497-1_h_2.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:1,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m2.ddimg.cn/8/11/1568684312-1_h_1.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:1,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m3.ddimg.cn/77/23/1507667513-1_h_2.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:1,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m4.ddimg.cn/45/24/1373845914-1_h_2.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:1,
    price:159.00
   }
   ,  {
    imgurl:"http://img3m7.ddimg.cn/10/26/1532402497-1_h_2.jpg",
    desc:"慵懒风套头高领宽松外穿毛衣",
    yprice:100,
    price:159.00
   }
  ]
  res.send(arr)
})



// 图书分类
router.get("/bookCateList",function(req,res,next){
  var arr=[
       {
         id:1,
         name:"图书"
       },
       {
        id:2,
        name:"图书/分类"
      },
      {
        id:3,
        name:"图书"
      },
      {
        id:4,
        name:"图书/分类"
      },
      {
        id:5,
        name:"图书"
      },
      {
        id:6,
        name:"图书/分类"
      },
      {
        id:7,
        name:"图书"
      },
      {
        id:8,
        name:"图书/分类"
      },
      {
        id:9,
        name:"图书"
      },
      {
        id:10,
        name:"图书/分类"
      },
      {
        id:11,
        name:"图书"
      },
      {
        id:12,
        name:"图书/分类"
      },
      {
        id:13,
        name:"图书"
      },
      {
        id:14,
        name:"图书/分类"
      },
      {
        id:15,
        name:"图书"
      },
      {
        id:16,
        name:"图书/分类"
      },
      {
        id:17,
        name:"图书"
      },
      {
        id:18,
        name:"图书/分类"
      },

       {
         id:19,
         name:"图书"
       },
       {
        id:20,
        name:"图书/分类"
      }
  ]
  res.send(arr)
})



//第三页分类

router.get("/bookCategory",function(req,res,next){
  var arr=[
    "https://img61.ddimg.cn/2018/8/25/20180825153505715.png", 
    "https://img61.ddimg.cn/2018/8/25/2018082515383576435.png",
    "https://img61.ddimg.cn/2018/8/25/2018082515395286917.png",
    "https://img63.ddimg.cn/2018/8/31/2018083116044590576.png",
    "http://img63.ddimg.cn/upload_img/00660/h5/ddpp-1537350824.png",
    "https://img62.ddimg.cn/2018/8/31/2018083116363087335.png",
    "https://img62.ddimg.cn/2018/8/31/2018083116355544875.png",
    "https://img61.ddimg.cn/2018/8/31/2018083116365438226.png",
    "https://img62.ddimg.cn/2018/8/31/2018083116373380162.png",
    "http://img60.ddimg.cn/upload_img/00782/h5/coupon-1537505152.png"
  ]
  res.send(arr)
})
module.exports = router;
