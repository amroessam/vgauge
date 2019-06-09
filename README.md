# vgauge ![npm](https://img.shields.io/npm/v/vgauge.svg)

A Vue Wrapper to [GaugeJS](https://github.com/bernii/gauge.js/)

### Play

[Live Demo](https://jz3qoxny63.codesandbox.io/)

### Installing

```shell
npm i vgauge --save
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vgauge@latest"></script>
```

### Usage

## By Importing

```js
import VGauge from "vgauge";

export default {
  components: {
    VGauge
  },
  data() {
    return {
      value: 35
    };
  }
};
```

```html
<v-gauge :value="value" />
```

## By Including

```html
<div id="app">
  <h3>Will not stop at 100</h3>
  <v-gauge :value="x" top></v-gauge>
  <h3>Will stop at 100</h3>
  <v-gauge :value="y" unit="%"></v-gauge>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: {
      x: 0,
      y: 0
    },
    mounted() {
      setInterval(() => {
        this.x += 4;
      }, 1000);
      setInterval(() => {
        if (this.y < 100) this.y += 5;
      }, 1000);
    }
  });
</script>
```

## Props

You can use the following props

| Name            | Description                                                                                                                          |    Type |              Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------: | -------------------: |
| options         | GaugeJS render options, check gaugejs [API](http://bernii.github.io/gauge.js/)                                                       |  Object | Basic gaugejs Object |
| height          | height of the gauge in pixels                                                                                                                  |  string |                200px |
| unit            | unit to show after value                                                                                                             |  string |                   '' |
| initialValue    | Initial value to display on the Gauge                                                                                                |  Number |                    0 |
| value           | Value to display/watch                                                                                                               |  Number |                   50 |
| minValue        | Min value for the gauge to display                                                                                                   |  Number |                    0 |
| maxValue        | Max value for the gauge to display                                                                                                   |  Number |                  100 |
| decimalPlace    | Show decimal place values to which extent                                                                                            |  Number |                    0 |
| top             | To have the gauge value on top of the gauge                                                                                          | Boolean |                false |
| gaugeValueClass | Class to apply to gauge value (Must use [/deep/](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors) in css selector) |  String |                   \* |
| animationSpeed  | Animation speed for gauge                                                                                                            |  Number |                   10 |

## Authors

- **Amr Essam** - [Github](https://github.com/amroessam)

## License

This project is licensed under the MIT License

## Acknowledgments

- [Vue](https://github.com/vuejs/vue)
- [GaugeJS](https://github.com/bernii/gauge.js/)
