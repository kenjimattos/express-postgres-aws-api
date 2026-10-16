module.exports = (params) => {
  for (let property in params) {
    if (/Id|id/.test(property)) {
      params[property] = Number(params[property]);
    }
  }
  return params;
};