"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[792],{26792:function(H,j,X){var m=20,O=1,p=1e6,R=1e6,S=-7,C=21,U=!1,x="[big.js] ",b=x+"Invalid ",k=b+"decimal places",V=b+"rounding mode",I=x+"Division by zero",h={},w=void 0,L=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function q(){function r(e){var t=this;if(!(t instanceof r))return e===w?q():new r(e);if(e instanceof r)t.s=e.s,t.e=e.e,t.c=e.c.slice();else{if(typeof e!="string"){if(r.strict===!0&&typeof e!="bigint")throw TypeError(b+"value");e=e===0&&1/e<0?"-0":String(e)}T(t,e)}t.constructor=r}return r.prototype=h,r.DP=m,r.RM=O,r.NE=S,r.PE=C,r.strict=U,r.roundDown=0,r.roundHalfUp=1,r.roundHalfEven=2,r.roundUp=3,r}function T(r,e){var t,n,i;if(!L.test(e))throw Error(b+"number");for(r.s=e.charAt(0)=="-"?(e=e.slice(1),-1):1,(t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),i=e.length,n=0;n<i&&e.charAt(n)=="0";)++n;if(n==i)r.c=[r.e=0];else{for(;i>0&&e.charAt(--i)=="0";);for(r.e=t-n-1,r.c=[],t=0;n<=i;)r.c[t++]=+e.charAt(n++)}return r}function _(r,e,t,n){var i=r.c;if(t===w&&(t=r.constructor.RM),t!==0&&t!==1&&t!==2&&t!==3)throw Error(V);if(e<1)n=t===3&&(n||!!i[0])||e===0&&(t===1&&i[0]>=5||t===2&&(i[0]>5||i[0]===5&&(n||i[1]!==w))),i.length=1,n?(r.e=r.e-e+1,i[0]=1):i[0]=r.e=0;else if(e<i.length){if(n=t===1&&i[e]>=5||t===2&&(i[e]>5||i[e]===5&&(n||i[e+1]!==w||i[e-1]&1))||t===3&&(n||!!i[0]),i.length=e,n){for(;++i[--e]>9;)if(i[e]=0,e===0){++r.e,i.unshift(1);break}}for(e=i.length;!i[--e];)i.pop()}return r}function D(r,e,t){var n=r.e,i=r.c.join(""),c=i.length;if(e)i=i.charAt(0)+(c>1?"."+i.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)i="0"+i;i="0."+i}else if(n>0)if(++n>c)for(n-=c;n--;)i+="0";else n<c&&(i=i.slice(0,n)+"."+i.slice(n));else c>1&&(i=i.charAt(0)+"."+i.slice(1));return r.s<0&&t?"-"+i:i}h.abs=function(){var r=new this.constructor(this);return r.s=1,r},h.cmp=function(r){var e,t=this,n=t.c,i=(r=new t.constructor(r)).c,c=t.s,u=r.s,o=t.e,f=r.e;if(!n[0]||!i[0])return n[0]?c:i[0]?-u:0;if(c!=u)return c;if(e=c<0,o!=f)return o>f^e?1:-1;for(u=(o=n.length)<(f=i.length)?o:f,c=-1;++c<u;)if(n[c]!=i[c])return n[c]>i[c]^e?1:-1;return o==f?0:o>f^e?1:-1},h.div=function(r){var e=this,t=e.constructor,n=e.c,i=(r=new t(r)).c,c=e.s==r.s?1:-1,u=t.DP;if(u!==~~u||u<0||u>p)throw Error(k);if(!i[0])throw Error(I);if(!n[0])return r.s=c,r.c=[r.e=0],r;var o,f,s,v,l,E=i.slice(),M=o=i.length,F=n.length,a=n.slice(0,o),g=a.length,P=r,A=P.c=[],B=0,N=u+(P.e=e.e-r.e)+1;for(P.s=c,c=N<0?0:N,E.unshift(0);g++<o;)a.push(0);do{for(s=0;s<10;s++){if(o!=(g=a.length))v=o>g?1:-1;else for(l=-1,v=0;++l<o;)if(i[l]!=a[l]){v=i[l]>a[l]?1:-1;break}if(v<0){for(f=g==o?i:E;g;){if(a[--g]<f[g]){for(l=g;l&&!a[--l];)a[l]=9;--a[l],a[g]+=10}a[g]-=f[g]}for(;!a[0];)a.shift()}else break}A[B++]=v?s:++s,a[0]&&v?a[g]=n[M]||0:a=[n[M]]}while((M++<F||a[0]!==w)&&c--);return!A[0]&&B!=1&&(A.shift(),P.e--,N--),B>N&&_(P,N,t.RM,a[0]!==w),P},h.eq=function(r){return this.cmp(r)===0},h.gt=function(r){return this.cmp(r)>0},h.gte=function(r){return this.cmp(r)>-1},h.lt=function(r){return this.cmp(r)<0},h.lte=function(r){return this.cmp(r)<1},h.minus=h.sub=function(r){var e,t,n,i,c=this,u=c.constructor,o=c.s,f=(r=new u(r)).s;if(o!=f)return r.s=-f,c.plus(r);var s=c.c.slice(),v=c.e,l=r.c,E=r.e;if(!s[0]||!l[0])return l[0]?r.s=-f:s[0]?r=new u(c):r.s=1,r;if(o=v-E){for((i=o<0)?(o=-o,n=s):(E=v,n=l),n.reverse(),f=o;f--;)n.push(0);n.reverse()}else for(t=((i=s.length<l.length)?s:l).length,o=f=0;f<t;f++)if(s[f]!=l[f]){i=s[f]<l[f];break}if(i&&(n=s,s=l,l=n,r.s=-r.s),(f=(t=l.length)-(e=s.length))>0)for(;f--;)s[e++]=0;for(f=e;t>o;){if(s[--t]<l[t]){for(e=t;e&&!s[--e];)s[e]=9;--s[e],s[t]+=10}s[t]-=l[t]}for(;s[--f]===0;)s.pop();for(;s[0]===0;)s.shift(),--E;return s[0]||(r.s=1,s=[E=0]),r.c=s,r.e=E,r},h.mod=function(r){var e,t=this,n=t.constructor,i=t.s,c=(r=new n(r)).s;if(!r.c[0])throw Error(I);return t.s=r.s=1,e=r.cmp(t)==1,t.s=i,r.s=c,e?new n(t):(i=n.DP,c=n.RM,n.DP=n.RM=0,t=t.div(r),n.DP=i,n.RM=c,this.minus(t.times(r)))},h.neg=function(){var r=new this.constructor(this);return r.s=-r.s,r},h.plus=h.add=function(r){var e,t,n,i=this,c=i.constructor;if(r=new c(r),i.s!=r.s)return r.s=-r.s,i.minus(r);var u=i.e,o=i.c,f=r.e,s=r.c;if(!o[0]||!s[0])return s[0]||(o[0]?r=new c(i):r.s=i.s),r;if(o=o.slice(),e=u-f){for(e>0?(f=u,n=s):(e=-e,n=o),n.reverse();e--;)n.push(0);n.reverse()}for(o.length-s.length<0&&(n=s,s=o,o=n),e=s.length,t=0;e;o[e]%=10)t=(o[--e]=o[e]+s[e]+t)/10|0;for(t&&(o.unshift(t),++f),e=o.length;o[--e]===0;)o.pop();return r.c=o,r.e=f,r},h.pow=function(r){var e=this,t=new e.constructor("1"),n=t,i=r<0;if(r!==~~r||r<-R||r>R)throw Error(b+"exponent");for(i&&(r=-r);r&1&&(n=n.times(e)),r>>=1,!!r;)e=e.times(e);return i?t.div(n):n},h.prec=function(r,e){if(r!==~~r||r<1||r>p)throw Error(b+"precision");return _(new this.constructor(this),r,e)},h.round=function(r,e){if(r===w)r=0;else if(r!==~~r||r<-p||r>p)throw Error(k);return _(new this.constructor(this),r+this.e+1,e)},h.sqrt=function(){var r,e,t,n=this,i=n.constructor,c=n.s,u=n.e,o=new i("0.5");if(!n.c[0])return new i(n);if(c<0)throw Error(x+"No square root");c=Math.sqrt(n+""),c===0||c===1/0?(e=n.c.join(""),e.length+u&1||(e+="0"),c=Math.sqrt(e),u=((u+1)/2|0)-(u<0||u&1),r=new i((c==1/0?"5e":(c=c.toExponential()).slice(0,c.indexOf("e")+1))+u)):r=new i(c+""),u=r.e+(i.DP+=4);do t=r,r=o.times(t.plus(n.div(t)));while(t.c.slice(0,u).join("")!==r.c.slice(0,u).join(""));return _(r,(i.DP-=4)+r.e+1,i.RM)},h.times=h.mul=function(r){var e,t=this,n=t.constructor,i=t.c,c=(r=new n(r)).c,u=i.length,o=c.length,f=t.e,s=r.e;if(r.s=t.s==r.s?1:-1,!i[0]||!c[0])return r.c=[r.e=0],r;for(r.e=f+s,u<o&&(e=i,i=c,c=e,s=u,u=o,o=s),e=new Array(s=u+o);s--;)e[s]=0;for(f=o;f--;){for(o=0,s=u+f;s>f;)o=e[s]+c[f]*i[s-f-1]+o,e[s--]=o%10,o=o/10|0;e[s]=o}for(o?++r.e:e.shift(),f=e.length;!e[--f];)e.pop();return r.c=e,r},h.toExponential=function(r,e){var t=this,n=t.c[0];if(r!==w){if(r!==~~r||r<0||r>p)throw Error(k);for(t=_(new t.constructor(t),++r,e);t.c.length<r;)t.c.push(0)}return D(t,!0,!!n)},h.toFixed=function(r,e){var t=this,n=t.c[0];if(r!==w){if(r!==~~r||r<0||r>p)throw Error(k);for(t=_(new t.constructor(t),r+t.e+1,e),r=r+t.e+1;t.c.length<r;)t.c.push(0)}return D(t,!1,!!n)},h[Symbol.for("nodejs.util.inspect.custom")]=h.toJSON=h.toString=function(){var r=this,e=r.constructor;return D(r,r.e<=e.NE||r.e>=e.PE,!!r.c[0])},h.toNumber=function(){var r=Number(D(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(r.toString()))throw Error(x+"Imprecise conversion");return r},h.toPrecision=function(r,e){var t=this,n=t.constructor,i=t.c[0];if(r!==w){if(r!==~~r||r<1||r>p)throw Error(b+"precision");for(t=_(new n(t),r,e);t.c.length<r;)t.c.push(0)}return D(t,r<=t.e||t.e<=n.NE||t.e>=n.PE,!!i)},h.valueOf=function(){var r=this,e=r.constructor;if(e.strict===!0)throw Error(x+"valueOf disallowed");return D(r,r.e<=e.NE||r.e>=e.PE,!0)};var z=q();j.Z=z}}]);