(window["webpackJsonpavro-viewer"]=window["webpackJsonpavro-viewer"]||[]).push([[0],{34:function(e,t,a){e.exports=a(74)},47:function(e,t){},49:function(e,t){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),i=a.n(r),l=a(4),c=a(5),s=a(7),u=a(6),g=a(8),p=a(33),h=a.n(p),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).metadata={},a.rows=[],a.state={isLoading:!1},a.handleFileChange=function(e){var t=e.target.files;if(t&&t.length>0){var n=t[0];if(n.name.endsWith(".avro")||n.name.endsWith(".AVRO"))return a.setState({isLoading:!0}),void a.decodeAvro(n)}throw new Error("Please provide a valid AVRO file")},a.decodeAvro=function(e){var t=null,n=[],o=a.props.onData;h.a.createBlobDecoder(e).on("metadata",(function(e){t=e})).on("data",(function(e){n.push(e)})).on("end",(function(){a.setState({isLoading:!1}),o&&o(e,t,n)}))},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.isLoading?o.a.createElement("div",null,"loading..."):o.a.createElement("div",null,o.a.createElement("label",null,"Choose a file"),o.a.createElement("input",{type:"file",onChange:this.handleFileChange}))}}]),t}(o.a.Component),m=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).gotoFirstPage=function(){var e=a.props.gotoPage;e&&e(0)},a.gotoLastPage=function(){var e=a.props,t=e.gotoPage,n=e.pageCount;t&&t(n-1)},a.gotoPreviousPage=function(){var e=a.props,t=e.gotoPage,n=e.page;t&&n>0&&t(n-1)},a.gotoNextPage=function(){var e=a.props,t=e.gotoPage,n=e.page,o=e.pageCount;t&&n<o-1&&t(n+1)},a.changePageSize=function(e){var t=parseInt(e.target.value),n=a.props.changePageSize;n&&n(t)},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pageSize,a=void 0===t?100:t,n=e.pageCount,r=void 0===n?1:n,i=e.page;return o.a.createElement("form",null,o.a.createElement("button",{type:"button",onClick:this.gotoFirstPage},"<<"),o.a.createElement("button",{type:"button",onClick:this.gotoPreviousPage},"<"),o.a.createElement("select",{value:a,onChange:this.changePageSize},o.a.createElement("option",null,"10"),o.a.createElement("option",null,"20"),o.a.createElement("option",null,"50"),o.a.createElement("option",null,"100"),o.a.createElement("option",null,"200"),o.a.createElement("option",null,"500"),o.a.createElement("option",null,"1000")),o.a.createElement("label",null,"Records per page, showing page ",i+1," of ",r," pages"),o.a.createElement("button",{type:"button",onClick:this.gotoNextPage},">"),o.a.createElement("button",{type:"button",onClick:this.gotoLastPage},">>"))}}]),t}(o.a.Component),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={page:0,pageSize:100},a.renderHeader=function(e,t){return o.a.createElement("th",{key:t,className:e.type.branchName},e.name," (",e.type.branchName,")")},a.renderRow=function(e,t){var n=a.props.metadata;return o.a.createElement("tr",{key:t},n.fields.map((function(t,a){return o.a.createElement("td",{key:a,className:t.type.branchName},e[t.name])})))},a.gotoPage=function(e){a.setState({page:e})},a.changePageSize=function(e){a.setState({pageSize:e,page:0})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.file,a=e.metadata,n=e.onClose,r=e.rows,i=this.state,l=i.page,c=i.pageSize;document.title=t.name;var s=Math.ceil(r.length/c);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"page-header"},o.a.createElement("div",{className:"float-right"},o.a.createElement("button",{onClick:n},"X")),o.a.createElement("h1",null,t.name,", ",this.humanSize(t.size),","," last modified on ",t.lastModifiedDate.toString())),o.a.createElement("div",{id:"table-scroll"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,a.fields.map(this.renderHeader))),o.a.createElement("tbody",null,this.renderRows()))),o.a.createElement("div",{id:"page-footer"},o.a.createElement(m,{page:l,pageCount:s,pageSize:c,gotoPage:this.gotoPage,changePageSize:this.changePageSize})))}},{key:"renderRows",value:function(){for(var e=this.props.rows,t=[],a=this.state,n=a.page,o=a.pageSize,r=n*o,i=Math.min(r+o,e.length),l=r;l<i;l++)t.push(e[l]);return t.map(this.renderRow)}},{key:"humanSize",value:function(e){return e>=1073741824?e=(e/1073741824).toFixed(2)+" GB":e>=1048576?e=(e/1048576).toFixed(2)+" MB":e>=1024?e=(e/1024).toFixed(2)+" KB":e>1?e+=" bytes":1===e?e+=" byte":e="0 bytes",e}}]),t}(o.a.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleData=function(e,t,n){a.file=e,a.metadata=t,a.rows=n,a.forceUpdate()},a.handleClose=function(){a.file=null,a.metadata=null,a.rows=null,a.forceUpdate()},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.file,t=this.metadata,a=this.rows;return e&&t?o.a.createElement(f,{file:e,metadata:t,rows:a,onClose:this.handleClose}):o.a.createElement(d,{onData:this.handleData})}}]),t}(o.a.Component);var b=function(){return o.a.createElement(v,null)};a(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.76b6dd88.chunk.js.map