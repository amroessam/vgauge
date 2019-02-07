<template>
  <div>
    <p id="gauge-value" v-if="top" :class="gaugeValueClass"></p>
    <canvas id="gauge" ref="gauge"></canvas>
    <p id="gauge-value" v-if="!top" :class="gaugeValueClass"></p>
  </div>
</template>

<script>
import { Gauge } from "gaugeJS/dist/gauge.min";
export default {
  name: 'VGauge',
  props: {
    decimalPlace: {
      type: Number,
      default: 0
    },
    gaugeValueClass: {
      type: String,
      default: ""
    },
    top: {
      type: Boolean,
      default: false
    },
    maxValue: {
      type: Number,
      default: 100
    },
    minValue: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: function() {
        return {
          angle: 0.15,
          lineWidth: 0.44,
          radiusScale: 1,
          pointer: {
            length: 0.6,
            strokeWidth: 0.035,
            color: "#000000"
          },
          limitMax: false,
          limitMin: false,
          colorStart: "#6FADCF",
          colorStop: "#8FC0DA",
          strokeColor: "#E0E0E0",
          generateGradient: true,
          highDpiSupport: true
        };
      }
    },
    animationSpeed: {
      type: Number,
      default: 10
    },
    initialValue: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      gauge: null
    };
  },
  mounted() {
    this.initializeGauge();
  },
  watch: {
    value: function(newVal) {
      this.gauge.set(newVal);
    }
  },
  methods: {
    initializeGauge() {
      this.gauge = new Gauge(this.$refs.gauge);
      this.gauge.maxValue = this.maxValue;
      this.gauge.setMinValue(this.minValue);
      this.gauge.animationSpeed = this.animationSpeed;
      this.gauge.setOptions(this.options);
      this.gauge.setTextField(
        document.getElementById("gauge-value"),
        this.decimalPlace
      );
      this.gauge.set(this.value);
    }
  }
};
</script>
