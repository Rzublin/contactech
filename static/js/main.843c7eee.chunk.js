(this.webpackJsonpcontactech=this.webpackJsonpcontactech||[]).push([[0],{17:function(e,a,n){e.exports=n(26)},26:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(11),o=n.n(l),c=n(3),i=n(1),m=n(2);function d(){var e=Object(i.a)(['\n  background-color: #006989ff;\n  color: #fff;\n  margin-bottom: 15px;\n  text-align: center;\n  padding: 2px 0px;\n  font-family: "", sans-serif;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .logo {\n    margin-right: 5px;\n  }\n']);return d=function(){return e},e}var u=m.b.header(d()),s=function(){return r.a.createElement(u,null,r.a.createElement("img",{src:"/contactech/favicon-32x32.png",alt:"Logo",className:"logo"}),r.a.createElement("h1",null,"CONTACTECH"))};function p(){var e=Object(i.a)([""]);return p=function(){return e},e}m.b.div(p());function f(){var e=Object(i.a)(["\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);\n  display: flex;\n  &:hover {\n    background-color: #eeeeee;\n  }\n  .avatar-img {\n    padding: 5px;\n    object-fit: contain;\n    //box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.5);\n  }\n  .info {\n    margin-left: 10px;\n    .fullname {\n      font-weight: bold;\n      text-transform: capitalize;\n    }\n    .email {\n    }\n  }\n  .actions {\n    .icon {\n      margin: 16px 5px;\n      transition: all 0.1s ease;\n\n      &:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n      }\n    }\n  }\n"]);return f=function(){return e},e}var b=m.b.div(f()),g=Object(t.createContext)(),x=function(e){var a=e.contact,n=a.firstname,l=a.lastname,o=a.email,c=a.id,i=a.avatar,m=e.editContact,d=Object(t.useContext)(g).deleteContact;return r.a.createElement(b,null,r.a.createElement("img",{className:"avatar-img",src:i,alt:"Avatar from ".concat(n," ").concat(l)}),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"fullname"},"".concat(n," ").concat(l)),r.a.createElement("p",{className:"email"},"".concat(o))),r.a.createElement("div",{className:"actions"},r.a.createElement("img",{className:"icon",src:"/contactech/edit-icon.svg",alt:"Edit Icon",onClick:function(){return m(n,l,o,c,i)}}),r.a.createElement("img",{className:"icon",src:"/contactech/delete-icon.svg",alt:"Delete Icon",onClick:function(){return d(c)}})))},v=function(e){var a=e.editContact,n=Object(t.useContext)(g).state;return r.a.createElement("div",null,n.length>0&&n.map((function(e){return r.a.createElement(x,{key:e.id,contact:e,editContact:a})})))};function E(){var e=Object(i.a)(["\n  text-align: center;\n  padding: 20px 0px;\n  border-top: 1px solid #e7e7e9;\n  margin-top: 20px;\n  color: #6e6d7a;\n  flex-shrink: 0;\n"]);return E=function(){return e},e}var h=m.b.footer(E()),C=function(){return r.a.createElement(h,null,r.a.createElement("div",null,"\xa9 2020 Raphael Z\xfcblin. All rights reserved."))},y=n(9),O=n(16);var j=function(e,a){switch(a.type){case"ADD_CONTACT":return[].concat(Object(O.a)(e),[{firstname:a.payload.firstname,lastname:a.payload.lastname,email:a.payload.email,avatar:"https://api.adorable.io/avatars/50/".concat(a.payload.firstname+a.payload.lastname,"@adorable"),id:Date.now()}]);case"DELETE_CONTACT":return e.filter((function(e){return e.id!==a.payload.id}));case"GET_CONTACTS":return Object(y.a)(Object(y.a)({},e),{},{contacts:a.payload});case"UPDATE_CONTACT":return e.map((function(e){return e.id===a.payload.id?{id:e.id,firstname:a.payload.firstname,lastname:a.payload.lastname,email:a.payload.email,avatar:"https://api.adorable.io/avatars/50/".concat(a.payload.firstname+a.payload.lastname,"@adorable")}:e}));default:return e}},T=function(e){var a=[{id:1,firstname:"Hans",lastname:"Musterman",email:"hans@muster.de",avatar:"https://api.adorable.io/avatars/50/hansmusterman@adorable"},{id:2,firstname:"Hanna",lastname:"Musterman",email:"hanna@muster.de",avatar:"https://api.adorable.io/avatars/50/hannamusterman@adorable"},{id:3,firstname:"Hagrid",lastname:"Musterman",email:"hagrid@muster.de",avatar:"https://api.adorable.io/avatars/50/hagridmusterman@adorable"}],n=Object(t.useReducer)(j,[],(function(){var e=localStorage.getItem("contactListStorage");return e?JSON.parse(e):a})),l=Object(c.a)(n,2),o=l[0],i=l[1];Object(t.useEffect)((function(){localStorage.setItem("contactListStorage",JSON.stringify(o))}),[o]);return r.a.createElement(g.Provider,{value:{state:o,deleteContact:function(e){i({type:"DELETE_CONTACT",payload:{id:e}})},getContacts:function(){i({type:"GET_CONTACTS",payload:[]})},updateContact:function(e,a,n,t){i({type:"UPDATE_CONTACT",payload:{firstname:e,lastname:a,email:n,id:t}})},addContact:function(e,a,n){i({type:"ADD_CONTACT",payload:{firstname:e,lastname:a,email:n}})}}},e.children)};function N(){var e=Object(i.a)(["\n  form {\n    padding: 10px 0px;\n    input {\n      margin: 5px auto;\n      padding: 10px;\n      width: 100%;\n      display: inline-block;\n      box-sizing: border-box;\n    }\n    button {\n      margin-top: 10px;\n      background-color: #ff9d17ff;\n      border: none;\n      border-radius: 4px;\n      padding: 10px 20px;\n      color: #222;\n    }\n    .btn {\n      text-align: center;\n    }\n  }\n"]);return N=function(){return e},e}var A=m.b.div(N()),D=function(e){var a=e.actionType,n=e.contact,l=e.toggleModal,o=Object(t.useState)(n?n.firstname:""),i=Object(c.a)(o,2),m=i[0],d=i[1],u=Object(t.useState)(n?n.lastname:""),s=Object(c.a)(u,2),p=s[0],f=s[1],b=Object(t.useState)(n?n.email:""),x=Object(c.a)(b,2),v=x[0],E=x[1],h=Object(t.useContext)(g),C=h.addContact,y=h.updateContact;return r.a.createElement(A,null,r.a.createElement("h3",null,"ADD"===a?"Add new Contact":"Update Contact"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Firstname "),r.a.createElement("input",{type:"text",value:m,name:"firstname",onChange:function(e){return d(e.target.value)},placeholder:"Enter firstname..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Lastname"),r.a.createElement("input",{type:"text",value:p,name:"lastname",onChange:function(e){return f(e.target.value)},placeholder:"Enter lastname..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",value:v,name:"email",onChange:function(e){return E(e.target.value)},placeholder:"Enter email..."})),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),m&&p&&v&&("ADD"===a?(C(m,p,v),d(""),f(""),E("")):"UPDATE"===a&&(y(m,p,v,n.id),d(""),f(""),E(""),l()))}},"ADD"===a?"Add":"Update"))))};function w(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n"]);return w=function(){return e},e}var k=m.b.div(w()),S=n(15),M=n.n(S);function _(e){var a=e.toggleModal;return r.a.createElement(k,{onClick:a})}_.proTypes={toggleModal:M.a.func.isRequired};var z=_;function L(){var e=Object(i.a)(["\n  position: fixed;\n  z-index: 500;\n  background-color: white;\n  width: 70%;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px black;\n  padding: 16px;\n  left: 15%;\n  top: 30%;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out;\n\n  @media (min-width: 600px) {\n    width: 500px;\n    left: calc(50% - 250px);\n  }\n"]);return L=function(){return e},e}var U=m.b.div(L());var I=function(e){var a=e.children,n=e.toggleModal;return r.a.createElement(t.Fragment,null,r.a.createElement(z,{toggleModal:n}),r.a.createElement(U,null,a))};var P=function(){var e=Object(t.useState)(!1),a=Object(c.a)(e,2),n=a[0],l=a[1],o=Object(t.useState)(""),i=Object(c.a)(o,2),m=i[0],d=i[1],u=function(){l(!n)};return r.a.createElement(T,null,r.a.createElement(s,null),n&&r.a.createElement(I,{toggleModal:u},r.a.createElement(D,{actionType:"UPDATE",contact:m,toggleModal:u})),r.a.createElement("div",{className:"main container"},r.a.createElement(v,{editContact:function(e,a,t,r,o){l(!n),d({firstname:e,lastname:a,email:t,id:r,avatar:o})}}),r.a.createElement(D,{actionType:"ADD"})),r.a.createElement(C,null))};function $(){var e=Object(i.a)(["\n  $aero-blue: #c7efcfff;\n  $beige: #eef5dbff;\n  $orange-peel: #ff9d17ff;\n  $blue-sapphire: #006989ff;\n  $cg-blue: #007090ff;\n  html, body{\n    height: 100%;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n  }\n  .container{\n    max-width: 900px;\n    margin: auto;\n    padding: 10px;\n  }\n  .main{\n    flex: 1 0 auto;\n  }\n"]);return $=function(){return e},e}var H=Object(m.a)($());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(P,null))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.843c7eee.chunk.js.map