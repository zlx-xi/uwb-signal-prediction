// Auto-generated scaler
const x_scaler = {
  mean: [-36.799316084077574, -29.987184761799828, 3.019078571428572, 3.9215571428571447],
  scale: [5.00415450779507, 5.106353258978426, 0.7098406329477578, 0.7116910547765649],
  transform: function(x) {
    return x.map((v, i) => (v - this.mean[i]) / this.scale[i]);
  },
  inverse_transform: function(x_scaled) {
    return x_scaled.map((v, i) => v * this.scale[i] + this.mean[i]);
  }
};

if (typeof module !== 'undefined') {
  module.exports = x_scaler;
}
