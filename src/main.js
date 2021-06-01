import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "./theme/element/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

Vue.use(ElementUI);
Vue.config.productionTip = false;
library.add(fas);
dom.watch();
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
