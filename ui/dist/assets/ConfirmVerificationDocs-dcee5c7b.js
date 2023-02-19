import{S as Se,i as we,s as Ce,e as c,w as h,b as v,c as ve,f as b,g as r,h as i,m as he,x as D,O as ue,P as Te,k as ge,Q as ye,n as Pe,t as Z,a as x,o as f,d as $e,R as qe,C as Oe,p as Ee,r as H,u as Ne,N as Ve}from"./index-add376b6.js";import{S as Be}from"./SdkTabs-719d05b2.js";function pe(a,l,s){const o=a.slice();return o[5]=l[s],o}function be(a,l,s){const o=a.slice();return o[5]=l[s],o}function _e(a,l){let s,o=l[5].code+"",_,p,n,m;function u(){return l[4](l[5])}return{key:a,first:null,c(){s=c("button"),_=h(o),p=v(),b(s,"class","tab-item"),H(s,"active",l[1]===l[5].code),this.first=s},m(S,w){r(S,s,w),i(s,_),i(s,p),n||(m=Ne(s,"click",u),n=!0)},p(S,w){l=S,w&4&&o!==(o=l[5].code+"")&&D(_,o),w&6&&H(s,"active",l[1]===l[5].code)},d(S){S&&f(s),n=!1,m()}}}function ke(a,l){let s,o,_,p;return o=new Ve({props:{content:l[5].body}}),{key:a,first:null,c(){s=c("div"),ve(o.$$.fragment),_=v(),b(s,"class","tab-item"),H(s,"active",l[1]===l[5].code),this.first=s},m(n,m){r(n,s,m),he(o,s,null),i(s,_),p=!0},p(n,m){l=n;const u={};m&4&&(u.content=l[5].body),o.$set(u),(!p||m&6)&&H(s,"active",l[1]===l[5].code)},i(n){p||(Z(o.$$.fragment,n),p=!0)},o(n){x(o.$$.fragment,n),p=!1},d(n){n&&f(s),$e(o)}}}function Ke(a){var re,fe;let l,s,o=a[0].name+"",_,p,n,m,u,S,w,M=a[0].name+"",F,ee,I,C,L,P,Q,T,A,te,R,q,le,z,U=a[0].name+"",G,se,J,O,W,E,X,N,Y,g,V,$=[],oe=new Map,ae,B,k=[],ie=new Map,y;C=new Be({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${a[3]}');

        ...

        await db.collection('${(re=a[0])==null?void 0:re.name}').confirmVerification('TOKEN');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await db.collection('${(fe=a[0])==null?void 0:fe.name}').confirmVerification('TOKEN');
    `}});let j=a[2];const ne=e=>e[5].code;for(let e=0;e<j.length;e+=1){let t=be(a,j,e),d=ne(t);oe.set(d,$[e]=_e(d,t))}let K=a[2];const ce=e=>e[5].code;for(let e=0;e<K.length;e+=1){let t=pe(a,K,e),d=ce(t);ie.set(d,k[e]=ke(d,t))}return{c(){l=c("h3"),s=h("Confirm verification ("),_=h(o),p=h(")"),n=v(),m=c("div"),u=c("p"),S=h("Confirms "),w=c("strong"),F=h(M),ee=h(" account verification request."),I=v(),ve(C.$$.fragment),L=v(),P=c("h6"),P.textContent="API details",Q=v(),T=c("div"),A=c("strong"),A.textContent="POST",te=v(),R=c("div"),q=c("p"),le=h("/api/collections/"),z=c("strong"),G=h(U),se=h("/confirm-verification"),J=v(),O=c("div"),O.textContent="Body Parameters",W=v(),E=c("table"),E.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the verification request email.</td></tr></tbody>`,X=v(),N=c("div"),N.textContent="Responses",Y=v(),g=c("div"),V=c("div");for(let e=0;e<$.length;e+=1)$[e].c();ae=v(),B=c("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(m,"class","content txt-lg m-b-sm"),b(P,"class","m-b-xs"),b(A,"class","label label-primary"),b(R,"class","content"),b(T,"class","alert alert-success"),b(O,"class","section-title"),b(E,"class","table-compact table-border m-b-base"),b(N,"class","section-title"),b(V,"class","tabs-header compact left"),b(B,"class","tabs-content"),b(g,"class","tabs")},m(e,t){r(e,l,t),i(l,s),i(l,_),i(l,p),r(e,n,t),r(e,m,t),i(m,u),i(u,S),i(u,w),i(w,F),i(u,ee),r(e,I,t),he(C,e,t),r(e,L,t),r(e,P,t),r(e,Q,t),r(e,T,t),i(T,A),i(T,te),i(T,R),i(R,q),i(q,le),i(q,z),i(z,G),i(q,se),r(e,J,t),r(e,O,t),r(e,W,t),r(e,E,t),r(e,X,t),r(e,N,t),r(e,Y,t),r(e,g,t),i(g,V);for(let d=0;d<$.length;d+=1)$[d].m(V,null);i(g,ae),i(g,B);for(let d=0;d<k.length;d+=1)k[d].m(B,null);y=!0},p(e,[t]){var de,me;(!y||t&1)&&o!==(o=e[0].name+"")&&D(_,o),(!y||t&1)&&M!==(M=e[0].name+"")&&D(F,M);const d={};t&9&&(d.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(de=e[0])==null?void 0:de.name}').confirmVerification('TOKEN');
    `),t&9&&(d.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(me=e[0])==null?void 0:me.name}').confirmVerification('TOKEN');
    `),C.$set(d),(!y||t&1)&&U!==(U=e[0].name+"")&&D(G,U),t&6&&(j=e[2],$=ue($,t,ne,1,e,j,oe,V,Te,_e,null,be)),t&6&&(K=e[2],ge(),k=ue(k,t,ce,1,e,K,ie,B,ye,ke,null,pe),Pe())},i(e){if(!y){Z(C.$$.fragment,e);for(let t=0;t<K.length;t+=1)Z(k[t]);y=!0}},o(e){x(C.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);y=!1},d(e){e&&f(l),e&&f(n),e&&f(m),e&&f(I),$e(C,e),e&&f(L),e&&f(P),e&&f(Q),e&&f(T),e&&f(J),e&&f(O),e&&f(W),e&&f(E),e&&f(X),e&&f(N),e&&f(Y),e&&f(g);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Me(a,l,s){let o,{collection:_=new qe}=l,p=204,n=[];const m=u=>s(1,p=u.code);return a.$$set=u=>{"collection"in u&&s(0,_=u.collection)},s(3,o=Oe.getApiExampleUrl(Ee.baseUrl)),s(2,n=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[_,p,n,o,m]}class Ue extends Se{constructor(l){super(),we(this,l,Me,Ke,Ce,{collection:0})}}export{Ue as default};
