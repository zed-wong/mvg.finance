(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1313:function(t,e,o){var content=o(1378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("65affc15",content,!0,{sourceMap:!1})},1354:function(t,e,o){"use strict";o.r(e);var n=o(875),c=o(941),r=o(945),l=o(385),f=o(554),d=o(386),h=o(236),m=o(388),_=o(249),k=o(392),x=o(940),v=o(138),w=o(934),C=o(1576),y=(o(47),o(401),o(54),o(32),o(14),o(157),o(1175)),T={data:function(){return{search:""}},computed:{selectTokenDialog:{get:function(){return this.$store.state.selectTokenDialog},set:function(t){this.$store.commit("toggleSelectToken",t)}},selectedToken:{get:function(){return this.$store.state.fromToken},set:function(t){this.$store.commit("setFromToken",t),this.selectTokenDialog=!1}},assets:{get:function(){var t=this;return"c94ac88f-4671-3976-b60a-09064f1811e8"==this.$store.state.fromNetwork.asset_id?y.assets:y.assets.filter((function(e){return e.chain_id.match(t.$store.state.fromNetwork.asset_id)}))}},filteredItems:function(){var t=this;return this.assets.filter((function(e){return e.symbol.toLowerCase().match(t.search)||e.name.toLowerCase().match(t.search)||e.asset_id.toLowerCase().match(t.search)}))}}},$=(o(1377),o(77)),component=Object($.a)(T,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"dialog-css",attrs:{"max-width":"400px","overlay-opacity":"0.95"},model:{value:t.selectTokenDialog,callback:function(e){t.selectTokenDialog=e},expression:"selectTokenDialog"}},[e(v.a,{staticClass:"align-self-start px-9 pt-8"},[e(x.a,{staticClass:"d-flex flex-column mb-0"},[e(c.a,{staticClass:"align-center d-flex flex-row pr-0"},[e("h1",{staticClass:"select-token-css"},[t._v(t._s(t.$t("select_token")))]),t._v(" "),e(w.a),t._v(" "),e(n.a,{attrs:{icon:""},on:{click:function(e){t.selectTokenDialog=!1}}},[e(l.a,[t._v(" mdi-close ")])],1)],1),t._v(" "),e(c.a,{staticClass:"pt-4 px-2"},[e(C.a,{staticClass:"search-border",attrs:{dense:"",outlined:"","hide-details":"true","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("search_token_name")},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 px-0"},[e(d.a,{staticClass:"overflow-y-auto",attrs:{height:"450px"}},[e(k.a,t._l(t.filteredItems,(function(o,i){return e(h.a,{key:i,staticClass:"px-2",staticStyle:{"border-radius":"10px"},on:{click:function(e){t.selectedToken=o}}},[e(m.a,[e(f.a,{attrs:{src:o.icon_url}})],1),t._v(" "),e(_.a,[e(_.c,{staticClass:"font-weight-bold",staticStyle:{"font-size":"14px"}},[t._v("\n                  "+t._s(o.symbol)+"\n                ")]),t._v(" "),e(_.b,{staticStyle:{"font-size":"12px"}},[t._v("\n                  "+t._s(o.name)+"\n                ")])],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1377:function(t,e,o){"use strict";o(1313)},1378:function(t,e,o){var n=o(42)(!1);n.push([t.i,".search-border{border-radius:10px!important}.select-token-css{font-size:20px;font-style:italic}",""]),t.exports=n}}]);