<template>
  <div>
    <div class="gauge-title">
      <span ref="gauge-value" v-if="top" :class="gaugeValueClass"></span>
      <span v-if="top" :class="gaugeValueClass">{{unit}}</span>
    </div>
    <canvas ref="gauge" :height="height"></canvas>
    <div class="gauge-title">
      <span ref="gauge-value" v-if="!top" :class="gaugeValueClass"></span>
      <span v-if="!top" :class="gaugeValueClass">{{unit}}</span>
    </div>
  </div>
</template>

<script>
import { Gauge, Donut } from "gaugeJS/dist/gauge.min";
export default {
  name: "VGauge",
  props: {
    unit: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "200px"
    },
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
    },
    donut: {
      type: Boolean,
      default: false
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
      this.gauge = this.donut
        ? new Donut(this.$refs.gauge)
        : new Gauge(this.$refs.gauge);
      this.gauge.maxValue = this.maxValue;
      this.gauge.setMinValue(this.minValue);
      this.gauge.animationSpeed = this.animationSpeed;
      this.gauge.setOptions(this.options);
      this.gauge.setTextField(this.$refs["gauge-value"], this.decimalPlace);
      this.gauge.set(this.value);
    }
  }
};
</script>

<style scoped>
.gauge-title span {
  display: inline;
  text-align: center;
}
</style>
