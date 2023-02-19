import{S as Oe,i as De,s as Me,e as i,w as v,b as h,c as Ee,f as p,g as c,h as s,m as Ue,x as j,O as ye,P as We,k as ze,Q as Be,n as He,t as le,a as oe,o as d,d as qe,R as Le,C as Re,p as je,r as I,u as Ie,N as Ne}from"./index-add376b6.js";import{S as Ke}from"./SdkTabs-719d05b2.js";function Ae(n,l,o){const a=n.slice();return a[5]=l[o],a}function Ce(n,l,o){const a=n.slice();return a[5]=l[o],a}function Pe(n,l){let o,a=l[5].code+"",_,b,r,u;function f(){return l[4](l[5])}return{key:n,first:null,c(){o=i("button"),_=v(a),b=h(),p(o,"class","tab-item"),I(o,"active",l[1]===l[5].code),this.first=o},m($,S){c($,o,S),s(o,_),s(o,b),r||(u=Ie(o,"click",f),r=!0)},p($,S){l=$,S&4&&a!==(a=l[5].code+"")&&j(_,a),S&6&&I(o,"active",l[1]===l[5].code)},d($){$&&d(o),r=!1,u()}}}function Te(n,l){let o,a,_,b;return a=new Ne({props:{content:l[5].body}}),{key:n,first:null,c(){o=i("div"),Ee(a.$$.fragment),_=h(),p(o,"class","tab-item"),I(o,"active",l[1]===l[5].code),this.first=o},m(r,u){c(r,o,u),Ue(a,o,null),s(o,_),b=!0},p(r,u){l=r;const f={};u&4&&(f.content=l[5].body),a.$set(f),(!b||u&6)&&I(o,"active",l[1]===l[5].code)},i(r){b||(le(a.$$.fragment,r),b=!0)},o(r){oe(a.$$.fragment,r),b=!1},d(r){r&&d(o),qe(a)}}}function Qe(n){var he,_e,ke,ve;let l,o,a=n[0].name+"",_,b,r,u,f,$,S,W=n[0].name+"",N,se,ae,K,Q,A,F,T,G,g,z,ne,B,y,ie,J,H=n[0].name+"",V,re,X,ce,Y,de,L,Z,E,x,U,ee,q,te,C,O,w=[],ue=new Map,me,D,k=[],fe=new Map,P;A=new Ke({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${n[3]}');

        ...

        await db.collection('${(he=n[0])==null?void 0:he.name}').authWithPassword('test@example.com', '123456');

        await db.collection('${(_e=n[0])==null?void 0:_e.name}').unlinkExternalAuth(
            db.authStore.model.id,
            'google'
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[3]}');

        ...

        await db.collection('${(ke=n[0])==null?void 0:ke.name}').authWithPassword('test@example.com', '123456');

        await db.collection('${(ve=n[0])==null?void 0:ve.name}').unlinkExternalAuth(
          db.authStore.model.id,
          'google',
        );
    `}});let R=n[2];const pe=e=>e[5].code;for(let e=0;e<R.length;e+=1){let t=Ce(n,R,e),m=pe(t);ue.set(m,w[e]=Pe(m,t))}let M=n[2];const be=e=>e[5].code;for(let e=0;e<M.length;e+=1){let t=Ae(n,M,e),m=be(t);fe.set(m,k[e]=Te(m,t))}return{c(){l=i("h3"),o=v("Unlink OAuth2 account ("),_=v(a),b=v(")"),r=h(),u=i("div"),f=i("p"),$=v("Unlink a single external OAuth2 provider from "),S=i("strong"),N=v(W),se=v(" record."),ae=h(),K=i("p"),K.textContent="Only admins and the account owner can access this action.",Q=h(),Ee(A.$$.fragment),F=h(),T=i("h6"),T.textContent="API details",G=h(),g=i("div"),z=i("strong"),z.textContent="DELETE",ne=h(),B=i("div"),y=i("p"),ie=v("/api/collections/"),J=i("strong"),V=v(H),re=v("/records/"),X=i("strong"),X.textContent=":id",ce=v("/external-auths/"),Y=i("strong"),Y.textContent=":provider",de=h(),L=i("p"),L.innerHTML="Requires <code>Authorization:TOKEN</code> header",Z=h(),E=i("div"),E.textContent="Path Parameters",x=h(),U=i("table"),U.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr></thead> 
    <tbody><tr><td>id</td> 
            <td><span class="label">String</span></td> 
            <td>ID of the auth record.</td></tr> 
        <tr><td>provider</td> 
            <td><span class="label">String</span></td> 
            <td>The name of the auth provider to unlink, eg. <code>google</code>, <code>twitter</code>,
                <code>github</code>, etc.</td></tr></tbody>`,ee=h(),q=i("div"),q.textContent="Responses",te=h(),C=i("div"),O=i("div");for(let e=0;e<w.length;e+=1)w[e].c();me=h(),D=i("div");for(let e=0;e<k.length;e+=1)k[e].c();p(l,"class","m-b-sm"),p(u,"class","content txt-lg m-b-sm"),p(T,"class","m-b-xs"),p(z,"class","label label-primary"),p(B,"class","content"),p(L,"class","txt-hint txt-sm txt-right"),p(g,"class","alert alert-danger"),p(E,"class","section-title"),p(U,"class","table-compact table-border m-b-base"),p(q,"class","section-title"),p(O,"class","tabs-header compact left"),p(D,"class","tabs-content"),p(C,"class","tabs")},m(e,t){c(e,l,t),s(l,o),s(l,_),s(l,b),c(e,r,t),c(e,u,t),s(u,f),s(f,$),s(f,S),s(S,N),s(f,se),s(u,ae),s(u,K),c(e,Q,t),Ue(A,e,t),c(e,F,t),c(e,T,t),c(e,G,t),c(e,g,t),s(g,z),s(g,ne),s(g,B),s(B,y),s(y,ie),s(y,J),s(J,V),s(y,re),s(y,X),s(y,ce),s(y,Y),s(g,de),s(g,L),c(e,Z,t),c(e,E,t),c(e,x,t),c(e,U,t),c(e,ee,t),c(e,q,t),c(e,te,t),c(e,C,t),s(C,O);for(let m=0;m<w.length;m+=1)w[m].m(O,null);s(C,me),s(C,D);for(let m=0;m<k.length;m+=1)k[m].m(D,null);P=!0},p(e,[t]){var ge,we,$e,Se;(!P||t&1)&&a!==(a=e[0].name+"")&&j(_,a),(!P||t&1)&&W!==(W=e[0].name+"")&&j(N,W);const m={};t&9&&(m.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        await db.collection('${(ge=e[0])==null?void 0:ge.name}').authWithPassword('test@example.com', '123456');

        await db.collection('${(we=e[0])==null?void 0:we.name}').unlinkExternalAuth(
            db.authStore.model.id,
            'google'
        );
    `),t&9&&(m.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await db.collection('${($e=e[0])==null?void 0:$e.name}').authWithPassword('test@example.com', '123456');

        await db.collection('${(Se=e[0])==null?void 0:Se.name}').unlinkExternalAuth(
          db.authStore.model.id,
          'google',
        );
    `),A.$set(m),(!P||t&1)&&H!==(H=e[0].name+"")&&j(V,H),t&6&&(R=e[2],w=ye(w,t,pe,1,e,R,ue,O,We,Pe,null,Ce)),t&6&&(M=e[2],ze(),k=ye(k,t,be,1,e,M,fe,D,Be,Te,null,Ae),He())},i(e){if(!P){le(A.$$.fragment,e);for(let t=0;t<M.length;t+=1)le(k[t]);P=!0}},o(e){oe(A.$$.fragment,e);for(let t=0;t<k.length;t+=1)oe(k[t]);P=!1},d(e){e&&d(l),e&&d(r),e&&d(u),e&&d(Q),qe(A,e),e&&d(F),e&&d(T),e&&d(G),e&&d(g),e&&d(Z),e&&d(E),e&&d(x),e&&d(U),e&&d(ee),e&&d(q),e&&d(te),e&&d(C);for(let t=0;t<w.length;t+=1)w[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Fe(n,l,o){let a,{collection:_=new Le}=l,b=204,r=[];const u=f=>o(1,b=f.code);return n.$$set=f=>{"collection"in f&&o(0,_=f.collection)},o(3,a=Re.getApiExampleUrl(je.baseUrl)),o(2,r=[{code:204,body:"null"},{code:401,body:`
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
            `}]),[_,b,r,a,u]}class Ve extends Oe{constructor(l){super(),De(this,l,Fe,Qe,Me,{collection:0})}}export{Ve as default};
