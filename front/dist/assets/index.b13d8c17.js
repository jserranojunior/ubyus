var F=Object.defineProperty;var j=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var L=(a,n,d)=>n in a?F(a,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[n]=d,E=(a,n)=>{for(var d in n||(n={}))D.call(n,d)&&L(a,d,n[d]);if(j)for(var d of j(n))M.call(n,d)&&L(a,d,n[d]);return a};import{t as N,r as C,a as H,p as O,b as m,o as s,c as G,i as $,d as W,e as t,f as e,S as z,P as J,N as Q,A as K,g as X,h as Y,v as Z,j as l,w as r,n as v,k as A,l as T,m as S,F as V,q as P,s as p,u as k,x as ee,y as se,z as I,B as te,C as oe,D as ne,E as ae}from"./vendor.cd1ace6e.js";const ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function d(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(c){if(c.ep)return;c.ep=!0;const u=d(c);fetch(c.href,u)}};ie();const le=()=>{const a=C({lang:"portugues",placeholderNameContact:"Nome Completo"});async function n(i){localStorage.setItem("lang",i)}function d(i){a.lang=i}function o(){const i=localStorage.getItem("lang");if(i=="english"||i=="portugues")return i}function c(i){i=="english"?(a.placeholderNameContact="Full Name",console.log(a.placeholderNameContact)):(a.placeholderNameContact="Nome Completo",console.log(a.placeholderNameContact))}async function u(i){await n(i).then(()=>{d(i),c(i)})}return E({setLangState:d,verifyLangEnglish:o,changeLang:u},N(a))},ce=()=>{const a=C({inputsEmail:{name:"",email:"",message:""},statusSendmail:"disponivelEnvioEmail"});async function n(){a.statusSendmail="enviandoEmail";const d=`/wp-content/themes/dist/back?name=${a.inputsEmail.name}&email=${a.inputsEmail.email}&message=${a.inputsEmail.message}`;H.get(d).then(function(o){return console.log(o),a.statusSendmail="enviadoComSuccesso",a.inputsEmail.name="",a.inputsEmail.email="",a.inputsEmail.message="",o}).catch(function(o){return console.log(o),a.statusSendmail="erroAoEnviar",o})}return E({sendEmail:n},N(a))},re=()=>{O("lang",le()),O("email",ce())};var x=(a,n)=>{const d=a.__vccOpts||a;for(const[o,c]of n)d[o]=c;return d};const de={setup(){re()}};function ue(a,n,d,o,c,u){const i=m("router-view");return s(),G(i)}var _e=x(de,[["render",ue]]);var me="/assets/bandeira.1a0a4bbd.jpg",pe="/assets/ptbr.380b073c.png";const he={setup(){const a=$("lang"),{lang:n,changeLang:d,placeholderNameContact:o}=a;return W(()=>{}),{lang:n,changeLang:d,placeholderNameContact:o}}},ge={class:"flex items-center"},fe={class:"px-2 hover:text-whitetheme-50",href:"#oquenosmove"},ve={key:0},xe={key:1},ye={class:"px-2 hover:text-whitetheme-50",href:"#centrosdeexcelencia"},be={key:0},we={key:1},Ee={class:"px-2 hover:text-whitetheme-50",href:"#nossascompetencias"},Se={key:0},ke={key:1},Ne={class:"px-2 hover:text-whitetheme-50",href:"#quemsomos"},Ce={key:0},$e={key:1},Ae={class:"px-2 hover:text-whitetheme-50",href:"#contato"},Te={key:0},Ve={key:1},Ie={class:"px-2 hover:text-whitetheme-50",href:"#"},je={class:"flex items-baseline"};function Le(a,n,d,o,c,u){return s(),t("nav",ge,[e("a",fe,[o.lang=="portugues"?(s(),t("span",ve,"O QUE NOS MOVE")):(s(),t("span",xe,"WHAT MOVE US"))]),e("a",ye,[o.lang=="portugues"?(s(),t("span",be,"CENTROS DE EXCEL\xCANCIA")):(s(),t("span",we,"CENTERS OF EXCELLENCE"))]),e("a",Ee,[o.lang=="portugues"?(s(),t("span",Se,"NOSSAS HABILIDADES")):(s(),t("span",ke,"OUR SKILLS"))]),e("a",Ne,[o.lang=="portugues"?(s(),t("span",Ce,"QUEM SOMOS")):(s(),t("span",$e,"WHO WE ARE"))]),e("a",Ae,[o.lang=="portugues"?(s(),t("span",Te,"CONTATO")):(s(),t("span",Ve,"CONTACT"))]),e("a",Ie,[e("div",je,[e("div",null,[o.lang=="portugues"?(s(),t("img",{key:0,class:"mr-1 my-auto",src:me,width:"20",height:"10",onClick:n[0]||(n[0]=i=>o.changeLang("english"))})):(s(),t("img",{key:1,class:"mr-1 my-auto",src:pe,width:"20",height:"10",onClick:n[1]||(n[1]=i=>o.changeLang("portugues"))}))]),o.lang=="portugues"?(s(),t("span",{key:0,onClick:n[2]||(n[2]=i=>o.changeLang("english"))},"ENGLISH")):(s(),t("span",{key:1,onClick:n[3]||(n[3]=i=>o.changeLang("portugues"))},"PORTUGU\xCAS"))])])])}var Oe=x(he,[["render",Le]]),q="/assets/ubyus-mini.4d2987aa.png",Pe="/assets/ubyus-portugues.06ef9d0b.gif",qe="/assets/ubyus-english.1690e2ba.gif",Be="/assets/imagem-equipe.3047e7f5.jpg",Ue="/assets/phone.b80392b0.png",Re="/assets/negocios.952bd717.png",Fe="/assets/business.827641a1.png",De="/assets/governanca.1c05d9ad.png",Me="/assets/governance.1b3908fc.png",He="/assets/pessoas.f2ea3a96.png",Ge="/assets/people.0d481502.png",B="/assets/equipe.c0104f36.png",U="/assets/notebook.89b30921.jpg",R="/assets/maos.e1888400.jpg",We="/assets/sorriso.df72db48.jpeg",ze="/assets/reuniao.26fbaa92.jpg",Je="/assets/Joao.8b3868c4.png",Qe="/assets/eduardo.18a47085.png",Ke="/assets/Nilton.3a34890f.png",Xe="/assets/somosubyusretangulo-150x150.91c86cba.jpg",Ye="/assets/somosUbyUs2.65991518.png";z.use([J,Q,K]);const Ze={components:{Menu:Oe,Swiper:X,SwiperSlide:Y,Waypoint:Z.exports.Waypoint},setup(){const a=$("lang"),{lang:n,placeholderNameContact:d}=a,o=$("email"),{inputsEmail:c,sendEmail:u,statusSendmail:i}=o,_=C({titlesVisibles:{}}),h=y=>{console.log(y)},b=()=>{console.log("slide change")};function g(y){if(console.log(y.el.id),y.going=="IN"){const f=y.el.id;_.titlesVisibles[f]="zoomIn"}else{const f=y.el.id;_.titlesVisibles[f]=""}console.log(y.going)}return E({lang:n,placeholderNameContact:d,onSwiper:h,onSlideChange:b,inputsEmail:c,sendEmail:u,statusSendmail:i,viewHandler:g},N(_))}},es={class:"flex bg-white justify-center"},ss={class:"w-full tab:w-10/12 lap:w-10/12 des:w-8/12 ult:w-1/2 bg-white"},ts=e("section",{id:"home"},null,-1),os={class:"flex py-1 justify-between border-b border-gray-100 text-gray-400"},ns=e("div",{class:"mx-auto tab:mx-0"},[e("a",{href:"/"},[e("img",{src:q,alt:"ubyus",width:"200"})])],-1),as={class:"painelvideoDiv border border-gray-100 bg-gray-50"},is={class:"flex justify-center center"},ls={class:""},cs={key:0,src:Pe,alt:"ubyus",class:"mx-auto w-full tab:w-full lap:w-1/2 des:w-full"},rs={key:1,src:qe,alt:"ubyus",class:"mx-auto w-full tab:w-full lap:w-1/2 des:w-full"},ds={id:"oquenosmove"},us={key:0},_s={key:1},ms={class:"flex flex-wrap center py-5 justify-between"},ps={class:"w-full lap:w-1/2 des:w-1/2 tab:w-1/2 text-justify px-5"},hs={key:0},gs=p(" UbyUS expressa o princ\xEDpio de REPRESENTATIVIDADE, materializado por rela\xE7\xF5es sinceras, profissionais e perenes com nossos clientes. "),fs=e("br",null,null,-1),vs=p("O cliente (\u201Cyou\u201D) passa a ser representado pela nossa organiza\xE7\xE3o com suas demandas e anseios sendo incorporados por n\xF3s (\u201Cby us\u201D) contando com a nossa PRESEN\xC7A efetiva em todas as etapas do Projeto. "),xs=e("br",null,null,-1),ys=p("Temos como prop\xF3sito a l\xF3gica COLABORATIVA no desenvolvimento dos neg\xF3cios, buscando DIVERSIDADE nas intelig\xEAncias e recursos aplicados, assegurando o aprendizado cont\xEDnuo e a INOVA\xC7\xC3O constante de nossas solu\xE7\xF5es. "),bs=e("br",null,null,-1),ws=p("Para n\xF3s da UbyUS, \xE9 essencial que nossa atua\xE7\xE3o represente uma contribui\xE7\xE3o para a constru\xE7\xE3o de um mundo cada vez mais plural, solid\xE1rio e humano. "),Es=[gs,fs,vs,xs,ys,bs,ws],Ss={key:1},ks=p(" UbyUS expresses the principle of REPRESENTATIVENESS, achieved through sincere, professional and enduring relationships with our clients. "),Ns=e("br",null,null,-1),Cs=p("The client (\u201Cyou\u201D) is represented by our organization, with your demands and desires being incorporated \u201Cby us,\u201D relying on our effective PRESENCE in all stages of the Project "),$s=e("br",null,null,-1),As=p("Our purpose is to form COLLABORATIVE logic in the development of businesses, seeking DIVERSITY in the intelligence and resources applied, ensuring continuous learning and the constant INNOVATION of our solutions. "),Ts=e("br",null,null,-1),Vs=p("For UbyUS, it is essential that our efforts represent a contribution to the construction of an increasingly plural, inclusive and human world. "),Is=[ks,Ns,Cs,$s,As,Ts,Vs],js=e("div",{class:"w-full lap:w-1/2 des:w-1/2 tab:w-1/2 text-justify px-5"},[e("img",{class:"object-contain h-full mx-auto",src:Be})],-1),Ls={id:"oqueentregamos"},Os={class:"bg-gray-50 p-5"},Ps={key:0},qs={key:1},Bs={key:0,class:"text-center mb-10"},Us=p(" Esses s\xE3o nossos Centros de Excel\xEAncia, com atua\xE7\xE3o junto a clientes do "),Rs=e("br",null,null,-1),Fs=p("mercado financeiro, tecnologia, ind\xFAstria, sa\xFAde, "),Ds=e("br",null,null,-1),Ms=p("varejo, infraestrutura, dentre outros. "),Hs=[Us,Rs,Fs,Ds,Ms],Gs={key:1,class:"text-center mb-10"},Ws=p(" These are our Centers of Excellence, working with clients in "),zs=e("br",null,null,-1),Js=p("the financial market, technology, industry, health, "),Qs=e("br",null,null,-1),Ks=p("retail and infrastructure segments, among others. "),Xs=[Ws,zs,Js,Qs,Ks],Ys=e("img",{src:Ue,width:"100%"},null,-1),Zs={id:"centrosdeexcelencia"},et={class:"py-5"},st={key:0},tt={key:1},ot={class:"flex justify-around"},nt={class:"w-full tab:w-full des:w-1/4 lap:w-1/3 tab:text-center lap:text-justify lap:pl-16 des:pl-7"},at={class:""},it={href:"#"},lt={key:0,src:Re,alt:"negocios",class:"tab:mx-auto lap:mx-0"},ct={key:1,src:Fe,class:"tab:mx-auto lap:mx-0",alt:"negocios"},rt={class:""},dt={class:"my-5"},ut={key:0},_t={key:1},mt={class:"my-5"},pt={key:0},ht={key:1},gt={class:"my-5"},ft={key:0},vt={key:1},xt={class:"my-5"},yt={key:0},bt={key:1},wt={class:"my-5"},Et={key:0},St={key:1},kt={class:"my-5"},Nt={key:0},Ct={key:1},$t={class:"w-full tab:w-full des:w-1/4 lap:w-1/3 tab:text-center lap:text-justify lap:pl-16 des:pl-7"},At={class:""},Tt={href:"#"},Vt={key:0,src:De,alt:"governanca",class:"tab:mx-auto lap:mx-0"},It={key:1,src:Me,class:"tab:mx-auto lap:mx-0",alt:"governanca"},jt={class:"my-5"},Lt={key:0},Ot={key:1},Pt={class:"my-5"},qt={key:0},Bt={key:1},Ut={class:"my-5"},Rt={key:0},Ft={key:1},Dt={class:"my-5"},Mt={key:0},Ht={key:1},Gt={class:"w-full tab:w-full des:w-1/4 lap:w-1/3 tab:text-center lap:text-justify lap:pl-16 des:pl-7"},Wt={class:"text-justify"},zt={href:"#"},Jt={key:0,src:He,alt:"pessoas",class:"tab:mx-auto lap:mx-0"},Qt={key:1,src:Ge,class:"tab:mx-auto lap:mx-0",alt:"pessoas"},Kt={class:"my-5"},Xt={key:0},Yt={key:1},Zt={class:"my-5"},eo={key:0},so={key:1},to={class:"my-5"},oo={key:0},no={key:1},ao={class:"my-5"},io={key:0},lo={key:1},co={id:"nossascompetencias"},ro={class:"bg-gray-50 py-5"},uo={key:0},_o={key:1},mo={class:"flex px-2 lap:px-40 tab:px-10"},po=e("div",{class:"overflow-hidden"},[e("img",{class:"rounded-md w-full",src:B})],-1),ho=e("div",null,[e("img",{class:"rounded-md w-auto",src:U})],-1),go=e("div",null,[e("img",{class:"rounded-md w-auto",src:R})],-1),fo=e("div",null,[e("img",{class:"rounded-md w-auto",src:We})],-1),vo=e("div",null,[e("img",{class:"rounded-md w-auto",src:ze})],-1),xo=e("div",null,[e("img",{class:"rounded-md",src:B})],-1),yo=e("div",null,[e("img",{class:"rounded-md",src:U})],-1),bo=e("div",null,[e("img",{class:"rounded-md",src:R})],-1),wo={class:"rodape px-2 lap:px-40 des:text-xl mt-5"},Eo={class:"flex"},So={key:0,class:"mx-1"},ko={key:1,class:"mx-1"},No={key:2,class:"mx-1"},Co={key:3,class:"mx-1"},$o={key:4,class:"mx-1"},Ao={key:5,class:"mx-1"},To={key:6,class:"mx-1"},Vo={key:7,class:"mx-1"},Io={key:8,class:"mx-1"},jo={key:9,class:"mx-1"},Lo={key:10,class:"mx-1"},Oo={key:11,class:"mx-1"},Po={key:12,class:"mx-1"},qo={key:13,class:"mx-1"},Bo={key:14,class:"mx-1"},Uo={key:15,class:"mx-1"},Ro={key:16,class:"mx-1"},Fo={key:17,class:"mx-1"},Do={key:18,class:"mx-1"},Mo={key:19,class:"mx-1"},Ho={key:20,class:"mx-1"},Go={key:21,class:"mx-1"},Wo={key:22,class:"mx-1"},zo={key:23,class:"mx-1"},Jo={key:24,class:"mx-1"},Qo={key:25,class:"mx-1"},Ko={class:"rodape2 px-20 text-justify lap:px-40 des:text-xl mb-10 mt-20"},Xo={key:0},Yo={key:1},Zo={id:"quemsomos"},en={class:"center bg-gray-100 py-5"},sn={key:0},tn={key:1},on=P('<div class="flex justify-center tab:justify-between px-2 des:text-xl"><div class="text-center mb-4 w-full lap:w-1/3"><div class><a href="#"><img class="mx-auto" src="'+Je+'" alt="Jo\xE3o" width="250px"></a></div><span class="text-xl text-gray-600 font-bold">Jo\xE3o Rached</span></div><div class="text-center mb-4 w-full lap:w-1/3"><div class><a href="#"><img class="mx-auto" src="'+Qe+'" alt="Eduardo" width="230px"></a></div><span class="text-xl text-gray-600 font-bold">Eduardo Beadle</span></div><div class="text-center mb-4 w-full lap:w-1/3"><div class><a href="#"><img class="mx-auto" src="'+Ke+'" alt="Nilton" width="225px"></a></div><span class="text-xl text-gray-600 font-bold">Nilton Junior</span></div></div>',1),nn={class:"flex justify-center py-10"},an={class:"slogan justify-center bg-white mx-auto"},ln={key:0,src:Xe},cn={key:1,src:Ye},rn={id:"contato"},dn={class:"bg-gray-100 py-10"},un={key:0},_n={key:1},mn={class:"cx-form flex justify-center"},pn={class:"w-full tab:w-full lap:w-1/3 tab-1/3"},hn={class:"flex"},gn={for:"nome",class:"label-tail text-left"},fn={key:0},vn={key:1},xn=e("span",{class:"text-red-600"},"*",-1),yn=["placeholder"],bn=e("label",{for:"nome",class:"label-tail text-left mt-1"},[p(" Email "),e("span",{class:"text-red-600"},"*")],-1),wn={for:"nome",class:"label-tail text-left mt-1"},En={key:0},Sn={key:1},kn=e("span",{class:"text-red-600"},"*",-1),Nn={key:0,class:"mt-4"},Cn={key:0},$n={key:1},An={key:1,class:"mt-1"},Tn={class:"flex alert alert-warning"},Vn={class:"w-full"},In={class:"text-center w-full"},jn=e("i",{class:"fas fa-circle-notch fa-spin mr-1"},null,-1),Ln={key:0},On={key:1},Pn=p(" ... "),qn={key:2,class:"mt-1"},Bn={class:"flex alert alert-success"},Un={class:"w-full text-center"},Rn={class:"text-center w-full"},Fn={key:0},Dn=p(" Agradecemos pela sua mensagem! "),Mn=e("br",null,null,-1),Hn=p("Em breve, a equipe da UbyUS Advisors entrar\xE1 em contato com voc\xEA! "),Gn=[Dn,Mn,Hn],Wn={key:1,class:"text-center"},zn=p(" Thanks for contacting us! "),Jn=e("br",null,null,-1),Qn=p("We will contact you soon. "),Kn=[zn,Jn,Qn],Xn={key:3,class:"mt-1"},Yn={class:"flex alert alert-error"},Zn={class:"w-full text-center"},ea={class:"text-center w-full"},sa={key:0},ta={key:1,class:"text-center"},oa=e("div",{class:"flex justify-center"},[e("div",{class:"slogan justify-center bg-white mx-auto my-20"},[e("a",{href:"#home"},[e("img",{src:q,alt:"ubyus"})])])],-1),na={class:"flex justify-center bg-gray-600"},aa={class:"w-full tab:w-10/12 lap:w-10/12 des:w-8/12 ult:w-1/2"},ia={class:"py-5 text-white px-4"},la=P('<div class="flex justify-between my-5"><div class="w-full lap:w-1/3 text-center"><p> Avenida Dr. Chucri Zaidan, 1550 \u2013 cj. 1508 <br>Vila S\xE3o Francisco \u2013 S\xE3o Paulo / SP <br>CEP: 04711-130 </p></div><div class="w-full lap:w-1/3 text-center"><p><a href="mailto:contato@ubyusadvisors.com"><span class="boldwhite">contato@ubyusadvisors.com</span></a></p></div><div class="w-full lap:w-1/3 text-center"><p>S\xE3o Paulo / SP \u2013 Brasil</p></div></div><div class="flex justify-center my-4"><div class="text-2xl"><a href="https://www.linkedin.com/company/ubyus-advisors/?originalSubdomain=br"><i class="text-2xl mx-4 fab fa-linkedin"></i></a></div></div><div class="my-4 border border-gray-500"></div>',3),ca={class:"flex center"},ra=e("div",{class:"flex center my-10"},[e("p",null,"Copyright \xA9 UbyUS")],-1);function da(a,n,d,o,c,u){const i=m("Menu"),_=m("Waypoint"),h=m("swiper-slide"),b=m("swiper");return s(),t(V,null,[e("div",es,[e("div",ss,[ts,e("div",os,[ns,l(i)]),e("div",as,[e("div",is,[e("div",ls,[o.lang=="portugues"?(s(),t("img",cs)):(s(),t("img",rs))])])]),e("section",ds,[l(_,{onChange:o.viewHandler,tag:"h2",id:"titleoquenosmove",class:v(`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${a.titlesVisibles.titleoquenosmove}`)},{default:r(()=>[o.lang=="portugues"?(s(),t("span",us,"O que nos move")):(s(),t("span",_s,"What Move Us"))]),_:1},8,["onChange","class"]),e("div",ms,[e("div",ps,[o.lang=="portugues"?(s(),t("p",hs,Es)):(s(),t("p",Ss,Is))]),js])]),e("section",Ls,[e("div",Os,[l(_,{onChange:o.viewHandler,tag:"h2",id:"titleoqueentregamos",class:v(`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${a.titlesVisibles.titleoqueentregamos}`)},{default:r(()=>[o.lang=="portugues"?(s(),t("span",Ps,"O que entregamos")):(s(),t("span",qs,"What we deliver"))]),_:1},8,["onChange","class"]),o.lang=="portugues"?(s(),t("p",Bs,Hs)):(s(),t("p",Gs,Xs))]),Ys]),e("section",Zs,[e("div",et,[l(_,{onChange:o.viewHandler,tag:"h2",id:"titlecentrosexcelencia",class:v(`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${a.titlesVisibles.titlecentrosexcelencia}`)},{default:r(()=>[o.lang=="portugues"?(s(),t("span",st,"Centros de excel\xEAncia")):(s(),t("span",tt,"Centers of Excellence"))]),_:1},8,["onChange","class"]),e("div",ot,[e("div",nt,[e("div",at,[e("a",it,[o.lang=="portugues"?(s(),t("img",lt)):(s(),t("img",ct))]),e("div",rt,[e("p",dt,[o.lang=="portugues"?(s(),t("span",ut," Fus\xF5es e Aquisi\xE7\xF5es (M&A) ")):(s(),t("span",_t,"Mergers and Acquisitions (M&A)"))]),e("p",mt,[o.lang=="portugues"?(s(),t("span",pt," Estrutura\xE7\xE3o de Neg\xF3cios ")):(s(),t("span",ht,"Business Structuring"))]),e("p",gt,[o.lang=="portugues"?(s(),t("span",ft,"Turnaround")):(s(),t("span",vt,"Turnaround"))]),e("p",xt,[o.lang=="portugues"?(s(),t("span",yt," Efici\xEAncia em Processos e Custos ")):(s(),t("span",bt,"Process & Cost Efficiency"))]),e("p",wt,[o.lang=="portugues"?(s(),t("span",Et," Planejamento Estrat\xE9gico ")):(s(),t("span",St,"Strategic Planning"))]),e("p",kt,[o.lang=="portugues"?(s(),t("span",Nt," Avalia\xE7\xE3o de Empresas ")):(s(),t("span",Ct,"Company Valuation"))])])])]),e("div",$t,[e("div",At,[e("a",Tt,[o.lang=="portugues"?(s(),t("img",Vt)):(s(),t("img",It))]),e("div",null,[e("p",jt,[o.lang=="portugues"?(s(),t("span",Lt,"Ambiental, Social e Governan\xE7a (ESG)")):(s(),t("span",Ot,"Environmental, Social and Governance (ESG)"))]),e("p",Pt,[o.lang=="portugues"?(s(),t("span",qt,"Conselho")):(s(),t("span",Bt,"Board"))]),e("p",Ut,[o.lang=="portugues"?(s(),t("span",Rt,"Estrutura de Governan\xE7a")):(s(),t("span",Ft,"Governance Structure"))]),e("p",Dt,[o.lang=="portugues"?(s(),t("span",Mt,"Gest\xE3o de Crise")):(s(),t("span",Ht,"Crisis Management"))])])])]),e("div",Gt,[e("div",Wt,[e("a",zt,[o.lang=="portugues"?(s(),t("img",Jt)):(s(),t("img",Qt))]),e("div",null,[e("p",Kt,[o.lang=="portugues"?(s(),t("span",Xt,"Recursos Humanos")):(s(),t("span",Yt,"Human Resources"))]),e("p",Zt,[o.lang=="portugues"?(s(),t("span",eo,"Rela\xE7\xF5es Sindicais e Trabalhistas")):(s(),t("span",so,"Labor and Union Relations"))]),e("p",to,[o.lang=="portugues"?(s(),t("span",oo,"Cultura Organizacional")):(s(),t("span",no,"Organizational Culture"))]),e("p",ao,[o.lang=="portugues"?(s(),t("span",io,"Desenvolvimento de Pessoas")):(s(),t("span",lo,"People Development"))])])])])])])]),e("section",co,[e("div",ro,[l(_,{onChange:o.viewHandler,tag:"h2",id:"titlenossascompetencias",class:v(`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${a.titlesVisibles.titlenossascompetencias}`)},{default:r(()=>[o.lang=="portugues"?(s(),t("span",uo,"Nossas compet\xEAncias")):(s(),t("span",_o,"Our Skills"))]),_:1},8,["onChange","class"]),e("div",mo,[l(b,{slidesPerView:4,spaceBetween:15,slidesPerGroup:4,autoplay:{delay:6e4,disableOnInteraction:!1},loop:!0,loopFillGroupWithBlank:!0,pagination:{clickable:!0},navigation:!0,class:"mySwiper"},{default:r(()=>[l(h,null,{default:r(()=>[po]),_:1}),l(h,null,{default:r(()=>[ho]),_:1}),l(h,null,{default:r(()=>[go]),_:1}),l(h,null,{default:r(()=>[fo]),_:1}),l(h,null,{default:r(()=>[vo]),_:1}),l(h,null,{default:r(()=>[xo]),_:1}),l(h,null,{default:r(()=>[yo]),_:1}),l(h,null,{default:r(()=>[bo]),_:1})]),_:1})]),e("div",wo,[e("ul",Eo,[o.lang=="portugues"?(s(),t("li",So,"\u2022 Experi\xEAncia")):(s(),t("li",ko,"\u2022 Experience")),o.lang=="portugues"?(s(),t("li",No,"\u2022 Conhecimento")):(s(),t("li",Co,"\u2022 Knowledge")),o.lang=="portugues"?(s(),t("li",$o,"\u2022 Vis\xE3o")):(s(),t("li",Ao,"\u2022 Vision")),o.lang=="portugues"?(s(),t("li",To,"\u2022 Relacionamento")):(s(),t("li",Vo,"\u2022 Relationship")),o.lang=="portugues"?(s(),t("li",Io,"\u2022 Planning")):(s(),t("li",jo,"\u2022 Relationship")),o.lang=="portugues"?(s(),t("li",Lo,"\u2022 Parceria")):(s(),t("li",Oo,"\u2022 Partnership")),o.lang=="portugues"?(s(),t("li",Po,"\u2022 Colabora\xE7\xE3o")):(s(),t("li",qo,"\u2022 Collaboration")),o.lang=="portugues"?(s(),t("li",Bo,"\u2022 Interlocu\xE7\xE3o")):(s(),t("li",Uo,"\u2022 Interlocution")),o.lang=="portugues"?(s(),t("li",Ro,"\u2022 Inova\xE7\xE3o")):(s(),t("li",Fo,"\u2022 Innovation")),o.lang=="portugues"?(s(),t("li",Do,"\u2022 Constru\xE7\xE3o")):(s(),t("li",Mo,"\u2022 Construction")),o.lang=="portugues"?(s(),t("li",Ho,"\u2022 Transforma\xE7\xE3o")):(s(),t("li",Go,"\u2022 Transformation")),o.lang=="portugues"?(s(),t("li",Wo,"\u2022 Execu\xE7\xE3o")):(s(),t("li",zo,"\u2022 Execution")),o.lang=="portugues"?(s(),t("li",Jo,"\u2022 Resultado")):(s(),t("li",Qo,"\u2022 Results"))])]),e("div",Ko,[o.lang=="portugues"?(s(),t("p",Xo," Na UbyUS Advisors reunimos as diferentes compet\xEAncias obtidas ao longo de nossas hist\xF3rias e as aplicamos em nossas solu\xE7\xF5es. Contudo, muito al\xE9m das nossas hist\xF3rias, habilidades e compet\xEAncias, o que nos importa \xE9 compartilh\xE1-las com nossos clientes, produzindo solu\xE7\xF5es equilibradas e resultados sustent\xE1veis. Nossa equipe est\xE1 pronta para o seu pr\xF3ximo desafio! ")):(s(),t("p",Yo," At UbyUS Advisors, we combine different skill sets, acquired over the course of our individual careers, and apply them to our solutions. However, far beyond our career paths, skills, and competencies, what matters to us is sharing them with our clients, producing balanced solutions and sustainable results. Our team is ready for your next challenge! "))])])]),e("section",Zo,[e("div",en,[l(_,{onChange:o.viewHandler,tag:"h2",id:"titlequemsomos",class:v(`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${a.titlesVisibles.titlequemsomos}`)},{default:r(()=>[o.lang=="portugues"?(s(),t("span",sn,"Quem Somos")):(s(),t("span",tn,"Who We Are"))]),_:1},8,["onChange","class"]),on])]),e("div",nn,[e("div",an,[o.lang=="portugues"?(s(),t("img",ln)):(s(),t("img",cn))])]),e("section",rn,[e("div",dn,[l(_,{onChange:o.viewHandler,tag:"h2",id:"contato",class:v(`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${a.titlesVisibles.contato}`)},{default:r(()=>[o.lang=="portugues"?(s(),t("span",un,"Contato")):(s(),t("span",_n,"Contact"))]),_:1},8,["onChange","class"]),e("div",mn,[e("div",pn,[e("div",hn,[e("label",gn,[o.lang=="portugues"?(s(),t("span",fn,"Nome")):(s(),t("span",vn,"Name")),xn]),A(e("input",{class:"mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",id:"nome",name:"nome",placeholder:o.placeholderNameContact,"onUpdate:modelValue":n[0]||(n[0]=g=>o.inputsEmail.name=g)},null,8,yn),[[T,o.inputsEmail.name]]),bn,A(e("input",{class:"mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"email",id:"email",name:"email",placeholder:"E-mail","onUpdate:modelValue":n[1]||(n[1]=g=>o.inputsEmail.email=g)},null,512),[[T,o.inputsEmail.email]]),e("label",wn,[o.lang=="portugues"?(s(),t("span",En,"Mensagem")):(s(),t("span",Sn,"Message")),kn]),A(e("textarea",{class:"mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"mensagem",name:"mensagem",style:{height:"100px"},"onUpdate:modelValue":n[2]||(n[2]=g=>o.inputsEmail.message=g)},null,512),[[T,o.inputsEmail.message]])]),o.statusSendmail=="disponivelEnvioEmail"||o.statusSendmail=="enviadoComSuccesso"?(s(),t("div",Nn,[o.lang=="portugues"?(s(),t("span",Cn,[e("button",{class:"btn btn-sm border-whitetheme-50 btn-warning-tail bg-whitetheme-50",onClick:n[3]||(n[3]=g=>o.sendEmail())},"ENVIAR")])):(s(),t("span",$n,[e("button",{class:"btn btn-sm border-whitetheme-50 btn-warning-tail bg-whitetheme-50",onClick:n[4]||(n[4]=g=>o.sendEmail())},"SEND")]))])):S("",!0),o.statusSendmail=="enviandoEmail"?(s(),t("div",An,[e("div",Tn,[e("div",Vn,[e("label",In,[jn,o.lang=="portugues"?(s(),t("span",Ln,"Enviando e-mail, por favor aguarde")):(s(),t("span",On,"Sending email, please wait")),Pn])])])])):S("",!0),o.statusSendmail=="enviadoComSuccesso"?(s(),t("div",qn,[e("div",Bn,[e("div",Un,[e("label",Rn,[o.lang=="portugues"?(s(),t("span",Fn,Gn)):(s(),t("span",Wn,Kn))])])])])):S("",!0),o.statusSendmail=="erroAoEnviarEmail"?(s(),t("div",Xn,[e("div",Yn,[e("div",Zn,[e("label",ea,[o.lang=="portugues"?(s(),t("span",sa,"Erro ao enviar e-mail, por favor entre em contato atr\xE1vez do e-mail contato@ubyus.com.br")):(s(),t("span",ta,"Error when sending e-mail, please contact us via e-mail contato@ubyus.com.br"))])])])])):S("",!0)])])])]),oa])]),e("div",na,[e("div",aa,[e("div",ia,[la,e("div",ca,[l(i)]),ra])])])],64)}var ua=x(Ze,[["render",da]]);const _a={name:"Home",data(){return{notifications:[],showModal:!1,inputText:"Texto usando input",inputNumber:15,inputSelect:"",optionsSelect:[{value:"",name:"Selecione uma das op\xE7\xF5es",disabled:!0,selected:!0},{value:1,name:"N\xFAmero 1"},{value:2,name:"N\xFAmero 2"},{value:"N\xFAmero 3",name:"N\xFAmero 3"}]}},methods:{methodSelect(){console.log(`Meu n\xFAmero \xE9: ${this.inputNumber} e meu select \xE9 ${this.inputSelect}`)},removeNotification(){this.notifications=[]},addNotification(){this.notifications.push({body:"corpo do titulo",title:"Toast Notification",color:"red"})}}},ma={class:"flex"},pa={class:"w-1/2 pr-1"},ha=e("div",null,"Buttons",-1),ga={class:"flex flex-wrap"},fa={class:"w-1/3 pr-1 mt-1"},va={class:"w-1/3 pr-1 mt-1"},xa={class:"w-1/3 pr-1 mt-1"},ya={class:"w-1/3 pr-1 mt-1"},ba={class:"w-1/3 pr-1 mt-1"},wa={class:"w-1/3 pr-1 mt-1"},Ea={class:"w-1/3 pr-1 mt-1"},Sa={class:"w-1/2"},ka=e("div",null,"Dropdown",-1),Na={class:"w-1/3 pr-1 mt-1"},Ca=e("a",{class:"drop-item",href:"#"},"Action",-1),$a=e("a",{class:"drop-item",href:"#"},"Another action",-1),Aa=e("a",{class:"drop-item",href:"#"},"Something else here",-1),Ta={class:"w-1/3 pr-1 mt-1"},Va=e("a",{class:"drop-item",href:"#"},"Action",-1),Ia=e("a",{class:"drop-item",href:"#"},"Another action",-1),ja=e("a",{class:"drop-item",href:"#"},"Something else here",-1);function La(a,n,d,o,c,u){const i=m("SBtn"),_=m("SCard"),h=m("SDropdown");return s(),t("div",ma,[e("div",pa,[l(_,null,{header:r(()=>[ha]),body:r(()=>[e("div",ga,[e("div",fa,[l(i,{value:"<i class='far fa-file-alt'></i> Bot\xE3o Red",color:"red"})]),e("div",va,[l(i,{value:"Bot\xE3o Yellow",color:"yellow"})]),e("div",xa,[l(i,{value:"Bot\xE3o Blue",color:"blue"})]),e("div",ya,[l(i,{value:"Bot\xE3o Green",color:"green"})]),e("div",ba,[l(i,{value:"Bot\xE3o Gray",color:"gray"})]),e("div",wa,[l(i,{value:"Bot\xE3o Ice",color:"ice"})]),e("div",Ea,[l(i,{value:"Bot\xE3o Transparente",color:"btn"})])])]),_:1})]),e("div",Sa,[l(_,null,{header:r(()=>[ka]),body:r(()=>[e("div",Na,[l(h,{value:"Dropdown button"},{itens:r(()=>[Ca,$a,Aa]),_:1})]),e("div",Ta,[l(h,{value:"Dropdown button",color:"red"},{itens:r(()=>[Va,Ia,ja]),_:1})])]),_:1})])])}var Oa=x(_a,[["render",La]]);const Pa={name:"Home",data(){return{notifications:[],showModal:!1,inputText:"Texto usando input",inputNumber:15,inputSelect:"",optionsSelect:[{value:"",name:"Selecione uma das op\xE7\xF5es",disabled:!0,selected:!0},{value:1,name:"N\xFAmero 1"},{value:2,name:"N\xFAmero 2"},{value:"N\xFAmero 3",name:"N\xFAmero 3"}]}},methods:{methodSelect(){console.log(`Meu n\xFAmero \xE9: ${this.inputNumber} e meu select \xE9 ${this.inputSelect}`)},removeNotification(){this.notifications=[]},addNotification(){this.notifications.push({body:"corpo do titulo",title:"Toast Notification",color:"red"})}}},qa={class:"flex"},Ba={class:"w-1/2 pr-1"},Ua=e("div",null,"Callouts",-1),Ra={class:"flex flex-wrap"},Fa={class:"w-1/2 pr-1 mt-2"},Da={class:"w-1/2 pr-1 mt-2"},Ma={class:"w-1/2 pr-1 mt-2"},Ha={class:"w-1/2 pr-1 mt-2"},Ga={class:"w-1/2 pr-1"},Wa=e("div",null,"Toast",-1);function za(a,n,d,o,c,u){const i=m("SCallout"),_=m("SCard"),h=m("SToast"),b=m("SBtn");return s(),t("div",qa,[e("div",Ba,[l(_,null,{header:r(()=>[Ua]),body:r(()=>[e("div",Ra,[e("div",Fa,[l(i,{value:"Callout Red",color:"red"})]),e("div",Da,[l(i,{value:"Callout yellow",color:"yellow"})]),e("div",Ma,[l(i,{value:"Callout Green",color:"green"})]),e("div",Ha,[l(i,{value:"Callout Blue",color:"blue"})])])]),_:1})]),e("div",Ga,[l(_,null,{header:r(()=>[Wa]),body:r(()=>[l(h,{notifications:c.notifications},null,8,["notifications"]),l(b,{value:"Adicionar notifications",color:"green",onClick:n[0]||(n[0]=g=>u.addNotification()),class:"my-1"}),l(b,{value:"Excluir notifications",color:"red",onClick:n[1]||(n[1]=g=>u.removeNotification())})]),_:1})])])}var Ja=x(Pa,[["render",za]]);const Qa={name:"Home",data(){return{notifications:[],showModal:!1,inputText:"Texto usando input",inputNumber:15,inputSelect:"",optionsSelect:[{value:"",name:"Selecione uma das op\xE7\xF5es",disabled:!0,selected:!0},{value:1,name:"N\xFAmero 1"},{value:2,name:"N\xFAmero 2"},{value:"N\xFAmero 3",name:"N\xFAmero 3"}]}},methods:{methodSelect(){console.log(`Meu n\xFAmero \xE9: ${this.inputNumber} e meu select \xE9 ${this.inputSelect}`)},removeNotification(){this.notifications=[]},addNotification(){this.notifications.push({body:"corpo do titulo",title:"Toast Notification",color:"red"})}}},Ka={class:"flex"},Xa={class:"w-full md:w-1/2 pr-1"},Ya=e("div",null,"Card",-1),Za=e("p",null," I Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitiosum est enim in dividendo partem in genere numerare. Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. At vero illa, quae Peripatetici, quae Stoici dicunt, se ",-1),ei=e("p",null," Duo Reges: constructio interrete. Quid est, quod ab ea absolvi et perfici debeat? Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. ",-1);function si(a,n,d,o,c,u){const i=m("SCard");return s(),t("div",Ka,[e("div",Xa,[l(i,null,{header:r(()=>[Ya]),body:r(()=>[Za]),footer:r(()=>[ei]),_:1})])])}var ti=x(Qa,[["render",si]]);const oi={name:"Home",data(){return{notifications:[],showModal:!1,inputText:"Texto usando input",inputEmail:"jorgeserranojunior@gmail.com",inputNumber:15,inputSelect:"",optionsSelect:[{value:"",name:"Selecione uma das op\xE7\xF5es",disabled:!0,selected:!0},{value:1,name:"N\xFAmero 1"},{value:2,name:"N\xFAmero 2"},{value:"N\xFAmero 3",name:"N\xFAmero 3"}]}},methods:{methodSelect(){console.log(`Meu n\xFAmero \xE9: ${this.inputNumber} e meu select \xE9 ${this.inputSelect}`)},removeNotification(){this.notifications=[]},addNotification(){this.notifications.push({body:"corpo do titulo",title:"Toast Notification",color:"red"})}}},ni={class:"flex"},ai={class:"w-1/2 pr-1"},ii=e("div",null,"Form",-1),li={class:"w-1/2 mt-2"},ci=e("div",null,"Retorno Inputs",-1),ri={class:"flex"},di={class:"w-1/2 mt-2 pr-1"},ui=e("div",null,"Fun\xE7\xF5es",-1);function _i(a,n,d,o,c,u){const i=m("SInputT"),_=m("SInputE"),h=m("SInputN"),b=m("SInputS"),g=m("SCard"),y=m("SBtn");return s(),t(V,null,[e("div",ni,[e("div",ai,[l(g,null,{header:r(()=>[ii]),body:r(()=>[l(i,{name:"SName",modelValue:c.inputText,"onUpdate:modelValue":n[0]||(n[0]=f=>c.inputText=f)},null,8,["modelValue"]),l(_,{name:"SEmail",modelValue:c.inputEmail,"onUpdate:modelValue":n[1]||(n[1]=f=>c.inputEmail=f)},null,8,["modelValue"]),l(h,{name:"SNumber",modelValue:c.inputNumber,"onUpdate:modelValue":n[2]||(n[2]=f=>c.inputNumber=f)},null,8,["modelValue"]),l(b,{name:"SSelect",modelValue:c.inputSelect,"onUpdate:modelValue":n[3]||(n[3]=f=>c.inputSelect=f),options:c.optionsSelect,change:u.methodSelect},null,8,["modelValue","options","change"])]),_:1})]),e("div",li,[l(g,{class:"mt-2"},{header:r(()=>[ci]),body:r(()=>[p(k(c.inputText)+" - "+k(c.inputNumber)+" - "+k(c.inputSelect),1)]),_:1})])]),e("div",ri,[e("div",di,[l(g,null,{header:r(()=>[ui]),body:r(()=>[l(y,{color:"blue",onClick:n[4]||(n[4]=f=>c.inputNumber=155),value:"Mudar Valor Number"})]),_:1})])])],64)}var mi=x(oi,[["render",_i]]);const pi={name:"Home",data(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],notifications:[],showModal:!1,inputText:"Texto usando input",inputNumber:15,inputSelect:"",optionsSelect:[{value:"",name:"Selecione uma das op\xE7\xF5es",disabled:!0,selected:!0},{value:1,name:"N\xFAmero 1"},{value:2,name:"N\xFAmero 2"},{value:"N\xFAmero 3",name:"N\xFAmero 3"}]}},methods:{methodSelect(){console.log(`Meu n\xFAmero \xE9: ${this.inputNumber} e meu select \xE9 ${this.inputSelect}`)},removeNotification(){this.notifications=[]},addNotification(){this.notifications.push({body:"corpo do titulo",title:"Toast Notification",color:"red"})}}},w=a=>(ee("data-v-7b56a0f4"),a=a(),se(),a),hi={class:"flex"},gi={class:"w-full pr-1"},fi=w(()=>e("div",null,"Table",-1)),vi=p(" > "),xi=w(()=>e("tr",{class:"text-left"},[e("th",null,"#"),e("th",null,"Nome"),e("th",null,"Endere\xE7o")],-1)),yi=w(()=>e("tr",null,[e("td",null,"1"),e("td",null,"Jorge"),e("td",null,"No. 189, Grove St, Los Angeles")],-1)),bi=w(()=>e("tr",null,[e("td",null,"2"),e("td",null,"Serrano"),e("td",null,"No. 189, Grove St, Los Angeles")],-1)),wi=w(()=>e("tr",null,[e("td",null,"3"),e("td",null,"Serrano"),e("td",null,"No. 189, Grove St, Los Angeles")],-1)),Ei=w(()=>e("tr",null,[e("td",null,"4"),e("td",null,"Serrano"),e("td",null,"No. 189, Grove St, Los Angeles")],-1));function Si(a,n,d,o,c,u){const i=m("STable"),_=m("SCard");return s(),t("div",hi,[e("div",gi,[l(_,null,{header:r(()=>[fi]),body:r(()=>[l(i,{class:"table-border-r"},{header:r(()=>[xi]),body:r(()=>[yi,bi,wi,Ei]),default:r(()=>[vi]),_:1})]),_:1})])])}var ki=x(pi,[["render",Si],["__scopeId","data-v-7b56a0f4"]]);const Ni={name:"Print",props:{classPrint:{type:String,require:!1,default:""},classHeader:{type:String,require:!1,default:"print"},classBody:{type:String,require:!1,default:"print"},classFooter:{type:String,require:!1,default:"print"}}},Ci={cellspacing:"0"};function $i(a,n,d,o,c,u){return s(),t("div",{class:v(d.classPrint)},[e("table",Ci,[e("thead",null,[e("tr",null,[e("td",{class:v(d.classHeader)},[I(a.$slots,"header",{},void 0,!0)],2)])]),e("tbody",null,[e("tr",null,[e("td",{class:v(d.classBody)},[I(a.$slots,"body",{},void 0,!0)],2)])]),e("tfoot",null,[e("tr",null,[e("td",{class:v(d.classFooter)},[I(a.$slots,"footer",{},void 0,!0)],2)])])])],2)}var Ai=x(Ni,[["render",$i],["__scopeId","data-v-85724f14"]]);const Ti={name:"Prints",data(){return{itens:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}},components:{Print:Ai}},Vi={class:"flex"},Ii={class:"w-full pr-1"},ji=e("div",null,[e("img",{src:"https://wilcity.com/wp-content/uploads/2020/03/39875853-header-wallpapers.jpg",alt:""})],-1),Li=e("td",null,"Teste",-1),Oi=e("td",null,"03/12/2007",-1),Pi=e("td",null,"Verificando tamanho quando imprimir",-1),qi=e("td",null,"OH",-1),Bi=e("div",null,[e("img",{src:"https://carbonmade-media.accelerator.net/36695034;960x320.jpeg",alt:""})],-1);function Ui(a,n,d,o,c,u){const i=m("Print");return s(),t("div",Vi,[e("div",Ii,[l(i,{classBody:"showprint"},{header:r(()=>[ji]),body:r(()=>[(s(!0),t(V,null,te(c.itens,(_,h)=>(s(),t("tr",{key:_},[Li,Oi,Pi,e("td",null,k(h),1),qi]))),128))]),footer:r(()=>[Bi]),_:1})])])}var Ri=x(Ti,[["render",Ui]]);const Fi=[{path:"/",name:"home",component:ua},{path:"/buttons",name:"buttons",component:Oa},{path:"/notifications",name:"notifications",component:Ja},{path:"/cards",name:"cards",component:ti},{path:"/forms",name:"forms",component:mi},{path:"/tables",name:"tables",component:ki},{path:"/prints",name:"prints",component:Ri}],Di=oe({history:ne(),routes:Fi});ae(_e).use(Di).mount("#app");
