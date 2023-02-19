import{S as Se,i as ve,s as we,N as ke,e as s,w as f,b as u,c as Pt,f as h,g as r,h as a,m as At,x as Tt,O as de,P as ye,k as ge,Q as Re,n as $e,t as tt,a as et,o as d,d as Ut,R as Ce,C as ce,p as Oe,r as lt,u as Pe}from"./index-add376b6.js";import{S as Ae}from"./SdkTabs-719d05b2.js";function ue(n,e,l){const i=n.slice();return i[8]=e[l],i}function fe(n,e,l){const i=n.slice();return i[8]=e[l],i}function Te(n){let e;return{c(){e=f("email")},m(l,i){r(l,e,i)},d(l){l&&d(e)}}}function Ue(n){let e;return{c(){e=f("username")},m(l,i){r(l,e,i)},d(l){l&&d(e)}}}function Me(n){let e;return{c(){e=f("username/email")},m(l,i){r(l,e,i)},d(l){l&&d(e)}}}function be(n){let e;return{c(){e=s("strong"),e.textContent="username"},m(l,i){r(l,e,i)},d(l){l&&d(e)}}}function pe(n){let e;return{c(){e=f("or")},m(l,i){r(l,e,i)},d(l){l&&d(e)}}}function me(n){let e;return{c(){e=s("strong"),e.textContent="email"},m(l,i){r(l,e,i)},d(l){l&&d(e)}}}function he(n,e){let l,i=e[8].code+"",S,m,b,c;function _(){return e[7](e[8])}return{key:n,first:null,c(){l=s("button"),S=f(i),m=u(),h(l,"class","tab-item"),lt(l,"active",e[3]===e[8].code),this.first=l},m(C,O){r(C,l,O),a(l,S),a(l,m),b||(c=Pe(l,"click",_),b=!0)},p(C,O){e=C,O&16&&i!==(i=e[8].code+"")&&Tt(S,i),O&24&&lt(l,"active",e[3]===e[8].code)},d(C){C&&d(l),b=!1,c()}}}function _e(n,e){let l,i,S,m;return i=new ke({props:{content:e[8].body}}),{key:n,first:null,c(){l=s("div"),Pt(i.$$.fragment),S=u(),h(l,"class","tab-item"),lt(l,"active",e[3]===e[8].code),this.first=l},m(b,c){r(b,l,c),At(i,l,null),a(l,S),m=!0},p(b,c){e=b;const _={};c&16&&(_.content=e[8].body),i.$set(_),(!m||c&24)&&lt(l,"active",e[3]===e[8].code)},i(b){m||(tt(i.$$.fragment,b),m=!0)},o(b){et(i.$$.fragment,b),m=!1},d(b){b&&d(l),Ut(i)}}}function De(n){var se,ne;let e,l,i=n[0].name+"",S,m,b,c,_,C,O,P,H,Mt,at,T,ot,N,st,U,G,Dt,X,B,Et,nt,Z=n[0].name+"",it,Wt,rt,I,dt,M,ct,Lt,V,D,ut,Ht,ft,Yt,g,qt,bt,pt,mt,Ft,ht,_t,j,kt,E,St,Nt,vt,W,wt,Bt,yt,It,k,Vt,Y,jt,Jt,Qt,gt,Kt,Rt,zt,Gt,Xt,$t,Zt,Ct,J,Ot,L,Q,A=[],xt=new Map,te,K,R=[],ee=new Map,q;function le(t,o){if(t[1]&&t[2])return Me;if(t[1])return Ue;if(t[2])return Te}let F=le(n),$=F&&F(n);T=new Ae({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${n[6]}');

        ...

        const authData = await db.collection('${(se=n[0])==null?void 0:se.name}').authWithPassword(
            '${n[5]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(db.authStore.isValid);
        console.log(db.authStore.token);
        console.log(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[6]}');

        ...

        final authData = await db.collection('${(ne=n[0])==null?void 0:ne.name}').authWithPassword(
          '${n[5]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `}});let v=n[1]&&be(),w=n[1]&&n[2]&&pe(),y=n[2]&&me();Y=new ke({props:{content:"?expand=relField1,relField2.subRelField"}});let x=n[4];const ae=t=>t[8].code;for(let t=0;t<x.length;t+=1){let o=fe(n,x,t),p=ae(o);xt.set(p,A[t]=he(p,o))}let z=n[4];const oe=t=>t[8].code;for(let t=0;t<z.length;t+=1){let o=ue(n,z,t),p=oe(o);ee.set(p,R[t]=_e(p,o))}return{c(){e=s("h3"),l=f("Auth with password ("),S=f(i),m=f(")"),b=u(),c=s("div"),_=s("p"),C=f(`Returns new auth token and account data by a combination of
        `),O=s("strong"),$&&$.c(),P=f(`
        and `),H=s("strong"),H.textContent="password",Mt=f("."),at=u(),Pt(T.$$.fragment),ot=u(),N=s("h6"),N.textContent="API details",st=u(),U=s("div"),G=s("strong"),G.textContent="POST",Dt=u(),X=s("div"),B=s("p"),Et=f("/api/collections/"),nt=s("strong"),it=f(Z),Wt=f("/auth-with-password"),rt=u(),I=s("div"),I.textContent="Body Parameters",dt=u(),M=s("table"),ct=s("thead"),ct.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr>`,Lt=u(),V=s("tbody"),D=s("tr"),ut=s("td"),ut.innerHTML=`<div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>identity</span></div>`,Ht=u(),ft=s("td"),ft.innerHTML='<span class="label">String</span>',Yt=u(),g=s("td"),qt=f(`The
                `),v&&v.c(),bt=u(),w&&w.c(),pt=u(),y&&y.c(),mt=f(`
                of the record to authenticate.`),Ft=u(),ht=s("tr"),ht.innerHTML=`<td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>password</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The auth record password.</td>`,_t=u(),j=s("div"),j.textContent="Query parameters",kt=u(),E=s("table"),St=s("thead"),St.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,Nt=u(),vt=s("tbody"),W=s("tr"),wt=s("td"),wt.textContent="expand",Bt=u(),yt=s("td"),yt.innerHTML='<span class="label">String</span>',It=u(),k=s("td"),Vt=f(`Auto expand record relations. Ex.:
                `),Pt(Y.$$.fragment),jt=f(`
                Supports up to 6-levels depth nested relations expansion. `),Jt=s("br"),Qt=f(`
                The expanded relations will be appended to the record under the
                `),gt=s("code"),gt.textContent="expand",Kt=f(" property (eg. "),Rt=s("code"),Rt.textContent='"expand": {"relField1": {...}, ...}',zt=f(`).
                `),Gt=s("br"),Xt=f(`
                Only the relations to which the request user has permissions to `),$t=s("strong"),$t.textContent="view",Zt=f(" will be expanded."),Ct=u(),J=s("div"),J.textContent="Responses",Ot=u(),L=s("div"),Q=s("div");for(let t=0;t<A.length;t+=1)A[t].c();te=u(),K=s("div");for(let t=0;t<R.length;t+=1)R[t].c();h(e,"class","m-b-sm"),h(c,"class","content txt-lg m-b-sm"),h(N,"class","m-b-xs"),h(G,"class","label label-primary"),h(X,"class","content"),h(U,"class","alert alert-success"),h(I,"class","section-title"),h(M,"class","table-compact table-border m-b-base"),h(j,"class","section-title"),h(E,"class","table-compact table-border m-b-base"),h(J,"class","section-title"),h(Q,"class","tabs-header compact left"),h(K,"class","tabs-content"),h(L,"class","tabs")},m(t,o){r(t,e,o),a(e,l),a(e,S),a(e,m),r(t,b,o),r(t,c,o),a(c,_),a(_,C),a(_,O),$&&$.m(O,null),a(_,P),a(_,H),a(_,Mt),r(t,at,o),At(T,t,o),r(t,ot,o),r(t,N,o),r(t,st,o),r(t,U,o),a(U,G),a(U,Dt),a(U,X),a(X,B),a(B,Et),a(B,nt),a(nt,it),a(B,Wt),r(t,rt,o),r(t,I,o),r(t,dt,o),r(t,M,o),a(M,ct),a(M,Lt),a(M,V),a(V,D),a(D,ut),a(D,Ht),a(D,ft),a(D,Yt),a(D,g),a(g,qt),v&&v.m(g,null),a(g,bt),w&&w.m(g,null),a(g,pt),y&&y.m(g,null),a(g,mt),a(V,Ft),a(V,ht),r(t,_t,o),r(t,j,o),r(t,kt,o),r(t,E,o),a(E,St),a(E,Nt),a(E,vt),a(vt,W),a(W,wt),a(W,Bt),a(W,yt),a(W,It),a(W,k),a(k,Vt),At(Y,k,null),a(k,jt),a(k,Jt),a(k,Qt),a(k,gt),a(k,Kt),a(k,Rt),a(k,zt),a(k,Gt),a(k,Xt),a(k,$t),a(k,Zt),r(t,Ct,o),r(t,J,o),r(t,Ot,o),r(t,L,o),a(L,Q);for(let p=0;p<A.length;p+=1)A[p].m(Q,null);a(L,te),a(L,K);for(let p=0;p<R.length;p+=1)R[p].m(K,null);q=!0},p(t,[o]){var ie,re;(!q||o&1)&&i!==(i=t[0].name+"")&&Tt(S,i),F!==(F=le(t))&&($&&$.d(1),$=F&&F(t),$&&($.c(),$.m(O,null)));const p={};o&97&&(p.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${t[6]}');

        ...

        const authData = await db.collection('${(ie=t[0])==null?void 0:ie.name}').authWithPassword(
            '${t[5]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(db.authStore.isValid);
        console.log(db.authStore.token);
        console.log(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `),o&97&&(p.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t[6]}');

        ...

        final authData = await db.collection('${(re=t[0])==null?void 0:re.name}').authWithPassword(
          '${t[5]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(db.authStore.isValid);
        print(db.authStore.token);
        print(db.authStore.model.id);

        // "logout" the last authenticated account
        db.authStore.clear();
    `),T.$set(p),(!q||o&1)&&Z!==(Z=t[0].name+"")&&Tt(it,Z),t[1]?v||(v=be(),v.c(),v.m(g,bt)):v&&(v.d(1),v=null),t[1]&&t[2]?w||(w=pe(),w.c(),w.m(g,pt)):w&&(w.d(1),w=null),t[2]?y||(y=me(),y.c(),y.m(g,mt)):y&&(y.d(1),y=null),o&24&&(x=t[4],A=de(A,o,ae,1,t,x,xt,Q,ye,he,null,fe)),o&24&&(z=t[4],ge(),R=de(R,o,oe,1,t,z,ee,K,Re,_e,null,ue),$e())},i(t){if(!q){tt(T.$$.fragment,t),tt(Y.$$.fragment,t);for(let o=0;o<z.length;o+=1)tt(R[o]);q=!0}},o(t){et(T.$$.fragment,t),et(Y.$$.fragment,t);for(let o=0;o<R.length;o+=1)et(R[o]);q=!1},d(t){t&&d(e),t&&d(b),t&&d(c),$&&$.d(),t&&d(at),Ut(T,t),t&&d(ot),t&&d(N),t&&d(st),t&&d(U),t&&d(rt),t&&d(I),t&&d(dt),t&&d(M),v&&v.d(),w&&w.d(),y&&y.d(),t&&d(_t),t&&d(j),t&&d(kt),t&&d(E),Ut(Y),t&&d(Ct),t&&d(J),t&&d(Ot),t&&d(L);for(let o=0;o<A.length;o+=1)A[o].d();for(let o=0;o<R.length;o+=1)R[o].d()}}}function Ee(n,e,l){let i,S,m,b,{collection:c=new Ce}=e,_=200,C=[];const O=P=>l(3,_=P.code);return n.$$set=P=>{"collection"in P&&l(0,c=P.collection)},n.$$.update=()=>{var P,H;n.$$.dirty&1&&l(2,S=(P=c==null?void 0:c.options)==null?void 0:P.allowEmailAuth),n.$$.dirty&1&&l(1,m=(H=c==null?void 0:c.options)==null?void 0:H.allowUsernameAuth),n.$$.dirty&6&&l(5,b=m&&S?"YOUR_USERNAME_OR_EMAIL":m?"YOUR_USERNAME":"YOUR_EMAIL"),n.$$.dirty&1&&l(4,C=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:ce.dummyCollectionRecord(c)},null,2)},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "identity": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},l(6,i=ce.getApiExampleUrl(Oe.baseUrl)),[c,m,S,_,C,b,i,O]}class He extends Se{constructor(e){super(),ve(this,e,Ee,De,we,{collection:0})}}export{He as default};
