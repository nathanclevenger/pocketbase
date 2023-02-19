import{S as $e,i as Se,s as qe,e as c,w,b as v,c as ve,f as b,g as r,h as n,m as we,x as I,O as ue,P as Pe,k as Re,Q as ge,n as ye,t as Z,a as x,o as d,d as he,R as Ce,C as Te,p as Be,r as L,u as Me,N as Ae}from"./index-add376b6.js";import{S as Ue}from"./SdkTabs-719d05b2.js";function pe(o,s,l){const a=o.slice();return a[5]=s[l],a}function be(o,s,l){const a=o.slice();return a[5]=s[l],a}function _e(o,s){let l,a=s[5].code+"",_,p,i,m;function u(){return s[4](s[5])}return{key:o,first:null,c(){l=c("button"),_=w(a),p=v(),b(l,"class","tab-item"),L(l,"active",s[1]===s[5].code),this.first=l},m($,S){r($,l,S),n(l,_),n(l,p),i||(m=Me(l,"click",u),i=!0)},p($,S){s=$,S&4&&a!==(a=s[5].code+"")&&I(_,a),S&6&&L(l,"active",s[1]===s[5].code)},d($){$&&d(l),i=!1,m()}}}function ke(o,s){let l,a,_,p;return a=new Ae({props:{content:s[5].body}}),{key:o,first:null,c(){l=c("div"),ve(a.$$.fragment),_=v(),b(l,"class","tab-item"),L(l,"active",s[1]===s[5].code),this.first=l},m(i,m){r(i,l,m),we(a,l,null),n(l,_),p=!0},p(i,m){s=i;const u={};m&4&&(u.content=s[5].body),a.$set(u),(!p||m&6)&&L(l,"active",s[1]===s[5].code)},i(i){p||(Z(a.$$.fragment,i),p=!0)},o(i){x(a.$$.fragment,i),p=!1},d(i){i&&d(l),he(a)}}}function je(o){var re,de;let s,l,a=o[0].name+"",_,p,i,m,u,$,S,D=o[0].name+"",N,ee,Q,q,z,y,G,P,H,te,O,C,se,J,E=o[0].name+"",K,le,V,T,W,B,X,M,Y,R,A,h=[],ae=new Map,oe,U,k=[],ne=new Map,g;q=new Ue({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${o[3]}');

        ...

        await db.collection('${(re=o[0])==null?void 0:re.name}').requestPasswordReset('test@example.com');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        await db.collection('${(de=o[0])==null?void 0:de.name}').requestPasswordReset('test@example.com');
    `}});let F=o[2];const ie=e=>e[5].code;for(let e=0;e<F.length;e+=1){let t=be(o,F,e),f=ie(t);ae.set(f,h[e]=_e(f,t))}let j=o[2];const ce=e=>e[5].code;for(let e=0;e<j.length;e+=1){let t=pe(o,j,e),f=ce(t);ne.set(f,k[e]=ke(f,t))}return{c(){s=c("h3"),l=w("Request password reset ("),_=w(a),p=w(")"),i=v(),m=c("div"),u=c("p"),$=w("Sends "),S=c("strong"),N=w(D),ee=w(" password reset email request."),Q=v(),ve(q.$$.fragment),z=v(),y=c("h6"),y.textContent="API details",G=v(),P=c("div"),H=c("strong"),H.textContent="POST",te=v(),O=c("div"),C=c("p"),se=w("/api/collections/"),J=c("strong"),K=w(E),le=w("/request-password-reset"),V=v(),T=c("div"),T.textContent="Body Parameters",W=v(),B=c("table"),B.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>email</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The auth record email address to send the password reset request (if exists).</td></tr></tbody>`,X=v(),M=c("div"),M.textContent="Responses",Y=v(),R=c("div"),A=c("div");for(let e=0;e<h.length;e+=1)h[e].c();oe=v(),U=c("div");for(let e=0;e<k.length;e+=1)k[e].c();b(s,"class","m-b-sm"),b(m,"class","content txt-lg m-b-sm"),b(y,"class","m-b-xs"),b(H,"class","label label-primary"),b(O,"class","content"),b(P,"class","alert alert-success"),b(T,"class","section-title"),b(B,"class","table-compact table-border m-b-base"),b(M,"class","section-title"),b(A,"class","tabs-header compact left"),b(U,"class","tabs-content"),b(R,"class","tabs")},m(e,t){r(e,s,t),n(s,l),n(s,_),n(s,p),r(e,i,t),r(e,m,t),n(m,u),n(u,$),n(u,S),n(S,N),n(u,ee),r(e,Q,t),we(q,e,t),r(e,z,t),r(e,y,t),r(e,G,t),r(e,P,t),n(P,H),n(P,te),n(P,O),n(O,C),n(C,se),n(C,J),n(J,K),n(C,le),r(e,V,t),r(e,T,t),r(e,W,t),r(e,B,t),r(e,X,t),r(e,M,t),r(e,Y,t),r(e,R,t),n(R,A);for(let f=0;f<h.length;f+=1)h[f].m(A,null);n(R,oe),n(R,U);for(let f=0;f<k.length;f+=1)k[f].m(U,null);g=!0},p(e,[t]){var fe,me;(!g||t&1)&&a!==(a=e[0].name+"")&&I(_,a),(!g||t&1)&&D!==(D=e[0].name+"")&&I(N,D);const f={};t&9&&(f.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(fe=e[0])==null?void 0:fe.name}').requestPasswordReset('test@example.com');
    `),t&9&&(f.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(me=e[0])==null?void 0:me.name}').requestPasswordReset('test@example.com');
    `),q.$set(f),(!g||t&1)&&E!==(E=e[0].name+"")&&I(K,E),t&6&&(F=e[2],h=ue(h,t,ie,1,e,F,ae,A,Pe,_e,null,be)),t&6&&(j=e[2],Re(),k=ue(k,t,ce,1,e,j,ne,U,ge,ke,null,pe),ye())},i(e){if(!g){Z(q.$$.fragment,e);for(let t=0;t<j.length;t+=1)Z(k[t]);g=!0}},o(e){x(q.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);g=!1},d(e){e&&d(s),e&&d(i),e&&d(m),e&&d(Q),he(q,e),e&&d(z),e&&d(y),e&&d(G),e&&d(P),e&&d(V),e&&d(T),e&&d(W),e&&d(B),e&&d(X),e&&d(M),e&&d(Y),e&&d(R);for(let t=0;t<h.length;t+=1)h[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function De(o,s,l){let a,{collection:_=new Ce}=s,p=204,i=[];const m=u=>l(1,p=u.code);return o.$$set=u=>{"collection"in u&&l(0,_=u.collection)},l(3,a=Te.getApiExampleUrl(Be.baseUrl)),l(2,i=[{code:204,body:"null"},{code:400,body:`
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
            `}]),[_,p,i,a,m]}class Ee extends $e{constructor(s){super(),Se(this,s,De,je,qe,{collection:0})}}export{Ee as default};
