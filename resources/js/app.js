import './bootstrap';

import {createApp} from "vue"

import App from "@/vue/App.vue"

// Importing Primevue
// PrimeVue is a rich set of open source UI components for Vue.
import PrimeVue from 'primevue/config';
// Importing Primevue components globally
// Form Components
import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import CascadeSelect from 'primevue/cascadeselect';
import Checkbox from 'primevue/checkbox';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Dropdown from 'primevue/dropdown';
//import Editor from 'primevue/editor';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MultiSelect from 'primevue/multiselect';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import TreeSelect from 'primevue/treeselect';
import TriStateCheckbox from 'primevue/tristatecheckbox';
// Button components
import Button from 'primevue/button';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
// Data components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import Paginator from 'primevue/paginator';
import PickList from 'primevue/picklist';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import Timeline from 'primevue/timeline';
import VirtualScroller from 'primevue/virtualscroller';
// Panel components
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Card from 'primevue/card';
import DeferredContent from 'primevue/deferredcontent';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import ScrollPanel from 'primevue/scrollpanel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Toolbar from 'primevue/toolbar';
// Overlay components
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import Dialog from 'primevue/dialog';
import DynamicDialog from 'primevue/dynamicdialog';
import OverlayPanel from 'primevue/overlaypanel';
import Sidebar from 'primevue/sidebar';
// File components
import FileUpload from 'primevue/fileupload';
// Menu components
import Breadcrumb from 'primevue/breadcrumb';
import ContextMenu from 'primevue/contextmenu';
import Dock from 'primevue/dock';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import PanelMenu from 'primevue/panelmenu';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
// Chart components
//import Chart from 'primevue/chart';
// Message components
import Message from 'primevue/message';
import InlineMessage from 'primevue/inlinemessage';
import Toast from 'primevue/toast';
// Media components
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
// Misc components
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
import Badge from 'primevue/badge';
import BlockUI from 'primevue/blockui';
import Chip from 'primevue/chip';
import Inplace from 'primevue/inplace';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'

// This are directives
import Tooltip from 'primevue/tooltip';
import BadgeDirective from 'primevue/badgedirective';
import FocusTrap from 'primevue/focustrap';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass'; 

// PrimeVue Services
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

// Use PrimeVue Components Globally
app.component('p-auto-complete', AutoComplete)
app.component('p-calendar', Calendar)
app.component('p-cascade-select', CascadeSelect)
app.component('p-checkbox', Checkbox)
app.component('p-chips', Chips)
app.component('p-color-picker', ColorPicker)
app.component('p-dropdown', Dropdown)
//app.component('p-editor', Editor)
app.component('p-input-mask', InputMask)
app.component('p-input-number', InputNumber)
app.component('p-input-switch', InputSwitch)
app.component('p-input-text', InputText)
app.component('p-knob', Knob)
app.component('p-list-box', Listbox)
app.component('p-multi-select', MultiSelect)
app.component('p-password', Password)
app.component('p-radio-button', RadioButton)
app.component('p-rating', Rating)
app.component('p-select-button', SelectButton)
app.component('p-slider', Slider)
app.component('p-text-area', Textarea)
app.component('p-toggle-button', ToggleButton)
app.component('p-tree-select', TreeSelect)
app.component('p-tri-state-checkbox', TriStateCheckbox)
app.component('p-button', Button)
app.component('p-speed-dial', SpeedDial)
app.component('p-split-button', SplitButton)
app.component('p-data-table', DataTable)
app.component('p-column', Column)
app.component('p-columnGroup', ColumnGroup)
app.component('p-row ', Row)
app.component('p-data', DataView)
app.component('p-data-view-layout-options', DataViewLayoutOptions)
app.component('p-order-list', OrderList)
app.component('p-org-chart', OrganizationChart)
app.component('p-paginator', Paginator)
app.component('p-picklist', PickList)
app.component('p-tree', Tree)
app.component('p-tree-table', TreeTable)
app.component('p-timeline', Timeline)
app.component('p-virtual-scroller', VirtualScroller)
app.component('p-accordion', Accordion)
app.component('p-accordion-tab', AccordionTab)
app.component('p-card', Card)
app.component('p-deferred-content', DeferredContent)
app.component('p-divider', Divider)
app.component('p-fieldset', Fieldset)
app.component('p-panel', Panel)
app.component('p-scroll-panel', ScrollPanel)
app.component('p-splitter', Splitter)
app.component('p-splitter-panel', SplitterPanel)
app.component('p-tab-view', TabView)
app.component('p-tab-panel', TabPanel)
app.component('p-toolbar', Toolbar)
app.component('p-confirm-dialog', ConfirmDialog)
app.component('p-confirm-popup', ConfirmPopup)
app.component('p-dialog', Dialog)
app.component('p-dynamic-dialog', DynamicDialog)
app.component('p-overlay-panel', OverlayPanel)
app.component('p-sidebar', Sidebar)
app.component('p-file-upload', FileUpload)
app.component('p-breadcrumb', Breadcrumb)
app.component('p-context-menu', ContextMenu)
app.component('p-dock', Dock)
app.component('p-menu', Menu)
app.component('p-menubar', Menubar)
app.component('p-mega-menu', MegaMenu)
app.component('p-panel-menu', PanelMenu)
app.component('p-steps', Steps)
app.component('p-tab-menu', TabMenu)
app.component('p-tiered-menu', TieredMenu)
//app.component('p-chart', Chart)
app.component('p-message', Message)
app.component('p-inline-message', InlineMessage)
app.component('p-toast', Toast)
app.component('p-carousel', Carousel)
app.component('p-galleria', Galleria)
app.component('p-image', Image)
app.component('p-avatar', Avatar)
app.component('p-avatar-group', AvatarGroup)
app.component('p-badge', Badge)
app.component('p-block-ui', BlockUI)
app.component('p-chip', Chip)
app.component('p-inplace', Inplace)
app.component('p-scroll-top', ScrollTop)
app.component('p-skeleton', Skeleton)
app.component('p-progress-bar', ProgressBar)
app.component('p-progress-spinner', ProgressSpinner)
app.component('p-tag', Tag)
app.component('p-terminal', Terminal)
app.component('p-terminal-service', TerminalService)

// Use primevue directives
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('focustrap', FocusTrap);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

// Use PrimeVue Services
app.use(ConfirmationService)
app.use(ToastService)
app.use(DialogService)

app.use(PrimeVue, { ripple: true });

//theme
import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";

import 'primeicons/primeicons.css';


app.mount("#app")
