import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

const FImage = {
  props: { src: { default: '', type: String }},
  template: `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
    "
      :style="{backgroundImage: 'url(' + src + ')'}"
    ></div>
  `
}

Vue.component('FImage', FImage);

new Vue({
  el: "#app",
  methods: { ...utils },
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
