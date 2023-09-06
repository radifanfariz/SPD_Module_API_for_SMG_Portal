const { DateTime } = require("luxon");
const db = require("../../../models/sfo/pm-weekly");
const {
  getPagingData,
  getPagination,
  upsert,
  isContentTableExist,
} = require("../../../utils/util");
const { validateDate } = require("../../../validations/sfo/pm.validation");
const {
  deepMergeObjectsWithSameKey,
  mergeObjectsWithSameKey,
  getUniqueDataWithFunc,
  getUniqueData,
  formatDigit,
} = require("../../../utils/sfo/pm.util");
const PmOtomotifFields = db.pmOtomotifFields;
const PmOtomotifFieldsTransactions = db.pmOtomotifFieldsTransactions;
const PmOtomotifDashboardWeekly = db.pmOtomotifDashboardWeekly;
const PmCommentsOtomotif = db.pmCommentsOtomotif;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.bulkUpsert = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  const PmOtomotifFieldsTransactionsReq = req.body.map((item) => {
    return {
      n_bu_id: item.n_bu_id,
      n_field_id: item.n_field_id,
      c_field_id: item.c_field_id,
      c_periode: item.c_periode,
      n_field_value: item.n_field_value,
      d_created_at: item.d_created_at,
      d_updated_at: item.d_updated_at,
      n_created_by: item.n_created_by,
      n_updated_by: item.n_updated_by,
    };
  });
  // console.log(PmOtomotifFieldsTransactionsReq);
  PmOtomotifFieldsTransactionsReq.map((item) => {
    if (!validateDate(item.c_periode)) {
      // throw new Error('c_periode is not a valid date!');
      const errorResponse = {
        status: false,
        message: "c_periode is not a valid date!",
      };
      res.status(500).send(errorResponse);
      return;
    }
  });

  PmOtomotifFieldsTransactions.bulkCreate(PmOtomotifFieldsTransactionsReq, {
    updateOnDuplicate: ["n_bu_id", "n_field_id", "c_field_id","c_periode", "n_field_value"]
  })
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while creating the Field data.",
      };
      res.status(500).send(errorResponse);
    });
};

exports.upsert = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const PmOtomotifFieldsTransactionsReq = {
    n_bu_id: req.body.n_bu_id,
    n_field_id: req.body.n_field_id,
    c_field_id: req.body.c_field_id,
    c_periode: req.body.c_periode,
    n_field_value: req.body.n_field_value,
    d_created_at: req.body.d_created_at,
    d_updated_at: req.body.d_updated_at,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  if (!validateDate(PmOtomotifFieldsTransactionsReq.c_periode)) {
    // throw new Error('c_periode is not a valid date!');
    const errorResponse = {
      status: false,
      message: "c_periode is not a valid date!",
    };
    res.status(500).send(errorResponse);
    return;
  }
  const upsertObj = upsert(
    PmOtomotifFieldsTransactions,
    PmOtomotifFieldsTransactionsReq,
    {
      [Op.and]: [
        PmOtomotifFieldsTransactionsReq.c_periode
          ? {
              c_periode: {
                [Op.iLike]: `%${PmOtomotifFieldsTransactionsReq.c_periode}%`,
              },
            }
          : null,
        PmOtomotifFieldsTransactionsReq.n_bu_id
          ? { n_bu_id: PmOtomotifFieldsTransactionsReq.n_bu_id }
          : null,
      ],
    }
  );
  upsertObj
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          "Some error occurred while creating the PM-Otomotif Weekly data.",
      };
      console.log(err.errors);
      res.status(500).send(errorResponse);
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const PmOtomotifFieldsTransactionsReq = {
    n_bu_id: req.body.n_bu_id,
    n_field_id: req.body.n_field_id,
    c_field_id: req.body.c_field_id,
    c_periode: req.body.c_periode,
    n_field_value: req.body.n_field_value,
    d_created_at: req.body.d_created_at,
    d_updated_at: req.body.d_updated_at,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  PmOtomotifFieldsTransactions.create(PmOtomotifFieldsTransactionsReq)
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          "Some error occurred while creating the PM-Otomotif data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all PM-Otomotif Fields Transactions data from the database.
exports.findAll = (req, res) => {
  PmOtomotifDashboardWeekly.findAll()
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          "Some error occurred while retrieving PM-Otomotif data.",
      };
      res.status(500).send(errorResponse);
    });
};
// Retrieve all PM-Otomotif Fields data from the database.
exports.findAllFields = (req, res) => {
  const { j_field_bu } = req.body;
  PmOtomotifFields.findAll({
    where: j_field_bu
      ? {
          j_field_bu: {
            [Op.contains]: [j_field_bu],
          },
        }
      : null,
  })
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          "Some error occurred while retrieving PM-Otomotif data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all PM-Otomotif Fields Transactions data by param from the database.
exports.findAllByParam = (req, res) => {
  const { d_periode, n_bu_id } = req.body;
  PmOtomotifDashboardWeekly.findAll({
    where: {
      [Op.and]: [
        d_periode
          ? {
              d_periode: {
                [Op.between]: [
                  new Date(
                    new Date(d_periode).getFullYear(),
                    new Date(d_periode).getMonth(),
                    1
                  ),
                  new Date(
                    new Date(d_periode).getFullYear(),
                    new Date(d_periode).getMonth() + 1,
                    0
                  ),
                ],
              },
            }
          : null,
        n_bu_id ? { n_bu_id: n_bu_id } : null,
      ],
    },
  })
    .then((data) => {
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data?.length,
        data: data,
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          "Some error occurred while retrieving PM-Otomotif data.",
      };
      res.status(500).send(errorResponse);
    });
};

