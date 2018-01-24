/*!
 * vue-dplayer v0.0.5
 * (c) 2017-present sinchang <sinchangwen@gmail.com>
 * Released under the MIT License.
 */
import DPlayer from 'dplayer';

var VueDPlayer = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "dplayer" });
  }, staticRenderFns: [],
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
  }
};

export default VueDPlayer;
