import{S as Pe,i as Te,s as Ee,e as c,w as v,b as h,c as Se,f as p,g as r,h as n,m as Ce,x as L,O as ve,P as Re,k as Me,Q as Ae,n as Be,t as x,a as ee,o as d,d as ye,R as We,C as ze,p as He,r as N,u as Oe,N as Ue}from"./index-add376b6.js";import{S as je}from"./SdkTabs-719d05b2.js";function we(o,l,s){const a=o.slice();return a[5]=l[s],a}function ge(o,l,s){const a=o.slice();return a[5]=l[s],a}function $e(o,l){let s,a=l[5].code+"",_,b,i,u;function f(){return l[4](l[5])}return{key:o,first:null,c(){s=c("button"),_=v(a),b=h(),p(s,"class","tab-item"),N(s,"active",l[1]===l[5].code),this.first=s},m($,q){r($,s,q),n(s,_),n(s,b),i||(u=Oe(s,"click",f),i=!0)},p($,q){l=$,q&4&&a!==(a=l[5].code+"")&&L(_,a),q&6&&N(s,"active",l[1]===l[5].code)},d($){$&&d(s),i=!1,u()}}}function qe(o,l){let s,a,_,b;return a=new Ue({props:{content:l[5].body}}),{key:o,first:null,c(){s=c("div"),Se(a.$$.fragment),_=h(),p(s,"class","tab-item"),N(s,"active",l[1]===l[5].code),this.first=s},m(i,u){r(i,s,u),Ce(a,s,null),n(s,_),b=!0},p(i,u){l=i;const f={};u&4&&(f.content=l[5].body),a.$set(f),(!b||u&6)&&N(s,"active",l[1]===l[5].code)},i(i){b||(x(a.$$.fragment,i),b=!0)},o(i){ee(a.$$.fragment,i),b=!1},d(i){i&&d(s),ye(a)}}}function De(o){var me,ue,fe,pe;let l,s,a=o[0].name+"",_,b,i,u,f,$,q,z=o[0].name+"",F,te,I,S,K,P,Q,w,H,le,O,T,se,G,U=o[0].name+"",J,ae,oe,j,V,E,X,R,Y,M,Z,C,A,g=[],ne=new Map,ie,B,k=[],ce=new Map,y;S=new je({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${o[3]}');

        ...

        await db.collection('${(me=o[0])==null?void 0:me.name}').authWithPassword('test@example.com', '1234567890');

        await db.collection('${(ue=o[0])==null?void 0:ue.name}').requestEmailChange('new@example.com');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        await db.collection('${(fe=o[0])==null?void 0:fe.name}').authWithPassword('test@example.com', '1234567890');

        await db.collection('${(pe=o[0])==null?void 0:pe.name}').requestEmailChange('new@example.com');
    `}});let D=o[2];const re=e=>e[5].code;for(let e=0;e<D.length;e+=1){let t=ge(o,D,e),m=re(t);ne.set(m,g[e]=$e(m,t))}let W=o[2];const de=e=>e[5].code;for(let e=0;e<W.length;e+=1){let t=we(o,W,e),m=de(t);ce.set(m,k[e]=qe(m,t))}return{c(){l=c("h3"),s=v("Request email change ("),_=v(a),b=v(")"),i=h(),u=c("div"),f=c("p"),$=v("Sends "),q=c("strong"),F=v(z),te=v(" email change request."),I=h(),Se(S.$$.fragment),K=h(),P=c("h6"),P.textContent="API details",Q=h(),w=c("div"),H=c("strong"),H.textContent="POST",le=h(),O=c("div"),T=c("p"),se=v("/api/collections/"),G=c("strong"),J=v(U),ae=v("/request-email-change"),oe=h(),j=c("p"),j.innerHTML="Requires record <code>Authorization:TOKEN</code> header",V=h(),E=c("div"),E.textContent="Body Parameters",X=h(),R=c("table"),R.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>newEmail</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The new email address to send the change email request.</td></tr></tbody>`,Y=h(),M=c("div"),M.textContent="Responses",Z=h(),C=c("div"),A=c("div");for(let e=0;e<g.length;e+=1)g[e].c();ie=h(),B=c("div");for(let e=0;e<k.length;e+=1)k[e].c();p(l,"class","m-b-sm"),p(u,"class","content txt-lg m-b-sm"),p(P,"class","m-b-xs"),p(H,"class","label label-primary"),p(O,"class","content"),p(j,"class","txt-hint txt-sm txt-right"),p(w,"class","alert alert-success"),p(E,"class","section-title"),p(R,"class","table-compact table-border m-b-base"),p(M,"class","section-title"),p(A,"class","tabs-header compact left"),p(B,"class","tabs-content"),p(C,"class","tabs")},m(e,t){r(e,l,t),n(l,s),n(l,_),n(l,b),r(e,i,t),r(e,u,t),n(u,f),n(f,$),n(f,q),n(q,F),n(f,te),r(e,I,t),Ce(S,e,t),r(e,K,t),r(e,P,t),r(e,Q,t),r(e,w,t),n(w,H),n(w,le),n(w,O),n(O,T),n(T,se),n(T,G),n(G,J),n(T,ae),n(w,oe),n(w,j),r(e,V,t),r(e,E,t),r(e,X,t),r(e,R,t),r(e,Y,t),r(e,M,t),r(e,Z,t),r(e,C,t),n(C,A);for(let m=0;m<g.length;m+=1)g[m].m(A,null);n(C,ie),n(C,B);for(let m=0;m<k.length;m+=1)k[m].m(B,null);y=!0},p(e,[t]){var be,_e,he,ke;(!y||t&1)&&a!==(a=e[0].name+"")&&L(_,a),(!y||t&1)&&z!==(z=e[0].name+"")&&L(F,z);const m={};t&9&&(m.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(be=e[0])==null?void 0:be.name}').authWithPassword('test@example.com', '1234567890');

        await db.collection('${(_e=e[0])==null?void 0:_e.name}').requestEmailChange('new@example.com');
    `),t&9&&(m.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(he=e[0])==null?void 0:he.name}').authWithPassword('test@example.com', '1234567890');

        await db.collection('${(ke=e[0])==null?void 0:ke.name}').requestEmailChange('new@example.com');
    `),S.$set(m),(!y||t&1)&&U!==(U=e[0].name+"")&&L(J,U),t&6&&(D=e[2],g=ve(g,t,re,1,e,D,ne,A,Re,$e,null,ge)),t&6&&(W=e[2],Me(),k=ve(k,t,de,1,e,W,ce,B,Ae,qe,null,we),Be())},i(e){if(!y){x(S.$$.fragment,e);for(let t=0;t<W.length;t+=1)x(k[t]);y=!0}},o(e){ee(S.$$.fragment,e);for(let t=0;t<k.length;t+=1)ee(k[t]);y=!1},d(e){e&&d(l),e&&d(i),e&&d(u),e&&d(I),ye(S,e),e&&d(K),e&&d(P),e&&d(Q),e&&d(w),e&&d(V),e&&d(E),e&&d(X),e&&d(R),e&&d(Y),e&&d(M),e&&d(Z),e&&d(C);for(let t=0;t<g.length;t+=1)g[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Le(o,l,s){let a,{collection:_=new We}=l,b=204,i=[];const u=f=>s(1,b=f.code);return o.$$set=f=>{"collection"in f&&s(0,_=f.collection)},s(3,a=ze.getApiExampleUrl(He.baseUrl)),s(2,i=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "newEmail": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:401,body:`
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `}]),[_,b,i,a,u]}class Ie extends Pe{constructor(l){super(),Te(this,l,Le,De,Ee,{collection:0})}}export{Ie as default};
