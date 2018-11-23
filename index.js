import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  methods: utils,
  template: `
  <div>
    <f-fetch-data url="./README.md">
      <f-theme slot-scope="data" theme="blue">
        <f-content-slides
          style="--emphasis: var(--yellow)"
          :content="data.value"
          style="height: 100vh; --f-content-slides-padding: calc(var(--base) * 8)  calc(var(--base) * 10);"
          class="break"
        />
      </f-theme>
    </f-fetch-data>
  </div>
  `
});
