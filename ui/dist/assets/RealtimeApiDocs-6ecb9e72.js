import{S as re,i as ae,s as be,N as ue,C as P,e as u,w as y,b as a,c as te,f as m,g as t,h as I,m as ne,x as me,t as ie,a as le,o as n,d as ce,R as de,p as pe}from"./index-add376b6.js";import{S as fe}from"./SdkTabs-719d05b2.js";function $e(o){var U,W,A,H,L,T,q,B,M,N,j,J;let i,d,l=o[0].name+"",b,p,D,f,h,$,_,c,w,v,C,R,E,S,O,r,g;return c=new fe({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${o[1]}');

        ...

        // (Optionally) authenticate
        await db.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(U=o[0])==null?void 0:U.name} record
        db.collection('${(W=o[0])==null?void 0:W.name}').subscribe('*', function (e) {
            console.log(e.record);
        });

        // Subscribe to changes only in the specified record
        db.collection('${(A=o[0])==null?void 0:A.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.record);
        });

        // Unsubscribe
        db.collection('${(H=o[0])==null?void 0:H.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        db.collection('${(L=o[0])==null?void 0:L.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        db.collection('${(T=o[0])==null?void 0:T.name}').unsubscribe(); // remove all subscriptions in the collection
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[1]}');

        ...

        // (Optionally) authenticate
        await db.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(q=o[0])==null?void 0:q.name} record
        db.collection('${(B=o[0])==null?void 0:B.name}').subscribe('*', (e) {
            console.log(e.record);
        });

        // Subscribe to changes only in the specified record
        db.collection('${(M=o[0])==null?void 0:M.name}').subscribe('RECORD_ID', (e) {
            console.log(e.record);
        });

        // Unsubscribe
        db.collection('${(N=o[0])==null?void 0:N.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        db.collection('${(j=o[0])==null?void 0:j.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        db.collection('${(J=o[0])==null?void 0:J.name}').unsubscribe(); // remove all subscriptions in the collection
    `}}),r=new ue({props:{content:JSON.stringify({action:"create",record:P.dummyCollectionRecord(o[0])},null,2).replace('"action": "create"','"action": "create" // create, update or delete')}}),{c(){i=u("h3"),d=y("Realtime ("),b=y(l),p=y(")"),D=a(),f=u("div"),f.innerHTML=`<p>Subscribe to realtime changes via Server-Sent Events (SSE).</p> 
    <p>Events are sent for <strong>create</strong>, <strong>update</strong>
        and <strong>delete</strong> record operations (see &quot;Event data format&quot; section below).</p>`,h=a(),$=u("div"),$.innerHTML=`<div class="icon"><i class="ri-information-line"></i></div> 
    <div class="contet"><p><strong>You could subscribe to a single record or to an entire collection.</strong></p> 
        <p>When you subscribe to a <strong>single record</strong>, the collection&#39;s
            <strong>ViewRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p> 
        <p>When you subscribe to an <strong>entire collection</strong>, the collection&#39;s
            <strong>ListRule</strong> will be used to determine whether the subscriber has access to receive the
            event message.</p></div>`,_=a(),te(c.$$.fragment),w=a(),v=u("h6"),v.textContent="API details",C=a(),R=u("div"),R.innerHTML=`<strong class="label label-primary">SSE</strong> 
    <div class="content"><p>/api/realtime</p></div>`,E=a(),S=u("div"),S.textContent="Event data format",O=a(),te(r.$$.fragment),m(i,"class","m-b-sm"),m(f,"class","content txt-lg m-b-sm"),m($,"class","alert alert-info m-t-10 m-b-sm"),m(v,"class","m-b-xs"),m(R,"class","alert"),m(S,"class","section-title")},m(e,s){t(e,i,s),I(i,d),I(i,b),I(i,p),t(e,D,s),t(e,f,s),t(e,h,s),t(e,$,s),t(e,_,s),ne(c,e,s),t(e,w,s),t(e,v,s),t(e,C,s),t(e,R,s),t(e,E,s),t(e,S,s),t(e,O,s),ne(r,e,s),g=!0},p(e,[s]){var Y,z,F,G,K,Q,X,Z,x,ee,se,oe;(!g||s&1)&&l!==(l=e[0].name+"")&&me(b,l);const k={};s&3&&(k.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${e[1]}');

        ...

        // (Optionally) authenticate
        await db.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(Y=e[0])==null?void 0:Y.name} record
        db.collection('${(z=e[0])==null?void 0:z.name}').subscribe('*', function (e) {
            console.log(e.record);
        });

        // Subscribe to changes only in the specified record
        db.collection('${(F=e[0])==null?void 0:F.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.record);
        });

        // Unsubscribe
        db.collection('${(G=e[0])==null?void 0:G.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        db.collection('${(K=e[0])==null?void 0:K.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        db.collection('${(Q=e[0])==null?void 0:Q.name}').unsubscribe(); // remove all subscriptions in the collection
    `),s&3&&(k.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[1]}');

        ...

        // (Optionally) authenticate
        await db.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(X=e[0])==null?void 0:X.name} record
        db.collection('${(Z=e[0])==null?void 0:Z.name}').subscribe('*', (e) {
            console.log(e.record);
        });

        // Subscribe to changes only in the specified record
        db.collection('${(x=e[0])==null?void 0:x.name}').subscribe('RECORD_ID', (e) {
            console.log(e.record);
        });

        // Unsubscribe
        db.collection('${(ee=e[0])==null?void 0:ee.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        db.collection('${(se=e[0])==null?void 0:se.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        db.collection('${(oe=e[0])==null?void 0:oe.name}').unsubscribe(); // remove all subscriptions in the collection
    `),c.$set(k);const V={};s&1&&(V.content=JSON.stringify({action:"create",record:P.dummyCollectionRecord(e[0])},null,2).replace('"action": "create"','"action": "create" // create, update or delete')),r.$set(V)},i(e){g||(ie(c.$$.fragment,e),ie(r.$$.fragment,e),g=!0)},o(e){le(c.$$.fragment,e),le(r.$$.fragment,e),g=!1},d(e){e&&n(i),e&&n(D),e&&n(f),e&&n(h),e&&n($),e&&n(_),ce(c,e),e&&n(w),e&&n(v),e&&n(C),e&&n(R),e&&n(E),e&&n(S),e&&n(O),ce(r,e)}}}function ve(o,i,d){let l,{collection:b=new de}=i;return o.$$set=p=>{"collection"in p&&d(0,b=p.collection)},d(1,l=P.getApiExampleUrl(pe.baseUrl)),[b,l]}class ge extends re{constructor(i){super(),ae(this,i,ve,$e,be,{collection:0})}}export{ge as default};
