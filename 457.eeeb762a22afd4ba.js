"use strict";(self.webpackChunkfoodprojct=self.webpackChunkfoodprojct||[]).push([[457],{5457:(S,d,i)=>{i.r(d),i.d(d,{CategoriesModule:()=>A});var g=i(6814),p=i(4581),e=i(5879),c=i(7700),s=i(6223);let u=(()=>{class o{constructor(t){this.dialogRef=t,this.categoryName=""}onClose(){this.dialogRef.close()}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(c.so))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-edite-category"]],decls:14,vars:2,consts:[[1,"card-auth","py-5"],["src","","alt",""],[1,"d-flex","align-items-center","justify-content-between","mb-5"],[3,"click"],[1,"far","fa-times-circle","text-danger"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fas","fa-location-arrow"],["type","text","placeholder","Enter Your category Name","aria-label","Category Name","aria-describedby","basic-addon1","name","categoryName",1,"form-control",3,"ngModel","ngModelChange"],["cdkFocusInitial","",1,"btn","bg-main","text-white","w-100",3,"mat-dialog-close"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"h3",2)(3,"span"),e._uU(4,"Add Category"),e.qZA(),e.TgZ(5,"span",3),e.NdJ("click",function(){return n.onClose()}),e._UZ(6,"i",4),e.qZA()(),e.TgZ(7,"form")(8,"div",5)(9,"span",6),e._UZ(10,"i",7),e.qZA(),e.TgZ(11,"input",8),e.NdJ("ngModelChange",function(l){return n.categoryName=l}),e.qZA()(),e.TgZ(12,"button",9),e._uU(13,"Save"),e.qZA()()()),2&a&&(e.xp6(11),e.Q6J("ngModel",n.categoryName),e.xp6(1),e.Q6J("mat-dialog-close",n.categoryName))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,c.ZT,s.On,s.F]})}return o})();var m=i(8783),h=i(9862);let C=(()=>{class o{constructor(t){this._HttpClient=t}getCategories(t){return this._HttpClient.get("Category",{params:t})}addCategories(t){return this._HttpClient.post("Category",{name:t})}deleteCategory(t){return this._HttpClient.delete(`Category/${t}`)}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(h.eN))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var f=i(2425),y=i(1216);function b(o,N){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"th"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"th"),e._uU(7),e.qZA(),e.TgZ(8,"th")(9,"a",17),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.openDeleteDialog(r))}),e._UZ(10,"i",18),e.qZA()()()}if(2&o){const t=N.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.xi3(5,3,t.creationDate,"dd-mmy-yyyy")),e.xp6(3),e.Oqu(t.modificationDate)}}const Z=function(){return[5,10,25]};let T=(()=>{class o{constructor(t,a,n){this._CategoriesService=t,this.dialog=a,this._ToastrService=n,this.searchValue="",this.pageNumber=1,this.pageSize=5,this.tableData=[]}ngOnInit(){this.getTableData()}getTableData(){this._CategoriesService.getCategories({pageSize:this.pageSize,pageNumber:this.pageNumber,name:this.searchValue}).subscribe({next:a=>{console.log(a),this.tableResponse=a,this.tableData=this.tableResponse?.data},error:()=>{},complete:()=>{let a=this.tableResponse?.totalNumberOfRecords;void 0!==a?localStorage.setItem("categories",a.toLocaleString()):localStorage.setItem("categories","0")}})}handlePageEvent(t){console.log(t),this.pageNumber=t.pageIndex,this.pageSize=t.pageSize,this.getTableData()}addDialog(){this.dialog.open(u,{data:{},width:"50%"}).afterClosed().subscribe(a=>{console.log(a),a&&this.onAddNewCategory(a)})}onResetRequest(t){throw new Error("Method not implemented.")}onAddNewCategory(t){this._CategoriesService.addCategories(t).subscribe({next:a=>{console.log(a)},error:a=>{},complete:()=>{this._ToastrService.success("category added successfully","ok")}})}openDeleteDialog(t){console.log(t),this.dialog.open(m.F,{data:t,width:"50%"}).afterClosed().subscribe(n=>{n&&this.onDeleteNewCategory(n.id)})}onDeleteNewCategory(t){this._CategoriesService.deleteCategory(t).subscribe({next:a=>{console.log(a)},error:a=>{},complete:()=>{this._ToastrService.success("category added successfully","ok"),this.getTableData()}})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(C),e.Y36(c.uw),e.Y36(f._W))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-categories"]],decls:36,vars:7,consts:[[1,"header-page","my-3"],[1,"container"],[1,"row"],[1,"col-md-9","d-flex","align-items-center"],[1,"px-5"],[1,"col-md-3"],["src","../../../assets/images/menu-avatar.svg","alt","",1,"w-75","mb-0"],[1,"table-header","mt-3"],[1,"d-flex","align-items-center","justify-content-between","gap-5"],["type","text","placeholder","Search Here And Press Enter ",1,"form-control","rounded","shadow-sm",3,"ngModel","ngModelChange","keyup.enter"],[1,"btn","btn-success",3,"click"],[1,"py-4"],[1,"table","table-striped","text-center"],[4,"ngFor","ngForOf"],[1,"w-50","mx-auto","mt-5"],["aria-label","Select page",1,"demo-paginator","w-75","mx-auto",3,"length","pageSize","pageSizeOptions","pageIndex","page"],["paginator",""],[3,"click"],[1,"far","fa-trash-alt","text-danger"]],template:function(a,n){1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2"),e._uU(6,"Categories "),e.TgZ(7,"span"),e._uU(8,"Items!"),e.qZA()(),e.TgZ(9,"p"),e._uU(10," You can now add your items that any user can order it from the Application and you can edit "),e.qZA()()(),e.TgZ(11,"div",5)(12,"div"),e._UZ(13,"img",6),e.qZA()()()()(),e.TgZ(14,"section",7)(15,"div",1)(16,"div",8)(17,"input",9),e.NdJ("ngModelChange",function(l){return n.searchValue=l})("keyup.enter",function(){return n.getTableData()}),e.qZA(),e.TgZ(18,"button",10),e.NdJ("click",function(){return n.addDialog()}),e._uU(19,"Add New Category"),e.qZA()()()(),e.TgZ(20,"section",11)(21,"div",1)(22,"table",12)(23,"thead")(24,"tr")(25,"th"),e._uU(26,"name"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"creationDate"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"modificationDate"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,b,11,6,"tr",13),e.qZA()(),e.TgZ(33,"div",14)(34,"mat-paginator",15,16),e.NdJ("page",function(l){return n.handlePageEvent(l)}),e.qZA()()()()),2&a&&(e.xp6(17),e.Q6J("ngModel",n.searchValue),e.xp6(15),e.Q6J("ngForOf",n.tableData),e.xp6(2),e.Q6J("length",null==n.tableResponse?null:n.tableResponse.totalNumberOfRecords)("pageSize",null==n.tableResponse?null:n.tableResponse.pageSize)("pageSizeOptions",e.DdM(6,Z))("pageIndex",null==n.tableResponse?null:n.tableResponse.pageNumber))},dependencies:[g.sg,s.Fj,s.JJ,s.On,y.NW,g.uU]})}return o})();var v=i(3843);const _=[{path:"",component:T}];let A=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.oAB({type:o});static#a=this.\u0275inj=e.cJS({imports:[g.ez,p.Bz.forChild(_),v.m]})}return o})()}}]);