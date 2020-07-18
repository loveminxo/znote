(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{427:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{title01:{"margin-right":"10%"},content01:{"margin-right":"20%"},blockStyle:{background:"#eee",color:"red"},titleStyle:{"margin-right":"10%","font-size":"16px"},contentStyle:{"margin-right":"20%","font-size":"10px","margin-top":"1rem","margin-bottom":"0.4rem"}}}},n=a(2),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticStyle:{height:"120px"}},[a("Boxx",{attrs:{changeTime:"1200"}})],1),t._v(" "),a("h2",{attrs:{id:"序言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[t._v("#")]),t._v(" 序言")]),t._v(" "),a("ul",[a("li",[t._v("由于在引入默认的VuePress Custom Containers太过笨重了，故闲来无事对其做一层封装简化使用")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ul",[a("li",[t._v("在文件"),a("code",[t._v("package.json")]),t._v("中的"),a("code",[t._v("devDependencies")]),t._v("下加入"),a("code",[t._v('"vuepress-plugin-boxx": "0.0.7"')]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress-plugin-boxx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.7"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("在 vuepress 的"),a("code",[t._v("config.js")]),t._v("中配置"),a("code",[t._v("plugins")]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress-plugin-boxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("在"),a("code",[t._v("package.json")]),t._v("目录下执行命令："),a("code",[t._v("npm install")])]),t._v(" "),a("li",[t._v("正常启动项目，接着如下使用即可")])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("ul",[a("li",[t._v("引入：只需在你想要插入的地方加入 "),a("code",[t._v("<Boxx/>")]),t._v(" 即可（如顶部所示）")]),t._v(" "),a("li",[t._v("内容：默认随机展示名人名句，支持自定义")]),t._v(" "),a("li",[t._v("样式：有三种样式，默认为 tip 样式，支持自定义")]),t._v(" "),a("li",[t._v("注意：除"),a("code",[t._v("<Boxx/>")]),t._v("这个标签是必须外，标签属性均为可选，所有标签属性会在下文中详细介绍")])]),t._v(" "),a("h2",{attrs:{id:"默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认样式"}},[t._v("#")]),t._v(" 默认样式")]),t._v(" "),a("Boxx",{attrs:{type:"tip",title:"tip",content:"只需一行：<code> &#60;Boxx type='tip' title='自定义' content='自定义' /> </code> "}}),t._v(" "),a("Boxx",{attrs:{type:"warning",title:"warning",content:"只需一行：<code> &#60;Boxx type='warning' title='自定义' content='自定义' /> </code>"}}),t._v(" "),a("Boxx",{attrs:{type:"danger",title:"danger",content:"只需一行：<code> &#60;Boxx type='danger' title='自定义' content='自定义' /> </code>"}}),t._v(" "),a("h2",{attrs:{id:"自定义标题和内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义标题和内容"}},[t._v("#")]),t._v(" 自定义标题和内容")]),t._v(" "),a("ul",[a("li",[t._v("如果默认的名人名句不满足需求的话，自定义只需指定两个属性"),a("code",[t._v("title")]),t._v("和"),a("code",[t._v("content")]),t._v("的值")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("要展示的"),a("code",[t._v("title")]),t._v("的内容，支持html标签")])]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("要展示的"),a("code",[t._v("content")]),t._v("的内容，支持html标签")])])])]),t._v(" "),a("ul",[a("li",[t._v("当然你也可以只输入"),a("code",[t._v("title")]),t._v("或"),a("code",[t._v("content")]),t._v("，如下：")])]),t._v(" "),a("Boxx",{attrs:{type:"warning",blockStyle:t.title01,title:"短短的 title：<code> &#60;Boxx type='warning' title='自定义' /> </code>"}}),t._v(" "),a("Boxx",{attrs:{type:"danger",blockStyle:t.content01,content:"更短短的 content：<code> &#60;Boxx type='danger' content='自定义' /> </code>"}}),t._v(" "),a("h2",{attrs:{id:"自定义样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义样式"}},[t._v("#")]),t._v(" 自定义样式")]),t._v(" "),a("marquee",[a("Boxx",{attrs:{blockStyle:t.blockStyle}}),t._v(" "),a("Boxx",{attrs:{type:"warning",blockStyle:t.titleStyle,titleStyle:t.titleStyle,changeTime:"1000",title:"我是一个大大的且变化的 title"}}),t._v(" "),a("Boxx",{attrs:{type:"danger",blockStyle:t.contentStyle,contentStyle:t.contentStyle,content:"我是一个小小的<br><marquee>content</marquee>"}})],1),t._v(" "),a("ul",[a("li",[t._v("可以通过以下几个属性实现")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("blockStyle")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("整体块元素的样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("titleStyle")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("只针对"),a("code",[t._v("title")]),t._v("的样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("contentStyle")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("只针对"),a("code",[t._v("content")]),t._v("的样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("changeTime")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("以毫秒值为单位的动态变化时间，顶部为例")])])])]),t._v(" "),a("p",[t._v("需要注意的是：属性值传输的对象只能通过"),a("code",[t._v("v-bind:")]),t._v("绑定来实现")]),t._v(" "),a("ul",[a("li",[t._v("以下是对如上样式的示例，在Markdown中这样书写即可：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("marquee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Boxx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("blockStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blockStyle"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Boxx type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warning"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("blockStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"titleStyle"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("titleStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"titleStyle"')]),t._v(" changeTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000"')]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是一个大大的且变化的 title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Boxx type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"danger"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("blockStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contentStyle"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("contentStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contentStyle"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是一个小小的<br><marquee>content</marquee>"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("marquee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tblockStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'background'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#eee'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                titleStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'margin-right'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font-size'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'16px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                contentStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'margin-right'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font-size'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"margin-top"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1rem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"margin-bottom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.4rem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);