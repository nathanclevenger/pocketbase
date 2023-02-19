import{S as Ce,i as Se,s as Re,e as d,w as D,b as k,c as $e,f as p,g as c,h as n,m as we,x,O as be,P as Ee,k as Oe,Q as Te,n as Ie,t as ee,a as te,o as f,d as ge,R as Pe,C as Ae,p as Me,r as N,u as qe,N as Be}from"./index-add376b6.js";import{S as He}from"./SdkTabs-719d05b2.js";function ke(a,l,s){const o=a.slice();return o[6]=l[s],o}function he(a,l,s){const o=a.slice();return o[6]=l[s],o}function ve(a){let l;return{c(){l=d("p"),l.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",p(l,"class","txt-hint txt-sm txt-right")},m(s,o){c(s,l,o)},d(s){s&&f(l)}}}function ye(a,l){let s,o=l[6].code+"",h,i,r,u;function $(){return l[5](l[6])}return{key:a,first:null,c(){s=d("button"),h=D(o),i=k(),p(s,"class","tab-item"),N(s,"active",l[2]===l[6].code),this.first=s},m(_,g){c(_,s,g),n(s,h),n(s,i),r||(u=qe(s,"click",$),r=!0)},p(_,g){l=_,g&20&&N(s,"active",l[2]===l[6].code)},d(_){_&&f(s),r=!1,u()}}}function De(a,l){let s,o,h,i;return o=new Be({props:{content:l[6].body}}),{key:a,first:null,c(){s=d("div"),$e(o.$$.fragment),h=k(),p(s,"class","tab-item"),N(s,"active",l[2]===l[6].code),this.first=s},m(r,u){c(r,s,u),we(o,s,null),n(s,h),i=!0},p(r,u){l=r,(!i||u&20)&&N(s,"active",l[2]===l[6].code)},i(r){i||(ee(o.$$.fragment,r),i=!0)},o(r){te(o.$$.fragment,r),i=!1},d(r){r&&f(s),ge(o)}}}function Le(a){var ue,me;let l,s,o=a[0].name+"",h,i,r,u,$,_,g,B=a[0].name+"",z,le,F,C,K,O,Q,y,H,se,L,E,ae,G,U=a[0].name+"",J,oe,V,ne,W,T,X,I,Y,P,Z,S,A,w=[],ie=new Map,re,M,v=[],de=new Map,R;C=new He({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${a[3]}');

        ...

        await db.collection('${(ue=a[0])==null?void 0:ue.name}').delete('RECORD_ID');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await db.collection('${(me=a[0])==null?void 0:me.name}').delete('RECORD_ID');
    `}});let b=a[1]&&ve(),j=a[4];const ce=e=>e[6].code;for(let e=0;e<j.length;e+=1){let t=he(a,j,e),m=ce(t);ie.set(m,w[e]=ye(m,t))}let q=a[4];const fe=e=>e[6].code;for(let e=0;e<q.length;e+=1){let t=ke(a,q,e),m=fe(t);de.set(m,v[e]=De(m,t))}return{c(){l=d("h3"),s=D("Delete ("),h=D(o),i=D(")"),r=k(),u=d("div"),$=d("p"),_=D("Delete a single "),g=d("strong"),z=D(B),le=D(" record."),F=k(),$e(C.$$.fragment),K=k(),O=d("h6"),O.textContent="API details",Q=k(),y=d("div"),H=d("strong"),H.textContent="DELETE",se=k(),L=d("div"),E=d("p"),ae=D("/api/collections/"),G=d("strong"),J=D(U),oe=D("/records/"),V=d("strong"),V.textContent=":id",ne=k(),b&&b.c(),W=k(),T=d("div"),T.textContent="Path parameters",X=k(),I=d("table"),I.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr></thead> 
    <tbody><tr><td>id</td> 
            <td><span class="label">String</span></td> 
            <td>ID of the record to delete.</td></tr></tbody>`,Y=k(),P=d("div"),P.textContent="Responses",Z=k(),S=d("div"),A=d("div");for(let e=0;e<w.length;e+=1)w[e].c();re=k(),M=d("div");for(let e=0;e<v.length;e+=1)v[e].c();p(l,"class","m-b-sm"),p(u,"class","content txt-lg m-b-sm"),p(O,"class","m-b-xs"),p(H,"class","label label-primary"),p(L,"class","content"),p(y,"class","alert alert-danger"),p(T,"class","section-title"),p(I,"class","table-compact table-border m-b-base"),p(P,"class","section-title"),p(A,"class","tabs-header compact left"),p(M,"class","tabs-content"),p(S,"class","tabs")},m(e,t){c(e,l,t),n(l,s),n(l,h),n(l,i),c(e,r,t),c(e,u,t),n(u,$),n($,_),n($,g),n(g,z),n($,le),c(e,F,t),we(C,e,t),c(e,K,t),c(e,O,t),c(e,Q,t),c(e,y,t),n(y,H),n(y,se),n(y,L),n(L,E),n(E,ae),n(E,G),n(G,J),n(E,oe),n(E,V),n(y,ne),b&&b.m(y,null),c(e,W,t),c(e,T,t),c(e,X,t),c(e,I,t),c(e,Y,t),c(e,P,t),c(e,Z,t),c(e,S,t),n(S,A);for(let m=0;m<w.length;m+=1)w[m].m(A,null);n(S,re),n(S,M);for(let m=0;m<v.length;m+=1)v[m].m(M,null);R=!0},p(e,[t]){var pe,_e;(!R||t&1)&&o!==(o=e[0].name+"")&&x(h,o),(!R||t&1)&&B!==(B=e[0].name+"")&&x(z,B);const m={};t&9&&(m.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(pe=e[0])==null?void 0:pe.name}').delete('RECORD_ID');
    `),t&9&&(m.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(_e=e[0])==null?void 0:_e.name}').delete('RECORD_ID');
    `),C.$set(m),(!R||t&1)&&U!==(U=e[0].name+"")&&x(J,U),e[1]?b||(b=ve(),b.c(),b.m(y,null)):b&&(b.d(1),b=null),t&20&&(j=e[4],w=be(w,t,ce,1,e,j,ie,A,Ee,ye,null,he)),t&20&&(q=e[4],Oe(),v=be(v,t,fe,1,e,q,de,M,Te,De,null,ke),Ie())},i(e){if(!R){ee(C.$$.fragment,e);for(let t=0;t<q.length;t+=1)ee(v[t]);R=!0}},o(e){te(C.$$.fragment,e);for(let t=0;t<v.length;t+=1)te(v[t]);R=!1},d(e){e&&f(l),e&&f(r),e&&f(u),e&&f(F),ge(C,e),e&&f(K),e&&f(O),e&&f(Q),e&&f(y),b&&b.d(),e&&f(W),e&&f(T),e&&f(X),e&&f(I),e&&f(Y),e&&f(P),e&&f(Z),e&&f(S);for(let t=0;t<w.length;t+=1)w[t].d();for(let t=0;t<v.length;t+=1)v[t].d()}}}function Ue(a,l,s){let o,h,{collection:i=new Pe}=l,r=204,u=[];const $=_=>s(2,r=_.code);return a.$$set=_=>{"collection"in _&&s(0,i=_.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(1,o=(i==null?void 0:i.deleteRule)===null),a.$$.dirty&3&&i!=null&&i.id&&(u.push({code:204,body:`
                null
            `}),u.push({code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),o&&u.push({code:403,body:`
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
            `}))},s(3,h=Ae.getApiExampleUrl(Me.baseUrl)),[i,o,r,h,u,$]}class ze extends Ce{constructor(l){super(),Se(this,l,Ue,Le,Re,{collection:0})}}export{ze as default};