///////////////////////////////////////////////////
//this API has special configuration
// Retrieve all SFO PM-Weekly Fields data by param from the database.
exports.findAllByParamMonthly = (req, res) => {
  const { d_periode, n_bu_id, n_lastMonth } = req.body;
  // Parse the parameter using Luxon and format it to the first day of the month
  // const parameterDate = DateTime.fromFormat(d_periode, "MMM-yy", {
  //   lowerCase: true,
  // }).startOf("month");
  const parameterDate = DateTime.fromISO(d_periode, "MMM-yy", {
    lowerCase: true,
  }).startOf("month");
  console.log(parameterDate);
  // Calculate the start of the month 6 months ago from the parameter
  const nLastMonthsAgoStart = parameterDate.minus({ months: n_lastMonth });

  // Calculate the start of the same month in the previous year
  const lastYearSameMonthStart = parameterDate.minus({ years: 1 });
  PmOtomotifDashboardWeekly.findAll({
    where: {
      [Op.and]: [
        d_periode
          ? {
              [Op.or]: [
                {
                  d_periode: {
                    [Op.gt]: nLastMonthsAgoStart.toJSDate(),
                    [Op.lte]: parameterDate.toJSDate(),
                  },
                },
                {
                  d_periode: {
                    [Op.eq]: lastYearSameMonthStart.toJSDate(),
                  },
                },
              ],
            }
          : null,
        n_bu_id ? { n_bu_id: n_bu_id } : null,
      ],
    },
    order: [
      ["d_periode", "ASC"],
      ["n_bu_id", "ASC"],
      ["n_field_id", "ASC"],
    ],
  })
    .then((data) => {
      ////////////////////////////////
      const paramMonth = DateTime.fromISO(d_periode, "MMM-yy", {
        lowerCase: true,
      }).toFormat("LLL-yy");
      const lastMonth = DateTime.fromISO(d_periode, "MMM-yy", {
        lowerCase: true,
      })
        .minus({ months: 1 })
        .toFormat("LLL-yy");
      const lastYearSameMonth = DateTime.fromISO(d_periode, "MMM-yy", {
        lowerCase: true,
      })
        .minus({ years: 1 })
        .toFormat("LLL-yy");
      ////////////////////////////////////////

      /* --------------------- experimental------------------------- */
      ///////////////Count Each of BU Field///////////////
      // const countEachBuField = {};

      // for (const obj of data) {
      //   const buId = obj.n_bu_id;
      //   if (countEachBuField[obj.c_bu_name]) {
      //     countEachBuField[obj.c_bu_name]++;
      //   } else {
      //     countEachBuField[obj.c_bu_name] = 1;
      //   }
      // }
      ////////////////////////////////////////////////////////
      /*-------------------------------------------------------------*/

      ////////////////////////////////////////////////////
      const trendData = data
        .map((item) => {
          if (lastYearSameMonth !== item.c_periode.replace(/ /g, "")) {
            return {
              [item.c_bu_name]: {
                [item.c_field_name]: {
                  ["Month"]: item.c_periode,
                  ["Unit"]: parseFloat(item.n_field_value).toFixed(2),
                },
              },
            };
          }
        })
        .filter(Boolean);
      const periodeValue = mergeObjectsWithSameKey(
        data.map((item) => {
          return {
            [item.n_bu_id]: {
              [item.c_field_id.replace(/ /g, "")]: {
                ///special condition
                [item.c_periode.replace(/ /g, "")]:
                  item.c_field_id !== "OBAB"
                    ? formatDigit(parseFloat(item.n_field_value).toFixed(2))
                    : `${formatDigit(
                        (parseFloat(item.n_field_value) * 100).toFixed(0)
                      )}%`,
              },
            },
          };
        })
      );
      const periodeHeader = getUniqueData(
        data.map((item) => {
          switch (item.c_periode.replace(/ /g, "")) {
            case lastYearSameMonth:
              return {
                id: item.c_periode.replace(/ /g, ""),
                flag: paramMonth,
                value: item.c_periode.replace(/ /g, ""),
                color: "blue",
              };
              break;
            case lastMonth:
              return {
                id: item.c_periode.replace(/ /g, ""),
                flag: paramMonth,
                value: item.c_periode.replace(/ /g, ""),
                color: "green",
              };
              break;
            case paramMonth:
              return {
                id: item.c_periode.replace(/ /g, ""),
                flag: paramMonth,
                value: item.c_periode.replace(/ /g, ""),
                color: "green",
              };
              break;

            default:
              return {
                id: item.c_periode.replace(/ /g, ""),
                flag: paramMonth,
                value: item.c_periode.replace(/ /g, ""),
              };
              break;
          }
        }),
        "id"
      );
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data?.length,
        data: {
          // data,
          header: [
            {
              id: "bu",
              flag: paramMonth,
              value: "Business Unit",
            },
            {
              id: "param",
              flag: paramMonth,
              value: "",
            },
            ...periodeHeader,
            {
              id: "trend",
              color: "green",
              flag: paramMonth,
              value: `Last ${periodeHeader.length - 1} Months Trend`,
            },
            {
              id: "lm",
              color: "green",
              flag: paramMonth,
              value: "Δ LM",
            },
            {
              id: "ly",
              color: "blue",
              flag: paramMonth,
              value: "Δ LY",
            },
          ],
          data: getUniqueDataWithFunc(
            data.map((item) => {
              const valueData = mergeObjectsWithSameKey(
                periodeValue[item.n_bu_id]
              )[item.c_field_id];
              // const buDataLength = Object.keys(
              //   mergeObjectsWithSameKey(periodeValue[item.n_bu_id])
              // ).length;

              const mergedValueData = Object.assign({}, ...valueData);

              ///special condition
              const deltaLm =
                item.c_field_id !== "OBAB"
                  ? (parseFloat(mergedValueData[paramMonth]) /
                      parseFloat(mergedValueData[lastMonth]) -
                      1) *
                    100
                  : null;
              ///special condition
              const deltaLy =
                item.c_field_id !== "OBAB"
                  ? (parseFloat(mergedValueData[paramMonth]) /
                      parseFloat(mergedValueData[lastYearSameMonth]) -
                      1) *
                    100
                  : null;
              ////special condition
              // const minusValueColorTable = (parseFloat(item.n_field_value) < 0 || deltaLm < 0 || deltaLy  < 0) ? "red" : "";
              ////special condition
              const specificColorTable =
                item.c_field_id === "OBAB" ||
                item.c_field_id === "OTOB" ||
                item.c_field_id === "OBMB"
                  ? "#C8FFE0"
                  : "";
              //////////////////////////////

              return Object.assign(
                {
                  bu: item.c_bu_name,
                  buId: item.c_bu_name,
                  buReferenceId: item.n_bu_id,
                  yField: item.c_field_name,
                  yFieldId: item.c_field_name,
                  yFieldReference: item.c_field_id,
                  yFieldColor: specificColorTable,
                  ///special condition
                  lm: deltaLm
                    ? `${parseFloat(deltaLm).toFixed(2)}%`
                    : deltaLm === null
                    ? ""
                    : "0%",
                  ///special condition
                  ly: deltaLy
                    ? `${parseFloat(deltaLy).toFixed(2)}%`
                    : deltaLy === null
                    ? ""
                    : "0%",
                  // rowspan: buDataLength,
                },
                ...valueData
              );
            }),
            (item, datum) => {
              const filteredKey = "buReferenceId";
              const filteredKey2 = "yFieldReference";
              return (
                item[filteredKey] === datum[filteredKey] &&
                item[filteredKey2] === datum[filteredKey2]
              );
            }
          ),
          trendData: deepMergeObjectsWithSameKey(trendData),
          // countEachBuField: countEachBuField,
        },
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message ||
          "Some error occurred while retrieving PM-Otomotif data.",
      };
      res.status(500).send(errorResponse);
    });
};
