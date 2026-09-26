"use strict";var b=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var R=b(function(A,x){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist');function k(n,r,e,i,o,g,v,a,t,f){var m,l,w,s,d,E,h,u,q,p;if(m=O([a,t]),m?(d=t,E=a):(d=a,E=t),p=g,!m&&n==="upper"||m&&n==="lower"){for(s=p,u=0;u<r;u++){if(i[s]!==0)for(l=e*i[s],q=f+E*u,w=p,h=0;h<=u;h++)v[q]+=i[w]*l,w+=o,q+=d;s+=o}return v}for(s=p,u=0;u<r;u++){if(i[s]!==0)for(l=e*i[s],q=f+E*u+d*u,w=s,h=u;h<r;h++)v[q]+=i[w]*l,w+=o,q+=d;s+=o}return v}x.exports=k
});var S=b(function(rr,j){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),J=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),K=R();function P(n,r,e,i,o,g,v,a){var t,f,m,l;if(!B(n))throw new TypeError(y('1ybFx',n));if(l=G(r),l===null)throw new TypeError(y('1ybGA',r));if(e<0)throw new RangeError(y('1ybFz',e));if(g===0)throw new RangeError(y('1ybGB',g));if(a<J(1,e))throw new RangeError(y('1ybGM',e,a));return e===0||i===0?v:(H(n)?(t=1,f=a):(t=a,f=1),m=I(e,g),K(l,e,i,o,g,m,v,t,f,0))}j.exports=P
});var T=b(function(er,z){
var Q=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),U=R();function W(n,r,e,i,o,g,v,a,t,f){var m=Q(n);if(m===null)throw new TypeError(c('1ybGN',n));if(r<0)throw new RangeError(c('1ybGE',r));if(o===0)throw new RangeError(c('1ybGF',o));if(a===0)throw new RangeError(c('1ybG0',a));if(t===0)throw new RangeError(c('1ybGS',t));return r===0||e===0?v:U(m,r,e,i,o,g,v,a,t,f)}z.exports=W
});var _=b(function(ar,M){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=S(),Z=T();Y(F,"ndarray",Z);M.exports=F
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=_(),V,C=L($(__dirname,"./native.js"));D(C)?V=X:V=C;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
