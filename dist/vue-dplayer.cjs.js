/*!
 * vue-dplayer v0.0.8
 * (c) 2017-present sinchang <sinchangwen@gmail.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var DPlayer = _interopDefault(require('dplayer'));

var index = {
  props: {
    options: {
      type: Object
    }
  },
  data: function data() {
    return {
      dp: null
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    this.options.container = this.$el;
    var player = this.dp = new DPlayer(this.options);
    var events = player.events;
    Object.keys(events).forEach(function (item) {
      if (item === 'events') {
        return false;
      } else {
        events[item].forEach(function (event) {
          player.on(event, function () { return this$1.$emit(event); });
        });
      }
    });
  },
  install: function install(Vue, ref) {
    if ( ref === void 0 ) ref = {};
    var name = ref.name; if ( name === void 0 ) name = 'd-player';

    Vue.component(name, this);
  },
  render: function render(h) {
    return h('div', {
      class: 'dplayer'
    }, []);
  }
};

module.exports = index;
