(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{402:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#介绍"}},[t._v("介绍")])]),a("li",[a("a",{attrs:{href:"#常用网址"}},[t._v("常用网址")])]),a("li",[a("a",{attrs:{href:"#图表展示如下"}},[t._v("图表展示如下")])]),a("li",[a("a",{attrs:{href:"#使用服务端返回数据的异步加载和更新"}},[t._v("使用服务端返回数据的异步加载和更新")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("把常用的ECharts图表整理一下，方便日后的使用")])]),t._v(" "),a("li",[a("p",[t._v("图表实例可见："),a("a",{attrs:{href:"http://zpj80231.gitee.io/echartsstudy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://zpj80231.gitee.io/echartsstudy/"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"常用网址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用网址"}},[t._v("#")]),t._v(" 常用网址")]),t._v(" "),a("ul",[a("li",[t._v("在ECharts官网运行编辑实例："),a("a",{attrs:{href:"https://www.echartsjs.com/gallery/editor.html?c=doc-example/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.echartsjs.com/gallery/editor.html?c=doc-example/getting-started"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("ECharts"),a("code",[t._v("option")]),t._v("中各参数详细配置项："),a("a",{attrs:{href:"https://echarts.baidu.com/option.html#grid",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://echarts.baidu.com/option.html#grid"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"图表展示如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图表展示如下"}},[t._v("#")]),t._v(" 图表展示如下")]),t._v(" "),a("ul",[a("li",[t._v("柱+折线图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/znote/img/EChartsStudy/%E6%9F%B1+%E6%8A%98%E7%BA%BF%E5%9B%BE.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("饼图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/znote/img/EChartsStudy/%E9%A5%BC%E5%9B%BE.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("迁徙图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/znote/img/EChartsStudy/%E8%BF%81%E5%BE%99%E5%9B%BE.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("接入百度地图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/znote/img/EChartsStudy/%E6%8E%A5%E5%85%A5%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"使用服务端返回数据的异步加载和更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用服务端返回数据的异步加载和更新"}},[t._v("#")]),t._v(" 使用服务端返回数据的异步加载和更新")]),t._v(" "),a("p",[t._v("详见官网："),a("a",{attrs:{href:"https://echarts.baidu.com/tutorial.html#%E5%BC%82%E6%AD%A5%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%BD%BD%E5%92%8C%E6%9B%B4%E6%96%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步数据加载和更新"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("init的char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("option参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("查询条件"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("查询条件"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("查询条件"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ECharts 默认有提供了一个简单的加载动画。只需要调用 showLoading 方法显示。数据加载完成后再调用 hideLoading 方法隐藏加载动画。")]),t._v("\n    chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'加载中...'")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n\t$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tdata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"查询条件1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("查询条件"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'查询条件2'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("查询条件"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'查询条件3'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("查询条件"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/zhidinglianjie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*注意填入数据的格式：\n               \tseries: [{\n                    // 根据名字对应到相应的系列\n                    name: '销量',\n                    data: [53, 25, 26, 20, 32, 25]\n        \t\t}]*/")]),t._v("\n\t\t\t\toption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("series"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n\t\t\t\toption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("series"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("categories\n\t\t\t\tchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                \n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据加载完成后再调用 hideLoading 方法隐藏加载动画。")]),t._v("\n\t\t\tchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("jqXHR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);