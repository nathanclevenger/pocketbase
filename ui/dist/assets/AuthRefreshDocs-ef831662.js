import{S as Be,i as Ue,s as je,N as ze,e as s,w as k,b as f,c as se,f as b,g as d,h as o,m as ne,x as re,O as He,P as xe,k as Je,Q as Ke,n as Qe,t as U,a as j,o as c,d as ie,R as Ie,C as Ee,p as We,r as x,u as Ge}from"./index-add376b6.js";import{S as Xe}from"./SdkTabs-719d05b2.js";function Fe(r,l,a){const n=r.slice();return n[5]=l[a],n}function Le(r,l,a){const n=r.slice();return n[5]=l[a],n}function Ne(r,l){let a,n=l[5].code+"",m,_,i,h;function v(){return l[4](l[5])}return{key:r,first:null,c(){a=s("button"),m=k(n),_=f(),b(a,"class","tab-item"),x(a,"active",l[1]===l[5].code),this.first=a},m(S,w){d(S,a,w),o(a,m),o(a,_),i||(h=Ge(a,"click",v),i=!0)},p(S,w){l=S,w&4&&n!==(n=l[5].code+"")&&re(m,n),w&6&&x(a,"active",l[1]===l[5].code)},d(S){S&&c(a),i=!1,h()}}}function Ve(r,l){let a,n,m,_;return n=new ze({props:{content:l[5].body}}),{key:r,first:null,c(){a=s("div"),se(n.$$.fragment),m=f(),b(a,"class","tab-item"),x(a,"active",l[1]===l[5].code),this.first=a},m(i,h){d(i,a,h),ne(n,a,null),o(a,m),_=!0},p(i,h){l=i;const v={};h&4&&(v.content=l[5].body),n.$set(v),(!_||h&6)&&x(a,"active",l[1]===l[5].code)},i(i){_||(U(n.$$.fragment,i),_=!0)},o(i){j(n.$$.fragment,i),_=!1},d(i){i&&c(a),ie(n)}}}function Ye(r){var De,Oe;let l,a,n=r[0].name+"",m,_,i,h,v,S,w,D,J,y,L,de,N,O,ce,K,V=r[0].name+"",Q,ue,fe,z,I,P,W,T,G,he,X,C,Y,pe,Z,be,p,me,A,_e,ke,ve,ee,Se,te,ge,ye,$e,oe,we,le,q,ae,R,H,$=[],Te=new Map,Ce,E,g=[],Re=new Map,M;S=new Xe({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${r[3]}');

        ...

        const authData = await db.collection('${(De=r[0])==null?void 0:De.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(db.authStore.isValid);
        console.log(db.authStore.token);
        console.log(db.authStore.model.id);
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${r[3]}');

        ...

        final authData = await db.collection('${(Oe=r[0])==null?void 0:Oe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);
    `}}),A=new ze({props:{content:"?expand=relField1,relField2.subRelField"}});let B=r[2];const Ae=e=>e[5].code;for(let e=0;e<B.length;e+=1){let t=Le(r,B,e),u=Ae(t);Te.set(u,$[e]=Ne(u,t))}let F=r[2];const Me=e=>e[5].code;for(let e=0;e<F.length;e+=1){let t=Fe(r,F,e),u=Me(t);Re.set(u,g[e]=Ve(u,t))}return{c(){l=s("h3"),a=k("Auth refresh ("),m=k(n),_=k(")"),i=f(),h=s("div"),h.innerHTML=`<p>Returns a new auth response (token and record data) for an
        <strong>already authenticated record</strong>.</p> 
    <p><em>This method is usually called by users on page/screen reload to ensure that the previously stored
            data in <code>db.authStore</code> is still valid and up-to-date.</em></p>`,v=f(),se(S.$$.fragment),w=f(),D=s("h6"),D.textContent="API details",J=f(),y=s("div"),L=s("strong"),L.textContent="POST",de=f(),N=s("div"),O=s("p"),ce=k("/api/collections/"),K=s("strong"),Q=k(V),ue=k("/auth-refresh"),fe=f(),z=s("p"),z.innerHTML="Requires record <code>Authorization:TOKEN</code> header",I=f(),P=s("div"),P.textContent="Query parameters",W=f(),T=s("table"),G=s("thead"),G.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,he=f(),X=s("tbody"),C=s("tr"),Y=s("td"),Y.textContent="expand",pe=f(),Z=s("td"),Z.innerHTML='<span class="label">String</span>',be=f(),p=s("td"),me=k(`Auto expand record relations. Ex.:
                `),se(A.$$.fragment),_e=k(`
                Supports up to 6-levels depth nested relations expansion. `),ke=s("br"),ve=k(`
                The expanded relations will be appended to the record under the
                `),ee=s("code"),ee.textContent="expand",Se=k(" property (eg. "),te=s("code"),te.textContent='"expand": {"relField1": {...}, ...}',ge=k(`).
                `),ye=s("br"),$e=k(`
                Only the relations to which the request user has permissions to `),oe=s("strong"),oe.textContent="view",we=k(" will be expanded."),le=f(),q=s("div"),q.textContent="Responses",ae=f(),R=s("div"),H=s("div");for(let e=0;e<$.length;e+=1)$[e].c();Ce=f(),E=s("div");for(let e=0;e<g.length;e+=1)g[e].c();b(l,"class","m-b-sm"),b(h,"class","content txt-lg m-b-sm"),b(D,"class","m-b-xs"),b(L,"class","label label-primary"),b(N,"class","content"),b(z,"class","txt-hint txt-sm txt-right"),b(y,"class","alert alert-success"),b(P,"class","section-title"),b(T,"class","table-compact table-border m-b-base"),b(q,"class","section-title"),b(H,"class","tabs-header compact left"),b(E,"class","tabs-content"),b(R,"class","tabs")},m(e,t){d(e,l,t),o(l,a),o(l,m),o(l,_),d(e,i,t),d(e,h,t),d(e,v,t),ne(S,e,t),d(e,w,t),d(e,D,t),d(e,J,t),d(e,y,t),o(y,L),o(y,de),o(y,N),o(N,O),o(O,ce),o(O,K),o(K,Q),o(O,ue),o(y,fe),o(y,z),d(e,I,t),d(e,P,t),d(e,W,t),d(e,T,t),o(T,G),o(T,he),o(T,X),o(X,C),o(C,Y),o(C,pe),o(C,Z),o(C,be),o(C,p),o(p,me),ne(A,p,null),o(p,_e),o(p,ke),o(p,ve),o(p,ee),o(p,Se),o(p,te),o(p,ge),o(p,ye),o(p,$e),o(p,oe),o(p,we),d(e,le,t),d(e,q,t),d(e,ae,t),d(e,R,t),o(R,H);for(let u=0;u<$.length;u+=1)$[u].m(H,null);o(R,Ce),o(R,E);for(let u=0;u<g.length;u+=1)g[u].m(E,null);M=!0},p(e,[t]){var Pe,qe;(!M||t&1)&&n!==(n=e[0].name+"")&&re(m,n);const u={};t&9&&(u.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        const authData = await db.collection('${(Pe=e[0])==null?void 0:Pe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(db.authStore.isValid);
        console.log(db.authStore.token);
        console.log(db.authStore.model.id);
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final authData = await db.collection('${(qe=e[0])==null?void 0:qe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);
    `),S.$set(u),(!M||t&1)&&V!==(V=e[0].name+"")&&re(Q,V),t&6&&(B=e[2],$=He($,t,Ae,1,e,B,Te,H,xe,Ne,null,Le)),t&6&&(F=e[2],Je(),g=He(g,t,Me,1,e,F,Re,E,Ke,Ve,null,Fe),Qe())},i(e){if(!M){U(S.$$.fragment,e),U(A.$$.fragment,e);for(let t=0;t<F.length;t+=1)U(g[t]);M=!0}},o(e){j(S.$$.fragment,e),j(A.$$.fragment,e);for(let t=0;t<g.length;t+=1)j(g[t]);M=!1},d(e){e&&c(l),e&&c(i),e&&c(h),e&&c(v),ie(S,e),e&&c(w),e&&c(D),e&&c(J),e&&c(y),e&&c(I),e&&c(P),e&&c(W),e&&c(T),ie(A),e&&c(le),e&&c(q),e&&c(ae),e&&c(R);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<g.length;t+=1)g[t].d()}}}function Ze(r,l,a){let n,{collection:m=new Ie}=l,_=200,i=[];const h=v=>a(1,_=v.code);return r.$$set=v=>{"collection"in v&&a(0,m=v.collection)},r.$$.update=()=>{r.$$.dirty&1&&a(2,i=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:Ee.dummyCollectionRecord(m)},null,2)},{code:401,body:`
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
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `}])},a(3,n=Ee.getApiExampleUrl(We.baseUrl)),[m,_,i,n,h]}class ot extends Be{constructor(l){super(),Ue(this,l,Ze,Ye,je,{collection:0})}}export{ot as default};
