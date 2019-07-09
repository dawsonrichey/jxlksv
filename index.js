import Vue from 'vue';

import $ from 'jquery';
import '@progress/kendo-ui';
import { DateinputsInstaller, Calendar, DateInput, DatePicker, DateRangePicker, DateTimePicker, TimePicker, MultiViewCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
import JSZip from 'jszip';

Vue.use(DateinputsInstaller);

new Vue({
    el: '#vueapp',
    data: {
        date: null
    }
})
