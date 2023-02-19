import{S as Tt,i as Ct,s as Ot,C as B,N as St,e as r,w as y,b as m,c as Ae,f as S,g as a,h as i,m as Fe,x as I,O as Pe,P as ut,k as Mt,Q as $t,n as Rt,t as fe,a as pe,o,d as Ne,R as qt,p as Dt,r as ce,u as Ht,y as G}from"./index-add376b6.js";import{S as Lt}from"./SdkTabs-719d05b2.js";function bt(f,t,l){const s=f.slice();return s[7]=t[l],s}function mt(f,t,l){const s=f.slice();return s[7]=t[l],s}function _t(f,t,l){const s=f.slice();return s[12]=t[l],s}function yt(f){let t;return{c(){t=r("p"),t.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",S(t,"class","txt-hint txt-sm txt-right")},m(l,s){a(l,t,s)},d(l){l&&o(t)}}}function kt(f){let t,l,s,b,u,d,p,k,T,h,O,D,A,N,M,j,F;return{c(){t=r("tr"),t.innerHTML='<td colspan="3" class="txt-hint">Auth fields</td>',l=m(),s=r("tr"),s.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>username</span></div></td> 
                <td><span class="label">String</span></td> 
                <td>The username of the auth record.</td>`,b=m(),u=r("tr"),u.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>email</span></div></td> 
                <td><span class="label">String</span></td> 
                <td>The auth record email address.
                    <br/>
                    This field can be updated only by admins or auth records with &quot;Manage&quot; access.
                    <br/>
                    Regular accounts can update their email by calling &quot;Request email change&quot;.</td>`,d=m(),p=r("tr"),p.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>emailVisibility</span></div></td> 
                <td><span class="label">Boolean</span></td> 
                <td>Whether to show/hide the auth record email when fetching the record data.</td>`,k=m(),T=r("tr"),T.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>oldPassword</span></div></td> 
                <td><span class="label">String</span></td> 
                <td>Old auth record password.
                    <br/>
                    This field is required only when changing the record password. Admins and auth records with
                    &quot;Manage&quot; access can skip this field.</td>`,h=m(),O=r("tr"),O.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>password</span></div></td> 
                <td><span class="label">String</span></td> 
                <td>New auth record password.</td>`,D=m(),A=r("tr"),A.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>passwordConfirm</span></div></td> 
                <td><span class="label">String</span></td> 
                <td>New auth record password confirmation.</td>`,N=m(),M=r("tr"),M.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                        <span>verified</span></div></td> 
                <td><span class="label">Boolean</span></td> 
                <td>Indicates whether the auth record is verified or not.
                    <br/>
                    This field can be set only by admins or auth records with &quot;Manage&quot; access.</td>`,j=m(),F=r("tr"),F.innerHTML='<td colspan="3" class="txt-hint">Schema fields</td>'},m(c,_){a(c,t,_),a(c,l,_),a(c,s,_),a(c,b,_),a(c,u,_),a(c,d,_),a(c,p,_),a(c,k,_),a(c,T,_),a(c,h,_),a(c,O,_),a(c,D,_),a(c,A,_),a(c,N,_),a(c,M,_),a(c,j,_),a(c,F,_)},d(c){c&&o(t),c&&o(l),c&&o(s),c&&o(b),c&&o(u),c&&o(d),c&&o(p),c&&o(k),c&&o(T),c&&o(h),c&&o(O),c&&o(D),c&&o(A),c&&o(N),c&&o(M),c&&o(j),c&&o(F)}}}function Pt(f){let t;return{c(){t=r("span"),t.textContent="Optional",S(t,"class","label label-warning")},m(l,s){a(l,t,s)},d(l){l&&o(t)}}}function At(f){let t;return{c(){t=r("span"),t.textContent="Required",S(t,"class","label label-success")},m(l,s){a(l,t,s)},d(l){l&&o(t)}}}function Ft(f){var u;let t,l=((u=f[12].options)==null?void 0:u.maxSelect)>1?"ids":"id",s,b;return{c(){t=y("User "),s=y(l),b=y(".")},m(d,p){a(d,t,p),a(d,s,p),a(d,b,p)},p(d,p){var k;p&1&&l!==(l=((k=d[12].options)==null?void 0:k.maxSelect)>1?"ids":"id")&&I(s,l)},d(d){d&&o(t),d&&o(s),d&&o(b)}}}function Nt(f){var u;let t,l=((u=f[12].options)==null?void 0:u.maxSelect)>1?"ids":"id",s,b;return{c(){t=y("Relation record "),s=y(l),b=y(".")},m(d,p){a(d,t,p),a(d,s,p),a(d,b,p)},p(d,p){var k;p&1&&l!==(l=((k=d[12].options)==null?void 0:k.maxSelect)>1?"ids":"id")&&I(s,l)},d(d){d&&o(t),d&&o(s),d&&o(b)}}}function jt(f){let t,l,s,b,u;return{c(){t=y("File object."),l=r("br"),s=y(`
                        Set to `),b=r("code"),b.textContent="null",u=y(" to delete already uploaded file(s).")},m(d,p){a(d,t,p),a(d,l,p),a(d,s,p),a(d,b,p),a(d,u,p)},p:G,d(d){d&&o(t),d&&o(l),d&&o(s),d&&o(b),d&&o(u)}}}function Et(f){let t;return{c(){t=y("URL address.")},m(l,s){a(l,t,s)},p:G,d(l){l&&o(t)}}}function Ut(f){let t;return{c(){t=y("Email address.")},m(l,s){a(l,t,s)},p:G,d(l){l&&o(t)}}}function Bt(f){let t;return{c(){t=y("JSON array or object.")},m(l,s){a(l,t,s)},p:G,d(l){l&&o(t)}}}function It(f){let t;return{c(){t=y("Number value.")},m(l,s){a(l,t,s)},p:G,d(l){l&&o(t)}}}function Jt(f){let t;return{c(){t=y("Plain text value.")},m(l,s){a(l,t,s)},p:G,d(l){l&&o(t)}}}function vt(f,t){let l,s,b,u,d,p=t[12].name+"",k,T,h,O,D=B.getFieldValueType(t[12])+"",A,N,M,j;function F(v,L){return v[12].required?At:Pt}let c=F(t),_=c(t);function K(v,L){if(v[12].type==="text")return Jt;if(v[12].type==="number")return It;if(v[12].type==="json")return Bt;if(v[12].type==="email")return Ut;if(v[12].type==="url")return Et;if(v[12].type==="file")return jt;if(v[12].type==="relation")return Nt;if(v[12].type==="user")return Ft}let H=K(t),C=H&&H(t);return{key:f,first:null,c(){l=r("tr"),s=r("td"),b=r("div"),_.c(),u=m(),d=r("span"),k=y(p),T=m(),h=r("td"),O=r("span"),A=y(D),N=m(),M=r("td"),C&&C.c(),j=m(),S(b,"class","inline-flex"),S(O,"class","label"),this.first=l},m(v,L){a(v,l,L),i(l,s),i(s,b),_.m(b,null),i(b,u),i(b,d),i(d,k),i(l,T),i(l,h),i(h,O),i(O,A),i(l,N),i(l,M),C&&C.m(M,null),i(l,j)},p(v,L){t=v,c!==(c=F(t))&&(_.d(1),_=c(t),_&&(_.c(),_.m(b,u))),L&1&&p!==(p=t[12].name+"")&&I(k,p),L&1&&D!==(D=B.getFieldValueType(t[12])+"")&&I(A,D),H===(H=K(t))&&C?C.p(t,L):(C&&C.d(1),C=H&&H(t),C&&(C.c(),C.m(M,null)))},d(v){v&&o(l),_.d(),C&&C.d()}}}function ht(f,t){let l,s=t[7].code+"",b,u,d,p;function k(){return t[6](t[7])}return{key:f,first:null,c(){l=r("button"),b=y(s),u=m(),S(l,"class","tab-item"),ce(l,"active",t[1]===t[7].code),this.first=l},m(T,h){a(T,l,h),i(l,b),i(l,u),d||(p=Ht(l,"click",k),d=!0)},p(T,h){t=T,h&4&&s!==(s=t[7].code+"")&&I(b,s),h&6&&ce(l,"active",t[1]===t[7].code)},d(T){T&&o(l),d=!1,p()}}}function wt(f,t){let l,s,b,u;return s=new St({props:{content:t[7].body}}),{key:f,first:null,c(){l=r("div"),Ae(s.$$.fragment),b=m(),S(l,"class","tab-item"),ce(l,"active",t[1]===t[7].code),this.first=l},m(d,p){a(d,l,p),Fe(s,l,null),i(l,b),u=!0},p(d,p){t=d;const k={};p&4&&(k.content=t[7].body),s.$set(k),(!u||p&6)&&ce(l,"active",t[1]===t[7].code)},i(d){u||(fe(s.$$.fragment,d),u=!0)},o(d){pe(s.$$.fragment,d),u=!1},d(d){d&&o(l),Ne(s)}}}function gt(f){var it,at,ot,dt;let t,l,s=f[0].name+"",b,u,d,p,k,T,h,O=f[0].name+"",D,A,N,M,j,F,c,_,K,H,C,v,L,je,ae,W,Ee,ue,oe=f[0].name+"",be,Ue,me,Be,_e,X,ye,Z,ke,ee,ve,J,he,Ie,g,we,E=[],Je=new Map,Se,te,Te,V,Ce,ge,Oe,x,Me,Ve,$e,xe,$,Qe,Y,ze,Ke,We,Re,Ye,qe,Ge,De,Xe,He,le,Le,Q,se,U=[],Ze=new Map,et,ne,P=[],tt=new Map,z;_=new Lt({props:{js:`
import SaaS from 'saaskit';

const db = new SaaS('${f[4]}');

...

// example update data
const data = ${JSON.stringify(Object.assign({},f[3],B.dummyCollectionSchemaData(f[0])),null,4)};

const record = await db.collection('${(it=f[0])==null?void 0:it.name}').update('RECORD_ID', data);
    `,dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${f[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({},f[3],B.dummyCollectionSchemaData(f[0])),null,2)};

final record = await db.collection('${(at=f[0])==null?void 0:at.name}').update('RECORD_ID', body: body);
    `}});let R=f[5]&&yt(),q=((ot=f[0])==null?void 0:ot.isAuth)&&kt(),de=(dt=f[0])==null?void 0:dt.schema;const lt=e=>e[12].name;for(let e=0;e<de.length;e+=1){let n=_t(f,de,e),w=lt(n);Je.set(w,E[e]=vt(w,n))}Y=new St({props:{content:"?expand=relField1,relField2.subRelField21"}});let re=f[2];const st=e=>e[7].code;for(let e=0;e<re.length;e+=1){let n=mt(f,re,e),w=st(n);Ze.set(w,U[e]=ht(w,n))}let ie=f[2];const nt=e=>e[7].code;for(let e=0;e<ie.length;e+=1){let n=bt(f,ie,e),w=nt(n);tt.set(w,P[e]=wt(w,n))}return{c(){t=r("h3"),l=y("Update ("),b=y(s),u=y(")"),d=m(),p=r("div"),k=r("p"),T=y("Update a single "),h=r("strong"),D=y(O),A=y(" record."),N=m(),M=r("p"),M.innerHTML=`Body parameters could be sent as <code>application/json</code> or
        <code>multipart/form-data</code>.`,j=m(),F=r("p"),F.innerHTML=`File upload is supported only via <code>multipart/form-data</code>.
        <br/>
        For more info and examples you could check the detailed
        <a href="https://saas.dev/docs/files-handling/" target="_blank" rel="noopener noreferrer">Files upload and handling docs
        </a>.`,c=m(),Ae(_.$$.fragment),K=m(),H=r("h6"),H.textContent="API details",C=m(),v=r("div"),L=r("strong"),L.textContent="PATCH",je=m(),ae=r("div"),W=r("p"),Ee=y("/api/collections/"),ue=r("strong"),be=y(oe),Ue=y("/records/"),me=r("strong"),me.textContent=":id",Be=m(),R&&R.c(),_e=m(),X=r("div"),X.textContent="Path parameters",ye=m(),Z=r("table"),Z.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr></thead> 
    <tbody><tr><td>id</td> 
            <td><span class="label">String</span></td> 
            <td>ID of the record to update.</td></tr></tbody>`,ke=m(),ee=r("div"),ee.textContent="Body Parameters",ve=m(),J=r("table"),he=r("thead"),he.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr>`,Ie=m(),g=r("tbody"),q&&q.c(),we=m();for(let e=0;e<E.length;e+=1)E[e].c();Se=m(),te=r("div"),te.textContent="Query parameters",Te=m(),V=r("table"),Ce=r("thead"),Ce.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,ge=m(),Oe=r("tbody"),x=r("tr"),Me=r("td"),Me.textContent="expand",Ve=m(),$e=r("td"),$e.innerHTML='<span class="label">String</span>',xe=m(),$=r("td"),Qe=y(`Auto expand relations when returning the updated record. Ex.:
                `),Ae(Y.$$.fragment),ze=y(`
                Supports up to 6-levels depth nested relations expansion. `),Ke=r("br"),We=y(`
                The expanded relations will be appended to the record under the
                `),Re=r("code"),Re.textContent="expand",Ye=y(" property (eg. "),qe=r("code"),qe.textContent='"expand": {"relField1": {...}, ...}',Ge=y(`). Only
                the relations that the user has permissions to `),De=r("strong"),De.textContent="view",Xe=y(" will be expanded."),He=m(),le=r("div"),le.textContent="Responses",Le=m(),Q=r("div"),se=r("div");for(let e=0;e<U.length;e+=1)U[e].c();et=m(),ne=r("div");for(let e=0;e<P.length;e+=1)P[e].c();S(t,"class","m-b-sm"),S(p,"class","content txt-lg m-b-sm"),S(H,"class","m-b-xs"),S(L,"class","label label-primary"),S(ae,"class","content"),S(v,"class","alert alert-warning"),S(X,"class","section-title"),S(Z,"class","table-compact table-border m-b-base"),S(ee,"class","section-title"),S(J,"class","table-compact table-border m-b-base"),S(te,"class","section-title"),S(V,"class","table-compact table-border m-b-lg"),S(le,"class","section-title"),S(se,"class","tabs-header compact left"),S(ne,"class","tabs-content"),S(Q,"class","tabs")},m(e,n){a(e,t,n),i(t,l),i(t,b),i(t,u),a(e,d,n),a(e,p,n),i(p,k),i(k,T),i(k,h),i(h,D),i(k,A),i(p,N),i(p,M),i(p,j),i(p,F),a(e,c,n),Fe(_,e,n),a(e,K,n),a(e,H,n),a(e,C,n),a(e,v,n),i(v,L),i(v,je),i(v,ae),i(ae,W),i(W,Ee),i(W,ue),i(ue,be),i(W,Ue),i(W,me),i(v,Be),R&&R.m(v,null),a(e,_e,n),a(e,X,n),a(e,ye,n),a(e,Z,n),a(e,ke,n),a(e,ee,n),a(e,ve,n),a(e,J,n),i(J,he),i(J,Ie),i(J,g),q&&q.m(g,null),i(g,we);for(let w=0;w<E.length;w+=1)E[w].m(g,null);a(e,Se,n),a(e,te,n),a(e,Te,n),a(e,V,n),i(V,Ce),i(V,ge),i(V,Oe),i(Oe,x),i(x,Me),i(x,Ve),i(x,$e),i(x,xe),i(x,$),i($,Qe),Fe(Y,$,null),i($,ze),i($,Ke),i($,We),i($,Re),i($,Ye),i($,qe),i($,Ge),i($,De),i($,Xe),a(e,He,n),a(e,le,n),a(e,Le,n),a(e,Q,n),i(Q,se);for(let w=0;w<U.length;w+=1)U[w].m(se,null);i(Q,et),i(Q,ne);for(let w=0;w<P.length;w+=1)P[w].m(ne,null);z=!0},p(e,[n]){var rt,ft,pt,ct;(!z||n&1)&&s!==(s=e[0].name+"")&&I(b,s),(!z||n&1)&&O!==(O=e[0].name+"")&&I(D,O);const w={};n&25&&(w.js=`
import SaaS from 'saaskit';

const db = new SaaS('${e[4]}');

...

// example update data
const data = ${JSON.stringify(Object.assign({},e[3],B.dummyCollectionSchemaData(e[0])),null,4)};

const record = await db.collection('${(rt=e[0])==null?void 0:rt.name}').update('RECORD_ID', data);
    `),n&25&&(w.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${e[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({},e[3],B.dummyCollectionSchemaData(e[0])),null,2)};

final record = await db.collection('${(ft=e[0])==null?void 0:ft.name}').update('RECORD_ID', body: body);
    `),_.$set(w),(!z||n&1)&&oe!==(oe=e[0].name+"")&&I(be,oe),e[5]?R||(R=yt(),R.c(),R.m(v,null)):R&&(R.d(1),R=null),(pt=e[0])!=null&&pt.isAuth?q||(q=kt(),q.c(),q.m(g,we)):q&&(q.d(1),q=null),n&1&&(de=(ct=e[0])==null?void 0:ct.schema,E=Pe(E,n,lt,1,e,de,Je,g,ut,vt,null,_t)),n&6&&(re=e[2],U=Pe(U,n,st,1,e,re,Ze,se,ut,ht,null,mt)),n&6&&(ie=e[2],Mt(),P=Pe(P,n,nt,1,e,ie,tt,ne,$t,wt,null,bt),Rt())},i(e){if(!z){fe(_.$$.fragment,e),fe(Y.$$.fragment,e);for(let n=0;n<ie.length;n+=1)fe(P[n]);z=!0}},o(e){pe(_.$$.fragment,e),pe(Y.$$.fragment,e);for(let n=0;n<P.length;n+=1)pe(P[n]);z=!1},d(e){e&&o(t),e&&o(d),e&&o(p),e&&o(c),Ne(_,e),e&&o(K),e&&o(H),e&&o(C),e&&o(v),R&&R.d(),e&&o(_e),e&&o(X),e&&o(ye),e&&o(Z),e&&o(ke),e&&o(ee),e&&o(ve),e&&o(J),q&&q.d();for(let n=0;n<E.length;n+=1)E[n].d();e&&o(Se),e&&o(te),e&&o(Te),e&&o(V),Ne(Y),e&&o(He),e&&o(le),e&&o(Le),e&&o(Q);for(let n=0;n<U.length;n+=1)U[n].d();for(let n=0;n<P.length;n+=1)P[n].d()}}}function Vt(f,t,l){let s,b,{collection:u=new qt}=t,d=200,p=[],k={};const T=h=>l(1,d=h.code);return f.$$set=h=>{"collection"in h&&l(0,u=h.collection)},f.$$.update=()=>{var h,O;f.$$.dirty&1&&l(5,s=(u==null?void 0:u.updateRule)===null),f.$$.dirty&1&&l(2,p=[{code:200,body:JSON.stringify(B.dummyCollectionRecord(u),null,2)},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${(O=(h=u==null?void 0:u.schema)==null?void 0:h[0])==null?void 0:O.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}]),f.$$.dirty&1&&(u.isAuth?l(3,k={username:"test_username_update",emailVisibility:!1,password:"87654321",passwordConfirm:"87654321",oldPassword:"12345678"}):l(3,k={}))},l(4,b=B.getApiExampleUrl(Dt.baseUrl)),[u,d,p,k,b,s,T]}class zt extends Tt{constructor(t){super(),Ct(this,t,Vt,gt,Ot,{collection:0})}}export{zt as default};
