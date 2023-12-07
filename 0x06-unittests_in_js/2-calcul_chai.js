}
if (type === 'DIVIDE') {
  return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
}
return 0;
};

module.exports = calculateNumber;