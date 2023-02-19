import{S as he,i as Re,s as Pe,e as r,w as S,b as v,c as ve,f as _,g as c,h as n,m as Se,x as K,O as me,P as Oe,k as Ne,Q as Ce,n as We,t as Z,a as x,o as d,d as we,R as $e,C as Ee,p as Te,r as U,u as ge,N as Ae}from"./index-add376b6.js";import{S as De}from"./SdkTabs-719d05b2.js";function ue(o,s,l){const a=o.slice();return a[5]=s[l],a}function _e(o,s,l){const a=o.slice();return a[5]=s[l],a}function be(o,s){let l,a=s[5].code+"",b,u,i,p;function m(){return s[4](s[5])}return{key:o,first:null,c(){l=r("button"),b=S(a),u=v(),_(l,"class","tab-item"),U(l,"active",s[1]===s[5].code),this.first=l},m(h,R){c(h,l,R),n(l,b),n(l,u),i||(p=ge(l,"click",m),i=!0)},p(h,R){s=h,R&4&&a!==(a=s[5].code+"")&&K(b,a),R&6&&U(l,"active",s[1]===s[5].code)},d(h){h&&d(l),i=!1,p()}}}function ke(o,s){let l,a,b,u;return a=new Ae({props:{content:s[5].body}}),{key:o,first:null,c(){l=r("div"),ve(a.$$.fragment),b=v(),_(l,"class","tab-item"),U(l,"active",s[1]===s[5].code),this.first=l},m(i,p){c(i,l,p),Se(a,l,null),n(l,b),u=!0},p(i,p){s=i;const m={};p&4&&(m.content=s[5].body),a.$set(m),(!u||p&6)&&U(l,"active",s[1]===s[5].code)},i(i){u||(Z(a.$$.fragment,i),u=!0)},o(i){x(a.$$.fragment,i),u=!1},d(i){i&&d(l),we(a)}}}function ye(o){var ce,de;let s,l,a=o[0].name+"",b,u,i,p,m,h,R,q=o[0].name+"",j,ee,H,P,L,W,Q,O,M,te,F,$,se,z,I=o[0].name+"",G,le,J,E,V,T,X,g,Y,N,A,w=[],ae=new Map,oe,D,k=[],ne=new Map,C;P=new De({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${o[3]}');

        ...

        await db.collection('${(ce=o[0])==null?void 0:ce.name}').confirmPasswordReset(
            'TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        await db.collection('${(de=o[0])==null?void 0:de.name}').confirmPasswordReset(
          'TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `}});let B=o[2];const ie=e=>e[5].code;for(let e=0;e<B.length;e+=1){let t=_e(o,B,e),f=ie(t);ae.set(f,w[e]=be(f,t))}let y=o[2];const re=e=>e[5].code;for(let e=0;e<y.length;e+=1){let t=ue(o,y,e),f=re(t);ne.set(f,k[e]=ke(f,t))}return{c(){s=r("h3"),l=S("Confirm password reset ("),b=S(a),u=S(")"),i=v(),p=r("div"),m=r("p"),h=S("Confirms "),R=r("strong"),j=S(q),ee=S(" password reset request and sets a new password."),H=v(),ve(P.$$.fragment),L=v(),W=r("h6"),W.textContent="API details",Q=v(),O=r("div"),M=r("strong"),M.textContent="POST",te=v(),F=r("div"),$=r("p"),se=S("/api/collections/"),z=r("strong"),G=S(I),le=S("/confirm-password-reset"),J=v(),E=r("div"),E.textContent="Body Parameters",V=v(),T=r("table"),T.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the password reset request email.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>password</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The new password to set.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>passwordConfirm</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The new password confirmation.</td></tr></tbody>`,X=v(),g=r("div"),g.textContent="Responses",Y=v(),N=r("div"),A=r("div");for(let e=0;e<w.length;e+=1)w[e].c();oe=v(),D=r("div");for(let e=0;e<k.length;e+=1)k[e].c();_(s,"class","m-b-sm"),_(p,"class","content txt-lg m-b-sm"),_(W,"class","m-b-xs"),_(M,"class","label label-primary"),_(F,"class","content"),_(O,"class","alert alert-success"),_(E,"class","section-title"),_(T,"class","table-compact table-border m-b-base"),_(g,"class","section-title"),_(A,"class","tabs-header compact left"),_(D,"class","tabs-content"),_(N,"class","tabs")},m(e,t){c(e,s,t),n(s,l),n(s,b),n(s,u),c(e,i,t),c(e,p,t),n(p,m),n(m,h),n(m,R),n(R,j),n(m,ee),c(e,H,t),Se(P,e,t),c(e,L,t),c(e,W,t),c(e,Q,t),c(e,O,t),n(O,M),n(O,te),n(O,F),n(F,$),n($,se),n($,z),n(z,G),n($,le),c(e,J,t),c(e,E,t),c(e,V,t),c(e,T,t),c(e,X,t),c(e,g,t),c(e,Y,t),c(e,N,t),n(N,A);for(let f=0;f<w.length;f+=1)w[f].m(A,null);n(N,oe),n(N,D);for(let f=0;f<k.length;f+=1)k[f].m(D,null);C=!0},p(e,[t]){var fe,pe;(!C||t&1)&&a!==(a=e[0].name+"")&&K(b,a),(!C||t&1)&&q!==(q=e[0].name+"")&&K(j,q);const f={};t&9&&(f.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(fe=e[0])==null?void 0:fe.name}').confirmPasswordReset(
            'TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `),t&9&&(f.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${(pe=e[0])==null?void 0:pe.name}').confirmPasswordReset(
          'TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `),P.$set(f),(!C||t&1)&&I!==(I=e[0].name+"")&&K(G,I),t&6&&(B=e[2],w=me(w,t,ie,1,e,B,ae,A,Oe,be,null,_e)),t&6&&(y=e[2],Ne(),k=me(k,t,re,1,e,y,ne,D,Ce,ke,null,ue),We())},i(e){if(!C){Z(P.$$.fragment,e);for(let t=0;t<y.length;t+=1)Z(k[t]);C=!0}},o(e){x(P.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);C=!1},d(e){e&&d(s),e&&d(i),e&&d(p),e&&d(H),we(P,e),e&&d(L),e&&d(W),e&&d(Q),e&&d(O),e&&d(J),e&&d(E),e&&d(V),e&&d(T),e&&d(X),e&&d(g),e&&d(Y),e&&d(N);for(let t=0;t<w.length;t+=1)w[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function qe(o,s,l){let a,{collection:b=new $e}=s,u=204,i=[];const p=m=>l(1,u=m.code);return o.$$set=m=>{"collection"in m&&l(0,b=m.collection)},l(3,a=Ee.getApiExampleUrl(Te.baseUrl)),l(2,i=[{code:204,body:"null"},{code:400,body:`
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
            `}]),[b,u,i,a,p]}class Ie extends he{constructor(s){super(),Re(this,s,qe,ye,Pe,{collection:0})}}export{Ie as default};
