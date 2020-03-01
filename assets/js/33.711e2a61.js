(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{414:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx"),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#docker"}},[s._v("Docker")])]),e("li",[e("a",{attrs:{href:"#_1、简介"}},[s._v("1、简介")])]),e("li",[e("a",{attrs:{href:"#_2、核心概念"}},[s._v("2、核心概念")])]),e("li",[e("a",{attrs:{href:"#_3、安装docker"}},[s._v("3、安装Docker")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1）、安装linux虚拟机"}},[s._v("1）、安装linux虚拟机")])]),e("li",[e("a",{attrs:{href:"#_2）、在linux虚拟机上安装docker"}},[s._v("2）、在linux虚拟机上安装docker")])])])]),e("li",[e("a",{attrs:{href:"#_4、docker常用命令-操作"}},[s._v("4、Docker常用命令&操作")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1）、镜像操作"}},[s._v("1）、镜像操作")])]),e("li",[e("a",{attrs:{href:"#_2）、容器操作"}},[s._v("2）、容器操作")])]),e("li",[e("a",{attrs:{href:"#_3）、安装mysql示例"}},[s._v("3）、安装MySQL示例")])])])]),e("li",[e("a",{attrs:{href:"#_5、其它"}},[s._v("5、其它")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),e("h2",{attrs:{id:"_1、简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、简介"}},[s._v("#")]),s._v(" 1、简介")]),s._v(" "),e("p",[e("strong",[s._v("Docker")]),s._v("是一个开源的应用容器引擎；是一个轻量级容器技术；")]),s._v(" "),e("p",[s._v("Docker支持将软件编译成一个镜像；然后在镜像中各种软件做好配置，将镜像发布出去，其他使用者可以直接使用这个镜像；")]),s._v(" "),e("p",[s._v("运行中的这个镜像称为容器，容器启动是非常快速的。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/znote/img/docker/%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20180303145450.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/znote/img/docker/%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20180303145531.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"_2、核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、核心概念"}},[s._v("#")]),s._v(" 2、核心概念")]),s._v(" "),e("p",[s._v("docker主机(Host)：安装了Docker程序的机器（Docker直接安装在操作系统之上）；")]),s._v(" "),e("p",[s._v("docker客户端(Client)：连接docker主机进行操作；")]),s._v(" "),e("p",[s._v("docker仓库(Registry)：用来保存各种打包好的软件镜像；")]),s._v(" "),e("p",[s._v("docker镜像(Images)：软件打包好的镜像；放在docker仓库中；")]),s._v(" "),e("p",[s._v("docker容器(Container)：镜像启动后的实例称为一个容器；容器是独立运行的一个或一组应用")]),s._v(" "),e("p",[e("img",{attrs:{src:"/znote/img/docker/%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20180303165113.png",alt:""}})]),s._v(" "),e("p",[s._v("使用Docker的步骤：")]),s._v(" "),e("p",[s._v("1）、安装Docker")]),s._v(" "),e("p",[s._v("2）、去Docker仓库找到这个软件对应的镜像；")]),s._v(" "),e("p",[s._v("3）、使用Docker运行这个镜像，这个镜像就会生成一个Docker容器；")]),s._v(" "),e("p",[s._v("4）、对容器的启动停止就是对软件的启动停止；")]),s._v(" "),e("h2",{attrs:{id:"_3、安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装docker"}},[s._v("#")]),s._v(" 3、安装Docker")]),s._v(" "),e("h3",{attrs:{id:"_1）、安装linux虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1）、安装linux虚拟机"}},[s._v("#")]),s._v(" 1）、安装linux虚拟机")]),s._v(" "),e("p",[s._v("1）、VMWare、VirtualBox（安装）；")]),s._v(" "),e("p",[s._v("2）、导入虚拟机文件centos7；（安装linux）")]),s._v(" "),e("p",[s._v("3）、双击启动linux虚拟机;使用  root/ 123456登陆")]),s._v(" "),e("p",[s._v("4）、使用客户端连接linux服务器进行命令操作；")]),s._v(" "),e("p",[s._v("5）、设置虚拟机网络；")]),s._v(" "),e("p",[s._v("​       桥接网络===选好网卡====接入网线；")]),s._v(" "),e("p",[s._v("6）、设置好网络以后使用命令重启虚拟机的网络")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("7）、查看linux的ip地址")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("8）、使用客户端连接linux；")]),s._v(" "),e("h3",{attrs:{id:"_2）、在linux虚拟机上安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2）、在linux虚拟机上安装docker"}},[s._v("#")]),s._v(" 2）、在linux虚拟机上安装docker")]),s._v(" "),e("p",[s._v("步骤：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、检查内核版本，必须是3.10及以上\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、安装docker\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、输入y确认安装\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、启动docker\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start docker")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker -v")]),s._v("\nDocker version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.12")]),s._v(".6, build 3e8e77d/1.12.6\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、开机启动docker\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable docker")]),s._v("\nCreated symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("、停止docker\nsystemctl stop docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"_4、docker常用命令-操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、docker常用命令-操作"}},[s._v("#")]),s._v(" 4、Docker常用命令&操作")]),s._v(" "),e("h3",{attrs:{id:"_1）、镜像操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1）、镜像操作"}},[s._v("#")]),s._v(" 1）、镜像操作")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("操作")]),s._v(" "),e("th",[s._v("命令")]),s._v(" "),e("th",[s._v("说明")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("检索")]),s._v(" "),e("td",[s._v("docker  search 关键字  eg：docker  search redis")]),s._v(" "),e("td",[s._v("我们经常去docker  hub上检索镜像的详细信息，如镜像的TAG。")])]),s._v(" "),e("tr",[e("td",[s._v("拉取")]),s._v(" "),e("td",[s._v("docker pull 镜像名:tag")]),s._v(" "),e("td",[s._v(":tag是可选的，tag表示标签，多为软件的版本，默认是latest")])]),s._v(" "),e("tr",[e("td",[s._v("列表")]),s._v(" "),e("td",[s._v("docker images")]),s._v(" "),e("td",[s._v("查看所有本地镜像")])]),s._v(" "),e("tr",[e("td",[s._v("删除")]),s._v(" "),e("td",[s._v("docker rmi image-id")]),s._v(" "),e("td",[s._v("删除指定的本地镜像")])])])]),s._v(" "),e("p",[s._v("https://hub.docker.com/")]),s._v(" "),e("h3",{attrs:{id:"_2）、容器操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2）、容器操作"}},[s._v("#")]),s._v(" 2）、容器操作")]),s._v(" "),e("p",[s._v("软件镜像（QQ安装程序）----运行镜像----产生一个容器（正在运行的软件，运行的QQ）；")]),s._v(" "),e("p",[s._v("步骤：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、搜索镜像\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker search tomcat")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、拉取镜像\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull tomcat")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、根据镜像启动容器\ndocker run --name mytomcat -d tomcat:latest\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n查看运行中的容器\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、 停止运行中的容器\ndocker stop  容器的id\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("、查看所有的容器\ndocker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("、启动容器\ndocker start 容器id\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("、删除一个容器\n docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器id\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("、启动一个做了端口映射的tomcat\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d -p 8888:8080 tomcat")]),s._v("\n-d：后台运行\n-p: 将主机的端口映射到容器的一个端口    主机端口:容器内部的端口\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("、为了演示简单关闭了linux的防火墙\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld status ；查看防火墙状态\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld stop：关闭防火墙\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("、查看容器的日志\ndocker logs container-name/container-id\n\n更多命令参看\nhttps://docs.docker.com/engine/reference/commandline/docker/\n可以参考每一个镜像的文档\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])]),e("h3",{attrs:{id:"_3）、安装mysql示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3）、安装mysql示例"}},[s._v("#")]),s._v(" 3）、安装MySQL示例")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("错误的启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run --name mysql01 -d mysql")]),s._v("\n42f09819908bb72dd99ae19e792e0a5d03c48638421fa64cce5f8ba0f40f5846\n\nmysql退出了\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps -a")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                           PORTS               NAMES\n42f09819908b        mysql               "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.sh"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v(" seconds ago      Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(" seconds ago                            mysql01\n538bde63e500        tomcat              "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("        About an hour ago   Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" About an hour ago                       compassionate_\ngoldstine\nc4f1ac60b3fc        tomcat              "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("        About an hour ago   Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" About an hour ago                       lonely_fermi\n81ec743a5271        tomcat              "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("        About an hour ago   Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" About an hour ago                       sick_ramanujan\n\n\n//错误日志\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker logs 42f09819908b")]),s._v("\nerror: database is uninitialized and password option is not specified\n  You need to specify one of MYSQL_ROOT_PASSWORD, MYSQL_ALLOW_EMPTY_PASSWORD and MYSQL_RANDOM_ROOT_PASSWORD；这个三个参数必须指定一个\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("正确的启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run --name mysql01 -e MYSQL_ROOT_PASSWORD=123456 -d mysql")]),s._v("\nb874c56bec49fb43024b3805ab51e9097da779f2f572c22c695305dedd684c5f\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\nb874c56bec49        mysql               "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.sh"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago       Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" seconds        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp            mysql01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("做了端口映射")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -p 3306:3306 --name mysql02 -e MYSQL_ROOT_PASSWORD=123456 -d mysql")]),s._v("\nad10e4bc5c6a0f61cbad43898de71d366117d120e39db651844c0e73863b9434\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\nad10e4bc5c6a        mysql               "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.sh"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago       Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" seconds        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:3306-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp   mysql02\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("几个其他的高级操作")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run --name mysql03 -v /conf/mysql:/etc/mysql/conf.d -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-secret-pw -d mysql:tag\n把主机的/conf/mysql文件夹挂载到 mysqldocker容器的/etc/mysql/conf.d文件夹里面\n改mysql的配置文件就只需要把mysql配置文件放在自定义的文件夹下（/conf/mysql）\n\ndocker run --name some-mysql -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-secret-pw -d mysql:tag --character-set-server"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4 --collation-server"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4_unicode_ci\n指定mysql的一些配置参数\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"_5、其它"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、其它"}},[s._v("#")]),s._v(" 5、其它")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247483776&idx=1&sn=736fb79ad59257d1f1e83394ca27e711&chksm=fc2fbd88cb58349ef2134a3bd27e247ae755e619ca3334fbccb3054b47d969e843bbe7ec974b&scene=0&xtrack=1&key=e785e0a87d6a3fb5ef628380ee061d999f263fe68c0b8a6a12698547db89ccc9363668987e16c89de129ba7b6d0add70e5c5db8c5a651f2a090b5af00fff76a1f88190e6701c3255904b64967fa0bafa&ascene=1&uin=MjA2MzU5OTU2Mw%3D%3D&devicetype=Windows+10&version=62060739&lang=zh_CN&pass_ticket=OQ5GV8Pby5xujW5Gd96WhPTByLJqlv0yDsnZzp8FTFYDUgwFUxB2D1l8djC3mpFU",target:"_blank",rel:"noopener noreferrer"}},[s._v("开发者必备Docker命令"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247483781&idx=1&sn=77379ed72d307cdad67495455d487a97&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Maven插件构建Docker镜像"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247483786&idx=1&sn=33052d6967de1a2c9592b2a1c58b8bef&chksm=fc2fbd82cb583494c5e1a1f079f81c66343514299e44732239f6b85ea25dc6f9947434939529&scene=0&xtrack=1&key=56b40bf83a3314543f1f3d01c17206aff3943f67de059581f61d2ae7d6c835edc5c1bb48a6109125c75aab7f5441c6b97b97af1ecbaf371d40a10f5a2c6a3e4bb9694e7829e3a199ed34fbdb450fe43e&ascene=1&uin=MjA2MzU5OTU2Mw%3D%3D&devicetype=Windows+10&version=62060739&lang=zh_CN&pass_ticket=lmhGQOGOy88Ide7XKyX7SFYdBDE3zSOmHIZAJ3pyAGpeeloWcmqke9BaJeViq%2Bo4",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker在Linux下的各种操作"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247483795&idx=1&sn=b46ce4823e2e2b5a2abdec1ca5654800&chksm=fc2fbd9bcb58348dd27656fb81840aeab849b66be8cb7d419afb417c9d5b5733f45ab32ec1d0&scene=0&xtrack=1&key=5184507a09135c09d1d1971fd83d99fe2cf715168c5208de8a298ed8b866bf04788b14a30ca4c3af464585aec08c38f4fa3823e44864db14823e3d4592eaa20a13be8f59431eab70a4069b26d8948ee2&ascene=1&uin=MjA2MzU5OTU2Mw%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=XKqYMZBWcdrSq1Lcxtwiwc6GHYR6jC5yC0SVVufqiwJjZajHJXYbT06Le4KILTlW",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Dockerfile为SpringBoot应用构建Docker镜像"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1Nzg4NjgyMw==&mid=2247483800&idx=1&sn=b9e0b6c006bad05e4055a3c0bb61c815&chksm=fc2fbd90cb5834863ceaf2ea924a65b4bec0e631d7836f7b7fa03ba7676ccfc1cda0c1085aeb&scene=0&xtrack=1&key=c3ccbc6d8c9be9e33d962e53afd6a98a7b9f82a618b1b890eeffae404eb8f590cba826ab0d16ae7938811239093f361e70799b8422f4d686a61eb2f0b054f878887719cc0d3e07d22ee7442683701cdc&ascene=1&uin=MjA2MzU5OTU2Mw%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=4T%2F%2BRJjRiFqp%2BmXHF8wXHdp%2BERMWvSeoTelE12W5yoOQmW6ZHTheDJufJBr2HrVN",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Docker Compose部署SpringBoot应用"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);