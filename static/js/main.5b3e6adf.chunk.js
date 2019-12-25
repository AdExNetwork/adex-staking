(this["webpackJsonpadex-staking-ui"]=this["webpackJsonpadex-staking-ui"]||[]).push([[0],{181:function(e,t,n){e.exports=n.p+"static/media/adex-staking.bf64bad2.svg"},197:function(e,t,n){e.exports=n(323)},202:function(e,t,n){},204:function(e,t){},212:function(e,t){},214:function(e,t){},246:function(e,t){},323:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=(n(202),n(21)),s=n.n(l),u=n(43),c=n(33),d=n(387),p=n(184),m=n(393),y=n(179),b=n.n(y),f=n(177),w=n.n(f),v=n(178),g=n.n(v),x=n(180),E=n.n(x),h={primary:{main:"#1B75BC",contrastText:"#fff"},accentOne:{main:"#57467B",contrastText:"#fff"},accentTwo:{main:"#7CB4B8",contrastText:"#fff"},grey:{main:"#3f3e3e",contrastText:"#fff"},error:w.a,warning:g.a,first:b.a,contrastThreshold:3,tonalOffset:.2,text:E.a},T=Object(p.a)({typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:13},palette:Object(u.a)({},h),overrides:{MuiButton:{root:{borderRadius:0},outlined:{borderRadius:0}},MuiTableCell:{head:{whiteSpace:"nowrap"},root:{whiteSpace:"nowrap"}},MuiPaper:{rounded:{borderRadius:0}},MuiTooltip:{tooltip:{borderRadius:0}}}}),k=Object(m.a)(T,{options:["xs","sm","md","lg","xl"],factor:3}),B=n(388),A=n(389),O=n(371),C=n(375),j=n(384),D=n(386),I=n(382),U=n(383),S=n(385),M=n(381),L=n(394),P=n(391),R=n(396),q=n(395),X=n(374),_=n(325),W=n(324),F=n(390),N=n(183),Y=n.n(N),J=n(188),H=n(185),V=n(377),z=n(380),Z=n(379),$=n(378),G=n(370),K=n(392),Q=n(376),ee=n(187),te=n(181),ne=n.n(te),ae=n(51),re=n(44),oe=n(92),ie=[{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"slasher",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"bytes32",name:"poolId",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"nonce",type:"uint256"}],name:"LogBond",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"bytes32",name:"bondId",type:"bytes32"},{indexed:!1,internalType:"uint64",name:"willUnlock",type:"uint64"}],name:"LogUnbondRequested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"bytes32",name:"bondId",type:"bytes32"}],name:"LogUnbonded",type:"event"},{constant:!1,inputs:[{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes32",name:"poolId",type:"bytes32"},{internalType:"uint256",name:"nonce",type:"uint256"}],internalType:"struct BondLibrary.Bond",name:"bond",type:"tuple"}],name:"addBond",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"bonds",outputs:[{internalType:"bool",name:"active",type:"bool"},{internalType:"uint64",name:"slashedAtStart",type:"uint64"},{internalType:"uint64",name:"willUnlock",type:"uint64"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes32",name:"poolId",type:"bytes32"},{internalType:"uint256",name:"nonce",type:"uint256"}],internalType:"struct BondLibrary.Bond",name:"bond",type:"tuple"}],name:"getWithdrawAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes32",name:"poolId",type:"bytes32"},{internalType:"uint256",name:"nonce",type:"uint256"}],internalType:"struct BondLibrary.Bond",name:"bond",type:"tuple"}],name:"requestUnbond",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"poolId",type:"bytes32"},{internalType:"uint256",name:"pts",type:"uint256"}],name:"slash",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"slashPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"slasherAddr",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenAddr",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes32",name:"poolId",type:"bytes32"},{internalType:"uint256",name:"nonce",type:"uint256"}],internalType:"struct BondLibrary.Bond",name:"bond",type:"tuple"}],name:"unbond",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],le=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],se="0x4470bb87d77b963a013db939be332f927f2b992e",ue="0xb2cdea5147f7d51f5f49f2bd91fec04b6999a0fe",ce=1e4,de=3e4,pe=Object(ae.getDefaultProvider)(),me=new ae.Contract(ue,ie,pe),ye=new ae.Contract(se,le,pe),be="https://min-api.cryptocompare.com/data/price?fsym=ADX&tsyms=BTC,USD,EUR",fe=30,we=[{label:"Validator Tom",id:Object(re.id)("validator:0x2892f6C41E0718eeeDd49D98D648C789668cA67d"),selectable:!0},{label:"Validator Jerry",id:Object(re.id)("validator:0xce07CbB7e054514D590a0262C93070D838bFBA2e"),selectable:!1}],ve=Object(re.bigNumberify)(0),ge={poolId:"",amount:ve},xe={loaded:!1,userBonds:[],userBalance:ve,totalStake:ve};function Ee(e){var t=e.title,n=e.subtitle,a=e.extra,o=e.loaded;return r.a.createElement(H.a,{elevation:3,style:{margin:k.spacing(1)}},r.a.createElement("div",{style:{padding:k.spacing(2),minHeight:"75px"}},r.a.createElement(ee.a,{variant:"h5"},n),a?r.a.createElement(ee.a,{color:"primary",variant:"h6"},a):r.a.createElement(r.a.Fragment,null),r.a.createElement(ee.a,{color:"textSecondary",variant:"subtitle2"},t)),o?r.a.createElement(r.a.Fragment,null):r.a.createElement(G.a,null))}function he(e){var t=e.stats,n=e.onRequestUnbond,o=e.onUnbond,i=t.userBonds.filter((function(e){return"Active"===e.status})).map((function(e){return e.amount})).reduce((function(e,t){return e.add(t)}),ve),l=Object(a.useState)({}),s=Object(c.a)(l,2),u=s[0],d=s[1];Object(a.useEffect)((function(){fetch(be).then((function(e){return e.json()})).then(d).catch(console.error)}),[]);var p=function(e){if(!e)return null;if(!u.USD)return null;var t=e.toNumber(10)/ce*u.USD;return"".concat(t.toFixed(2)," USD")},m={fontWeight:"bold"};return r.a.createElement(O.a,{container:!0,style:{padding:k.spacing(4),maxWidth:"1200px",margin:"auto"}},r.a.createElement(O.a,{item:!0,xs:3},Ee({loaded:t.loaded,title:"Total ADX staked",extra:p(t.totalStake),subtitle:Te(t.totalStake)+" ADX"})),r.a.createElement(O.a,{item:!0,xs:3},Ee({loaded:t.loaded,title:"Your total active stake",extra:p(i),subtitle:Te(i)+" ADX"})),r.a.createElement(O.a,{item:!0,xs:3},Ee({loaded:t.loaded,title:"Your balance",subtitle:t.userBalance?Te(t.userBalance)+" ADX":"",extra:p(t.userBalance)})),r.a.createElement(O.a,{item:!0,xs:3},Ee({loaded:t.loaded,title:"Your total reward",extra:"0.00 USD",subtitle:"0.00 DAI"})),r.a.createElement(U.a,{xs:12},r.a.createElement(j.a,{"aria-label":"Bonds table",style:{marginTop:k.spacing(2)}},r.a.createElement(S.a,null,r.a.createElement(M.a,null,r.a.createElement(I.a,{style:m},"Bond amount"),r.a.createElement(I.a,{style:m,align:"right"},"Reward to collect"),r.a.createElement(I.a,{style:m,align:"right"},"Pool"),r.a.createElement(I.a,{style:m,align:"right"},"Status"),r.a.createElement(I.a,{style:m,align:"right"},"Actions"))),r.a.createElement(D.a,null,(t.userBonds||[]).map((function(e){var t=we.find((function(t){return t.id===e.poolId})),a=t?t.label:e.poolId;return r.a.createElement(M.a,{key:ke(e)},r.a.createElement(I.a,null,Te(e.amount)," ADX"),r.a.createElement(I.a,{align:"right"},"0.00 DAI"),r.a.createElement(I.a,{align:"right"},a),r.a.createElement(I.a,{align:"right"},function(e){if("UnbondRequested"===e.status){var t=e.willUnlock.getTime(),n=Date.now();if(t>n){var a=Math.ceil((t-n)/864e5);return"Can unbond in ".concat(a," days")}return"Can unbond"}return e.status}(e)),r.a.createElement(I.a,{align:"right"},"Active"===e.status?r.a.createElement(C.a,{color:"primary",onClick:function(){return n(e)}},"Request Unbond"):r.a.createElement(C.a,{disabled:e.willUnlock.getTime()>Date.now(),onClick:function(){return o(e)},color:"secondary"},"Unbond")))}))))))}function Te(e){return(e.toNumber(10)/ce).toFixed(2)}function ke(e){var t=e.owner,n=e.amount,a=e.poolId,r=e.nonce;return Object(re.keccak256)(re.defaultAbiCoder.encode(["address","address","uint","bytes32","uint"],[ue,t,n,a,r]))}function Be(){var e,t,n,a,r,o,i,l;return s.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(window.web3){d.next=2;break}return d.abrupt("return",{loaded:!0,userBonds:[],userBalance:ve});case 2:return e=new oe.Web3Provider(window.web3.currentProvider),t=e.getSigner(),d.next=6,s.a.awrap(t.getAddress());case 6:return n=d.sent,d.next=9,s.a.awrap(Promise.all([ye.balanceOf(n),e.getLogs({fromBlock:0,address:ue,topics:[null,Object(re.hexZeroPad)(n,32)]})]));case 9:return a=d.sent,r=Object(c.a)(a,2),o=r[0],i=r[1],l=i.reduce((function(e,t){var n=t.topics[0],a=me.interface.events;if(n===a.LogBond.topic){var r=me.interface.parseLog(t).values,o={owner:r.owner,amount:r.amount,poolId:r.poolId,nonce:r.nonce};e.push(Object(u.a)({id:ke(o),status:"Active"},o))}else if(n===a.LogUnbondRequested.topic){var i=me.interface.parseLog(t).values,l=i.bondId,s=i.willUnlock,c=e.find((function(e){return e.id===l}));c.status="UnbondRequested",c.willUnlock=new Date(1e3*s)}else if(n===a.LogUnbonded.topic){var d=me.interface.parseLog(t).values.bondId;e.find((function(e){return e.id===d})).status="Unbonded"}return e}),[]),d.abrupt("return",{loaded:!0,userBonds:l,userBalance:o});case 15:case"end":return d.stop()}}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=r.a.useState(null),l=Object(c.a)(i,2),p=l[0],m=l[1],y=Object(a.useState)(xe),b=Object(c.a)(y,2),f=b[0],w=b[1],v=function(){return function(){var e,t,n,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(Promise.all([ye.balanceOf(ue),Be()]));case 2:return e=r.sent,t=Object(c.a)(e,2),n=t[0],a=t[1],r.abrupt("return",Object(u.a)({totalStake:n},a));case 7:case"end":return r.stop()}}))}().then(w).catch((function(e){return console.error("loadStats",e)}))};Object(a.useEffect)((function(){v();var e=setInterval(v,de);return function(){return clearInterval(e)}}),[]);var g=function(e){return function(t){var n,a,r,o,i,l,u,c;return s.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return n=t.amount,a=t.poolId,r=t.nonce,o=new oe.Web3Provider(window.web3.currentProvider),i=o.getSigner(),l=new ae.Contract(ue,ie,i),u=e?l.unbond.bind(l):l.requestUnbond.bind(l),d.next=7,s.a.awrap(u([n,a,r||ve]));case 7:return c=d.sent,d.next=10,s.a.awrap(c.wait());case 10:case"end":return d.stop()}}))}},x=g(!1),E=g(!0);return r.a.createElement(d.a,{theme:k},r.a.createElement(B.a,{position:"static"},r.a.createElement(A.a,null,r.a.createElement("img",{height:"40vh",src:ne.a,alt:"logo"}),r.a.createElement(F.a,{disabled:!f.loaded,onClick:function(){return o(!0)},variant:"extended",color:"secondary",style:{position:"absolute",right:"5%",top:"50%"}},r.a.createElement(Y.a,{style:{margin:k.spacing(1)}}),"Stake your ADX"))),he({stats:f,onRequestUnbond:m,onUnbond:E}),function(e){var t=e.toUnbond,n=e.onDeny,a=e.onConfirm;return r.a.createElement(V.a,{open:!!t,onClose:n},r.a.createElement($.a,{id:"alert-dialog-title"},"Are you sure?"),r.a.createElement(Z.a,null,"Are you sure you want to request unbonding of"," ",Te(t?t.amount:ve)," ADX?",r.a.createElement("br",null),r.a.createElement("br",null),"Please be aware:",r.a.createElement("ol",null,r.a.createElement("li",null,"It will take ",fe," days before you will be able to withdraw your ADX!"),r.a.createElement("li",null,"You will not receive staking rewards for this amount in this period."))),r.a.createElement(z.a,null,r.a.createElement(C.a,{onClick:n,autoFocus:!0,color:"primary"},"Cancel"),r.a.createElement(C.a,{onClick:a,color:"primary"},"Unbond")))}({toUnbond:p,onDeny:function(){return m(null)},onConfirm:function(){p&&x(p),m(null)}}),r.a.createElement(_.a,{open:n,onClose:function(){return o(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"},closeAfterTransition:!0,BackdropComponent:W.a,BackdropProps:{timeout:300}},r.a.createElement(J.a,{in:n},function(e){var t=e.maxAmount,n=e.onNewBond,o=e.pools,i=Object(a.useState)(ge),l=Object(c.a)(i,2),s=l[0],d=l[1],p=Object(a.useState)(!1),m=Object(c.a)(p,2),y=m[0],b=m[1],f={minWidth:"180px"};return r.a.createElement(H.a,{elevation:2,style:{width:"500px",padding:k.spacing(2,4,3)}},r.a.createElement("h2",null,"Create a bond"),r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement(L.a,{required:!0,label:"ADX amount",type:"number",style:f,value:s.amount.toNumber()/ce,onChange:function(e){return d(Object(u.a)({},s,{amount:(n=t,a=Object(re.bigNumberify)(Math.abs(Math.floor(e.target.value*ce))),n.lt(a)?n:a)}));var n,a}}),r.a.createElement(ee.a,{variant:"subtitle2"},"Max amount:",r.a.createElement(C.a,{onClick:function(e){return d(Object(u.a)({},s,{amount:t}))}},Te(t)," ADX"))),r.a.createElement(O.a,{item:!0,xs:6},r.a.createElement(X.a,{required:!0},r.a.createElement(q.a,null,"Pool"),r.a.createElement(P.a,{style:f,value:s.poolId,onChange:function(e){return d(Object(u.a)({},s,{poolId:e.target.value}))}},r.a.createElement(R.a,{value:""},r.a.createElement("em",null,"None")),o.map((function(e){var t=e.label,n=e.id;return r.a.createElement(R.a,{key:n,value:n},t)}))))),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(Q.a,{style:{userSelect:"none"},label:"I understand I am locking up my ADX for at least ".concat(fe," days and I am familiar with the staking terms."),control:r.a.createElement(K.a,{checked:y,onChange:function(e){return b(e.target.checked)}})})),r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(X.a,{style:{display:"flex"}},r.a.createElement(C.a,{disabled:!(s.poolId&&y&&s.amount.gt(ve)),color:"primary",variant:"contained",onClick:function(){return n(s)}},"Stake ADX")))))}({pools:we.filter((function(e){return e.selectable})),maxAmount:f.userBalance,onNewBond:function(e){o(!1),function(e,t){var n,a,r,o,i,l,u,c,d;s.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(n=t.amount,a=t.poolId,r=t.nonce,a){p.next=3;break}return p.abrupt("return");case 3:if(e.userBalance){p.next=5;break}return p.abrupt("return");case 5:if(!n.gt(e.userBalance)){p.next=7;break}return p.abrupt("return");case 7:return o=new oe.Web3Provider(window.web3.currentProvider),i=o.getSigner(),l=new ae.Contract(ue,ie,i),u=new ae.Contract(se,le,i),p.t0=s.a,p.t1=u,p.next=15,s.a.awrap(i.getAddress());case 15:return p.t2=p.sent,p.t3=ue,p.t4=p.t1.allowance.call(p.t1,p.t2,p.t3),p.next=20,p.t0.awrap.call(p.t0,p.t4);case 20:if(c=p.sent,d=[],c.eq(n)){p.next=34;break}if(!c.gt(ve)){p.next=29;break}return p.t5=d,p.next=27,s.a.awrap(u.approve(ue,ve,{gasLimit:8e4}));case 27:p.t6=p.sent,p.t5.push.call(p.t5,p.t6);case 29:return p.t7=d,p.next=32,s.a.awrap(u.approve(ue,n,{gasLimit:8e4}));case 32:p.t8=p.sent,p.t7.push.call(p.t7,p.t8);case 34:return p.t9=d,p.next=37,s.a.awrap(l.addBond([n,a,r||ve],{gasLimit:11e4}));case 37:return p.t10=p.sent,p.t9.push.call(p.t9,p.t10),p.next=41,s.a.awrap(Promise.all(d.map((function(e){return e.wait()}))));case 41:case"end":return p.stop()}}))}(f,e)}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[197,1,2]]]);
//# sourceMappingURL=main.5b3e6adf.chunk.js.map