"use strict";var b=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=b(function(A,V){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist');function k(a,r,e,i,u,s,o,n,t,g){var l,d,w,m,y,c,f,v,E,x;if(l=O([n,t]),l?(y=t,c=n):(y=n,c=t),x=s,!l&&a==="upper"||l&&a==="lower"){for(m=x,v=0;v<r;v++){if(i[m]!==0)for(d=e*i[m],E=g+c*v,w=x,f=0;f<=v;f++)o[E+y*f]+=i[w]*d,w+=u;m+=u}return o}for(m=x,v=0;v<r;v++){if(i[m]!==0)for(d=e*i[m],E=g+c*v,w=m,f=v;f<r;f++)o[E+y*f]+=i[w]*d,w+=u;m+=u}return o}V.exports=k
});var j=b(function(rr,T){
var B=require('@stdlib/math-base-special-fast-max/dist'),G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),I=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),J=require('@stdlib/strided-base-stride2offset/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),K=p();function P(a,r,e,i,u,s,o,n){var t,g,l;if(!G(a))throw new TypeError(h('1ybFx',a));if(!H(r))throw new TypeError(h('1ybGA',r));if(e<0)throw new RangeError(h('1ybFz',e));if(s===0)throw new RangeError(h('1ybGB',s));if(n<B(1,e))throw new RangeError(h('1ybGM',e,n));return e===0||i===0?o:(I(a)?(t=1,g=n):(t=n,g=1),l=J(e,s),K(r,e,i,u,s,l,o,t,g,0))}T.exports=P
});var M=b(function(er,z){
var Q=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),U=p();function W(a,r,e,i,u,s,o,n,t,g){if(!Q(a))throw new TypeError(q('1ybGN',a));if(r<0)throw new RangeError(q('1ybGE',r));if(u===0)throw new RangeError(q('1ybGF',u));if(n===0)throw new RangeError(q('1ybG0',n));if(t===0)throw new RangeError(q('1ybGS',t));return r===0||e===0?o:U(a,r,e,i,u,s,o,n,t,g)}z.exports=W
});var _=b(function(ar,S){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=j(),Z=M();Y(F,"ndarray",Z);S.exports=F
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=_(),R,C=L($(__dirname,"./native.js"));D(C)?R=X:R=C;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
