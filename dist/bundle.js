(()=>{"use strict";var e={207:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sequelize=void 0;const r=o(464),n=process.env.DB_CONNECTION;t.sequelize=new r.Sequelize(n,{dialect:"postgres",dialectOptions:{ssl:!0}})},644:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(207),t),n(o(469),t),n(o(239),t)},239:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(a=(i<3?n(a):i>3?n(t,o,a):n(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ProductsInfo=void 0;const i=o(464),a=o(207);let u=class extends i.Model{};t.ProductsInfo=u,r([(0,i.Column)({type:i.DataType.TEXT,primaryKey:!0,allowNull:!1}),n("design:type",String)],u.prototype,"id",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"namespaceId",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"name",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"capacityAvailable",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"capacity",void 0),r([(0,i.Column)(i.DataType.FLOAT),n("design:type",Number)],u.prototype,"priceRegular",void 0),r([(0,i.Column)(i.DataType.FLOAT),n("design:type",Number)],u.prototype,"priceDiscount",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"colorsAvailable",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"color",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"images",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"description",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"screen",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"resolution",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"processor",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"ram",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"camera",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"zoom",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"cell",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"category",void 0),t.ProductsInfo=u=r([(0,i.Table)({timestamps:!0,tableName:"products_info",modelName:"ProductsInfo"})],u),a.sequelize.addModels([u])},469:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(a=(i<3?n(a):i>3?n(t,o,a):n(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.Products=void 0;const i=o(464),a=o(207);let u=class extends i.Model{};t.Products=u,r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"category",void 0),r([(0,i.Column)({type:i.DataType.TEXT,references:{model:"products_info",key:"id"}}),n("design:type",String)],u.prototype,"itemId",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"name",void 0),r([(0,i.Column)(i.DataType.FLOAT),n("design:type",Number)],u.prototype,"fullPrice",void 0),r([(0,i.Column)(i.DataType.FLOAT),n("design:type",Number)],u.prototype,"price",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"screen",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"capacity",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"color",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"ram",void 0),r([(0,i.Column)(i.DataType.INTEGER),n("design:type",Number)],u.prototype,"year",void 0),r([(0,i.Column)(i.DataType.TEXT),n("design:type",String)],u.prototype,"image",void 0),t.Products=u=r([(0,i.Table)({timestamps:!0,tableName:"products",modelName:"Products"})],u),a.sequelize.addModels([u])},93:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={SUCCESS:200,CREATED:201,DELETED:204,BAD_REQUEST:400,NOT_FOUND:404}},690:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultPage=void 0;const i=n(o(17)),a=n(o(292));t.getDefaultPage=(e,t)=>r(void 0,void 0,void 0,(function*(){const e=i.default.resolve("","README.html"),o=yield a.default.readFile(e);t.setHeader("Content-Type","text/html"),t.send(o)}))},583:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getImage=void 0;const n=r(o(147)),i=r(o(955)),a=r(o(17)),u=r(o(93));t.getImage=(e,t)=>{const o=new URL(e.url,`http://${e.headers.host}`).pathname.split("/"),r=o.splice(o.length-1).join(""),s=a.default.resolve(`src/assets/${o.join("/")}`,r),d=n.default.createReadStream(s),c=new i.default.PassThrough;i.default.pipeline(d,c,(e=>{if(e)return console.log(e),t.sendStatus(u.default.NOT_FOUND)})),d.on("close",(()=>{d.destroy()})),c.pipe(t)}},45:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(189),t),n(o(583),t),n(o(426),t),n(o(690),t)},426:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.productsInfoController=void 0;const i=o(999),a=n(o(93)),u=o(489);t.productsInfoController={getOneById:(e,t)=>r(void 0,void 0,void 0,(function*(){const{id:o}=e.params,r=yield i.productsInfoServices.getById(o);if(!r)return void t.sendStatus(a.default.NOT_FOUND);const n=(0,u.normalizeProductInfo)(r);t.statusCode=a.default.SUCCESS,t.send(n)}))}},189:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.productsController=void 0;const i=o(999),a=n(o(93)),u=o(489);t.productsController={getAll:(e,t)=>r(void 0,void 0,void 0,(function*(){const o=e.query,r=(yield i.productServices.getAll(o)).map(u.normalizeProduct);t.statusCode=a.default.SUCCESS,t.send(r)})),getOneById:(e,t)=>r(void 0,void 0,void 0,(function*(){const{id:o}=e.params;if(isNaN(+o))return void t.sendStatus(a.default.BAD_REQUEST);const r=yield i.productServices.getById(o);if(!r)return void t.sendStatus(a.default.NOT_FOUND);const n=(0,u.normalizeProduct)(r);t.statusCode=a.default.SUCCESS,t.send(n)})),getLengthByCategory:(e,t)=>r(void 0,void 0,void 0,(function*(){const{category:o}=e.params;if(!o)return void t.sendStatus(a.default.BAD_REQUEST);const r=yield i.productServices.getLengthByCategory(o);r?(t.statusCode=a.default.SUCCESS,t.send({length:r})):t.sendStatus(a.default.NOT_FOUND)}))}},781:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPreparedRequestQuery=void 0;const r=o(496),n=o(644);t.getPreparedRequestQuery=e=>{var t;const o={};if(e.category&&(o.where={category:e.category}),e.pageSize&&!isNaN(+e.pageSize)){o.limit=+e.pageSize;const r=+(null!==(t=e.page)&&void 0!==t?t:1),n=isNaN(r)?1:r;o.offset=(n-1)*o.limit}return e.sortBy&&(o.order=(e=>{switch(e){case"newest":return[["year","DESC"]];case"alphabetically":return[["name","DESC"]];case"cheapest":return[["price","ASC"]];case"best-price":return[["fullPrice",r.Sequelize.literal(' - "price"'),"DESC"]];case"recommended":return n.sequelize.random();default:return}})(e.sortBy)),o}},489:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(109),t),n(o(638),t),n(o(781),t)},109:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeProduct=void 0;const o=process.env.SERVER_HOST;t.normalizeProduct=e=>{const t=Object.assign({},e);return delete t.createdAt,delete t.updatedAt,t.image=`${o}/images/${t.image}`,t}},638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeProductInfo=void 0;const o=process.env.SERVER_HOST;t.normalizeProductInfo=e=>{const t=Object.assign(Object.assign({},e),{capacityAvailable:JSON.parse(e.capacityAvailable),colorsAvailable:JSON.parse(e.colorsAvailable),images:JSON.parse(e.images),description:JSON.parse(e.description),cell:JSON.parse(e.cell)});return delete t.createdAt,delete t.updatedAt,t.images=t.images.map((e=>`${o}/images/${e}`)),t}},475:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.router=void 0;const n=r(o(860)),i=o(45);t.router=n.default.Router(),t.router.get("/:id",i.productsInfoController.getOneById)},745:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.router=void 0;const n=r(o(860)),i=o(45);t.router=n.default.Router(),t.router.get("/",i.productsController.getAll),t.router.get("/:id",i.productsController.getOneById),t.router.get("/length/:category",i.productsController.getLengthByCategory)},728:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.server=void 0,r(o(142)).default.config();const n=r(o(860)),i=r(o(582)),a=o(745),u=o(475),s=o(45),d=process.env.SERVER_PORT,c=process.env.SERVER_HOST,l=process.env.USER_HOST,p=process.env.USER_HOST_DEV;t.server=(0,n.default)();const f={origin:[null!=l?l:"",null!=p?p:""]};t.server.use("/products-info",(0,i.default)(f),n.default.json(),u.router),t.server.use("/products",(0,i.default)(f),n.default.json(),a.router),t.server.use("/images",(0,i.default)(f),s.getImage),t.server.use("/",(0,i.default)(f),s.getDefaultPage),t.server.listen(d,(()=>{console.log(`API is working on ${c}`)}))},999:function(e,t,o){var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,n)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(441),t),n(o(802),t)},802:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.productsInfoServices=void 0;const n=o(644);t.productsInfoServices={getById:e=>r(void 0,void 0,void 0,(function*(){return yield n.ProductsInfo.findByPk(e).then((e=>null==e?void 0:e.dataValues))}))}},441:function(e,t,o){var r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.productServices=void 0;const n=o(644),i=o(489);t.productServices={getAll:e=>r(void 0,void 0,void 0,(function*(){const t=(0,i.getPreparedRequestQuery)(e);return yield n.Products.findAll(t).then((e=>e.map((e=>null==e?void 0:e.dataValues))))})),getById:e=>r(void 0,void 0,void 0,(function*(){return yield n.Products.findByPk(e).then((e=>null==e?void 0:e.dataValues))})),getLengthByCategory:e=>r(void 0,void 0,void 0,(function*(){return yield n.Products.count({where:{category:e}})}))}},582:e=>{e.exports=require("cors")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},496:e=>{e.exports=require("sequelize")},464:e=>{e.exports=require("sequelize-typescript")},147:e=>{e.exports=require("fs")},292:e=>{e.exports=require("fs/promises")},17:e=>{e.exports=require("path")},955:e=>{e.exports=require("stream")}},t={};!function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}(728)})();