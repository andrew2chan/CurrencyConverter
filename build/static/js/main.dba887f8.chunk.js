(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),u=n.n(r),l=(n(12),n(3)),i=n(4),s=n(6),o=n(5),f=(n(13),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setDifferentBaseLeft=function(e,t){fetch("https://api.exchangeratesapi.io/latest?base="+e).then(function(e){return e.json()}).then(function(e){a.setState({currencyValuesLeft:e},function(){a.calculateNewValues(t)})},function(e){console.log(e)})},a.setDifferentBaseRight=function(e,t){fetch("https://api.exchangeratesapi.io/latest?base="+e).then(function(e){return e.json()}).then(function(e){a.setState({currencyValuesRight:e},function(){a.calculateNewValues(t)})},function(e){console.log(e)})},a.calculateNewValues=function(e){1===e||3===e?a.setState({valueRight:a.state.currencyValuesLeft.rates[a.state.currentlySelectedRight]*a.state.valueLeft}):2!==e&&4!==e||a.setState({valueLeft:a.state.currencyValuesRight.rates[a.state.currentlySelectedLeft]*a.state.valueRight})},a.recalculateCurrencyLeft=function(e){a.setState({valueLeft:e.target.valueAsNumber},function(){a.calculateNewValues(1)})},a.recalculateCurrencyRight=function(e){a.setState({valueRight:e.target.valueAsNumber},function(){a.calculateNewValues(2)})},a.recalculateCurrencyDropLeft=function(e){a.setState({currentlySelectedLeft:e.target.value},function(){a.setDifferentBaseLeft(a.state.currentlySelectedLeft,3)})},a.recalculateCurrencyDropRight=function(e){a.setState({currentlySelectedRight:e.target.value},function(){a.setDifferentBaseRight(a.state.currentlySelectedRight,4)})},a.state={currencyType:1,currencyValuesLeft:{},currencyValuesRight:{},currentlySelectedLeft:"CAD",currentlySelectedRight:"CAD",valueLeft:1,valueRight:1,regionCodeReturn:["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setDifferentBaseLeft(this.state.currentlySelectedLeft,5),this.setDifferentBaseRight(this.state.currentlySelectedRight,5)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("select",{name:"currency1",id:"currency1",value:this.state.currentlySelectedLeft,onChange:this.recalculateCurrencyDropLeft},this.state.regionCodeReturn.map(function(e){return c.a.createElement("option",{value:e,key:e},e)})),c.a.createElement("input",{type:"number",onChange:this.recalculateCurrencyLeft,value:this.state.valueLeft,id:"1",min:"0"}),c.a.createElement("input",{type:"number",onChange:this.recalculateCurrencyRight,value:this.state.valueRight,id:"2",min:"0"}),c.a.createElement("select",{name:"currency2",id:"currency2",value:this.state.currentlySelectedRight,onChange:this.recalculateCurrencyDropRight},this.state.regionCodeReturn.map(function(e){return c.a.createElement("option",{value:e,key:e},e)})),c.a.createElement("p",null,"*Rates may not be entirely accurate because of the API"))}}]),n}(c.a.Component)),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),r(e),u(e)})};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),h()},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.dba887f8.chunk.js.map