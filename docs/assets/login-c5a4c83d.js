import{_ as g,d as F,t as b,u as h,v as k,o as V,c as w,a as c,b as o,w as r,x as E,y as v,s as y,n as d,q as $,r as C,j as I}from"./index-5fdd5e3d.js";const U=F({setup(){return{src:b("../../src/assets/logo.png")}},data(){return{n:30,userForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入正确的电子邮箱",trigger:"blur"},{type:"email",message:"电子邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...h(E,["setToken","fillUserinfo"]),btnLogin(){const e=this,s=e.$refs.ruleFormRef;s&&s.validate(u=>{if(u)k(e.userForm).then(l=>{if(l.success){const t=l.data.userinfo;console.log(e),e.setToken(t.token),e.fillUserinfo(t),e.$router.push("/")}else return!1}).catch(l=>{console.log(l)});else return console.log("error submit!"),!1})},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),B={class:"login"},L={class:"login-form"},R={class:"login-form-logo"};function q(e,s,u,f,l,t){const p=v,i=$,n=C,m=I,_=y;return V(),w("div",B,[c("div",L,[c("div",R,[o(p,{src:e.src,fit:"fill",lazy:!0},null,8,["src"])]),o(_,{ref:"ruleFormRef",model:e.userForm,"status-icon":"",rules:e.rules,class:"login-ruleForm"},{default:r(()=>[o(n,{prop:"email"},{default:r(()=>[o(i,{modelValue:e.userForm.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.userForm.email=a),autocomplete:"off",placeholder:"请输入你的用户邮箱","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),o(n,{prop:"password"},{default:r(()=>[o(i,{modelValue:e.userForm.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.userForm.password=a),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),o(n,{class:"login-form-btns"},{default:r(()=>[o(m,{type:"primary",onClick:e.btnLogin},{default:r(()=>[d("用户登录")]),_:1},8,["onClick"]),o(m,{onClick:e.resetForm},{default:r(()=>[d("Reset")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}const T=g(U,[["render",q],["__scopeId","data-v-8b02a72c"]]);export{T as default};
