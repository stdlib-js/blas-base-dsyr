"use strict";var b=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var p=b(function(A,V){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist');function k(a,r,e,i,o,s,v,n,t,g){var f,c,l,m,q,E,w,u,h,x;if(f=O([n,t]),f?(q=t,E=n):(q=n,E=t),x=s,!f&&a==="upper"||f&&a==="lower"){for(m=x,u=0;u<r;u++){if(i[m]!==0)for(c=e*i[m],h=g+E*u,l=x,w=0;w<=u;w++)v[h]+=i[l]*c,l+=o,h+=q;m+=o}return v}for(m=x,u=0;u<r;u++){if(i[m]!==0)for(c=e*i[m],h=g+E*u+q*u,l=m,w=u;w<r;w++)v[h]+=i[l]*c,l+=o,h+=q;m+=o}return v}V.exports=k
});var j=b(function(rr,T){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),J=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),K=p();function P(a,r,e,i,o,s,v,n){var t,g,f;if(!B(a))throw new TypeError(d('1ybFx',a));if(!G(r))throw new TypeError(d('1ybGA',r));if(e<0)throw new RangeError(d('1ybFz',e));if(s===0)throw new RangeError(d('1ybGB',s));if(n<J(1,e))throw new RangeError(d('1ybGM',e,n));return e===0||i===0?v:(H(a)?(t=1,g=n):(t=n,g=1),f=I(e,s),K(r,e,i,o,s,f,v,t,g,0))}T.exports=P
});var M=b(function(er,z){
var Q=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),U=p();function W(a,r,e,i,o,s,v,n,t,g){if(!Q(a))throw new TypeError(y('1ybGN',a));if(r<0)throw new RangeError(y('1ybGE',r));if(o===0)throw new RangeError(y('1ybGF',o));if(n===0)throw new RangeError(y('1ybG0',n));if(t===0)throw new RangeError(y('1ybGS',t));return r===0||e===0?v:U(a,r,e,i,o,s,v,n,t,g)}z.exports=W
});var _=b(function(ar,S){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=j(),Z=M();Y(F,"ndarray",Z);S.exports=F
});var $=require("path").join,L=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),X=_(),R,C=L($(__dirname,"./native.js"));D(C)?R=X:R=C;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
