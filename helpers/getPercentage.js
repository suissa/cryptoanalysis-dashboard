const getPercentage = (start, end) =>
  Number((start - end) / start * 100 * -1).toFixed(2)

module.exports = getPercentage