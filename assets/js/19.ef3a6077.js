(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{64:function(t,e,s){"use strict";s.r(e);var n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("正如 "),s("router-link",{attrs:{to:"./前言.html"}},[t._v("前言")]),t._v(" 中介绍的那样，你可以把 Vue 的源码 clone 到本地，也可以安装方便在线查看GitHub仓库代码的 Chrome 扩展，总之我们首先要做的事情就是先把 Vue 源码的目录结构都弄清楚，每个文件的作用是什么，Vue 是如何规划目录的等等。")],1),s("p",[t._v("详细目录介绍如下：")]),t._m(2),s("p",[t._v("对于上面对目录和文件的描述也许你一眼看上去一头雾水，还是不理解他在干什么，没关系，这是正常的，在你没有深入到源码之前，仅仅凭借几句话就理解这个文件的作用是不可能的，所以不要灰心，只需要有个大概印象混个眼熟就可以了。")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),s("p",[t._v("相比于知道 Vue 的不同构建输出，我们更关心的是：不同的构建输出有什么区别，为什么要输出这么多不同的版本，有什么作用？")]),t._m(17),s("p",[t._v("但是为什么需要完整版呢？说白了就是允许你在代码运行的时候去现场编译模板，在不配合构建工具的情况下可以直接使用，但是更多的时候推荐你配合构建工具使用运行时版本。")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"了解-vue-这个项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解-vue-这个项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 了解 Vue 这个项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"目录及文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录及文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录及文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── scripts ------------------------------- 构建相关的文件，一般情况下我们不需要动\n│   ├── git-hooks ------------------------- 存放git钩子的目录\n│   ├── alias.js -------------------------- 别名配置\n│   ├── config.js ------------------------- 生成rollup配置的文件\n│   ├── build.js -------------------------- 对 config.js 中所有的rollup配置进行构建\n│   ├── ci.sh ----------------------------- 持续集成运行的脚本\n│   ├── release.sh ------------------------ 用于自动发布新版本的脚本\n├── dist ---------------------------------- 构建后文件的输出目录\n├── examples ------------------------------ 存放一些使用Vue开发的应用案例\n├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)\n├── packages ------------------------------ 存放独立发布的包的目录\n├── test ---------------------------------- 包含所有测试文件\n├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码\n│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数\n│   ├── core ------------------------------ 存放通用的，平台无关的代码\n│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码\n│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码\n│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码\n│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码\n│   │   ├── components -------------------- 包含抽象出来的通用组件\n│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码\n│   ├── platforms ------------------------- 包含平台特有的相关代码，不同平台的不同构建的入口文件也在这里\n│   │   ├── web --------------------------- web平台\n│   │   │   ├── entry-runtime.js ---------- 运行时构建的入口，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意\n│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，它在 entry-runtime 的基础上添加了模板(template)到render函数的编译器\n│   │   │   ├── entry-compiler.js --------- vue-template-compiler 包的入口文件\n│   │   │   ├── entry-server-renderer.js -- vue-server-renderer 包的入口文件\n│   │   │   ├── entry-server-basic-renderer.js -- 输出 packages/vue-server-renderer/basic.js 文件\n│   │   ├── weex -------------------------- 混合应用\n│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包\n│   ├── shared ---------------------------- 包含整个代码库通用的代码\n├── package.json -------------------------- 不解释\n├── yarn.lock ----------------------------- yarn 锁定文件\n├── .editorconfig ------------------------- 针对编辑器的编码风格配置文件\n├── .flowconfig --------------------------- flow 的配置文件\n├── .babelrc ------------------------------ babel 配置文件\n├── .eslintrc ----------------------------- eslint 配置文件\n├── .eslintignore ------------------------- eslint 忽略配置\n├── .gitignore ---------------------------- git 忽略配置\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-的不同构建输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的不同构建输出","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 的不同构建输出")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"从-vue-的构建配置了解其不同的构建输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-vue-的构建配置了解其不同的构建输出","aria-hidden":"true"}},[this._v("#")]),this._v(" 从 Vue 的构建配置了解其不同的构建输出")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如果按照输出的模块形式分类，那么 Vue 有三种不同的构建输出，分别是："),s("code",[t._v("UMD")]),t._v("、"),s("code",[t._v("CommonJS")]),t._v(" 以及 "),s("code",[t._v("ES Module")]),t._v("，我们可以在 Vue 的 Rollup 构建配置中得知，打开 "),s("code",[t._v("scripts/config.js")]),t._v(" 文件，如下图：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://ovjvjtt4l.bkt.clouddn.com/2017-08-31-vue-build-config1.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("上图中的三个构建配置的入口是相同的，即 "),s("code",[t._v("web/entry-runtime.js")]),t._v(" 文件，但是输出的格式("),s("code",[t._v("format")]),t._v(")是不同的，分别是 "),s("code",[t._v("cjs")]),t._v("、"),s("code",[t._v("es")]),t._v(" 以及 "),s("code",[t._v("umd")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("每种模块形式又分别输出了 "),e("code",[this._v("运行时版")]),this._v(" 以及 "),e("code",[this._v("完整版")]),this._v("，如下图：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://ovjvjtt4l.bkt.clouddn.com/2017-08-31-130242.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("上图中，"),s("code",[t._v("cjs")]),t._v(" 模块分别输出了 "),s("code",[t._v("运行时版")]),t._v(" 以及 "),s("code",[t._v("完整版")]),t._v(" 两个版本，"),s("code",[t._v("es")]),t._v(" 模块也做了同样的事情，我们观察运行时版本与完整版本的区别：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("运行时的入口文件名字为："),e("code",[this._v("entry-runtime.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("完整版的入口文件名字为："),e("code",[this._v("entry-runtime-with-compiler.js")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("通过名字，我们就可以猜到，完整版比运行时版本多了一个传说中的 "),e("code",[this._v("compiler")]),this._v("，而 "),e("code",[this._v("compiler")]),this._v(" 在我们介绍目录结构的时候说过，它的作用是："),e("em",[this._v("编译器代码的存放目录，将 template 编译为 render 函数")]),this._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("上图中只介绍了 "),s("code",[t._v("cjs")]),t._v(" 与 "),s("code",[t._v("es")]),t._v(" 版本的输出，对于 "),s("code",[t._v("umd")]),t._v(" 模块格式的输出，同样也分为 "),s("code",[t._v("运行时版")]),t._v(" 与 "),s("code",[t._v("完整版")]),t._v("，并且还分为 "),s("code",[t._v("生产环境")]),t._v(" 与 "),s("code",[t._v("开发环境")]),t._v("，如下图：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://ovjvjtt4l.bkt.clouddn.com/2017-08-31-131849.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"不同构建输出的区别与作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同构建输出的区别与作用","aria-hidden":"true"}},[this._v("#")]),this._v(" 不同构建输出的区别与作用")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("为什么要分 "),s("code",[t._v("运行时版")]),t._v(" 与 "),s("code",[t._v("完整版")]),t._v("？首先你要知道一个公式："),s("code",[t._v("运行时版 + Compiler = 完整版")]),t._v("。也就是说完整版比运行时版多了一个 "),s("code",[t._v("Compiler")]),t._v("，一个将字符串模板编译为 "),s("code",[t._v("render")]),t._v(" 函数的家伙，大家想一想：将字符串模板编译为 "),s("code",[t._v("render")]),t._v(" 函数的这个过程，是不是一定要在代码运行的时候再去做？当然不是，实际上这个过程在构建的时候就可以完成，这样真正运行的代码就免去了这样一个步骤，提升了性能。同时，将 "),s("code",[t._v("Compiler")]),t._v(" 抽离为单独的包，还能减小了库的体积。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("除了运行时版与完整版之外，为什么还要输出不同形式的模块的包？比如 "),s("code",[t._v("cjs")]),t._v("、"),s("code",[t._v("es")]),t._v(" 和 "),s("code",[t._v("umd")]),t._v("？其中 "),s("code",[t._v("umd")]),t._v(" 是使得你可以直接使用 "),s("code",[t._v("<script>")]),t._v(" 标签引用Vue的模块形式。但我们使用 Vue 的时候更多的是结合构建工具，比如 "),s("code",[t._v("webpack")]),t._v(" 之类的，而 "),s("code",[t._v("cjs")]),t._v(" 形式的模块就是为 "),s("code",[t._v("browserify")]),t._v(" 和 "),s("code",[t._v("webpack 1")]),t._v(" 提供的，他们在加载模块的时候不能直接加载 "),s("code",[t._v("ES Module")]),t._v("。而 "),s("code",[t._v("webpack2+")]),t._v(" 以及 "),s("code",[t._v("Rollup")]),t._v(" 是可以直接加载 "),s("code",[t._v("ES Module")]),t._v(" 的，所以就有了 "),s("code",[t._v("es")]),t._v(" 形式的模块输出。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[this._v("#")]),this._v(" package.json")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("package.json")]),this._v(" 文件的作用这里就不说了，来看几个重要的字段：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"main": "dist/vue.runtime.common.js",\n"module": "dist/vue.runtime.esm.js",\n')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("main")]),t._v(" 和 "),s("code",[t._v("module")]),t._v(" 指向的都是运行时版的Vue，不同的是：前者是 "),s("code",[t._v("cjs")]),t._v(" 模块，后者是 "),s("code",[t._v("es")]),t._v(" 模块。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("其中 "),s("code",[t._v("main")]),t._v(" 字段和 "),s("code",[t._v("module")]),t._v(" 字段分别用于 "),s("code",[t._v("browserify 或 webpack 1")]),t._v(" 和 "),s("code",[t._v("webpack2+ 或 Rollup")]),t._v("，后者可以直接加载 "),s("code",[t._v("ES Module")]),t._v(" 且会根据 "),s("code",[t._v("module")]),t._v(" 字段的配置进行加载，关于 "),s("code",[t._v("module")]),t._v(" 可以参考这里："),s("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/pkg.module",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rollup/rollup/wiki/pkg.module")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后我们看一下 "),e("code",[this._v("scripts")]),this._v(" 字段如下，这里去掉了测试相关以及weex相关的脚本配置：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token string"}},[t._v('"scripts"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// 构建完整版 cjs 模块的 Vue")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"dev"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rollup -w -c scripts/config.js --environment TARGET:web-full-dev"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 构建运行时 cjs 模块的 Vue")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"dev:cjs"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rollup -w -c scripts/config.js --environment TARGET:web-runtime-cjs"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 构建运行时 es 模块的 Vue")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"dev:esm"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rollup -w -c scripts/config.js --environment TARGET:web-runtime-esm"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 构建 web-server-renderer 包")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"dev:ssr"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rollup -w -c scripts/config.js --environment TARGET:web-server-renderer"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 构建 Compiler 包")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"dev:compiler"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"rollup -w -c scripts/config.js --environment TARGET:web-compiler "')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"build"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"node scripts/build.js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"build:ssr"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"npm run build -- vue.runtime.common.js,vue-server-renderer"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"lint"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"eslint src build test"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"flow"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"flow check"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"release"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"bash scripts/release.sh"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"release:note"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"node scripts/gen-release-note.js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"commit"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"git-cz"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("观察其中 "),e("code",[this._v("dev")]),this._v(" 系列的命令，其作用如同注释中所写的一样。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("另外说明一点："),e("em",[this._v("这套源码分析的文章，大多数时候是基于 dev 脚本的（即："),e("code",[this._v("npm run dev")]),this._v("），也就是完整版的 cjs 模块的 Vue")]),this._v("。原因是方便我们直接引用并使用，且完整版带了 "),e("code",[this._v("Compiler")]),this._v(" 我们就不用单独去分析了。")])}],!1,null,null,null);e.default=r.exports}}]);