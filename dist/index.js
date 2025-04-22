"use strict";var b=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=b(function(N,V){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(a,r,e,i,u,s,o,n,t,g){var l,c,w,m,d,y,f,v,E,x;if(l=k([n,t]),l?(d=t,y=n):(d=n,y=t),x=s,!l&&a==="upper"||l&&a==="lower"){for(m=x,v=0;v<r;v++){if(i[m]!==0)for(c=e*i[m],E=g+y*v,w=x,f=0;f<=v;f++)o[E+d*f]+=i[w]*c,w+=u;m+=u}return o}for(m=x,v=0;v<r;v++){if(i[m]!==0)for(c=e*i[m],E=g+y*v,w=m,f=v;f<r;f++)o[E+d*f]+=i[w]*c,w+=u;m+=u}return o}V.exports=B
});var j=b(function(A,T){
var C=require('@stdlib/math-base-special-fast-max/dist'),G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),J=p();function K(a,r,e,i,u,s,o,n){var t,g,l;if(!G(a))throw new TypeError(h('1ybFx',a));if(!H(r))throw new TypeError(h('1ybGA',r));if(e<0)throw new RangeError(h('1ybFz',e));if(s===0)throw new RangeError(h('1ybGB',s));if(n<C(1,e))throw new RangeError(h('1ybGM',e,n));return e===0||i===0?o:(a==="column-major"?(t=1,g=n):(t=n,g=1),l=I(e,s),J(r,e,i,u,s,l,o,t,g,0))}T.exports=K
});var F=b(function(rr,z){
var P=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=p();function U(a,r,e,i,u,s,o,n,t,g){if(!P(a))throw new TypeError(q('1ybGN',a));if(r<0)throw new RangeError(q('1ybGE',r));if(u===0)throw new RangeError(q('1ybGF',u));if(n===0)throw new RangeError(q('1ybG0',n));if(t===0)throw new RangeError(q('1ybGS',t));return r===0||e===0?o:Q(a,r,e,i,u,s,o,n,t,g)}z.exports=U
});var _=b(function(er,S){
var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=j(),Y=F();W(M,"ndarray",Y);S.exports=M
});var Z=require("path").join,$=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=_(),R,O=$(Z(__dirname,"./native.js"));L(O)?R=D:R=O;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
