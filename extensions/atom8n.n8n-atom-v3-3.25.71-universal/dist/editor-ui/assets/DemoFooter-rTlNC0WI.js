import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./core-CRbPymLT.js";
import "./src-jviYSG25.js";
import "./en-CF30SCh2.js";
import "./preload-helper-dyVz7ck7.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-C0KYt7i3.js";
import { P as useWorkflowsStore } from "./builder.store-C_igD262.js";
import "./empty-BuGRxzl4.js";
import "./get-BcEmeOxn.js";
import "./sanitize-html-CbW56HUN.js";
import "./CalendarDate-DgQUMbNo.js";
import "./path-browserify-RUt2u7iT.js";
import "./_MapCache-CcdIl4Ae.js";
import "./constants-DFrdZNjB.js";
import "./merge-DhuTk1HM.js";
import "./_baseOrderBy-Y81pV9tA.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Br5_1ug-.js";
import "./assistant.store-DKPz9xJn.js";
import "./chatPanel.store-D7DwY8bv.js";
import "./retry-BgHaYzbB.js";
import "./executions.store-Dej5OXJ8.js";
import "./useRunWorkflow-COwV-GRA.js";
import "./usePinnedData-y0yMrx3i.js";
import "./nodeCreator.store-D8vsvp4s.js";
import "./nodeIcon-D6W0HrzJ.js";
import "./useClipboard-Cb8phDJq.js";
import "./useCanvasOperations-sR7q-eVM.js";
import { t as LogsPanel_default } from "./LogsPanel-G_3Pzl_1.js";
import "./folders.store-Cb4lh2bl.js";
import "./NodeIcon-BrD-uism.js";
import "./KeyboardShortcutTooltip-D8PAK5JP.js";
import "./isEmpty-OU6fI2_e.js";
import "./NDVEmptyState-33UoX00I.js";
import "./externalSecrets.ee.store-BEGIXqyx.js";
import "./uniqBy-nJVp_0pq.js";
import "./RunDataHtml-Cleia4Cj.js";
import "./VueMarkdown-CQqJL9vK.js";
import "./schemaPreview.store-Cm2SmZ2P.js";
import "./vue-json-pretty-CsGX66mG.js";
import "./dateFormatter-ik4-9_9r.js";
import "./useExecutionHelpers-B-1Qomsz.js";
import "./useKeybindings-DQL1HIwF.js";
import "./fileUtils-CRWqOQje.js";
import "./core-CP5FY4aX.js";
import "./ChatFile-xZxmc2nV.js";
import "./xml-B_oj6Mle.js";
import "./AnimatedSpinner-DmPN4poP.js";
import "./useLogsTreeExpand-PJMYwOqv.js";
import "./core-B9gt_4yk.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
export { DemoFooter_default as default };
