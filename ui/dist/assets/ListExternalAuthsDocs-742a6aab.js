import{S as qe,i as Oe,s as Le,e as i,w as v,b as _,c as Te,f as b,g as r,h as o,m as Ee,x as U,O as ge,P as Me,k as Re,Q as We,n as ze,t as te,a as le,o as c,d as Ie,R as Be,C as De,p as He,r as j,u as Ue,N as je}from"./index-add376b6.js";import{S as Ne}from"./SdkTabs-719d05b2.js";function ye(a,l,s){const n=a.slice();return n[5]=l[s],n}function Ae(a,l,s){const n=a.slice();return n[5]=l[s],n}function Pe(a,l){let s,n=l[5].code+"",m,h,d,u;function p(){return l[4](l[5])}return{key:a,first:null,c(){s=i("button"),m=v(n),h=_(),b(s,"class","tab-item"),j(s,"active",l[1]===l[5].code),this.first=s},m(S,g){r(S,s,g),o(s,m),o(s,h),d||(u=Ue(s,"click",p),d=!0)},p(S,g){l=S,g&4&&n!==(n=l[5].code+"")&&U(m,n),g&6&&j(s,"active",l[1]===l[5].code)},d(S){S&&c(s),d=!1,u()}}}function Ce(a,l){let s,n,m,h;return n=new je({props:{content:l[5].body}}),{key:a,first:null,c(){s=i("div"),Te(n.$$.fragment),m=_(),b(s,"class","tab-item"),j(s,"active",l[1]===l[5].code),this.first=s},m(d,u){r(d,s,u),Ee(n,s,null),o(s,m),h=!0},p(d,u){l=d;const p={};u&4&&(p.content=l[5].body),n.$set(p),(!h||u&6)&&j(s,"active",l[1]===l[5].code)},i(d){h||(te(n.$$.fragment,d),h=!0)},o(d){le(n.$$.fragment,d),h=!1},d(d){d&&c(s),Ie(n)}}}function Ge(a){var be,he,_e,ke;let l,s,n=a[0].name+"",m,h,d,u,p,S,g,R=a[0].name+"",N,se,oe,G,K,y,Q,T,F,w,W,ae,z,A,ne,J,B=a[0].name+"",V,ie,X,de,re,D,Y,E,Z,I,x,q,ee,P,O,$=[],ce=new Map,ue,L,k=[],fe=new Map,C;y=new Ne({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${a[3]}');

        ...

        await db.collection('${(be=a[0])==null?void 0:be.name}').authWithPassword('test@example.com', '123456');

        const result = await db.collection('${(he=a[0])==null?void 0:he.name}').listExternalAuths(
            db.authStore.model.id
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await db.collection('${(_e=a[0])==null?void 0:_e.name}').authWithPassword('test@example.com', '123456');

        final result = await db.collection('${(ke=a[0])==null?void 0:ke.name}').listExternalAuths(
          db.authStore.model.id,
        );
    `}});let H=a[2];const me=e=>e[5].code;for(let e=0;e<H.length;e+=1){let t=Ae(a,H,e),f=me(t);ce.set(f,$[e]=Pe(f,t))}let M=a[2];const pe=e=>e[5].code;for(let e=0;e<M.length;e+=1){let t=ye(a,M,e),f=pe(t);fe.set(f,k[e]=Ce(f,t))}return{c(){l=i("h3"),s=v("List OAuth2 accounts ("),m=v(n),h=v(")"),d=_(),u=i("div"),p=i("p"),S=v("Returns a list with all OAuth2 providers linked to a single "),g=i("strong"),N=v(R),se=v("."),oe=_(),G=i("p"),G.textContent="Only admins and the account owner can access this action.",K=_(),Te(y.$$.fragment),Q=_(),T=i("h6"),T.textContent="API details",F=_(),w=i("div"),W=i("strong"),W.textContent="GET",ae=_(),z=i("div"),A=i("p"),ne=v("/api/collections/"),J=i("strong"),V=v(B),ie=v("/records/"),X=i("strong"),X.textContent=":id",de=v("/external-auths"),re=_(),D=i("p"),D.innerHTML="Requires <code>Authorization:TOKEN</code> header",Y=_(),E=i("div"),E.textContent="Path Parameters",Z=_(),I=i("table"),I.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr></thead> 
    <tbody><tr><td>id</td> 
            <td><span class="label">String</span></td> 
            <td>ID of the auth record.</td></tr></tbody>`,x=_(),q=i("div"),q.textContent="Responses",ee=_(),P=i("div"),O=i("div");for(let e=0;e<$.length;e+=1)$[e].c();ue=_(),L=i("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(u,"class","content txt-lg m-b-sm"),b(T,"class","m-b-xs"),b(W,"class","label label-primary"),b(z,"class","content"),b(D,"class","txt-hint txt-sm txt-right"),b(w,"class","alert alert-info"),b(E,"class","section-title"),b(I,"class","table-compact table-border m-b-base"),b(q,"class","section-title"),b(O,"class","tabs-header compact left"),b(L,"class","tabs-content"),b(P,"class","tabs")},m(e,t){r(e,l,t),o(l,s),o(l,m),o(l,h),r(e,d,t),r(e,u,t),o(u,p),o(p,S),o(p,g),o(g,N),o(p,se),o(u,oe),o(u,G),r(e,K,t),Ee(y,e,t),r(e,Q,t),r(e,T,t),r(e,F,t),r(e,w,t),o(w,W),o(w,ae),o(w,z),o(z,A),o(A,ne),o(A,J),o(J,V),o(A,ie),o(A,X),o(A,de),o(w,re),o(w,D),r(e,Y,t),r(e,E,t),r(e,Z,t),r(e,I,t),r(e,x,t),r(e,q,t),r(e,ee,t),r(e,P,t),o(P,O);for(let f=0;f<$.length;f+=1)$[f].m(O,null);o(P,ue),o(P,L);for(let f=0;f<k.length;f+=1)k[f].m(L,null);C=!0},p(e,[t]){var ve,we,$e,Se;(!C||t&1)&&n!==(n=e[0].name+"")&&U(m,n),(!C||t&1)&&R!==(R=e[0].name+"")&&U(N,R);const f={};t&9&&(f.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(ve=e[0])==null?void 0:ve.name}').authWithPassword('test@example.com', '123456');

        const result = await db.collection('${(we=e[0])==null?void 0:we.name}').listExternalAuths(
            db.authStore.model.id
        );
    `),t&9&&(f.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${($e=e[0])==null?void 0:$e.name}').authWithPassword('test@example.com', '123456');

        final result = await db.collection('${(Se=e[0])==null?void 0:Se.name}').listExternalAuths(
          db.authStore.model.id,
        );
    `),y.$set(f),(!C||t&1)&&B!==(B=e[0].name+"")&&U(V,B),t&6&&(H=e[2],$=ge($,t,me,1,e,H,ce,O,Me,Pe,null,Ae)),t&6&&(M=e[2],Re(),k=ge(k,t,pe,1,e,M,fe,L,We,Ce,null,ye),ze())},i(e){if(!C){te(y.$$.fragment,e);for(let t=0;t<M.length;t+=1)te(k[t]);C=!0}},o(e){le(y.$$.fragment,e);for(let t=0;t<k.length;t+=1)le(k[t]);C=!1},d(e){e&&c(l),e&&c(d),e&&c(u),e&&c(K),Ie(y,e),e&&c(Q),e&&c(T),e&&c(F),e&&c(w),e&&c(Y),e&&c(E),e&&c(Z),e&&c(I),e&&c(x),e&&c(q),e&&c(ee),e&&c(P);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Ke(a,l,s){let n,{collection:m=new Be}=l,h=200,d=[];const u=p=>s(1,h=p.code);return a.$$set=p=>{"collection"in p&&s(0,m=p.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(2,d=[{code:200,body:`
                [
                    {
                      "id": "8171022dc95a4e8",
                      "created": "2022-09-01 10:24:18.434",
                      "updated": "2022-09-01 10:24:18.889",
                      "recordId": "e22581b6f1d44ea",
                      "collectionId": "${m.id}",
                      "provider": "google",
                      "providerId": "2da15468800514p",
                    },
                    {
                      "id": "171022dc895a4e8",
                      "created": "2022-09-01 10:24:18.434",
                      "updated": "2022-09-01 10:24:18.889",
                      "recordId": "e22581b6f1d44ea",
                      "collectionId": "${m.id}",
                      "provider": "twitter",
                      "providerId": "720688005140514",
                    }
                ]
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
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}])},s(3,n=De.getApiExampleUrl(He.baseUrl)),[m,h,d,n,u]}class Je extends qe{constructor(l){super(),Oe(this,l,Ke,Ge,Le,{collection:0})}}export{Je as default};
