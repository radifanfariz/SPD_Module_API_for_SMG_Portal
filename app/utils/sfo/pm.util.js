function mergeObjectsWithSameKey(data) {
  return data.reduce(function (r, e) {
    return (
      Object.keys(e).forEach(function (k) {
        if (!r[k]) r[k] = [].concat(e[k]);
        else r[k] = r[k].concat(e[k]);
      }),
      r
    );
  }, {});
}

function deepMergeObjectsWithSameKey(arrayOfObjects) {
  const mergedData = {};

  arrayOfObjects.forEach((obj) => {
    for (const manufacturer in obj) {
      if (!mergedData[manufacturer]) {
        mergedData[manufacturer] = {};
      }
      const nestedObject = obj[manufacturer];
      for (const key in nestedObject) {
        if (!mergedData[manufacturer][key]) {
          mergedData[manufacturer][key] = [];
        }
        mergedData[manufacturer][key].push(nestedObject[key]);
      }
    }
  });

  return mergedData;
}

function getUniqueData(arr, filteredKey) {
  const uniqueData = [];
  arr.forEach((datum) => {
    if (!uniqueData.find((item) => item[filteredKey] === datum[filteredKey])) {
      uniqueData.push(datum);
    }
  });
  return uniqueData;
}
function getUniqueDataWithFunc(arr, conditionFunc) {
  const uniqueData = [];
  arr.forEach((datum) => {
    if (!uniqueData.find((item) => conditionFunc(item, datum))) {
      uniqueData.push(datum);
    }
  });
  return uniqueData;
}

function formatDigit(number) {
  return number.toLocaleString('en-US');
}

module.exports = {
  mergeObjectsWithSameKey,
  deepMergeObjectsWithSameKey,
  getUniqueData,
  getUniqueDataWithFunc,
  formatDigit
};
