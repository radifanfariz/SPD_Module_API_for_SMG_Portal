const { DateTime } = require("luxon");
const db = require("../../../models/sfo/pm-weekly");
const {
  getPagingData,
  getPagination,
  upsert,
} = require("../../../utils/spdmain.util");
const PmWeeklyFinser = db.pmWeeklyFinser;
const PmCommentsFinser = db.pmCommentsFinser;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.upsert = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const pmWeeklyFinserReq = {
    n_bu_id: req.body.n_bu_id,
    c_bu_name: req.body.c_bu_name,
    n_weekField_id: req.body.n_weekField_id,
    c_weekField_name: req.body.c_weekField_name,
    d_periode: req.body.d_periode,
    n_monthlyBudgetBooking: req.body.n_monthlyBudgetBooking,
    n_achBudgetBooking: req.body.n_achBudgetBooking,
    n_booking: req.body.n_booking,
    n_monthlyBudgetOsar: req.body.n_monthlyBudgetOsar,
    n_achBudgetOsar: req.body.n_achBudgetOsar,
    n_osar130: req.body.n_osar130,
    n_osar3190: req.body.n_osar3190,
    n_osar90: req.body.n_osar90,
    n_osarCurrent: req.body.n_osarCurrent,
    n_osarKospin: req.body.n_osarKospin,
    n_osarKsu: req.body.n_osarKsu,
    n_osarOthers: req.body.n_osarOthers,
    n_osarInstitusi: req.body.n_osarInstitusi,
    n_osarIndividu: req.body.n_osarIndividu,
    n_osar: req.body.n_osar,
    n_dpkEkternal: req.body.n_dpkEkternal,
    n_dpkFamily: req.body.n_dpkFamily,
    n_totalDPK: req.body.n_totalDPK,
    n_totalBudgetBooking: req.body.n_totalBudgetBooking,
    c_cell_id: req.body.c_cell_id,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  const upsertObj = upsert(PmWeeklyFinser, pmWeeklyFinserReq, {
    [Op.and]: [
      pmWeeklyFinserReq.d_periode
        ? {
            d_periode: {
              [Op.between]: [
                new Date(
                  new Date(pmWeeklyFinserReq.d_periode).getFullYear(),
                  new Date(pmWeeklyFinserReq.d_periode).getMonth(),
                  1
                ),
                new Date(
                  new Date(pmWeeklyFinserReq.d_periode).getFullYear(),
                  new Date(pmWeeklyFinserReq.d_periode).getMonth() + 1,
                  0
                ),
              ],
            },
          }
        : null,
      pmWeeklyFinserReq.n_bu_id ? { n_bu_id: pmWeeklyFinserReq.n_bu_id } : null,
      pmWeeklyFinserReq.n_weekField_id ? { n_weekField_id: pmWeeklyFinserReq.n_weekField_id } : null,
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
  const pmWeeklyFinserReq = {
    n_bu_id: req.body.n_bu_id,
    c_bu_name: req.body.c_bu_name,
    n_weekField_id: req.body.n_weekField_id,
    c_weekField_name: req.body.c_weekField_name,
    d_periode: req.body.d_periode,
    n_monthlyBudgetBooking: req.body.n_monthlyBudgetBooking,
    n_achBudgetBooking: req.body.n_achBudgetBooking,
    n_booking: req.body.n_booking,
    n_monthlyBudgetOsar: req.body.n_monthlyBudgetOsar,
    n_achBudgetOsar: req.body.n_achBudgetOsar,
    n_osar130: req.body.n_osar130,
    n_osar3190: req.body.n_osar3190,
    n_osar90: req.body.n_osar90,
    n_osarCurrent: req.body.n_osarCurrent,
    n_osarKospin: req.body.n_osarKospin,
    n_osarKsu: req.body.n_osarKsu,
    n_osarOthers: req.body.n_osarOthers,
    n_osarInstitusi: req.body.n_osarInstitusi,
    n_osarIndividu: req.body.n_osarIndividu,
    n_osar: req.body.n_osar,
    n_dpkEkternal: req.body.n_dpkEkternal,
    n_dpkFamily: req.body.n_dpkFamily,
    n_totalDPK: req.body.n_totalDPK,
    n_totalBudgetBooking: req.body.n_totalBudgetBooking,
    c_cell_id: req.body.c_cell_id,
    n_created_by: req.body.n_created_by,
    n_updated_by: req.body.n_updated_by,
  };
  PmWeeklyFinser.create(pmWeeklyFinserReq)
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
  PmWeeklyFinser.findAll({
    order: [
      ["n_id", "DESC"],
      ["name", "ASC"],
    ],
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
          err.message || "Some error occurred while retrieving SPD data.",
      };
      res.status(500).send(errorResponse);
    });
};

// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParam = (req, res) => {
  const { d_periode, n_bu_id } = req.body;
  PmWeeklyFinser.findAll({
    order: [
      ["n_id", "DESC"],
    ],
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
  PmWeeklyFinser.findAll({
    include: [{ model: PmCommentsFinser, as: "pm_comments" }],
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
          field_id: 1,
          reference_field: "n_booking",
          value: "W1",
        },
        {
          id: "w2",
          field_id: 2,
          reference_field: "n_booking",
          value: "W2",
        },
        {
          id: "w3",
          field_id: 3,
          reference_field: "n_booking",
          value: "W3",
        },
        {
          id: "w4",
          field_id: 4,
          reference_field: "n_booking",
          value: "W4",
        },
        {
          id: "totalMonthly",
          field_id: 0,
          reference_field: "n_totalBudgetBooking",
          value: "Total Budget",
        },
        {
          id: "monthlyBudget",
          field_id: 0,
          reference_field: "n_monthlyBudgetBooking",
          value: "Monthly Budget",
        },
        {
          id: "achBudget",
          field_id: 0,
          reference_field: "n_achBudgetBooking",
          field_color: "gray",
          value: "% Ach to Budget",
        },
      ];

      const monthlyDataPeriod = yFields.map((yFieldItem) =>
        data.map((item) => {
          if (yFieldItem.field_id === item.n_weekField_id) {
            return {
              [DateTime.fromISO(item.d_periode)
                .toLocaleString({
                  month: "long",
                  year: "numeric",
                })
                .replace(/\s/, "")]: item[yFieldItem.reference_field],
            };
          } else if (yFieldItem.field_id === 0) {
            return {
              [DateTime.fromISO(item.d_periode)
                .toLocaleString({
                  month: "long",
                  year: "numeric",
                })
                .replace(/\s/, "")]: item[yFieldItem.reference_field],
            };
          } else {
            return {};
          }
        })
      );

      const monthlyData = data.map((item) => {
        const xFieldMonth = yFields.map((yFieldItem) => {
          {
            if (yFieldItem.field_id === item.n_weekField_id) {
              return [
                {
                  month: DateTime.fromISO(item.d_periode).toLocaleString({
                    month: "long",
                    year: "numeric",
                  }),
                  value: item[yFieldItem.reference_field],
                },
              ];
            } else if (yFieldItem.field_id === 0) {
              return [
                {
                  month: DateTime.fromISO(item.d_periode).toLocaleString({
                    month: "long",
                    year: "numeric",
                  }),
                  value: item[yFieldItem.reference_field],
                },
              ];
            } else {
              return [];
            }
          }
        });
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

      const monthlyDataUnique = [];
      monthlyDataArray.forEach((datum) => {
        if (!monthlyDataUnique.find((item) => item.id === datum.id)) {
          monthlyDataUnique.push(datum);
        }
      });
      // console.log(monthlyDataUnique)

      const xFieldMonthly = [
        {
          id: "bu",
          value: "Business Unit",
        },
        {
          id: "periode",
          value: "Periode",
        },
        ...monthlyDataUnique.map((item) => item),
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
        const trendDataUnique = [];
        arr.forEach((datum) => {
          if (!trendDataUnique.find((item) => item.Month === datum.Month)) {
            trendDataUnique.push(datum);
          }
        });

        return trendDataUnique;
      }

      const trendDataMonthly = {
        ...suDataSet.map((item) => ({
          [item]: {
            w1: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_weekField_id === 1 ? item.n_booking : null,
              })),
            ]),
            w2: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_weekField_id === 2 ? item.n_booking : null,
              })),
            ]),
            w3: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_weekField_id === 3 ? item.n_booking : null,
              })),
            ]),
            w4: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_weekField_id === 4 ? item.n_booking : null,
              })),
            ]),
            totalBudget: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_totalBudgetBooking,
              })),
            ]),
            monthlyBudget: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_monthlyBudgetBooking,
              })),
            ]),
            achBudget: getUniqueTrenData([
              ...data.map((item) => ({
                Month: DateTime.fromISO(item.d_periode).toLocaleString({
                  month: "long",
                  day: "numeric",
                }),
                Unit: item.n_achBudgetBooking,
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
