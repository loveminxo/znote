(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{478:function(t,v,a){"use strict";a.r(v);var _=a(2),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("p",[t._v("简单介绍工作中各种VO, TO, PO, BO...")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#vo"}},[t._v("VO")])]),a("li",[a("a",{attrs:{href:"#dto"}},[t._v("DTO")])]),a("li",[a("a",{attrs:{href:"#po"}},[t._v("PO")])]),a("li",[a("a",{attrs:{href:"#dao"}},[t._v("DAO")])]),a("li",[a("a",{attrs:{href:"#bo"}},[t._v("BO")])]),a("li",[a("a",{attrs:{href:"#规范"}},[t._v("规范")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"vo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vo"}},[t._v("#")]),t._v(" VO")]),t._v(" "),a("p",[t._v("VO：值对象、视图对象")]),t._v(" "),a("p",[t._v("项目中经常用到，主要对应界面显示的数据对象。")]),t._v(" "),a("p",[t._v("在一个 web 页面中，一般用一个 VO 对象对应整个界面的值。")]),t._v(" "),a("h2",{attrs:{id:"dto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dto"}},[t._v("#")]),t._v(" DTO")]),t._v(" "),a("p",[t._v("DTO：Data Transfer Object 数据传输对象")]),t._v(" "),a("p",[t._v("项目中较少用到，主要用于远程调用等需要大量传输对象的地方。")]),t._v(" "),a("p",[t._v("比如我们一张表有 100 个字段，那么对应的 PO 就有 100 个属性。\n但是我们界面上只要显示 10 个字段，\n客户端用 webService 来获取数据，没有必要把整个 PO 对象传递到客户端，\n这时我们就可以用只有这 10 个属性的 DTO 来传递结果到客户端，这样也不会暴露服务端表结构。到达客户端以后，如果用这个对象来对应界面显示，那此时它的身份就转为 VO")]),t._v(" "),a("h2",{attrs:{id:"po"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#po"}},[t._v("#")]),t._v(" PO")]),t._v(" "),a("p",[t._v("PO：persistant object 持久对象")]),t._v(" "),a("p",[t._v("项目中经常用到，可以看成是与数据库中的表相映射的 java 对象。")]),t._v(" "),a("p",[t._v("最简单的 PO 就是对应数据库中某个表中的一条记录，多个记录可以用 PO 的集合。PO 中应该不包含任何对数据库的操作。")]),t._v(" "),a("h2",{attrs:{id:"dao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dao"}},[t._v("#")]),t._v(" DAO")]),t._v(" "),a("p",[t._v("DAO：数据访问对象")]),t._v(" "),a("p",[t._v("项目中经常用到，主要用来封装对数据库的访问。")]),t._v(" "),a("h2",{attrs:{id:"bo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bo"}},[t._v("#")]),t._v(" BO")]),t._v(" "),a("p",[t._v("BO：business object 业务对象")]),t._v(" "),a("p",[t._v("项目中较少用到，封装业务逻辑的 java 对象，通过调用 DAO 方法，结合 PO，VO 进行业务操作。")]),t._v(" "),a("h2",{attrs:{id:"规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),a("blockquote",[a("p",[t._v("阿里巴巴 Java 开发手册中的 DO、DTO、BO、AO、VO、POJO 定义")])]),t._v(" "),a("ul",[a("li",[t._v("分层领域模型规约：")])]),t._v(" "),a("p",[t._v("DO（ Data Object）：与数据库表结构一一对应，通过 DAO 层向上传输数据源对象。")]),t._v(" "),a("p",[t._v("DTO（ Data Transfer Object）：数据传输对象，Service 或 Manager 向外传输的对象。")]),t._v(" "),a("p",[t._v("BO（ Business Object）：业务对象。 由 Service 层输出的封装业务逻辑的对象。")]),t._v(" "),a("p",[t._v("AO（ Application Object）：应用对象。 在 Web 层与 Service 层之间抽象的复用对象模型，极为贴近展示层，复用度不高。")]),t._v(" "),a("p",[t._v("VO（ View Object）：显示层对象，通常是 Web 向模板渲染引擎层传输的对象。")]),t._v(" "),a("p",[t._v("POJO（ Plain Ordinary Java Object）：在本手册中， POJO 专指只有 setter/getter/toString 的简单类，包括 DO/DTO/BO/VO 等。")]),t._v(" "),a("p",[t._v("Query：数据查询对象，各层接收上层的查询请求。 注意超过 2 个参数的查询封装，禁止使用 Map 类来传输。")]),t._v(" "),a("ul",[a("li",[t._v("领域模型命名规约：")])]),t._v(" "),a("p",[t._v("数据对象：xxxDO，xxx 即为数据表名。")]),t._v(" "),a("p",[t._v("数据传输对象：xxxDTO，xxx 为业务领域相关的名称。")]),t._v(" "),a("p",[t._v("展示对象：xxxVO，xxx 一般为网页名称。")]),t._v(" "),a("p",[t._v("POJO 是 DO/DTO/BO/VO 的统称，禁止命名成 xxxPOJO。")])],1)}),[],!1,null,null,null);v.default=e.exports}}]);