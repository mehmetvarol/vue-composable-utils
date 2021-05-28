import VueCompositionAPI from '@vue/composition-api';
import BindInputComponent from './components/BindInputComponent.vue';
import BindSelectComponent from './components/BindSelectComponent.vue';
import I18nDateComponent from './components/I18nDateComponent.vue';
import DateComponent from './components/DateComponent.vue';
import DebounceComponent from './components/DebounceComponent.vue';
import DebouncedFnComponent from './components/DebouncedFnComponent.vue';
import LocalStorageComponent from './components/LocalStorageComponent.vue';
import ListComponent from './components/ListComponent.vue';
import StateComponent from './components/StateComponent.vue';
import EmbedComponent from './components/EmbedComponent.vue';
import PickComponent from './components/PickComponent.vue';
import QueueComponent from './components/QueueComponent.vue';
import ModalComponent from './components/ModalComponent.vue';
import CaseComponent from './components/CaseComponent.vue';
import ResizeComponent from './components/ResizeComponent.vue';
import QueueComponentTwo from './components/QueueComponentTwo.vue';
import ClipboardComponent from './components/ClipboardComponent.vue';
import DarkModeComponent from './components/DarkModeComponent.vue';
import ToggleDarkMode from './components/ToggleDarkMode.vue';
import CookieComponent from './components/CookieComponent.vue';
import './public/style/main.css';
import './plugins/dayjs.js';

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.component('BindInputComponent', BindInputComponent);
  Vue.component('BindSelectComponent', BindSelectComponent);
  Vue.component('DateComponent', DateComponent);
  Vue.component('I18nDateComponent', I18nDateComponent);
  Vue.component('DebouncedFnComponent', DebouncedFnComponent);
  Vue.component('DebounceComponent', DebounceComponent);
  Vue.component('LocalStorageComponent', LocalStorageComponent);
  Vue.component('ListComponent', ListComponent);
  Vue.component('StateComponent', StateComponent);
  Vue.component('EmbedComponent', EmbedComponent);
  Vue.component('PickComponent', PickComponent);
  Vue.component('QueueComponent', QueueComponent);
  Vue.component('CaseComponent', CaseComponent);
  Vue.component('ResizeComponent', ResizeComponent);
  Vue.component('QueueComponentTwo', QueueComponentTwo);
  Vue.component('ClipboardComponent', ClipboardComponent);
  Vue.component('DarkModeComponent', DarkModeComponent);
  Vue.component('ModalComponent', ModalComponent);
  Vue.component('ToggleDarkMode', ToggleDarkMode);
  Vue.component('CookieComponent', CookieComponent);
};
