var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,r)=>{for(var c in r||(r={}))t.call(r,c)&&n(e,c,r[c]);if(a)for(var c of a(r))l.call(r,c)&&n(e,c,r[c]);return e};import{F as c,r as s,I as m,B as o,k as i,u,h as p,R as E,w as d,as as y,t as f,Z as v,_ as k,l as g,T as h,a4 as b,b as w,a7 as C}from"./vendor.6a8dc018.js";import{U as I,g as F,G as O,C as x,a as q,P as j}from"./index.366ccd84.js";function N(){const[e]=c.useForm(),t=()=>{const{oldpass:t,newpass:a}=e.getFieldsValue();I(t,a).then((e=>{console.log(e),i.success("修改密码成功")}))};return s.createElement(c,{form:e,layout:"vertical",requiredMark:!0},s.createElement(c.Item,{label:"旧密码：",required:!0,name:"oldpass",rules:[{required:!0,message:"请输入旧密码"}]},s.createElement(m,{placeholder:"请输入旧密码"})),s.createElement(c.Item,{label:"新密码：",required:!0,name:"newpass",rules:[{required:!0,message:"请输入新密码"}]},s.createElement(m,{placeholder:"请输入新密码"})),s.createElement(c.Item,{label:"确认密码：",required:!0,name:"newpassagain",rules:[{required:!0,message:"再次输入新密码"}]},s.createElement(m,{placeholder:"再次输入新密码"})),s.createElement(c.Item,null,s.createElement(o,{type:"primary",onClick:async()=>{try{await e.validateFields(),t()}catch(a){console.log("输入有误")}}},"确认修改")))}const{Option:S}=f;function K(){const[e]=c.useForm(),[n,h]=s.useState(!1),[b,w]=s.useState([]);let{profile:C}=u((e=>e.account));const[I,O]=s.useState(C.portrait||"/avatar1.png"),[x,q]=s.useState(""),j=p();s.useEffect((()=>{const{id:t,nickname:a,email:l,phone:n,contacts:r}=C;t&&e.setFieldsValue({nickname:a,email:l,phone:n,contacts:r})}),[C.id]),s.useEffect((()=>{F().then((e=>{w(e)}))}),[]);const N=async()=>{try{await e.validateFields(),K()}catch(t){console.log("输入有误",t)}},K=()=>{const{nickname:t,email:a,phone:l,moreContacts:n}=e.getFieldsValue();let{contacts:c}=e.getFieldsValue();n&&n.length>0&&n.forEach((e=>{const{key:t,value:a}=e;t&&a&&(c?c[t]=a:c={[t]:a})})),j({type:"account/updateProfile",data:r(r({},C),{portrait:x||I,nickname:t,email:a,phone:l,contacts:c})}),i.success("信息保存成功")},P=new Array(8).fill(0).map(((e,t)=>t+1));return s.createElement(s.Fragment,null,s.createElement(c,{form:e,layout:"vertical"},s.createElement(E,{gutter:16,style:{marginBottom:"24px"}},s.createElement(d,{span:20},s.createElement(E,{gutter:16,style:{marginBottom:"24px"}},s.createElement(d,{span:4},s.createElement("div",null,s.createElement("label",null,"用户名："),s.createElement("span",null,C.username))),s.createElement(d,{span:4},s.createElement("div",null,s.createElement("label",null,"角色："),s.createElement("span",null,C.roles.join(", "))))),s.createElement(c.Item,{label:"显示名：",name:"nickname"},s.createElement(m,{placeholder:"请输入显示名"})),s.createElement(c.Item,{label:"邮箱：",name:"email"},s.createElement(m,{placeholder:"请输入邮箱"})),s.createElement(c.Item,{label:"手机：",name:"phone"},s.createElement(m,{placeholder:"请输入手机号"})),C.contacts&&Object.keys(C.contacts).sort().map(((e,t)=>{let a=b.find((t=>t.key===e));return s.createElement(s.Fragment,null,a?s.createElement(c.Item,{label:a.label,name:["contacts",e],key:t},s.createElement(m,{placeholder:`请输入${e}`})):null)})),s.createElement(c.Item,{label:"更多联系方式"},s.createElement(c.List,{name:"moreContacts"},((e,{add:n,remove:o})=>s.createElement(s.Fragment,null,e.map((e=>{var{key:n,name:i,fieldKey:u}=e,p=((e,n)=>{var r={};for(var c in e)t.call(e,c)&&n.indexOf(c)<0&&(r[c]=e[c]);if(null!=e&&a)for(var c of a(e))n.indexOf(c)<0&&l.call(e,c)&&(r[c]=e[c]);return r})(e,["key","name","fieldKey"]);return s.createElement(y,{key:n,style:{display:"flex"},align:"baseline"},s.createElement(c.Item,r(r({style:{width:"180px"}},p),{name:[i,"key"],fieldKey:[u,"key"],rules:[{required:!0,message:"联系方式不能为空"}]}),s.createElement(f,{placeholder:"请选择联系方式"},b.map(((e,t)=>s.createElement(S,{value:e.key,key:t},e.label))))),s.createElement(c.Item,r(r({},p),{style:{width:"330px"},name:[i,"value"],fieldKey:[u,"value"],rules:[{required:!0,message:"值不能为空"}]}),s.createElement(m,{placeholder:"请输入值"})),s.createElement(v,{className:"control-icon-normal",onClick:()=>o(i)}))})),s.createElement(k,{className:"control-icon-normal",onClick:()=>n()}))))),s.createElement(c.Item,null,s.createElement(o,{type:"primary",onClick:N},"确认修改"))),s.createElement(d,{span:4},s.createElement("div",{className:"avatar"},s.createElement("img",{src:C.portrait||"/avatar1.png"}),s.createElement(o,{type:"primary",className:"update-avatar",onClick:()=>h(!0)},"更换头像"))))),s.createElement(g,{title:"更换头像",visible:n,onOk:()=>{if(x){if(!x.startsWith("http"))return void i.error("自定义头像需以http开头");fetch(x).then((e=>{h(!1),N()})).catch((e=>{i.error("自定义头像"+e)}))}else h(!1),N()},onCancel:()=>{h(!1)},wrapClassName:"avatar-modal"},s.createElement("div",{className:"avatar-content"},P.map((e=>s.createElement("div",{key:e,className:`/avatar${e}.png`===I?"avatar active":"avatar",onClick:()=>(e=>{O(`/avatar${e}.png`)})(e)},s.createElement("img",{src:`/avatar${e}.png`}))))),s.createElement(m,{addonBefore:"头像URL:",onChange:e=>q(e.target.value),value:x})))}function P(){const[e,t]=s.useState([]);s.useEffect((()=>{a()}),[]);const a=()=>{O().then((e=>{e.err||t(e.dat)}))},l=[{title:"Token",dataIndex:"token"},{title:"操作",key:"action",render:(e,t)=>s.createElement(y,{size:"middle"},s.createElement("a",{onClick:()=>(async e=>{await q({token:e}),i.success("Token更新成功"),a()})(t.token)},"重新生成"))}];return s.createElement(s.Fragment,null,s.createElement(h,{columns:l,dataSource:e,pagination:!1,rowKey:e=>e.token}),e.length<2&&s.createElement(o,{onClick:async()=>{await x(),i.success("Token创建成功"),a()},style:{marginTop:10}},"生成"))}const{TabPane:T}=C;function B(){const{tab:e}=b(),t=w();return s.createElement(j,{title:"个人中心"},s.createElement(C,{activeKey:e,className:"profile",onChange:e=>{t.push("/account/profile/"+e)}},s.createElement(T,{tab:"个人信息",key:"info"},s.createElement(K,null)),s.createElement(T,{tab:"修改密码",key:"pwd"},s.createElement(N,null)),s.createElement(T,{tab:"秘钥管理",key:"secret"},s.createElement(P,null))))}export default B;
