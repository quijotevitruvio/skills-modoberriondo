"use strict";(()=>{(function(){"use strict";let h=window.__i18n||{},a=l=>h[l]||l;class g{constructor(t){this.vscode=t,this.state={authorization:null,antigravityToolsSyncEnabled:!1},this.elements={}}updateState(t,c){this.state.authorization=t,c!==void 0&&(this.state.antigravityToolsSyncEnabled=!1)}renderAuthRow(t,c={}){if(!t)return;let{authorization:o}=this.state,n=o?.accounts||[],i=n.length>0,s=o?.activeAccount||(i?n[0].email:null),r=o?.isAuthorized||i,u=`<button class="quota-account-overview-btn" title="${a("accountsOverview.openBtn")||"Accounts Overview"}">\u{1F4CA} ${a("accountsOverview.openBtn")||"Accounts Overview"}</button>`,d="";if(c.showSyncToggleInline?d=`
                    <button class="at-btn at-btn-secondary at-import-btn">${a("autoTrigger.importFromAntigravityTools")}</button>
                `:d=`
                    <button class="at-btn at-btn-primary at-sync-config-btn" title="${a("atSyncConfig.title")||"\u8D26\u53F7\u540C\u6B65\u914D\u7F6E"}">
                        \u2699 ${a("atSyncConfig.btnText")||"\u8D26\u53F7\u540C\u6B65\u914D\u7F6E"}
                    </button>
                `,r&&s){let m=Math.max(n.length-1,0),v=m>0?`<span class="account-count-badge" title="${a("autoTrigger.manageAccounts")}">+${m}</span>`:"",y=`<button class="quota-account-manage-btn at-switch-to-client-btn" title="${a("autoTrigger.switchToClientAccount")}">${a("autoTrigger.switchToClientAccount")}</button>`;t.innerHTML=`
                    <div class="quota-auth-info quota-auth-info-clickable" title="${a("autoTrigger.manageAccounts")}">
                        <span class="quota-auth-email">${s}</span>
                        ${v}
                        ${u}
                        ${y}
                    </div>
                    <div class="quota-auth-actions">
                        ${d}
                    </div>
                 `}else t.innerHTML=`
                    <div class="quota-auth-info">
                        <span class="quota-auth-icon">\u26A0\uFE0F</span>
                        <span class="quota-auth-text">${a("autoTrigger.unauthorized")||"Unauthorized"}</span>
                    </div>
                    <div class="quota-auth-actions">
                        ${d}
                        <button class="at-btn at-btn-primary at-authorize-btn">${a("autoTrigger.authorizeBtn")||"Authorize"}</button>
                    </div>
                `;this._bindEvents(t)}_bindEvents(t){let c=o=>this.vscode.postMessage(o);t.querySelector(".quota-auth-info-clickable")?.addEventListener("click",()=>{this.openAccountManageModal()}),t.querySelector(".quota-account-overview-btn")?.addEventListener("click",o=>{o.stopPropagation();let n=document.querySelector('.tab-btn[data-tab="accounts"]');n?n.click():this.vscode.postMessage({command:"executeCommand",commandId:"agCockpit.openAccountsOverview"})}),t.querySelector(".at-authorize-btn")?.addEventListener("click",()=>{this.openLoginChoiceModal()}),t.querySelector(".at-sync-config-btn")?.addEventListener("click",()=>{this.openSyncConfigModal()}),t.querySelector(".at-import-btn")?.addEventListener("click",()=>{c({command:"antigravityToolsSync.import"})}),t.querySelector(".at-switch-to-client-btn")?.addEventListener("click",o=>{o.stopPropagation(),c({command:"antigravityToolsSync.switchToClient"})})}openAccountManageModal(){let t=document.getElementById("account-manage-modal");t||(t=this._createModal("account-manage-modal",`
                    <div class="modal-content account-manage-content">
                        <div class="modal-header">
                            <h3>${a("autoTrigger.manageAccounts")||"Manage Accounts"}</h3>
                            <button class="close-btn" id="close-account-manage-modal">\xD7</button>
                        </div>
                        <div class="modal-hint" style="padding: 8px 16px; font-size: 12px; color: var(--text-muted); background: var(--bg-secondary); border-bottom: 1px solid var(--border-color);">
                            <span style="margin-right: 12px;">\u{1F4A1} ${a("autoTrigger.manageAccountsHintClick")||"\u70B9\u51FB\u90AE\u7BB1\u53EF\u5207\u6362\u67E5\u770B\u914D\u989D"}</span>
                            <span>\u{1F504} ${a("autoTrigger.manageAccountsHintSwitch")||'\u70B9\u51FB"\u5207\u6362\u767B\u5F55"\u53EF\u5207\u6362\u5BA2\u6237\u7AEF\u767B\u5F55\u8D26\u6237'}</span>
                        </div>
                        <div class="modal-body" id="account-manage-body"></div>
                        <div class="modal-footer" style="display: flex; gap: 10px; justify-content: flex-end;">
                            <button id="add-new-account-btn" class="at-btn at-btn-primary">
                                \u2795 ${a("autoTrigger.addAccount")||"Add Account"}
                            </button>
                        </div>
                    </div>
                `),document.getElementById("close-account-manage-modal")?.addEventListener("click",()=>t.classList.add("hidden")),document.getElementById("add-new-account-btn")?.addEventListener("click",()=>{this.vscode.postMessage({command:"autoTrigger.addAccount"})})),this.renderAccountManageList(),t.classList.remove("hidden")}renderAccountManageList(){let t=document.getElementById("account-manage-body");if(!t)return;let c=this.state.authorization?.accounts||[],o=this.state.authorization?.activeAccount;if(c.length===0){t.innerHTML=`<div class="account-manage-empty">${a("autoTrigger.noAccounts")||"No accounts authorized"}</div>`;return}t.innerHTML=`<div class="account-manage-list">${c.map(n=>{let i=n.email===o,e=n.isInvalid===!0,s=e?"\u26A0\uFE0F":i?"\u2705":"\u{1F464}",r=[i&&!e?`<span class="account-manage-badge">${a("autoTrigger.accountActive")}</span>`:"",e?`<span class="account-manage-badge expired">${a("autoTrigger.tokenExpired")}</span>`:""].join(""),u=`<button class="at-btn at-btn-small at-btn-primary account-switch-login-btn" data-email="${n.email}">${a("autoTrigger.switchLoginBtn")||"\u5207\u6362\u767B\u5F55"}</button>`;return`
                    <div class="account-manage-item ${i?"active":""} ${e?"expired":""}" data-email="${n.email}">
                        <div class="account-manage-info">
                            <span class="account-manage-icon">${s}</span>
                            <span class="account-manage-email">${n.email}</span>
                            ${r}
                        </div>
                        <div class="account-manage-actions">
                            ${u}
                            <button class="at-btn at-btn-small at-btn-danger account-remove-btn" data-email="${n.email}">${a("autoTrigger.deleteBtn")||"\u5220\u9664"}</button>
                        </div>
                    </div>
                `}).join("")}</div>`,t.querySelectorAll(".account-manage-item").forEach(n=>{n.addEventListener("click",i=>{if(i.target.tagName==="BUTTON"||i.target.closest("button")||n.classList.contains("active"))return;let e=n.dataset.email;e&&(this.vscode.postMessage({command:"autoTrigger.switchAccount",email:e}),document.getElementById("account-manage-modal")?.classList.add("hidden"))})}),t.querySelectorAll(".account-switch-login-btn").forEach(n=>n.addEventListener("click",i=>{i.stopPropagation();let e=n.dataset.email;e&&this.showSwitchLoginConfirmModal(e)})),t.querySelectorAll(".account-remove-btn").forEach(n=>n.addEventListener("click",i=>{i.stopPropagation(),typeof window.openRevokeModalForEmail=="function"?window.openRevokeModalForEmail(n.dataset.email):this.vscode.postMessage({command:"autoTrigger.removeAccount",email:n.dataset.email})}))}showSwitchLoginConfirmModal(t){let c=document.getElementById("switch-login-confirm-modal");c||(c=this._createModal("switch-login-confirm-modal",`
                    <div class="modal-content" style="max-width: 400px;">
                        <div class="modal-header">
                            <h3>${a("autoTrigger.switchLoginTitle")||"\u5207\u6362\u767B\u5F55\u8D26\u6237"}</h3>
                            <button class="close-btn" id="switch-login-confirm-close">\xD7</button>
                        </div>
                        <div class="modal-body" style="padding: 20px;">
                            <p style="margin-bottom: 10px;">${a("autoTrigger.switchLoginConfirmText")||"\u786E\u5B9A\u8981\u5207\u6362\u5230\u4EE5\u4E0B\u8D26\u6237\u5417\uFF1F"}</p>
                            <p style="font-weight: bold; color: var(--accent-color); margin-bottom: 15px;" id="switch-login-target-email"></p>
                            <p style="color: var(--warning-color); font-size: 0.9em;">\u26A0\uFE0F ${a("autoTrigger.switchLoginWarning")||"\u6B64\u64CD\u4F5C\u5C06\u91CD\u542F Antigravity \u5BA2\u6237\u7AEF\u4EE5\u5B8C\u6210\u8D26\u6237\u5207\u6362\u3002"}</p>
                        </div>
                        <div class="modal-footer" style="display: flex; gap: 10px; justify-content: flex-end; padding: 15px 20px;">
                            <button class="at-btn at-btn-secondary" id="switch-login-confirm-cancel">${a("common.cancel")||"\u53D6\u6D88"}</button>
                            <button class="at-btn at-btn-primary" id="switch-login-confirm-ok">${a("common.confirm")||"\u786E\u8BA4"}</button>
                        </div>
                    </div>
                `),document.getElementById("switch-login-confirm-close")?.addEventListener("click",()=>c.classList.add("hidden")),document.getElementById("switch-login-confirm-cancel")?.addEventListener("click",()=>c.classList.add("hidden"))),document.getElementById("switch-login-target-email").textContent=t;let o=document.getElementById("switch-login-confirm-ok"),n=o.cloneNode(!0);o.parentNode.replaceChild(n,o),n.addEventListener("click",()=>{c.classList.add("hidden"),this.vscode.postMessage({command:"autoTrigger.switchLoginAccount",email:t}),document.getElementById("account-manage-modal")?.classList.add("hidden")}),c.classList.remove("hidden")}openSyncConfigModal(){let t=document.getElementById("at-sync-config-modal");t||(t=this._createModal("at-sync-config-modal",`
                    <div class="modal-content at-sync-config-content">
                        <div class="modal-header">
                        <h3>\u2699 ${a("atSyncConfig.title")||"\u8D26\u53F7\u540C\u6B65\u914D\u7F6E"}</h3>
                            <button class="close-btn" id="close-at-sync-config-modal">\xD7</button>
                        </div>
                        <div class="modal-body at-sync-config-body">
                            <div class="at-sync-section at-sync-info-section">
                                <details class="at-sync-details at-sync-info-details">
                                    <summary class="at-sync-details-summary">
                                        <div class="at-sync-section-title-row">
                                            <div class="at-sync-section-title">\u2139\uFE0F ${a("atSyncConfig.featureTitle")||"\u529F\u80FD\u8BF4\u660E"}</div>
                                            <span class="at-sync-details-link">
                                                ${a("atSyncConfig.dataAccessDetails")||"\u5C55\u5F00\u8BE6\u60C5\u8BF4\u660E"}
                                            </span>
                                        </div>
                                        <div class="at-sync-description at-sync-info-summary">${a("atSyncConfig.featureSummary")||"\u67E5\u770B\u6570\u636E\u8BBF\u95EE\u4E0E\u540C\u6B65/\u5BFC\u5165\u89C4\u5219\u3002"}</div>
                                    </summary>
                                    <div class="at-sync-details-body">
                                        <div class="at-sync-info-block">
                                            <div class="at-sync-info-subtitle">\u{1F6E1}\uFE0F ${a("atSyncConfig.dataAccessTitle")||"\u6570\u636E\u8BBF\u95EE\u8BF4\u660E"}</div>
                                            <div class="at-sync-description">${a("atSyncConfig.dataAccessDesc")||"\u672C\u529F\u80FD\u4F1A\u8BFB\u53D6\u60A8\u672C\u5730 Antigravity Tools \u4E0E Antigravity \u5BA2\u6237\u7AEF\u7684\u8D26\u6237\u4FE1\u606F\uFF0C\u4EC5\u7528\u4E8E\u672C\u63D2\u4EF6\u6388\u6743/\u5207\u6362\u3002"}</div>
                                            <div class="at-sync-path-info">
                                                <span class="at-sync-path-label">${a("atSyncConfig.readPathTools")||"Antigravity Tools \u8DEF\u5F84"}:</span>
                                                <code class="at-sync-path">~/.antigravity_tools/</code>
                                            </div>
                                            <div class="at-sync-path-info">
                                                <span class="at-sync-path-label">${a("atSyncConfig.readPathLocal")||"Antigravity \u5BA2\u6237\u7AEF\u8DEF\u5F84"}:</span>
                                                <code class="at-sync-path">.../Antigravity/User/globalStorage/state.vscdb</code>
                                            </div>
                                            <div class="at-sync-data-list">
                                                <span class="at-sync-data-label">${a("atSyncConfig.readData")||"\u8BFB\u53D6\u5185\u5BB9"}:</span>
                                                <span class="at-sync-data-items">${a("atSyncConfig.readDataItems")||"\u8D26\u6237\u90AE\u7BB1\u3001Refresh Token\uFF08\u672C\u5730\u8BFB\u53D6\uFF09"}</span>
                                            </div>
                                        </div>
                                        <div class="at-sync-info-block">
                                            <div class="at-sync-info-line">
                                                <span class="at-sync-info-label">${a("atSyncConfig.manualImportTitle")||"\u624B\u52A8\u5BFC\u5165"}\uFF1A</span>
                                                <span class="at-sync-info-text">${a("atSyncConfig.manualImportDesc")||"\u5206\u522B\u5BFC\u5165\u672C\u5730\u8D26\u6237\u6216 Antigravity Tools \u8D26\u6237\uFF0C\u4EC5\u6267\u884C\u4E00\u6B21\u3002"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                        </div>
                            <div class="at-sync-section">
                                <div class="at-sync-section-title">\u{1F4E5} ${a("atSyncConfig.manualImportTitle")||"\u624B\u52A8\u5BFC\u5165"}</div>
                                <div class="at-sync-import-actions">
                                    <button id="at-sync-modal-import-local-btn" class="at-btn at-btn-primary at-sync-import-btn">${a("atSyncConfig.importLocal")||"\u5BFC\u5165\u672C\u5730\u8D26\u6237"}</button>
                                    <button id="at-sync-modal-import-tools-btn" class="at-btn at-btn-primary at-sync-import-btn">${a("atSyncConfig.importTools")||"\u5BFC\u5165 Antigravity Tools \u8D26\u6237"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `),document.getElementById("close-at-sync-config-modal")?.addEventListener("click",()=>t.classList.add("hidden")),t.querySelector("#at-sync-modal-import-local-btn")?.addEventListener("click",()=>{typeof window.showLocalAuthImportLoading=="function"&&window.showLocalAuthImportLoading(),this.vscode.postMessage({command:"autoTrigger.importLocal"}),t.classList.add("hidden")}),t.querySelector("#at-sync-modal-import-tools-btn")?.addEventListener("click",()=>{this.vscode.postMessage({command:"antigravityToolsSync.import"}),t.classList.add("hidden")})),t.querySelectorAll(".at-sync-details").forEach(c=>{c.removeAttribute("open")}),t.classList.remove("hidden")}openLoginChoiceModal(){let t=document.getElementById("auth-choice-modal");t||(t=this._createModal("auth-choice-modal",`
                    <div class="modal-content auth-choice-content">
                        <div class="modal-header">
                            <h3>${a("authChoice.title")||"\u9009\u62E9\u767B\u5F55\u65B9\u5F0F"}</h3>
                            <button class="close-btn" id="close-auth-choice-modal">\xD7</button>
                        </div>
                        <div class="modal-body auth-choice-body">
                            <div class="auth-choice-info">
                                <div class="auth-choice-desc">${a("authChoice.desc")||"\u8BF7\u9009\u62E9\u8BFB\u53D6\u672C\u5730\u5DF2\u6388\u6743\u8D26\u53F7\u6216\u6388\u6743\u767B\u5F55\u3002"}</div>
                                <div class="auth-choice-tip">${a("authChoice.tip")||"\u6388\u6743\u767B\u5F55\u9002\u7528\u4E8E\u65E0\u5BA2\u6237\u7AEF\uFF1B\u672C\u5730\u8BFB\u53D6\u4EC5\u5BF9\u5F53\u524D\u673A\u5668\u751F\u6548\u3002"}</div>
                            </div>
                            <div class="auth-choice-grid">
                                <div class="auth-choice-card">
                                    <div class="auth-choice-header">
                                        <span class="auth-choice-icon">\u{1F5A5}\uFE0F</span>
                                        <div>
                                            <div class="auth-choice-title">${a("authChoice.localTitle")||"\u8BFB\u53D6\u672C\u5730\u5DF2\u6388\u6743\u8D26\u53F7"}</div>
                                            <div class="auth-choice-text">${a("authChoice.localDesc")||"\u8BFB\u53D6\u672C\u673A Antigravity \u5BA2\u6237\u7AEF\u5DF2\u6388\u6743\u8D26\u53F7\uFF0C\u4E0D\u91CD\u65B0\u6388\u6743\uFF0C\u4EC5\u590D\u7528\u73B0\u6709\u6388\u6743\u3002"}</div>
                                        </div>
                                    </div>
                                    <button id="auth-choice-local-btn" class="at-btn at-btn-primary auth-choice-btn">
                                        ${a("authChoice.localBtn")||"\u8BFB\u53D6\u672C\u5730\u6388\u6743"}
                                    </button>
                                </div>
                                <div class="auth-choice-card">
                                    <div class="auth-choice-header">
                                        <span class="auth-choice-icon">\u{1F510}</span>
                                        <div>
                                            <div class="auth-choice-title">${a("authChoice.oauthTitle")||"\u6388\u6743\u767B\u5F55\uFF08\u4E91\u7AEF\u6388\u6743\uFF09"}</div>
                                            <div class="auth-choice-text">${a("authChoice.oauthDesc")||"\u901A\u8FC7 Google OAuth \u65B0\u6388\u6743\uFF0C\u9002\u7528\u4E8E\u65E0\u5BA2\u6237\u7AEF\u573A\u666F\uFF0C\u53EF\u64A4\u9500\u3002"}</div>
                                        </div>
                                    </div>
                                    <button id="auth-choice-oauth-btn" class="at-btn at-btn-primary auth-choice-btn">
                                        ${a("authChoice.oauthBtn")||"\u53BB\u6388\u6743\u767B\u5F55"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `),document.getElementById("close-auth-choice-modal")?.addEventListener("click",()=>t.classList.add("hidden")),t.querySelector("#auth-choice-oauth-btn")?.addEventListener("click",()=>{this.vscode.postMessage({command:"autoTrigger.authorize"}),t.classList.add("hidden")}),t.querySelector("#auth-choice-local-btn")?.addEventListener("click",()=>{typeof window.showLocalAuthImportLoading=="function"&&window.showLocalAuthImportLoading(),this.vscode.postMessage({command:"autoTrigger.importLocal"}),t.classList.add("hidden")})),t.classList.remove("hidden")}_createModal(t,c){let o=document.createElement("div");return o.id=t,o.className="modal hidden",o.innerHTML=c,document.body.appendChild(o),o.addEventListener("click",n=>{n.target===o&&o.classList.add("hidden")}),o}}window.AntigravityAuthUI=g})();})();
