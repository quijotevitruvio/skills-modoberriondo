const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NodeCreator-D1ZREuE4.js","./_plugin-vue_export-helper-BwBpWJRZ.js","./src-jviYSG25.js","./preload-helper-dyVz7ck7.js","./truncate-C0KYt7i3.js","./core-CRbPymLT.js","./vue.runtime.esm-bundler-tP5dCd7J.js","./chunk-6z4oVpB-.js","./CalendarDate-DgQUMbNo.js","./get-BcEmeOxn.js","./_MapCache-CcdIl4Ae.js","./sanitize-html-CbW56HUN.js","./empty-BuGRxzl4.js","./path-browserify-RUt2u7iT.js","./en-CF30SCh2.js","./nodeCreator.store-D8vsvp4s.js","./constants-DFrdZNjB.js","./merge-DhuTk1HM.js","./builder.store-C_igD262.js","./_baseOrderBy-Y81pV9tA.js","./dateformat-hG8NERse.js","./useDebounce-Br5_1ug-.js","./nodeIcon-D6W0HrzJ.js","./exports-Crx_gvt_.js","./useCanvasOperations-sR7q-eVM.js","./useClipboard-Cb8phDJq.js","./usePinnedData-y0yMrx3i.js","./folders.store-Cb4lh2bl.js","./executions.store-Dej5OXJ8.js","./semver-NeRHdPa0.js","./banners.store-CCZnclMQ.js","./assistant.store-DKPz9xJn.js","./NodeIcon-BrD-uism.js","./ItemsRenderer-Df7TEOby.js","./useActions-CWLezGN7.js","./chatPanel.store-D7DwY8bv.js","./CommunityNodeUpdateInfo-hnxEg740.js"])))=>i.map(i=>d[i]);
import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { rt as useI18n } from "./core-CRbPymLT.js";
import { ft as AskAssistantIcon_default, ht as N8nTooltip_default, xn as N8nButton_default, xt as N8nIconButton_default } from "./src-jviYSG25.js";
import "./en-CF30SCh2.js";
import { t as __vitePreload } from "./preload-helper-dyVz7ck7.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-C0KYt7i3.js";
import { aa as useUIStore, i as useFocusPanelStore, k as useTelemetry, q as getMidCanvasPosition, t as useBuilderStore } from "./builder.store-C_igD262.js";
import "./empty-BuGRxzl4.js";
import "./get-BcEmeOxn.js";
import "./sanitize-html-CbW56HUN.js";
import "./CalendarDate-DgQUMbNo.js";
import "./path-browserify-RUt2u7iT.js";
import "./_MapCache-CcdIl4Ae.js";
import { St as NODE_CREATOR_OPEN_SOURCES, U as DEFAULT_STICKY_HEIGHT, W as DEFAULT_STICKY_WIDTH, sr as STICKY_NODE_TYPE } from "./constants-DFrdZNjB.js";
import "./merge-DhuTk1HM.js";
import "./_baseOrderBy-Y81pV9tA.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Br5_1ug-.js";
import { t as useAssistantStore } from "./assistant.store-DKPz9xJn.js";
import { t as useChatPanelStore } from "./chatPanel.store-D7DwY8bv.js";
import "./retry-BgHaYzbB.js";
import "./executions.store-Dej5OXJ8.js";
import "./useRunWorkflow-COwV-GRA.js";
import "./usePinnedData-y0yMrx3i.js";
import "./nodeCreator.store-D8vsvp4s.js";
import "./nodeIcon-D6W0HrzJ.js";
import "./useClipboard-Cb8phDJq.js";
import "./useCanvasOperations-sR7q-eVM.js";
import "./folders.store-Cb4lh2bl.js";
import "./NodeIcon-BrD-uism.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-D8PAK5JP.js";
import "./versions.store-BHEbLE3J.js";
import "./usePageRedirectionHelper-B9BC-q-S.js";
import "./dataTable.store-B31vPLTc.js";
import { t as useCommandBar } from "./useCommandBar-CKVZjUb_.js";
import "./uniqBy-nJVp_0pq.js";
import "./ProjectIcon-DY8gGuHX.js";
import "./CredentialIcon-B86r9lYn.js";
import "./sortByProperty-Cn7iGKYu.js";
import "./constants-CC9PBxB_.js";
import "./useRecentResources-DqiZli1w.js";
import { t as useActions } from "./useActions-CWLezGN7.js";
import "./chat.store-ZoTNtSIo.js";
import "./fileUtils-CRWqOQje.js";
var NodeCreation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreation",
	props: {
		nodeViewScale: {},
		createNodeActive: {
			type: Boolean,
			default: false
		},
		focusPanelActive: { type: Boolean }
	},
	emits: [
		"addNodes",
		"toggleNodeCreator",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-D1ZREuE4.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]), import.meta.url));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const { isEnabled: isCommandBarEnabled } = useCommandBar();
		const { getAddedNodesAndConnections } = useActions();
		function openNodeCreator() {
			emit("toggleNodeCreator", {
				source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
				createNodeActive: true
			});
		}
		function addStickyNote() {
			if (document.activeElement) document.activeElement.blur();
			const offset = [...uiStore.nodeViewOffsetPosition];
			const position = getMidCanvasPosition(props.nodeViewScale, offset);
			position[0] -= 240 / 2;
			position[1] -= 160 / 2;
			emit("addNodes", getAddedNodesAndConnections([{
				type: STICKY_NODE_TYPE,
				position
			}]));
		}
		function closeNodeCreator(hasAddedNodes = false) {
			if (props.createNodeActive) emit("toggleNodeCreator", {
				createNodeActive: false,
				hasAddedNodes
			});
			emit("close");
		}
		function nodeTypeSelected(value) {
			emit("addNodes", getAddedNodesAndConnections(value));
			closeNodeCreator(true);
		}
		function toggleFocusPanel() {
			focusPanelStore.toggleFocusPanel();
			telemetry.track(focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel", {
				source: "canvasButton",
				parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
			});
		}
		async function onAskAssistantButtonClick() {
			if (builderStore.isAIBuilderEnabled) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded
			});
		}
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [!_ctx.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openNodesPanel"),
					shortcut: { keys: ["Tab"] },
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "plus",
						type: "tertiary",
						"data-test-id": "node-creator-plus-button",
						onClick: openNodeCreator
					})]),
					_: 1
				}, 8, ["label"]),
				unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: 0,
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "search",
						type: "tertiary",
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						type: "tertiary",
						icon: "sticky-note",
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openFocusPanel"),
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						type: "tertiary",
						size: "large",
						icon: "panel-right",
						class: normalizeClass(_ctx.focusPanelActive ? _ctx.$style.activeButton : ""),
						active: _ctx.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["class", "active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "tertiary",
						size: "large",
						square: "",
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: _ctx.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_13o6j_123",
	icon: "_icon_13o6j_134",
	activeButton: "_activeButton_13o6j_143"
};
var NodeCreation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreation_default as default };
