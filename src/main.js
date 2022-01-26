import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
console.log('子应用资源加载-------------')
export async function bootstrap() {
  console.log("vue app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
var subapp = 1;
export async function mount({container}) {
  window.subapp = subapp++;
  console.log(window.subapp, window['sub-app-1']);
  new Vue({
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  // ReactDOM.unmountComponentAtNode(
  //   props.container
  //     ? props.container.querySelector("#root")
  //     : document.getElementById("root")
  // );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}
