import{S as Ze,i as et,s as tt,N as Ye,e as o,w as m,b as p,c as _e,f as _,g as r,h as l,m as ke,x as me,O as Ve,P as lt,k as st,Q as nt,n as ot,t as z,a as G,o as d,d as he,R as it,C as ze,p as at,r as J,u as rt}from"./index-add376b6.js";import{S as dt}from"./SdkTabs-719d05b2.js";function Ge(i,s,n){const a=i.slice();return a[6]=s[n],a}function Je(i,s,n){const a=i.slice();return a[6]=s[n],a}function Ke(i){let s;return{c(){s=o("p"),s.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",_(s,"class","txt-hint txt-sm txt-right")},m(n,a){r(n,s,a)},d(n){n&&d(s)}}}function We(i,s){let n,a=s[6].code+"",w,c,f,u;function C(){return s[5](s[6])}return{key:i,first:null,c(){n=o("button"),w=m(a),c=p(),_(n,"class","tab-item"),J(n,"active",s[2]===s[6].code),this.first=n},m(h,F){r(h,n,F),l(n,w),l(n,c),f||(u=rt(n,"click",C),f=!0)},p(h,F){s=h,F&20&&J(n,"active",s[2]===s[6].code)},d(h){h&&d(n),f=!1,u()}}}function Xe(i,s){let n,a,w,c;return a=new Ye({props:{content:s[6].body}}),{key:i,first:null,c(){n=o("div"),_e(a.$$.fragment),w=p(),_(n,"class","tab-item"),J(n,"active",s[2]===s[6].code),this.first=n},m(f,u){r(f,n,u),ke(a,n,null),l(n,w),c=!0},p(f,u){s=f,(!c||u&20)&&J(n,"active",s[2]===s[6].code)},i(f){c||(z(a.$$.fragment,f),c=!0)},o(f){G(a.$$.fragment,f),c=!1},d(f){f&&d(n),he(a)}}}function ct(i){var Ne,Ue;let s,n,a=i[0].name+"",w,c,f,u,C,h,F,N=i[0].name+"",K,ve,W,S,X,x,Y,$,U,we,j,E,ye,Z,Q=i[0].name+"",ee,$e,te,Ce,le,A,se,I,ne,M,oe,g,ie,Re,ae,O,re,Fe,de,Se,k,ge,P,Oe,De,Te,ce,Ee,fe,Pe,xe,Ae,pe,Ie,ue,H,be,D,q,R=[],Me=new Map,He,L,y=[],qe=new Map,T;S=new dt({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${i[3]}');

        ...

        const record = await db.collection('${(Ne=i[0])==null?void 0:Ne.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[3]}');

        ...

        final record = await db.collection('${(Ue=i[0])==null?void 0:Ue.name}').getOne('RECORD_ID',
          'expand': 'relField1,relField2.subRelField',
        );
    `}});let v=i[1]&&Ke();P=new Ye({props:{content:"?expand=relField1,relField2.subRelField"}});let V=i[4];const Le=e=>e[6].code;for(let e=0;e<V.length;e+=1){let t=Je(i,V,e),b=Le(t);Me.set(b,R[e]=We(b,t))}let B=i[4];const Be=e=>e[6].code;for(let e=0;e<B.length;e+=1){let t=Ge(i,B,e),b=Be(t);qe.set(b,y[e]=Xe(b,t))}return{c(){s=o("h3"),n=m("View ("),w=m(a),c=m(")"),f=p(),u=o("div"),C=o("p"),h=m("Fetch a single "),F=o("strong"),K=m(N),ve=m(" record."),W=p(),_e(S.$$.fragment),X=p(),x=o("h6"),x.textContent="API details",Y=p(),$=o("div"),U=o("strong"),U.textContent="GET",we=p(),j=o("div"),E=o("p"),ye=m("/api/collections/"),Z=o("strong"),ee=m(Q),$e=m("/records/"),te=o("strong"),te.textContent=":id",Ce=p(),v&&v.c(),le=p(),A=o("div"),A.textContent="Path Parameters",se=p(),I=o("table"),I.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr></thead> 
    <tbody><tr><td>id</td> 
            <td><span class="label">String</span></td> 
            <td>ID of the record to view.</td></tr></tbody>`,ne=p(),M=o("div"),M.textContent="Query parameters",oe=p(),g=o("table"),ie=o("thead"),ie.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,Re=p(),ae=o("tbody"),O=o("tr"),re=o("td"),re.textContent="expand",Fe=p(),de=o("td"),de.innerHTML='<span class="label">String</span>',Se=p(),k=o("td"),ge=m(`Auto expand record relations. Ex.:
                `),_e(P.$$.fragment),Oe=m(`
                Supports up to 6-levels depth nested relations expansion. `),De=o("br"),Te=m(`
                The expanded relations will be appended to the record under the
                `),ce=o("code"),ce.textContent="expand",Ee=m(" property (eg. "),fe=o("code"),fe.textContent='"expand": {"relField1": {...}, ...}',Pe=m(`).
                `),xe=o("br"),Ae=m(`
                Only the relations to which the request user has permissions to `),pe=o("strong"),pe.textContent="view",Ie=m(" will be expanded."),ue=p(),H=o("div"),H.textContent="Responses",be=p(),D=o("div"),q=o("div");for(let e=0;e<R.length;e+=1)R[e].c();He=p(),L=o("div");for(let e=0;e<y.length;e+=1)y[e].c();_(s,"class","m-b-sm"),_(u,"class","content txt-lg m-b-sm"),_(x,"class","m-b-xs"),_(U,"class","label label-primary"),_(j,"class","content"),_($,"class","alert alert-info"),_(A,"class","section-title"),_(I,"class","table-compact table-border m-b-base"),_(M,"class","section-title"),_(g,"class","table-compact table-border m-b-base"),_(H,"class","section-title"),_(q,"class","tabs-header compact left"),_(L,"class","tabs-content"),_(D,"class","tabs")},m(e,t){r(e,s,t),l(s,n),l(s,w),l(s,c),r(e,f,t),r(e,u,t),l(u,C),l(C,h),l(C,F),l(F,K),l(C,ve),r(e,W,t),ke(S,e,t),r(e,X,t),r(e,x,t),r(e,Y,t),r(e,$,t),l($,U),l($,we),l($,j),l(j,E),l(E,ye),l(E,Z),l(Z,ee),l(E,$e),l(E,te),l($,Ce),v&&v.m($,null),r(e,le,t),r(e,A,t),r(e,se,t),r(e,I,t),r(e,ne,t),r(e,M,t),r(e,oe,t),r(e,g,t),l(g,ie),l(g,Re),l(g,ae),l(ae,O),l(O,re),l(O,Fe),l(O,de),l(O,Se),l(O,k),l(k,ge),ke(P,k,null),l(k,Oe),l(k,De),l(k,Te),l(k,ce),l(k,Ee),l(k,fe),l(k,Pe),l(k,xe),l(k,Ae),l(k,pe),l(k,Ie),r(e,ue,t),r(e,H,t),r(e,be,t),r(e,D,t),l(D,q);for(let b=0;b<R.length;b+=1)R[b].m(q,null);l(D,He),l(D,L);for(let b=0;b<y.length;b+=1)y[b].m(L,null);T=!0},p(e,[t]){var je,Qe;(!T||t&1)&&a!==(a=e[0].name+"")&&me(w,a),(!T||t&1)&&N!==(N=e[0].name+"")&&me(K,N);const b={};t&9&&(b.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        const record = await db.collection('${(je=e[0])==null?void 0:je.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `),t&9&&(b.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final record = await db.collection('${(Qe=e[0])==null?void 0:Qe.name}').getOne('RECORD_ID',
          'expand': 'relField1,relField2.subRelField',
        );
    `),S.$set(b),(!T||t&1)&&Q!==(Q=e[0].name+"")&&me(ee,Q),e[1]?v||(v=Ke(),v.c(),v.m($,null)):v&&(v.d(1),v=null),t&20&&(V=e[4],R=Ve(R,t,Le,1,e,V,Me,q,lt,We,null,Je)),t&20&&(B=e[4],st(),y=Ve(y,t,Be,1,e,B,qe,L,nt,Xe,null,Ge),ot())},i(e){if(!T){z(S.$$.fragment,e),z(P.$$.fragment,e);for(let t=0;t<B.length;t+=1)z(y[t]);T=!0}},o(e){G(S.$$.fragment,e),G(P.$$.fragment,e);for(let t=0;t<y.length;t+=1)G(y[t]);T=!1},d(e){e&&d(s),e&&d(f),e&&d(u),e&&d(W),he(S,e),e&&d(X),e&&d(x),e&&d(Y),e&&d($),v&&v.d(),e&&d(le),e&&d(A),e&&d(se),e&&d(I),e&&d(ne),e&&d(M),e&&d(oe),e&&d(g),he(P),e&&d(ue),e&&d(H),e&&d(be),e&&d(D);for(let t=0;t<R.length;t+=1)R[t].d();for(let t=0;t<y.length;t+=1)y[t].d()}}}function ft(i,s,n){let a,w,{collection:c=new it}=s,f=200,u=[];const C=h=>n(2,f=h.code);return i.$$set=h=>{"collection"in h&&n(0,c=h.collection)},i.$$.update=()=>{i.$$.dirty&1&&n(1,a=(c==null?void 0:c.viewRule)===null),i.$$.dirty&3&&c!=null&&c.id&&(u.push({code:200,body:JSON.stringify(ze.dummyCollectionRecord(c),null,2)}),a&&u.push({code:403,body:`
                    {
                      "code": 403,
                      "message": "Only admins can access this action.",
                      "data": {}
                    }
                `}),u.push({code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},n(3,w=ze.getApiExampleUrl(at.baseUrl)),[c,a,f,w,u,C]}class bt extends Ze{constructor(s){super(),et(this,s,ft,ct,tt,{collection:0})}}export{bt as default};
