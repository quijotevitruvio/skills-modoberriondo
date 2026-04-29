"use strict";(()=>{var ct=["Gemini 3.1 Pro (High)","Gemini 3.1 Pro (Low)","Gemini 3 Flash","Claude Sonnet 4.6 (Thinking)","Claude Opus 4.6 (Thinking)","GPT-OSS 120B (Medium)","Gemini 3 Pro Image"],lt=["MODEL_PLACEHOLDER_M37","MODEL_PLACEHOLDER_M36","MODEL_PLACEHOLDER_M18","MODEL_PLACEHOLDER_M35","MODEL_PLACEHOLDER_M26","MODEL_OPENAI_GPT_OSS_120B_MEDIUM","MODEL_PLACEHOLDER_M9"],Pt=["MODEL_CHAT_20706","MODEL_CHAT_23310","MODEL_GOOGLE_GEMINI_2_5_FLASH","MODEL_GOOGLE_GEMINI_2_5_FLASH_THINKING","MODEL_GOOGLE_GEMINI_2_5_FLASH_LITE","MODEL_GOOGLE_GEMINI_2_5_PRO","MODEL_PLACEHOLDER_M19"];function Ht({vscode:h,i18n:T,dom:$e,historyState:m,authorizationStatusGetter:se}){let{historyAccountSelect:N,historyModelSelect:H,historyRangeButtons:ce,historyCanvas:ae,historyEmpty:le,historyMetricLabel:Le,historySummary:ue,historyTableBody:Me,historyTableEmpty:ge,historyPrevBtn:he,historyNextBtn:ve,historyPageInfo:Ie}=$e;function ke(){N&&N.addEventListener("change",()=>{m.selectedEmail=N.value||null,m.page=1,fe()}),H&&H.addEventListener("change",()=>{m.selectedModelId=H.value||null,m.page=1,fe()}),ce.forEach(S=>{S.addEventListener("click",()=>{let W=be(parseInt(S.dataset.range||"",10));m.rangeDays!==W&&(m.rangeDays=W,b(),m.page=1,fe())})});let d=document.getElementById("history-clear-btn"),l=document.getElementById("history-clear-modal"),p=document.getElementById("history-clear-this-btn"),$=document.getElementById("history-clear-all-btn"),Q=document.getElementById("history-clear-cancel"),F=document.getElementById("history-clear-close");d&&l&&d.addEventListener("click",()=>{if(m.selectedEmail){let S=document.getElementById("history-clear-message");S&&(S.textContent=(T["history.clearConfirm"]||"Are you sure you want to clear quota history for {email}?").replace("{email}",m.selectedEmail)),p&&(p.textContent=`\u{1F5D1}\uFE0F ${T["history.clearThis"]||"Clear This Account"}`),l.classList.remove("hidden")}});let U=()=>{l&&l.classList.add("hidden")};F&&F.addEventListener("click",U),Q&&Q.addEventListener("click",U),p&&p.addEventListener("click",()=>{m.selectedEmail&&(h.postMessage({command:"clearHistorySingle",email:m.selectedEmail}),U())}),$&&$.addEventListener("click",()=>{h.postMessage({command:"clearHistoryAll"}),U()}),he&&he.addEventListener("click",()=>{m.page>1&&(m.page-=1,z())}),ve&&ve.addEventListener("click",()=>{m.page+=1,z()}),b()}function pe(){if(!Ee()){m.needsRender=!0;return}R()}function be(d){return typeof d!="number"||!Number.isFinite(d)||d<=0?7:d<=1?1:d<=7?7:30}function Ee(){let d=document.getElementById("tab-history");return!!(d&&d.classList.contains("active"))}function Ne(){let d=se?.()?.activeAccount;d&&(m.selectedEmail=d),b(),L(),B(),fe(),m.needsRender&&(R(),z())}function fe(){if(!ae||!Ee())return;let d=be(m.rangeDays);m.rangeDays=d,h.postMessage({command:"quotaHistory.get",email:m.selectedEmail||void 0,modelId:m.selectedModelId||void 0,rangeDays:d})}function Se(){fe()}function n(d){let l=d||{},p=Array.isArray(l.accounts)?l.accounts:[];m.accounts=p,m.models=Array.isArray(l.models)?l.models:[],typeof l.rangeDays=="number"&&(m.rangeDays=be(l.rangeDays)),typeof l.email=="string"&&l.email.includes("@")&&(m.selectedEmail=l.email),typeof l.modelId=="string"&&(m.selectedModelId=l.modelId),m.points=Array.isArray(l.points)?l.points:[],m.page=1,L(),B(),b(),_(),Ee()?(R(),z()):m.needsRender=!0}function L(){if(!N)return;N.innerHTML="";let d=Array.isArray(m.accounts)?m.accounts:[];if(d.length===0){let p=document.createElement("option");p.value="",p.textContent=T["history.noAccounts"]||"No accounts",N.appendChild(p),N.disabled=!0,m.selectedEmail=null;return}let l=se?.()?.activeAccount;N.disabled=!1,d.forEach(p=>{let $=document.createElement("option");$.value=p;let Q=l&&p===l;$.textContent=Q?`\u2705 ${p}`:p,N.appendChild($)}),m.selectedEmail&&d.includes(m.selectedEmail)?N.value=m.selectedEmail:l&&d.includes(l)?(N.value=l,m.selectedEmail=l):(m.selectedEmail=d[0],N.value=d[0])}function B(){if(!H)return;H.innerHTML="";let d=Array.isArray(m.models)?m.models:[];if(d.length===0){let p=document.createElement("option");p.value="",p.textContent=T["history.noModels"]||T["models.empty"]||"No models",H.appendChild(p),H.disabled=!0,m.selectedModelId=null;return}H.disabled=!1,d.forEach(p=>{let $=document.createElement("option");$.value=p.modelId,$.textContent=p.label||p.modelId,H.appendChild($)});let l=d.map(p=>p.modelId);(!m.selectedModelId||!l.includes(m.selectedModelId))&&(m.selectedModelId=d[0].modelId),H.value=m.selectedModelId||""}function b(){ce.forEach(d=>{be(parseInt(d.dataset.range||"",10))===m.rangeDays?d.classList.add("active"):d.classList.remove("active")})}function E(){let l=(Array.isArray(m.models)?m.models:[]).find(p=>p.modelId===m.selectedModelId);return l?.label||l?.modelId||""}function I(){return Array.isArray(m.points)?m.points.filter(d=>d&&typeof d.timestamp=="number"&&Number.isFinite(d.timestamp)&&typeof d.remainingPercentage=="number"&&Number.isFinite(d.remainingPercentage)).sort((d,l)=>d.timestamp-l.timestamp):[]}function _(){if(!Le||!ue)return;let d=E();d?Le.textContent=`${T["history.modelLabel"]||"Model"}: ${d}`:Le.textContent="";let l=I();if(l.length===0){ue.textContent="";return}let p=l[l.length-1],$=[];$.push(`${T["history.currentValue"]||"Current"}: ${K(p.remainingPercentage)}`),typeof p.resetTime=="number"&&Number.isFinite(p.resetTime)&&$.push(`${T["history.resetTime"]||"Reset"}: ${x(p.resetTime)}`),typeof p.countdownSeconds=="number"&&Number.isFinite(p.countdownSeconds)&&$.push(`${T["history.countdown"]||"Countdown"}: ${ee(p.countdownSeconds)}`),$.push(`${T["history.updatedAt"]||"Updated"}: ${x(p.timestamp)}`),ue.textContent=$.join(" \xB7 ")}function R(){if(!ae)return;if(!Ee()){m.needsRender=!0;return}let d=ae.getBoundingClientRect();if(d.width<=0||d.height<=0){m.needsRender=!0;return}m.needsRender=!1;let l=ae.getContext("2d");if(!l)return;let p=window.devicePixelRatio||1;ae.width=Math.max(1,Math.round(d.width*p)),ae.height=Math.max(1,Math.round(d.height*p)),l.setTransform(p,0,0,p,0,0),l.clearRect(0,0,d.width,d.height);let $=I(),Q=$.length>0;if(le){let A=m.accounts.length===0?T["history.noAccounts"]||"No accounts":m.models.length===0?T["history.noModels"]||"No models":T["history.noData"]||"No history yet.";le.textContent=A,le.classList.toggle("hidden",Q)}if(!Q)return;let F=d.width,U=d.height,S={left:52,right:20,top:20,bottom:42},W=Math.max(1,F-S.left-S.right),q=Math.max(1,U-S.top-S.bottom),re=Date.now(),de=be(m.rangeDays)*24*60*60*1e3,Ce=re-de,Te=re,ye=D("--accent","#2f81f7"),Be=D("--border-color","rgba(255,255,255,0.08)"),_e=D("--text-secondary","#8b949e");l.save(),l.strokeStyle=Be,l.lineWidth=1,l.setLineDash([4,4]);for(let A=0;A<=5;A++){let ne=S.top+q/5*A;l.beginPath(),l.moveTo(S.left,ne),l.lineTo(F-S.right,ne),l.stroke()}l.setLineDash([]),l.restore(),l.save(),l.fillStyle=_e,l.font=`11px ${D("--font-family","sans-serif")}`,l.textAlign="right",l.textBaseline="middle";let ze=Math.max(12,S.left-8);for(let A=0;A<=5;A++){let ne=100-A*20,Ae=S.top+q/5*A;l.fillText(`${ne}%`,ze,Ae)}l.restore(),l.save(),l.fillStyle=_e,l.font=`11px ${D("--font-family","sans-serif")}`,l.textBaseline="top",l.textAlign="center";let Ke=S.top+q+12,Ve=60,De=-1;[...$.map(A=>{let ne=(A.timestamp-Ce)/(Te-Ce);return{x:S.left+Math.min(1,Math.max(0,ne))*W,timestamp:A.timestamp}})].reverse().forEach((A,ne)=>{let Ae=ne===0,Pe=De===-1||De-A.x>=Ve;if(Ae||Pe){let we=new Date(A.timestamp),He=[];m.rangeDays<=1?He=[String(we.getHours()).padStart(2,"0")+":"+String(we.getMinutes()).padStart(2,"0")]:He=[String(we.getMonth()+1).padStart(2,"0")+"-"+String(we.getDate()).padStart(2,"0")];let Xe=He.join(" ");l.globalAlpha=.5,l.beginPath(),l.moveTo(A.x,S.top+q),l.lineTo(A.x,S.top+q+5),l.stroke(),l.globalAlpha=1,l.fillText(Xe,A.x,Ke),De=A.x}}),l.restore();let te=$.map(A=>{let ne=Math.min(100,Math.max(0,A.remainingPercentage)),Ae=(A.timestamp-Ce)/(Te-Ce),Pe=S.left+Math.min(1,Math.max(0,Ae))*W,we=S.top+(1-ne/100)*q;return{x:Pe,y:we,raw:A}});if(te.length===1){l.fillStyle=ye,l.beginPath(),l.arc(te[0].x,te[0].y,3,0,Math.PI*2),l.fill();return}l.save(),l.globalAlpha=.18,l.fillStyle=ye,l.beginPath(),l.moveTo(te[0].x,te[0].y),te.forEach(A=>l.lineTo(A.x,A.y)),l.lineTo(te[te.length-1].x,S.top+q),l.lineTo(te[0].x,S.top+q),l.closePath(),l.fill(),l.restore(),l.strokeStyle=ye,l.lineWidth=2,l.beginPath(),te.forEach((A,ne)=>{ne===0?l.moveTo(A.x,A.y):l.lineTo(A.x,A.y)}),l.stroke(),l.fillStyle=ye,te.forEach(A=>{l.beginPath(),l.arc(A.x,A.y,2,0,Math.PI*2),l.fill()});let je=te[te.length-1];l.beginPath(),l.arc(je.x,je.y,3.5,0,Math.PI*2),l.fill()}function z(){if(!Me||!Ie||!he||!ve)return;let d=I().slice().sort((W,q)=>q.timestamp-W.timestamp),l=d.filter((W,q)=>{let re=d[q+1];return re?W.remainingPercentage-re.remainingPercentage!==0:!0}),p=l.length,$=m.pageSize,Q=p>0?Math.ceil(p/$):0;if(p===0){Me.innerHTML="",ge&&(ge.textContent=T["history.tableEmpty"]||T["history.noData"]||"No data",ge.classList.remove("hidden")),Ie.textContent="",he.disabled=!0,ve.disabled=!0;return}ge&&ge.classList.add("hidden"),m.page=Math.min(Math.max(m.page,1),Q);let F=(m.page-1)*$,U=l.slice(F,F+$);Me.innerHTML=U.map((W,q)=>{let re=l[F+q+1],de=re?W.remainingPercentage-re.remainingPercentage:null,Ce=de===null?"--":j(de),Te=de===null?"neutral":de>0?"positive":de<0?"negative":"neutral";return`
                <tr>
                    <td>${x(W.timestamp)}</td>
                    <td>${K(W.remainingPercentage)}</td>
                    <td class="history-delta ${Te}">${Ce}</td>
                    <td>${x(W.resetTime)}</td>
                    <td>${ee(W.countdownSeconds)}</td>
                </tr>
            `}).join("");let S=T["history.pageInfo"]||"Page {current} / {total}";Ie.textContent=S.replace("{current}",String(m.page)).replace("{total}",String(Q)),he.disabled=m.page<=1,ve.disabled=m.page>=Q}function K(d){return typeof d!="number"||!Number.isFinite(d)?"--":`${Math.round(d*10)/10}%`}function j(d){if(typeof d!="number"||!Number.isFinite(d))return"--";let l=Math.round(d*10)/10;return`${l>0?"+":""}${l}%`}function ee(d){if(typeof d!="number"||!Number.isFinite(d))return"--";if(d<=0)return T["dashboard.online"]||"Restoring Soon";let l=Math.ceil(d/60);if(l<60)return`${l}m`;let p=Math.floor(l/60),$=l%60;if(p<24)return`${p}h ${$}m`;let Q=Math.floor(p/24),F=p%24;return`${Q}d ${F}h ${$}m`}function x(d){return typeof d!="number"||!Number.isFinite(d)?"--":new Date(d).toLocaleString()}function D(d,l){let p=getComputedStyle(document.documentElement).getPropertyValue(d);return(p?p.trim():"")||l}return{initHistoryTab:ke,handleHistoryResize:pe,activateHistoryTab:Ne,handleQuotaHistoryData:n,handleQuotaHistoryCleared:Se,requestQuotaHistory:fe,isHistoryTabActive:Ee}}function Rt({vscode:h,i18n:T,showToast:$e,switchToTab:m,escapeHtml:se}){let N={announcements:[],unreadIds:[],popupAnnouncement:null},H=null,ce=new Set;function ae(n){if(!n||typeof n!="string")return"";let L=n.trim();return/^(https?:|data:image\/)/i.test(L)||L.startsWith("/")||L.startsWith("./")?L:""}function le(n){return!n||typeof n!="string"?"":n.replace(/[^a-zA-Z0-9_-]/g,"")}function Le(){let n=document.getElementById("announcement-btn");n&&n.addEventListener("click",Me);let L=document.getElementById("announcement-list-close");L&&L.addEventListener("click",ge);let B=document.getElementById("announcement-mark-all-read");B&&B.addEventListener("click",Ne);let b=document.getElementById("announcement-popup-later");b&&b.addEventListener("click",pe);let E=document.getElementById("announcement-popup-got-it");E&&E.addEventListener("click",be);let I=document.getElementById("announcement-popup-action");I&&I.addEventListener("click",Ee),window.showImagePreview=Se}function ue(){let n=document.getElementById("announcement-badge");if(n){let L=N.unreadIds.length;L>0?(n.textContent=L>9?"9+":L,n.classList.remove("hidden")):n.classList.add("hidden")}}function Me(){h.postMessage({command:"announcement.getState"});let n=document.getElementById("announcement-list-modal");n&&n.classList.remove("hidden")}function ge(){let n=document.getElementById("announcement-list-modal");n&&n.classList.add("hidden")}function he(){let n=document.getElementById("announcement-list");if(!n)return;let L=N.announcements||[];if(n.textContent="",L.length===0){let b=document.createElement("div");b.className="announcement-empty",b.textContent=T["announcement.empty"]||"No notifications",n.appendChild(b);return}let B={feature:"\u2728",warning:"\u26A0\uFE0F",info:"\u2139\uFE0F",urgent:"\u{1F6A8}"};L.forEach(b=>{let E=N.unreadIds.includes(b.id),I=B[b.type]||"\u2139\uFE0F",_=ve(b.createdAt),R=document.createElement("div");R.className=`announcement-item ${E?"unread":""}`,R.dataset.id=String(b.id??"");let z=document.createElement("span");z.className="announcement-icon",z.textContent=I;let K=document.createElement("div");K.className="announcement-info";let j=document.createElement("div");if(j.className="announcement-title",E){let d=document.createElement("span");d.className="announcement-unread-dot",j.appendChild(d)}let ee=document.createElement("span");ee.textContent=b.title||"",j.appendChild(ee);let x=document.createElement("div");x.className="announcement-summary",x.textContent=b.summary||"";let D=document.createElement("div");D.className="announcement-time",D.textContent=_,K.append(j,x,D),R.append(z,K),n.appendChild(R)}),n.querySelectorAll(".announcement-item").forEach(b=>{b.addEventListener("click",()=>{let E=b.dataset.id,I=L.find(_=>_.id===E);if(I){if(N.unreadIds.includes(E)){h.postMessage({command:"announcement.markAsRead",id:E}),N.unreadIds=N.unreadIds.filter(R=>R!==E),ue(),b.classList.remove("unread");let _=b.querySelector(".announcement-unread-dot");_&&_.remove()}Ie(I,!0),ge()}})})}function ve(n){let L=new Date(n),b=new Date-L,E=Math.floor(b/6e4),I=Math.floor(b/36e5),_=Math.floor(b/864e5);return E<1?T["announcement.timeAgo.justNow"]||"Just now":E<60?(T["announcement.timeAgo.minutesAgo"]||"{count}m ago").replace("{count}",E):I<24?(T["announcement.timeAgo.hoursAgo"]||"{count}h ago").replace("{count}",I):(T["announcement.timeAgo.daysAgo"]||"{count}d ago").replace("{count}",_)}function Ie(n,L=!1){H=n;let B={feature:T["announcement.type.feature"]||"\u2728 New Feature",warning:T["announcement.type.warning"]||"\u26A0\uFE0F Warning",info:T["announcement.type.info"]||"\u2139\uFE0F Info",urgent:T["announcement.type.urgent"]||"\u{1F6A8} Urgent"},b=document.getElementById("announcement-popup-type"),E=document.getElementById("announcement-popup-title"),I=document.getElementById("announcement-popup-content"),_=document.getElementById("announcement-popup-action"),R=document.getElementById("announcement-popup-got-it"),z=document.getElementById("announcement-popup-back"),K=document.getElementById("announcement-popup-close");if(b&&(b.textContent=B[n.type]||B.info,b.className=`announcement-type-badge ${le(n.type)}`),E&&(E.textContent=n.title),I){let ee=`<div class="announcement-text">${se(n.content).replace(/\n/g,"<br>")}</div>`;if(n.images&&n.images.length>0){ee+='<div class="announcement-images">';for(let x of n.images){let D=ae(x.url);D&&(ee+=`
                            <div class="announcement-image-item">
                                <img src="${se(D)}" 
                                     alt="${se(x.alt||x.label||"")}" 
                                     class="announcement-image"
                                     data-preview-url="${se(D)}"
                                     title="${se(T["announcement.clickToEnlarge"]||"Click to enlarge")}" />
                                <div class="image-skeleton"></div>
                                ${x.label?`<div class="announcement-image-label">${se(x.label)}</div>`:""}
                            </div>
                        `)}ee+="</div>"}I.innerHTML=ee,I.querySelectorAll(".announcement-image").forEach(x=>{x.addEventListener("load",()=>{x.classList.add("loaded")}),x.addEventListener("error",()=>{let D=x.closest(".announcement-image-item");if(D){let d=D.querySelector(".image-skeleton");d&&d.remove(),x.style.display="none";let l=document.createElement("div");l.className="image-load-error";let p=document.createElement("span");p.className="icon",p.textContent="\u{1F5BC}\uFE0F";let $=document.createElement("span");$.textContent=T["announcement.imageLoadFailed"]||"Image failed to load",l.append(p,$),D.insertBefore(l,D.firstChild)}}),x.addEventListener("click",()=>{let D=x.getAttribute("data-preview-url");D&&Se(D)})})}n.action&&n.action.label?(_&&(_.textContent=n.action.label,_.classList.remove("hidden")),R&&R.classList.add("hidden")):(_&&_.classList.add("hidden"),R&&R.classList.remove("hidden")),L?(z&&(z.classList.remove("hidden"),z.onclick=()=>{pe(!0),Me()}),K&&(K.onclick=()=>{pe(!0)})):(z&&z.classList.add("hidden"),K&&(K.onclick=()=>{pe()}));let j=document.getElementById("announcement-popup-modal");j&&j.classList.remove("hidden")}function ke(){if(!H)return;let n=H.id;h.postMessage({command:"announcement.markAsRead",id:n}),N.unreadIds.includes(n)&&(N.unreadIds=N.unreadIds.filter(L=>L!==n),ue())}function pe(n=!1){ke();let L=document.getElementById("announcement-popup-modal"),B=L?.querySelector(".announcement-popup-content"),b=document.getElementById("announcement-btn");if(L&&B&&b&&!n){let E=b.getBoundingClientRect(),I=B.getBoundingClientRect(),_=E.left+E.width/2-(I.left+I.width/2),R=E.top+E.height/2-(I.top+I.height/2);B.style.transition="transform 0.4s ease-in, opacity 0.4s ease-in",B.style.transform=`translate(${_}px, ${R}px) scale(0.1)`,B.style.opacity="0",b.classList.add("bell-shake"),setTimeout(()=>{L.classList.add("hidden"),B.style.transition="",B.style.transform="",B.style.opacity="",b.classList.remove("bell-shake")},400)}else L&&L.classList.add("hidden");H=null}function be(){pe()}function Ee(){if(H&&H.action){let n=H.action;n.type==="tab"?m(n.target):n.type==="url"?h.postMessage({command:"openUrl",url:n.target}):n.type==="command"&&h.postMessage({command:"executeCommand",commandId:n.target,commandArgs:n.arguments||[]})}pe()}function Ne(){h.postMessage({command:"announcement.markAllAsRead"}),$e(T["announcement.markAllRead"]||"All marked as read","success")}function fe(n){N=n,ue(),he(),n.popupAnnouncement&&!ce.has(n.popupAnnouncement.id)&&(ce.add(n.popupAnnouncement.id),setTimeout(()=>{Ie(n.popupAnnouncement)},600))}function Se(n){let L=ae(n);if(!L)return;let B=document.createElement("div");B.className="image-preview-overlay";let b=document.createElement("div");b.className="image-preview-container";let E=document.createElement("img");E.className="image-preview-img",E.src=L;let I=document.createElement("div");I.className="image-preview-hint",I.textContent=T["announcement.clickToClose"]||"Click to close",b.append(E,I),B.appendChild(b),B.addEventListener("click",()=>{B.classList.add("closing"),setTimeout(()=>B.remove(),200)}),document.body.appendChild(B),requestAnimationFrame(()=>B.classList.add("visible"))}return{initAnnouncementEvents:Le,handleAnnouncementState:fe}}(function(){"use strict";let h=window.__vscodeApi||(window.__vscodeApi=acquireVsCodeApi()),T=document.getElementById("dashboard"),$e=document.getElementById("status"),m=document.getElementById("refresh-btn"),se=document.getElementById("reset-order-btn"),N=document.getElementById("toast"),H=document.getElementById("settings-modal"),ce=document.getElementById("rename-modal"),ae=document.getElementById("model-manager-modal"),le=document.getElementById("model-manager-list"),Le=document.getElementById("model-manager-count"),ue=document.getElementById("quota-source-info"),Me=document.getElementById("history-account-select"),ge=document.getElementById("history-model-select"),he=document.querySelectorAll(".history-range-btn"),ve=document.getElementById("history-chart"),Ie=document.getElementById("history-empty"),ke=document.getElementById("history-metric-label"),pe=document.getElementById("history-summary"),be=document.getElementById("history-table-body"),Ee=document.getElementById("history-table-empty"),Ne=document.getElementById("history-prev"),fe=document.getElementById("history-next"),Se=document.getElementById("history-page-info"),n=window.__i18n||{},L=window.AntigravityAuthUI?window.__authUi||(window.__authUi=new window.AntigravityAuthUI(h)):null,B=!1,b=null,E={},I=null,_=null,R=[],z=null,K=!1,j="authorized",ee=!1,x=null,D=!1,d=null,l=!1,p=[],$="",Q=!1,F=!1,U=new Set,S=[],W={rangeDays:7,selectedEmail:null,selectedModelId:null,accounts:[],models:[],points:[],page:1,pageSize:20,needsRender:!1},q=Ht({vscode:h,i18n:n,dom:{historyAccountSelect:Me,historyModelSelect:ge,historyRangeButtons:he,historyCanvas:ve,historyEmpty:Ie,historyMetricLabel:ke,historySummary:pe,historyTableBody:be,historyTableEmpty:Ee,historyPrevBtn:Ne,historyNextBtn:fe,historyPageInfo:Se},historyState:W,authorizationStatusGetter:()=>d}),re=Rt({vscode:h,i18n:n,showToast:V,switchToTab:Tt,escapeHtml:f}),de=10,Ce=5e3,Te=!0,ye=null,Be=e=>(e||"").toLowerCase().replace(/[^a-z0-9]/g,""),_e=new Map(ct.map((e,t)=>[e,t])),ze=new Map(lt.map((e,t)=>[e,t])),Ke=new Map(ct.map((e,t)=>[Be(e),t])),Ve=new Map(lt.map((e,t)=>[Be(e),t])),De=new Set(Pt),qe=document.getElementById("custom-grouping-modal"),C={groups:[],allModels:[],groupMappings:{},smartGroupCanonicalNames:null},te={claude:0,gemini_pro:1,gemini_flash:2,gemini_image:3};function je(e){return(e||"").toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim()}function A(e,t){let o=(e||"").toLowerCase(),a=je(t||e||"");return/^gemini-\d+(?:\.\d+)?-pro-image(?:-|$)/.test(o)||/^gemini \d+(?:\.\d+)? pro image\b/.test(a)||o==="model_placeholder_m9"?"gemini_image":/^gemini-\d+(?:\.\d+)?-pro-(high|low)(?:-|$)/.test(o)||/^gemini \d+(?:\.\d+)? pro(?: \((high|low)\)| (high|low))\b/.test(a)||o==="model_placeholder_m7"||o==="model_placeholder_m8"||o==="model_placeholder_m36"||o==="model_placeholder_m37"?"gemini_pro":/^gemini-\d+(?:\.\d+)?-flash(?:-|$)/.test(o)||/^gemini \d+(?:\.\d+)? flash\b/.test(a)||o==="model_placeholder_m18"?"gemini_flash":o.startsWith("claude-")||o.startsWith("model_claude")||a.startsWith("claude ")||o==="model_placeholder_m12"||o==="model_placeholder_m26"||o==="model_placeholder_m35"||o==="model_openai_gpt_oss_120b_medium"?"claude":null}function ne(e,t){let o=new Map((t||[]).map(r=>[r.modelId,r])),a=new Map;for(let r of e.modelIds||[]){let c=o.get(r),y=A(r,c?.label||r);y&&a.set(y,(a.get(y)||0)+1)}if(a.size===0)return null;let i=null,s=-1;for(let[r,c]of a.entries())c>s&&(i=r,s=c);return i}function Ae(e,t){return(e||[]).map((o,a)=>{let i=ne(o,t),s=i?te[i]:999;return{group:o,index:a,rank:s}}).sort((o,a)=>o.rank!==a.rank?o.rank-a.rank:o.index-a.index).map(o=>o.group)}function Pe(){let e=h.getState()||{};if(e.lastRefresh&&e.refreshCooldown){let v=Date.now(),M=Math.floor((v-e.lastRefresh)/1e3);M<e.refreshCooldown&&Mt(e.refreshCooldown-M)}j="authorized",ut(),m.addEventListener("click",gt),_n(),se&&se.addEventListener("click",Yt);let t=document.getElementById("manage-models-btn");t&&t.addEventListener("click",un);let o=document.getElementById("toggle-profile-btn");o&&o.addEventListener("click",Qt);let a=document.getElementById("toggle-grouping-btn");a&&a.addEventListener("click",Vt);let i=document.getElementById("settings-btn");i&&i.addEventListener("click",He);let s=document.getElementById("close-settings-btn");s&&s.addEventListener("click",jt);let r=document.getElementById("close-rename-btn");r&&r.addEventListener("click",dt);let c=document.getElementById("save-rename-btn");c&&c.addEventListener("click",mt);let y=document.getElementById("rename-input");y&&y.addEventListener("keydown",v=>{v.key==="Enter"&&mt()}),document.getElementById("model-manager-close")?.addEventListener("click",ot),document.getElementById("model-manager-cancel")?.addEventListener("click",ot),document.getElementById("model-manager-save")?.addEventListener("click",yn),document.getElementById("model-manager-select-all")?.addEventListener("click",()=>{Et("all")}),document.getElementById("model-manager-clear")?.addEventListener("click",()=>{Et("none")});let g=document.getElementById("reset-name-btn");g&&g.addEventListener("click",Jt);let w=document.getElementById("close-custom-grouping-btn");w&&w.addEventListener("click",at);let k=document.getElementById("cancel-custom-grouping-btn");k&&k.addEventListener("click",at);let O=document.getElementById("save-custom-grouping-btn");O&&O.addEventListener("click",xn);let J=document.getElementById("smart-group-btn");J&&J.addEventListener("click",Bn);let u=document.getElementById("add-group-btn");u&&u.addEventListener("click",In),re.initAnnouncementEvents(),T.addEventListener("change",v=>{if(v.target.classList.contains("pin-toggle")){let M=v.target.getAttribute("data-model-id");M&&hn(M)}}),window.addEventListener("message",Zt),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Te=!0,We())}),we(),q.initHistoryTab(),window.addEventListener("resize",q.handleHistoryResize),bt(j),h.postMessage({command:"init"})}function we(){let e=document.querySelectorAll(".tab-btn"),t=document.querySelectorAll(".tab-content");e.forEach(o=>{o.addEventListener("click",()=>{let a=o.getAttribute("data-tab");e.forEach(i=>i.classList.remove("active")),o.classList.add("active"),t.forEach(i=>{i.id===`tab-${a}`?i.classList.add("active"):i.classList.remove("active")}),h.postMessage({command:"tabChanged",tab:a}),a==="history"&&q.activateHistoryTab()})})}function He(){if(H){let e=document.getElementById("notification-enabled"),t=document.getElementById("warning-threshold"),o=document.getElementById("critical-threshold");e&&(e.checked=E.notificationEnabled!==!1),t&&(t.value=E.warningThreshold||30),o&&(o.value=E.criticalThreshold||10);let a=document.getElementById("display-mode-select");if(a){let i=E.displayMode||"webview";a.value=i,a.onchange=()=>{a.value==="quickpick"&&h.postMessage({command:"updateDisplayMode",displayMode:"quickpick"})}}Ot(),Xe(),Gt(),H.classList.remove("hidden")}}function Xe(){let e=document.getElementById("statusbar-format");if(!e)return;let t=E.statusBarFormat||"standard";e.value=t,e.onchange=null,e.addEventListener("change",()=>{let o=e.value;h.postMessage({command:"updateStatusBarFormat",statusBarFormat:o})})}function Ot(){let e=document.getElementById("language-select");if(!e)return;let t=E.language||"auto";e.value=t,e.onchange=null,e.addEventListener("change",()=>{let o=e.value;h.postMessage({command:"updateLanguage",language:o}),V(n["language.changed"]||"Language changed. Reopen panel to apply.","info")})}function Gt(){let e=document.getElementById("notification-enabled"),t=document.getElementById("warning-threshold"),o=document.getElementById("critical-threshold");e&&(e.onchange=null,e.addEventListener("change",()=>{h.postMessage({command:"updateNotificationEnabled",notificationEnabled:e.checked})})),t&&(t.onblur=null,t.addEventListener("blur",()=>{rt()})),o&&(o.onblur=null,o.addEventListener("blur",()=>{rt()}))}function rt(){let e=document.getElementById("warning-threshold"),t=document.getElementById("critical-threshold"),o=parseInt(e?.value,10)||30,a=parseInt(t?.value,10)||10;o<5&&(o=5),o>80&&(o=80),a<1&&(a=1),a>50&&(a=50),a>=o&&(a=o-1,a<1&&(a=1)),e&&(e.value=o),t&&(t.value=a),zt()}function zt(){let e=document.getElementById("notification-enabled"),t=document.getElementById("warning-threshold"),o=document.getElementById("critical-threshold"),a=e?.checked??!0,i=parseInt(t?.value,10)||30,s=parseInt(o?.value,10)||10;h.postMessage({command:"updateThresholds",notificationEnabled:a,warningThreshold:i,criticalThreshold:s})}function jt(){H&&H.classList.add("hidden")}function Ft(e,t,o){if(ce){_=e,R=o||[],K=!1,z=null;let a=document.getElementById("rename-input");a&&(a.value=t||"",a.focus(),a.select()),ce.classList.remove("hidden")}}function Ut(e,t,o){if(ce){K=!0,z=e,_=null,R=[],$=o||t||"";let a=document.getElementById("rename-input");a&&(a.value=t||"",a.focus(),a.select()),ce.classList.remove("hidden")}}function dt(){ce&&(ce.classList.add("hidden"),_=null,R=[],z=null,K=!1,$="")}function mt(){let t=document.getElementById("rename-input")?.value?.trim();if(!t){V(n["model.nameEmpty"]||n["grouping.nameEmpty"]||"Name cannot be empty","error");return}K&&z?(h.postMessage({command:"renameModel",modelId:z,groupName:t}),V((n["model.renamed"]||"Model renamed to {name}").replace("{name}",t),"success")):_&&R.length>0&&(Wt(_,t),h.postMessage({command:"renameGroup",groupId:_,groupName:t,modelIds:R}),V((n["grouping.renamed"]||"Renamed to {name}").replace("{name}",t),"success")),dt()}function Wt(e,t){let o=Array.from(document.querySelectorAll(".group-card")).find(a=>a.getAttribute("data-group-id")===e);if(o){let a=o.querySelector(".group-name");a&&(a.textContent=t)}if(I&&I.groups){let a=I.groups.find(i=>i.groupId===e);a&&(a.groupName=t)}}function Jt(){let e=document.getElementById("rename-input");e&&K&&z&&$&&(e.value=$,e.focus())}function Qt(){h.postMessage({command:"toggleProfile"})}function Kt(){let e=document.getElementById("toggle-profile-btn");e&&(Q?(e.textContent=(n["profile.planDetails"]||"Plan")+" \u25BC",e.classList.add("toggle-off")):(e.textContent=(n["profile.planDetails"]||"Plan")+" \u25B2",e.classList.remove("toggle-off")))}function ut(){let e=document.getElementById("toggle-profile-btn");if(!e)return;let t=j!=="authorized";e.classList.toggle("hidden",!t)}function Vt(){h.postMessage({command:"toggleGrouping"})}function Xt(e){let t=document.getElementById("toggle-grouping-btn");t&&(e?(t.textContent=(n["grouping.title"]||"Groups")+" \u25B2",t.classList.remove("toggle-off")):(t.textContent=(n["grouping.title"]||"Groups")+" \u25BC",t.classList.add("toggle-off")))}function gt(){if(m.disabled)return;B=!0,Lt(),V(n["notify.refreshing"]||"Refreshing quota data...","info"),h.postMessage({command:"refresh"});let e=Date.now();h.setState({...h.getState(),lastRefresh:e,refreshCooldown:de}),Mt(de)}function Yt(){h.postMessage({command:"resetOrder"}),V(n["dashboard.resetOrder"]||"Reset Order","success")}function Zt(e){let t=e.data;if(t.type==="switchTab"&&t.tab){Tt(t.tab);return}if(t.type==="panelRevealed"){Te=!0,We();return}if(t.type==="telemetry_update"){if(B=!1,Lt(),t.config&&(E=t.config,t.config.profileHidden!==void 0&&(Q=t.config.profileHidden,Kt()),t.config.quotaSource&&(!ee||t.config.quotaSource===x)&&(j="authorized",h.setState({...h.getState(),quotaSource:j})),t.config.authorizedAvailable!==void 0&&(D=t.config.authorizedAvailable),t.config.authorizationStatus!==void 0&&(d=t.config.authorizationStatus),Array.isArray(t.config.visibleModels)&&(p=t.config.visibleModels),t.config.dataMasked!==void 0&&(F=t.config.dataMasked),t.config.antigravityToolsSyncEnabled!==void 0&&(l=!1)),ut(),ee){if(t.config?.quotaSource!==x){Ze(t.data?.isConnected);return}pt(!1)}bn(t.data,t.config),I=t.data,Ze(t.data?.isConnected),q.isHistoryTabActive()&&q.requestQuotaHistory()}if(t.type==="quotaHistoryData"&&q.handleQuotaHistoryData(t.data),t.type==="quotaHistoryCleared"&&q.handleQuotaHistoryCleared(),t.type==="quotaHistoryUpdated"){let o=t.data?.email;if(q.isHistoryTabActive()){if(o&&W.selectedEmail&&o!==W.selectedEmail)return;q.requestQuotaHistory()}}if(t.type==="autoTriggerState"&&t.data?.authorization!==void 0){d=t.data.authorization,D=!!t.data.authorization?.isAuthorized,et();let o=document.getElementById("account-manage-modal");o&&!o.classList.contains("hidden")&&((d?.accounts||[]).length===0?L?o.classList.add("hidden"):Oe():L?L.renderAccountManageList():vt())}if(t.type==="announcementState"&&re.handleAnnouncementState(t.data),t.type==="quotaSourceError"&&(ee&&(pt(!1),Ze(I?.isConnected)),V(t.message||n["quotaSource.authorizedMissing"]||"Authorize auto wake-up first","warning")),t.type==="antigravityToolsSyncStatus"&&((t.data?.enabled!==void 0||t.data?.autoSyncEnabled!==void 0)&&(l=!1),et()),t.type==="antigravityToolsSyncPrompt"){let o=t.data||{};nn(o)}if(t.type==="localAuthImportPrompt"){let o=t.data||{};tn(o)}if(t.type==="localAuthImportError"&&Re(),t.type==="antigravityToolsSyncProgress"){let{current:o,total:a,email:i}=t.data||{};an(o,a,i)}t.type==="antigravityToolsSyncComplete"&&sn(t.data?.success,t.data?.error),t.type==="refreshAccounts"&&(h.postMessage({command:"getAutoTriggerState"}),V(n["cockpitTools.dataChanged"]||"\u8D26\u53F7\u6570\u636E\u5DF2\u66F4\u65B0","info")),t.type==="accountSwitched"&&(h.postMessage({command:"getAutoTriggerState"}),V((n["cockpitTools.accountSwitched"]||"\u5DF2\u5207\u6362\u81F3 {email}").replace("{email}",t.email||""),"success"))}function pt(e,t){ee=e,e?(x=t||x,bt(x)):(x=null,$e.style.display="none"),document.querySelectorAll(".quota-source-btn").forEach(a=>{let i=a.dataset.source;a.disabled=e&&i===x})}function Pn(){let e=document.getElementById("antigravityTools-sync-checkbox"),t=document.getElementById("antigravityTools-import-btn");e?.addEventListener("change",o=>{o.target.checked=!1,l=!1,h.postMessage({command:"antigravityToolsSync.toggle",enabled:!1})}),t?.addEventListener("click",()=>{h.postMessage({command:"antigravityToolsSync.import"})})}function ft(){let e=document.getElementById("at-sync-config-modal");e||(e=document.createElement("div"),e.id="at-sync-config-modal",e.className="modal hidden",e.innerHTML=`
                <div class="modal-content at-sync-config-content">
                    <div class="modal-header">
                        <h3>\u2699 ${n["atSyncConfig.title"]||"\u8D26\u53F7\u540C\u6B65\u914D\u7F6E"}</h3>
                        <button class="close-btn" id="close-at-sync-config-modal">\xD7</button>
                    </div>
                    <div class="modal-body at-sync-config-body">
                        <!-- \u6570\u636E\u8BBF\u95EE\u8BF4\u660E -->
                        <div class="at-sync-section at-sync-info-section">
                            <details class="at-sync-details at-sync-info-details">
                                <summary class="at-sync-details-summary">
                                    <div class="at-sync-section-title-row">
                                        <div class="at-sync-section-title">\u2139\uFE0F ${n["atSyncConfig.featureTitle"]||"\u529F\u80FD\u8BF4\u660E"}</div>
                                        <span class="at-sync-details-link">
                                            ${n["atSyncConfig.dataAccessDetails"]||"\u5C55\u5F00\u8BE6\u60C5\u8BF4\u660E"}
                                        </span>
                                    </div>
                                    <div class="at-sync-description at-sync-info-summary">
                                        ${n["atSyncConfig.featureSummary"]||"\u67E5\u770B\u6570\u636E\u8BBF\u95EE\u4E0E\u540C\u6B65/\u5BFC\u5165\u89C4\u5219\u3002"}
                                    </div>
                                </summary>
                                <div class="at-sync-details-body">
                                    <div class="at-sync-info-block">
                                        <div class="at-sync-info-subtitle">\u{1F6E1}\uFE0F ${n["atSyncConfig.dataAccessTitle"]||"\u6570\u636E\u8BBF\u95EE\u8BF4\u660E"}</div>
                                        <div class="at-sync-description">
                                            ${n["atSyncConfig.dataAccessDesc"]||"\u672C\u529F\u80FD\u4F1A\u8BFB\u53D6\u60A8\u672C\u5730 Antigravity Tools \u4E0E Antigravity \u5BA2\u6237\u7AEF\u7684\u8D26\u6237\u4FE1\u606F\uFF0C\u4EC5\u7528\u4E8E\u672C\u63D2\u4EF6\u6388\u6743/\u5207\u6362\u3002"}
                                        </div>
                                        <div class="at-sync-path-info">
                                            <span class="at-sync-path-label">${n["atSyncConfig.readPathTools"]||"Antigravity Tools \u8DEF\u5F84"}:</span>
                                            <code class="at-sync-path">~/.antigravity_tools/</code>
                                        </div>
                                        <div class="at-sync-path-info">
                                            <span class="at-sync-path-label">${n["atSyncConfig.readPathLocal"]||"Antigravity \u5BA2\u6237\u7AEF\u8DEF\u5F84"}:</span>
                                            <code class="at-sync-path">.../Antigravity/User/globalStorage/state.vscdb</code>
                                        </div>
                                        <div class="at-sync-data-list">
                                            <span class="at-sync-data-label">${n["atSyncConfig.readData"]||"\u8BFB\u53D6\u5185\u5BB9"}:</span>
                                            <span class="at-sync-data-items">${n["atSyncConfig.readDataItems"]||"\u8D26\u6237\u90AE\u7BB1\u3001Refresh Token\uFF08\u672C\u5730\u8BFB\u53D6\uFF09"}</span>
                                        </div>
                                    </div>
                                    <div class="at-sync-info-block">
                                        <div class="at-sync-info-line">
                                            <span class="at-sync-info-label">${n["atSyncConfig.manualImportTitle"]||"\u624B\u52A8\u5BFC\u5165"}\uFF1A</span>
                                            <span class="at-sync-info-text">${n["atSyncConfig.manualImportDesc"]||"\u5206\u522B\u5BFC\u5165\u672C\u5730\u8D26\u6237\u6216 Antigravity Tools \u8D26\u6237\uFF0C\u4EC5\u6267\u884C\u4E00\u6B21\u3002"}</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <!-- \u624B\u52A8\u5BFC\u5165 -->
                        <div class="at-sync-section">
                            <div class="at-sync-section-title">\u{1F4E5} ${n["atSyncConfig.manualImportTitle"]||"\u624B\u52A8\u5BFC\u5165"}</div>
                            <div class="at-sync-import-actions">
                                <button id="at-sync-modal-import-local-btn" class="at-btn at-btn-primary at-sync-import-btn">
                                    ${n["atSyncConfig.importLocal"]||"\u5BFC\u5165\u672C\u5730\u8D26\u6237"}
                                </button>
                                <button id="at-sync-modal-import-tools-btn" class="at-btn at-btn-primary at-sync-import-btn">
                                    ${n["atSyncConfig.importTools"]||"\u5BFC\u5165 Antigravity Tools \u8D26\u6237"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,document.body.appendChild(e),document.getElementById("close-at-sync-config-modal")?.addEventListener("click",Fe),e.addEventListener("click",s=>{s.target===e&&Fe()})),e.querySelectorAll(".at-sync-details").forEach(s=>{s.removeAttribute("open")});let t=e.querySelector("#at-sync-modal-import-local-btn"),o=e.querySelector("#at-sync-modal-import-tools-btn"),a=t.cloneNode(!0);t.parentNode.replaceChild(a,t);let i=o.cloneNode(!0);o.parentNode.replaceChild(i,o),e.querySelector("#at-sync-modal-import-local-btn")?.addEventListener("click",()=>{Ye(),h.postMessage({command:"autoTrigger.importLocal"}),Fe()}),e.querySelector("#at-sync-modal-import-tools-btn")?.addEventListener("click",()=>{h.postMessage({command:"antigravityToolsSync.import"}),Fe()}),e.classList.remove("hidden")}function Fe(){let e=document.getElementById("at-sync-config-modal");e&&e.classList.add("hidden")}function en(e){return!e||typeof e!="string"?"":e}function yt(){let e=document.getElementById("local-auth-import-modal");return e||(e=document.createElement("div"),e.id="local-auth-import-modal",e.className="modal hidden",document.body.appendChild(e)),e}function ht(e){e.onclick=t=>{t.target===e&&Re()},e.querySelector("#close-local-import-modal")?.addEventListener("click",Re)}function Ye(){let e=yt();e.innerHTML=`
            <div class="modal-content local-import-content">
                <div class="modal-header">
                    <h3>${n["localImportPrompt.loadingTitle"]||"\u6B63\u5728\u68C0\u6D4B\u672C\u5730\u6388\u6743"}</h3>
                    <button class="close-btn" id="close-local-import-modal">\xD7</button>
                </div>
                <div class="modal-body local-import-body">
                    <div class="local-import-panel">
                        <div class="local-import-desc">${n["localImportPrompt.loadingDesc"]||"\u6B63\u5728\u8BFB\u53D6\u672C\u5730\u5DF2\u6388\u6743\u8D26\u53F7\u4FE1\u606F\uFF0C\u8BF7\u7A0D\u5019\u2026"}</div>
                        <div class="local-import-loading">
                            <span class="local-import-spinner"></span>
                            <span>${n["localImportPrompt.loadingHint"]||"\u6B63\u5728\u68C0\u6D4B\u672C\u5730\u6388\u6743\u8D26\u53F7"}</span>
                        </div>
                    </div>
                </div>
            </div>
        `,ht(e),e.classList.remove("hidden")}function tn(e){let t=typeof e.email=="string"?e.email:"",o=e.exists===!0,a=en(t),i=yt();i.innerHTML=`
            <div class="modal-content local-import-content">
                <div class="modal-header">
                    <h3>${n["localImportPrompt.title"]||"\u786E\u8BA4\u540C\u6B65\u672C\u5730\u6388\u6743"}</h3>
                    <button class="close-btn" id="close-local-import-modal">\xD7</button>
                </div>
                <div class="modal-body local-import-body">
                    <div class="local-import-panel">
                        <div class="local-import-desc">${n["localImportPrompt.desc"]||"\u5DF2\u68C0\u6D4B\u5230\u672C\u5730\u5DF2\u6388\u6743\u8D26\u53F7\uFF0C\u662F\u5426\u540C\u6B65\u5230\u63D2\u4EF6\u4E2D\uFF1F"}</div>
                        <div class="local-import-summary">
                            <div class="local-import-label">${n["localImportPrompt.foundLabel"]||"\u68C0\u6D4B\u5230\u8D26\u53F7"}</div>
                            <div class="local-import-email" id="local-import-email"></div>
                            <span class="local-import-tag" id="local-import-tag">${n["localImportPrompt.existsTag"]||"\u5DF2\u5B58\u5728"}</span>
                        </div>
                        <div class="local-import-note" id="local-import-note"></div>
                    </div>
                    <div class="local-import-actions">
                        <button id="local-import-cancel-btn" class="at-btn at-btn-outline">${n["localImportPrompt.cancel"]||"\u53D6\u6D88"}</button>
                        <button id="local-import-confirm-btn" class="at-btn at-btn-primary"></button>
                    </div>
                </div>
            </div>
        `,ht(i);let s=i.querySelector("#local-import-email"),r=i.querySelector("#local-import-tag"),c=i.querySelector("#local-import-note"),y=i.querySelector("#local-import-confirm-btn"),g=i.querySelector("#local-import-cancel-btn");s&&(s.textContent=a||n["localImportPrompt.unknownEmail"]||"\u672A\u77E5\u8D26\u53F7"),r&&(r.style.display=o?"inline-flex":"none"),c&&(c.textContent=o?n["localImportPrompt.existsDesc"]||"\u8BE5\u8D26\u53F7\u5DF2\u5B58\u5728\uFF0C\u7EE7\u7EED\u5C06\u8986\u76D6\u672C\u5730\u4FDD\u5B58\u7684\u6388\u6743\u4FE1\u606F\u3002":n["localImportPrompt.newDesc"]||"\u5C06\u5BFC\u5165\u5E76\u5207\u6362\u4E3A\u8BE5\u8D26\u53F7\u3002");let w=o?n["localImportPrompt.overwrite"]||"\u8986\u76D6\u5E76\u540C\u6B65":n["localImportPrompt.confirm"]||"\u786E\u8BA4\u540C\u6B65";if(y&&(y.textContent=w),y&&y.parentNode&&g&&g.parentNode){let k=y.cloneNode(!0);y.parentNode.replaceChild(k,y);let O=g.cloneNode(!0);g.parentNode.replaceChild(O,g),i.querySelector("#local-import-confirm-btn")?.addEventListener("click",()=>{h.postMessage({command:"autoTrigger.importLocalConfirm",overwrite:o}),Re()}),i.querySelector("#local-import-cancel-btn")?.addEventListener("click",()=>{Re()})}i.classList.remove("hidden")}function Re(){let e=document.getElementById("local-auth-import-modal");e&&e.classList.add("hidden")}function nn(e){let t=e.promptType||"new_accounts",o=e.newEmails||[],a=e.currentEmail||"",i=e.localEmail||"",s=e.autoConfirm===!0,r=e.autoConfirmImportOnly===!0,c=document.getElementById("antigravityTools-sync-modal");if(c||(c=document.createElement("div"),c.id="antigravityTools-sync-modal",c.className="modal hidden",document.body.appendChild(c)),t==="not_found"){c.innerHTML=`
                <div class="modal-content antigravityTools-sync-content">
                    <div class="modal-header antigravityTools-sync-header">
                        <div class="antigravityTools-sync-title">
                            <h3>${n["antigravityToolsSync.notFoundTitle"]}</h3>
                        </div>
                        <button class="close-btn" id="antigravityTools-sync-close">\xD7</button>
                    </div>
                    <div class="modal-body antigravityTools-sync-body">
                        <div class="antigravityTools-sync-section">
                            <p class="antigravityTools-sync-notice">${n["antigravityToolsSync.notFoundDesc"]}</p>
                        </div>
                    </div>
                    <div class="modal-footer antigravityTools-sync-footer">
                        <button id="antigravityTools-sync-manual-import" class="at-btn at-btn-primary">
                            ${n["antigravityToolsSync.manualImportBtn"]||"\u624B\u52A8\u5BFC\u5165 JSON"}
                        </button>
                        <button id="antigravityTools-sync-ok" class="at-btn at-btn-secondary">${n["common.gotIt"]}</button>
                    </div>
                </div>
            `,c.classList.remove("hidden"),c.querySelector("#antigravityTools-sync-close")?.addEventListener("click",()=>{c.classList.add("hidden")}),c.querySelector("#antigravityTools-sync-ok")?.addEventListener("click",()=>{c.classList.add("hidden")}),c.querySelector("#antigravityTools-sync-manual-import")?.addEventListener("click",()=>{c.classList.add("hidden"),on()});return}if(t==="switch_only"){let st=function(){me&&(clearTimeout(me),me=null)},qt=function(){st(),it.disabled=!0,Qe.disabled=!0,ie.disabled=!0,it.textContent=n["autoTrigger.switching"],h.postMessage({command:"antigravityToolsSync.importConfirm",importOnly:!1,switchOnly:!0,targetEmail:a})};c.innerHTML=`
                <div class="modal-content antigravityTools-sync-content">
                    <div class="modal-header antigravityTools-sync-header">
                        <div class="antigravityTools-sync-title">
                            <h3>${n["antigravityToolsSync.switchTitle"]}</h3>
                        </div>
                        <button class="close-btn" id="antigravityTools-sync-close">\xD7</button>
                    </div>
                    <div class="modal-body antigravityTools-sync-body">
                        <div class="antigravityTools-sync-section">
                            <div class="antigravityTools-sync-label">${n["antigravityToolsSync.localAccount"]}</div>
                             <div class="antigravityTools-sync-current" id="antigravityTools-sync-local-email"></div>
                        </div>
                        <div class="antigravityTools-sync-section">
                            <div class="antigravityTools-sync-label">${n["autoTrigger.antigravityToolsSyncTarget"]}</div>
                            <div class="antigravityTools-sync-current antigravityTools-sync-highlight" id="antigravityTools-sync-target-email"></div>
                        </div>
                    </div>
                    <div class="modal-footer antigravityTools-sync-footer">
                        <button id="antigravityTools-sync-cancel" class="at-btn at-btn-secondary">${n["common.cancel"]}</button>
                        <button id="antigravityTools-sync-switch" class="at-btn at-btn-primary">${n["antigravityToolsSync.switchBtn"]}</button>
                    </div>
                </div>
            `,c.classList.remove("hidden");let G=c.querySelector("#antigravityTools-sync-local-email");G&&(G.textContent=i||n["common.none"]);let Z=c.querySelector("#antigravityTools-sync-target-email");Z&&(Z.textContent=a||n["common.unknown"]);let me=null,ie=c.querySelector("#antigravityTools-sync-close"),Qe=c.querySelector("#antigravityTools-sync-cancel"),it=c.querySelector("#antigravityTools-sync-switch");ie?.addEventListener("click",()=>{st(),c.classList.add("hidden")}),Qe?.addEventListener("click",()=>{st(),c.classList.add("hidden")}),it?.addEventListener("click",qt),s&&(me=setTimeout(()=>qt(),300));return}c.innerHTML=`
            <div class="modal-content antigravityTools-sync-content">
                <div class="modal-header antigravityTools-sync-header">
                    <div class="antigravityTools-sync-title">
                        <h3>${n["autoTrigger.antigravityToolsSyncTitle"]}</h3>
                        <span class="antigravityTools-sync-count" id="antigravityTools-sync-count"></span>
                    </div>
                    <button class="close-btn" id="antigravityTools-sync-close">\xD7</button>
                </div>
                <div class="modal-body antigravityTools-sync-body">
                    <div class="antigravityTools-sync-section">
                        <div class="antigravityTools-sync-label">${n["autoTrigger.antigravityToolsSyncNew"]}</div>
                        <div class="antigravityTools-sync-chips" id="antigravityTools-sync-chips"></div>
                    </div>
                    <div class="antigravityTools-sync-section">
                        <div class="antigravityTools-sync-label">${n["autoTrigger.antigravityToolsSyncTarget"]}</div>
                        <div class="antigravityTools-sync-current" id="antigravityTools-sync-current-email"></div>
                    </div>
                </div>
                <div class="modal-footer antigravityTools-sync-footer">
                    <button id="antigravityTools-sync-cancel" class="at-btn at-btn-secondary">${n["common.cancel"]}</button>
                    <div class="antigravityTools-sync-action-group">
                        <button id="antigravityTools-sync-import-only" class="at-btn at-btn-secondary">${n["autoTrigger.importOnly"]}</button>
                        <button id="antigravityTools-sync-import-switch" class="at-btn at-btn-primary">${n["autoTrigger.importAndSwitch"]}</button>
                    </div>
                </div>
            </div>
        `,c.classList.remove("hidden");let y=c.querySelector("#antigravityTools-sync-count");y&&(y.textContent=`+${o.length}`);let g=c.querySelector("#antigravityTools-sync-chips");g&&(g.textContent="",o.forEach(G=>{let Z=document.createElement("span");Z.className="antigravityTools-sync-chip",Z.textContent=G,g.appendChild(Z)}));let w=c.querySelector("#antigravityTools-sync-current-email");w&&(w.textContent=a||n["common.unknown"]);let k=null,O=c.querySelector("#antigravityTools-sync-close"),J=c.querySelector("#antigravityTools-sync-cancel"),u=c.querySelector("#antigravityTools-sync-import-only"),v=c.querySelector("#antigravityTools-sync-import-switch");function M(){k&&(clearTimeout(k),k=null)}function X(G){M(),u&&(u.disabled=!0),v&&(v.disabled=!0),J&&(J.disabled=!0),O&&(O.disabled=!0),G&&(G.textContent=n["autoTrigger.importing"])}function Y(){X(u),h.postMessage({command:"antigravityToolsSync.importConfirm",importOnly:!0})}function oe(){X(v),h.postMessage({command:"antigravityToolsSync.importConfirm",importOnly:!1})}O?.addEventListener("click",()=>{M(),c.classList.add("hidden")}),J?.addEventListener("click",()=>{M(),c.classList.add("hidden")}),u?.addEventListener("click",Y),v?.addEventListener("click",oe),s&&(k=setTimeout(()=>{r?Y():oe()},300))}function on(){let e=document.getElementById("antigravityTools-json-import-modal");e||(e=document.createElement("div"),e.id="antigravityTools-json-import-modal",e.className="modal hidden",document.body.appendChild(e)),e.innerHTML=`
            <div class="modal-content antigravityTools-json-content">
                <div class="modal-header antigravityTools-sync-header">
                    <div class="antigravityTools-sync-title">
                        <h3>${n["antigravityToolsSync.manualImportTitle"]||"\u624B\u52A8\u5BFC\u5165 JSON"}</h3>
                    </div>
                    <button class="close-btn" id="antigravityTools-json-close">\xD7</button>
                </div>
                <div class="modal-body antigravityTools-json-body">
                    <div class="antigravityTools-sync-section">
                        <p class="antigravityTools-sync-notice">
                            ${n["antigravityToolsSync.manualImportDesc"]||"\u672A\u68C0\u6D4B\u5230\u672C\u5730 Antigravity Tools \u8D26\u6237\uFF0C\u53EF\u901A\u8FC7 JSON \u6587\u4EF6\u6216\u7C98\u8D34\u5185\u5BB9\u5BFC\u5165\u3002"}
                        </p>
                    </div>
                    <div class="at-json-import-panel">
                        <div class="at-json-import-actions">
                            <input type="file" id="antigravityTools-json-file-input" accept=".json,application/json" class="hidden">
                            <button id="antigravityTools-json-file-btn" class="at-btn at-btn-secondary">
                                ${n["antigravityToolsSync.manualImportFile"]||"\u9009\u62E9 JSON \u6587\u4EF6"}
                            </button>
                            <span class="at-json-import-file-name" id="antigravityTools-json-file-name">
                                ${n["common.none"]||"\u672A\u9009\u62E9\u6587\u4EF6"}
                            </span>
                        </div>
                        <textarea id="antigravityTools-json-textarea" class="at-json-import-textarea" spellcheck="false" placeholder='${n["antigravityToolsSync.manualImportPlaceholder"]||'\u7C98\u8D34 JSON \u6570\u7EC4\uFF0C\u4F8B\u5982: [{"email":"a@b.com","refresh_token":"..."}]'}'></textarea>
                        <div class="at-json-import-status" id="antigravityTools-json-status"></div>
                        <div class="antigravityTools-sync-chips at-json-import-preview" id="antigravityTools-json-preview"></div>
                        <div class="antigravityTools-sync-note">
                            ${n["antigravityToolsSync.manualImportHint"]||"\u5185\u5BB9\u4EC5\u5728\u672C\u5730\u89E3\u6790\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002"}
                        </div>
                    </div>
                </div>
                <div class="modal-footer antigravityTools-sync-footer">
                    <button id="antigravityTools-json-cancel" class="at-btn at-btn-secondary">${n["common.cancel"]}</button>
                    <button id="antigravityTools-json-import" class="at-btn at-btn-primary" disabled>
                        ${n["autoTrigger.importOnly"]||"\u4EC5\u5BFC\u5165"}
                    </button>
                </div>
            </div>
        `,e.classList.remove("hidden");let t=e.querySelector("#antigravityTools-json-file-input"),o=e.querySelector("#antigravityTools-json-file-btn"),a=e.querySelector("#antigravityTools-json-file-name"),i=e.querySelector("#antigravityTools-json-textarea"),s=e.querySelector("#antigravityTools-json-status"),r=e.querySelector("#antigravityTools-json-preview"),c=e.querySelector("#antigravityTools-json-import"),y=e.querySelector("#antigravityTools-json-close"),g=e.querySelector("#antigravityTools-json-cancel"),w="";function k(u){let v=(u||"").trim();if(!v)return{entries:[],invalid:0,error:""};let M;try{M=JSON.parse(v)}catch{return{entries:[],invalid:0,error:n["antigravityToolsSync.manualImportJsonError"]||"JSON \u89E3\u6790\u5931\u8D25"}}if(!Array.isArray(M))return{entries:[],invalid:0,error:n["antigravityToolsSync.manualImportJsonArray"]||"JSON must be an array"};let X=[],Y=0,oe=new Set;for(let G of M){if(!G||typeof G!="object"){Y+=1;continue}let Z=typeof G.email=="string"?G.email.trim():"",me=typeof G.refresh_token=="string"?G.refresh_token.trim():typeof G.refreshToken=="string"?G.refreshToken.trim():"";if(!Z||!me){Y+=1;continue}let ie=Z.toLowerCase();if(oe.has(ie)){Y+=1;continue}oe.add(ie),X.push({email:Z,refreshToken:me})}return{entries:X,invalid:Y,error:""}}function O(u,v,M){if(s&&s.classList.toggle("is-error",!!M),M){s&&(s.textContent=M),r&&(r.innerHTML=""),c&&(c.disabled=!0);return}if(u.length===0){s&&(s.textContent=n["antigravityToolsSync.manualImportEmpty"]||"\u8BF7\u7C98\u8D34\u6216\u9009\u62E9 JSON \u6587\u4EF6"),r&&(r.innerHTML=""),c&&(c.disabled=!0);return}let X=v>0?` \xB7 ${n["antigravityToolsSync.manualImportInvalid"]||"\u65E0\u6548\u6761\u76EE"} ${v}`:"";if(s&&(s.textContent=`${n["antigravityToolsSync.manualImportPreview"]||"\u5C06\u5BFC\u5165"} ${u.length} ${n["antigravityToolsSync.manualImportCountSuffix"]||"\u4E2A\u8D26\u53F7"}${X}`),r){let oe=u.slice(0,6).map(G=>`<span class="antigravityTools-sync-chip">${f(G.email)}</span>`);u.length>6&&oe.push(`<span class="antigravityTools-sync-chip">+${u.length-6}</span>`),r.innerHTML=oe.join("")}c&&(c.disabled=!1)}function J(u){w=u;let v=k(u);O(v.entries,v.invalid,v.error)}o?.addEventListener("click",()=>{t?.click()}),t?.addEventListener("change",async()=>{let u=t.files&&t.files[0];if(!u)return;let v=await u.text();i&&(i.value=v),a&&(a.textContent=u.name),J(v)}),i?.addEventListener("input",u=>{a&&(a.textContent=n["antigravityToolsSync.manualImportPaste"]||"\u7C98\u8D34 JSON"),J(u.target.value)}),c?.addEventListener("click",()=>{let u=k(w);if(u.error||u.entries.length===0){V(u.error||n["antigravityToolsSync.manualImportEmpty"]||"\u8BF7\u63D0\u4F9B\u6709\u6548 JSON","warning");return}c.disabled=!0,c.textContent=n["autoTrigger.importing"]||"Importing...",h.postMessage({command:"antigravityToolsSync.importJson",jsonText:w})}),y?.addEventListener("click",()=>e.classList.add("hidden")),g?.addEventListener("click",()=>e.classList.add("hidden")),O([],0,"")}function an(e,t,o){let a=n["common.cancel"]||"\u53D6\u6D88",i=`${n["autoTrigger.importing"]||"Importing..."} ${e}/${t}`,s=document.getElementById("antigravityTools-sync-modal");if(s){let c=s.querySelector("#antigravityTools-sync-import-only"),y=s.querySelector("#antigravityTools-sync-import-switch"),g=s.querySelector("#antigravityTools-sync-cancel");c&&c.disabled&&(c.textContent=i),y&&y.disabled&&(y.textContent=i),g&&(g.disabled=!1,g.textContent=a,g.onclick=()=>{h.postMessage({command:"antigravityToolsSync.cancel"}),g.disabled=!0,g.textContent=n["common.cancelling"]||"\u53D6\u6D88\u4E2D..."})}let r=document.getElementById("antigravityTools-json-import-modal");if(r){let c=r.querySelector("#antigravityTools-json-import"),y=r.querySelector("#antigravityTools-json-cancel");c&&c.disabled&&(c.textContent=i),y&&(y.disabled=!1,y.textContent=a,y.onclick=()=>{h.postMessage({command:"antigravityToolsSync.cancel"}),y.disabled=!0,y.textContent=n["common.cancelling"]||"\u53D6\u6D88\u4E2D..."})}console.log(`[AntigravityToolsSync] Progress: ${e}/${t} - ${o}`)}function sn(e,t){let o=document.getElementById("antigravityTools-sync-modal");o&&o.classList.add("hidden");let a=document.getElementById("antigravityTools-json-import-modal");a&&a.classList.add("hidden")}function Ze(e){let t=document.querySelector(".quota-source-status");if(document.querySelectorAll(".quota-source-btn").forEach(a=>{let i=a.dataset.source;a.classList.toggle("active",i===j)}),t){let i=e!==!1&&(j!=="authorized"||D);t.dataset.state=i?"ok":"error"}et(),ln()}function et(){let e=document.getElementById("quota-auth-card"),t=document.getElementById("quota-auth-row");if(!e||!t)return;if(j!=="authorized"){let y=I?.localAccountEmail;if(y){e.classList.remove("hidden");let g=`<button class="quota-account-manage-btn at-switch-to-client-btn-local" title="${f(n["autoTrigger.switchToClientAccount"]||"\u5207\u6362\u81F3\u5F53\u524D\u767B\u5F55\u8D26\u6237")}">${f(n["autoTrigger.switchToClientAccount"]||"\u5207\u6362\u81F3\u5F53\u524D\u767B\u5F55\u8D26\u6237")}</button>`;t.innerHTML=`
                    <div class="quota-auth-info">
                        <span class="quota-auth-icon">\u{1F464}</span>
                        <span class="quota-auth-text">${f(n["quotaSource.localAccountLabel"]||"\u5F53\u524D\u8D26\u6237")}</span>
                        <span class="quota-auth-email">${f(y)}</span>
                        ${g}
                    </div>
                `,t.querySelector(".at-switch-to-client-btn-local")?.addEventListener("click",w=>{w.stopPropagation(),h.postMessage({command:"antigravityToolsSync.switchToClient"})})}else e.classList.add("hidden");return}e.classList.remove("hidden");let o=d,a=o?.accounts||[],i=a.length>0,r=o?.activeAccount||(a.length>0?a[0].email:null);if(L){L.updateState(o,l),L.renderAuthRow(t,{showSyncToggleInline:!1});return}let c=`<button id="at-sync-config-btn" class="at-btn at-btn-primary" title="${n["atSyncConfig.title"]||"\u8D26\u53F7\u540C\u6B65\u914D\u7F6E"}">\u2699 ${n["atSyncConfig.btnText"]||"\u8D26\u53F7\u540C\u6B65\u914D\u7F6E"}</button>`;if(i&&r){let y=a.length>1,g=Math.max(a.length-1,0),w=g>0?`<span class="account-count-badge" title="${f(n["autoTrigger.manageAccounts"]||"Manage Accounts")}">+${g}</span>`:"",k=`<button id="quota-account-manage-btn" class="quota-account-manage-btn" title="${f(n["autoTrigger.manageAccounts"])}">${f(n["autoTrigger.manageAccounts"])}</button>`;t.innerHTML=`
                <div class="quota-auth-info quota-auth-info-clickable" title="${f(n["autoTrigger.manageAccounts"])}">
                    <span class="quota-auth-email">${f(r)}</span>
                    ${w}
                    ${k}
                </div>
                <div class="quota-auth-actions">
                    ${c}
                </div>
            `,t.querySelector(".quota-auth-info")?.addEventListener("click",()=>{tt()}),document.getElementById("quota-account-manage-btn")?.addEventListener("click",O=>{O.stopPropagation(),tt()}),document.getElementById("at-sync-config-btn")?.addEventListener("click",()=>{ft()})}else t.innerHTML=`
                <div class="quota-auth-info">
                    <span class="quota-auth-icon">\u26A0\uFE0F</span>
                    <span class="quota-auth-text">${n["autoTrigger.unauthorized"]||"Unauthorized"}</span>
                </div>
                <div class="quota-auth-actions">
                    ${c}
                    <button id="quota-auth-btn" class="at-btn at-btn-primary">${n["autoTrigger.authorizeBtn"]||"Authorize"}</button>
                </div>
            `,document.getElementById("quota-auth-btn")?.addEventListener("click",()=>{Nt()}),document.getElementById("at-sync-config-btn")?.addEventListener("click",()=>{ft()})}function tt(){let e=document.getElementById("account-manage-modal");e||(e=document.createElement("div"),e.id="account-manage-modal",e.className="modal hidden",e.innerHTML=`
                <div class="modal-content account-manage-content">
                    <div class="modal-header">
                        <h3>${n["autoTrigger.manageAccounts"]||"Manage Accounts"}</h3>
                        <button class="close-btn" id="close-account-manage-modal">\xD7</button>
                    </div>
                    <div class="modal-hint" style="padding: 8px 16px; font-size: 12px; color: var(--text-muted); background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);">
                        <span style="margin-right: 12px;">\u{1F4A1} ${n["autoTrigger.manageAccountsHintClick"]||"\u70B9\u51FB\u90AE\u7BB1\u53EF\u5207\u6362\u67E5\u770B\u914D\u989D"}</span>
                        <span>\u{1F504} ${n["autoTrigger.manageAccountsHintSwitch"]||'\u70B9\u51FB"\u5207\u6362\u767B\u5F55"\u53EF\u5207\u6362\u5BA2\u6237\u7AEF\u767B\u5F55\u8D26\u6237'}</span>
                    </div>
                    <div class="modal-body" id="account-manage-body">
                        <!-- \u8D26\u53F7\u5217\u8868\u5C06\u5728\u8FD9\u91CC\u52A8\u6001\u6E32\u67D3 -->
                    </div>
                    <div class="modal-footer">
                        <button id="add-new-account-btn" class="at-btn at-btn-primary">\u2795 ${n["autoTrigger.addAccount"]||"Add Account"}</button>
                    </div>
                </div>
            `,document.body.appendChild(e),document.getElementById("close-account-manage-modal")?.addEventListener("click",Oe),e.addEventListener("click",t=>{t.target===e&&Oe()}),document.getElementById("add-new-account-btn")?.addEventListener("click",()=>{h.postMessage({command:"autoTrigger.addAccount"})})),vt(),e.classList.remove("hidden")}function Oe(){let e=document.getElementById("account-manage-modal");e&&e.classList.add("hidden")}function vt(){let e=document.getElementById("account-manage-body");if(!e)return;let t=d,o=t?.accounts||[],a=t?.activeAccount;if(e.textContent="",o.length===0){let s=document.createElement("div");s.className="account-manage-empty",s.textContent=n["autoTrigger.noAccounts"]||"No accounts authorized",e.appendChild(s);return}let i=document.createElement("div");i.className="account-manage-list",o.forEach(s=>{let r=s.email===a,c=s.isInvalid===!0,y=c?"\u26A0\uFE0F":r?"\u2705":"\u{1F464}",g=document.createElement("div");g.className=`account-manage-item ${r?"active":""}${c?" expired":""}`,g.dataset.email=s.email;let w=document.createElement("div");w.className="account-manage-info";let k=document.createElement("span");k.className="account-manage-icon",k.textContent=y;let O=document.createElement("span");if(O.className="account-manage-email",O.textContent=s.email,w.append(k,O),r&&!c){let M=document.createElement("span");M.className="account-manage-badge",M.textContent=n["autoTrigger.accountActive"]||"Active",w.appendChild(M)}if(c){let M=document.createElement("span");M.className="account-manage-badge expired",M.textContent=n["autoTrigger.tokenExpired"]||"Expired",w.appendChild(M)}let J=document.createElement("div");J.className="account-manage-actions";let u=document.createElement("button");u.className="at-btn at-btn-small at-btn-primary account-switch-login-btn",u.dataset.email=s.email,u.textContent=n["autoTrigger.switchLoginBtn"]||"\u5207\u6362\u767B\u5F55";let v=document.createElement("button");v.className="at-btn at-btn-small at-btn-danger account-remove-btn",v.dataset.email=s.email,v.textContent=n["autoTrigger.deleteBtn"]||"\u5220\u9664",J.append(u,v),g.append(w,J),i.appendChild(g)}),e.appendChild(i),e.querySelectorAll(".account-manage-item").forEach(s=>{s.addEventListener("click",r=>{if(r.target.tagName==="BUTTON"||r.target.closest("button")||s.classList.contains("active"))return;let c=s.dataset.email;c&&(h.postMessage({command:"autoTrigger.switchAccount",email:c}),Oe())})}),e.querySelectorAll(".account-switch-login-btn").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();let c=s.dataset.email;c&&cn(c)})}),e.querySelectorAll(".account-remove-btn").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();let c=s.dataset.email;c&&typeof window.openRevokeModalForEmail=="function"&&window.openRevokeModalForEmail(c)})})}function cn(e){let t=document.getElementById("switch-login-confirm-modal");t||(t=document.createElement("div"),t.id="switch-login-confirm-modal",t.className="modal-overlay",t.innerHTML=`
                <div class="modal-content" style="max-width: 400px;">
                    <div class="modal-header">
                        <h3>${n["autoTrigger.switchLoginTitle"]||"\u5207\u6362\u767B\u5F55\u8D26\u6237"}</h3>
                        <button class="modal-close" id="switch-login-confirm-close">\xD7</button>
                    </div>
                    <div class="modal-body" style="padding: 20px;">
                        <p style="margin-bottom: 10px;">${n["autoTrigger.switchLoginConfirmText"]||"\u786E\u5B9A\u8981\u5207\u6362\u5230\u4EE5\u4E0B\u8D26\u6237\u5417\uFF1F"}</p>
                        <p style="font-weight: bold; color: var(--accent-color); margin-bottom: 15px;" id="switch-login-target-email"></p>
                        <p style="color: var(--warning-color); font-size: 0.9em;">\u26A0\uFE0F ${n["autoTrigger.switchLoginWarning"]||"\u6B64\u64CD\u4F5C\u5C06\u91CD\u542F Antigravity \u5BA2\u6237\u7AEF\u4EE5\u5B8C\u6210\u8D26\u6237\u5207\u6362\u3002"}</p>
                    </div>
                    <div class="modal-footer" style="display: flex; gap: 10px; justify-content: flex-end; padding: 15px 20px;">
                        <button class="at-btn at-btn-secondary" id="switch-login-confirm-cancel">${n["common.cancel"]||"\u53D6\u6D88"}</button>
                        <button class="at-btn at-btn-primary" id="switch-login-confirm-ok">${n["common.confirm"]||"\u786E\u8BA4"}</button>
                    </div>
                </div>
            `,document.body.appendChild(t),document.getElementById("switch-login-confirm-close").addEventListener("click",()=>{t.classList.add("hidden")}),document.getElementById("switch-login-confirm-cancel").addEventListener("click",()=>{t.classList.add("hidden")}),t.addEventListener("click",i=>{i.target===t&&t.classList.add("hidden")})),document.getElementById("switch-login-target-email").textContent=e;let o=document.getElementById("switch-login-confirm-ok"),a=o.cloneNode(!0);o.parentNode.replaceChild(a,o),a.addEventListener("click",()=>{t.classList.add("hidden"),h.postMessage({command:"autoTrigger.switchLoginAccount",email:e}),Oe()}),t.classList.remove("hidden")}function ln(){ue&&ue.classList.add("hidden")}function bt(e){$e.style.display="none",T.innerHTML="",e==="authorized"?dn():rn()}function rn(){let e=document.createElement("div");e.className="offline-card local-card",e.innerHTML=`
            <div class="icon offline-spinner"><span class="spinner"></span></div>
            <h2>${n["quotaSource.localLoadingTitle"]||"Detecting local Antigravity..."}</h2>
            <p>${n["quotaSource.localLoadingDesc"]||"Keep the Antigravity client running. You can switch to authorized monitoring anytime."}</p>
        `,T.appendChild(e)}function dn(){let e=document.createElement("div");e.className="offline-card authorized-card",e.innerHTML=`
            <div class="icon offline-spinner"><span class="spinner"></span></div>
            <h2>${n["quotaSource.authorizedLoadingTitle"]||"Loading quota..."}</h2>
            <p>${n["quotaSource.authorizedLoadingDesc"]||"Fetching quota data from the remote API."}</p>
        `,T.appendChild(e)}function nt(e){let t=e?.label||"",o=e?.modelId||"";if(ze.has(o))return ze.get(o);if(_e.has(t))return _e.get(t);let a=Be(o),i=Be(t);return Math.min(Ve.get(a)??Number.MAX_SAFE_INTEGER,Ke.get(i)??Number.MAX_SAFE_INTEGER)}function mn(e){return e.filter(t=>nt(t)<Number.MAX_SAFE_INTEGER).sort((t,o)=>nt(t)-nt(o)).map(t=>t.modelId)}function un(){ae&&(S=gn(),U=new Set(pn(S)),fn(),ae.classList.remove("hidden"))}function ot(){ae?.classList.add("hidden")}function gn(){let e=I?.allModels||I?.models||[];return j==="authorized"?e.filter(t=>!De.has(t.modelId)):[...e]}function pn(e){let t=e.map(o=>o.modelId);return Array.isArray(p)&&p.length>0?p.filter(o=>t.includes(o)):t}function fn(){if(le){if(S.length===0){le.innerHTML=`<div class="model-manager-empty">${n["models.empty"]||"No models available."}</div>`,Ue();return}le.innerHTML=S.map(e=>{let t=E.modelCustomNames?.[e.modelId]||e.label||e.modelId,o=U.has(e.modelId)?"checked":"";return`
                <label class="model-manager-item">
                    <input type="checkbox" data-model-id="${f(e.modelId)}" ${o}>
                    <span>${f(t)}</span>
                </label>
            `}).join(""),le.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",()=>{let t=e.getAttribute("data-model-id");t&&(e.checked?U.add(t):U.delete(t),Ue())})}),Ue()}}function Et(e){e==="all"?U=new Set(S.map(t=>t.modelId)):e==="recommended"?U=new Set(mn(S)):U=new Set,le?.querySelectorAll('input[type="checkbox"]').forEach(t=>{let o=t.getAttribute("data-model-id");t.checked=o?U.has(o):!1}),Ue()}function Ue(){if(!Le)return;let e=S.length,t=U.size;Le.textContent=e>0?`${t}/${e}`:""}function yn(){let e=S.map(a=>a.modelId),t=Array.from(U),o=t.length===0||t.length===e.length?[]:t;p=o,E.visibleModels=o,h.postMessage({command:"updateVisibleModels",visibleModels:o}),V(n["models.saved"]||"Model visibility updated.","success"),ot()}function Tt(e){let t=document.querySelectorAll(".tab-btn"),o=document.querySelectorAll(".tab-content"),a=document.querySelector(`.tab-btn[data-tab="${e}"]`);a&&(t.forEach(i=>i.classList.remove("active")),a.classList.add("active"),o.forEach(i=>{i.id===`tab-${e}`?i.classList.add("active"):i.classList.remove("active")}),h.postMessage({command:"tabChanged",tab:e}),e==="history"&&q.activateHistoryTab())}function Lt(){B&&(m.innerHTML=`<span class="spinner"></span>${n["dashboard.refreshing"]||"Refreshing..."}`)}function Mt(e){m.disabled=!0,m.innerHTML=e+"s";let t=e,o=setInterval(()=>{t--,t<=0?(clearInterval(o),m.disabled=!1,m.innerHTML=n["dashboard.refresh"]||"REFRESH"):m.innerHTML=t+"s"},1e3)}function V(e,t="info"){N&&(N.textContent=e,N.className=`toast ${t}`,setTimeout(()=>{N.classList.add("hidden")},3e3))}function It(e){let t=E.warningThreshold||30,o=E.criticalThreshold||10;return e>t?"var(--success)":e>o?"var(--warning)":"var(--danger)"}function Ct(e){let t=E.warningThreshold||30,o=E.criticalThreshold||10;return e>t?n["dashboard.active"]||"Healthy":e>o?n["dashboard.warning"]||"Warning":n["dashboard.danger"]||"Danger"}function hn(e){h.postMessage({command:"togglePin",modelId:e})}function At(){h.postMessage({command:"retry"})}function vn(){h.postMessage({command:"openLogs"})}window.retryConnection=At,window.openLogs=vn,window.showLocalAuthImportLoading=Ye,window.openAccountManageModal=()=>{L?L.openAccountManageModal():tt()};function wt(e){this.style.opacity="0.4",b=this,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",this.getAttribute("data-id")),this.classList.add("dragging")}function $t(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1}function St(){this.classList.add("over")}function Bt(){this.classList.remove("over")}function xt(e){if(e.stopPropagation&&e.stopPropagation(),b!==this){let t=b.classList.contains("card")?".card":"tr",o=b.parentElement,a=Array.from(o.querySelectorAll(t)),i=a.indexOf(b),s=a.indexOf(this);i<s?this.after(b):this.before(b);let r=Array.from(o.querySelectorAll(t));if(b.classList.contains("group-card")||b.classList.contains("list-group-row")){let y=r.map(g=>g.getAttribute("data-group-id")).filter(g=>g!==null);h.postMessage({command:"updateGroupOrder",order:y})}else{let y=r.map(g=>g.getAttribute("data-id")).filter(g=>g!==null);h.postMessage({command:"updateOrder",order:y})}}return!1}function kt(){this.style.opacity="1",this.classList.remove("dragging"),document.querySelectorAll(".card, tr").forEach(e=>{e.classList.remove("over")})}function We(){if(!Te||document.visibilityState!=="visible")return;let e=T.querySelectorAll(".tag-new.tag-new-transient");e.length&&(Te=!1,ye&&(window.clearTimeout(ye),ye=null),e.forEach(t=>{t.classList.remove("tag-new-hidden-after-burst"),t.classList.remove("tag-new-burst"),t.offsetWidth,t.classList.add("tag-new-burst")}),ye=window.setTimeout(()=>{e.forEach(t=>{t.isConnected&&(t.classList.remove("tag-new-burst"),t.classList.add("tag-new-hidden-after-burst"))}),ye=null},Ce))}function bn(e,t){if($e.style.display="none",T.innerHTML="",!e.isConnected){(t?.quotaSource||j)==="authorized"?Tn(e.errorMessage):En(e.errorMessage);return}if(e.userInfo&&!Q&&kn(e.userInfo),Xt(t?.groupingEnabled),t?.groupingEnabled){Ln();let a=e.groups?[...e.groups]:[];if(t?.groupOrder?.length>0){let i=new Map;t.groupOrder.forEach((s,r)=>i.set(s,r)),a.sort((s,r)=>{let c=i.has(s.groupId)?i.get(s.groupId):99999,y=i.has(r.groupId)?i.get(r.groupId):99999;return c!==y?c-y:s.remainingPercentage-r.remainingPercentage})}a.forEach(i=>{Dn(i,t?.pinnedGroups||[])}),We();return}let o=[...e.models];if(t?.modelOrder?.length>0){let a=new Map;t.modelOrder.forEach((i,s)=>a.set(i,s)),o.sort((i,s)=>{let r=a.has(i.modelId)?a.get(i.modelId):99999,c=a.has(s.modelId)?a.get(s.modelId):99999;return r-c})}o.forEach(a=>{qn(a,t?.pinnedModels||[],t?.modelCustomNames||{})}),We()}function En(e){let t=e||n["dashboard.offlineDesc"]||"Could not detect Antigravity process. Please ensure Antigravity is running.",o=document.createElement("div");o.className="offline-card local-card",o.innerHTML=`
            <div class="icon">\u{1F6F0}\uFE0F</div>
            <h2>${n["quotaSource.localOfflineTitle"]||"Local monitoring unavailable"}</h2>
            <p>${t}</p>
            <div class="offline-actions">
                <button class="btn-secondary" data-action="retry-local">
                    ${n["quotaSource.retryLocal"]||n["help.retry"]||"Retry"}
                </button>
            </div>
        `,T.appendChild(o),o.querySelector('[data-action="retry-local"]')?.addEventListener("click",At)}function Tn(e){let t=!!d?.isAuthorized,o=t?n["quotaSource.authorizedOfflineTitle"]||"Authorized monitoring unavailable":n["quotaSource.authorizedMissingTitle"]||"Authorization required",a=t?n["quotaSource.authorizedOfflineDesc"]||"Failed to fetch quota from the remote API. Please check your network and try again.":n["quotaSource.authorizedMissingDesc"]||"Complete authorization to use authorized monitoring.",i=e?`<p class="offline-detail">${e}</p>`:"",s=document.createElement("div");s.className="offline-card authorized-card",s.innerHTML=`
            <div class="icon">\u{1F510}</div>
            <h2>${o}</h2>
            <p>${a}</p>
            ${i}
            <div class="offline-actions">
                <button class="btn-primary" data-action="authorized-primary">
                    ${t?n["dashboard.refresh"]||"Refresh":n["autoTrigger.authorizeBtn"]||"Authorize"}
                </button>
            </div>
        `,T.appendChild(s);let r=s.querySelector('[data-action="authorized-primary"]');t?r?.addEventListener("click",gt):r?.addEventListener("click",()=>{Nt()})}function Nt(){let e=document.getElementById("auth-choice-modal");e||(e=document.createElement("div"),e.id="auth-choice-modal",e.className="modal hidden",e.innerHTML=`
                <div class="modal-content auth-choice-content">
                    <div class="modal-header">
                        <h3>${n["authChoice.title"]||"\u9009\u62E9\u767B\u5F55\u65B9\u5F0F"}</h3>
                        <button class="close-btn" id="close-auth-choice-modal">\xD7</button>
                    </div>
                    <div class="modal-body auth-choice-body">
                        <div class="auth-choice-info">
                            <div class="auth-choice-desc">${n["authChoice.desc"]||"\u8BF7\u9009\u62E9\u8BFB\u53D6\u672C\u5730\u5DF2\u6388\u6743\u8D26\u53F7\u6216\u6388\u6743\u767B\u5F55\u3002"}</div>
                            <div class="auth-choice-tip">${n["authChoice.tip"]||"\u6388\u6743\u767B\u5F55\u9002\u7528\u4E8E\u65E0\u5BA2\u6237\u7AEF\uFF1B\u672C\u5730\u8BFB\u53D6\u4EC5\u5BF9\u5F53\u524D\u673A\u5668\u751F\u6548\u3002"}</div>
                        </div>
                        <div class="auth-choice-grid">
                            <div class="auth-choice-card">
                                <div class="auth-choice-header">
                                    <span class="auth-choice-icon">\u{1F5A5}\uFE0F</span>
                                    <div>
                                        <div class="auth-choice-title">${n["authChoice.localTitle"]||"\u8BFB\u53D6\u672C\u5730\u5DF2\u6388\u6743\u8D26\u53F7"}</div>
                                        <div class="auth-choice-text">${n["authChoice.localDesc"]||"\u8BFB\u53D6\u672C\u673A Antigravity \u5BA2\u6237\u7AEF\u5DF2\u6388\u6743\u8D26\u53F7\uFF0C\u4E0D\u91CD\u65B0\u6388\u6743\uFF0C\u4EC5\u590D\u7528\u73B0\u6709\u6388\u6743\u3002"}</div>
                                    </div>
                                </div>
                                <button id="auth-choice-local-btn" class="at-btn at-btn-primary auth-choice-btn">
                                    ${n["authChoice.localBtn"]||"\u8BFB\u53D6\u672C\u5730\u6388\u6743"}
                                </button>
                            </div>
                            <div class="auth-choice-card">
                                <div class="auth-choice-header">
                                    <span class="auth-choice-icon">\u{1F510}</span>
                                    <div>
                                        <div class="auth-choice-title">${n["authChoice.oauthTitle"]||"\u6388\u6743\u767B\u5F55\uFF08\u4E91\u7AEF\u6388\u6743\uFF09"}</div>
                                        <div class="auth-choice-text">${n["authChoice.oauthDesc"]||"\u901A\u8FC7 Google OAuth \u65B0\u6388\u6743\uFF0C\u9002\u7528\u4E8E\u65E0\u5BA2\u6237\u7AEF\u573A\u666F\uFF0C\u53EF\u64A4\u9500\u3002"}</div>
                                    </div>
                                </div>
                                <button id="auth-choice-oauth-btn" class="at-btn at-btn-primary auth-choice-btn">
                                    ${n["authChoice.oauthBtn"]||"\u53BB\u6388\u6743\u767B\u5F55"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,document.body.appendChild(e),document.getElementById("close-auth-choice-modal")?.addEventListener("click",Je),e.addEventListener("click",s=>{s.target===e&&Je()}));let t=e.querySelector("#auth-choice-oauth-btn"),o=e.querySelector("#auth-choice-local-btn"),a=t.cloneNode(!0);t.parentNode.replaceChild(a,t);let i=o.cloneNode(!0);o.parentNode.replaceChild(i,o),e.querySelector("#auth-choice-oauth-btn")?.addEventListener("click",()=>{h.postMessage({command:"autoTrigger.authorize"}),Je()}),e.querySelector("#auth-choice-local-btn")?.addEventListener("click",()=>{Ye(),h.postMessage({command:"autoTrigger.importLocal"}),Je()}),e.classList.remove("hidden")}function Je(){let e=document.getElementById("auth-choice-modal");e&&e.classList.add("hidden")}function Ln(){let e=document.createElement("div");e.className="auto-group-toolbar",e.innerHTML=`
            <span class="grouping-hint">
                ${n["grouping.description"]||'This mode aggregates models sharing the same quota. Supports renaming, sorting, and status bar sync. Click "Manage Groups" to customize, or toggle "Quota Groups" above to switch back.'}
            </span>
            <button id="manage-group-btn" class="auto-group-link" title="${n["customGrouping.title"]||"Manage Groups"}">
                <span class="icon">\u2699\uFE0F</span>
                ${n["customGrouping.title"]||"Manage Groups"}
            </button>
        `,T.appendChild(e);let t=e.querySelector("#manage-group-btn");t&&t.addEventListener("click",Mn)}function Mn(){if(!qe||!I)return;let e=I.allModels||I.models||[];C.allModels=e,C.groupMappings={...E.groupMappings||{}},C.smartGroupCanonicalNames=null;let t=new Map,o=E.groupCustomNames||{};for(let a of e){let i=C.groupMappings[a.modelId];if(i){if(!t.has(i)){let s="";for(let r of Object.keys(o))if(C.groupMappings[r]===i){s=o[r];break}t.set(i,{id:i,name:s||`Group ${t.size+1}`,modelIds:[]})}t.get(i).modelIds.push(a.modelId)}}C.groups=Ae(Array.from(t.values()),e),xe(),qe.classList.remove("hidden")}function at(){qe&&qe.classList.add("hidden")}function xe(){let e=document.getElementById("custom-groups-list"),t=document.getElementById("ungrouped-models-list");if(!e||!t)return;let o=new Set;C.groups.forEach(i=>i.modelIds.forEach(s=>o.add(s))),C.groups.length===0?e.innerHTML=`<div class="empty-groups-hint">${n["customGrouping.noModels"]||'No groups yet. Click "Add Group" to create one.'}</div>`:(e.innerHTML=C.groups.map((i,s)=>{let r=i.modelIds.map(c=>{let y=C.allModels.find(w=>w.modelId===c),g=y?E.modelCustomNames?.[c]||y.label:c;return`
                        <span class="custom-model-tag" data-model-id="${f(c)}">
                            ${f(g)}
                            <button class="remove-model-btn" data-group-index="${s}" data-model-id="${f(c)}" title="${f(n["customGrouping.removeModel"]||"Remove")}">\xD7</button>
                        </span>
                    `}).join("");return`
                    <div class="custom-group-item" data-group-index="${s}">
                        <div class="custom-group-header">
                            <div class="custom-group-name">
                                <span>\u{1F4E6}</span>
                                <input type="text" value="${f(i.name)}" data-group-index="${s}" placeholder="Group name...">
                            </div>
                            <div class="custom-group-actions">
                                <button class="delete-group-btn" data-group-index="${s}" title="${f(n["customGrouping.deleteGroup"]||"Delete Group")}">\u{1F5D1}\uFE0F</button>
                            </div>
                        </div>
                        <div class="custom-group-models">
                            ${r}
                            <button class="add-model-btn" data-group-index="${s}">
                                \u2795 ${f(n["customGrouping.addModel"]||"Add Model")}
                            </button>
                        </div>
                    </div>
                `}).join(""),e.querySelectorAll(".remove-model-btn").forEach(i=>{i.addEventListener("click",An)}),e.querySelectorAll(".delete-group-btn").forEach(i=>{i.addEventListener("click",Cn)}),e.querySelectorAll(".add-model-btn").forEach(i=>{i.addEventListener("click",$n)}),e.querySelectorAll(".custom-group-name input").forEach(i=>{i.addEventListener("change",wn)}));let a=C.allModels.filter(i=>!o.has(i.modelId));a.length===0?t.innerHTML=`<div style="color: var(--text-secondary); font-size: 12px;">${n["customGrouping.noModels"]||"All models are grouped"}</div>`:t.innerHTML=a.map(i=>{let s=E.modelCustomNames?.[i.modelId]||i.label,r=(i.remainingPercentage||0).toFixed(0);return`
                    <div class="ungrouped-model-item" data-model-id="${f(i.modelId)}" title="${f(i.modelId)}">
                        ${f(s)}
                        <span class="quota-badge">${r}%</span>
                    </div>
                `}).join("")}function In(){C.smartGroupCanonicalNames=null;let e="custom_group_"+Date.now();C.groups.push({id:e,name:`Group ${C.groups.length+1}`,modelIds:[]}),xe()}function Cn(e){C.smartGroupCanonicalNames=null;let t=parseInt(e.target.dataset.groupIndex,10);!isNaN(t)&&t>=0&&t<C.groups.length&&(C.groups.splice(t,1),xe())}function An(e){C.smartGroupCanonicalNames=null,e.stopPropagation();let t=parseInt(e.target.dataset.groupIndex,10),o=e.target.dataset.modelId;if(!isNaN(t)&&o){let a=C.groups[t];a&&(a.modelIds=a.modelIds.filter(i=>i!==o),xe())}}function wn(e){C.smartGroupCanonicalNames=null;let t=parseInt(e.target.dataset.groupIndex,10);!isNaN(t)&&C.groups[t]&&(C.groups[t].name=e.target.value.trim()||`Group ${t+1}`)}function $n(e){C.smartGroupCanonicalNames=null;let t=parseInt(e.target.dataset.groupIndex,10);if(isNaN(t))return;let o=C.groups[t];if(!o)return;let a=new Set;C.groups.forEach(r=>r.modelIds.forEach(c=>a.add(c)));let i=C.allModels.filter(r=>!a.has(r.modelId));if(i.length===0){V(n["customGrouping.noModels"]||"No available models","info");return}let s=null;if(o.modelIds.length>0){let r=o.modelIds[0],c=C.allModels.find(y=>y.modelId===r);c&&(s={remainingPercentage:c.remainingPercentage,resetTimeDisplay:c.resetTimeDisplay})}Sn(e.target,i,s,r=>{o.modelIds.push(r),xe()})}function Sn(e,t,o,a){let i=document.querySelector(".model-select-dropdown");i&&i.remove();let s=document.createElement("div");s.className="model-select-dropdown";let r=e.getBoundingClientRect();s.style.position="fixed",s.style.left=r.left+"px",s.style.top=r.bottom+4+"px";let c=t.map(u=>{let v=!0,M="";return o&&(u.remainingPercentage!==o.remainingPercentage?(v=!1,M=n["customGrouping.quotaMismatch"]||"Quota mismatch"):u.resetTimeDisplay!==o.resetTimeDisplay&&(v=!1,M=n["customGrouping.resetMismatch"]||"Reset time mismatch")),{model:u,isCompatible:v,incompatibleReason:M}});c.sort((u,v)=>u.isCompatible&&!v.isCompatible?-1:!u.isCompatible&&v.isCompatible?1:0);let y=c.some(u=>u.isCompatible);s.innerHTML=`
            <div class="model-select-list">
                ${c.map(({model:u,isCompatible:v,incompatibleReason:M})=>{let X=E.modelCustomNames?.[u.modelId]||u.label,Y=(u.remainingPercentage||0).toFixed(1);return`
                        <label class="model-select-item ${v?"":"disabled"}" 
                             data-model-id="${f(u.modelId)}" 
                             data-compatible="${v}">
                            <input type="checkbox" class="model-checkbox" 
                                   value="${f(u.modelId)}" 
                                   ${v?"":"disabled"}>
                            <span class="model-name">${f(X)}</span>
                            <span class="model-quota">${Y}%</span>
                            ${v?"":`<span class="incompatible-reason">${f(M)}</span>`}
                        </label>
                    `}).join("")}
            </div>
            ${y?`
                <div class="model-select-footer">
                    <button class="btn-confirm-add" disabled>
                        ${f(n["customGrouping.addModel"]||"Add")} (<span class="selected-count">0</span>)
                    </button>
                </div>
            `:""}
        `,document.body.appendChild(s);let g=s.querySelector(".btn-confirm-add"),w=s.querySelector(".selected-count"),k=s.querySelectorAll(".model-checkbox"),O=()=>{let u=s.querySelectorAll(".model-checkbox:checked"),v=u.length;w&&(w.textContent=v),g&&(g.disabled=v===0);let M=o;if(!M&&v>0){let X=u[0].value,Y=c.find(oe=>oe.model.modelId===X);Y&&(M={remainingPercentage:Y.model.remainingPercentage,resetTimeDisplay:Y.model.resetTimeDisplay})}k.forEach(X=>{if(X.checked)return;let Y=X.value,oe=c.find(Qe=>Qe.model.modelId===Y);if(!oe)return;let G=X.closest(".model-select-item");if(!G)return;let Z=!0,me="";M&&(oe.model.remainingPercentage!==M.remainingPercentage?(Z=!1,me=n["customGrouping.quotaMismatch"]||"Quota mismatch"):oe.model.resetTimeDisplay!==M.resetTimeDisplay&&(Z=!1,me=n["customGrouping.resetMismatch"]||"Reset time mismatch")),X.disabled=!Z,G.classList.toggle("disabled",!Z);let ie=G.querySelector(".incompatible-reason");Z?ie&&ie.remove():(ie||(ie=document.createElement("span"),ie.className="incompatible-reason",G.appendChild(ie)),ie.textContent=me)})};k.forEach(u=>{u.disabled||u.addEventListener("change",O)}),g&&g.addEventListener("click",u=>{u.stopPropagation();let v=Array.from(s.querySelectorAll(".model-checkbox:checked")).map(M=>M.value);v.length>0&&(v.forEach(M=>a(M)),s.remove())});let J=u=>{!s.contains(u.target)&&u.target!==e&&(s.remove(),document.removeEventListener("click",J))};setTimeout(()=>{document.addEventListener("click",J)},10)}function Bn(){let e=C.allModels;if(!e||e.length===0){V(n["customGrouping.noModels"]||"No models available","info");return}let t=[{id:"claude",name:"Claude",family:"claude",modelIds:["MODEL_OPENAI_GPT_OSS_120B_MEDIUM","MODEL_PLACEHOLDER_M12","MODEL_PLACEHOLDER_M26","MODEL_CLAUDE_4_5_SONNET","MODEL_CLAUDE_4_5_SONNET_THINKING","MODEL_PLACEHOLDER_M35"]},{id:"g3_pro",name:"Gemini Pro",family:"gemini_pro",modelIds:["MODEL_PLACEHOLDER_M36","MODEL_PLACEHOLDER_M37","MODEL_PLACEHOLDER_M7","MODEL_PLACEHOLDER_M8"]},{id:"g3_flash",name:"Gemini Flash",family:"gemini_flash",modelIds:["MODEL_PLACEHOLDER_M18"]},{id:"g3_image",name:"Gemini Image",family:"gemini_image",modelIds:["MODEL_PLACEHOLDER_M9"]}],o=new Map,a={};for(let s of t){let r=[];for(let c of e){let y=s.modelIds.includes(c.modelId),w=A(c.modelId,c.label)===s.family;(y||w)&&r.push(c.modelId)}if(r.length>0){for(let c of r)a[c]=s.name;o.set(s.id,{id:s.id,name:s.name,modelIds:r})}}C.groups=Ae(Array.from(o.values()),e),C.smartGroupCanonicalNames=a,xe();let i=(n["customGrouping.smartGroupCount"]||"Auto Group: {count} groups").replace("{count}",C.groups.length);V(i,"success")}function xn(){C.groups.filter(i=>i.modelIds.length===0).length>0&&(C.groups=C.groups.filter(i=>i.modelIds.length>0));let t={},o={},a=C.smartGroupCanonicalNames;for(let i of C.groups){let s=i.modelIds.sort().join("_");for(let r of i.modelIds)t[r]=s,a&&a[r]?o[r]=a[r]:o[r]=i.name}C.smartGroupCanonicalNames=null,h.postMessage({command:"saveCustomGrouping",customGroupMappings:t,customGroupNames:o}),V(n["customGrouping.saved"]||"Groups saved","success"),at()}let Ge=!1;function kn(e){if(Q)return;let t=document.createElement("div");t.className="card full-width profile-card";let o=k=>F?'<span class="tag masked">***</span>':k?`<span class="tag success">${n["feature.enabled"]||"Enabled"}</span>`:`<span class="tag disabled">${n["feature.disabled"]||"Disabled"}</span>`,a=k=>F?"***":k,i="";e.upgradeText&&e.upgradeUri&&!F&&(i=`
            <div class="upgrade-info">
                <div class="upgrade-text">${e.upgradeText}</div>
                <a href="${e.upgradeUri}" class="upgrade-link" target="_blank">Upgrade Now</a>
            </div>`);let s=Ge?"profile-details":"profile-details hidden",r=Ge?n["profile.less"]||"Show Less":n["profile.more"]||"Show More Details",c=Ge?"rotate(180deg)":"rotate(0deg)",y=F?n["profile.showData"]||"Show":n["profile.hideData"]||"Hide";t.innerHTML=`
            <div class="card-title">
                <span class="label">${f(n["profile.details"]||"Plan Details")}</span>
                <div class="profile-controls">
                    <button class="text-btn" id="profile-mask-btn">${f(y)}</button>
                    <div class="tier-badge">${f(e.tier)}</div>
                </div>
            </div>
            
            <div class="profile-grid">
                ${P(n["profile.email"]||"Email",a(e.email))}
                ${P(n["profile.description"]||"Description",a(e.tierDescription))}
                ${P(n["feature.webSearch"]||"Web Search",o(e.cascadeWebSearchEnabled))}
                ${P(n["feature.browser"]||"Browser Access",o(e.browserEnabled))}
                ${P(n["feature.knowledgeBase"]||"Knowledge Base",o(e.knowledgeBaseEnabled))}
                ${P(n["feature.mcp"]||"MCP Servers",o(e.allowMcpServers))}
                ${P(n["feature.gitCommit"]||"Git Commit",o(e.canGenerateCommitMessages))}
                ${P(n["feature.context"]||"Context Window",a(e.maxNumChatInputTokens))}
            </div>

            <div class="${s}" id="profile-more">
                <div class="profile-grid">
                    ${P(n["feature.fastMode"]||"Fast Mode",o(e.hasAutocompleteFastMode))}
                    ${P(n["feature.moreCredits"]||"Can Buy Credits",o(e.canBuyMoreCredits))}
                    
                    ${P(n["profile.teamsTier"]||"Teams Tier",a(e.teamsTier))}
                    ${P(n["profile.userId"]||"Tier ID",a(e.userTierId||"N/A"))}
                    ${P(n["profile.tabToJump"]||"Tab To Jump",o(e.hasTabToJump))}
                    ${P(n["profile.stickyModels"]||"Sticky Models",o(e.allowStickyPremiumModels))}
                    ${P(n["profile.commandModels"]||"Command Models",o(e.allowPremiumCommandModels))}
                    ${P(n["profile.maxPremiumMsgs"]||"Max Premium Msgs",a(e.maxNumPremiumChatMessages))}
                    ${P(n["profile.chatInstructionsCharLimit"]||"Chat Instructions Char Limit",a(e.maxCustomChatInstructionCharacters))}
                    ${P(n["profile.pinnedContextItems"]||"Pinned Context Items",a(e.maxNumPinnedContextItems))}
                    ${P(n["profile.localIndexSize"]||"Local Index Size",a(e.maxLocalIndexSize))}
                    ${P(n["profile.acceptedTos"]||"Accepted TOS",o(e.acceptedLatestTermsOfService))}
                    ${P(n["profile.customizeIcon"]||"Customize Icon",o(e.canCustomizeAppIcon))}
                    ${P(n["profile.cascadeAutoRun"]||"Cascade Auto Run",o(e.cascadeCanAutoRunCommands))}
                    ${P(n["profile.cascadeBackground"]||"Cascade Background",o(e.canAllowCascadeInBackground))}
                    ${P(n["profile.autoRunCommands"]||"Auto Run Commands",o(e.allowAutoRunCommands))}
                    ${P(n["profile.expBrowserFeatures"]||"Exp. Browser Features",o(e.allowBrowserExperimentalFeatures))}
                </div>
                ${i}
            </div>

            <div class="profile-toggle">
                <button class="btn-text" id="profile-toggle-btn">
                    <span id="profile-toggle-text">${r}</span> 
                    <span id="profile-toggle-icon" style="transform: ${c}">\u25BC</span>
                </button>
            </div>
        `,T.appendChild(t);let g=t.querySelector("#profile-toggle-btn");g&&g.addEventListener("click",Nn);let w=t.querySelector("#profile-mask-btn");w&&w.addEventListener("click",()=>{F=!F,h.postMessage({command:"updateDataMasked",dataMasked:F})})}function Nn(){let e=document.getElementById("profile-more"),t=document.getElementById("profile-toggle-text"),o=document.getElementById("profile-toggle-icon");e.classList.contains("hidden")?(e.classList.remove("hidden"),t.textContent=n["profile.less"]||"Show Less",o.style.transform="rotate(180deg)",Ge=!0):(e.classList.add("hidden"),t.textContent=n["profile.more"]||"Show More Details",o.style.transform="rotate(0deg)",Ge=!1)}function P(e,t){return`
            <div class="detail-item">
                <span class="detail-label">${e}</span>
                <span class="detail-value">${t}</span>
            </div>
        `}function _n(){let e=document.createElement("div");e.className="rich-tooltip hidden",document.body.appendChild(e);let t=null;document.addEventListener("mouseover",o=>{let a=o.target.closest("[data-tooltip-html]");if(a&&a!==t){t=a;let i=a.getAttribute("data-tooltip-html"),s=decodeURIComponent(i);e.innerHTML=s,e.classList.remove("hidden");let r=a.getBoundingClientRect(),c=e.getBoundingClientRect(),y=r.bottom+8,g=r.left+(r.width-c.width)/2;y+c.height>window.innerHeight&&(y=r.top-c.height-8),g<10&&(g=10),g+c.width>window.innerWidth-10&&(g=window.innerWidth-c.width-10),e.style.top=y+"px",e.style.left=g+"px"}}),document.addEventListener("mouseout",o=>{let a=o.target.closest("[data-tooltip-html]");a&&a===t&&(t=null,e.classList.add("hidden"))}),window.addEventListener("scroll",()=>{t&&(t=null,e.classList.add("hidden"))},!0)}function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _t(e){let t=[],o=e.supportedMimeTypes||{};return(e.supportsImages||Object.keys(o).some(a=>a.startsWith("image/")))&&t.push({icon:"\u{1F5BC}\uFE0F",text:n["capability.vision"]||"Vision"}),(o["application/pdf"]||o["text/plain"]||o["application/rtf"])&&t.push({icon:"\u{1F4C4}",text:n["capability.docs"]||"Documents"}),Object.keys(o).some(a=>a.startsWith("video/")||a.startsWith("audio/"))&&t.push({icon:"\u{1F3AC}",text:n["capability.media"]||"Media"}),t}function Dt(e,t){let o=n["dashboard.modelName"]||"Model Name",a=`<div class="rich-tooltip-item"><span class="icon">\u{1F3F7}\uFE0F</span><span class="text">${f(o)}: ${f(e)}</span></div>`,i=t.map(s=>`<div class="rich-tooltip-item ${s.className||""}"><span class="icon">${s.icon}</span><span class="text">${f(s.text)}</span></div>`).join("");return a+i}function Dn(e,t){let o=e.remainingPercentage||0,a=It(o),i=t&&t.includes(e.groupId),s=document.createElement("div");s.className="card group-card draggable",s.setAttribute("data-id",e.groupId),s.setAttribute("data-group-id",e.groupId),s.setAttribute("draggable","true"),s.addEventListener("dragstart",wt,!1),s.addEventListener("dragenter",St,!1),s.addEventListener("dragover",$t,!1),s.addEventListener("dragleave",Bt,!1),s.addEventListener("drop",xt,!1),s.addEventListener("dragend",kt,!1);let r=e.models.map(g=>{let w=_t(g),k=g.tagTitle?`<span class="tag-new tag-new-transient tag-new-hidden-after-burst">${f(g.tagTitle)}</span>`:"",O=g.isRecommended?" recommended":"",u=` data-tooltip-html="${encodeURIComponent(Dt(g.label,w))}"`;return`<span class="group-model-tag${O}" title="${f(g.modelId)}"${u}>${f(g.label)}${k}</span>`}).join("");s.innerHTML=`
            <div class="card-title">
                <span class="drag-handle" data-tooltip="${f(n["dashboard.dragHint"]||"Drag to reorder")}">\u22EE\u22EE</span>
                <span class="group-icon">\u{1F4E6}</span>
                <span class="label group-name">${f(e.groupName)}</span>
                <div class="actions">
                    <button class="rename-group-btn icon-btn" data-group-id="${f(e.groupId)}" data-tooltip-html="${encodeURIComponent('<div class="rich-tooltip-item"><span class="text">'+f(n["grouping.rename"]||"Rename")+"</span></div>")}">\u270F\uFE0F</button>
                    <label class="switch" data-tooltip-html="${encodeURIComponent('<div class="rich-tooltip-item"><span class="text">'+f(n["dashboard.pinHint"]||"Pin to Status Bar")+"</span></div>")}">
                        <input type="checkbox" class="group-pin-toggle" data-group-id="${f(e.groupId)}" ${i?"checked":""}>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
            <div class="progress-circle" style="background: conic-gradient(${a} ${o}%, var(--border-color) ${o}%);">
                <div class="percentage">${o.toFixed(2)}%</div>
            </div>
            <div class="info-row">
                <span>${f(n["dashboard.resetIn"]||"Reset In")}</span>
                <span class="info-value">${f(e.timeUntilResetFormatted)}</span>
            </div>
            <div class="info-row">
                <span>${f(n["dashboard.resetTime"]||"Reset Time")}</span>
                <span class="info-value small">${f(e.resetTimeDisplay||"N/A")}</span>
            </div>
            <div class="info-row">
                <span>${f(n["dashboard.status"]||"Status")}</span>
                <span class="info-value" style="color: ${a}">
                    ${Ct(o)}
                </span>
            </div>
            <div class="group-models">
                <div class="group-models-label">${f(n["grouping.models"]||"Models")} (${e.models.length}):</div>
                <div class="group-models-list">${r}</div>
            </div>
        `;let c=s.querySelector(".rename-group-btn");c&&c.addEventListener("click",g=>{g.stopPropagation(),Ft(e.groupId,e.groupName,e.models.map(w=>w.modelId))});let y=s.querySelector(".group-pin-toggle");y&&y.addEventListener("change",g=>{h.postMessage({command:"toggleGroupPin",groupId:e.groupId})}),T.appendChild(s)}function qn(e,t,o){let a=e.remainingPercentage||0,i=It(a),s=t.includes(e.modelId),r=o&&o[e.modelId]||e.label,c=e.label,y=_t(e),w=` data-tooltip-html="${encodeURIComponent(Dt(r,y))}"`,k=" model-name-has-caps",O=e.tagTitle?`<span class="tag-new tag-new-transient tag-new-hidden-after-burst">${f(e.tagTitle)}</span>`:"",J=e.isRecommended?" card-recommended":"",u=document.createElement("div");u.className=`card draggable${J}`,u.setAttribute("draggable","true"),u.setAttribute("data-id",e.modelId),u.addEventListener("dragstart",wt,!1),u.addEventListener("dragenter",St,!1),u.addEventListener("dragover",$t,!1),u.addEventListener("dragleave",Bt,!1),u.addEventListener("drop",xt,!1),u.addEventListener("dragend",kt,!1),u.innerHTML=`
            <div class="card-title">
                <span class="drag-handle" data-tooltip="${f(n["dashboard.dragHint"]||"Drag to reorder")}">\u22EE\u22EE</span>
                <div class="title-wrapper">
                    <span class="label model-name${k}"${w} title="${f(e.modelId)} (${f(c)})">${f(r)}</span>
                    ${O}
                </div>
                <div class="actions">
                    <button class="rename-model-btn icon-btn" data-model-id="${f(e.modelId)}" data-tooltip-html="${encodeURIComponent('<div class="rich-tooltip-item"><span class="text">'+f(n["model.rename"]||"Rename")+"</span></div>")}">\u270F\uFE0F</button>
                    <label class="switch" data-tooltip-html="${encodeURIComponent('<div class="rich-tooltip-item"><span class="text">'+f(n["dashboard.pinHint"]||"Pin to Status Bar")+"</span></div>")}">
                        <input type="checkbox" class="pin-toggle" data-model-id="${f(e.modelId)}" ${s?"checked":""}>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
            <div class="progress-circle" style="background: conic-gradient(${i} ${a}%, var(--border-color) ${a}%);">
                <div class="percentage">${a.toFixed(2)}%</div>
            </div>
            <div class="info-row">
                <span>${f(n["dashboard.resetIn"]||"Reset In")}</span>
                <span class="info-value">${f(e.timeUntilResetFormatted)}</span>
            </div>
            <div class="info-row">
                <span>${f(n["dashboard.resetTime"]||"Reset Time")}</span>
                <span class="info-value small">${f(e.resetTimeDisplay||"N/A")}</span>
            </div>
            <div class="info-row">
                <span>${f(n["dashboard.status"]||"Status")}</span>
                <span class="info-value" style="color: ${i}">
                    ${Ct(a)}
                </span>
            </div>
        `;let v=u.querySelector(".rename-model-btn");v&&v.addEventListener("click",M=>{M.stopPropagation(),Ut(e.modelId,r,c)}),T.appendChild(u)}Pe()})();})();
