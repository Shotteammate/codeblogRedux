(this.webpackJsonpcodebolg=this.webpackJsonpcodebolg||[]).push([[0],{222:function(e,t,a){e.exports=a(421)},227:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(216),c=a.n(l),i=(a(227),a(7)),o=a(35),s=a(9),m=a(94),u=a.n(m),d=a(95),p=a.n(d);a(240),a(241);p.a.initializeApp({apiKey:"AIzaSyDxMZ_DhS1vWaQ9Y3KCy9R8kaUxNbRZrsQ",authDomain:"codeblog-70639.firebaseapp.com",databaseURL:"https://codeblog-70639.firebaseio.com",projectId:"codeblog-70639",storageBucket:"",messagingSenderId:"771021701286",appId:"1:771021701286:web:e3e63ffbd0701b46083467",measurementId:"G-X7HHVRYZNC"});var E=p.a.firestore(),h=p.a,b={signOut:function(){return function(e){u.a.auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}}},f=Object(s.b)(null,b)((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/addpost"},"Add Post")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/codeblogRedux",className:"btn btn-floating blue darken-2"},e.profile.initials)))})),g=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signin"},"Login")))},O=(a(50),Object(s.b)((function(e){return{auth:e.firebaseRD.auth,profile:e.firebaseRD.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3 navBar"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{to:"/codeblogRedux",className:"brand-logo"},"Code Blog"),t.uid?r.a.createElement(f,{profile:a}):r.a.createElement(g,null)))}))),N=a(30),v=a(31),y=a(33),S=a(32),R=a(34),j=(a(243),a(92)),C=a.n(j),D=function(e){var t=e.title,a=e.post;return r.a.createElement("div",{className:"card z-depth-0 postStyle"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t),r.a.createElement("p",null,"Posted by: ",a.firstName," ",a.lastName),r.a.createElement("p",{className:"grey-text"},"Date: ",C()(a.createAt.toDate().toString()).format("LLL"))))},w=function(e){var t=e.posts;console.log(t);var a=t.map((function(e){return r.a.createElement(i.b,{to:"/post/"+e.id,key:e.id},r.a.createElement(D,{title:e.title,post:e}))}));return r.a.createElement("div",{className:"section"},t&&a)},P=(a(244),function(){var e=document.getElementById("myModal");window.onclick=function(t){t.target==e&&(e.style.display="none")};var t=function(e){e.preventDefault(),window.open("https://www.linkedin.com/in/dickson-pun-030846193/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container white profileStyle"},r.a.createElement("div",{className:"btnWrapper"},r.a.createElement("img",{className:"profile-photo",src:"https://media.licdn.com/dms/image/C5103AQFRX5stKAxzHQ/profile-displayphoto-shrink_200_200/0?e=1576108800&v=beta&t=gCpyUQ76yBtbkI5EXFjXNqtOGnqzdo68iepw9k5y0v0",onClick:t})),r.a.createElement("div",{className:"myname t-16 t-black t-normal"},"Dickson PUN"),r.a.createElement("div",{className:"t-12 t-black t-normal"},"Web Developer (React)"),r.a.createElement("div",null,r.a.createElement("ul",{className:"profile-info-ul"},r.a.createElement("li",{className:"t-11 t-black t-normal inline-block"},"Hong Kong"),r.a.createElement("li",{className:"t-11 t-bold",onClick:function(){e.style.display="block"}},"Contact info")))),r.a.createElement("div",{id:"myModal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:function(){e.style.display="none"}},"\xd7"),r.a.createElement("h5",null,"Dickson PUN"),r.a.createElement("hr",null),r.a.createElement("span",{className:"t-15 t-black t-normal"},"Contact Info"),r.a.createElement("div",{className:"contactList"},r.a.createElement("img",{className:"LinkedInImg"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Your Profile"),r.a.createElement("li",null,r.a.createElement("a",{onClick:t},"linkedin.com/in/dickson-pun-030846193")))),r.a.createElement("div",{className:"contactList"},r.a.createElement("img",{className:"EmailImg"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Email"),r.a.createElement("li",null,r.a.createElement("span",null,"shotteammate@gmail.com")," "))))))}),k=a(25),I=a(19),x=function(e){function t(){return Object(N.a)(this,t),Object(y.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.posts;return e.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4"},r.a.createElement(P,null)),r.a.createElement("div",{className:"col s12 m8"},r.a.createElement(w,{posts:t})))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),_=Object(I.d)(Object(s.b)((function(e){return{auth:e.firebaseRD.auth,posts:e.firestoreRD.ordered.posts||e.postRD.posts}})),Object(k.firestoreConnect)([{collection:"posts"}]))(x),U=Object(I.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestoreRD.data.posts;return{post:n?n[a]:null,auth:e.firebaseRD.auth}})),Object(k.firestoreConnect)([{collection:"posts"}]))((function(e){var t=e.post;return e.auth.uid?t?r.a.createElement("div",{className:"container section navbarFixPostDetail"},r.a.createElement("div",{className:"card z-depth-0 postDetailStyle"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by: ",t.firstName," ",t.lastName),r.a.createElement("div",null,"test date: ",C()(t.createAt.toDate().toString()).format("LLL"))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading post...")):r.a.createElement(o.a,{to:"/signin"})})),L=a(23),A=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleOnSubmit=function(e){e.preventDefault(),a.props.signIn(a.state),a.props.history.push("/codeblogRedux")},a.handleOnChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/codeblogRedux"}):r.a.createElement("div",{className:"container navbarFixSignIn"},r.a.createElement("form",{onSubmit:this.handleOnSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text tex-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue darken-2 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null),r.a.createElement("div",{className:"grey-text"},"**Guest Log in account",r.a.createElement("br",null),"Email: guest@guest.com",r.a.createElement("br",null),"Password: 123456"))))}}]),t}(n.Component),G={signIn:function(e){return function(t){u.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",err:e})}))}}},F=Object(s.b)((function(e){return{auth:e.firebaseRD.auth,authError:e.authRD.authError}}),G)(A),T=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleOnSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleOnChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(o.a,{to:"/codeblogRedux"}):r.a.createElement("div",{className:"container navbarFixSignIn"},r.a.createElement("form",{onSubmit:this.handleOnSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text tex-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",name:"firstName",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue darken-2 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null),r.a.createElement("div",{className:"grey-text"},"**Guest Log in account",r.a.createElement("br",null),"Email: guest@guest.com",r.a.createElement("br",null),"Password: 123456"))))}}]),t}(n.Component),z={signUp:function(e){return function(t){u.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return E.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}},X=Object(s.b)((function(e){return{auth:e.firebaseRD.auth,authError:e.authRD.authError}}),z)(T);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Q=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleOnSubmit=function(e){e.preventDefault(),a.props.addPost(a.state,a.props.profile),a.props.history.push("/codeblogRedux")},a.handleOnChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container navbarFixSignIn"},r.a.createElement("form",{onSubmit:this.handleOnSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text tex-darken-3"},"Add Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",name:"title",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Content"),r.a.createElement("textarea",{className:"materialize-textarea",name:"content",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue darken-2 z-depth-0"},"Add")))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),W={addPost:function(e,t){return function(a,n){var r=n().firebaseRD.auth.uid;E.collection("posts").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(L.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{firstName:t.firstName,lastName:t.lastName,authorId:r,createAt:new Date})).then((function(){a({type:"ADD_POST",post:e})})).catch((function(e){a({type:"ADD_POST_ERROR",err:e})}))}}},H=Object(s.b)((function(e){return{auth:e.firebaseRD.auth,profile:e.firebaseRD.profile}}),W)(Q);var K=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/codeblogRedux",component:_}),r.a.createElement(o.b,{path:"/post/:id",component:U}),r.a.createElement(o.b,{path:"/signin",component:F}),r.a.createElement(o.b,{path:"/signup",component:X}),r.a.createElement(o.b,{path:"/addpost",component:H}))))},M=a(220),V=a.n(M),Y=a(221);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(L.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J={authError:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("LOGIN_SUCCESS: "),q({},e,{authError:null});case"LOGIN_ERROR":return console.log("LOGIN_ERROR: ",t.err),q({},e,{authError:"Login failed"});case"SIGNOUT_SUCCESS":return console.log("SIGNOUT_SUCCESS: ",t.err),e;case"SIGNUP_SUCCESS":return console.log("SIGNUP_SUCCESS: "),q({},e,{authError:null});case"SIGNUP_ERROR":return console.log("SIGNUP_ERROR: ",t.err),q({},e,{authError:t.err.message});default:return e}},ee={posts:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return console.log("Add post",t.post),e;case"ADD_POST_ERROR":return console.log("Add post error",t.err),e;default:return e}},ae=a(65),ne=Object(I.c)({authRD:$,postRD:te,firestoreRD:ae.firestoreReducer,firebaseRD:k.firebaseReducer}),re=Object(I.e)(ne,{},Object(I.d)(Object(I.a)(Y.a.withExtraArgument({getFirebase:k.getFirebase,getFirestore:ae.getFirestore}),V.a),Object(ae.reduxFirestore)(h),Object(k.reactReduxFirebase)(h,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0,firebaseStateName:"firebaseRD"}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));re.firebaseAuthIsReady.then((function(){c.a.render(r.a.createElement(s.a,{store:re},r.a.createElement(K,null)),document.getElementById("root"))}))},50:function(e,t,a){}},[[222,1,2]]]);
//# sourceMappingURL=main.1224337b.chunk.js.map