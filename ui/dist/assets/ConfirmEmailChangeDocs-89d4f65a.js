import{S as ge,i as Ce,s as $e,e as c,w as v,b as h,c as he,f as b,g as r,h as o,m as ve,x as Y,O as pe,P as we,k as Oe,Q as Re,n as Pe,t as Z,a as x,o as f,d as Se,R as Te,C as Ee,p as ye,r as j,u as qe,N as Ae}from"./index-add376b6.js";import{S as Ue}from"./SdkTabs-719d05b2.js";function ue(n,l,s){const a=n.slice();return a[5]=l[s],a}function be(n,l,s){const a=n.slice();return a[5]=l[s],a}function _e(n,l){let s,a=l[5].code+"",_,u,i,m;function p(){return l[4](l[5])}return{key:n,first:null,c(){s=c("button"),_=v(a),u=h(),b(s,"class","tab-item"),j(s,"active",l[1]===l[5].code),this.first=s},m(g,C){r(g,s,C),o(s,_),o(s,u),i||(m=qe(s,"click",p),i=!0)},p(g,C){l=g,C&4&&a!==(a=l[5].code+"")&&Y(_,a),C&6&&j(s,"active",l[1]===l[5].code)},d(g){g&&f(s),i=!1,m()}}}function ke(n,l){let s,a,_,u;return a=new Ae({props:{content:l[5].body}}),{key:n,first:null,c(){s=c("div"),he(a.$$.fragment),_=h(),b(s,"class","tab-item"),j(s,"active",l[1]===l[5].code),this.first=s},m(i,m){r(i,s,m),ve(a,s,null),o(s,_),u=!0},p(i,m){l=i;const p={};m&4&&(p.content=l[5].body),a.$set(p),(!u||m&6)&&j(s,"active",l[1]===l[5].code)},i(i){u||(Z(a.$$.fragment,i),u=!0)},o(i){x(a.$$.fragment,i),u=!1},d(i){i&&f(s),Se(a)}}}function De(n){var re,fe;let l,s,a=n[0].name+"",_,u,i,m,p,g,C,N=n[0].name+"",H,ee,F,$,I,P,L,w,B,te,K,T,le,Q,M=n[0].name+"",z,se,G,E,J,y,V,q,X,O,A,S=[],ae=new Map,ne,U,k=[],oe=new Map,R;$=new Ue({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${n[3]}');

        ...

        await db.collection('${(re=n[0])==null?void 0:re.name}').confirmEmailChange(
            'TOKEN',
            'YOUR_PASSWORD',
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[3]}');

        ...

        await db.collection('${(fe=n[0])==null?void 0:fe.name}').confirmEmailChange(
          'TOKEN',
          'YOUR_PASSWORD',
        );
    `}});let W=n[2];const ie=e=>e[5].code;for(let e=0;e<W.length;e+=1){let t=be(n,W,e),d=ie(t);ae.set(d,S[e]=_e(d,t))}let D=n[2];const ce=e=>e[5].code;for(let e=0;e<D.length;e+=1){let t=ue(n,D,e),d=ce(t);oe.set(d,k[e]=ke(d,t))}return{c(){l=c("h3"),s=v("Confirm email change ("),_=v(a),u=v(")"),i=h(),m=c("div"),p=c("p"),g=v("Confirms "),C=c("strong"),H=v(N),ee=v(" email change request."),F=h(),he($.$$.fragment),I=h(),P=c("h6"),P.textContent="API details",L=h(),w=c("div"),B=c("strong"),B.textContent="POST",te=h(),K=c("div"),T=c("p"),le=v("/api/collections/"),Q=c("strong"),z=v(M),se=v("/confirm-email-change"),G=h(),E=c("div"),E.textContent="Body Parameters",J=h(),y=c("table"),y.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the change email request email.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>password</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The account password to confirm the email change.</td></tr></tbody>`,V=h(),q=c("div"),q.textContent="Responses",X=h(),O=c("div"),A=c("div");for(let e=0;e<S.length;e+=1)S[e].c();ne=h(),U=c("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(m,"class","content txt-lg m-b-sm"),b(P,"class","m-b-xs"),b(B,"class","label label-primary"),b(K,"class","content"),b(w,"class","alert alert-success"),b(E,"class","section-title"),b(y,"class","table-compact table-border m-b-base"),b(q,"class","section-title"),b(A,"class","tabs-header compact left"),b(U,"class","tabs-content"),b(O,"class","tabs")},m(e,t){r(e,l,t),o(l,s),o(l,_),o(l,u),r(e,i,t),r(e,m,t),o(m,p),o(p,g),o(p,C),o(C,H),o(p,ee),r(e,F,t),ve($,e,t),r(e,I,t),r(e,P,t),r(e,L,t),r(e,w,t),o(w,B),o(w,te),o(w,K),o(K,T),o(T,le),o(T,Q),o(Q,z),o(T,se),r(e,G,t),r(e,E,t),r(e,J,t),r(e,y,t),r(e,V,t),r(e,q,t),r(e,X,t),r(e,O,t),o(O,A);for(let d=0;d<S.length;d+=1)S[d].m(A,null);o(O,ne),o(O,U);for(let d=0;d<k.length;d+=1)k[d].m(U,null);R=!0},p(e,[t]){var de,me;(!R||t&1)&&a!==(a=e[0].name+"")&&Y(_,a),(!R||t&1)&&N!==(N=e[0].name+"")&&Y(H,N);const d={};t&9&&(d.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(de=e[0])==null?void 0:de.name}').confirmEmailChange(
            'TOKEN',
            'YOUR_PASSWORD',
        );
    `),t&9&&(d.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(me=e[0])==null?void 0:me.name}').confirmEmailChange(
          'TOKEN',
          'YOUR_PASSWORD',
        );
    `),$.$set(d),(!R||t&1)&&M!==(M=e[0].name+"")&&Y(z,M),t&6&&(W=e[2],S=pe(S,t,ie,1,e,W,ae,A,we,_e,null,be)),t&6&&(D=e[2],Oe(),k=pe(k,t,ce,1,e,D,oe,U,Re,ke,null,ue),Pe())},i(e){if(!R){Z($.$$.fragment,e);for(let t=0;t<D.length;t+=1)Z(k[t]);R=!0}},o(e){x($.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);R=!1},d(e){e&&f(l),e&&f(i),e&&f(m),e&&f(F),Se($,e),e&&f(I),e&&f(P),e&&f(L),e&&f(w),e&&f(G),e&&f(E),e&&f(J),e&&f(y),e&&f(V),e&&f(q),e&&f(X),e&&f(O);for(let t=0;t<S.length;t+=1)S[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Ne(n,l,s){let a,{collection:_=new Te}=l,u=204,i=[];const m=p=>s(1,u=p.code);return n.$$set=p=>{"collection"in p&&s(0,_=p.collection)},s(3,a=Ee.getApiExampleUrl(ye.baseUrl)),s(2,i=[{code:204,body:"null"},{code:400,body:`
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
            `}]),[_,u,i,a,m]}class Me extends ge{constructor(l){super(),Ce(this,l,Ne,De,$e,{collection:0})}}export{Me as default};
