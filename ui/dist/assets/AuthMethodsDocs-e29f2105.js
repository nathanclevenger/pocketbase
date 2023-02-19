import{S as ke,i as be,s as ge,e as r,w as b,b as g,c as me,f as k,g as h,h as n,m as _e,x as G,O as re,P as we,k as ve,Q as Se,n as Ce,t as L,a as Y,o as m,d as pe,R as Me,C as Pe,p as $e,r as H,u as je,N as Ae}from"./index-add376b6.js";import{S as Oe}from"./SdkTabs-719d05b2.js";function de(a,l,o){const s=a.slice();return s[5]=l[o],s}function ue(a,l,o){const s=a.slice();return s[5]=l[o],s}function fe(a,l){let o,s=l[5].code+"",_,f,i,d;function u(){return l[4](l[5])}return{key:a,first:null,c(){o=r("button"),_=b(s),f=g(),k(o,"class","tab-item"),H(o,"active",l[1]===l[5].code),this.first=o},m(v,S){h(v,o,S),n(o,_),n(o,f),i||(d=je(o,"click",u),i=!0)},p(v,S){l=v,S&4&&s!==(s=l[5].code+"")&&G(_,s),S&6&&H(o,"active",l[1]===l[5].code)},d(v){v&&m(o),i=!1,d()}}}function he(a,l){let o,s,_,f;return s=new Ae({props:{content:l[5].body}}),{key:a,first:null,c(){o=r("div"),me(s.$$.fragment),_=g(),k(o,"class","tab-item"),H(o,"active",l[1]===l[5].code),this.first=o},m(i,d){h(i,o,d),_e(s,o,null),n(o,_),f=!0},p(i,d){l=i;const u={};d&4&&(u.content=l[5].body),s.$set(u),(!f||d&6)&&H(o,"active",l[1]===l[5].code)},i(i){f||(L(s.$$.fragment,i),f=!0)},o(i){Y(s.$$.fragment,i),f=!1},d(i){i&&m(o),pe(s)}}}function Te(a){var ae,ne;let l,o,s=a[0].name+"",_,f,i,d,u,v,S,K=a[0].name+"",U,R,q,C,D,j,W,M,Q,X,y,A,Z,V,z=a[0].name+"",E,x,I,O,J,P,T,w=[],ee=new Map,te,N,p=[],le=new Map,$;C=new Oe({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${a[3]}');

        ...

        const result = await db.collection('${(ae=a[0])==null?void 0:ae.name}').listAuthMethods();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        final result = await db.collection('${(ne=a[0])==null?void 0:ne.name}').listAuthMethods();
    `}});let B=a[2];const oe=e=>e[5].code;for(let e=0;e<B.length;e+=1){let t=ue(a,B,e),c=oe(t);ee.set(c,w[e]=fe(c,t))}let F=a[2];const se=e=>e[5].code;for(let e=0;e<F.length;e+=1){let t=de(a,F,e),c=se(t);le.set(c,p[e]=he(c,t))}return{c(){l=r("h3"),o=b("List auth methods ("),_=b(s),f=b(")"),i=g(),d=r("div"),u=r("p"),v=b("Returns a public list with all allowed "),S=r("strong"),U=b(K),R=b(" authentication methods."),q=g(),me(C.$$.fragment),D=g(),j=r("h6"),j.textContent="API details",W=g(),M=r("div"),Q=r("strong"),Q.textContent="GET",X=g(),y=r("div"),A=r("p"),Z=b("/api/collections/"),V=r("strong"),E=b(z),x=b("/auth-methods"),I=g(),O=r("div"),O.textContent="Responses",J=g(),P=r("div"),T=r("div");for(let e=0;e<w.length;e+=1)w[e].c();te=g(),N=r("div");for(let e=0;e<p.length;e+=1)p[e].c();k(l,"class","m-b-sm"),k(d,"class","content txt-lg m-b-sm"),k(j,"class","m-b-xs"),k(Q,"class","label label-primary"),k(y,"class","content"),k(M,"class","alert alert-info"),k(O,"class","section-title"),k(T,"class","tabs-header compact left"),k(N,"class","tabs-content"),k(P,"class","tabs")},m(e,t){h(e,l,t),n(l,o),n(l,_),n(l,f),h(e,i,t),h(e,d,t),n(d,u),n(u,v),n(u,S),n(S,U),n(u,R),h(e,q,t),_e(C,e,t),h(e,D,t),h(e,j,t),h(e,W,t),h(e,M,t),n(M,Q),n(M,X),n(M,y),n(y,A),n(A,Z),n(A,V),n(V,E),n(A,x),h(e,I,t),h(e,O,t),h(e,J,t),h(e,P,t),n(P,T);for(let c=0;c<w.length;c+=1)w[c].m(T,null);n(P,te),n(P,N);for(let c=0;c<p.length;c+=1)p[c].m(N,null);$=!0},p(e,[t]){var ie,ce;(!$||t&1)&&s!==(s=e[0].name+"")&&G(_,s),(!$||t&1)&&K!==(K=e[0].name+"")&&G(U,K);const c={};t&9&&(c.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[3]}');

        ...

        const result = await db.collection('${(ie=e[0])==null?void 0:ie.name}').listAuthMethods();
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final result = await db.collection('${(ce=e[0])==null?void 0:ce.name}').listAuthMethods();
    `),C.$set(c),(!$||t&1)&&z!==(z=e[0].name+"")&&G(E,z),t&6&&(B=e[2],w=re(w,t,oe,1,e,B,ee,T,we,fe,null,ue)),t&6&&(F=e[2],ve(),p=re(p,t,se,1,e,F,le,N,Se,he,null,de),Ce())},i(e){if(!$){L(C.$$.fragment,e);for(let t=0;t<F.length;t+=1)L(p[t]);$=!0}},o(e){Y(C.$$.fragment,e);for(let t=0;t<p.length;t+=1)Y(p[t]);$=!1},d(e){e&&m(l),e&&m(i),e&&m(d),e&&m(q),pe(C,e),e&&m(D),e&&m(j),e&&m(W),e&&m(M),e&&m(I),e&&m(O),e&&m(J),e&&m(P);for(let t=0;t<w.length;t+=1)w[t].d();for(let t=0;t<p.length;t+=1)p[t].d()}}}function Ne(a,l,o){let s,{collection:_=new Me}=l,f=200,i=[];const d=u=>o(1,f=u.code);return a.$$set=u=>{"collection"in u&&o(0,_=u.collection)},o(3,s=Pe.getApiExampleUrl($e.baseUrl)),o(2,i=[{code:200,body:`
                {
                  "usernamePassword": true,
                  "emailPassword": true,
                  "authProviders": [
                    {
                      "name": "github",
                      "state": "3Yd8jNkK_6PJG6hPWwBjLqKwse6Ejd",
                      "codeVerifier": "KxFDWz1B3fxscCDJ_9gHQhLuh__ie7",
                      "codeChallenge": "NM1oVexB6Q6QH8uPtOUfK7tq4pmu4Jz6lNDIwoxHZNE=",
                      "codeChallengeMethod": "S256",
                      "authUrl": "https://github.com/login/oauth/authorize?client_id=demo&code_challenge=NM1oVexB6Q6QH8uPtOUfK7tq4pmu4Jz6lNDIwoxHZNE%3D&code_challenge_method=S256&response_type=code&scope=user&state=3Yd8jNkK_6PJG6hPWwBjLqKwse6Ejd&redirect_uri="
                    },
                    {
                      "name": "gitlab",
                      "state": "NeQSbtO5cShr_mk5__3CUukiMnymeb",
                      "codeVerifier": "ahTFHOgua8mkvPAlIBGwCUJbWKR_xi",
                      "codeChallenge": "O-GATkTj4eXDCnfonsqGLCd6njvTixlpCMvy5kjgOOg=",
                      "codeChallengeMethod": "S256",
                      "authUrl": "https://gitlab.com/oauth/authorize?client_id=demo&code_challenge=O-GATkTj4eXDCnfonsqGLCd6njvTixlpCMvy5kjgOOg%3D&code_challenge_method=S256&response_type=code&scope=read_user&state=NeQSbtO5cShr_mk5__3CUukiMnymeb&redirect_uri="
                    },
                    {
                      "name": "google",
                      "state": "zB3ZPifV1TW2GMuvuFkamSXfSNkHPQ",
                      "codeVerifier": "t3CmO5VObGzdXqieakvR_fpjiW0zdO",
                      "codeChallenge": "KChwoQPKYlz2anAdqtgsSTdIo8hdwtc1fh2wHMwW2Yk=",
                      "codeChallengeMethod": "S256",
                      "authUrl": "https://accounts.google.com/o/oauth2/auth?client_id=demo&code_challenge=KChwoQPKYlz2anAdqtgsSTdIo8hdwtc1fh2wHMwW2Yk%3D&code_challenge_method=S256&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=zB3ZPifV1TW2GMuvuFkamSXfSNkHPQ&redirect_uri="
                    }
                  ]
                }
            `}]),[_,f,i,s,d]}class Qe extends ke{constructor(l){super(),be(this,l,Ne,Te,ge,{collection:0})}}export{Qe as default};
