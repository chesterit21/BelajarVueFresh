/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kt(o){const e=Object.create(null);for(const r of o.split(","))e[r]=1;return r=>r in e}const J={},$e=[],Mo=()=>{},sa=()=>!1,Sr=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&(o.charCodeAt(2)>122||o.charCodeAt(2)<97),yt=o=>o.startsWith("onUpdate:"),so=Object.assign,xt=(o,e)=>{const r=o.indexOf(e);r>-1&&o.splice(r,1)},ua=Object.prototype.hasOwnProperty,Y=(o,e)=>ua.call(o,e),O=Array.isArray,Be=o=>_r(o)==="[object Map]",Pn=o=>_r(o)==="[object Set]",F=o=>typeof o=="function",ro=o=>typeof o=="string",Jo=o=>typeof o=="symbol",eo=o=>o!==null&&typeof o=="object",Ln=o=>(eo(o)||F(o))&&F(o.then)&&F(o.catch),Nn=Object.prototype.toString,_r=o=>Nn.call(o),fa=o=>_r(o).slice(8,-1),jn=o=>_r(o)==="[object Object]",wt=o=>ro(o)&&o!=="NaN"&&o[0]!=="-"&&""+parseInt(o,10)===o,Ne=kt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rr=o=>{const e=Object.create(null);return r=>e[r]||(e[r]=o(r))},ba=/-(\w)/g,To=Rr(o=>o.replace(ba,(e,r)=>r?r.toUpperCase():"")),pa=/\B([A-Z])/g,de=Rr(o=>o.replace(pa,"-$1").toLowerCase()),zr=Rr(o=>o.charAt(0).toUpperCase()+o.slice(1)),fr=Rr(o=>o?`on${zr(o)}`:""),ie=(o,e)=>!Object.is(o,e),jr=(o,...e)=>{for(let r=0;r<o.length;r++)o[r](...e)},Qr=(o,e,r,t=!1)=>{Object.defineProperty(o,e,{configurable:!0,enumerable:!1,writable:t,value:r})},ga=o=>{const e=parseFloat(o);return isNaN(e)?o:e},ha=o=>{const e=ro(o)?Number(o):NaN;return isNaN(e)?o:e};let Ht;const Tr=()=>Ht||(Ht=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Er(o){if(O(o)){const e={};for(let r=0;r<o.length;r++){const t=o[r],n=ro(t)?ya(t):Er(t);if(n)for(const i in n)e[i]=n[i]}return e}else if(ro(o)||eo(o))return o}const ma=/;(?![^(]*\))/g,va=/:([^]+)/,ka=/\/\*[^]*?\*\//g;function ya(o){const e={};return o.replace(ka,"").split(ma).forEach(r=>{if(r){const t=r.split(va);t.length>1&&(e[t[0].trim()]=t[1].trim())}}),e}function Ar(o){let e="";if(ro(o))e=o;else if(O(o))for(let r=0;r<o.length;r++){const t=Ar(o[r]);t&&(e+=t+" ")}else if(eo(o))for(const r in o)o[r]&&(e+=r+" ");return e.trim()}function Zm(o){if(!o)return null;let{class:e,style:r}=o;return e&&!ro(e)&&(o.class=Ar(e)),r&&(o.style=Er(r)),o}const xa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wa=kt(xa);function Mn(o){return!!o||o===""}const Wn=o=>!!(o&&o.__v_isRef===!0),Ca=o=>ro(o)?o:o==null?"":O(o)||eo(o)&&(o.toString===Nn||!F(o.toString))?Wn(o)?Ca(o.value):JSON.stringify(o,Hn,2):String(o),Hn=(o,e)=>Wn(e)?Hn(o,e.value):Be(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[t,n],i)=>(r[Mr(t,i)+" =>"]=n,r),{})}:Pn(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>Mr(r))}:Jo(e)?Mr(e):eo(e)&&!O(e)&&!jn(e)?String(e):e,Mr=(o,e="")=>{var r;return Jo(o)?`Symbol(${(r=o.description)!=null?r:e})`:o};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wo;class $a{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wo,!e&&wo&&(this.index=(wo.scopes||(wo.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){const r=wo;try{return wo=this,e()}finally{wo=r}}}on(){++this._on===1&&(this.prevScope=wo,wo=this)}off(){this._on>0&&--this._on===0&&(wo=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let r,t;for(r=0,t=this.effects.length;r<t;r++)this.effects[r].stop();for(this.effects.length=0,r=0,t=this.cleanups.length;r<t;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,t=this.scopes.length;r<t;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Ba(){return wo}let oo;const Wr=new WeakSet;class Vn{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wo&&wo.active&&wo.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wr.has(this)&&(Wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Un(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vt(this),Yn(this);const e=oo,r=Oo;oo=this,Oo=!0;try{return this.fn()}finally{Xn(this),oo=e,Oo=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bt(e);this.deps=this.depsTail=void 0,Vt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ot(this)&&this.run()}get dirty(){return ot(this)}}let Kn=0,je,Me;function Un(o,e=!1){if(o.flags|=8,e){o.next=Me,Me=o;return}o.next=je,je=o}function Ct(){Kn++}function $t(){if(--Kn>0)return;if(Me){let e=Me;for(Me=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let o;for(;je;){let e=je;for(je=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(t){o||(o=t)}e=r}}if(o)throw o}function Yn(o){for(let e=o.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xn(o){let e,r=o.depsTail,t=r;for(;t;){const n=t.prevDep;t.version===-1?(t===r&&(r=n),Bt(t),Sa(t)):e=t,t.dep.activeLink=t.prevActiveLink,t.prevActiveLink=void 0,t=n}o.deps=e,o.depsTail=r}function ot(o){for(let e=o.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gn(e.dep.computed)||e.dep.version!==e.version))return!0;return!!o._dirty}function Gn(o){if(o.flags&4&&!(o.flags&16)||(o.flags&=-17,o.globalVersion===Ye)||(o.globalVersion=Ye,!o.isSSR&&o.flags&128&&(!o.deps&&!o._dirty||!ot(o))))return;o.flags|=2;const e=o.dep,r=oo,t=Oo;oo=o,Oo=!0;try{Yn(o);const n=o.fn(o._value);(e.version===0||ie(n,o._value))&&(o.flags|=128,o._value=n,e.version++)}catch(n){throw e.version++,n}finally{oo=r,Oo=t,Xn(o),o.flags&=-3}}function Bt(o,e=!1){const{dep:r,prevSub:t,nextSub:n}=o;if(t&&(t.nextSub=n,o.prevSub=void 0),n&&(n.prevSub=t,o.nextSub=void 0),r.subs===o&&(r.subs=t,!t&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)Bt(i,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function Sa(o){const{prevDep:e,nextDep:r}=o;e&&(e.nextDep=r,o.prevDep=void 0),r&&(r.prevDep=e,o.nextDep=void 0)}let Oo=!0;const qn=[];function Go(){qn.push(Oo),Oo=!1}function qo(){const o=qn.pop();Oo=o===void 0?!0:o}function Vt(o){const{cleanup:e}=o;if(o.cleanup=void 0,e){const r=oo;oo=void 0;try{e()}finally{oo=r}}}let Ye=0;class _a{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class St{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!oo||!Oo||oo===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==oo)r=this.activeLink=new _a(oo,this),oo.deps?(r.prevDep=oo.depsTail,oo.depsTail.nextDep=r,oo.depsTail=r):oo.deps=oo.depsTail=r,Jn(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const t=r.nextDep;t.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=t),r.prevDep=oo.depsTail,r.nextDep=void 0,oo.depsTail.nextDep=r,oo.depsTail=r,oo.deps===r&&(oo.deps=t)}return r}trigger(e){this.version++,Ye++,this.notify(e)}notify(e){Ct();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{$t()}}}function Jn(o){if(o.dep.sc++,o.sub.flags&4){const e=o.dep.computed;if(e&&!o.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)Jn(t)}const r=o.dep.subs;r!==o&&(o.prevSub=r,r&&(r.nextSub=o)),o.dep.subs=o}}const et=new WeakMap,me=Symbol(""),rt=Symbol(""),Xe=Symbol("");function uo(o,e,r){if(Oo&&oo){let t=et.get(o);t||et.set(o,t=new Map);let n=t.get(r);n||(t.set(r,n=new St),n.map=t,n.key=r),n.track()}}function Yo(o,e,r,t,n,i){const a=et.get(o);if(!a){Ye++;return}const l=d=>{d&&d.trigger()};if(Ct(),e==="clear")a.forEach(l);else{const d=O(o),u=d&&wt(r);if(d&&r==="length"){const c=Number(t);a.forEach((b,p)=>{(p==="length"||p===Xe||!Jo(p)&&p>=c)&&l(b)})}else switch((r!==void 0||a.has(void 0))&&l(a.get(r)),u&&l(a.get(Xe)),e){case"add":d?u&&l(a.get("length")):(l(a.get(me)),Be(o)&&l(a.get(rt)));break;case"delete":d||(l(a.get(me)),Be(o)&&l(a.get(rt)));break;case"set":Be(o)&&l(a.get(me));break}}$t()}function xe(o){const e=K(o);return e===o?e:(uo(e,"iterate",Xe),zo(o)?e:e.map(lo))}function Or(o){return uo(o=K(o),"iterate",Xe),o}const Ra={__proto__:null,[Symbol.iterator](){return Hr(this,Symbol.iterator,lo)},concat(...o){return xe(this).concat(...o.map(e=>O(e)?xe(e):e))},entries(){return Hr(this,"entries",o=>(o[1]=lo(o[1]),o))},every(o,e){return Ho(this,"every",o,e,void 0,arguments)},filter(o,e){return Ho(this,"filter",o,e,r=>r.map(lo),arguments)},find(o,e){return Ho(this,"find",o,e,lo,arguments)},findIndex(o,e){return Ho(this,"findIndex",o,e,void 0,arguments)},findLast(o,e){return Ho(this,"findLast",o,e,lo,arguments)},findLastIndex(o,e){return Ho(this,"findLastIndex",o,e,void 0,arguments)},forEach(o,e){return Ho(this,"forEach",o,e,void 0,arguments)},includes(...o){return Vr(this,"includes",o)},indexOf(...o){return Vr(this,"indexOf",o)},join(o){return xe(this).join(o)},lastIndexOf(...o){return Vr(this,"lastIndexOf",o)},map(o,e){return Ho(this,"map",o,e,void 0,arguments)},pop(){return Fe(this,"pop")},push(...o){return Fe(this,"push",o)},reduce(o,...e){return Kt(this,"reduce",o,e)},reduceRight(o,...e){return Kt(this,"reduceRight",o,e)},shift(){return Fe(this,"shift")},some(o,e){return Ho(this,"some",o,e,void 0,arguments)},splice(...o){return Fe(this,"splice",o)},toReversed(){return xe(this).toReversed()},toSorted(o){return xe(this).toSorted(o)},toSpliced(...o){return xe(this).toSpliced(...o)},unshift(...o){return Fe(this,"unshift",o)},values(){return Hr(this,"values",lo)}};function Hr(o,e,r){const t=Or(o),n=t[e]();return t!==o&&!zo(o)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.value&&(i.value=r(i.value)),i}),n}const za=Array.prototype;function Ho(o,e,r,t,n,i){const a=Or(o),l=a!==o&&!zo(o),d=a[e];if(d!==za[e]){const b=d.apply(o,i);return l?lo(b):b}let u=r;a!==o&&(l?u=function(b,p){return r.call(this,lo(b),p,o)}:r.length>2&&(u=function(b,p){return r.call(this,b,p,o)}));const c=d.call(a,u,t);return l&&n?n(c):c}function Kt(o,e,r,t){const n=Or(o);let i=r;return n!==o&&(zo(o)?r.length>3&&(i=function(a,l,d){return r.call(this,a,l,d,o)}):i=function(a,l,d){return r.call(this,a,lo(l),d,o)}),n[e](i,...t)}function Vr(o,e,r){const t=K(o);uo(t,"iterate",Xe);const n=t[e](...r);return(n===-1||n===!1)&&Tt(r[0])?(r[0]=K(r[0]),t[e](...r)):n}function Fe(o,e,r=[]){Go(),Ct();const t=K(o)[e].apply(o,r);return $t(),qo(),t}const Ta=kt("__proto__,__v_isRef,__isVue"),Zn=new Set(Object.getOwnPropertyNames(Symbol).filter(o=>o!=="arguments"&&o!=="caller").map(o=>Symbol[o]).filter(Jo));function Ea(o){Jo(o)||(o=String(o));const e=K(this);return uo(e,"has",o),e.hasOwnProperty(o)}class Qn{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,t){if(r==="__v_skip")return e.__v_skip;const n=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return i;if(r==="__v_raw")return t===(n?i?Ma:ti:i?ri:ei).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const a=O(e);if(!n){let d;if(a&&(d=Ra[r]))return d;if(r==="hasOwnProperty")return Ea}const l=Reflect.get(e,r,bo(e)?e:t);return(Jo(r)?Zn.has(r):Ta(r))||(n||uo(e,"get",r),i)?l:bo(l)?a&&wt(r)?l:l.value:eo(l)?n?ni(l):Rt(l):l}}class oi extends Qn{constructor(e=!1){super(!1,e)}set(e,r,t,n){let i=e[r];if(!this._isShallow){const d=ae(i);if(!zo(t)&&!ae(t)&&(i=K(i),t=K(t)),!O(e)&&bo(i)&&!bo(t))return d?!1:(i.value=t,!0)}const a=O(e)&&wt(r)?Number(r)<e.length:Y(e,r),l=Reflect.set(e,r,t,bo(e)?e:n);return e===K(n)&&(a?ie(t,i)&&Yo(e,"set",r,t):Yo(e,"add",r,t)),l}deleteProperty(e,r){const t=Y(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&t&&Yo(e,"delete",r,void 0),n}has(e,r){const t=Reflect.has(e,r);return(!Jo(r)||!Zn.has(r))&&uo(e,"has",r),t}ownKeys(e){return uo(e,"iterate",O(e)?"length":me),Reflect.ownKeys(e)}}class Aa extends Qn{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const Oa=new oi,Ia=new Aa,Da=new oi(!0);const tt=o=>o,ar=o=>Reflect.getPrototypeOf(o);function Fa(o,e,r){return function(...t){const n=this.__v_raw,i=K(n),a=Be(i),l=o==="entries"||o===Symbol.iterator&&a,d=o==="keys"&&a,u=n[o](...t),c=r?tt:e?vr:lo;return!e&&uo(i,"iterate",d?rt:me),{next(){const{value:b,done:p}=u.next();return p?{value:b,done:p}:{value:l?[c(b[0]),c(b[1])]:c(b),done:p}},[Symbol.iterator](){return this}}}}function lr(o){return function(...e){return o==="delete"?!1:o==="clear"?void 0:this}}function Pa(o,e){const r={get(n){const i=this.__v_raw,a=K(i),l=K(n);o||(ie(n,l)&&uo(a,"get",n),uo(a,"get",l));const{has:d}=ar(a),u=e?tt:o?vr:lo;if(d.call(a,n))return u(i.get(n));if(d.call(a,l))return u(i.get(l));i!==a&&i.get(n)},get size(){const n=this.__v_raw;return!o&&uo(K(n),"iterate",me),Reflect.get(n,"size",n)},has(n){const i=this.__v_raw,a=K(i),l=K(n);return o||(ie(n,l)&&uo(a,"has",n),uo(a,"has",l)),n===l?i.has(n):i.has(n)||i.has(l)},forEach(n,i){const a=this,l=a.__v_raw,d=K(l),u=e?tt:o?vr:lo;return!o&&uo(d,"iterate",me),l.forEach((c,b)=>n.call(i,u(c),u(b),a))}};return so(r,o?{add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear")}:{add(n){!e&&!zo(n)&&!ae(n)&&(n=K(n));const i=K(this);return ar(i).has.call(i,n)||(i.add(n),Yo(i,"add",n,n)),this},set(n,i){!e&&!zo(i)&&!ae(i)&&(i=K(i));const a=K(this),{has:l,get:d}=ar(a);let u=l.call(a,n);u||(n=K(n),u=l.call(a,n));const c=d.call(a,n);return a.set(n,i),u?ie(i,c)&&Yo(a,"set",n,i):Yo(a,"add",n,i),this},delete(n){const i=K(this),{has:a,get:l}=ar(i);let d=a.call(i,n);d||(n=K(n),d=a.call(i,n)),l&&l.call(i,n);const u=i.delete(n);return d&&Yo(i,"delete",n,void 0),u},clear(){const n=K(this),i=n.size!==0,a=n.clear();return i&&Yo(n,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=Fa(n,o,e)}),r}function _t(o,e){const r=Pa(o,e);return(t,n,i)=>n==="__v_isReactive"?!o:n==="__v_isReadonly"?o:n==="__v_raw"?t:Reflect.get(Y(r,n)&&n in t?r:t,n,i)}const La={get:_t(!1,!1)},Na={get:_t(!1,!0)},ja={get:_t(!0,!1)};const ei=new WeakMap,ri=new WeakMap,ti=new WeakMap,Ma=new WeakMap;function Wa(o){switch(o){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ha(o){return o.__v_skip||!Object.isExtensible(o)?0:Wa(fa(o))}function Rt(o){return ae(o)?o:zt(o,!1,Oa,La,ei)}function Va(o){return zt(o,!1,Da,Na,ri)}function ni(o){return zt(o,!0,Ia,ja,ti)}function zt(o,e,r,t,n){if(!eo(o)||o.__v_raw&&!(e&&o.__v_isReactive))return o;const i=Ha(o);if(i===0)return o;const a=n.get(o);if(a)return a;const l=new Proxy(o,i===2?t:r);return n.set(o,l),l}function Se(o){return ae(o)?Se(o.__v_raw):!!(o&&o.__v_isReactive)}function ae(o){return!!(o&&o.__v_isReadonly)}function zo(o){return!!(o&&o.__v_isShallow)}function Tt(o){return o?!!o.__v_raw:!1}function K(o){const e=o&&o.__v_raw;return e?K(e):o}function Ka(o){return!Y(o,"__v_skip")&&Object.isExtensible(o)&&Qr(o,"__v_skip",!0),o}const lo=o=>eo(o)?Rt(o):o,vr=o=>eo(o)?ni(o):o;function bo(o){return o?o.__v_isRef===!0:!1}function Qm(o){return Ua(o,!1)}function Ua(o,e){return bo(o)?o:new Ya(o,e)}class Ya{constructor(e,r){this.dep=new St,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:K(e),this._value=r?e:lo(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,t=this.__v_isShallow||zo(e)||ae(e);e=t?e:K(e),ie(e,r)&&(this._rawValue=e,this._value=t?e:lo(e),this.dep.trigger())}}function Xa(o){return bo(o)?o.value:o}const Ga={get:(o,e,r)=>e==="__v_raw"?o:Xa(Reflect.get(o,e,r)),set:(o,e,r,t)=>{const n=o[e];return bo(n)&&!bo(r)?(n.value=r,!0):Reflect.set(o,e,r,t)}};function ii(o){return Se(o)?o:new Proxy(o,Ga)}class qa{constructor(e,r,t){this.fn=e,this.setter=r,this._value=void 0,this.dep=new St(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ye-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=t}notify(){if(this.flags|=16,!(this.flags&8)&&oo!==this)return Un(this,!0),!0}get value(){const e=this.dep.track();return Gn(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ja(o,e,r=!1){let t,n;return F(o)?t=o:(t=o.get,n=o.set),new qa(t,n,r)}const dr={},kr=new WeakMap;let ge;function Za(o,e=!1,r=ge){if(r){let t=kr.get(r);t||kr.set(r,t=[]),t.push(o)}}function Qa(o,e,r=J){const{immediate:t,deep:n,once:i,scheduler:a,augmentJob:l,call:d}=r,u=R=>n?R:zo(R)||n===!1||n===0?Xo(R,1):Xo(R);let c,b,p,h,$=!1,S=!1;if(bo(o)?(b=()=>o.value,$=zo(o)):Se(o)?(b=()=>u(o),$=!0):O(o)?(S=!0,$=o.some(R=>Se(R)||zo(R)),b=()=>o.map(R=>{if(bo(R))return R.value;if(Se(R))return u(R);if(F(R))return d?d(R,2):R()})):F(o)?e?b=d?()=>d(o,2):o:b=()=>{if(p){Go();try{p()}finally{qo()}}const R=ge;ge=c;try{return d?d(o,3,[h]):o(h)}finally{ge=R}}:b=Mo,e&&n){const R=b,L=n===!0?1/0:n;b=()=>Xo(R(),L)}const j=Ba(),A=()=>{c.stop(),j&&j.active&&xt(j.effects,c)};if(i&&e){const R=e;e=(...L)=>{R(...L),A()}}let D=S?new Array(o.length).fill(dr):dr;const N=R=>{if(!(!(c.flags&1)||!c.dirty&&!R))if(e){const L=c.run();if(n||$||(S?L.some((W,Z)=>ie(W,D[Z])):ie(L,D))){p&&p();const W=ge;ge=c;try{const Z=[L,D===dr?void 0:S&&D[0]===dr?[]:D,h];D=L,d?d(e,3,Z):e(...Z)}finally{ge=W}}}else c.run()};return l&&l(N),c=new Vn(b),c.scheduler=a?()=>a(N,!1):N,h=R=>Za(R,!1,c),p=c.onStop=()=>{const R=kr.get(c);if(R){if(d)d(R,4);else for(const L of R)L();kr.delete(c)}},e?t?N(!0):D=c.run():a?a(N.bind(null,!0),!0):c.run(),A.pause=c.pause.bind(c),A.resume=c.resume.bind(c),A.stop=A,A}function Xo(o,e=1/0,r){if(e<=0||!eo(o)||o.__v_skip||(r=r||new Set,r.has(o)))return o;if(r.add(o),e--,bo(o))Xo(o.value,e,r);else if(O(o))for(let t=0;t<o.length;t++)Xo(o[t],e,r);else if(Pn(o)||Be(o))o.forEach(t=>{Xo(t,e,r)});else if(jn(o)){for(const t in o)Xo(o[t],e,r);for(const t of Object.getOwnPropertySymbols(o))Object.prototype.propertyIsEnumerable.call(o,t)&&Xo(o[t],e,r)}return o}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function er(o,e,r,t){try{return t?o(...t):o()}catch(n){Ir(n,e,r)}}function Io(o,e,r,t){if(F(o)){const n=er(o,e,r,t);return n&&Ln(n)&&n.catch(i=>{Ir(i,e,r)}),n}if(O(o)){const n=[];for(let i=0;i<o.length;i++)n.push(Io(o[i],e,r,t));return n}}function Ir(o,e,r,t=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||J;if(e){let l=e.parent;const d=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${r}`;for(;l;){const c=l.ec;if(c){for(let b=0;b<c.length;b++)if(c[b](o,d,u)===!1)return}l=l.parent}if(i){Go(),er(i,null,10,[o,d,u]),qo();return}}ol(o,r,n,t,a)}function ol(o,e,r,t=!0,n=!1){if(n)throw o;console.error(o)}const mo=[];let No=-1;const _e=[];let ee=null,we=0;const ai=Promise.resolve();let yr=null;function el(o){const e=yr||ai;return o?e.then(this?o.bind(this):o):e}function rl(o){let e=No+1,r=mo.length;for(;e<r;){const t=e+r>>>1,n=mo[t],i=Ge(n);i<o||i===o&&n.flags&2?e=t+1:r=t}return e}function Et(o){if(!(o.flags&1)){const e=Ge(o),r=mo[mo.length-1];!r||!(o.flags&2)&&e>=Ge(r)?mo.push(o):mo.splice(rl(e),0,o),o.flags|=1,li()}}function li(){yr||(yr=ai.then(ci))}function tl(o){O(o)?_e.push(...o):ee&&o.id===-1?ee.splice(we+1,0,o):o.flags&1||(_e.push(o),o.flags|=1),li()}function Ut(o,e,r=No+1){for(;r<mo.length;r++){const t=mo[r];if(t&&t.flags&2){if(o&&t.id!==o.uid)continue;mo.splice(r,1),r--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function di(o){if(_e.length){const e=[...new Set(_e)].sort((r,t)=>Ge(r)-Ge(t));if(_e.length=0,ee){ee.push(...e);return}for(ee=e,we=0;we<ee.length;we++){const r=ee[we];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}ee=null,we=0}}const Ge=o=>o.id==null?o.flags&2?-1:1/0:o.id;function ci(o){try{for(No=0;No<mo.length;No++){const e=mo[No];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),er(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;No<mo.length;No++){const e=mo[No];e&&(e.flags&=-2)}No=-1,mo.length=0,di(),yr=null,(mo.length||_e.length)&&ci()}}let ao=null,si=null;function xr(o){const e=ao;return ao=o,si=o&&o.type.__scopeId||null,e}function nl(o,e=ao,r){if(!e||o._n)return o;const t=(...n)=>{t._d&&ln(-1);const i=xr(e);let a;try{a=o(...n)}finally{xr(i),t._d&&ln(1)}return a};return t._n=!0,t._c=!0,t._d=!0,t}function ov(o,e){if(ao===null)return o;const r=Nr(ao),t=o.dirs||(o.dirs=[]);for(let n=0;n<e.length;n++){let[i,a,l,d=J]=e[n];i&&(F(i)&&(i={mounted:i,updated:i}),i.deep&&Xo(a),t.push({dir:i,instance:r,value:a,oldValue:void 0,arg:l,modifiers:d}))}return o}function se(o,e,r,t){const n=o.dirs,i=e&&e.dirs;for(let a=0;a<n.length;a++){const l=n[a];i&&(l.oldValue=i[a].value);let d=l.dir[t];d&&(Go(),Io(d,r,8,[o.el,l,o,e]),qo())}}const ui=Symbol("_vte"),fi=o=>o.__isTeleport,We=o=>o&&(o.disabled||o.disabled===""),Yt=o=>o&&(o.defer||o.defer===""),Xt=o=>typeof SVGElement<"u"&&o instanceof SVGElement,Gt=o=>typeof MathMLElement=="function"&&o instanceof MathMLElement,nt=(o,e)=>{const r=o&&o.to;return ro(r)?e?e(r):null:r},bi={name:"Teleport",__isTeleport:!0,process(o,e,r,t,n,i,a,l,d,u){const{mc:c,pc:b,pbc:p,o:{insert:h,querySelector:$,createText:S,createComment:j}}=u,A=We(e.props);let{shapeFlag:D,children:N,dynamicChildren:R}=e;if(o==null){const L=e.el=S(""),W=e.anchor=S("");h(L,r,t),h(W,r,t);const Z=(E,P)=>{D&16&&(n&&n.isCE&&(n.ce._teleportTarget=E),c(N,E,P,n,i,a,l,d))},G=()=>{const E=e.target=nt(e.props,$),P=pi(E,e,S,h);E&&(a!=="svg"&&Xt(E)?a="svg":a!=="mathml"&&Gt(E)&&(a="mathml"),A||(Z(E,P),br(e,!1)))};A&&(Z(r,W),br(e,!0)),Yt(e.props)?(e.el.__isMounted=!1,ho(()=>{G(),delete e.el.__isMounted},i)):G()}else{if(Yt(e.props)&&o.el.__isMounted===!1){ho(()=>{bi.process(o,e,r,t,n,i,a,l,d,u)},i);return}e.el=o.el,e.targetStart=o.targetStart;const L=e.anchor=o.anchor,W=e.target=o.target,Z=e.targetAnchor=o.targetAnchor,G=We(o.props),E=G?r:W,P=G?L:Z;if(a==="svg"||Xt(W)?a="svg":(a==="mathml"||Gt(W))&&(a="mathml"),R?(p(o.dynamicChildren,R,E,n,i,a,l),Ft(o,e,!0)):d||b(o,e,E,P,n,i,a,l,!1),A)G?e.props&&o.props&&e.props.to!==o.props.to&&(e.props.to=o.props.to):cr(e,r,L,u,1);else if((e.props&&e.props.to)!==(o.props&&o.props.to)){const H=e.target=nt(e.props,$);H&&cr(e,H,null,u,0)}else G&&cr(e,W,Z,u,1);br(e,A)}},remove(o,e,r,{um:t,o:{remove:n}},i){const{shapeFlag:a,children:l,anchor:d,targetStart:u,targetAnchor:c,target:b,props:p}=o;if(b&&(n(u),n(c)),i&&n(d),a&16){const h=i||!We(p);for(let $=0;$<l.length;$++){const S=l[$];t(S,e,r,h,!!S.dynamicChildren)}}},move:cr,hydrate:il};function cr(o,e,r,{o:{insert:t},m:n},i=2){i===0&&t(o.targetAnchor,e,r);const{el:a,anchor:l,shapeFlag:d,children:u,props:c}=o,b=i===2;if(b&&t(a,e,r),(!b||We(c))&&d&16)for(let p=0;p<u.length;p++)n(u[p],e,r,2);b&&t(l,e,r)}function il(o,e,r,t,n,i,{o:{nextSibling:a,parentNode:l,querySelector:d,insert:u,createText:c}},b){const p=e.target=nt(e.props,d);if(p){const h=We(e.props),$=p._lpa||p.firstChild;if(e.shapeFlag&16)if(h)e.anchor=b(a(o),e,l(o),r,t,n,i),e.targetStart=$,e.targetAnchor=$&&a($);else{e.anchor=a(o);let S=$;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,p._lpa=e.targetAnchor&&a(e.targetAnchor);break}}S=a(S)}e.targetAnchor||pi(p,e,c,u),b($&&a($),e,p,r,t,n,i)}br(e,h)}return e.anchor&&a(e.anchor)}const ev=bi;function br(o,e){const r=o.ctx;if(r&&r.ut){let t,n;for(e?(t=o.el,n=o.anchor):(t=o.targetStart,n=o.targetAnchor);t&&t!==n;)t.nodeType===1&&t.setAttribute("data-v-owner",r.uid),t=t.nextSibling;r.ut()}}function pi(o,e,r,t){const n=e.targetStart=r(""),i=e.targetAnchor=r("");return n[ui]=i,o&&(t(n,o),t(i,o)),i}const re=Symbol("_leaveCb"),sr=Symbol("_enterCb");function al(){const o={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wi(()=>{o.isMounted=!0}),Ci(()=>{o.isUnmounting=!0}),o}const Ro=[Function,Array],gi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ro,onEnter:Ro,onAfterEnter:Ro,onEnterCancelled:Ro,onBeforeLeave:Ro,onLeave:Ro,onAfterLeave:Ro,onLeaveCancelled:Ro,onBeforeAppear:Ro,onAppear:Ro,onAfterAppear:Ro,onAppearCancelled:Ro},hi=o=>{const e=o.subTree;return e.component?hi(e.component):e},ll={name:"BaseTransition",props:gi,setup(o,{slots:e}){const r=Lt(),t=al();return()=>{const n=e.default&&ki(e.default(),!0);if(!n||!n.length)return;const i=mi(n),a=K(o),{mode:l}=a;if(t.isLeaving)return Kr(i);const d=qt(i);if(!d)return Kr(i);let u=it(d,a,t,r,b=>u=b);d.type!==fo&&qe(d,u);let c=r.subTree&&qt(r.subTree);if(c&&c.type!==fo&&!he(d,c)&&hi(r).type!==fo){let b=it(c,a,t,r);if(qe(c,b),l==="out-in"&&d.type!==fo)return t.isLeaving=!0,b.afterLeave=()=>{t.isLeaving=!1,r.job.flags&8||r.update(),delete b.afterLeave,c=void 0},Kr(i);l==="in-out"&&d.type!==fo?b.delayLeave=(p,h,$)=>{const S=vi(t,c);S[String(c.key)]=c,p[re]=()=>{h(),p[re]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{$(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function mi(o){let e=o[0];if(o.length>1){for(const r of o)if(r.type!==fo){e=r;break}}return e}const dl=ll;function vi(o,e){const{leavingVNodes:r}=o;let t=r.get(e.type);return t||(t=Object.create(null),r.set(e.type,t)),t}function it(o,e,r,t,n){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:d,onEnter:u,onAfterEnter:c,onEnterCancelled:b,onBeforeLeave:p,onLeave:h,onAfterLeave:$,onLeaveCancelled:S,onBeforeAppear:j,onAppear:A,onAfterAppear:D,onAppearCancelled:N}=e,R=String(o.key),L=vi(r,o),W=(E,P)=>{E&&Io(E,t,9,P)},Z=(E,P)=>{const H=P[1];W(E,P),O(E)?E.every(_=>_.length<=1)&&H():E.length<=1&&H()},G={mode:a,persisted:l,beforeEnter(E){let P=d;if(!r.isMounted)if(i)P=j||d;else return;E[re]&&E[re](!0);const H=L[R];H&&he(o,H)&&H.el[re]&&H.el[re](),W(P,[E])},enter(E){let P=u,H=c,_=b;if(!r.isMounted)if(i)P=A||u,H=D||c,_=N||b;else return;let U=!1;const no=E[sr]=ko=>{U||(U=!0,ko?W(_,[E]):W(H,[E]),G.delayedLeave&&G.delayedLeave(),E[sr]=void 0)};P?Z(P,[E,no]):no()},leave(E,P){const H=String(o.key);if(E[sr]&&E[sr](!0),r.isUnmounting)return P();W(p,[E]);let _=!1;const U=E[re]=no=>{_||(_=!0,P(),no?W(S,[E]):W($,[E]),E[re]=void 0,L[H]===o&&delete L[H])};L[H]=o,h?Z(h,[E,U]):U()},clone(E){const P=it(E,e,r,t,n);return n&&n(P),P}};return G}function Kr(o){if(Dr(o))return o=le(o),o.children=null,o}function qt(o){if(!Dr(o))return fi(o.type)&&o.children?mi(o.children):o;if(o.component)return o.component.subTree;const{shapeFlag:e,children:r}=o;if(r){if(e&16)return r[0];if(e&32&&F(r.default))return r.default()}}function qe(o,e){o.shapeFlag&6&&o.component?(o.transition=e,qe(o.component.subTree,e)):o.shapeFlag&128?(o.ssContent.transition=e.clone(o.ssContent),o.ssFallback.transition=e.clone(o.ssFallback)):o.transition=e}function ki(o,e=!1,r){let t=[],n=0;for(let i=0;i<o.length;i++){let a=o[i];const l=r==null?a.key:String(r)+String(a.key!=null?a.key:i);a.type===$o?(a.patchFlag&128&&n++,t=t.concat(ki(a.children,e,l))):(e||a.type!==fo)&&t.push(l!=null?le(a,{key:l}):a)}if(n>1)for(let i=0;i<t.length;i++)t[i].patchFlag=-2;return t}function rv(){const o=Lt();return o?(o.appContext.config.idPrefix||"v")+"-"+o.ids[0]+o.ids[1]++:""}function yi(o){o.ids=[o.ids[0]+o.ids[2]+++"-",0,0]}function He(o,e,r,t,n=!1){if(O(o)){o.forEach(($,S)=>He($,e&&(O(e)?e[S]:e),r,t,n));return}if(Re(t)&&!n){t.shapeFlag&512&&t.type.__asyncResolved&&t.component.subTree.component&&He(o,e,r,t.component.subTree);return}const i=t.shapeFlag&4?Nr(t.component):t.el,a=n?null:i,{i:l,r:d}=o,u=e&&e.r,c=l.refs===J?l.refs={}:l.refs,b=l.setupState,p=K(b),h=b===J?()=>!1:$=>Y(p,$);if(u!=null&&u!==d&&(ro(u)?(c[u]=null,h(u)&&(b[u]=null)):bo(u)&&(u.value=null)),F(d))er(d,l,12,[a,c]);else{const $=ro(d),S=bo(d);if($||S){const j=()=>{if(o.f){const A=$?h(d)?b[d]:c[d]:d.value;n?O(A)&&xt(A,i):O(A)?A.includes(i)||A.push(i):$?(c[d]=[i],h(d)&&(b[d]=c[d])):(d.value=[i],o.k&&(c[o.k]=d.value))}else $?(c[d]=a,h(d)&&(b[d]=a)):S&&(d.value=a,o.k&&(c[o.k]=a))};a?(j.id=-1,ho(j,r)):j()}}}Tr().requestIdleCallback;Tr().cancelIdleCallback;const Re=o=>!!o.type.__asyncLoader,Dr=o=>o.type.__isKeepAlive;function cl(o,e){xi(o,"a",e)}function sl(o,e){xi(o,"da",e)}function xi(o,e,r=co){const t=o.__wdc||(o.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return o()});if(Fr(e,t,r),r){let n=r.parent;for(;n&&n.parent;)Dr(n.parent.vnode)&&ul(t,e,r,n),n=n.parent}}function ul(o,e,r,t){const n=Fr(e,o,t,!0);$i(()=>{xt(t[e],n)},r)}function Fr(o,e,r=co,t=!1){if(r){const n=r[o]||(r[o]=[]),i=e.__weh||(e.__weh=(...a)=>{Go();const l=rr(r),d=Io(e,r,o,a);return l(),qo(),d});return t?n.unshift(i):n.push(i),i}}const Zo=o=>(e,r=co)=>{(!Qe||o==="sp")&&Fr(o,(...t)=>e(...t),r)},fl=Zo("bm"),wi=Zo("m"),bl=Zo("bu"),pl=Zo("u"),Ci=Zo("bum"),$i=Zo("um"),gl=Zo("sp"),hl=Zo("rtg"),ml=Zo("rtc");function vl(o,e=co){Fr("ec",o,e)}const At="components",kl="directives";function tv(o,e){return Ot(At,o,!0,e)||o}const Bi=Symbol.for("v-ndc");function nv(o){return ro(o)?Ot(At,o,!1)||o:o||Bi}function iv(o){return Ot(kl,o)}function Ot(o,e,r=!0,t=!1){const n=ao||co;if(n){const i=n.type;if(o===At){const l=ld(i,!1);if(l&&(l===e||l===To(e)||l===zr(To(e))))return i}const a=Jt(n[o]||i[o],e)||Jt(n.appContext[o],e);return!a&&t?i:a}}function Jt(o,e){return o&&(o[e]||o[To(e)]||o[zr(To(e))])}function av(o,e,r,t){let n;const i=r,a=O(o);if(a||ro(o)){const l=a&&Se(o);let d=!1,u=!1;l&&(d=!zo(o),u=ae(o),o=Or(o)),n=new Array(o.length);for(let c=0,b=o.length;c<b;c++)n[c]=e(d?u?vr(lo(o[c])):lo(o[c]):o[c],c,void 0,i)}else if(typeof o=="number"){n=new Array(o);for(let l=0;l<o;l++)n[l]=e(l+1,l,void 0,i)}else if(eo(o))if(o[Symbol.iterator])n=Array.from(o,(l,d)=>e(l,d,void 0,i));else{const l=Object.keys(o);n=new Array(l.length);for(let d=0,u=l.length;d<u;d++){const c=l[d];n[d]=e(o[c],c,d,i)}}else n=[];return n}function lv(o,e){for(let r=0;r<e.length;r++){const t=e[r];if(O(t))for(let n=0;n<t.length;n++)o[t[n].name]=t[n].fn;else t&&(o[t.name]=t.key?(...n)=>{const i=t.fn(...n);return i&&(i.key=t.key),i}:t.fn)}return o}function dv(o,e,r={},t,n){if(ao.ce||ao.parent&&Re(ao.parent)&&ao.parent.ce)return e!=="default"&&(r.name=e),st(),ut($o,null,[vo("slot",r,t&&t())],64);let i=o[e];i&&i._c&&(i._d=!1),st();const a=i&&Si(i(r)),l=r.key||a&&a.key,d=ut($o,{key:(l&&!Jo(l)?l:`_${e}`)+(!a&&t?"_fb":"")},a||(t?t():[]),a&&o._===1?64:-2);return!n&&d.scopeId&&(d.slotScopeIds=[d.scopeId+"-s"]),i&&i._c&&(i._d=!0),d}function Si(o){return o.some(e=>Ze(e)?!(e.type===fo||e.type===$o&&!Si(e.children)):!0)?o:null}function cv(o,e){const r={};for(const t in o)r[/[A-Z]/.test(t)?`on:${t}`:fr(t)]=o[t];return r}const at=o=>o?Ui(o)?Nr(o):at(o.parent):null,Ve=so(Object.create(null),{$:o=>o,$el:o=>o.vnode.el,$data:o=>o.data,$props:o=>o.props,$attrs:o=>o.attrs,$slots:o=>o.slots,$refs:o=>o.refs,$parent:o=>at(o.parent),$root:o=>at(o.root),$host:o=>o.ce,$emit:o=>o.emit,$options:o=>Ri(o),$forceUpdate:o=>o.f||(o.f=()=>{Et(o.update)}),$nextTick:o=>o.n||(o.n=el.bind(o.proxy)),$watch:o=>Wl.bind(o)}),Ur=(o,e)=>o!==J&&!o.__isScriptSetup&&Y(o,e),yl={get({_:o},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:t,data:n,props:i,accessCache:a,type:l,appContext:d}=o;let u;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return t[e];case 2:return n[e];case 4:return r[e];case 3:return i[e]}else{if(Ur(t,e))return a[e]=1,t[e];if(n!==J&&Y(n,e))return a[e]=2,n[e];if((u=o.propsOptions[0])&&Y(u,e))return a[e]=3,i[e];if(r!==J&&Y(r,e))return a[e]=4,r[e];lt&&(a[e]=0)}}const c=Ve[e];let b,p;if(c)return e==="$attrs"&&uo(o.attrs,"get",""),c(o);if((b=l.__cssModules)&&(b=b[e]))return b;if(r!==J&&Y(r,e))return a[e]=4,r[e];if(p=d.config.globalProperties,Y(p,e))return p[e]},set({_:o},e,r){const{data:t,setupState:n,ctx:i}=o;return Ur(n,e)?(n[e]=r,!0):t!==J&&Y(t,e)?(t[e]=r,!0):Y(o.props,e)||e[0]==="$"&&e.slice(1)in o?!1:(i[e]=r,!0)},has({_:{data:o,setupState:e,accessCache:r,ctx:t,appContext:n,propsOptions:i}},a){let l;return!!r[a]||o!==J&&Y(o,a)||Ur(e,a)||(l=i[0])&&Y(l,a)||Y(t,a)||Y(Ve,a)||Y(n.config.globalProperties,a)},defineProperty(o,e,r){return r.get!=null?o._.accessCache[e]=0:Y(r,"value")&&this.set(o,e,r.value,null),Reflect.defineProperty(o,e,r)}};function sv(){return xl().attrs}function xl(){const o=Lt();return o.setupContext||(o.setupContext=Xi(o))}function Zt(o){return O(o)?o.reduce((e,r)=>(e[r]=null,e),{}):o}let lt=!0;function wl(o){const e=Ri(o),r=o.proxy,t=o.ctx;lt=!1,e.beforeCreate&&Qt(e.beforeCreate,o,"bc");const{data:n,computed:i,methods:a,watch:l,provide:d,inject:u,created:c,beforeMount:b,mounted:p,beforeUpdate:h,updated:$,activated:S,deactivated:j,beforeDestroy:A,beforeUnmount:D,destroyed:N,unmounted:R,render:L,renderTracked:W,renderTriggered:Z,errorCaptured:G,serverPrefetch:E,expose:P,inheritAttrs:H,components:_,directives:U,filters:no}=e;if(u&&Cl(u,t,null),a)for(const q in a){const V=a[q];F(V)&&(t[q]=V.bind(r))}if(n){const q=n.call(r,r);eo(q)&&(o.data=Rt(q))}if(lt=!0,i)for(const q in i){const V=i[q],So=F(V)?V.bind(r,r):F(V.get)?V.get.bind(r,r):Mo,Wo=!F(V)&&F(V.set)?V.set.bind(r):Mo,_o=cd({get:So,set:Wo});Object.defineProperty(t,q,{enumerable:!0,configurable:!0,get:()=>_o.value,set:po=>_o.value=po})}if(l)for(const q in l)_i(l[q],t,r,q);if(d){const q=F(d)?d.call(r):d;Reflect.ownKeys(q).forEach(V=>{zl(V,q[V])})}c&&Qt(c,o,"c");function to(q,V){O(V)?V.forEach(So=>q(So.bind(r))):V&&q(V.bind(r))}if(to(fl,b),to(wi,p),to(bl,h),to(pl,$),to(cl,S),to(sl,j),to(vl,G),to(ml,W),to(hl,Z),to(Ci,D),to($i,R),to(gl,E),O(P))if(P.length){const q=o.exposed||(o.exposed={});P.forEach(V=>{Object.defineProperty(q,V,{get:()=>r[V],set:So=>r[V]=So})})}else o.exposed||(o.exposed={});L&&o.render===Mo&&(o.render=L),H!=null&&(o.inheritAttrs=H),_&&(o.components=_),U&&(o.directives=U),E&&yi(o)}function Cl(o,e,r=Mo){O(o)&&(o=dt(o));for(const t in o){const n=o[t];let i;eo(n)?"default"in n?i=pr(n.from||t,n.default,!0):i=pr(n.from||t):i=pr(n),bo(i)?Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[t]=i}}function Qt(o,e,r){Io(O(o)?o.map(t=>t.bind(e.proxy)):o.bind(e.proxy),e,r)}function _i(o,e,r,t){let n=t.includes(".")?ji(r,t):()=>r[t];if(ro(o)){const i=e[o];F(i)&&Xr(n,i)}else if(F(o))Xr(n,o.bind(r));else if(eo(o))if(O(o))o.forEach(i=>_i(i,e,r,t));else{const i=F(o.handler)?o.handler.bind(r):e[o.handler];F(i)&&Xr(n,i,o)}}function Ri(o){const e=o.type,{mixins:r,extends:t}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:a}}=o.appContext,l=i.get(e);let d;return l?d=l:!n.length&&!r&&!t?d=e:(d={},n.length&&n.forEach(u=>wr(d,u,a,!0)),wr(d,e,a)),eo(e)&&i.set(e,d),d}function wr(o,e,r,t=!1){const{mixins:n,extends:i}=e;i&&wr(o,i,r,!0),n&&n.forEach(a=>wr(o,a,r,!0));for(const a in e)if(!(t&&a==="expose")){const l=$l[a]||r&&r[a];o[a]=l?l(o[a],e[a]):e[a]}return o}const $l={data:on,props:en,emits:en,methods:Le,computed:Le,beforeCreate:go,created:go,beforeMount:go,mounted:go,beforeUpdate:go,updated:go,beforeDestroy:go,beforeUnmount:go,destroyed:go,unmounted:go,activated:go,deactivated:go,errorCaptured:go,serverPrefetch:go,components:Le,directives:Le,watch:Sl,provide:on,inject:Bl};function on(o,e){return e?o?function(){return so(F(o)?o.call(this,this):o,F(e)?e.call(this,this):e)}:e:o}function Bl(o,e){return Le(dt(o),dt(e))}function dt(o){if(O(o)){const e={};for(let r=0;r<o.length;r++)e[o[r]]=o[r];return e}return o}function go(o,e){return o?[...new Set([].concat(o,e))]:e}function Le(o,e){return o?so(Object.create(null),o,e):e}function en(o,e){return o?O(o)&&O(e)?[...new Set([...o,...e])]:so(Object.create(null),Zt(o),Zt(e??{})):e}function Sl(o,e){if(!o)return e;if(!e)return o;const r=so(Object.create(null),o);for(const t in e)r[t]=go(o[t],e[t]);return r}function zi(){return{app:null,config:{isNativeTag:sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _l=0;function Rl(o,e){return function(t,n=null){F(t)||(t=so({},t)),n!=null&&!eo(n)&&(n=null);const i=zi(),a=new WeakSet,l=[];let d=!1;const u=i.app={_uid:_l++,_component:t,_props:n,_container:null,_context:i,_instance:null,version:ud,get config(){return i.config},set config(c){},use(c,...b){return a.has(c)||(c&&F(c.install)?(a.add(c),c.install(u,...b)):F(c)&&(a.add(c),c(u,...b))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,b){return b?(i.components[c]=b,u):i.components[c]},directive(c,b){return b?(i.directives[c]=b,u):i.directives[c]},mount(c,b,p){if(!d){const h=u._ceVNode||vo(t,n);return h.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),o(h,c,p),d=!0,u._container=c,c.__vue_app__=u,Nr(h.component)}},onUnmount(c){l.push(c)},unmount(){d&&(Io(l,u._instance,16),o(null,u._container),delete u._container.__vue_app__)},provide(c,b){return i.provides[c]=b,u},runWithContext(c){const b=ze;ze=u;try{return c()}finally{ze=b}}};return u}}let ze=null;function zl(o,e){if(co){let r=co.provides;const t=co.parent&&co.parent.provides;t===r&&(r=co.provides=Object.create(t)),r[o]=e}}function pr(o,e,r=!1){const t=co||ao;if(t||ze){let n=ze?ze._context.provides:t?t.parent==null||t.ce?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:void 0;if(n&&o in n)return n[o];if(arguments.length>1)return r&&F(e)?e.call(t&&t.proxy):e}}const Ti={},Ei=()=>Object.create(Ti),Ai=o=>Object.getPrototypeOf(o)===Ti;function Tl(o,e,r,t=!1){const n={},i=Ei();o.propsDefaults=Object.create(null),Oi(o,e,n,i);for(const a in o.propsOptions[0])a in n||(n[a]=void 0);r?o.props=t?n:Va(n):o.type.props?o.props=n:o.props=i,o.attrs=i}function El(o,e,r,t){const{props:n,attrs:i,vnode:{patchFlag:a}}=o,l=K(n),[d]=o.propsOptions;let u=!1;if((t||a>0)&&!(a&16)){if(a&8){const c=o.vnode.dynamicProps;for(let b=0;b<c.length;b++){let p=c[b];if(Pr(o.emitsOptions,p))continue;const h=e[p];if(d)if(Y(i,p))h!==i[p]&&(i[p]=h,u=!0);else{const $=To(p);n[$]=ct(d,l,$,h,o,!1)}else h!==i[p]&&(i[p]=h,u=!0)}}}else{Oi(o,e,n,i)&&(u=!0);let c;for(const b in l)(!e||!Y(e,b)&&((c=de(b))===b||!Y(e,c)))&&(d?r&&(r[b]!==void 0||r[c]!==void 0)&&(n[b]=ct(d,l,b,void 0,o,!0)):delete n[b]);if(i!==l)for(const b in i)(!e||!Y(e,b))&&(delete i[b],u=!0)}u&&Yo(o.attrs,"set","")}function Oi(o,e,r,t){const[n,i]=o.propsOptions;let a=!1,l;if(e)for(let d in e){if(Ne(d))continue;const u=e[d];let c;n&&Y(n,c=To(d))?!i||!i.includes(c)?r[c]=u:(l||(l={}))[c]=u:Pr(o.emitsOptions,d)||(!(d in t)||u!==t[d])&&(t[d]=u,a=!0)}if(i){const d=K(r),u=l||J;for(let c=0;c<i.length;c++){const b=i[c];r[b]=ct(n,d,b,u[b],o,!Y(u,b))}}return a}function ct(o,e,r,t,n,i){const a=o[r];if(a!=null){const l=Y(a,"default");if(l&&t===void 0){const d=a.default;if(a.type!==Function&&!a.skipFactory&&F(d)){const{propsDefaults:u}=n;if(r in u)t=u[r];else{const c=rr(n);t=u[r]=d.call(null,e),c()}}else t=d;n.ce&&n.ce._setProp(r,t)}a[0]&&(i&&!l?t=!1:a[1]&&(t===""||t===de(r))&&(t=!0))}return t}const Al=new WeakMap;function Ii(o,e,r=!1){const t=r?Al:e.propsCache,n=t.get(o);if(n)return n;const i=o.props,a={},l=[];let d=!1;if(!F(o)){const c=b=>{d=!0;const[p,h]=Ii(b,e,!0);so(a,p),h&&l.push(...h)};!r&&e.mixins.length&&e.mixins.forEach(c),o.extends&&c(o.extends),o.mixins&&o.mixins.forEach(c)}if(!i&&!d)return eo(o)&&t.set(o,$e),$e;if(O(i))for(let c=0;c<i.length;c++){const b=To(i[c]);rn(b)&&(a[b]=J)}else if(i)for(const c in i){const b=To(c);if(rn(b)){const p=i[c],h=a[b]=O(p)||F(p)?{type:p}:so({},p),$=h.type;let S=!1,j=!0;if(O($))for(let A=0;A<$.length;++A){const D=$[A],N=F(D)&&D.name;if(N==="Boolean"){S=!0;break}else N==="String"&&(j=!1)}else S=F($)&&$.name==="Boolean";h[0]=S,h[1]=j,(S||Y(h,"default"))&&l.push(b)}}const u=[a,l];return eo(o)&&t.set(o,u),u}function rn(o){return o[0]!=="$"&&!Ne(o)}const It=o=>o[0]==="_"||o==="$stable",Dt=o=>O(o)?o.map(jo):[jo(o)],Ol=(o,e,r)=>{if(e._n)return e;const t=nl((...n)=>Dt(e(...n)),r);return t._c=!1,t},Di=(o,e,r)=>{const t=o._ctx;for(const n in o){if(It(n))continue;const i=o[n];if(F(i))e[n]=Ol(n,i,t);else if(i!=null){const a=Dt(i);e[n]=()=>a}}},Fi=(o,e)=>{const r=Dt(e);o.slots.default=()=>r},Pi=(o,e,r)=>{for(const t in e)(r||!It(t))&&(o[t]=e[t])},Il=(o,e,r)=>{const t=o.slots=Ei();if(o.vnode.shapeFlag&32){const n=e.__;n&&Qr(t,"__",n,!0);const i=e._;i?(Pi(t,e,r),r&&Qr(t,"_",i,!0)):Di(e,t)}else e&&Fi(o,e)},Dl=(o,e,r)=>{const{vnode:t,slots:n}=o;let i=!0,a=J;if(t.shapeFlag&32){const l=e._;l?r&&l===1?i=!1:Pi(n,e,r):(i=!e.$stable,Di(e,n)),a=e}else e&&(Fi(o,e),a={default:1});if(i)for(const l in n)!It(l)&&a[l]==null&&delete n[l]},ho=Gl;function Fl(o){return Pl(o)}function Pl(o,e){const r=Tr();r.__VUE__=!0;const{insert:t,remove:n,patchProp:i,createElement:a,createText:l,createComment:d,setText:u,setElementText:c,parentNode:b,nextSibling:p,setScopeId:h=Mo,insertStaticContent:$}=o,S=(s,f,g,k=null,m=null,v=null,C=void 0,w=null,x=!!f.dynamicChildren)=>{if(s===f)return;s&&!he(s,f)&&(k=ye(s),po(s,m,v,!0),s=null),f.patchFlag===-2&&(x=!1,f.dynamicChildren=null);const{type:y,ref:T,shapeFlag:B}=f;switch(y){case Lr:j(s,f,g,k);break;case fo:A(s,f,g,k);break;case gr:s==null&&D(f,g,k,C);break;case $o:_(s,f,g,k,m,v,C,w,x);break;default:B&1?L(s,f,g,k,m,v,C,w,x):B&6?U(s,f,g,k,m,v,C,w,x):(B&64||B&128)&&y.process(s,f,g,k,m,v,C,w,x,ce)}T!=null&&m?He(T,s&&s.ref,v,f||s,!f):T==null&&s&&s.ref!=null&&He(s.ref,null,v,s,!0)},j=(s,f,g,k)=>{if(s==null)t(f.el=l(f.children),g,k);else{const m=f.el=s.el;f.children!==s.children&&u(m,f.children)}},A=(s,f,g,k)=>{s==null?t(f.el=d(f.children||""),g,k):f.el=s.el},D=(s,f,g,k)=>{[s.el,s.anchor]=$(s.children,f,g,k,s.el,s.anchor)},N=({el:s,anchor:f},g,k)=>{let m;for(;s&&s!==f;)m=p(s),t(s,g,k),s=m;t(f,g,k)},R=({el:s,anchor:f})=>{let g;for(;s&&s!==f;)g=p(s),n(s),s=g;n(f)},L=(s,f,g,k,m,v,C,w,x)=>{f.type==="svg"?C="svg":f.type==="math"&&(C="mathml"),s==null?W(f,g,k,m,v,C,w,x):E(s,f,m,v,C,w,x)},W=(s,f,g,k,m,v,C,w)=>{let x,y;const{props:T,shapeFlag:B,transition:z,dirs:I}=s;if(x=s.el=a(s.type,v,T&&T.is,T),B&8?c(x,s.children):B&16&&G(s.children,x,null,k,m,Yr(s,v),C,w),I&&se(s,null,k,"created"),Z(x,s,s.scopeId,C,k),T){for(const Q in T)Q!=="value"&&!Ne(Q)&&i(x,Q,null,T[Q],v,k);"value"in T&&i(x,"value",null,T.value,v),(y=T.onVnodeBeforeMount)&&Lo(y,k,s)}I&&se(s,null,k,"beforeMount");const M=Ll(m,z);M&&z.beforeEnter(x),t(x,f,g),((y=T&&T.onVnodeMounted)||M||I)&&ho(()=>{y&&Lo(y,k,s),M&&z.enter(x),I&&se(s,null,k,"mounted")},m)},Z=(s,f,g,k,m)=>{if(g&&h(s,g),k)for(let v=0;v<k.length;v++)h(s,k[v]);if(m){let v=m.subTree;if(f===v||Wi(v.type)&&(v.ssContent===f||v.ssFallback===f)){const C=m.vnode;Z(s,C,C.scopeId,C.slotScopeIds,m.parent)}}},G=(s,f,g,k,m,v,C,w,x=0)=>{for(let y=x;y<s.length;y++){const T=s[y]=w?te(s[y]):jo(s[y]);S(null,T,f,g,k,m,v,C,w)}},E=(s,f,g,k,m,v,C)=>{const w=f.el=s.el;let{patchFlag:x,dynamicChildren:y,dirs:T}=f;x|=s.patchFlag&16;const B=s.props||J,z=f.props||J;let I;if(g&&ue(g,!1),(I=z.onVnodeBeforeUpdate)&&Lo(I,g,f,s),T&&se(f,s,g,"beforeUpdate"),g&&ue(g,!0),(B.innerHTML&&z.innerHTML==null||B.textContent&&z.textContent==null)&&c(w,""),y?P(s.dynamicChildren,y,w,g,k,Yr(f,m),v):C||V(s,f,w,null,g,k,Yr(f,m),v,!1),x>0){if(x&16)H(w,B,z,g,m);else if(x&2&&B.class!==z.class&&i(w,"class",null,z.class,m),x&4&&i(w,"style",B.style,z.style,m),x&8){const M=f.dynamicProps;for(let Q=0;Q<M.length;Q++){const X=M[Q],yo=B[X],xo=z[X];(xo!==yo||X==="value")&&i(w,X,yo,xo,m,g)}}x&1&&s.children!==f.children&&c(w,f.children)}else!C&&y==null&&H(w,B,z,g,m);((I=z.onVnodeUpdated)||T)&&ho(()=>{I&&Lo(I,g,f,s),T&&se(f,s,g,"updated")},k)},P=(s,f,g,k,m,v,C)=>{for(let w=0;w<f.length;w++){const x=s[w],y=f[w],T=x.el&&(x.type===$o||!he(x,y)||x.shapeFlag&198)?b(x.el):g;S(x,y,T,null,k,m,v,C,!0)}},H=(s,f,g,k,m)=>{if(f!==g){if(f!==J)for(const v in f)!Ne(v)&&!(v in g)&&i(s,v,f[v],null,m,k);for(const v in g){if(Ne(v))continue;const C=g[v],w=f[v];C!==w&&v!=="value"&&i(s,v,w,C,m,k)}"value"in g&&i(s,"value",f.value,g.value,m)}},_=(s,f,g,k,m,v,C,w,x)=>{const y=f.el=s?s.el:l(""),T=f.anchor=s?s.anchor:l("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:I}=f;I&&(w=w?w.concat(I):I),s==null?(t(y,g,k),t(T,g,k),G(f.children||[],g,T,m,v,C,w,x)):B>0&&B&64&&z&&s.dynamicChildren?(P(s.dynamicChildren,z,g,m,v,C,w),(f.key!=null||m&&f===m.subTree)&&Ft(s,f,!0)):V(s,f,g,T,m,v,C,w,x)},U=(s,f,g,k,m,v,C,w,x)=>{f.slotScopeIds=w,s==null?f.shapeFlag&512?m.ctx.activate(f,g,k,C,x):no(f,g,k,m,v,C,x):ko(s,f,x)},no=(s,f,g,k,m,v,C)=>{const w=s.component=td(s,k,m);if(Dr(s)&&(w.ctx.renderer=ce),nd(w,!1,C),w.asyncDep){if(m&&m.registerDep(w,to,C),!s.el){const x=w.subTree=vo(fo);A(null,x,f,g)}}else to(w,s,f,g,m,v,C)},ko=(s,f,g)=>{const k=f.component=s.component;if(Yl(s,f,g))if(k.asyncDep&&!k.asyncResolved){q(k,f,g);return}else k.next=f,k.update();else f.el=s.el,k.vnode=f},to=(s,f,g,k,m,v,C)=>{const w=()=>{if(s.isMounted){let{next:B,bu:z,u:I,parent:M,vnode:Q}=s;{const Fo=Li(s);if(Fo){B&&(B.el=Q.el,q(s,B,C)),Fo.asyncDep.then(()=>{s.isUnmounted||w()});return}}let X=B,yo;ue(s,!1),B?(B.el=Q.el,q(s,B,C)):B=Q,z&&jr(z),(yo=B.props&&B.props.onVnodeBeforeUpdate)&&Lo(yo,M,B,Q),ue(s,!0);const xo=nn(s),Do=s.subTree;s.subTree=xo,S(Do,xo,b(Do.el),ye(Do),s,m,v),B.el=xo.el,X===null&&Xl(s,xo.el),I&&ho(I,m),(yo=B.props&&B.props.onVnodeUpdated)&&ho(()=>Lo(yo,M,B,Q),m)}else{let B;const{el:z,props:I}=f,{bm:M,m:Q,parent:X,root:yo,type:xo}=s,Do=Re(f);ue(s,!1),M&&jr(M),!Do&&(B=I&&I.onVnodeBeforeMount)&&Lo(B,X,f),ue(s,!0);{yo.ce&&yo.ce._def.shadowRoot!==!1&&yo.ce._injectChildStyle(xo);const Fo=s.subTree=nn(s);S(null,Fo,g,k,s,m,v),f.el=Fo.el}if(Q&&ho(Q,m),!Do&&(B=I&&I.onVnodeMounted)){const Fo=f;ho(()=>Lo(B,X,Fo),m)}(f.shapeFlag&256||X&&Re(X.vnode)&&X.vnode.shapeFlag&256)&&s.a&&ho(s.a,m),s.isMounted=!0,f=g=k=null}};s.scope.on();const x=s.effect=new Vn(w);s.scope.off();const y=s.update=x.run.bind(x),T=s.job=x.runIfDirty.bind(x);T.i=s,T.id=s.uid,x.scheduler=()=>Et(T),ue(s,!0),y()},q=(s,f,g)=>{f.component=s;const k=s.vnode.props;s.vnode=f,s.next=null,El(s,f.props,k,g),Dl(s,f.children,g),Go(),Ut(s),qo()},V=(s,f,g,k,m,v,C,w,x=!1)=>{const y=s&&s.children,T=s?s.shapeFlag:0,B=f.children,{patchFlag:z,shapeFlag:I}=f;if(z>0){if(z&128){Wo(y,B,g,k,m,v,C,w,x);return}else if(z&256){So(y,B,g,k,m,v,C,w,x);return}}I&8?(T&16&&Qo(y,m,v),B!==y&&c(g,B)):T&16?I&16?Wo(y,B,g,k,m,v,C,w,x):Qo(y,m,v,!0):(T&8&&c(g,""),I&16&&G(B,g,k,m,v,C,w,x))},So=(s,f,g,k,m,v,C,w,x)=>{s=s||$e,f=f||$e;const y=s.length,T=f.length,B=Math.min(y,T);let z;for(z=0;z<B;z++){const I=f[z]=x?te(f[z]):jo(f[z]);S(s[z],I,g,null,m,v,C,w,x)}y>T?Qo(s,m,v,!0,!1,B):G(f,g,k,m,v,C,w,x,B)},Wo=(s,f,g,k,m,v,C,w,x)=>{let y=0;const T=f.length;let B=s.length-1,z=T-1;for(;y<=B&&y<=z;){const I=s[y],M=f[y]=x?te(f[y]):jo(f[y]);if(he(I,M))S(I,M,g,null,m,v,C,w,x);else break;y++}for(;y<=B&&y<=z;){const I=s[B],M=f[z]=x?te(f[z]):jo(f[z]);if(he(I,M))S(I,M,g,null,m,v,C,w,x);else break;B--,z--}if(y>B){if(y<=z){const I=z+1,M=I<T?f[I].el:k;for(;y<=z;)S(null,f[y]=x?te(f[y]):jo(f[y]),g,M,m,v,C,w,x),y++}}else if(y>z)for(;y<=B;)po(s[y],m,v,!0),y++;else{const I=y,M=y,Q=new Map;for(y=M;y<=z;y++){const Co=f[y]=x?te(f[y]):jo(f[y]);Co.key!=null&&Q.set(Co.key,y)}let X,yo=0;const xo=z-M+1;let Do=!1,Fo=0;const De=new Array(xo);for(y=0;y<xo;y++)De[y]=0;for(y=I;y<=B;y++){const Co=s[y];if(yo>=xo){po(Co,m,v,!0);continue}let Po;if(Co.key!=null)Po=Q.get(Co.key);else for(X=M;X<=z;X++)if(De[X-M]===0&&he(Co,f[X])){Po=X;break}Po===void 0?po(Co,m,v,!0):(De[Po-M]=y+1,Po>=Fo?Fo=Po:Do=!0,S(Co,f[Po],g,null,m,v,C,w,x),yo++)}const Mt=Do?Nl(De):$e;for(X=Mt.length-1,y=xo-1;y>=0;y--){const Co=M+y,Po=f[Co],Wt=Co+1<T?f[Co+1].el:k;De[y]===0?S(null,Po,g,Wt,m,v,C,w,x):Do&&(X<0||y!==Mt[X]?_o(Po,g,Wt,2):X--)}}},_o=(s,f,g,k,m=null)=>{const{el:v,type:C,transition:w,children:x,shapeFlag:y}=s;if(y&6){_o(s.component.subTree,f,g,k);return}if(y&128){s.suspense.move(f,g,k);return}if(y&64){C.move(s,f,g,ce);return}if(C===$o){t(v,f,g);for(let B=0;B<x.length;B++)_o(x[B],f,g,k);t(s.anchor,f,g);return}if(C===gr){N(s,f,g);return}if(k!==2&&y&1&&w)if(k===0)w.beforeEnter(v),t(v,f,g),ho(()=>w.enter(v),m);else{const{leave:B,delayLeave:z,afterLeave:I}=w,M=()=>{s.ctx.isUnmounted?n(v):t(v,f,g)},Q=()=>{B(v,()=>{M(),I&&I()})};z?z(v,M,Q):Q()}else t(v,f,g)},po=(s,f,g,k=!1,m=!1)=>{const{type:v,props:C,ref:w,children:x,dynamicChildren:y,shapeFlag:T,patchFlag:B,dirs:z,cacheIndex:I}=s;if(B===-2&&(m=!1),w!=null&&(Go(),He(w,null,g,s,!0),qo()),I!=null&&(f.renderCache[I]=void 0),T&256){f.ctx.deactivate(s);return}const M=T&1&&z,Q=!Re(s);let X;if(Q&&(X=C&&C.onVnodeBeforeUnmount)&&Lo(X,f,s),T&6)nr(s.component,g,k);else{if(T&128){s.suspense.unmount(g,k);return}M&&se(s,null,f,"beforeUnmount"),T&64?s.type.remove(s,f,g,ce,k):y&&!y.hasOnce&&(v!==$o||B>0&&B&64)?Qo(y,f,g,!1,!0):(v===$o&&B&384||!m&&T&16)&&Qo(x,f,g),k&&Oe(s)}(Q&&(X=C&&C.onVnodeUnmounted)||M)&&ho(()=>{X&&Lo(X,f,s),M&&se(s,null,f,"unmounted")},g)},Oe=s=>{const{type:f,el:g,anchor:k,transition:m}=s;if(f===$o){tr(g,k);return}if(f===gr){R(s);return}const v=()=>{n(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(s.shapeFlag&1&&m&&!m.persisted){const{leave:C,delayLeave:w}=m,x=()=>C(g,v);w?w(s.el,v,x):x()}else v()},tr=(s,f)=>{let g;for(;s!==f;)g=p(s),n(s),s=g;n(f)},nr=(s,f,g)=>{const{bum:k,scope:m,job:v,subTree:C,um:w,m:x,a:y,parent:T,slots:{__:B}}=s;tn(x),tn(y),k&&jr(k),T&&O(B)&&B.forEach(z=>{T.renderCache[z]=void 0}),m.stop(),v&&(v.flags|=8,po(C,s,f,g)),w&&ho(w,f),ho(()=>{s.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&s.asyncDep&&!s.asyncResolved&&s.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Qo=(s,f,g,k=!1,m=!1,v=0)=>{for(let C=v;C<s.length;C++)po(s[C],f,g,k,m)},ye=s=>{if(s.shapeFlag&6)return ye(s.component.subTree);if(s.shapeFlag&128)return s.suspense.next();const f=p(s.anchor||s.el),g=f&&f[ui];return g?p(g):f};let Ie=!1;const ir=(s,f,g)=>{s==null?f._vnode&&po(f._vnode,null,null,!0):S(f._vnode||null,s,f,null,null,null,g),f._vnode=s,Ie||(Ie=!0,Ut(),di(),Ie=!1)},ce={p:S,um:po,m:_o,r:Oe,mt:no,mc:G,pc:V,pbc:P,n:ye,o};return{render:ir,hydrate:void 0,createApp:Rl(ir)}}function Yr({type:o,props:e},r){return r==="svg"&&o==="foreignObject"||r==="mathml"&&o==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function ue({effect:o,job:e},r){r?(o.flags|=32,e.flags|=4):(o.flags&=-33,e.flags&=-5)}function Ll(o,e){return(!o||o&&!o.pendingBranch)&&e&&!e.persisted}function Ft(o,e,r=!1){const t=o.children,n=e.children;if(O(t)&&O(n))for(let i=0;i<t.length;i++){const a=t[i];let l=n[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[i]=te(n[i]),l.el=a.el),!r&&l.patchFlag!==-2&&Ft(a,l)),l.type===Lr&&(l.el=a.el),l.type===fo&&!l.el&&(l.el=a.el)}}function Nl(o){const e=o.slice(),r=[0];let t,n,i,a,l;const d=o.length;for(t=0;t<d;t++){const u=o[t];if(u!==0){if(n=r[r.length-1],o[n]<u){e[t]=n,r.push(t);continue}for(i=0,a=r.length-1;i<a;)l=i+a>>1,o[r[l]]<u?i=l+1:a=l;u<o[r[i]]&&(i>0&&(e[t]=r[i-1]),r[i]=t)}}for(i=r.length,a=r[i-1];i-- >0;)r[i]=a,a=e[a];return r}function Li(o){const e=o.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Li(e)}function tn(o){if(o)for(let e=0;e<o.length;e++)o[e].flags|=8}const jl=Symbol.for("v-scx"),Ml=()=>pr(jl);function Xr(o,e,r){return Ni(o,e,r)}function Ni(o,e,r=J){const{immediate:t,deep:n,flush:i,once:a}=r,l=so({},r),d=e&&t||!e&&i!=="post";let u;if(Qe){if(i==="sync"){const h=Ml();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!d){const h=()=>{};return h.stop=Mo,h.resume=Mo,h.pause=Mo,h}}const c=co;l.call=(h,$,S)=>Io(h,c,$,S);let b=!1;i==="post"?l.scheduler=h=>{ho(h,c&&c.suspense)}:i!=="sync"&&(b=!0,l.scheduler=(h,$)=>{$?h():Et(h)}),l.augmentJob=h=>{e&&(h.flags|=4),b&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const p=Qa(o,e,l);return Qe&&(u?u.push(p):d&&p()),p}function Wl(o,e,r){const t=this.proxy,n=ro(o)?o.includes(".")?ji(t,o):()=>t[o]:o.bind(t,t);let i;F(e)?i=e:(i=e.handler,r=e);const a=rr(this),l=Ni(n,i.bind(t),r);return a(),l}function ji(o,e){const r=e.split(".");return()=>{let t=o;for(let n=0;n<r.length&&t;n++)t=t[r[n]];return t}}const Hl=(o,e)=>e==="modelValue"||e==="model-value"?o.modelModifiers:o[`${e}Modifiers`]||o[`${To(e)}Modifiers`]||o[`${de(e)}Modifiers`];function Vl(o,e,...r){if(o.isUnmounted)return;const t=o.vnode.props||J;let n=r;const i=e.startsWith("update:"),a=i&&Hl(t,e.slice(7));a&&(a.trim&&(n=r.map(c=>ro(c)?c.trim():c)),a.number&&(n=r.map(ga)));let l,d=t[l=fr(e)]||t[l=fr(To(e))];!d&&i&&(d=t[l=fr(de(e))]),d&&Io(d,o,6,n);const u=t[l+"Once"];if(u){if(!o.emitted)o.emitted={};else if(o.emitted[l])return;o.emitted[l]=!0,Io(u,o,6,n)}}function Mi(o,e,r=!1){const t=e.emitsCache,n=t.get(o);if(n!==void 0)return n;const i=o.emits;let a={},l=!1;if(!F(o)){const d=u=>{const c=Mi(u,e,!0);c&&(l=!0,so(a,c))};!r&&e.mixins.length&&e.mixins.forEach(d),o.extends&&d(o.extends),o.mixins&&o.mixins.forEach(d)}return!i&&!l?(eo(o)&&t.set(o,null),null):(O(i)?i.forEach(d=>a[d]=null):so(a,i),eo(o)&&t.set(o,a),a)}function Pr(o,e){return!o||!Sr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(o,e[0].toLowerCase()+e.slice(1))||Y(o,de(e))||Y(o,e))}function nn(o){const{type:e,vnode:r,proxy:t,withProxy:n,propsOptions:[i],slots:a,attrs:l,emit:d,render:u,renderCache:c,props:b,data:p,setupState:h,ctx:$,inheritAttrs:S}=o,j=xr(o);let A,D;try{if(r.shapeFlag&4){const R=n||t,L=R;A=jo(u.call(L,R,c,b,h,p,$)),D=l}else{const R=e;A=jo(R.length>1?R(b,{attrs:l,slots:a,emit:d}):R(b,null)),D=e.props?l:Kl(l)}}catch(R){Ke.length=0,Ir(R,o,1),A=vo(fo)}let N=A;if(D&&S!==!1){const R=Object.keys(D),{shapeFlag:L}=N;R.length&&L&7&&(i&&R.some(yt)&&(D=Ul(D,i)),N=le(N,D,!1,!0))}return r.dirs&&(N=le(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(r.dirs):r.dirs),r.transition&&qe(N,r.transition),A=N,xr(j),A}const Kl=o=>{let e;for(const r in o)(r==="class"||r==="style"||Sr(r))&&((e||(e={}))[r]=o[r]);return e},Ul=(o,e)=>{const r={};for(const t in o)(!yt(t)||!(t.slice(9)in e))&&(r[t]=o[t]);return r};function Yl(o,e,r){const{props:t,children:n,component:i}=o,{props:a,children:l,patchFlag:d}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&d>=0){if(d&1024)return!0;if(d&16)return t?an(t,a,u):!!a;if(d&8){const c=e.dynamicProps;for(let b=0;b<c.length;b++){const p=c[b];if(a[p]!==t[p]&&!Pr(u,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:t===a?!1:t?a?an(t,a,u):!0:!!a;return!1}function an(o,e,r){const t=Object.keys(e);if(t.length!==Object.keys(o).length)return!0;for(let n=0;n<t.length;n++){const i=t[n];if(e[i]!==o[i]&&!Pr(r,i))return!0}return!1}function Xl({vnode:o,parent:e},r){for(;e;){const t=e.subTree;if(t.suspense&&t.suspense.activeBranch===o&&(t.el=o.el),t===o)(o=e.vnode).el=r,e=e.parent;else break}}const Wi=o=>o.__isSuspense;function Gl(o,e){e&&e.pendingBranch?O(o)?e.effects.push(...o):e.effects.push(o):tl(o)}const $o=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),fo=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),Ke=[];let Bo=null;function st(o=!1){Ke.push(Bo=o?null:[])}function ql(){Ke.pop(),Bo=Ke[Ke.length-1]||null}let Je=1;function ln(o,e=!1){Je+=o,o<0&&Bo&&e&&(Bo.hasOnce=!0)}function Hi(o){return o.dynamicChildren=Je>0?Bo||$e:null,ql(),Je>0&&Bo&&Bo.push(o),o}function uv(o,e,r,t,n,i){return Hi(Ki(o,e,r,t,n,i,!0))}function ut(o,e,r,t,n){return Hi(vo(o,e,r,t,n,!0))}function Ze(o){return o?o.__v_isVNode===!0:!1}function he(o,e){return o.type===e.type&&o.key===e.key}const Vi=({key:o})=>o??null,hr=({ref:o,ref_key:e,ref_for:r})=>(typeof o=="number"&&(o=""+o),o!=null?ro(o)||bo(o)||F(o)?{i:ao,r:o,k:e,f:!!r}:o:null);function Ki(o,e=null,r=null,t=0,n=null,i=o===$o?0:1,a=!1,l=!1){const d={__v_isVNode:!0,__v_skip:!0,type:o,props:e,key:e&&Vi(e),ref:e&&hr(e),scopeId:si,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:t,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:ao};return l?(Pt(d,r),i&128&&o.normalize(d)):r&&(d.shapeFlag|=ro(r)?8:16),Je>0&&!a&&Bo&&(d.patchFlag>0||i&6)&&d.patchFlag!==32&&Bo.push(d),d}const vo=Jl;function Jl(o,e=null,r=null,t=0,n=null,i=!1){if((!o||o===Bi)&&(o=fo),Ze(o)){const l=le(o,e,!0);return r&&Pt(l,r),Je>0&&!i&&Bo&&(l.shapeFlag&6?Bo[Bo.indexOf(o)]=l:Bo.push(l)),l.patchFlag=-2,l}if(dd(o)&&(o=o.__vccOpts),e){e=Zl(e);let{class:l,style:d}=e;l&&!ro(l)&&(e.class=Ar(l)),eo(d)&&(Tt(d)&&!O(d)&&(d=so({},d)),e.style=Er(d))}const a=ro(o)?1:Wi(o)?128:fi(o)?64:eo(o)?4:F(o)?2:0;return Ki(o,e,r,t,n,a,i,!0)}function Zl(o){return o?Tt(o)||Ai(o)?so({},o):o:null}function le(o,e,r=!1,t=!1){const{props:n,ref:i,patchFlag:a,children:l,transition:d}=o,u=e?od(n||{},e):n,c={__v_isVNode:!0,__v_skip:!0,type:o.type,props:u,key:u&&Vi(u),ref:e&&e.ref?r&&i?O(i)?i.concat(hr(e)):[i,hr(e)]:hr(e):i,scopeId:o.scopeId,slotScopeIds:o.slotScopeIds,children:l,target:o.target,targetStart:o.targetStart,targetAnchor:o.targetAnchor,staticCount:o.staticCount,shapeFlag:o.shapeFlag,patchFlag:e&&o.type!==$o?a===-1?16:a|16:a,dynamicProps:o.dynamicProps,dynamicChildren:o.dynamicChildren,appContext:o.appContext,dirs:o.dirs,transition:d,component:o.component,suspense:o.suspense,ssContent:o.ssContent&&le(o.ssContent),ssFallback:o.ssFallback&&le(o.ssFallback),el:o.el,anchor:o.anchor,ctx:o.ctx,ce:o.ce};return d&&t&&qe(c,d.clone(c)),c}function Ql(o=" ",e=0){return vo(Lr,null,o,e)}function fv(o,e){const r=vo(gr,null,o);return r.staticCount=e,r}function bv(o="",e=!1){return e?(st(),ut(fo,null,o)):vo(fo,null,o)}function jo(o){return o==null||typeof o=="boolean"?vo(fo):O(o)?vo($o,null,o.slice()):Ze(o)?te(o):vo(Lr,null,String(o))}function te(o){return o.el===null&&o.patchFlag!==-1||o.memo?o:le(o)}function Pt(o,e){let r=0;const{shapeFlag:t}=o;if(e==null)e=null;else if(O(e))r=16;else if(typeof e=="object")if(t&65){const n=e.default;n&&(n._c&&(n._d=!1),Pt(o,n()),n._c&&(n._d=!0));return}else{r=32;const n=e._;!n&&!Ai(e)?e._ctx=ao:n===3&&ao&&(ao.slots._===1?e._=1:(e._=2,o.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:ao},r=32):(e=String(e),t&64?(r=16,e=[Ql(e)]):r=8);o.children=e,o.shapeFlag|=r}function od(...o){const e={};for(let r=0;r<o.length;r++){const t=o[r];for(const n in t)if(n==="class")e.class!==t.class&&(e.class=Ar([e.class,t.class]));else if(n==="style")e.style=Er([e.style,t.style]);else if(Sr(n)){const i=e[n],a=t[n];a&&i!==a&&!(O(i)&&i.includes(a))&&(e[n]=i?[].concat(i,a):a)}else n!==""&&(e[n]=t[n])}return e}function Lo(o,e,r,t=null){Io(o,e,7,[r,t])}const ed=zi();let rd=0;function td(o,e,r){const t=o.type,n=(e?e.appContext:o.appContext)||ed,i={uid:rd++,vnode:o,type:t,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ii(t,n),emitsOptions:Mi(t,n),emit:null,emitted:null,propsDefaults:J,inheritAttrs:t.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vl.bind(null,i),o.ce&&o.ce(i),i}let co=null;const Lt=()=>co||ao;let Cr,ft;{const o=Tr(),e=(r,t)=>{let n;return(n=o[r])||(n=o[r]=[]),n.push(t),i=>{n.length>1?n.forEach(a=>a(i)):n[0](i)}};Cr=e("__VUE_INSTANCE_SETTERS__",r=>co=r),ft=e("__VUE_SSR_SETTERS__",r=>Qe=r)}const rr=o=>{const e=co;return Cr(o),o.scope.on(),()=>{o.scope.off(),Cr(e)}},dn=()=>{co&&co.scope.off(),Cr(null)};function Ui(o){return o.vnode.shapeFlag&4}let Qe=!1;function nd(o,e=!1,r=!1){e&&ft(e);const{props:t,children:n}=o.vnode,i=Ui(o);Tl(o,t,i,e),Il(o,n,r||e);const a=i?id(o,e):void 0;return e&&ft(!1),a}function id(o,e){const r=o.type;o.accessCache=Object.create(null),o.proxy=new Proxy(o.ctx,yl);const{setup:t}=r;if(t){Go();const n=o.setupContext=t.length>1?Xi(o):null,i=rr(o),a=er(t,o,0,[o.props,n]),l=Ln(a);if(qo(),i(),(l||o.sp)&&!Re(o)&&yi(o),l){if(a.then(dn,dn),e)return a.then(d=>{cn(o,d)}).catch(d=>{Ir(d,o,0)});o.asyncDep=a}else cn(o,a)}else Yi(o)}function cn(o,e,r){F(e)?o.type.__ssrInlineRender?o.ssrRender=e:o.render=e:eo(e)&&(o.setupState=ii(e)),Yi(o)}function Yi(o,e,r){const t=o.type;o.render||(o.render=t.render||Mo);{const n=rr(o);Go();try{wl(o)}finally{qo(),n()}}}const ad={get(o,e){return uo(o,"get",""),o[e]}};function Xi(o){const e=r=>{o.exposed=r||{}};return{attrs:new Proxy(o.attrs,ad),slots:o.slots,emit:o.emit,expose:e}}function Nr(o){return o.exposed?o.exposeProxy||(o.exposeProxy=new Proxy(ii(Ka(o.exposed)),{get(e,r){if(r in e)return e[r];if(r in Ve)return Ve[r](o)},has(e,r){return r in e||r in Ve}})):o.proxy}function ld(o,e=!0){return F(o)?o.displayName||o.name:o.name||e&&o.__name}function dd(o){return F(o)&&"__vccOpts"in o}const cd=(o,e)=>Ja(o,e,Qe);function sd(o,e,r){const t=arguments.length;return t===2?eo(e)&&!O(e)?Ze(e)?vo(o,null,[e]):vo(o,e):vo(o,null,e):(t>3?r=Array.prototype.slice.call(arguments,2):t===3&&Ze(r)&&(r=[r]),vo(o,e,r))}const ud="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;const sn=typeof window<"u"&&window.trustedTypes;if(sn)try{bt=sn.createPolicy("vue",{createHTML:o=>o})}catch{}const Gi=bt?o=>bt.createHTML(o):o=>o,fd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",Uo=typeof document<"u"?document:null,un=Uo&&Uo.createElement("template"),pd={insert:(o,e,r)=>{e.insertBefore(o,r||null)},remove:o=>{const e=o.parentNode;e&&e.removeChild(o)},createElement:(o,e,r,t)=>{const n=e==="svg"?Uo.createElementNS(fd,o):e==="mathml"?Uo.createElementNS(bd,o):r?Uo.createElement(o,{is:r}):Uo.createElement(o);return o==="select"&&t&&t.multiple!=null&&n.setAttribute("multiple",t.multiple),n},createText:o=>Uo.createTextNode(o),createComment:o=>Uo.createComment(o),setText:(o,e)=>{o.nodeValue=e},setElementText:(o,e)=>{o.textContent=e},parentNode:o=>o.parentNode,nextSibling:o=>o.nextSibling,querySelector:o=>Uo.querySelector(o),setScopeId(o,e){o.setAttribute(e,"")},insertStaticContent(o,e,r,t,n,i){const a=r?r.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),r),!(n===i||!(n=n.nextSibling)););else{un.innerHTML=Gi(t==="svg"?`<svg>${o}</svg>`:t==="mathml"?`<math>${o}</math>`:o);const l=un.content;if(t==="svg"||t==="mathml"){const d=l.firstChild;for(;d.firstChild;)l.appendChild(d.firstChild);l.removeChild(d)}e.insertBefore(l,r)}return[a?a.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},oe="transition",Pe="animation",or=Symbol("_vtc"),qi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gd=so({},gi,qi),hd=o=>(o.displayName="Transition",o.props=gd,o),pv=hd((o,{slots:e})=>sd(dl,md(o),e)),fe=(o,e=[])=>{O(o)?o.forEach(r=>r(...e)):o&&o(...e)},fn=o=>o?O(o)?o.some(e=>e.length>1):o.length>1:!1;function md(o){const e={};for(const _ in o)_ in qi||(e[_]=o[_]);if(o.css===!1)return e;const{name:r="v",type:t,duration:n,enterFromClass:i=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:l=`${r}-enter-to`,appearFromClass:d=i,appearActiveClass:u=a,appearToClass:c=l,leaveFromClass:b=`${r}-leave-from`,leaveActiveClass:p=`${r}-leave-active`,leaveToClass:h=`${r}-leave-to`}=o,$=vd(n),S=$&&$[0],j=$&&$[1],{onBeforeEnter:A,onEnter:D,onEnterCancelled:N,onLeave:R,onLeaveCancelled:L,onBeforeAppear:W=A,onAppear:Z=D,onAppearCancelled:G=N}=e,E=(_,U,no,ko)=>{_._enterCancelled=ko,be(_,U?c:l),be(_,U?u:a),no&&no()},P=(_,U)=>{_._isLeaving=!1,be(_,b),be(_,h),be(_,p),U&&U()},H=_=>(U,no)=>{const ko=_?Z:D,to=()=>E(U,_,no);fe(ko,[U,to]),bn(()=>{be(U,_?d:i),Vo(U,_?c:l),fn(ko)||pn(U,t,S,to)})};return so(e,{onBeforeEnter(_){fe(A,[_]),Vo(_,i),Vo(_,a)},onBeforeAppear(_){fe(W,[_]),Vo(_,d),Vo(_,u)},onEnter:H(!1),onAppear:H(!0),onLeave(_,U){_._isLeaving=!0;const no=()=>P(_,U);Vo(_,b),_._enterCancelled?(Vo(_,p),mn()):(mn(),Vo(_,p)),bn(()=>{_._isLeaving&&(be(_,b),Vo(_,h),fn(R)||pn(_,t,j,no))}),fe(R,[_,no])},onEnterCancelled(_){E(_,!1,void 0,!0),fe(N,[_])},onAppearCancelled(_){E(_,!0,void 0,!0),fe(G,[_])},onLeaveCancelled(_){P(_),fe(L,[_])}})}function vd(o){if(o==null)return null;if(eo(o))return[Gr(o.enter),Gr(o.leave)];{const e=Gr(o);return[e,e]}}function Gr(o){return ha(o)}function Vo(o,e){e.split(/\s+/).forEach(r=>r&&o.classList.add(r)),(o[or]||(o[or]=new Set)).add(e)}function be(o,e){e.split(/\s+/).forEach(t=>t&&o.classList.remove(t));const r=o[or];r&&(r.delete(e),r.size||(o[or]=void 0))}function bn(o){requestAnimationFrame(()=>{requestAnimationFrame(o)})}let kd=0;function pn(o,e,r,t){const n=o._endId=++kd,i=()=>{n===o._endId&&t()};if(r!=null)return setTimeout(i,r);const{type:a,timeout:l,propCount:d}=yd(o,e);if(!a)return t();const u=a+"end";let c=0;const b=()=>{o.removeEventListener(u,p),i()},p=h=>{h.target===o&&++c>=d&&b()};setTimeout(()=>{c<d&&b()},l+1),o.addEventListener(u,p)}function yd(o,e){const r=window.getComputedStyle(o),t=$=>(r[$]||"").split(", "),n=t(`${oe}Delay`),i=t(`${oe}Duration`),a=gn(n,i),l=t(`${Pe}Delay`),d=t(`${Pe}Duration`),u=gn(l,d);let c=null,b=0,p=0;e===oe?a>0&&(c=oe,b=a,p=i.length):e===Pe?u>0&&(c=Pe,b=u,p=d.length):(b=Math.max(a,u),c=b>0?a>u?oe:Pe:null,p=c?c===oe?i.length:d.length:0);const h=c===oe&&/\b(transform|all)(,|$)/.test(t(`${oe}Property`).toString());return{type:c,timeout:b,propCount:p,hasTransform:h}}function gn(o,e){for(;o.length<e.length;)o=o.concat(o);return Math.max(...e.map((r,t)=>hn(r)+hn(o[t])))}function hn(o){return o==="auto"?0:Number(o.slice(0,-1).replace(",","."))*1e3}function mn(){return document.body.offsetHeight}function xd(o,e,r){const t=o[or];t&&(e=(e?[e,...t]:[...t]).join(" ")),e==null?o.removeAttribute("class"):r?o.setAttribute("class",e):o.className=e}const vn=Symbol("_vod"),wd=Symbol("_vsh"),Cd=Symbol(""),$d=/(^|;)\s*display\s*:/;function Bd(o,e,r){const t=o.style,n=ro(r);let i=!1;if(r&&!n){if(e)if(ro(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();r[l]==null&&mr(t,l,"")}else for(const a in e)r[a]==null&&mr(t,a,"");for(const a in r)a==="display"&&(i=!0),mr(t,a,r[a])}else if(n){if(e!==r){const a=t[Cd];a&&(r+=";"+a),t.cssText=r,i=$d.test(r)}}else e&&o.removeAttribute("style");vn in o&&(o[vn]=i?t.display:"",o[wd]&&(t.display="none"))}const kn=/\s*!important$/;function mr(o,e,r){if(O(r))r.forEach(t=>mr(o,e,t));else if(r==null&&(r=""),e.startsWith("--"))o.setProperty(e,r);else{const t=Sd(o,e);kn.test(r)?o.setProperty(de(t),r.replace(kn,""),"important"):o[t]=r}}const yn=["Webkit","Moz","ms"],qr={};function Sd(o,e){const r=qr[e];if(r)return r;let t=To(e);if(t!=="filter"&&t in o)return qr[e]=t;t=zr(t);for(let n=0;n<yn.length;n++){const i=yn[n]+t;if(i in o)return qr[e]=i}return e}const xn="http://www.w3.org/1999/xlink";function wn(o,e,r,t,n,i=wa(e)){t&&e.startsWith("xlink:")?r==null?o.removeAttributeNS(xn,e.slice(6,e.length)):o.setAttributeNS(xn,e,r):r==null||i&&!Mn(r)?o.removeAttribute(e):o.setAttribute(e,i?"":Jo(r)?String(r):r)}function Cn(o,e,r,t,n){if(e==="innerHTML"||e==="textContent"){r!=null&&(o[e]=e==="innerHTML"?Gi(r):r);return}const i=o.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?o.getAttribute("value")||"":o.value,d=r==null?o.type==="checkbox"?"on":"":String(r);(l!==d||!("_value"in o))&&(o.value=d),r==null&&o.removeAttribute(e),o._value=r;return}let a=!1;if(r===""||r==null){const l=typeof o[e];l==="boolean"?r=Mn(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{o[e]=r}catch{}a&&o.removeAttribute(n||e)}function _d(o,e,r,t){o.addEventListener(e,r,t)}function Rd(o,e,r,t){o.removeEventListener(e,r,t)}const $n=Symbol("_vei");function zd(o,e,r,t,n=null){const i=o[$n]||(o[$n]={}),a=i[e];if(t&&a)a.value=t;else{const[l,d]=Td(e);if(t){const u=i[e]=Od(t,n);_d(o,l,u,d)}else a&&(Rd(o,l,a,d),i[e]=void 0)}}const Bn=/(?:Once|Passive|Capture)$/;function Td(o){let e;if(Bn.test(o)){e={};let t;for(;t=o.match(Bn);)o=o.slice(0,o.length-t[0].length),e[t[0].toLowerCase()]=!0}return[o[2]===":"?o.slice(3):de(o.slice(2)),e]}let Jr=0;const Ed=Promise.resolve(),Ad=()=>Jr||(Ed.then(()=>Jr=0),Jr=Date.now());function Od(o,e){const r=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=r.attached)return;Io(Id(t,r.value),e,5,[t])};return r.value=o,r.attached=Ad(),r}function Id(o,e){if(O(e)){const r=o.stopImmediatePropagation;return o.stopImmediatePropagation=()=>{r.call(o),o._stopped=!0},e.map(t=>n=>!n._stopped&&t&&t(n))}else return e}const Sn=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&o.charCodeAt(2)>96&&o.charCodeAt(2)<123,Dd=(o,e,r,t,n,i)=>{const a=n==="svg";e==="class"?xd(o,t,a):e==="style"?Bd(o,r,t):Sr(e)?yt(e)||zd(o,e,r,t,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fd(o,e,t,a))?(Cn(o,e,t),!o.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wn(o,e,t,a,i,e!=="value")):o._isVueCE&&(/[A-Z]/.test(e)||!ro(t))?Cn(o,To(e),t,i,e):(e==="true-value"?o._trueValue=t:e==="false-value"&&(o._falseValue=t),wn(o,e,t,a))};function Fd(o,e,r,t){if(t)return!!(e==="innerHTML"||e==="textContent"||e in o&&Sn(e)&&F(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&o.tagName==="INPUT"||e==="type"&&o.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=o.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Sn(e)&&ro(r)?!1:e in o}const Pd=["ctrl","shift","alt","meta"],Ld={stop:o=>o.stopPropagation(),prevent:o=>o.preventDefault(),self:o=>o.target!==o.currentTarget,ctrl:o=>!o.ctrlKey,shift:o=>!o.shiftKey,alt:o=>!o.altKey,meta:o=>!o.metaKey,left:o=>"button"in o&&o.button!==0,middle:o=>"button"in o&&o.button!==1,right:o=>"button"in o&&o.button!==2,exact:(o,e)=>Pd.some(r=>o[`${r}Key`]&&!e.includes(r))},gv=(o,e)=>{const r=o._withMods||(o._withMods={}),t=e.join(".");return r[t]||(r[t]=(n,...i)=>{for(let a=0;a<e.length;a++){const l=Ld[e[a]];if(l&&l(n,e))return}return o(n,...i)})},Nd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hv=(o,e)=>{const r=o._withKeys||(o._withKeys={}),t=e.join(".");return r[t]||(r[t]=n=>{if(!("key"in n))return;const i=de(n.key);if(e.some(a=>a===i||Nd[a]===i))return o(n)})},jd=so({patchProp:Dd},pd);let _n;function Md(){return _n||(_n=Fl(jd))}const mv=(...o)=>{const e=Md().createApp(...o),{mount:r}=e;return e.mount=t=>{const n=Hd(t);if(!n)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const a=r(n,!1,Wd(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},e};function Wd(o){if(o instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&o instanceof MathMLElement)return"mathml"}function Hd(o){return ro(o)?document.querySelector(o):o}function Vd(...o){if(o){let e=[];for(let r=0;r<o.length;r++){let t=o[r];if(!t)continue;let n=typeof t;if(n==="string"||n==="number")e.push(t);else if(n==="object"){let i=Array.isArray(t)?[Vd(...t)]:Object.entries(t).map(([a,l])=>l?a:void 0);e=i.length?e.concat(i.filter(a=>!!a)):e}}return e.join(" ").trim()}}function Kd(o,e){return o?o.classList?o.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(o.className):!1}function vv(o,e){if(o&&e){let r=t=>{Kd(o,t)||(o.classList?o.classList.add(t):o.className+=" "+t)};[e].flat().filter(Boolean).forEach(t=>t.split(" ").forEach(r))}}function Ud(o){if(o){let e=document.createElement("a");if(e.download!==void 0){let{name:r,src:t}=o;return e.setAttribute("href",t),e.setAttribute("download",r),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),!0}}return!1}function kv(o,e){let r=new Blob([o],{type:"application/csv;charset=utf-8;"});window.navigator.msSaveOrOpenBlob?navigator.msSaveOrOpenBlob(r,e+".csv"):Ud({name:e+".csv",src:URL.createObjectURL(r)})||(o="data:text/csv;charset=utf-8,"+o,window.open(encodeURI(o)))}function yv(o,e){if(o&&e){let r=t=>{o.classList?o.classList.remove(t):o.className=o.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(t=>t.split(" ").forEach(r))}}function pt(o){for(let e of document?.styleSheets)try{for(let r of e?.cssRules)for(let t of r?.style)if(o.test(t))return{name:t,value:r.style.getPropertyValue(t).trim()}}catch{}return null}function Ji(o){let e={width:0,height:0};if(o){let[r,t]=[o.style.visibility,o.style.display];o.style.visibility="hidden",o.style.display="block",e.width=o.offsetWidth,e.height=o.offsetHeight,o.style.display=t,o.style.visibility=r}return e}function Zi(){let o=window,e=document,r=e.documentElement,t=e.getElementsByTagName("body")[0],n=o.innerWidth||r.clientWidth||t.clientWidth,i=o.innerHeight||r.clientHeight||t.clientHeight;return{width:n,height:i}}function gt(o){return o?Math.abs(o.scrollLeft):0}function Yd(){let o=document.documentElement;return(window.pageXOffset||gt(o))-(o.clientLeft||0)}function Xd(){let o=document.documentElement;return(window.pageYOffset||o.scrollTop)-(o.clientTop||0)}function Gd(o){return o?getComputedStyle(o).direction==="rtl":!1}function xv(o,e,r=!0){var t,n,i,a;if(o){let l=o.offsetParent?{width:o.offsetWidth,height:o.offsetHeight}:Ji(o),d=l.height,u=l.width,c=e.offsetHeight,b=e.offsetWidth,p=e.getBoundingClientRect(),h=Xd(),$=Yd(),S=Zi(),j,A,D="top";p.top+c+d>S.height?(j=p.top+h-d,D="bottom",j<0&&(j=h)):j=c+p.top+h,p.left+u>S.width?A=Math.max(0,p.left+$+b-u):A=p.left+$,Gd(o)?o.style.insetInlineEnd=A+"px":o.style.insetInlineStart=A+"px",o.style.top=j+"px",o.style.transformOrigin=D,r&&(o.style.marginTop=D==="bottom"?`calc(${(n=(t=pt(/-anchor-gutter$/))==null?void 0:t.value)!=null?n:"2px"} * -1)`:(a=(i=pt(/-anchor-gutter$/))==null?void 0:i.value)!=null?a:"")}}function wv(o,e){o&&(typeof e=="string"?o.style.cssText=e:Object.entries(e||{}).forEach(([r,t])=>o.style[r]=t))}function Cv(o,e){return o instanceof HTMLElement?o.offsetWidth:0}function $v(o,e,r=!0,t=void 0){var n;if(o){let i=o.offsetParent?{width:o.offsetWidth,height:o.offsetHeight}:Ji(o),a=e.offsetHeight,l=e.getBoundingClientRect(),d=Zi(),u,c,b=t??"top";if(!t&&l.top+a+i.height>d.height?(u=-1*i.height,b="bottom",l.top+u<0&&(u=-1*l.top)):u=a,i.width>d.width?c=l.left*-1:l.left+i.width>d.width?c=(l.left+i.width-d.width)*-1:c=0,o.style.top=u+"px",o.style.insetInlineStart=c+"px",o.style.transformOrigin=b,r){let p=(n=pt(/-anchor-gutter$/))==null?void 0:n.value;o.style.marginTop=b==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Nt(o){if(o){let e=o.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function Bv(o){return!!(o!==null&&typeof o<"u"&&o.nodeName&&Nt(o))}function Ae(o){return typeof Element<"u"?o instanceof Element:o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.nodeName=="string"}function Sv(){if(window.getSelection){let o=window.getSelection()||{};o.empty?o.empty():o.removeAllRanges&&o.rangeCount>0&&o.getRangeAt(0).getClientRects().length>0&&o.removeAllRanges()}}function Qi(o,e={}){if(Ae(o)){let r=(t,n)=>{var i,a;let l=(i=o?.$attrs)!=null&&i[t]?[(a=o?.$attrs)==null?void 0:a[t]]:[];return[n].flat().reduce((d,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")d.push(u);else if(c==="object"){let b=Array.isArray(u)?r(t,u):Object.entries(u).map(([p,h])=>t==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);d=b.length?d.concat(b.filter(p=>!!p)):d}}return d},l)};Object.entries(e).forEach(([t,n])=>{if(n!=null){let i=t.match(/^on(.+)/);i?o.addEventListener(i[1].toLowerCase(),n):t==="p-bind"||t==="pBind"?Qi(o,n):(n=t==="class"?[...new Set(r("class",n))].join(" ").trim():t==="style"?r("style",n).join(";").trim():n,(o.$attrs=o.$attrs||{})&&(o.$attrs[t]=n),o.setAttribute(t,n))}})}}function _v(o,e={},...r){{let t=document.createElement(o);return Qi(t,e),t.append(...r),t}}function qd(o,e){return Ae(o)?Array.from(o.querySelectorAll(e)):[]}function Jd(o,e){return Ae(o)?o.matches(e)?o:o.querySelector(e):null}function Rv(o,e){o&&document.activeElement!==o&&o.focus(e)}function zv(o,e){if(Ae(o)){let r=o.getAttribute(e);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}function oa(o,e=""){let r=qd(o,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),t=[];for(let n of r)getComputedStyle(n).display!="none"&&getComputedStyle(n).visibility!="hidden"&&t.push(n);return t}function Tv(o,e){let r=oa(o,e);return r.length>0?r[0]:null}function Ev(o){if(o){let e=o.offsetHeight,r=getComputedStyle(o);return e-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),e}return 0}function Av(o){if(o){let[e,r]=[o.style.visibility,o.style.display];o.style.visibility="hidden",o.style.display="block";let t=o.offsetHeight;return o.style.display=r,o.style.visibility=e,t}return 0}function Ov(o){if(o){let[e,r]=[o.style.visibility,o.style.display];o.style.visibility="hidden",o.style.display="block";let t=o.offsetWidth;return o.style.display=r,o.style.visibility=e,t}return 0}function Iv(o){var e;if(o){let r=(e=Nt(o))==null?void 0:e.childNodes,t=0;if(r)for(let n=0;n<r.length;n++){if(r[n]===o)return t;r[n].nodeType===1&&t++}}return-1}function Dv(o,e){let r=oa(o,e);return r.length>0?r[r.length-1]:null}function Fv(o,e){let r=o.nextElementSibling;for(;r;){if(r.matches(e))return r;r=r.nextElementSibling}return null}function Pv(o){if(o){let e=o.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||gt(document.documentElement)||gt(document.body)||0)}}return{top:"auto",left:"auto"}}function Lv(o,e){return o?o.offsetHeight:0}function ea(o,e=[]){let r=Nt(o);return r===null?e:ea(r,e.concat([r]))}function Nv(o,e){let r=o.previousElementSibling;for(;r;){if(r.matches(e))return r;r=r.previousElementSibling}return null}function jv(o){let e=[];if(o){let r=ea(o),t=/(auto|scroll)/,n=i=>{try{let a=window.getComputedStyle(i,null);return t.test(a.getPropertyValue("overflow"))||t.test(a.getPropertyValue("overflowX"))||t.test(a.getPropertyValue("overflowY"))}catch{return!1}};for(let i of r){let a=i.nodeType===1&&i.dataset.scrollselectors;if(a){let l=a.split(",");for(let d of l){let u=Jd(i,d);u&&n(u)&&e.push(u)}}i.nodeType!==9&&n(i)&&e.push(i)}}return e}function Mv(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Wv(o){if(o){let e=o.offsetWidth,r=getComputedStyle(o);return e-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),e}return 0}function Hv(o,e,r){let t=o[e];typeof t=="function"&&t.apply(o,[])}function Vv(){return/(android)/i.test(navigator.userAgent)}function Kv(o){if(o){let e=o.nodeName,r=o.parentElement&&o.parentElement.nodeName;return e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!o.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1}function Uv(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Yv(o,e=""){return Ae(o)?o.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function Xv(o){return!!(o&&o.offsetParent!=null)}function Gv(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function qv(o,e="",r){Ae(o)&&r!==null&&r!==void 0&&o.setAttribute(e,r)}function Zd(){let o=new Map;return{on(e,r){let t=o.get(e);return t?t.push(r):t=[r],o.set(e,t),this},off(e,r){let t=o.get(e);return t&&t.splice(t.indexOf(r)>>>0,1),this},emit(e,r){let t=o.get(e);t&&t.forEach(n=>{n(r)})},clear(){o.clear()}}}var Qd=Object.defineProperty,Rn=Object.getOwnPropertySymbols,oc=Object.prototype.hasOwnProperty,ec=Object.prototype.propertyIsEnumerable,zn=(o,e,r)=>e in o?Qd(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,rc=(o,e)=>{for(var r in e||(e={}))oc.call(e,r)&&zn(o,r,e[r]);if(Rn)for(var r of Rn(e))ec.call(e,r)&&zn(o,r,e[r]);return o};function Ee(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!(o instanceof Date)&&typeof o=="object"&&Object.keys(o).length===0}function tc(o,e,r,t=1){let n=-1,i=Ee(o),a=Ee(e);return i&&a?n=0:i?n=t:a?n=-t:typeof o=="string"&&typeof e=="string"?n=r(o,e):n=o<e?-1:o>e?1:0,n}function ht(o,e,r=new WeakSet){if(o===e)return!0;if(!o||!e||typeof o!="object"||typeof e!="object"||r.has(o)||r.has(e))return!1;r.add(o).add(e);let t=Array.isArray(o),n=Array.isArray(e),i,a,l;if(t&&n){if(a=o.length,a!=e.length)return!1;for(i=a;i--!==0;)if(!ht(o[i],e[i],r))return!1;return!0}if(t!=n)return!1;let d=o instanceof Date,u=e instanceof Date;if(d!=u)return!1;if(d&&u)return o.getTime()==e.getTime();let c=o instanceof RegExp,b=e instanceof RegExp;if(c!=b)return!1;if(c&&b)return o.toString()==e.toString();let p=Object.keys(o);if(a=p.length,a!==Object.keys(e).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[i]))return!1;for(i=a;i--!==0;)if(l=p[i],!ht(o[l],e[l],r))return!1;return!0}function nc(o,e){return ht(o,e)}function ra(o){return typeof o=="function"&&"call"in o&&"apply"in o}function io(o){return!Ee(o)}function Tn(o,e){if(!o||!e)return null;try{let r=o[e];if(io(r))return r}catch{}if(Object.keys(o).length){if(ra(e))return e(o);if(e.indexOf(".")===-1)return o[e];{let r=e.split("."),t=o;for(let n=0,i=r.length;n<i;++n){if(t==null)return null;t=t[r[n]]}return t}}return null}function ic(o,e,r){return r?Tn(o,r)===Tn(e,r):nc(o,e)}function Jv(o,e){if(o!=null&&e&&e.length){for(let r of e)if(ic(o,r))return!0}return!1}function ve(o,e=!0){return o instanceof Object&&o.constructor===Object&&(e||Object.keys(o).length!==0)}function ta(o={},e={}){let r=rc({},o);return Object.keys(e).forEach(t=>{let n=t;ve(e[n])&&n in o&&ve(o[n])?r[n]=ta(o[n],e[n]):r[n]=e[n]}),r}function ac(...o){return o.reduce((e,r,t)=>t===0?r:ta(e,r),{})}function Zv(o,e){let r=-1;if(e){for(let t=0;t<e.length;t++)if(e[t]===o){r=t;break}}return r}function Qv(o,e){let r=-1;if(io(o))try{r=o.findLastIndex(e)}catch{r=o.lastIndexOf([...o].reverse().find(e))}return r}function ne(o,...e){return ra(o)?o(...e):o}function ke(o,e=!0){return typeof o=="string"&&(e||o!=="")}function En(o){return ke(o)?o.replace(/(-|_)/g,"").toLowerCase():o}function lc(o,e="",r={}){let t=En(e).split("."),n=t.shift();if(n){if(ve(o)){let i=Object.keys(o).find(a=>En(a)===n)||"";return lc(ne(o[i],r),t.join("."),r)}return}return ne(o,r)}function ok(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}function dc(o){return io(o)&&!isNaN(o)}function ek(o=""){return io(o)&&o.length===1&&!!o.match(/\S| /)}function rk(){return new Intl.Collator(void 0,{numeric:!0}).compare}function Te(o,e){if(e){let r=e.test(o);return e.lastIndex=0,r}return!1}function tk(...o){return ac(...o)}function An(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function nk(o){if(o&&/[\xC0-\xFF\u0100-\u017E]/.test(o)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let r in e)o=o.replace(e[r],r)}return o}function ik(o,e,r){o&&e!==r&&(r>=o.length&&(r%=o.length,e%=o.length),o.splice(r,0,o.splice(e,1)[0]))}function ak(o,e,r=1,t,n=1){let i=tc(o,e,t,r),a=r;return(Ee(o)||Ee(e))&&(a=n===1?r:n),a*i}function lk(o){return ke(o,!1)?o[0].toUpperCase()+o.slice(1):o}function na(o){return ke(o)?o.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,r)=>r===0?e:"-"+e.toLowerCase()).toLowerCase():o}var ur={};function dk(o="pui_id_"){return Object.hasOwn(ur,o)||(ur[o]=0),ur[o]++,`${o}${ur[o]}`}function cc(){let o=[],e=(a,l,d=999)=>{let u=n(a,l,d),c=u.value+(u.key===a?0:d)+1;return o.push({key:a,value:c}),c},r=a=>{o=o.filter(l=>l.value!==a)},t=(a,l)=>n(a).value,n=(a,l,d=0)=>[...o].reverse().find(u=>!0)||{key:a,value:d},i=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:i,set:(a,l,d)=>{l&&(l.style.zIndex=String(e(a,!0,d)))},clear:a=>{a&&(r(i(a)),a.style.zIndex="")},getCurrent:a=>t(a)}}var ck=cc(),sc=Object.defineProperty,uc=Object.defineProperties,fc=Object.getOwnPropertyDescriptors,$r=Object.getOwnPropertySymbols,ia=Object.prototype.hasOwnProperty,aa=Object.prototype.propertyIsEnumerable,On=(o,e,r)=>e in o?sc(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,Ao=(o,e)=>{for(var r in e||(e={}))ia.call(e,r)&&On(o,r,e[r]);if($r)for(var r of $r(e))aa.call(e,r)&&On(o,r,e[r]);return o},Zr=(o,e)=>uc(o,fc(e)),Ko=(o,e)=>{var r={};for(var t in o)ia.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&$r)for(var t of $r(o))e.indexOf(t)<0&&aa.call(o,t)&&(r[t]=o[t]);return r},bc=Zd(),pe=bc,mt=/{([^}]*)}/g,pc=/(\d+\s+[\+\-\*\/]\s+\d+)/g,gc=/var\([^)]+\)/g;function hc(o){return ve(o)&&o.hasOwnProperty("$value")&&o.hasOwnProperty("$type")?o.$value:o}function mc(o){return o.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function vt(o="",e=""){return mc(`${ke(o,!1)&&ke(e,!1)?`${o}-`:o}${e}`)}function la(o="",e=""){return`--${vt(o,e)}`}function vc(o=""){let e=(o.match(/{/g)||[]).length,r=(o.match(/}/g)||[]).length;return(e+r)%2!==0}function da(o,e="",r="",t=[],n){if(ke(o)){let i=o.trim();if(vc(i))return;if(Te(i,mt)){let a=i.replaceAll(mt,l=>{let d=l.replace(/{|}/g,"").split(".").filter(u=>!t.some(c=>Te(u,c)));return`var(${la(r,na(d.join("-")))}${io(n)?`, ${n}`:""})`});return Te(a.replace(gc,"0"),pc)?`calc(${a})`:a}return i}else if(dc(o))return o}function kc(o,e,r){ke(e,!1)&&o.push(`${e}:${r};`)}function Ce(o,e){return o?`${o}{${e}}`:""}function ca(o,e){if(o.indexOf("dt(")===-1)return o;function r(a,l){let d=[],u=0,c="",b=null,p=0;for(;u<=a.length;){let h=a[u];if((h==='"'||h==="'"||h==="`")&&a[u-1]!=="\\"&&(b=b===h?null:h),!b&&(h==="("&&p++,h===")"&&p--,(h===","||u===a.length)&&p===0)){let $=c.trim();$.startsWith("dt(")?d.push(ca($,l)):d.push(t($)),c="",u++;continue}h!==void 0&&(c+=h),u++}return d}function t(a){let l=a[0];if((l==='"'||l==="'"||l==="`")&&a[a.length-1]===l)return a.slice(1,-1);let d=Number(a);return isNaN(d)?a:d}let n=[],i=[];for(let a=0;a<o.length;a++)if(o[a]==="d"&&o.slice(a,a+3)==="dt(")i.push(a),a+=2;else if(o[a]===")"&&i.length>0){let l=i.pop();i.length===0&&n.push([l,a])}if(!n.length)return o;for(let a=n.length-1;a>=0;a--){let[l,d]=n[a],u=o.slice(l+3,d),c=r(u,e),b=e(...c);o=o.slice(0,l)+b+o.slice(d+1)}return o}var Ue=(...o)=>yc(Br.getTheme(),...o),yc=(o={},e,r,t)=>{if(e){let{variable:n,options:i}=Br.defaults||{},{prefix:a,transform:l}=o?.options||i||{},d=Te(e,mt)?e:`{${e}}`;return t==="value"||Ee(t)&&l==="strict"?Br.getTokenValue(e):da(d,void 0,a,[n.excludedKeyRegex],r)}return""};function sk(o,...e){if(o instanceof Array){let r=o.reduce((t,n,i)=>{var a;return t+n+((a=ne(e[i],{dt:Ue}))!=null?a:"")},"");return ca(r,Ue)}return ne(o,{dt:Ue})}function xc(o,e={}){let r=Br.defaults.variable,{prefix:t=r.prefix,selector:n=r.selector,excludedKeyRegex:i=r.excludedKeyRegex}=e,a=[],l=[],d=[{node:o,path:t}];for(;d.length;){let{node:c,path:b}=d.pop();for(let p in c){let h=c[p],$=hc(h),S=Te(p,i)?vt(b):vt(b,na(p));if(ve($))d.push({node:$,path:S});else{let j=la(S),A=da($,S,t,[i]);kc(l,j,A);let D=S;t&&D.startsWith(t+"-")&&(D=D.slice(t.length+1)),a.push(D.replace(/-/g,"."))}}}let u=l.join("");return{value:l,tokens:a,declarations:u,css:Ce(n,u)}}var Eo={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(o){return{type:"class",selector:o,matched:this.pattern.test(o.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(o){return{type:"attr",selector:`:root${o}`,matched:this.pattern.test(o.trim())}}},media:{pattern:/^@media (.*)$/,resolve(o){return{type:"media",selector:o,matched:this.pattern.test(o.trim())}}},system:{pattern:/^system$/,resolve(o){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(o.trim())}}},custom:{resolve(o){return{type:"custom",selector:o,matched:!0}}}},resolve(o){let e=Object.keys(this.rules).filter(r=>r!=="custom").map(r=>this.rules[r]);return[o].flat().map(r=>{var t;return(t=e.map(n=>n.resolve(r)).find(n=>n.matched))!=null?t:this.rules.custom.resolve(r)})}},_toVariables(o,e){return xc(o,{prefix:e?.prefix})},getCommon({name:o="",theme:e={},params:r,set:t,defaults:n}){var i,a,l,d,u,c,b;let{preset:p,options:h}=e,$,S,j,A,D,N,R;if(io(p)&&h.transform!=="strict"){let{primitive:L,semantic:W,extend:Z}=p,G=W||{},{colorScheme:E}=G,P=Ko(G,["colorScheme"]),H=Z||{},{colorScheme:_}=H,U=Ko(H,["colorScheme"]),no=E||{},{dark:ko}=no,to=Ko(no,["dark"]),q=_||{},{dark:V}=q,So=Ko(q,["dark"]),Wo=io(L)?this._toVariables({primitive:L},h):{},_o=io(P)?this._toVariables({semantic:P},h):{},po=io(to)?this._toVariables({light:to},h):{},Oe=io(ko)?this._toVariables({dark:ko},h):{},tr=io(U)?this._toVariables({semantic:U},h):{},nr=io(So)?this._toVariables({light:So},h):{},Qo=io(V)?this._toVariables({dark:V},h):{},[ye,Ie]=[(i=Wo.declarations)!=null?i:"",Wo.tokens],[ir,ce]=[(a=_o.declarations)!=null?a:"",_o.tokens||[]],[jt,s]=[(l=po.declarations)!=null?l:"",po.tokens||[]],[f,g]=[(d=Oe.declarations)!=null?d:"",Oe.tokens||[]],[k,m]=[(u=tr.declarations)!=null?u:"",tr.tokens||[]],[v,C]=[(c=nr.declarations)!=null?c:"",nr.tokens||[]],[w,x]=[(b=Qo.declarations)!=null?b:"",Qo.tokens||[]];$=this.transformCSS(o,ye,"light","variable",h,t,n),S=Ie;let y=this.transformCSS(o,`${ir}${jt}`,"light","variable",h,t,n),T=this.transformCSS(o,`${f}`,"dark","variable",h,t,n);j=`${y}${T}`,A=[...new Set([...ce,...s,...g])];let B=this.transformCSS(o,`${k}${v}color-scheme:light`,"light","variable",h,t,n),z=this.transformCSS(o,`${w}color-scheme:dark`,"dark","variable",h,t,n);D=`${B}${z}`,N=[...new Set([...m,...C,...x])],R=ne(p.css,{dt:Ue})}return{primitive:{css:$,tokens:S},semantic:{css:j,tokens:A},global:{css:D,tokens:N},style:R}},getPreset({name:o="",preset:e={},options:r,params:t,set:n,defaults:i,selector:a}){var l,d,u;let c,b,p;if(io(e)&&r.transform!=="strict"){let h=o.replace("-directive",""),$=e,{colorScheme:S,extend:j,css:A}=$,D=Ko($,["colorScheme","extend","css"]),N=j||{},{colorScheme:R}=N,L=Ko(N,["colorScheme"]),W=S||{},{dark:Z}=W,G=Ko(W,["dark"]),E=R||{},{dark:P}=E,H=Ko(E,["dark"]),_=io(D)?this._toVariables({[h]:Ao(Ao({},D),L)},r):{},U=io(G)?this._toVariables({[h]:Ao(Ao({},G),H)},r):{},no=io(Z)?this._toVariables({[h]:Ao(Ao({},Z),P)},r):{},[ko,to]=[(l=_.declarations)!=null?l:"",_.tokens||[]],[q,V]=[(d=U.declarations)!=null?d:"",U.tokens||[]],[So,Wo]=[(u=no.declarations)!=null?u:"",no.tokens||[]],_o=this.transformCSS(h,`${ko}${q}`,"light","variable",r,n,i,a),po=this.transformCSS(h,So,"dark","variable",r,n,i,a);c=`${_o}${po}`,b=[...new Set([...to,...V,...Wo])],p=ne(A,{dt:Ue})}return{css:c,tokens:b,style:p}},getPresetC({name:o="",theme:e={},params:r,set:t,defaults:n}){var i;let{preset:a,options:l}=e,d=(i=a?.components)==null?void 0:i[o];return this.getPreset({name:o,preset:d,options:l,params:r,set:t,defaults:n})},getPresetD({name:o="",theme:e={},params:r,set:t,defaults:n}){var i,a;let l=o.replace("-directive",""),{preset:d,options:u}=e,c=((i=d?.components)==null?void 0:i[l])||((a=d?.directives)==null?void 0:a[l]);return this.getPreset({name:l,preset:c,options:u,params:r,set:t,defaults:n})},applyDarkColorScheme(o){return!(o.darkModeSelector==="none"||o.darkModeSelector===!1)},getColorSchemeOption(o,e){var r;return this.applyDarkColorScheme(o)?this.regex.resolve(o.darkModeSelector===!0?e.options.darkModeSelector:(r=o.darkModeSelector)!=null?r:e.options.darkModeSelector):[]},getLayerOrder(o,e={},r,t){let{cssLayer:n}=e;return n?`@layer ${ne(n.order||n.name||"primeui",r)}`:""},getCommonStyleSheet({name:o="",theme:e={},params:r,props:t={},set:n,defaults:i}){let a=this.getCommon({name:o,theme:e,params:r,set:n,defaults:i}),l=Object.entries(t).reduce((d,[u,c])=>d.push(`${u}="${c}"`)&&d,[]).join(" ");return Object.entries(a||{}).reduce((d,[u,c])=>{if(ve(c)&&Object.hasOwn(c,"css")){let b=An(c.css),p=`${u}-variables`;d.push(`<style type="text/css" data-primevue-style-id="${p}" ${l}>${b}</style>`)}return d},[]).join("")},getStyleSheet({name:o="",theme:e={},params:r,props:t={},set:n,defaults:i}){var a;let l={name:o,theme:e,params:r,set:n,defaults:i},d=(a=o.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:a.css,u=Object.entries(t).reduce((c,[b,p])=>c.push(`${b}="${p}"`)&&c,[]).join(" ");return d?`<style type="text/css" data-primevue-style-id="${o}-variables" ${u}>${An(d)}</style>`:""},createTokens(o={},e,r="",t="",n={}){return{}},getTokenValue(o,e,r){var t;let n=(l=>l.split(".").filter(d=>!Te(d.toLowerCase(),r.variable.excludedKeyRegex)).join("."))(e),i=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(t=o[n])==null?void 0:t.computed(i)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},d)=>{let u=d,{colorScheme:c}=u,b=Ko(u,["colorScheme"]);return l[c]=b,l},void 0)},getSelectorRule(o,e,r,t){return r==="class"||r==="attr"?Ce(io(e)?`${o}${e},${o} ${e}`:o,t):Ce(o,Ce(e??":root",t))},transformCSS(o,e,r,t,n={},i,a,l){if(io(e)){let{cssLayer:d}=n;if(t!=="style"){let u=this.getColorSchemeOption(n,a);e=r==="dark"?u.reduce((c,{type:b,selector:p})=>(io(p)&&(c+=p.includes("[CSS]")?p.replace("[CSS]",e):this.getSelectorRule(p,l,b,e)),c),""):Ce(l??":root",e)}if(d){let u={name:"primeui"};ve(d)&&(u.name=ne(d.name,{name:o,type:t})),io(u.name)&&(e=Ce(`@layer ${u.name}`,e),i?.layerNames(u.name))}return e}return""}},Br={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(o={}){let{theme:e}=o;e&&(this._theme=Zr(Ao({},e),{options:Ao(Ao({},this.defaults.options),e.options)}),this._tokens=Eo.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var o;return((o=this.theme)==null?void 0:o.preset)||{}},get options(){var o;return((o=this.theme)==null?void 0:o.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(o){this.update({theme:o}),pe.emit("theme:change",o)},getPreset(){return this.preset},setPreset(o){this._theme=Zr(Ao({},this.theme),{preset:o}),this._tokens=Eo.createTokens(o,this.defaults),this.clearLoadedStyleNames(),pe.emit("preset:change",o),pe.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(o){this._theme=Zr(Ao({},this.theme),{options:o}),this.clearLoadedStyleNames(),pe.emit("options:change",o),pe.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(o){this._layerNames.add(o)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(o){return this._loadedStyleNames.has(o)},setLoadedStyleName(o){this._loadedStyleNames.add(o)},deleteLoadedStyleName(o){this._loadedStyleNames.delete(o)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(o){return Eo.getTokenValue(this.tokens,o,this.defaults)},getCommon(o="",e){return Eo.getCommon({name:o,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(o="",e){let r={name:o,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Eo.getPresetC(r)},getDirective(o="",e){let r={name:o,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Eo.getPresetD(r)},getCustomPreset(o="",e,r,t){let n={name:o,preset:e,options:this.options,selector:r,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Eo.getPreset(n)},getLayerOrderCSS(o=""){return Eo.getLayerOrder(o,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(o="",e,r="style",t){return Eo.transformCSS(o,e,t,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(o="",e,r={}){return Eo.getCommonStyleSheet({name:o,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(o,e,r={}){return Eo.getStyleSheet({name:o,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(o){this._loadingStyles.add(o)},onStyleUpdated(o){this._loadingStyles.add(o)},onStyleLoaded(o,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),pe.emit(`theme:${e}:load`,o),!this._loadingStyles.size&&pe.emit("theme:load"))}},uk=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`,fk=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,bk=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,pk=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`,gk=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,hk=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,mk=`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`,vk=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select:has(.p-select-clear-icon) .p-select-label {
        padding-inline-end: calc(1rem + dt('select.padding.x'));
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }
`,kk=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`,yk=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,xk=`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }
`,wk=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`,Ck=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon, 
    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`,$k=`
    .p-datatable {
        position: relative;
    }

    .p-datatable-table {
        border-spacing: 0;
        border-collapse: separate;
        width: 100%;
    }

    .p-datatable-scrollable > .p-datatable-table-container {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        inset-block-start: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        inset-block-end: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-datatable-frozen-column {
        position: sticky;
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable th.p-datatable-frozen-column {
        z-index: 1;
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-table-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
        display: none;
    }

    .p-datatable-column-resizer {
        display: block;
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        margin: 0;
        width: dt('datatable.column.resizer.width');
        height: 100%;
        padding: 0;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable-column-header-content {
        display: flex;
        align-items: center;
        gap: dt('datatable.header.cell.gap');
    }

    .p-datatable-column-resize-indicator {
        width: dt('datatable.resize.indicator.width');
        position: absolute;
        z-index: 10;
        display: none;
        background: dt('datatable.resize.indicator.color');
    }

    .p-datatable-row-reorder-indicator-up,
    .p-datatable-row-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-datatable-reorderable-column,
    .p-datatable-reorderable-row-handle {
        cursor: move;
    }

    .p-datatable-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    .p-datatable-inline-filter {
        display: flex;
        align-items: center;
        width: 100%;
        gap: dt('datatable.filter.inline.gap');
    }

    .p-datatable-inline-filter .p-datatable-filter-element-container {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datatable-filter-overlay {
        background: dt('datatable.filter.overlay.select.background');
        color: dt('datatable.filter.overlay.select.color');
        border: 1px solid dt('datatable.filter.overlay.select.border.color');
        border-radius: dt('datatable.filter.overlay.select.border.radius');
        box-shadow: dt('datatable.filter.overlay.select.shadow');
        min-width: 12.5rem;
    }

    .p-datatable-filter-constraint-list {
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: dt('datatable.filter.constraint.list.padding');
        gap: dt('datatable.filter.constraint.list.gap');
    }

    .p-datatable-filter-constraint {
        padding: dt('datatable.filter.constraint.padding');
        color: dt('datatable.filter.constraint.color');
        border-radius: dt('datatable.filter.constraint.border.radius');
        cursor: pointer;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-filter-constraint-selected {
        background: dt('datatable.filter.constraint.selected.background');
        color: dt('datatable.filter.constraint.selected.color');
    }

    .p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint-selected:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.selected.focus.background');
        color: dt('datatable.filter.constraint.selected.focus.color');
    }

    .p-datatable-filter-constraint-separator {
        border-block-start: 1px solid dt('datatable.filter.constraint.separator.border.color');
    }

    .p-datatable-popover-filter {
        display: inline-flex;
        margin-inline-start: auto;
    }

    .p-datatable-filter-overlay-popover {
        background: dt('datatable.filter.overlay.popover.background');
        color: dt('datatable.filter.overlay.popover.color');
        border: 1px solid dt('datatable.filter.overlay.popover.border.color');
        border-radius: dt('datatable.filter.overlay.popover.border.radius');
        box-shadow: dt('datatable.filter.overlay.popover.shadow');
        min-width: 12.5rem;
        padding: dt('datatable.filter.overlay.popover.padding');
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-operator-dropdown {
        width: 100%;
    }

    .p-datatable-filter-rule-list,
    .p-datatable-filter-rule {
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule {
        border-block-end: 1px solid dt('datatable.filter.rule.border.color');
        padding-bottom: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule:last-child {
        border-block-end: 0 none;
        padding-bottom: 0;
    }

    .p-datatable-filter-add-rule-button {
        width: 100%;
    }

    .p-datatable-filter-remove-rule-button {
        width: 100%;
    }

    .p-datatable-filter-buttonbar {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        inset-block-start: 0;
        inset-inline-start: 0;
    }

    .p-datatable-paginator-top {
        border-color: dt('datatable.paginator.top.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.top.border.width');
    }

    .p-datatable-paginator-bottom {
        border-color: dt('datatable.paginator.bottom.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.bottom.border.width');
    }

    .p-datatable-header {
        background: dt('datatable.header.background');
        color: dt('datatable.header.color');
        border-color: dt('datatable.header.border.color');
        border-style: solid;
        border-width: dt('datatable.header.border.width');
        padding: dt('datatable.header.padding');
    }

    .p-datatable-footer {
        background: dt('datatable.footer.background');
        color: dt('datatable.footer.color');
        border-color: dt('datatable.footer.border.color');
        border-style: solid;
        border-width: dt('datatable.footer.border.width');
        padding: dt('datatable.footer.padding');
    }

    .p-datatable-header-cell {
        padding: dt('datatable.header.cell.padding');
        background: dt('datatable.header.cell.background');
        border-color: dt('datatable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.header.cell.color');
        font-weight: normal;
        text-align: start;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-column-title {
        font-weight: dt('datatable.column.title.font.weight');
    }

    .p-datatable-tbody > tr {
        outline-color: transparent;
        background: dt('datatable.row.background');
        color: dt('datatable.row.color');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-tbody > tr > td {
        text-align: start;
        border-color: dt('datatable.body.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: dt('datatable.body.cell.padding');
    }

    .p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr:focus-visible,
    .p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
        box-shadow: dt('datatable.row.focus.ring.shadow');
        outline: dt('datatable.row.focus.ring.width') dt('datatable.row.focus.ring.style') dt('datatable.row.focus.ring.color');
        outline-offset: dt('datatable.row.focus.ring.offset');
    }

    .p-datatable-tfoot > tr > td {
        text-align: start;
        padding: dt('datatable.footer.cell.padding');
        border-color: dt('datatable.footer.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.footer.cell.color');
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-column-footer {
        font-weight: dt('datatable.column.footer.font.weight');
    }

    .p-datatable-sortable-column {
        cursor: pointer;
        user-select: none;
        outline-color: transparent;
    }

    .p-datatable-column-title,
    .p-datatable-sort-icon,
    .p-datatable-sort-badge {
        vertical-align: middle;
    }

    .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.color');
        font-size: dt('datatable.sort.icon.size');
        width: dt('datatable.sort.icon.size');
        height: dt('datatable.sort.icon.size');
        transition: color dt('datatable.transition.duration');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
        background: dt('datatable.header.cell.hover.background');
        color: dt('datatable.header.cell.hover.color');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.hover.color');
    }

    .p-datatable-column-sorted {
        background: dt('datatable.header.cell.selected.background');
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-column-sorted .p-datatable-sort-icon {
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-sortable-column:focus-visible {
        box-shadow: dt('datatable.header.cell.focus.ring.shadow');
        outline: dt('datatable.header.cell.focus.ring.width') dt('datatable.header.cell.focus.ring.style') dt('datatable.header.cell.focus.ring.color');
        outline-offset: dt('datatable.header.cell.focus.ring.offset');
    }

    .p-datatable-hoverable .p-datatable-selectable-row {
        cursor: pointer;
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
        box-shadow: inset 0 2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
        box-shadow: inset 0 -2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-loading-icon {
        font-size: dt('datatable.loading.icon.size');
        width: dt('datatable.loading.icon.size');
        height: dt('datatable.loading.icon.size');
    }

    .p-datatable-gridlines .p-datatable-header {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-footer {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-top {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-bottom {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td {
        border-width: 1px 0 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
        border-width: 1px 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
        border-width: 0 0 0 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 0 1px 0 1px;
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
        background: dt('datatable.row.striped.background');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable.p-datatable-sm .p-datatable-header {
        padding: dt('datatable.header.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-footer {
        padding: dt('datatable.footer.sm.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-header {
        padding: dt('datatable.header.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-footer {
        padding: dt('datatable.footer.lg.padding');
    }

    .p-datatable-row-toggle-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datatable.row.toggle.button.size');
        height: dt('datatable.row.toggle.button.size');
        color: dt('datatable.row.toggle.button.color');
        border: 0 none;
        background: transparent;
        cursor: pointer;
        border-radius: dt('datatable.row.toggle.button.border.radius');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
        outline-color: transparent;
        user-select: none;
    }

    .p-datatable-row-toggle-button:enabled:hover {
        color: dt('datatable.row.toggle.button.hover.color');
        background: dt('datatable.row.toggle.button.hover.background');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
        background: dt('datatable.row.toggle.button.selected.hover.background');
        color: dt('datatable.row.toggle.button.selected.hover.color');
    }

    .p-datatable-row-toggle-button:focus-visible {
        box-shadow: dt('datatable.row.toggle.button.focus.ring.shadow');
        outline: dt('datatable.row.toggle.button.focus.ring.width') dt('datatable.row.toggle.button.focus.ring.style') dt('datatable.row.toggle.button.focus.ring.color');
        outline-offset: dt('datatable.row.toggle.button.focus.ring.offset');
    }

    .p-datatable-row-toggle-icon:dir(rtl) {
        transform: rotate(180deg);
    }
`,Bk=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`,wc={transitionDuration:"{transition.duration}"},Cc={borderWidth:"0",borderColor:"{content.border.color}"},$c={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"700",borderRadius:"0",borderWidth:"0 1px 1px 1px",borderColor:"{content.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"1px"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Bc={borderWidth:"0 1px 1px 1px",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"1.125rem"},Sc={light:{header:{background:"{surface.50}",hoverBackground:"{surface.100}",activeBackground:"{surface.50}",activeHoverBackground:"{surface.100}"}},dark:{header:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.800}",activeHoverBackground:"{surface.700}"}}},_c={root:wc,panel:Cc,header:$c,content:Bc,colorScheme:Sc},Rc={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},zc={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Tc={padding:"{list.padding}",gap:"{list.gap}"},Ec={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Ac={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Oc={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},Ic={borderRadius:"{border.radius.sm}"},Dc={padding:"{list.option.padding}"},Fc={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.50}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},Pc={root:Rc,overlay:zc,list:Tc,option:Ec,optionGroup:Ac,dropdown:Oc,chip:Ic,emptyMessage:Dc,colorScheme:Fc},Lc={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Nc={size:"1rem"},jc={borderColor:"{content.background}",offset:"-0.75rem"},Mc={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},Wc={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},Hc={root:Lc,icon:Nc,group:jc,lg:Mc,xl:Wc},Vc={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},Kc={size:"0.5rem"},Uc={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},Yc={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},Xc={fontSize:"1rem",minWidth:"2rem",height:"2rem"},Gc={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},qc={root:Vc,dot:Kc,sm:Uc,lg:Yc,xl:Xc,colorScheme:Gc},Jc={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},Zc={transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"transparent",offset:"0"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.625rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.5rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.75rem"},borderRadius:"{border.radius.md}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.625rem 1rem 0 1rem"},option:{padding:"0.625rem 1rem",borderRadius:"0"},optionGroup:{padding:"0.625rem 1rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.625rem 1rem",borderRadius:"0",gap:"0.5rem"},submenuLabel:{padding:"0.625rem 1rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 2px 12px 0 rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"1rem",shadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.5rem",shadow:"0 1px 3px rgba(0, 0, 0, 0.3)"},navigation:{shadow:"0 2px 12px 0 rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},focusRing:{shadow:"0 0 0 0.2rem {primary.200}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.0}",borderColor:"{surface.300}",hoverBorderColor:"{primary.color}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.500}",shadow:"none"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},focusRing:{shadow:"0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.950}",borderColor:"{surface.600}",hoverBorderColor:"{primary.color}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},Qc={primitive:Jc,semantic:Zc},os={borderRadius:"{content.border.radius}"},es={root:os},rs={padding:"1.25rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},ts={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ns={color:"{navigation.item.icon.color}"},is={root:rs,item:ts,separator:ns},as={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.75rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2.25rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3.25rem"},label:{fontWeight:"600"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",offset:"{form.field.focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},ls={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {primary.200}"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {surface.200}"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {sky.200}"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {green.200}"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {orange.200}"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {purple.200}"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {red.200}"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem {surface.400}"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"transparent",shadow:"0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {help.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {help.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {danger.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {danger.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},ds={root:as,colorScheme:ls},cs={background:"{content.background}",borderRadius:"{border.radius.lg}",color:"{content.color}",shadow:"0 .125rem .25rem rgba(0,0,0,.075)"},ss={padding:"1.5rem",gap:"0.75rem"},us={gap:"0.5rem"},fs={fontSize:"1.25rem",fontWeight:"700"},bs={color:"{text.muted.color}"},ps={root:cs,body:ss,caption:us,title:fs,subtitle:bs},gs={transitionDuration:"{transition.duration}"},hs={gap:"0.25rem"},ms={padding:"1rem",gap:"0.5rem"},vs={width:"1rem",height:"1rem",borderRadius:"50",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ks={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},ys={root:gs,content:hs,indicatorList:ms,indicator:vs,colorScheme:ks},xs={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},ws={width:"2.5rem",color:"{form.field.icon.color}"},Cs={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},$s={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1.25rem"},Bs={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},Ss={color:"{form.field.icon.color}"},_s={root:xs,dropdown:ws,overlay:Cs,list:$s,option:Bs,clearIcon:Ss},Rs={borderRadius:"{border.radius.sm}",width:"1.5rem",height:"1.5rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1.25rem",height:"1.25rem"},lg:{width:"1.75rem",height:"1.75rem"}},zs={size:"1rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1.25rem"}},Ts={root:Rs,icon:zs},Es={borderRadius:"16px",paddingX:"0.875rem",paddingY:"0.625rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},As={width:"2rem",height:"2rem"},Os={size:"1rem"},Is={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ds={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},Fs={root:Es,image:As,icon:Os,removeIcon:Is,colorScheme:Ds},Ps={transitionDuration:"{transition.duration}"},Ls={width:"1.75rem",height:"1.75rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},Ns={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},js={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},Ms={root:Ps,preview:Ls,panel:Ns,colorScheme:js},Ws={size:"2rem",color:"{overlay.modal.color}"},Hs={gap:"1rem"},Vs={icon:Ws,content:Hs},Ks={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Us={padding:"{overlay.popover.padding}",gap:"1rem"},Ys={size:"1.5rem",color:"{overlay.popover.color}"},Xs={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},Gs={root:Ks,content:Us,icon:Ys,footer:Xs},qs={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Js={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Zs={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Qs={mobileIndent:"1.25rem"},ou={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},eu={borderColor:"{content.border.color}"},ru={root:qs,list:Js,item:Zs,submenu:Qs,submenuIcon:ou,separator:eu},tu={transitionDuration:"{transition.duration}"},nu={borderColor:"{datatable.border.color}",borderWidth:"1px 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},iu={selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},au={fontWeight:"700"},lu={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},du={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},cu={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},su={fontWeight:"700"},uu={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},fu={color:"{primary.color}"},bu={width:"0.5rem"},pu={width:"1px",color:"{primary.color}"},gu={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},hu={size:"2rem"},mu={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},vu={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},ku={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},yu={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},xu={light:{root:{borderColor:"{content.border.color}"},header:{background:"{surface.50}",color:"{text.color}"},headerCell:{background:"{surface.50}",hoverBackground:"{surface.100}",color:"{text.color}"},footer:{background:"{surface.50}",color:"{text.color}"},footerCell:{background:"{surface.50}",color:"{text.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},header:{background:"{surface.800}",color:"{text.color}"},headerCell:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{text.color}"},footer:{background:"{surface.800}",color:"{text.color}"},footerCell:{background:"{surface.800}",color:"{text.color}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},wu={root:tu,header:nu,headerCell:iu,columnTitle:au,row:lu,bodyCell:du,footerCell:cu,columnFooter:su,footer:uu,dropPoint:fu,columnResizer:bu,resizeIndicator:pu,sortIcon:gu,loadingIcon:hu,rowToggleButton:mu,filter:vu,paginatorTop:ku,paginatorBottom:yu,colorScheme:xu},Cu={borderColor:"{content.border.color}",borderWidth:"1px",borderRadius:"4px",padding:"0"},$u={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.875rem 1.125rem",borderRadius:"5px 5px 0 0"},Bu={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"5px"},Su={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.875rem 1.125rem",borderRadius:"0 0 5px 5px"},_u={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Ru={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},zu={light:{header:{background:"{surface.50}",color:"{text.color}"}},dark:{header:{background:"{surface.800}",color:"{text.color}"}}},Tu={root:Cu,header:$u,content:Bu,footer:Su,paginatorTop:_u,paginatorBottom:Ru,colorScheme:zu},Eu={transitionDuration:"{transition.duration}"},Au={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},Ou={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.75rem 0"},Iu={gap:"0.5rem",fontWeight:"700"},Du={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},Fu={color:"{form.field.icon.color}"},Pu={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.375rem 0.625rem",borderRadius:"{content.border.radius}"},Lu={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.375rem 0.625rem",borderRadius:"{content.border.radius}"},Nu={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},ju={margin:"0.75rem 0 0 0"},Mu={padding:"0.375rem",fontWeight:"700",color:"{content.color}"},Wu={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.375rem",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},Hu={margin:"0.75rem 0 0 0"},Vu={padding:"0.5rem",borderRadius:"{content.border.radius}"},Ku={margin:"0.75rem 0 0 0"},Uu={padding:"0.5rem",borderRadius:"{content.border.radius}"},Yu={padding:"0.75rem 0 0 0",borderColor:"{content.border.color}"},Xu={padding:"0.75rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},Gu={light:{dropdown:{background:"{surface.50}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},qu={root:Eu,panel:Au,header:Ou,title:Iu,dropdown:Du,inputIcon:Fu,selectMonth:Pu,selectYear:Lu,group:Nu,dayView:ju,weekDay:Mu,date:Wu,monthView:Hu,month:Vu,yearView:Ku,year:Uu,buttonbar:Yu,timePicker:Xu,colorScheme:Gu},Ju={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},Zu={padding:"{overlay.modal.padding}",gap:"0.5rem"},Qu={fontSize:"1.25rem",fontWeight:"600"},of={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},ef={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},rf={root:Ju,header:Zu,title:Qu,content:of,footer:ef},tf={borderColor:"{content.border.color}"},nf={background:"{content.background}",color:"{text.color}"},af={margin:"1.125rem 0",padding:"0 1.125rem",content:{padding:"0 0.625rem"}},lf={margin:"0 1.125rem",padding:"1.125rem 0",content:{padding:"0.625rem 0"}},df={root:tf,content:nf,horizontal:af,vertical:lf},cf={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.lg}"},sf={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},uf={root:cf,item:sf},ff={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},bf={padding:"{overlay.modal.padding}"},pf={fontSize:"1.5rem",fontWeight:"600"},gf={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},hf={padding:"{overlay.modal.padding}"},mf={root:ff,header:bf,title:pf,content:gf,footer:hf},vf={borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},kf={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},yf={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},xf={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},wf={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Cf={light:{toolbar:{background:"{surface.50}"}},dark:{toolbar:{background:"{surface.800}"}}},$f={toolbar:vf,toolbarItem:kf,overlay:yf,overlayOption:xf,content:wf,colorScheme:Cf},Bf={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0.75rem 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},Sf={borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"{content.border.color}",padding:"0.625rem 0.875rem",gap:"0.5rem",fontWeight:"700",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},_f={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},Rf={padding:"0"},zf={light:{legend:{background:"{surface.50}",hoverBackground:"{surface.100}",color:"{text.color}",hoverColor:"{text.hover.color}"}},dark:{legend:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"}}},Tf={root:Bf,legend:Sf,toggleIcon:_f,content:Rf,colorScheme:zf},Ef={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Af={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",padding:"1.125rem",borderRadius:"5px 5px 0 0",gap:"0.5rem"},Of={highlightBorderColor:"{primary.color}",padding:"1.125rem",gap:"1rem"},If={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},Df={gap:"0.5rem"},Ff={height:"0.25rem"},Pf={gap:"0.5rem"},Lf={light:{header:{background:"{surface.50}",color:"{text.color}"}},dark:{header:{background:"{surface.800}",color:"{text.color}"}}},Nf={root:Ef,header:Af,content:Of,file:If,fileList:Df,progressbar:Ff,basic:Pf,colorScheme:Lf},jf={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},Mf={active:{top:"-1.375rem"}},Wf={input:{paddingTop:"1.875rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},Hf={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},Vf={root:jf,over:Mf,in:Wf,on:Hf},Kf={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Uf={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0",prev:{borderRadius:"0 12px 12px 0"},next:{borderRadius:"12px 0 0 12px"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Yf={size:"1.5rem"},Xf={padding:"1rem 0.25rem"},Gf={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},qf={size:"1rem"},Jf={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},Zf={gap:"0.5rem",padding:"1rem"},Qf={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ob={background:"rgba(0, 0, 0, 0.5)"},eb={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},rb={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},tb={size:"1.5rem"},nb={light:{thumbnailsContent:{background:"{surface.50}"},thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailsContent:{background:"{surface.800}"},thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},ib={root:Kf,navButton:Uf,navIcon:Yf,thumbnailsContent:Xf,thumbnailNavButton:Gf,thumbnailNavButtonIcon:qf,caption:Jf,indicatorList:Zf,indicatorButton:Qf,insetIndicatorList:ob,insetIndicatorButton:eb,closeButton:rb,closeButtonIcon:tb,colorScheme:nb},ab={color:"{form.field.icon.color}"},lb={icon:ab},db={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},cb={paddingTop:"1.875rem",paddingBottom:"{form.field.padding.y}"},sb={root:db,input:cb},ub={transitionDuration:"{transition.duration}"},fb={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},bb={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"{content.border.radius}",padding:".5rem",gap:"0.5rem"},pb={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},gb={root:ub,preview:fb,toolbar:bb,action:pb},hb={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"rgba(255,255,255,0.3)",hoverBorderColor:"rgba(255,255,255,0.3)",borderWidth:"3px",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},mb={handle:hb},vb={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},kb={fontWeight:"500"},yb={size:"1.125rem"},xb={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"color-mix(in srgb, {blue.50}, transparent 5%)",color:"{blue.600}",shadow:"none"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"color-mix(in srgb, {green.50}, transparent 5%)",color:"{green.600}",shadow:"none"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"color-mix(in srgb,{yellow.50}, transparent 5%)",color:"{yellow.600}",shadow:"none"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"color-mix(in srgb, {red.50}, transparent 5%)",color:"{red.600}",shadow:"none"},secondary:{background:"{surface.100}",borderColor:"{surface.100}",color:"{surface.600}",shadow:"none"},contrast:{background:"{surface.900}",borderColor:"{surface.900}",color:"{surface.50}",shadow:"none"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.500}, transparent 84%)",color:"{blue.500}",shadow:"none"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.500}",shadow:"none"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.500}, transparent 84%)",color:"{yellow.500}",shadow:"none"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.500}",shadow:"none"},secondary:{background:"{surface.800}",borderColor:"{surface.800}",color:"{surface.300}",shadow:"none"},contrast:{background:"{surface.0}",borderColor:"{surface.0}",color:"{surface.950}",shadow:"none"}}},wb={root:vb,text:kb,icon:yb,colorScheme:xb},Cb={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},$b={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},Bb={root:Cb,display:$b},Sb={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},_b={borderRadius:"{border.radius.sm}"},Rb={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},zb={root:Sb,chip:_b,colorScheme:Rb},Tb={borderRadius:"{form.field.border.radius}",padding:"0.625rem 0.5rem",minWidth:"2.75rem"},Eb={light:{addon:{background:"{surface.50}",borderColor:"{form.field.border.color}",color:"{text.muted.color}"}},dark:{addon:{background:"{surface.800}",borderColor:"{form.field.border.color}",color:"{text.muted.color}"}}},Ab={addon:Tb,colorScheme:Eb},Ob={transitionDuration:"{transition.duration}"},Ib={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},Db={light:{button:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{button:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.500}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},Fb={root:Ob,button:Ib,colorScheme:Db},Pb={gap:"0.5rem"},Lb={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},Nb={root:Pb,input:Lb},jb={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Mb={root:jb},Wb={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Hb={background:"{primary.color}"},Vb={background:"{content.border.color}"},Kb={color:"{text.muted.color}"},Ub={root:Wb,value:Hb,range:Vb,text:Kb},Yb={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},Xb={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Gb={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},qb={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Jb={color:"{list.option.color}",gutterStart:"-0.5rem",gutterEnd:"0.5rem"},Zb={padding:"{list.option.padding}"},Qb={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},op={root:Yb,list:Xb,option:Gb,optionGroup:qb,checkmark:Jb,emptyMessage:Zb,colorScheme:Qb},ep={borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.75rem 1rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},rp={borderRadius:"{content.border.radius}",padding:"0.75rem 1rem"},tp={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},np={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},ip={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},ap={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},lp={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},dp={borderColor:"{content.border.color}"},cp={borderRadius:"50%",size:"2rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},sp={light:{root:{background:"{surface.50}"}},dark:{root:{background:"{surface.800}"}}},up={root:ep,baseItem:rp,item:tp,overlay:np,submenu:ip,submenuLabel:ap,submenuIcon:lp,separator:dp,mobileButton:cp,colorScheme:sp},fp={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},bp={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},pp={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},gp={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},hp={borderColor:"{content.border.color}"},mp={root:fp,list:bp,item:pp,submenuLabel:gp,separator:hp},vp={borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem 1rem",transitionDuration:"{transition.duration}"},kp={borderRadius:"{content.border.radius}",padding:"0.75rem 1rem"},yp={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},xp={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1.25rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},wp={borderColor:"{content.border.color}"},Cp={borderRadius:"50%",size:"2rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$p={light:{root:{background:"{surface.50}"}},dark:{root:{background:"{surface.800}"}}},Bp={root:vp,baseItem:kp,item:yp,submenu:xp,separator:wp,mobileButton:Cp,colorScheme:$p},Sp={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},_p={padding:"0.75rem 1rem",gap:"0.5rem",sm:{padding:"0.5rem 0.625rem"},lg:{padding:"0.75rem 0.875rem"}},Rp={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},zp={size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},Tp={width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Ep={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},Ap={root:{borderWidth:"1px"}},Op={content:{padding:"0"}},Ip={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"transparent",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {blue.200}"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"transparent",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {green.200}"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"transparent",color:"{yellow.600}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {yellow.200}"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"transparent",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {red.200}"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"transparent",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {surface.200}"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"transparent",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {surface.400}"}},outlined:{color:"{surface.900}",borderColor:"{surface.900}"},simple:{color:"{surface.900}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"transparent",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"transparent",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"transparent",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"transparent",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"transparent",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"transparent",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},Dp={root:Sp,content:_p,text:Rp,icon:zp,closeButton:Tp,closeIcon:Ep,outlined:Ap,simple:Op,colorScheme:Ip},Fp={borderRadius:"{content.border.radius}",gap:"1rem"},Pp={background:"{content.border.color}",size:"0.625rem"},Lp={gap:"0.5rem"},Np={size:"0.5rem"},jp={size:"1rem"},Mp={verticalGap:"0.5rem",horizontalGap:"1rem"},Wp={root:Fp,meters:Pp,label:Lp,labelMarker:Np,labelIcon:jp,labelList:Mp},Hp={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Vp={width:"2.5rem",color:"{form.field.icon.color}"},Kp={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Up={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Yp={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},Xp={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Gp={color:"{form.field.icon.color}"},qp={borderRadius:"{border.radius.sm}"},Jp={padding:"{list.option.padding}"},Zp={root:Hp,dropdown:Vp,overlay:Kp,list:Up,option:Yp,optionGroup:Xp,chip:qp,clearIcon:Gp,emptyMessage:Jp},Qp={gap:"1.125rem"},og={gap:"0.5rem"},eg={root:Qp,controls:og},rg={gutter:"0.75rem",transitionDuration:"{transition.duration}"},tg={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},ng={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ig={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},ag={root:rg,node:tg,nodeToggleButton:ng,connector:ig},lg={outline:{width:"2px",color:"{content.background}"}},dg={root:lg},cg={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},sg={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ug={color:"{text.muted.color}"},fg={maxWidth:"2.5rem"},bg={root:cg,navButton:sg,currentPageReport:ug,jumpToPageInput:fg},pg={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}"},gg={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",padding:"1.125rem",borderRadius:"5px 5px 0 0"},hg={padding:"0.25rem 1.125rem"},mg={fontWeight:"700"},vg={padding:"1.125rem"},kg={padding:"1.125rem"},yg={light:{header:{background:"{surface.50}",color:"{text.color}"}},dark:{header:{background:"{surface.800}",color:"{text.color}"}}},xg={root:pg,header:gg,toggleableHeader:hg,title:mg,content:vg,footer:kg,colorScheme:yg},wg={gap:"0",transitionDuration:"{transition.duration}"},Cg={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"0",first:{borderWidth:"1px 1px 0 1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0 1px 1px 1px",bottomBorderRadius:"{content.border.radius}"}},$g={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},Bg={indent:"1rem"},Sg={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},_g={root:wg,panel:Cg,item:$g,submenu:Bg,submenuIcon:Sg},Rg={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},zg={color:"{form.field.icon.color}"},Tg={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},Eg={gap:"0.75rem"},Ag={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},Og={meter:Rg,icon:zg,overlay:Tg,content:Eg,colorScheme:Ag},Ig={gap:"1.125rem"},Dg={gap:"0.5rem"},Fg={root:Ig,controls:Dg},Pg={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Lg={padding:"{overlay.popover.padding}"},Ng={root:Pg,content:Lg},jg={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.5rem"},Mg={background:"{primary.color}"},Wg={color:"{primary.contrast.color}",fontSize:"0.875rem",fontWeight:"600"},Hg={root:jg,value:Mg,label:Wg},Vg={light:{root:{colorOne:"{pink.500}",colorTwo:"{sky.500}",colorThree:"{emerald.500}",colorFour:"{amber.500}"}},dark:{root:{colorOne:"{pink.400}",colorTwo:"{sky.400}",colorThree:"{emerald.400}",colorFour:"{amber.400}"}}},Kg={colorScheme:Vg},Ug={width:"1.5rem",height:"1.5rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1.25rem",height:"1.25rem"},lg:{width:"1.75rem",height:"1.75rem"}},Yg={size:"1rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1.25rem"}},Xg={root:Ug,icon:Yg},Gg={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},qg={size:"1.25rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},Jg={root:Gg,icon:qg},Zg={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},Qg={colorScheme:Zg},o0={transitionDuration:"{transition.duration}"},e0={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},r0={light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}},t0={root:o0,bar:e0,colorScheme:r0},n0={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},i0={width:"2.5rem",color:"{form.field.icon.color}"},a0={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},l0={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},d0={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},c0={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},s0={color:"{form.field.icon.color}"},u0={color:"{list.option.color}",gutterStart:"-0.5rem",gutterEnd:"0.5rem"},f0={padding:"{list.option.padding}"},b0={root:n0,dropdown:i0,overlay:a0,list:l0,option:d0,optionGroup:c0,clearIcon:s0,checkmark:u0,emptyMessage:f0},p0={borderRadius:"{form.field.border.radius}"},g0={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},h0={root:p0,colorScheme:g0},m0={borderRadius:"{content.border.radius}"},v0={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},k0={root:m0,colorScheme:v0},y0={transitionDuration:"{transition.duration}"},x0={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},w0={background:"{primary.color}"},C0={width:"16px",height:"16px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",hoverBackground:"{primary.color}",width:"12px",height:"12px",shadow:"none"},focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},$0={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},B0={root:y0,track:x0,range:w0,handle:C0,colorScheme:$0},S0={gap:"0.5rem",transitionDuration:"{transition.duration}"},_0={root:S0},R0={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},z0={root:R0},T0={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},E0={background:"{content.border.color}"},A0={size:"24px",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},O0={light:{handle:{background:"{surface.400}"}},dark:{handle:{background:"{surface.600}"}}},I0={root:T0,gutter:E0,handle:A0,colorScheme:O0},D0={transitionDuration:"{transition.duration}"},F0={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},P0={padding:"0.5rem",gap:"1rem"},L0={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},N0={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},j0={background:"{content.background}",activeBackground:"{primary.color}",borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",activeColor:"{primary.contrast.color}",size:"2.25rem",fontSize:"1.125rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},M0={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},W0={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},H0={root:D0,separator:F0,step:P0,stepHeader:L0,stepTitle:N0,stepNumber:j0,steppanels:M0,steppanel:W0},V0={transitionDuration:"{transition.duration}"},K0={background:"{content.border.color}"},U0={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},Y0={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},X0={background:"{content.background}",activeBackground:"{primary.color}",borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",activeColor:"{primary.contrast.color}",size:"2.25rem",fontSize:"1.125rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},G0={root:V0,separator:K0,itemLink:U0,itemLabel:Y0,itemNumber:X0},q0={transitionDuration:"{transition.duration}"},J0={borderWidth:"0",background:"{content.background}",borderColor:"{content.border.color}"},Z0={borderWidth:"2px 0 0 0",borderColor:"transparent",hoverBorderColor:"transparent",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Q0={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},oh={height:"0",bottom:"0",background:"transparent"},eh={light:{item:{background:"{surface.50}",hoverBackground:"{surface.100}",activeBackground:"{surface.0}"}},dark:{item:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.900}"}}},rh={root:q0,tablist:J0,item:Z0,itemIcon:Q0,activeBar:oh,colorScheme:eh},th={transitionDuration:"{transition.duration}"},nh={borderWidth:"0",background:"{content.background}",borderColor:"{content.border.color}"},ih={borderWidth:"2px 0 0 0",borderColor:"transparent",hoverBorderColor:"transparent",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"700",margin:"0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},ah={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},lh={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},dh={height:"0",bottom:"0",background:"transparent"},ch={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"},tab:{background:"{surface.50}",hoverBackground:"{surface.100}",activeBackground:"{surface.0}"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"},tab:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.900}"}}},sh={root:th,tablist:nh,tab:ih,tabpanel:ah,navButton:lh,activeBar:dh,colorScheme:ch},uh={transitionDuration:"{transition.duration}"},fh={background:"{content.background}",borderColor:"{content.border.color}"},bh={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},ph={background:"{content.background}",color:"{content.color}"},gh={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},hh={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},mh={root:uh,tabList:fh,tab:bh,tabPanel:ph,navButton:gh,colorScheme:hh},vh={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},kh={size:"0.75rem"},yh={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},xh={root:vh,icon:kh,colorScheme:yh},wh={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},Ch={gap:"0.25rem"},$h={margin:"2px 0"},Bh={root:wh,prompt:Ch,commandResponse:$h},Sh={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},_h={root:Sh},Rh={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},zh={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Th={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Eh={mobileIndent:"1.25rem"},Ah={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Oh={borderColor:"{content.border.color}"},Ih={root:Rh,list:zh,item:Th,submenu:Eh,submenuIcon:Ah,separator:Oh},Dh={minHeight:"5rem"},Fh={eventContent:{padding:"1rem 0"}},Ph={eventContent:{padding:"0 1rem"}},Lh={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{primary.color}",content:{borderRadius:"50%",size:"0.375rem",background:"transparent",insetShadow:"none"}},Nh={color:"{content.border.color}",size:"2px"},jh={event:Dh,horizontal:Fh,vertical:Ph,eventMarker:Lh,eventConnector:Nh},Mh={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0 0 0 6px",transitionDuration:"{transition.duration}"},Wh={size:"1.25rem"},Hh={padding:"{overlay.popover.padding}",gap:"0.5rem"},Vh={gap:"0.5rem"},Kh={fontWeight:"500",fontSize:"1rem"},Uh={fontWeight:"500",fontSize:"0.875rem"},Yh={width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Xh={size:"1rem"},Gh={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.500}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {blue.200}"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.500}",color:"{green.600}",detailColor:"{surface.700}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {green.200}"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.500}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {yellow.200}"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.500}",color:"{red.600}",detailColor:"{surface.700}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {red.200}"}}},secondary:{background:"{surface.100}",borderColor:"{surface.500}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {surface.200}"}}},contrast:{background:"{surface.900}",borderColor:"{primary.color}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem {surface.400}"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{focus.ring.color}",shadow:"0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)"}}}}},qh={root:Mh,icon:Wh,content:Hh,text:Vh,summary:Kh,detail:Uh,closeButton:Yh,closeIcon:Xh,colorScheme:Gh},Jh={padding:"0.625rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedBackground:"{highlight.background}",checkedColor:"{highlight.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.5rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.75rem 1.25rem"}},Zh={color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{highlight.color}",disabledColor:"{form.field.disabled.color}"},Qh={checkedBackground:"transparent",checkedShadow:"none",padding:"0",borderRadius:"0",sm:{padding:"0"},lg:{padding:"0"}},om={light:{root:{hoverBackground:"{surface.100}"}},dark:{root:{hoverBackground:"{surface.800}"}}},em={root:Jh,icon:Zh,content:Qh,colorScheme:om},rm={width:"3rem",height:"1.75rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},tm={borderRadius:"50%",size:"1.25rem"},nm={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},im={root:rm,handle:tm,colorScheme:nm},am={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},lm={light:{root:{background:"{surface.50}",color:"{content.color}"}},dark:{root:{background:"{surface.800}",color:"{content.color}"}}},dm={root:am,colorScheme:lm},cm={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.625rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},sm={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},um={root:cm,colorScheme:sm},fm={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},bm={padding:"0.375rem 0.625rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"},gap:"0.25rem"},pm={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},gm={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hm={size:"2rem"},mm={margin:"0 0 0.5rem 0"},vm={root:fm,node:bm,nodeIcon:pm,nodeToggleButton:gm,loadingIcon:hm,filter:mm},km={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},ym={width:"2.5rem",color:"{form.field.icon.color}"},xm={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},wm={padding:"{list.padding}"},Cm={padding:"{list.option.padding}"},$m={borderRadius:"{border.radius.sm}"},Bm={color:"{form.field.icon.color}"},Sm={root:km,dropdown:ym,overlay:xm,tree:wm,emptyMessage:Cm,chip:$m,clearIcon:Bm},_m={transitionDuration:"{transition.duration}"},Rm={borderColor:"{treetable.border.color}",borderWidth:"1px 0 1px 0",padding:"0.75rem 1rem"},zm={selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Tm={fontWeight:"700"},Em={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{sr.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Am={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},Om={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem"},Im={fontWeight:"700"},Dm={borderColor:"{treetable.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},Fm={width:"0.5rem"},Pm={width:"1px",color:"{primary.color}"},Lm={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},Nm={size:"2rem"},jm={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Mm={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Wm={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Hm={light:{root:{borderColor:"{content.border.color}"},header:{background:"{surface.50}",color:"{text.color}"},headerCell:{background:"{surface.50}",hoverBackground:"{surface.100}",color:"{text.color}"},footer:{background:"{surface.50}",color:"{text.color}"},footerCell:{background:"{surface.50}",color:"{text.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},header:{background:"{surface.800}",color:"{text.color}"},headerCell:{background:"{surface.800}",hoverBackground:"{surface.700}",color:"{text.color}"},footer:{background:"{surface.800}",color:"{text.color}"},footerCell:{background:"{surface.800}",color:"{text.color}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},Vm={root:_m,header:Rm,headerCell:zm,columnTitle:Tm,row:Em,bodyCell:Am,footerCell:Om,columnFooter:Im,footer:Dm,columnResizer:Fm,resizeIndicator:Pm,sortIcon:Lm,loadingIcon:Nm,nodeToggleButton:jm,paginatorTop:Mm,paginatorBottom:Wm,colorScheme:Hm},Km={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},Um={loader:Km},Ym=Object.defineProperty,Xm=Object.defineProperties,Gm=Object.getOwnPropertyDescriptors,In=Object.getOwnPropertySymbols,qm=Object.prototype.hasOwnProperty,Jm=Object.prototype.propertyIsEnumerable,Dn=(o,e,r)=>e in o?Ym(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,Fn,Sk=(Fn=((o,e)=>{for(var r in e||(e={}))qm.call(e,r)&&Dn(o,r,e[r]);if(In)for(var r of In(e))Jm.call(e,r)&&Dn(o,r,e[r]);return o})({},Qc),Xm(Fn,Gm({components:{accordion:_c,autocomplete:Pc,avatar:Hc,badge:qc,blockui:es,breadcrumb:is,button:ds,datepicker:qu,card:ps,carousel:ys,cascadeselect:_s,checkbox:Ts,chip:Fs,colorpicker:Ms,confirmdialog:Vs,confirmpopup:Gs,contextmenu:ru,dataview:Tu,datatable:wu,dialog:rf,divider:df,dock:uf,drawer:mf,editor:$f,fieldset:Tf,fileupload:Nf,iftalabel:sb,floatlabel:Vf,galleria:ib,iconfield:lb,image:gb,imagecompare:mb,inlinemessage:wb,inplace:Bb,inputchips:zb,inputgroup:Ab,inputnumber:Fb,inputotp:Nb,inputtext:Mb,knob:Ub,listbox:op,megamenu:up,menu:mp,menubar:Bp,message:Dp,metergroup:Wp,multiselect:Zp,orderlist:eg,organizationchart:ag,overlaybadge:dg,popover:Ng,paginator:bg,password:Og,panel:xg,panelmenu:_g,picklist:Fg,progressbar:Hg,progressspinner:Kg,radiobutton:Xg,rating:Jg,ripple:Qg,scrollpanel:t0,select:b0,selectbutton:h0,skeleton:k0,slider:B0,speeddial:_0,splitter:I0,splitbutton:z0,stepper:H0,steps:G0,tabmenu:rh,tabs:sh,tabview:mh,textarea:_h,tieredmenu:Ih,tag:xh,terminal:Bh,timeline:jh,togglebutton:em,toggleswitch:im,tree:vm,treeselect:Sm,treetable:Vm,toast:qh,toolbar:dm,tooltip:um,virtualscroller:Um}})));export{ov as $,Qi as A,dv as B,Ql as C,Ca as D,Zd as E,lc as F,An as G,dk as H,lk as I,ve as J,qv as K,bk as L,Ev as M,Wv as N,yv as O,Ue as P,zv as Q,pe as R,Cv as S,Bv as T,Lv as U,Pv as V,vv as W,_v as X,pk as Y,tv as Z,iv as _,ni as a,Rt as a$,ut as a0,nl as a1,bv as a2,Ar as a3,nv as a4,ic as a5,nk as a6,Tn as a7,jv as a8,gk as a9,yk as aA,xk as aB,wk as aC,Ck as aD,Sv as aE,Mv as aF,Er as aG,cv as aH,$k as aI,Bk as aJ,Yv as aK,hv as aL,Fv as aM,Nv as aN,Iv as aO,qd as aP,ik as aQ,Ov as aR,Av as aS,Gd as aT,kv as aU,Zv as aV,Kv as aW,rk as aX,ak as aY,Hv as aZ,tk as a_,hk as aa,ev as ab,mk as ac,Xv as ad,$o as ae,av as af,vo as ag,vk as ah,pv as ai,Zm as aj,lv as ak,gv as al,Qv as am,oa as an,Rv as ao,Gv as ap,$v as aq,xv as ar,ck as as,wv as at,Dv as au,Tv as av,Vv as aw,ek as ax,kk as ay,Jv as az,Br as b,cd as b0,sv as b1,Xa as b2,fv as b3,Sk as b4,mv as b5,sk as c,io as d,od as e,ok as f,Lt as g,En as h,Ae as i,Ee as j,uv as k,ra as l,ne as m,el as n,wi as o,ke as p,st as q,Qm as r,uk as s,Uv as t,rv as u,Ki as v,Xr as w,fk as x,Vd as y,Jd as z};
