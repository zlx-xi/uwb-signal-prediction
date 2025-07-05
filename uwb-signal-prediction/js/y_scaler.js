// Auto-generated scaler
const y_scaler = {
  mean: [16.65714285714286, 2.6073307747523162, 32.285714285714285],
  scale: [7.5817180757129075, 1.7405397550726363, 5.5217565971679115],
  transform: function(x) {
    return x.map((v, i) => (v - this.mean[i]) / this.scale[i]);
  },
  inverse_transform: function(x_scaled) {
    return x_scaled.map((v, i) => v * this.scale[i] + this.mean[i]);
  }
};

if (typeof module !== 'undefined') {
  module.exports = y_scaler;
}
