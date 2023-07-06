/*! For license information please see 857.a9e90179.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkeramorph=self.webpackChunkeramorph||[]).push([[857],{6857:function(e,n,r){r.r(n),r.d(n,{default:function(){return z}});var t=r(4165),a=r(5861),s=r(4942),i=r(1413),o=r(9439),l=r(2791),c=r(9434),u=r(1243),d="/",p=u.Z.create({withCredentials:!0}),h={get:function(e,n){return f(e,"GET",n)},post:function(e,n){return f(e,"POST",n)},put:function(e,n){return f(e,"PUT",n)},delete:function(e,n){return f(e,"DELETE",n)}};function f(e){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a,s,i=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",a=i.length>2&&void 0!==i[2]?i[2]:null,e.prev=2,e.next=5,p({url:"".concat(d).concat(n),method:r,data:a,params:"GET"===r?a:null});case 5:return s=e.sent,e.abrupt("return",s.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(r,"ing to the backend, endpoint: ").concat(n,", with data:"),a),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&sessionStorage.clear(),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),m.apply(this,arguments)}var g={signup:function(e){return b.apply(this,arguments)}},v="auth/";function b(){return(b=(0,a.Z)((0,t.Z)().mark((function e(n){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=w(n),e.next=4,h.post(v+"signup",r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function w(e){var n=e.username,r=e.password,t=e.firstName,a=e.lastName;return{Username:n,Password:r,UserAttributes:[{Name:"email",Value:e.emailAddress},{Name:"given_name",Value:t},{Name:"family_name",Value:a}]}}var Z=r(5910),y={type:Z.cS,isLoading:!0},x={type:Z.cS,isLoading:!1};function N(e){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(r,a){var s,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(y),n.next=4,g.signup(e);case 4:s=n.sent,r(x),i={type:Z.QE,user:s},r(i),n.next=14;break;case 10:throw n.prev=10,n.t0=n.catch(0),console.error("error:",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,r){return n.apply(this,arguments)}}()}var k=r(7689);var j=r(7961),F=r(585),C=r(4928),P=r(1088),S=r(184);function E(e){var n=e.inputField,r=e.credentials,t=e.errors,a=e.isFloating,s=e.handleChange,i=e.handleFocus,o=e.handleBlur,l=e.togglePassVisibility,c=n.type,u=n.placeholder,d=n.name,p=n.hasBeenChecked,h=n.isVisible,f=p?t[d]?"error":"success":"";return c="password"===c&&h?"text":c,(0,S.jsxs)("div",{className:"input-wrapper",children:[(0,S.jsx)("input",{id:d,className:f,type:c,placeholder:a?"":u,"aria-label":"Enter your ".concat(u),name:d,value:r[d],onChange:s,onFocus:i,onBlur:o,"aria-required":"true","aria-invalid":!!t[d],required:!0,pattern:".*"}),(0,S.jsx)("label",{htmlFor:d,className:a?"":"hidden",children:u}),p&&(0,S.jsx)(P.l,{iconName:f,className:"".concat(f," ").concat("error"===f?"":"hide-icon")}),t[d]&&(0,S.jsx)("div",{className:"error-msg",role:"alert",children:t[d]}),("password"===c||h)&&(0,S.jsx)(P.l,{iconName:h?"eye-off":"eye",className:"toggle-eye ".concat(h?"hide-icon":""),onClick:function(){return l(d)}})]})}function B(e){return e.inputFields.map((function(n){return(0,S.jsx)(E,{inputField:n,credentials:e.credentials,errors:e.errors,isFloating:e.isFloating,handleChange:e.handleChange,handleFocus:e.handleFocus,handleBlur:e.handleBlur,togglePassVisibility:e.togglePassVisibility},n.name)}))}function T(e){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(C.Z,{}),(0,S.jsxs)("label",{htmlFor:"float",children:["Toggle Float",(0,S.jsx)("input",{name:"float",id:"float",type:"checkbox",checked:e.isFloating,onChange:e.handleFloatToggle})]}),(0,S.jsxs)("form",{onSubmit:e.handleSignup,method:"POST",children:[(0,S.jsx)(B,(0,i.Z)({},e)),(0,S.jsx)("button",{type:"submit",disabled:e.areThereErrors||e.areSomeFieldsEmpty,className:"submit-btn ".concat(e.areThereErrors||e.areSomeFieldsEmpty?"disabled":""),children:"Sign up and start evolving"}),e.errors.general&&(0,S.jsx)("p",{className:"error-msg",children:e.errors.general})]})]})}var V=r(7210),O=r.n(V);function q(e){var n=e.setIsManualSignup,r=e.inputFields,t=e.credentials,a=e.errors,s=e.isFloating,i=e.handleChange,o=e.handleFocus,l=e.handleBlur,c=e.togglePassVisibility,u=e.handleFacebookSignup;return(0,S.jsxs)("section",{className:"social-signup",children:[(0,S.jsx)("h1",{children:"Create Your Account"}),(0,S.jsx)("p",{children:"Please note that phone verification is required for signup. Your number will be only used to verify your identity for security purposes"}),(0,S.jsx)(E,{inputField:r[0],credentials:t,errors:a,isFloating:s,handleChange:i,handleFocus:o,handleBlur:l,togglePassVisibility:c}),(0,S.jsx)("button",{onClick:function(){return n(!0)},className:"submit-btn",children:"Continue"}),a.general&&(0,S.jsx)("p",{className:"error-msg",children:a.general}),(0,S.jsx)("p",{children:"OR"}),(0,S.jsx)("div",{id:"google-signIn-div",className:"signup-div"}),(0,S.jsx)("div",{className:"signup-div",children:(0,S.jsx)(O(),{appId:"973381340669428",autoLoad:!0,fields:"name,email,picture",scope:"public_profile,user_friends",callback:u,icon:"fa-facebook"})})]})}var M=r(456),A=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,I=/[a-z]/,L=/[A-Z]/,J=/[!@#$%^&*]/;function _(e){var n=(0,l.useState)(!1),r=(0,o.Z)(n,2),t=r[0],a=r[1];return t?(0,S.jsx)(T,(0,i.Z)({},e)):(0,S.jsx)(q,(0,i.Z)({setIsManualSignup:a},e))}function z(){var e=(0,k.s0)(),n=(0,c.I0)(),r=(0,c.v9)((function(e){return e.userModule.isLoading}));(0,l.useEffect)((function(){document.title="Eramorph - Signup"}),[]);var u={firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:""},d=(0,l.useState)(!0),p=(0,o.Z)(d,2),h=p[0],f=p[1],m=function(e){var n=(0,l.useState)(e),r=(0,o.Z)(n,2),t=r[0],a=r[1],s=(0,l.useRef)([]),i=(0,l.useCallback)((function(e,n){n&&"function"===typeof n&&s.current.push(n),a(e)}),[]);return(0,l.useEffect)((function(){s.current.length>0&&(s.current.forEach((function(e){return e(t)})),s.current=[])}),[t]),[t,i]}(JSON.parse(JSON.stringify(u))),g=(0,o.Z)(m,2),v=g[0],b=g[1],w=(0,l.useState)(JSON.parse(JSON.stringify(u))),Z=(0,o.Z)(w,2),y=Z[0],x=Z[1],C=(0,l.useState)([{type:"text",placeholder:"First Name",name:"firstName",hasBeenChecked:!1},{type:"text",placeholder:"Last Name",name:"lastName",hasBeenChecked:!1},{type:"email",placeholder:"Email Address",name:"emailAddress",hasBeenChecked:!1},{type:"password",placeholder:"Password",name:"password",isVisible:!1,hasBeenChecked:!1},{type:"password",placeholder:"Confirm Password",name:"confirmPassword",isVisible:!1,hasBeenChecked:!1}]),P=(0,o.Z)(C,2),E=P[0],B=P[1],T=Object.values(v),V=T.some((function(e){return""===e})),O=Object.values(y).some((function(e){return""!==e}));function q(e,n){var r=n.password.length<6||!I.test(n.password)||!L.test(n.password)||!J.test(n.password),t=n.password.length<6?"Password needs to be 6 letters or longer.":I.test(n.password)?L.test(n.password)?J.test(n.password)?"":"Password needs to contain at least one special character.":"Password needs to contain at least one uppercase letter.":"Password needs to contain at least one lowercase letter.",a={firstName:{qualifier:n.firstName.length<2,errorMsg:"First name must be at least 2 characters."},lastName:{qualifier:n.lastName.length<2,errorMsg:"Last name must be at least 2 characters."},emailAddress:{qualifier:!A.test(n.emailAddress),errorMsg:"Please enter a valid email address."},password:{qualifier:r,errorMsg:t},confirmPassword:{qualifier:r||n.password!==n.confirmPassword,errorMsg:t||"Passwords do not match."}};return B((function(n){return n.map((function(n){return n.name===e?(0,i.Z)((0,i.Z)({},n),{},{hasBeenChecked:!0}):n}))})),""===e?(x((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,s.Z)({},e,"Please fill out this fields."))})),!0):a[e].qualifier?(x((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,s.Z)({},e,a[e].errorMsg))})),!0):(x((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,s.Z)({},e,""))})),!1)}var z=(0,l.useCallback)(function(){var r=(0,a.Z)((0,t.Z)().mark((function r(a){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,n(N(a)),x(""),e(j.MR),r.next=11;break;case 6:throw r.prev=6,r.t0=r.catch(0),console.log("Error in signup: ",r.t0),x("Error in signup request. Please try again."),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}(),[n,e]),G=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x(JSON.parse(JSON.stringify(u))),V?(x((function(e){return(0,i.Z)((0,i.Z)({},e),{},{general:"Please fill out all fields."})})),0):!Object.keys(v).some((function(e){return q(e,v)}))&&(!T.find((function(e){return e.includes(" ")}))||(x((function(e){return(0,i.Z)((0,i.Z)({},e),{},{general:"Please remove spaces."})})),0))){e.next=3;break}return e.abrupt("return");case 3:z(v);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R=(0,l.useCallback)((function(e){var n=(0,M.Z)(e.credential);z(n)}),[z]),U=(0,l.useCallback)((function(e){if(!e.accessToken)return x("Error in signup request. Please try again.");var n=e;console.log("credentials:",n),z(n)}),[z]);return(0,l.useEffect)((function(){var e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.onload=function(){var e=window.google;e.accounts.id.initialize({client_id:"871523970118-hi2gm3r18iflufpcgg72utl38f3l686s.apps.googleusercontent.com",callback:R}),e.accounts.id.renderButton(document.getElementById("google-signIn-div"),{theme:"outline",size:"large"})},document.body.appendChild(e),function(){document.body.removeChild(e)}}),[R]),r?(0,S.jsx)(F.Z,{children:(0,S.jsx)("div",{className:"signup",children:"Loading..."})}):(0,S.jsx)(F.Z,{children:(0,S.jsx)("div",{className:"signup",children:(0,S.jsx)(_,{credentials:v,errors:y,inputFields:E,handleChange:function(e){var n=e.target,r=n.name,t=n.value;b((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,s.Z)({},r,t))}),(function(e){return q(r,e)}))},handleFocus:function(e){q(e.target.name,v)},handleBlur:function(e){q(e.target.name,v)},handleSignup:G,togglePassVisibility:function(e){B(E.map((function(n){return n.name===e?(0,i.Z)((0,i.Z)({},n),{},{isVisible:!n.isVisible}):n})))},isFloating:h,handleFloatToggle:function(e){f(!h)},areThereErrors:O,areSomeFieldsEmpty:V,handleFacebookSignup:U})})})}}}]);
//# sourceMappingURL=857.a9e90179.chunk.js.map