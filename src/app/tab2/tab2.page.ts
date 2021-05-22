import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public products: Array<Product> = [
    {"_id":"6070f3992c4d5e4d4e006b27","image":"1pastry.png","name":"Chocolate negro","description":"Delicioso chocolate negro con avellanas","price":6900,"score":5,"delivery_time":15,"category":1,"__v":0},
    {"_id":"6070f4282c4d5e4d4e006b28","image":"3pastry.png","name":"Chocolate negro","description":"Delicioso chocolate blanco especito","price":7900,"score":4,"delivery_time":20,"category":1,"__v":0},{"_id":"6070f46f2c4d5e4d4e006b29","image":"4pastry.png","name":"Capuccino","description":"Delicioso capuccino con un toque de canela","price":5800,"score":5,"delivery_time":45,"category":1,"__v":0},
    {"_id":"6070f4b52c4d5e4d4e006b2a","image":"5pastry.png","name":"Café expresso","description":"Delicioso café expresso para compañar tus tardes","price":3800,"score":4,"delivery_time":30,"category":1,"__v":0},{"_id":"6071161e2c4d5e4d4e006b2b","image":"6pastry.png","name":"Torta de fresa","description":"Deliciosa torta con fresas y salsa de vainilla","price":48900,"score":5,"delivery_time":60,"category":2,"__v":0},{"_id":"607116562c4d5e4d4e006b2c","image":"7pastry.png","name":"Torta de chocolate","description":"Deliciosa torta de chocolate con fresas","price":65900,"score":4,"delivery_time":70,"category":2,"__v":0},{"_id":"607116812c4d5e4d4e006b2d","image":"8pastry.png","name":"Torta de chocolate y fresas","description":"Deliciosa torta de chocolate y fresas de varios niveles","price":120900,"score":5,"delivery_time":120,"category":2,"__v":0},{"_id":"607116df2c4d5e4d4e006b2e","image":"9pastry.png","name":"Torta de fresas y vainilla","description":"Deliciosa torta de fresas y vainilla con nueces","price":120900,"score":5,"delivery_time":120,"category":2,"__v":0},{"_id":"6071170d2c4d5e4d4e006b2f","image":"10pastry.png","name":"Torta de café","description":"Deliciosa torta de café con una capa de vainilla","price":67900,"score":3,"delivery_time":88,"category":2,"__v":0},{"_id":"6071177a2c4d5e4d4e006b30","image":"11pastry.png","name":"Torta de vainilla","description":"Deliciosa torta de vanilla con una rica capa de caramelo","price":52900,"score":5,"delivery_time":70,"category":2,"__v":0},{"_id":"607117a12c4d5e4d4e006b31","image":"12pastry.png","name":"Torta de banano","description":"Deliciosa torta banano ","price":49800,"score":2,"delivery_time":75,"category":2,"__v":0},{"_id":"607117e92c4d5e4d4e006b32","image":"13pastry.png","name":"Torta de bailys","description":"Deliciosa torta de bailys con chispitas de chocolate ","price":79800,"score":5,"delivery_time":90,"category":2,"__v":0},{"_id":"607118232c4d5e4d4e006b33","image":"14pastry.png","name":"Torta de zanahoria","description":"Deliciosa torta de zanahoria para disfrutarla en casa","price":69800,"score":4,"delivery_time":50,"category":2,"__v":0},{"_id":"6071185a2c4d5e4d4e006b34","image":"15pastry.png","name":"Torta de café con limón","description":"Deliciosa torta de café con una capa de limón","price":55900,"score":4,"delivery_time":54,"category":2,"__v":0},{"_id":"607118942c4d5e4d4e006b35","image":"16pastry.png","name":"Torta de limón","description":"Deliciosa de limón y vainilla para que la disfrutes con tus amigos","price":52900,"score":5,"delivery_time":70,"category":2,"__v":0},{"_id":"607118c02c4d5e4d4e006b36","image":"17pastry.png","name":"Torta de arandanos","description":"Deliciosa de arandanos con una capa de dulce caramelo","price":51900,"score":4,"delivery_time":90,"category":2,"__v":0},{"_id":"607118ed2c4d5e4d4e006b37","image":"18pastry.png","name":"Postre de chocolate","description":"Delicioso postre con crema de vainilla","price":8900,"score":5,"delivery_time":30,"category":3,"__v":0},{"_id":"6071191d2c4d5e4d4e006b38","image":"19pastry.png","name":"Postre de chocolate y fresa","description":"Delicioso postre con crema de chocolate","price":7900,"score":4,"delivery_time":35,"category":3,"__v":0},{"_id":"607119c12c4d5e4d4e006b39","image":"20pastry.png","name":"Postre hamburguesa de limón","description":"Delicioso postre de limón","price":4900,"score":3,"delivery_time":30,"category":3,"__v":0},{"_id":"60711a922c4d5e4d4e006b3a","image":"21pastry.png","name":"Wafle de arequipe","description":"Delicioso wafle de arequipe con trocitos de chocolate","price":12900,"score":5,"delivery_time":68,"category":3,"__v":0},{"_id":"60711ac42c4d5e4d4e006b3b","image":"22pastry.png","name":"Rollo de vainilla y chocolate","description":"Delicioso rollito de vainilla, envuelto en una capa de chocolate","price":15900,"score":4,"delivery_time":50,"category":3,"__v":0},{"_id":"60711b002c4d5e4d4e006b3c","image":"23pastry.png","name":"Alfajor de chocolate","description":"Delicioso alfajore fresco para acompañar tu tarde","price":3600,"score":5,"delivery_time":20,"category":3,"__v":0},{"_id":"60711b4f2c4d5e4d4e006b3d","image":"25pastry.png","name":"Porción de torta de chocolate","description":"Delicioso porción de torta de chocolate","price":6700,"score":5,"delivery_time":40,"category":2,"__v":0},{"_id":"60711b6f2c4d5e4d4e006b3e","image":"26pastry.png","name":"Porción de torta de banano","description":"Delicioso porción de torta de banano con cereza","price":5200,"score":4,"delivery_time":45,"category":2,"__v":0},{"_id":"60711b972c4d5e4d4e006b3f","image":"27pastry.png","name":"Porción de torta de bailys","description":"Delicioso porción de torta de bailys con una capa de caramelo","price":5900,"score":5,"delivery_time":42,"category":2,"__v":0},{"_id":"60711bc72c4d5e4d4e006b40","image":"28pastry.png","name":"Wafle de helado y frutas","description":"Delicioso wafle de helado de vainilla y fresa y frutas al gusto","price":13200,"score":5,"delivery_time":70,"category":3,"__v":0},{"_id":"60711bf12c4d5e4d4e006b41","image":"29pastry.png","name":"Porción de torta de vino","description":"Deliciosa porción de torta de vino con uva","price":8300,"score":4,"delivery_time":60,"category":2,"__v":0}];

  public filterOptions: Array<any> = [
    {
      id: 1,
      icon: 'assets/icons/cake.png',
      label: 'Cakes',
    },
    {
      id: 2,
      icon: 'assets/icons/coffee.png',
      label: 'Coffees',
    },
    {
      id: 3,
      icon: 'assets/icons/cinnamon-roll.png',
      label: 'Desserts',
    },
    {
      id: 0,
      icon: null,
      label: 'All'
    },

  ];

  public filterActived: number = 0;
  public urlStorage: string = environment.urlStorage;

  constructor() {}

}
