# vgauge

A Vue Wrapper to [GaugeJS](https://github.com/bernii/gauge.js/)
[Live Demo](https://jz3qoxny63.codesandbox.io/) 

### Installing

```
npm i vgauge --save
```

### Usage
```js
import VGauge from 'vgauge'

export default {
  components: {
    VGauge
  },
  data(){
    return{
      x:35
    }
  }
}
```

```html
<v-gauge :value="x"/>
```

## Props
You can use the following props

| Name          | Description   | Type  | Default |
| ------------- |---------------| -----:| -----:|
| options        | GaugeJS render options, check gaugejs [API](http://bernii.github.io/gauge.js/) | Object | Basic gaugejs Object |
| initialValue        | Initial value to display on the Gauge | Number | 0 |
| value        | Value to display/watch | Number | 50 |
| minValue        | Min value for the gauge to display | Number | 0 |
| maxValue        | Max value for the gauge to display | Number | 100 |
| decimalPlace        | Show decimal place values to which extent | Number | 0 |
| top        | To have the gauge value on top of the gauge | Boolean | false |
| gaugeValueClass        | Class to apply to gauge value | String | * |
| animationSpeed        | Animation speed for gauge | Number | 10 |

## Authors

* **Amr Essam** - [Github](https://github.com/amroessam)

## License

This project is licensed under the MIT License

## Acknowledgments

* [Vue](https://github.com/vuejs/vue)
* [GaugeJS](https://github.com/bernii/gauge.js/)