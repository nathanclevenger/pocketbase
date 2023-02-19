import{S as Se,i as qe,s as we,e as c,w as h,b as v,c as ve,f as b,g as r,h as i,m as he,x as F,O as ue,P as ge,k as ye,Q as Ce,n as Pe,t as Z,a as x,o as f,d as $e,R as Te,C as Re,p as Ve,r as I,u as Be,N as Me}from"./index-add376b6.js";import{S as Ae}from"./SdkTabs-719d05b2.js";function pe(o,l,s){const a=o.slice();return a[5]=l[s],a}function be(o,l,s){const a=o.slice();return a[5]=l[s],a}function _e(o,l){let s,a=l[5].code+"",_,p,n,m;function u(){return l[4](l[5])}return{key:o,first:null,c(){s=c("button"),_=h(a),p=v(),b(s,"class","tab-item"),I(s,"active",l[1]===l[5].code),this.first=s},m(S,q){r(S,s,q),i(s,_),i(s,p),n||(m=Be(s,"click",u),n=!0)},p(S,q){l=S,q&4&&a!==(a=l[5].code+"")&&F(_,a),q&6&&I(s,"active",l[1]===l[5].code)},d(S){S&&f(s),n=!1,m()}}}function ke(o,l){let s,a,_,p;return a=new Me({props:{content:l[5].body}}),{key:o,first:null,c(){s=c("div"),ve(a.$$.fragment),_=v(),b(s,"class","tab-item"),I(s,"active",l[1]===l[5].code),this.first=s},m(n,m){r(n,s,m),he(a,s,null),i(s,_),p=!0},p(n,m){l=n;const u={};m&4&&(u.content=l[5].body),a.$set(u),(!p||m&6)&&I(s,"active",l[1]===l[5].code)},i(n){p||(Z(a.$$.fragment,n),p=!0)},o(n){x(a.$$.fragment,n),p=!1},d(n){n&&f(s),$e(a)}}}function Ue(o){var re,fe;let l,s,a=o[0].name+"",_,p,n,m,u,S,q,j=o[0].name+"",L,ee,N,w,Q,P,z,g,D,te,H,T,le,G,O=o[0].name+"",J,se,K,R,W,V,X,B,Y,y,M,$=[],ae=new Map,oe,A,k=[],ie=new Map,C;w=new Ae({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${o[3]}');

        ...

        await db.collection('${(re=o[0])==null?void 0:re.name}').requestVerification('test@example.com');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        await db.collection('${(fe=o[0])==null?void 0:fe.name}').requestVerification('test@example.com');
    `}});let E=o[2];const ne=e=>e[5].code;for(let e=0;e<E.length;e+=1){let t=be(o,E,e),d=ne(t);ae.set(d,$[e]=_e(d,t))}let U=o[2];const ce=e=>e[5].code;for(let e=0;e<U.length;e+=1){let t=pe(o,U,e),d=ce(t);ie.set(d,k[e]=ke(d,t))}return{c(){l=c("h3"),s=h("Request verification ("),_=h(a),p=h(")"),n=v(),m=c("div"),u=c("p"),S=h("Sends "),q=c("strong"),L=h(j),ee=h(" verification email request."),N=v(),ve(w.$$.fragment),Q=v(),P=c("h6"),P.textContent="API details",z=v(),g=c("div"),D=c("strong"),D.textContent="POST",te=v(),H=c("div"),T=c("p"),le=h("/api/collections/"),G=c("strong"),J=h(O),se=h("/request-verification"),K=v(),R=c("div"),R.textContent="Body Parameters",W=v(),V=c("table"),V.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>email</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The auth record email address to send the verification request (if exists).</td></tr></tbody>`,X=v(),B=c("div"),B.textContent="Responses",Y=v(),y=c("div"),M=c("div");for(let e=0;e<$.length;e+=1)$[e].c();oe=v(),A=c("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(m,"class","content txt-lg m-b-sm"),b(P,"class","m-b-xs"),b(D,"class","label label-primary"),b(H,"class","content"),b(g,"class","alert alert-success"),b(R,"class","section-title"),b(V,"class","table-compact table-border m-b-base"),b(B,"class","section-title"),b(M,"class","tabs-header compact left"),b(A,"class","tabs-content"),b(y,"class","tabs")},m(e,t){r(e,l,t),i(l,s),i(l,_),i(l,p),r(e,n,t),r(e,m,t),i(m,u),i(u,S),i(u,q),i(q,L),i(u,ee),r(e,N,t),he(w,e,t),r(e,Q,t),r(e,P,t),r(e,z,t),r(e,g,t),i(g,D),i(g,te),i(g,H),i(H,T),i(T,le),i(T,G),i(G,J),i(T,se),r(e,K,t),r(e,R,t),r(e,W,t),r(e,V,t),r(e,X,t),r(e,B,t),r(e,Y,t),r(e,y,t),i(y,M);for(let d=0;d<$.length;d+=1)$[d].m(M,null);i(y,oe),i(y,A);for(let d=0;d<k.length;d+=1)k[d].m(A,null);C=!0},p(e,[t]){var de,me;(!C||t&1)&&a!==(a=e[0].name+"")&&F(_,a),(!C||t&1)&&j!==(j=e[0].name+"")&&F(L,j);const d={};t&9&&(d.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(de=e[0])==null?void 0:de.name}').requestVerification('test@example.com');
    `),t&9&&(d.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(me=e[0])==null?void 0:me.name}').requestVerification('test@example.com');
    `),w.$set(d),(!C||t&1)&&O!==(O=e[0].name+"")&&F(J,O),t&6&&(E=e[2],$=ue($,t,ne,1,e,E,ae,M,ge,_e,null,be)),t&6&&(U=e[2],ye(),k=ue(k,t,ce,1,e,U,ie,A,Ce,ke,null,pe),Pe())},i(e){if(!C){Z(w.$$.fragment,e);for(let t=0;t<U.length;t+=1)Z(k[t]);C=!0}},o(e){x(w.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);C=!1},d(e){e&&f(l),e&&f(n),e&&f(m),e&&f(N),$e(w,e),e&&f(Q),e&&f(P),e&&f(z),e&&f(g),e&&f(K),e&&f(R),e&&f(W),e&&f(V),e&&f(X),e&&f(B),e&&f(Y),e&&f(y);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function je(o,l,s){let a,{collection:_=new Te}=l,p=204,n=[];const m=u=>s(1,p=u.code);return o.$$set=u=>{"collection"in u&&s(0,_=u.collection)},s(3,a=Re.getApiExampleUrl(Ve.baseUrl)),s(2,n=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[_,p,n,a,m]}class Oe extends Se{constructor(l){super(),qe(this,l,je,Ue,we,{collection:0})}}export{Oe as default};
