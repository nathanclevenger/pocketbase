import{S as Ht,i as Bt,s as Jt,N as jt,e as s,w as v,b as h,c as rt,f as p,g as r,h as a,m as dt,x as ct,O as Ft,P as Nt,k as Qt,Q as zt,n as Kt,t as H,a as B,o as d,d as ut,R as Yt,C as Lt,p as Gt,r as J,u as Xt}from"./index-add376b6.js";import{S as Zt}from"./SdkTabs-719d05b2.js";function Pt(i,l,o){const n=i.slice();return n[5]=l[o],n}function xt(i,l,o){const n=i.slice();return n[5]=l[o],n}function Mt(i,l){let o,n=l[5].code+"",m,_,c,b;function g(){return l[4](l[5])}return{key:i,first:null,c(){o=s("button"),m=v(n),_=h(),p(o,"class","tab-item"),J(o,"active",l[1]===l[5].code),this.first=o},m(k,R){r(k,o,R),a(o,m),a(o,_),c||(b=Xt(o,"click",g),c=!0)},p(k,R){l=k,R&4&&n!==(n=l[5].code+"")&&ct(m,n),R&6&&J(o,"active",l[1]===l[5].code)},d(k){k&&d(o),c=!1,b()}}}function Wt(i,l){let o,n,m,_;return n=new jt({props:{content:l[5].body}}),{key:i,first:null,c(){o=s("div"),rt(n.$$.fragment),m=h(),p(o,"class","tab-item"),J(o,"active",l[1]===l[5].code),this.first=o},m(c,b){r(c,o,b),dt(n,o,null),a(o,m),_=!0},p(c,b){l=c;const g={};b&4&&(g.content=l[5].body),n.$set(g),(!_||b&6)&&J(o,"active",l[1]===l[5].code)},i(c){_||(H(n.$$.fragment,c),_=!0)},o(c){B(n.$$.fragment,c),_=!1},d(c){c&&d(o),ut(n)}}}function te(i){var qt,It;let l,o,n=i[0].name+"",m,_,c,b,g,k,R,C,N,y,x,ht,M,D,pt,Q,W=i[0].name+"",z,bt,K,q,Y,I,G,U,X,O,Z,ft,tt,$,et,mt,at,_t,f,vt,E,gt,kt,wt,lt,St,ot,Rt,yt,Ot,st,$t,nt,V,it,A,F,S=[],At=new Map,Et,L,w=[],Tt=new Map,T;k=new Zt({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${i[3]}');

        ...

        const authData = await db.collection('${(qt=i[0])==null?void 0:qt.name}').authWithOAuth2(
            'google',
            'CODE',
            'VERIFIER',
            'REDIRECT_URL',
            // optional data that will be used for the new account on OAuth2 sign-up
            {
              'name': 'test',
            },
        );

        // after the above you can also access the auth data from the authStore
        console.log(db.authStore.isValid);
        console.log(db.authStore.token);
        console.log(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[3]}');

        ...

        final authData = await db.collection('${(It=i[0])==null?void 0:It.name}').authWithOAuth2(
          'google',
          'CODE',
          'VERIFIER',
          'REDIRECT_URL',
          // optional data that will be used for the new account on OAuth2 sign-up
          createData: {
            'name': 'test',
          },
        );

        // after the above you can also access the auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `}}),E=new jt({props:{content:"?expand=relField1,relField2.subRelField"}});let j=i[2];const Ct=t=>t[5].code;for(let t=0;t<j.length;t+=1){let e=xt(i,j,t),u=Ct(e);At.set(u,S[t]=Mt(u,e))}let P=i[2];const Dt=t=>t[5].code;for(let t=0;t<P.length;t+=1){let e=Pt(i,P,t),u=Dt(e);Tt.set(u,w[t]=Wt(u,e))}return{c(){l=s("h3"),o=v("Auth with OAuth2 ("),m=v(n),_=v(")"),c=h(),b=s("div"),b.innerHTML=`<p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p> 
    <p>This action usually should be called right after the provider login page redirect.</p> 
    <p>You could also check the
        <a href="https://saas.dev/docs/authentication/#web-oauth2-integration" target="_blank" rel="noopener noreferrer">OAuth2 web integration example
        </a>.</p>`,g=h(),rt(k.$$.fragment),R=h(),C=s("h6"),C.textContent="API details",N=h(),y=s("div"),x=s("strong"),x.textContent="POST",ht=h(),M=s("div"),D=s("p"),pt=v("/api/collections/"),Q=s("strong"),z=v(W),bt=v("/auth-with-oauth2"),K=h(),q=s("div"),q.textContent="Body Parameters",Y=h(),I=s("table"),I.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>provider</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The name of the OAuth2 client provider (eg. &quot;google&quot;).</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>code</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The authorization code returned from the initial request.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>codeVerifier</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The code verifier sent with the initial request as part of the code_challenge.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>redirectUrl</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The redirect url sent with the initial request.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> 
                    <span>createData</span></div></td> 
            <td><span class="label">Object</span></td> 
            <td><p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p> 
                <p>The created auth record must comply with the same requirements and validations in the
                    regular <strong>create</strong> action.
                    <br/> 
                    <em>The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and files
                        upload currently are not supported during OAuth2 sign-ups.</em></p></td></tr></tbody>`,G=h(),U=s("div"),U.textContent="Query parameters",X=h(),O=s("table"),Z=s("thead"),Z.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,ft=h(),tt=s("tbody"),$=s("tr"),et=s("td"),et.textContent="expand",mt=h(),at=s("td"),at.innerHTML='<span class="label">String</span>',_t=h(),f=s("td"),vt=v(`Auto expand record relations. Ex.:
                `),rt(E.$$.fragment),gt=v(`
                Supports up to 6-levels depth nested relations expansion. `),kt=s("br"),wt=v(`
                The expanded relations will be appended to the record under the
                `),lt=s("code"),lt.textContent="expand",St=v(" property (eg. "),ot=s("code"),ot.textContent='"expand": {"relField1": {...}, ...}',Rt=v(`).
                `),yt=s("br"),Ot=v(`
                Only the relations to which the request user has permissions to `),st=s("strong"),st.textContent="view",$t=v(" will be expanded."),nt=h(),V=s("div"),V.textContent="Responses",it=h(),A=s("div"),F=s("div");for(let t=0;t<S.length;t+=1)S[t].c();Et=h(),L=s("div");for(let t=0;t<w.length;t+=1)w[t].c();p(l,"class","m-b-sm"),p(b,"class","content txt-lg m-b-sm"),p(C,"class","m-b-xs"),p(x,"class","label label-primary"),p(M,"class","content"),p(y,"class","alert alert-success"),p(q,"class","section-title"),p(I,"class","table-compact table-border m-b-base"),p(U,"class","section-title"),p(O,"class","table-compact table-border m-b-base"),p(V,"class","section-title"),p(F,"class","tabs-header compact left"),p(L,"class","tabs-content"),p(A,"class","tabs")},m(t,e){r(t,l,e),a(l,o),a(l,m),a(l,_),r(t,c,e),r(t,b,e),r(t,g,e),dt(k,t,e),r(t,R,e),r(t,C,e),r(t,N,e),r(t,y,e),a(y,x),a(y,ht),a(y,M),a(M,D),a(D,pt),a(D,Q),a(Q,z),a(D,bt),r(t,K,e),r(t,q,e),r(t,Y,e),r(t,I,e),r(t,G,e),r(t,U,e),r(t,X,e),r(t,O,e),a(O,Z),a(O,ft),a(O,tt),a(tt,$),a($,et),a($,mt),a($,at),a($,_t),a($,f),a(f,vt),dt(E,f,null),a(f,gt),a(f,kt),a(f,wt),a(f,lt),a(f,St),a(f,ot),a(f,Rt),a(f,yt),a(f,Ot),a(f,st),a(f,$t),r(t,nt,e),r(t,V,e),r(t,it,e),r(t,A,e),a(A,F);for(let u=0;u<S.length;u+=1)S[u].m(F,null);a(A,Et),a(A,L);for(let u=0;u<w.length;u+=1)w[u].m(L,null);T=!0},p(t,[e]){var Ut,Vt;(!T||e&1)&&n!==(n=t[0].name+"")&&ct(m,n);const u={};e&9&&(u.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${t[3]}');

        ...

        const authData = await db.collection('${(Ut=t[0])==null?void 0:Ut.name}').authWithOAuth2(
            'google',
            'CODE',
            'VERIFIER',
            'REDIRECT_URL',
            // optional data that will be used for the new account on OAuth2 sign-up
            {
              'name': 'test',
            },
        );

        // after the above you can also access the auth data from the authStore
        console.log(db.authStore.isValid);
        console.log(db.authStore.token);
        console.log(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `),e&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t[3]}');

        ...

        final authData = await db.collection('${(Vt=t[0])==null?void 0:Vt.name}').authWithOAuth2(
          'google',
          'CODE',
          'VERIFIER',
          'REDIRECT_URL',
          // optional data that will be used for the new account on OAuth2 sign-up
          createData: {
            'name': 'test',
          },
        );

        // after the above you can also access the auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `),k.$set(u),(!T||e&1)&&W!==(W=t[0].name+"")&&ct(z,W),e&6&&(j=t[2],S=Ft(S,e,Ct,1,t,j,At,F,Nt,Mt,null,xt)),e&6&&(P=t[2],Qt(),w=Ft(w,e,Dt,1,t,P,Tt,L,zt,Wt,null,Pt),Kt())},i(t){if(!T){H(k.$$.fragment,t),H(E.$$.fragment,t);for(let e=0;e<P.length;e+=1)H(w[e]);T=!0}},o(t){B(k.$$.fragment,t),B(E.$$.fragment,t);for(let e=0;e<w.length;e+=1)B(w[e]);T=!1},d(t){t&&d(l),t&&d(c),t&&d(b),t&&d(g),ut(k,t),t&&d(R),t&&d(C),t&&d(N),t&&d(y),t&&d(K),t&&d(q),t&&d(Y),t&&d(I),t&&d(G),t&&d(U),t&&d(X),t&&d(O),ut(E),t&&d(nt),t&&d(V),t&&d(it),t&&d(A);for(let e=0;e<S.length;e+=1)S[e].d();for(let e=0;e<w.length;e+=1)w[e].d()}}}function ee(i,l,o){let n,{collection:m=new Yt}=l,_=200,c=[];const b=g=>o(1,_=g.code);return i.$$set=g=>{"collection"in g&&o(0,m=g.collection)},i.$$.update=()=>{i.$$.dirty&1&&o(2,c=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:Lt.dummyCollectionRecord(m),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarUrl:"https://example.com/avatar.png"}},null,2)},{code:400,body:`
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},o(3,n=Lt.getApiExampleUrl(Gt.baseUrl)),[m,_,c,n,b]}class oe extends Ht{constructor(l){super(),Bt(this,l,ee,te,Jt,{collection:0})}}export{oe as default};
