"use strict";(self.webpackChunkfoodprojct=self.webpackChunkfoodprojct||[]).push([[912],{912:(O,c,i)=>{i.r(c),i.d(c,{FavoritesModule:()=>F});var r=i(6814),t=i(5879),g=i(3140),p=i(2425),l=i(4581),d=i(6537);function m(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",17),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src","https://upskilling-egypt.com:3006/"+e.recipe.imagePath,t.LSH)}}function h(n,a){1&n&&(t.ynx(0),t._UZ(1,"img",18),t.BQk())}function v(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"button",14),t.NdJ("click",function(){const b=t.CHM(e).$implicit,Z=t.oxw(2);return t.KtG(Z.onDeleteFav(b.id))}),t._UZ(4,"i",15),t.qZA(),t.YNc(5,m,2,1,"ng-container",8),t.YNc(6,h,2,0,"ng-container",8),t.qZA(),t.TgZ(7,"div",16)(8,"h5"),t._uU(9),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()()()()}if(2&n){const e=a.$implicit;t.xp6(5),t.Q6J("ngIf",e.recipe.imagePath),t.xp6(1),t.Q6J("ngIf",!e.recipe.imagePath),t.xp6(3),t.Oqu(e.recipe.name),t.xp6(2),t.Oqu(e.recipe.description)}}function u(n,a){if(1&n&&(t.ynx(0),t.YNc(1,v,12,4,"div",9),t._UZ(2,"div",10),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.tableData)}}function _(n,a){1&n&&(t.ynx(0),t._UZ(1,"app-no-data"),t.BQk())}let f=(()=>{class n{constructor(e,o){this._favoriteService=e,this._toastrService=o,this.tableData=[],this.searchValue="",this.pageNumber=1,this.pageSize=10}ngOnInit(){this.getAllFavourites()}getAllFavourites(){this._favoriteService.getAllFav().subscribe({next:e=>{console.log(e),this.tableResponse=e,this.tableData=this.tableResponse?.data;let o=this.tableData?.length;localStorage.setItem("favourites",o.toLocaleString())},error:()=>{},complete:()=>{}})}onDeleteFav(e){this._favoriteService.deleteFav(e).subscribe({next:o=>{},error:()=>{},complete:()=>{this.getAllFavourites(),this._toastrService.success("Favorite Recipe Has Been Deleted")}})}handlePageEvent(e){console.log(e),this.pageNumber=e.pageIndex,this.pageSize=e.pageSize,this.getAllFavourites()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.e),t.Y36(p._W))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-favorites"]],decls:19,vars:2,consts:[[1,"page-header","my-3"],[1,"header-content","mt-3"],[1,"my-2"],["routerLink","/dashboard/user/user-recipes"],[1,"fas","fa-arrow-alt-circle-right","ms-2"],["id","user-cards",1,"mt-5"],[1,"container-fluid"],[1,"row"],[4,"ngIf"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"w-50","mx-auto","mt-5"],[1,"col-md-3"],[1,"card-item","shadow","mb-4"],[1,"card-header"],[3,"click"],[1,"far","fa-trash-alt","text-danger"],[1,"card-details","p-3"],["alt","",1,"w-100",3,"src"],["src","../../../../assets/images/nophoto.jpg","alt","",1,"w-100"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"p",2),t._uU(4,"100% Natural Food"),t.qZA(),t.TgZ(5,"h2"),t._uU(6," Choose the best "),t._UZ(7,"br"),t._uU(8," healthier way "),t._UZ(9,"br"),t._uU(10," of life "),t.qZA(),t.TgZ(11,"button",3),t._uU(12,"All Recipes "),t._UZ(13,"i",4),t.qZA()()()(),t.TgZ(14,"section",5)(15,"div",6)(16,"div",7),t.YNc(17,u,3,1,"ng-container",8),t.YNc(18,_,2,0,"ng-container",8),t.qZA()()()),2&o&&(t.xp6(17),t.Q6J("ngIf",s.tableData.length>0),t.xp6(1),t.Q6J("ngIf",0==s.tableData.length))},dependencies:[r.sg,r.O5,l.rH,d.d],styles:[".card-header[_ngcontent-%COMP%]{width:100%;position:relative}.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:15px 15px 35px 35px;max-height:200px}.card-item[_ngcontent-%COMP%]{position:relative;border-radius:20px;transition:all .3s}.card-item[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.card-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;transition:all .6s}.card-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#000}.card-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(1.1)}.dropdown-toggle[_ngcontent-%COMP%]:after{display:none}"]})}return n})();var x=i(3843);const C=[{path:"",component:f}];let F=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[r.ez,l.Bz.forChild(C),x.m]})}return n})()}}]);