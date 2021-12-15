import btn from "./components/btn.vue";
import spinner from "./components/spinner.vue";
import callout from "./components/callout.vue";
import card from "./components/card.vue";
import inputT from "./components/inputT.vue";
import inputP from "./components/inputP.vue";
import inputE from "./components/inputE.vue";
import inputN from "./components/inputN.vue";
import inputS from "./components/inputS.vue";
import dropdown from "./components/dropdown.vue";
import toggledark from "./components/toggledark.vue";
import togglesidebar from "./components/togglesidebar.vue";
import modal from "./components/modal.vue";
import toast from "./components/toast.vue";
import table from "./components/table.vue";
import print from "./components/print.vue";

// Layouts
import layout from "./components/layout.vue";
import header from "./components/header.vue";

export default {
  install(Vue: any) {
    Vue.component("SBtn", btn);
    Vue.component("SDropdown", dropdown);

    Vue.component("SSpinner", spinner);
    Vue.component("SCallout", callout);
    Vue.component("SCard", card);
    Vue.component("SInputT", inputT);
    Vue.component("SInputP", inputP);
    Vue.component("SInputE", inputE);
    Vue.component("SInputN", inputN);
    Vue.component("SInputS", inputS);
    Vue.component("SLayout", layout);
    Vue.component("SToggledark", toggledark);
    Vue.component("STogglesidebar", togglesidebar);
    Vue.component("SModal", modal);
    Vue.component("SToast", toast);
    Vue.component("STable", table);
    Vue.component("SPrint", print);
    Vue.component("SHeader", header);
  },
};
