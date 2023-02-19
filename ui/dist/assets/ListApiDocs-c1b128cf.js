import{S as Pe,i as Ne,s as qe,e,b as s,E as He,f as o,g as u,u as De,y as Fe,o as m,w as _,h as t,N as he,c as Yt,m as Zt,x as we,O as Le,P as Me,k as Ie,Q as Ge,n as ze,t as It,a as Gt,d as te,R as Be,C as _e,p as Ue,r as xe}from"./index-add376b6.js";import{S as je}from"./SdkTabs-719d05b2.js";function Qe(d){let n,i,r;return{c(){n=e("span"),n.textContent="Show details",i=s(),r=e("i"),o(n,"class","txt"),o(r,"class","ri-arrow-down-s-line")},m(f,p){u(f,n,p),u(f,i,p),u(f,r,p)},d(f){f&&m(n),f&&m(i),f&&m(r)}}}function Je(d){let n,i,r;return{c(){n=e("span"),n.textContent="Hide details",i=s(),r=e("i"),o(n,"class","txt"),o(r,"class","ri-arrow-up-s-line")},m(f,p){u(f,n,p),u(f,i,p),u(f,r,p)},d(f){f&&m(n),f&&m(i),f&&m(r)}}}function Ae(d){let n,i,r,f,p,b,x,$,h,w,c,V,bt,zt,R,Bt,q,at,F,W,ee,G,z,le,it,ht,X,xt,se,rt,ct,Y,O,Ut,wt,y,Z,_t,jt,$t,B,tt,Ct,Qt,gt,L,dt,kt,ne,ft,oe,D,vt,et,yt,U,pt,ae,H,Ft,lt,Lt,st,At,nt,j,E,Jt,St,Kt,Tt,C,Q,M,ie,Rt,re,ut,ce,I,Ot,de,Et,Vt,Pt,Wt,A,mt,J,K,P,Nt,fe,S,g,pe,N,v,ot,ue,T,qt,me,Dt,be,Ht,Xt,Mt;return{c(){n=e("p"),n.innerHTML=`The syntax basically follows the format
        <code><span class="txt-success">OPERAND</span> 
            <span class="txt-danger">OPERATOR</span> 
            <span class="txt-success">OPERAND</span></code>, where:`,i=s(),r=e("ul"),f=e("li"),f.innerHTML=`<code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false`,p=s(),b=e("li"),x=e("code"),x.textContent="OPERATOR",$=_(` - is one of:
            `),h=e("br"),w=s(),c=e("ul"),V=e("li"),bt=e("code"),bt.textContent="=",zt=s(),R=e("span"),R.textContent="Equal",Bt=s(),q=e("li"),at=e("code"),at.textContent="!=",F=s(),W=e("span"),W.textContent="NOT equal",ee=s(),G=e("li"),z=e("code"),z.textContent=">",le=s(),it=e("span"),it.textContent="Greater than",ht=s(),X=e("li"),xt=e("code"),xt.textContent=">=",se=s(),rt=e("span"),rt.textContent="Greater than or equal",ct=s(),Y=e("li"),O=e("code"),O.textContent="<",Ut=s(),wt=e("span"),wt.textContent="Less than",y=s(),Z=e("li"),_t=e("code"),_t.textContent="<=",jt=s(),$t=e("span"),$t.textContent="Less than or equal",B=s(),tt=e("li"),Ct=e("code"),Ct.textContent="~",Qt=s(),gt=e("span"),gt.textContent=`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,L=s(),dt=e("li"),kt=e("code"),kt.textContent="!~",ne=s(),ft=e("span"),ft.textContent=`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,oe=s(),D=e("li"),vt=e("code"),vt.textContent="?=",et=s(),yt=e("em"),yt.textContent="Any/At least one of",U=s(),pt=e("span"),pt.textContent="Equal",ae=s(),H=e("li"),Ft=e("code"),Ft.textContent="?!=",lt=s(),Lt=e("em"),Lt.textContent="Any/At least one of",st=s(),At=e("span"),At.textContent="NOT equal",nt=s(),j=e("li"),E=e("code"),E.textContent="?>",Jt=s(),St=e("em"),St.textContent="Any/At least one of",Kt=s(),Tt=e("span"),Tt.textContent="Greater than",C=s(),Q=e("li"),M=e("code"),M.textContent="?>=",ie=s(),Rt=e("em"),Rt.textContent="Any/At least one of",re=s(),ut=e("span"),ut.textContent="Greater than or equal",ce=s(),I=e("li"),Ot=e("code"),Ot.textContent="?<",de=s(),Et=e("em"),Et.textContent="Any/At least one of",Vt=s(),Pt=e("span"),Pt.textContent="Less than",Wt=s(),A=e("li"),mt=e("code"),mt.textContent="?<=",J=s(),K=e("em"),K.textContent="Any/At least one of",P=s(),Nt=e("span"),Nt.textContent="Less than or equal",fe=s(),S=e("li"),g=e("code"),g.textContent="?~",pe=s(),N=e("em"),N.textContent="Any/At least one of",v=s(),ot=e("span"),ot.textContent=`Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,ue=s(),T=e("li"),qt=e("code"),qt.textContent="?!~",me=s(),Dt=e("em"),Dt.textContent="Any/At least one of",be=s(),Ht=e("span"),Ht.textContent=`NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)`,Xt=s(),Mt=e("p"),Mt.innerHTML=`To group and combine several expressions you could use brackets
        <code>(...)</code>, <code>&amp;&amp;</code> (AND) and <code>||</code> (OR) tokens.`,o(x,"class","txt-danger"),o(bt,"class","filter-op svelte-1w7s5nw"),o(R,"class","txt"),o(at,"class","filter-op svelte-1w7s5nw"),o(W,"class","txt"),o(z,"class","filter-op svelte-1w7s5nw"),o(it,"class","txt"),o(xt,"class","filter-op svelte-1w7s5nw"),o(rt,"class","txt"),o(O,"class","filter-op svelte-1w7s5nw"),o(wt,"class","txt"),o(_t,"class","filter-op svelte-1w7s5nw"),o($t,"class","txt"),o(Ct,"class","filter-op svelte-1w7s5nw"),o(gt,"class","txt"),o(kt,"class","filter-op svelte-1w7s5nw"),o(ft,"class","txt"),o(vt,"class","filter-op svelte-1w7s5nw"),o(yt,"class","txt-hint"),o(pt,"class","txt"),o(Ft,"class","filter-op svelte-1w7s5nw"),o(Lt,"class","txt-hint"),o(At,"class","txt"),o(E,"class","filter-op svelte-1w7s5nw"),o(St,"class","txt-hint"),o(Tt,"class","txt"),o(M,"class","filter-op svelte-1w7s5nw"),o(Rt,"class","txt-hint"),o(ut,"class","txt"),o(Ot,"class","filter-op svelte-1w7s5nw"),o(Et,"class","txt-hint"),o(Pt,"class","txt"),o(mt,"class","filter-op svelte-1w7s5nw"),o(K,"class","txt-hint"),o(Nt,"class","txt"),o(g,"class","filter-op svelte-1w7s5nw"),o(N,"class","txt-hint"),o(ot,"class","txt"),o(qt,"class","filter-op svelte-1w7s5nw"),o(Dt,"class","txt-hint"),o(Ht,"class","txt")},m(l,a){u(l,n,a),u(l,i,a),u(l,r,a),t(r,f),t(r,p),t(r,b),t(b,x),t(b,$),t(b,h),t(b,w),t(b,c),t(c,V),t(V,bt),t(V,zt),t(V,R),t(c,Bt),t(c,q),t(q,at),t(q,F),t(q,W),t(c,ee),t(c,G),t(G,z),t(G,le),t(G,it),t(c,ht),t(c,X),t(X,xt),t(X,se),t(X,rt),t(c,ct),t(c,Y),t(Y,O),t(Y,Ut),t(Y,wt),t(c,y),t(c,Z),t(Z,_t),t(Z,jt),t(Z,$t),t(c,B),t(c,tt),t(tt,Ct),t(tt,Qt),t(tt,gt),t(c,L),t(c,dt),t(dt,kt),t(dt,ne),t(dt,ft),t(c,oe),t(c,D),t(D,vt),t(D,et),t(D,yt),t(D,U),t(D,pt),t(c,ae),t(c,H),t(H,Ft),t(H,lt),t(H,Lt),t(H,st),t(H,At),t(c,nt),t(c,j),t(j,E),t(j,Jt),t(j,St),t(j,Kt),t(j,Tt),t(c,C),t(c,Q),t(Q,M),t(Q,ie),t(Q,Rt),t(Q,re),t(Q,ut),t(c,ce),t(c,I),t(I,Ot),t(I,de),t(I,Et),t(I,Vt),t(I,Pt),t(c,Wt),t(c,A),t(A,mt),t(A,J),t(A,K),t(A,P),t(A,Nt),t(c,fe),t(c,S),t(S,g),t(S,pe),t(S,N),t(S,v),t(S,ot),t(c,ue),t(c,T),t(T,qt),t(T,me),t(T,Dt),t(T,be),t(T,Ht),u(l,Xt,a),u(l,Mt,a)},d(l){l&&m(n),l&&m(i),l&&m(r),l&&m(Xt),l&&m(Mt)}}}function Ke(d){let n,i,r,f,p;function b(w,c){return w[0]?Je:Qe}let x=b(d),$=x(d),h=d[0]&&Ae();return{c(){n=e("button"),$.c(),i=s(),h&&h.c(),r=He(),o(n,"class","btn btn-sm btn-transparent m-t-5")},m(w,c){u(w,n,c),$.m(n,null),u(w,i,c),h&&h.m(w,c),u(w,r,c),f||(p=De(n,"click",d[1]),f=!0)},p(w,[c]){x!==(x=b(w))&&($.d(1),$=x(w),$&&($.c(),$.m(n,null))),w[0]?h||(h=Ae(),h.c(),h.m(r.parentNode,r)):h&&(h.d(1),h=null)},i:Fe,o:Fe,d(w){w&&m(n),$.d(),w&&m(i),h&&h.d(w),w&&m(r),f=!1,p()}}}function Ve(d,n,i){let r=!1;function f(){i(0,r=!r)}return[r,f]}class We extends Pe{constructor(n){super(),Ne(this,n,Ve,Ke,qe,{})}}function Se(d,n,i){const r=d.slice();return r[6]=n[i],r}function Te(d,n,i){const r=d.slice();return r[6]=n[i],r}function Re(d){let n;return{c(){n=e("p"),n.innerHTML="Requires admin <code>Authorization:TOKEN</code> header",o(n,"class","txt-hint txt-sm txt-right")},m(i,r){u(i,n,r)},d(i){i&&m(n)}}}function Oe(d,n){let i,r=n[6].code+"",f,p,b,x;function $(){return n[5](n[6])}return{key:d,first:null,c(){i=e("div"),f=_(r),p=s(),o(i,"class","tab-item"),xe(i,"active",n[2]===n[6].code),this.first=i},m(h,w){u(h,i,w),t(i,f),t(i,p),b||(x=De(i,"click",$),b=!0)},p(h,w){n=h,w&20&&xe(i,"active",n[2]===n[6].code)},d(h){h&&m(i),b=!1,x()}}}function Ee(d,n){let i,r,f,p;return r=new he({props:{content:n[6].body}}),{key:d,first:null,c(){i=e("div"),Yt(r.$$.fragment),f=s(),o(i,"class","tab-item"),xe(i,"active",n[2]===n[6].code),this.first=i},m(b,x){u(b,i,x),Zt(r,i,null),t(i,f),p=!0},p(b,x){n=b,(!p||x&20)&&xe(i,"active",n[2]===n[6].code)},i(b){p||(It(r.$$.fragment,b),p=!0)},o(b){Gt(r.$$.fragment,b),p=!1},d(b){b&&m(i),te(r)}}}function Xe(d){var me,Dt,be,Ht,Xt,Mt;let n,i,r=d[0].name+"",f,p,b,x,$,h,w,c=d[0].name+"",V,bt,zt,R,Bt,q,at,F,W,ee,G,z,le,it,ht=d[0].name+"",X,xt,se,rt,ct,Y,O,Ut,wt,y,Z,_t,jt,$t,B,tt,Ct,Qt,gt,L,dt,kt,ne,ft,oe,D,vt,et,yt,U,pt,ae,H,Ft,lt,Lt,st,At,nt,j,E,Jt,St,Kt,Tt,C,Q,M,ie,Rt,re,ut,ce,I,Ot,de,Et,Vt,Pt,Wt,A,mt,J,K,P=[],Nt=new Map,fe,S,g=[],pe=new Map,N;R=new je({props:{js:`
        import SaaS from 'saaskit';

        const db = new SaaS('${d[3]}');

        ...

        // fetch a paginated records list
        const resultList = await db.collection('${(me=d[0])==null?void 0:me.name}').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await db.collection('${(Dt=d[0])==null?void 0:Dt.name}').getFullList(200 /* batch size */, {
            sort: '-created',
        });

        // or fetch only the first record that matches the specified filter
        const record = await db.collection('${(be=d[0])==null?void 0:be.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${d[3]}');

        ...

        // fetch a paginated records list
        final resultList = await db.collection('${(Ht=d[0])==null?void 0:Ht.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await db.collection('${(Xt=d[0])==null?void 0:Xt.name}').getFullList(
          batch: 200,
          sort: '-created',
        );

        // or fetch only the first record that matches the specified filter
        final record = await db.collection('${(Mt=d[0])==null?void 0:Mt.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let v=d[1]&&Re();et=new he({props:{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `}}),st=new he({props:{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `}}),nt=new We({}),M=new he({props:{content:"?expand=relField1,relField2.subRelField"}});let ot=d[4];const ue=l=>l[6].code;for(let l=0;l<ot.length;l+=1){let a=Te(d,ot,l),k=ue(a);Nt.set(k,P[l]=Oe(k,a))}let T=d[4];const qt=l=>l[6].code;for(let l=0;l<T.length;l+=1){let a=Se(d,T,l),k=qt(a);pe.set(k,g[l]=Ee(k,a))}return{c(){n=e("h3"),i=_("List/Search ("),f=_(r),p=_(")"),b=s(),x=e("div"),$=e("p"),h=_("Fetch a paginated "),w=e("strong"),V=_(c),bt=_(" records list, supporting sorting and filtering."),zt=s(),Yt(R.$$.fragment),Bt=s(),q=e("h6"),q.textContent="API details",at=s(),F=e("div"),W=e("strong"),W.textContent="GET",ee=s(),G=e("div"),z=e("p"),le=_("/api/collections/"),it=e("strong"),X=_(ht),xt=_("/records"),se=s(),v&&v.c(),rt=s(),ct=e("div"),ct.textContent="Query parameters",Y=s(),O=e("table"),Ut=e("thead"),Ut.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,wt=s(),y=e("tbody"),Z=e("tr"),Z.innerHTML=`<td>page</td> 
            <td><span class="label">Number</span></td> 
            <td>The page (aka. offset) of the paginated list (default to 1).</td>`,_t=s(),jt=e("tr"),jt.innerHTML=`<td>perPage</td> 
            <td><span class="label">Number</span></td> 
            <td>Specify the max returned records per page (default to 30).</td>`,$t=s(),B=e("tr"),tt=e("td"),tt.textContent="sort",Ct=s(),Qt=e("td"),Qt.innerHTML='<span class="label">String</span>',gt=s(),L=e("td"),dt=_("Specify the records order attribute(s). "),kt=e("br"),ne=_(`
                Add `),ft=e("code"),ft.textContent="-",oe=_(" / "),D=e("code"),D.textContent="+",vt=_(` (default) in front of the attribute for DESC / ASC order.
                Ex.:
                `),Yt(et.$$.fragment),yt=s(),U=e("tr"),pt=e("td"),pt.textContent="filter",ae=s(),H=e("td"),H.innerHTML='<span class="label">String</span>',Ft=s(),lt=e("td"),Lt=_(`Filter the returned records. Ex.:
                `),Yt(st.$$.fragment),At=s(),Yt(nt.$$.fragment),j=s(),E=e("tr"),Jt=e("td"),Jt.textContent="expand",St=s(),Kt=e("td"),Kt.innerHTML='<span class="label">String</span>',Tt=s(),C=e("td"),Q=_(`Auto expand record relations. Ex.:
                `),Yt(M.$$.fragment),ie=_(`
                Supports up to 6-levels depth nested relations expansion. `),Rt=e("br"),re=_(`
                The expanded relations will be appended to each individual record under the
                `),ut=e("code"),ut.textContent="expand",ce=_(" property (eg. "),I=e("code"),I.textContent='"expand": {"relField1": {...}, ...}',Ot=_(`).
                `),de=e("br"),Et=_(`
                Only the relations to which the request user has permissions to `),Vt=e("strong"),Vt.textContent="view",Pt=_(" will be expanded."),Wt=s(),A=e("div"),A.textContent="Responses",mt=s(),J=e("div"),K=e("div");for(let l=0;l<P.length;l+=1)P[l].c();fe=s(),S=e("div");for(let l=0;l<g.length;l+=1)g[l].c();o(n,"class","m-b-sm"),o(x,"class","content txt-lg m-b-sm"),o(q,"class","m-b-xs"),o(W,"class","label label-primary"),o(G,"class","content"),o(F,"class","alert alert-info"),o(ct,"class","section-title"),o(O,"class","table-compact table-border m-b-base"),o(A,"class","section-title"),o(K,"class","tabs-header compact left"),o(S,"class","tabs-content"),o(J,"class","tabs")},m(l,a){u(l,n,a),t(n,i),t(n,f),t(n,p),u(l,b,a),u(l,x,a),t(x,$),t($,h),t($,w),t(w,V),t($,bt),u(l,zt,a),Zt(R,l,a),u(l,Bt,a),u(l,q,a),u(l,at,a),u(l,F,a),t(F,W),t(F,ee),t(F,G),t(G,z),t(z,le),t(z,it),t(it,X),t(z,xt),t(F,se),v&&v.m(F,null),u(l,rt,a),u(l,ct,a),u(l,Y,a),u(l,O,a),t(O,Ut),t(O,wt),t(O,y),t(y,Z),t(y,_t),t(y,jt),t(y,$t),t(y,B),t(B,tt),t(B,Ct),t(B,Qt),t(B,gt),t(B,L),t(L,dt),t(L,kt),t(L,ne),t(L,ft),t(L,oe),t(L,D),t(L,vt),Zt(et,L,null),t(y,yt),t(y,U),t(U,pt),t(U,ae),t(U,H),t(U,Ft),t(U,lt),t(lt,Lt),Zt(st,lt,null),t(lt,At),Zt(nt,lt,null),t(y,j),t(y,E),t(E,Jt),t(E,St),t(E,Kt),t(E,Tt),t(E,C),t(C,Q),Zt(M,C,null),t(C,ie),t(C,Rt),t(C,re),t(C,ut),t(C,ce),t(C,I),t(C,Ot),t(C,de),t(C,Et),t(C,Vt),t(C,Pt),u(l,Wt,a),u(l,A,a),u(l,mt,a),u(l,J,a),t(J,K);for(let k=0;k<P.length;k+=1)P[k].m(K,null);t(J,fe),t(J,S);for(let k=0;k<g.length;k+=1)g[k].m(S,null);N=!0},p(l,[a]){var $e,Ce,ge,ke,ve,ye;(!N||a&1)&&r!==(r=l[0].name+"")&&we(f,r),(!N||a&1)&&c!==(c=l[0].name+"")&&we(V,c);const k={};a&9&&(k.js=`
        import SaaS from 'saaskit';

        const db = new SaaS('${l[3]}');

        ...

        // fetch a paginated records list
        const resultList = await db.collection('${($e=l[0])==null?void 0:$e.name}').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await db.collection('${(Ce=l[0])==null?void 0:Ce.name}').getFullList(200 /* batch size */, {
            sort: '-created',
        });

        // or fetch only the first record that matches the specified filter
        const record = await db.collection('${(ge=l[0])==null?void 0:ge.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `),a&9&&(k.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        final resultList = await db.collection('${(ke=l[0])==null?void 0:ke.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await db.collection('${(ve=l[0])==null?void 0:ve.name}').getFullList(
          batch: 200,
          sort: '-created',
        );

        // or fetch only the first record that matches the specified filter
        final record = await db.collection('${(ye=l[0])==null?void 0:ye.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `),R.$set(k),(!N||a&1)&&ht!==(ht=l[0].name+"")&&we(X,ht),l[1]?v||(v=Re(),v.c(),v.m(F,null)):v&&(v.d(1),v=null),a&20&&(ot=l[4],P=Le(P,a,ue,1,l,ot,Nt,K,Me,Oe,null,Te)),a&20&&(T=l[4],Ie(),g=Le(g,a,qt,1,l,T,pe,S,Ge,Ee,null,Se),ze())},i(l){if(!N){It(R.$$.fragment,l),It(et.$$.fragment,l),It(st.$$.fragment,l),It(nt.$$.fragment,l),It(M.$$.fragment,l);for(let a=0;a<T.length;a+=1)It(g[a]);N=!0}},o(l){Gt(R.$$.fragment,l),Gt(et.$$.fragment,l),Gt(st.$$.fragment,l),Gt(nt.$$.fragment,l),Gt(M.$$.fragment,l);for(let a=0;a<g.length;a+=1)Gt(g[a]);N=!1},d(l){l&&m(n),l&&m(b),l&&m(x),l&&m(zt),te(R,l),l&&m(Bt),l&&m(q),l&&m(at),l&&m(F),v&&v.d(),l&&m(rt),l&&m(ct),l&&m(Y),l&&m(O),te(et),te(st),te(nt),te(M),l&&m(Wt),l&&m(A),l&&m(mt),l&&m(J);for(let a=0;a<P.length;a+=1)P[a].d();for(let a=0;a<g.length;a+=1)g[a].d()}}}function Ye(d,n,i){let r,f,{collection:p=new Be}=n,b=200,x=[];const $=h=>i(2,b=h.code);return d.$$set=h=>{"collection"in h&&i(0,p=h.collection)},d.$$.update=()=>{d.$$.dirty&1&&i(1,r=(p==null?void 0:p.listRule)===null),d.$$.dirty&3&&p!=null&&p.id&&(x.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[_e.dummyCollectionRecord(p),_e.dummyCollectionRecord(p)]},null,2)}),x.push({code:400,body:`
                {
                  "code": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),r&&x.push({code:403,body:`
                    {
                      "code": 403,
                      "message": "Only admins can access this action.",
                      "data": {}
                    }
                `}))},i(3,f=_e.getApiExampleUrl(Ue.baseUrl)),[p,r,b,f,x,$]}class el extends Pe{constructor(n){super(),Ne(this,n,Ye,Xe,qe,{collection:0})}}export{el as default};
