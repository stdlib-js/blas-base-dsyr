"use strict";var p=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var E=p(function(N,V){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(a,r,e,i,n,m,t,u,v,g){var l,h,w,s,c,d,f,o,y,x;if(l=k([u,v]),l?(c=v,d=u):(c=u,d=v),x=m,!l&&a==="upper"||l&&a==="lower"){for(s=x,o=0;o<r;o++){if(i[s]!==0)for(h=e*i[s],y=g+d*o,w=x,f=0;f<=o;f++)t[y+c*f]+=i[w]*h,w+=n;s+=n}return t}for(s=x,o=0;o<r;o++){if(i[s]!==0)for(h=e*i[s],y=g+d*o,w=s,f=o;f<r;f++)t[y+c*f]+=i[w]*h,w+=n;s+=n}return t}V.exports=B
});var j=p(function(A,T){
var C=require('@stdlib/math-base-special-fast-max/dist'),G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),J=E();function K(a,r,e,i,n,m,t,u){var v,g,l;if(!G(a))throw new TypeError(q('1ybFx',a));if(!H(r))throw new TypeError(q('1ybGA',r));if(e<0)throw new RangeError(q('1ybFz',e));if(m===0)throw new RangeError(q('1ybGB',m));if(u<C(1,e))throw new RangeError(q('1ybGM',e,u));return e===0||i===0?t:(a==="column-major"?(v=1,g=u):(v=u,g=1),l=I(e,m),J(r,e,i,n,m,l,t,v,g,0))}T.exports=K
});var M=p(function(rr,F){
var P=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=E();function U(a,r,e,i,n,m,t,u,v,g){if(!P(a))throw new TypeError(b('1ybGN',a));if(r<0)throw new RangeError(b('1ybGE',r));if(n===0)throw new RangeError(b('1ybGF',n));return r===0||e===0?t:Q(a,r,e,i,n,m,t,u,v,g)}F.exports=U
});var _=p(function(er,z){
var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=j(),Y=M();W(S,"ndarray",Y);z.exports=S
});var Z=require("path").join,$=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=_(),R,O=$(Z(__dirname,"./native.js"));L(O)?R=D:R=O;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
