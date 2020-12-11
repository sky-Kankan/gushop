// 接口请求函数模块
import ajax from "./ajax";

//1.根据经纬度获取位置详情
export  const reqAddress = (geohash) => ajax(`/position/${geohash}`)
//2.获取食物分类列表
export  const regFoodTypes = () => ajax(`/index_category`)
//3.根据经纬度获取商家位置
export  const reqShops = (longitude,latitude) => ajax(`/shop`,{longitude,latitude})
//4.根据经纬度和关键字搜索商铺列表
//5.获取一次性验证码
//6.用户名密码登录
//7.发送短信验证码
//8.手机验证码登录
//9.根据会话获取用户信息
//10.用户登出


