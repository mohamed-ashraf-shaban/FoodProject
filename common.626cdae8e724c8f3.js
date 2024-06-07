"use strict";(self.webpackChunkfoodprojct=self.webpackChunkfoodprojct||[]).push([[592],{139:(g,u,a)=>{a.d(u,{e:()=>i});class e extends Error{}e.prototype.name="InvalidTokenError";var p=a(5879),n=a(9862);let i=(()=>{class s{constructor(o){this._httpClient=o,this.role="",null!==localStorage.getItem("userToken")&&this.getProfile()}onLogin(o){return this._httpClient.post("Users/Login",o)}onRequestResetPassword(o){return this._httpClient.post("Users/Reset/Request",{email:o})}onReset(o){return this._httpClient.post("Users/Reset",o)}getProfile(){let c=function r(s,d){if("string"!=typeof s)throw new e("Invalid token specified: must be a string");d||(d={});const o=!0===d.header?0:1,c=s.split(".")[o];if("string"!=typeof c)throw new e(`Invalid token specified: missing part #${o+1}`);let h;try{h=function l(s){let d=s.replace(/-/g,"+").replace(/_/g,"/");switch(d.length%4){case 0:break;case 2:d+="==";break;case 3:d+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function t(s){return decodeURIComponent(atob(s).replace(/(.)/g,(d,o)=>{let c=o.charCodeAt(0).toString(16).toUpperCase();return c.length<2&&(c="0"+c),"%"+c}))}(d)}catch{return atob(d)}}(c)}catch(_){throw new e(`Invalid token specified: invalid base64 for part #${o+1} (${_.message})`)}try{return JSON.parse(h)}catch(_){throw new e(`Invalid token specified: invalid json for part #${o+1} (${_.message})`)}}(localStorage.getItem("userToken"));localStorage.setItem("role",c.userGroup),localStorage.setItem("userName",c.userName),this.getRoll()}getRoll(){null!==localStorage.getItem("userToken")&&localStorage.getItem("role")&&(this.role=localStorage.getItem("role"))}onRegister(o){return this._httpClient.post("Users/Register",o)}onChangePassword(o){return this._httpClient.put("Users/ChangePassword",o)}static#t=this.\u0275fac=function(c){return new(c||s)(p.LFG(n.eN))};static#e=this.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},7862:(g,u,a)=>{a.d(u,{W:()=>l});var e=a(5879),t=a(9862);let l=(()=>{class r{constructor(n){this._HttpClient=n}getTags(){return this._HttpClient.get("tag")}getCategories(){return this._HttpClient.get("Category",{params:{pageSize:100}})}static#t=this.\u0275fac=function(i){return new(i||r)(e.LFG(t.eN))};static#e=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},8783:(g,u,a)=>{a.d(u,{F:()=>l});var e=a(7700),t=a(5879);let l=(()=>{class r{constructor(n,i){this.dialogRef=n,this.data=i,this.categoryName=""}onClose(){this.dialogRef.close()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(e.so),t.Y36(e.WI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-delete-dialog"]],decls:15,vars:2,consts:[[1,"card-auth","py-5"],["src","","alt",""],[1,"d-flex","align-items-center","justify-content-between","mb-5"],[3,"click"],[1,"far","fa-times-circle","text-danger"],[1,"text-center"],["src","./assets/images/avatarThinkingWoman.svg","alt","",1,"w-25"],[1,"my-3"],["cdkFocusInitial","",1,"btn","btn-outline-danger",3,"mat-dialog-close"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"h3",2)(3,"span"),t._uU(4,"Delete"),t.qZA(),t.TgZ(5,"span",3),t.NdJ("click",function(){return s.onClose()}),t._UZ(6,"i",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6),t.TgZ(9,"h3",7),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12,"Are You Sure You Want To Delete This Item ? If You Are Sure Just Click On Delete It"),t.qZA()(),t.TgZ(13,"button",8),t._uU(14,"Delete"),t.qZA()()),2&i&&(t.xp6(10),t.hij("Delete This Item ? ",s.data.name,""),t.xp6(3),t.Q6J("mat-dialog-close",s.data))},dependencies:[e.ZT]})}return r})()},6537:(g,u,a)=>{a.d(u,{d:()=>t});var e=a(5879);let t=(()=>{class l{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||l)};static#e=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-no-data"]],decls:8,vars:0,consts:[["id","no-data"],["src","../../../../assets/images/avatarThinkingWoman.svg","alt","No Data"],[1,"content-text"],[1,"text-darkgrey"],[1,"text-secondry"]],template:function(n,i){1&n&&(e.TgZ(0,"section",0)(1,"div"),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"div",2)(4,"h1",3),e._uU(5,"No Data!"),e.qZA(),e.TgZ(6,"p",4),e._uU(7,"no data to show please added new items to show"),e.qZA()()())},styles:["#no-data[_ngcontent-%COMP%], #no-data[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]})}return l})()},3140:(g,u,a)=>{a.d(u,{e:()=>l});var e=a(5879),t=a(9862);let l=(()=>{class r{constructor(n){this._httpClient=n}onAddToFav(n){return this._httpClient.post("userRecipe",{recipeId:n})}getAllFav(){return this._httpClient.get("userRecipe")}deleteFav(n){return this._httpClient.delete(`userRecipe/${n}`)}static#t=this.\u0275fac=function(i){return new(i||r)(e.LFG(t.eN))};static#e=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);