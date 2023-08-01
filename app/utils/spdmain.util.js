exports.getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

exports.getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: spdMain } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, row: spdMain };
};

exports.upsert = function upsert(model, values, condition) {
  return model.findOne({ where: condition }).then(function (obj) {
    // update
    if (obj) return obj.update(values);
    // insert
    return model.create(values);
  });
};

exports.getUnique = function getUnique(arr) {
  let mapObj = new Map();

  arr.forEach((v) => {
    let prevValue = mapObj.get(v.name);
    if (!prevValue || prevValue.type === "new") {
      mapObj.set(v.name, v);
    }
  });
  return [...mapObj.values()];
};
