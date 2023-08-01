const { DateTime } = require("luxon");
const db = require("../../../models/sfo/pm-weekly");
const {
  getPagingData,
  getPagination,
  upsert,
} = require("../../../utils/spdmain.util");
const PmWeeklyOtomotif = db.pmWeeklyOtomotif;
const PmCommentsOtomotif = db.pmCommentsOtomotif;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.upsert = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmWeeklyOtomotifReq = {
    n_bu_id: req.body.n_bu_id,
    c_bu_name: req.body.c_bu_name,
    d_periode: req.body.d_periode,
    n_monthlyBudget: req.body.n_monthlyBudget,
    n_w1: req.body.n_w1,
    n_w2: req.body.n_w2,
    n_w3: req.body.n_w3,
    n_w4: req.body.n_w4,
    n_totalBudget: req.body.n_totalBudget,
    n_achBudget: req.body.n_achBudget,
    c_cell_id: req.body.c_cell_id,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  const upsertObj = upsert(PmWeeklyOtomotif, pmWeeklyOtomotifReq, {
    [Op.and]: [
      pmWeeklyReq.d_periode
        ? { d_periode: {
          [Op.between]: [
            new Date(
              new Date(pmWeeklyReq.d_periode).getFullYear(),
              new Date(pmWeeklyReq.d_periode).getMonth(),
              1
            ),
            new Date(
              new Date(pmWeeklyReq.d_periode).getFullYear(),
              new Date(pmWeeklyReq.d_periode).getMonth() + 1,
              0
            ),
          ],
        }, }
        : null,
      pmWeeklyReq.n_bu_id ? { n_bu_id: pmWeeklyReq.n_bu_id } : null,
    ],
  });
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
          err.message || "Some error occurred while creating the SPD data.",
      };
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
  const pmWeeklyOtomotifReq = {
    n_bu_id: req.body.n_bu_id,
    c_bu_name: req.body.c_bu_name,
    d_periode: req.body.d_periode,
    n_monthlyBudget: req.body.n_monthlyBudget,
    n_w1: req.body.n_w1,
    n_w2: req.body.n_w2,
    n_w3: req.body.n_w3,
    n_w4: req.body.n_w4,
    n_totalBudget: req.body.n_totalBudget,
    n_achBudget: req.body.n_achBudget,
    c_cell_id: req.body.c_cell_id,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  PmWeeklyOtomotif.create(pmWeeklyOtomotifReq)
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
          err.message || "Some error occurred while creating the SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SFO SU Fields data from the database.
exports.findAll = (req, res) => {
  PmWeeklyOtomotif.findAll()
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
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const { d_periode, n_bu_id } = req.body;
  PmWeeklyOtomotif.findAll({
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
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

///////////////////////////////////////////////////
//this API has special configuration
// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParamMonthly = (req, res) => {
  const { date_start, date_end } = req.body;
  PmWeeklyOtomotif.findAll({
    include: [{ model: PmCommentsOtomotif, as: "pm_comments" }],
    where: {
      [Op.and]: [
        date_start && date_end
          ? {
              d_periode: {
                [Op.between]: [
                  DateTime.fromISO(date_start).toISODate(),
                  DateTime.fromISO(date_end).toISODate(),
                ],
              },
            }
          : null,
        // sequalize.where(sequalize.cast(sequalize.col('d_periode'), 'month'), '>=', '12:00'),
      ],
    },
  })
    .then((data) => {
      const yFields = [
        {
          id: "w1",
          reference_field: "n_w1",
          value: "W1",
        },
        {
          id: "w2",
          reference_field: "n_w2",
          value: "W2",
        },
        {
          id: "w3",
          reference_field: "n_w3",
          value: "W3",
        },
        {
          id: "w4",
          reference_field: "n_w4",
          value: "W4",
        },
        {
          id: "totalBudget",
          reference_field: "n_totalBudget",
          value: "Total Budget",
        },
        {
          id: "monthlyBudget",
          reference_field: "n_monthlyBudget",
          value: "Monthly Budget",
        },
        {
          id: "achBudget",
          reference_field: "n_achBudget",
          field_color: "gray",
          value: "% Ach to Budget",
        },
      ];

      const monthlyDataPeriod = yFields.map((yFieldItem) =>
        data.map((item) => ({
          [DateTime.fromISO(item.d_periode)
            .toLocaleString({
              month: "long",
              year: "numeric",
            })
            .replace(/\s/, "")]: item[yFieldItem.reference_field],
        }))
      );

      const monthlyData = data.map((item) => {
        const xFieldMonth = yFields.map((yFieldItem) => [
          {
            month: DateTime.fromISO(item.d_periode).toLocaleString({
              month: "long",
              year: "numeric",
            }),
            value: item[yFieldItem.reference_field],
          },
        ]);
        const xFieldMonthHeader = xFieldMonth
          .map((xFieldMonthItem) =>
            xFieldMonthItem.reduce(
              (acc, cur) => ({
                ...acc,
                id: cur.month.replace(/\s/, ""),
                color: "",
                value: cur.month,
              }),
              {}
            )
          )
          .reduce((acc, cur) => ({ ...cur }), {});

        const xFieldMonthData = monthlyDataPeriod.map(
          (monthlyDataPeriodItem) => monthlyDataPeriodItem
        );

        const dataForMontly = {
          data: [
            ...yFields.map((yFieldItem, index) =>
              index === 0
                ? {
                    bu: item.c_bu_name,
                    buId: item.c_bu_name?.toLowerCase(),
                    buReferenceId: item.n_bu_id,
                    yField: yFieldItem.value,
                    yFieldId: yFieldItem.id,
                    yFieldReference: yFieldItem.reference_field,
                    yFieldColor: yFieldItem.field_color,
                    rowspan: yFields.length,
                    ...Object.assign({}, ...xFieldMonthData[index]),
                  }
                : {
                    bu: item.c_bu_name,
                    buId: item.c_bu_name?.toLowerCase(),
                    buReferenceId: item.n_bu_id,
                    yField: yFieldItem.value,
                    yFieldId: yFieldItem.id,
                    yFieldReference: yFieldItem.reference_field,
                    yFieldColor: yFieldItem.field_color,
                    ...Object.assign({}, ...xFieldMonthData[index]),
                  }
            ),
          ],
        };

        return {
          xFieldMonthHeader: xFieldMonthHeader,
          dataForMontly: dataForMontly,
        };
      });

      const suDataSet = Array.from(
        new Set(data.map((item) => item.c_bu_name?.toLowerCase()))
      );

      const monthlyDataArray = monthlyData.map(
        (itemMonthly) => itemMonthly.xFieldMonthHeader
      );

      const monthlyDataUnique = []
      monthlyDataArray.forEach((datum) => {
        if (
          !monthlyDataUnique.find(
            (item) =>
              item.id === datum.id
          )
        ) {
          monthlyDataUnique.push(datum)
        }
      });

      const xFieldMonthly = [
        {
          id: "bu",
          value: "Business Unit",
        },
        {
          id: "periode",
          value: "Periode",
        },
       ...monthlyDataUnique
          .map((item) => item),
        {
          id: "trend",
          color: "green",
          value: "Last 6 Months Trend",
        },
        {
          id: "lm",
          color: "green",
          value: "Δ LM",
        },
        {
          id: "ly",
          color: "blue",
          value: "Δ LY",
        },
      ];
      const dataMonthlyRaw = [].concat(
        ...[
          ...Object.values(
            monthlyData.map((itemMonthly, index) => itemMonthly.dataForMontly)
          ),
        ].map((item) => item.data)
      );

      const dataMonthly = [];
      dataMonthlyRaw.forEach((datum) => {
        if (
          !dataMonthly.find(
            (item) =>
              item.buId === datum.buId && item.yFieldId === datum.yFieldId
          )
        ) {
          dataMonthly.push(datum);
        }
      });

      function getUniqueTrenData(arr) {
        const trendDataUnique = []
        arr.forEach((datum) => {
          if (
            !trendDataUnique.find(
              (item) =>
                item.Month === datum.Month
            )
          ) {
            trendDataUnique.push(datum)
          }
        });

        return trendDataUnique;
      };

      const trendDataMonthly = {
        ...suDataSet.map((item) => ({
          [item]: {
            w1: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_w1,
              })),
            ]),
            w2: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_w2,
              })),
            ]),
            w3: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_w3,
              })),
            ]),
            w4: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_w4,
              })),
            ]),
            totalBudget: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_totalBudget,
              })),
            ]),
            monthlyBudget: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_monthlyBudget,
              })),
            ]),
            achBudget: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_achBudget,
              })),
            ]),
          },
        })),
      };

      const trendDataMonthlyFormatted = Object.assign(
        {},
        ...Object.values(trendDataMonthly).map((item) => ({ ...item }))
      );

      // const commentDataMonthly = Object.values({
      //   ...suDataSet.map((item) => ({
      //     [item]: data.map((item) => Object.values(item.pm_comments)),
      //   })),
      // });
      const commentDataMonthly = [].concat(
        ...data.map((item) => item.pm_comments)
      );

      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data?.length,
        data: {
          // data,
          header: xFieldMonthly,
          data: dataMonthly,
          trendData: trendDataMonthlyFormatted,
          commentData: commentDataMonthly,
          // .map((itemMonthly) => itemMonthly.trendData)
          // .reduce((acc, cur) => cur, {}),
        },
      };
      res.send(successResponse);
    })
    .catch((err) => {
      const errorResponse = {
        status: false,
        message:
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};
