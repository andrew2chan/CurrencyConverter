(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),u=n(3),i=n.n(u),l=(n(13),n(4)),s=n(5),o=n(7),f=n(6),h=(n(14),function(e){Object(o.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).setDifferentBaseLeft=function(e,t){fetch("https://api.exchangeratesapi.io/latest?base="+e).then((function(e){return e.json()})).then((function(e){c.setState({currencyValuesLeft:e},(function(){c.calculateNewValues(t)}))}),(function(e){console.log(e)}))},c.setDifferentBaseRight=function(e,t){fetch("https://api.exchangeratesapi.io/latest?base="+e).then((function(e){return e.json()})).then((function(e){c.setState({currencyValuesRight:e},(function(){c.calculateNewValues(t)}))}),(function(e){console.log(e)}))},c.calculateNewValues=function(e){1===e||3===e?c.setState({valueRight:c.state.currencyValuesLeft.rates[c.state.currentlySelectedRight]*c.state.valueLeft}):2!==e&&4!==e||c.setState({valueLeft:c.state.currencyValuesRight.rates[c.state.currentlySelectedLeft]*c.state.valueRight})},c.recalculateCurrencyLeft=function(e){c.setState({valueLeft:e.target.valueAsNumber},(function(){c.calculateNewValues(1)}))},c.recalculateCurrencyRight=function(e){c.setState({valueRight:e.target.valueAsNumber},(function(){c.calculateNewValues(2)}))},c.recalculateCurrencyDropLeft=function(e){c.setState({currentlySelectedLeft:e.target.value},(function(){c.setDifferentBaseLeft(c.state.currentlySelectedLeft,3)}))},c.recalculateCurrencyDropRight=function(e){c.setState({currentlySelectedRight:e.target.value},(function(){c.setDifferentBaseRight(c.state.currentlySelectedRight,4)}))},c.state={currencyType:1,currencyValuesLeft:{},currencyValuesRight:{},currentlySelectedLeft:"CAD",currentlySelectedRight:"CAD",valueLeft:1,valueRight:1,regionCodeReturn:["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"]},c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setDifferentBaseLeft(this.state.currentlySelectedLeft,5),this.setDifferentBaseRight(this.state.currentlySelectedRight,5)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("select",{name:"currency1",id:"currency1",value:this.state.currentlySelectedLeft,onChange:this.recalculateCurrencyDropLeft,children:this.state.regionCodeReturn.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))}),Object(c.jsx)("input",{type:"number",onChange:this.recalculateCurrencyLeft,value:this.state.valueLeft,id:"1",min:"0"}),Object(c.jsx)("input",{type:"number",onChange:this.recalculateCurrencyRight,value:this.state.valueRight,id:"2",min:"0"}),Object(c.jsx)("select",{name:"currency2",id:"currency2",value:this.state.currentlySelectedRight,onChange:this.recalculateCurrencyDropRight,children:this.state.regionCodeReturn.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))}),Object(c.jsx)("p",{children:"*Rates may not be entirely accurate because of the API"})]})}}]),n}(r.a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),a(e),r(e),u(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.8c31a922.chunk.js.map