const { DateTime } = require("luxon");
const db = require("../../models/sfo");
const { getPagingData, getPagination } = require("../../utils/spdmain.util");
const SfoWeekly = db.sfoWeekly;
const SfoSu = db.sfoSu;
const SfoComments = db.sfoComments;

const sequalize = db.Sequelize;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }
  const sfoWeeklyReq = {
    n_su_id: req.body.n_su_id,
    d_period: req.body.d_period,
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
  SfoWeekly.create(sfoWeeklyReq)
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
  SfoWeekly.findAll({
    include: [{ model: SfoSu, as: "sfo_su" }],
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
  const { d_period } = req.body;
  SfoWeekly.findAll({
    include: [{ model: SfoSu, as: "sfo_su" }],
    where: {
      [Op.and]: [d_period ? { d_period: d_period } : null],
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
// Retrieve all SFO SU Fields data by param from the database.
exports.findAllByParamMonthly = (req, res) => {
  const { date_start, date_end } = req.body;
  SfoWeekly.findAll({
    include: [
      { model: SfoSu, as: "sfo_su" },
      { model: SfoComments, as: "sfo_comments" },
    ],
    where: {
      [Op.and]: [
        date_start && date_end
          ? {
              d_period: { [Op.between]: [date_start, date_end] },
            }
          : null,
        // sequalize.where(sequalize.cast(sequalize.col('d_period'), 'month'), '>=', '12:00'),
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
          value: "% Ach to Budget",
        },
      ];
      const monthlyData = data.map((item) => {
        const xFieldMonth = yFields.map((yFieldItem) => [
          {
            id: DateTime.fromISO(item.d_period).toLocaleString({
              month: "long",
              day: "numeric",
            }),
            value: item[yFieldItem.reference_field],
          },
        ]);
        const xFieldMonthHeader = xFieldMonth
          .map((xFieldMonthItem) =>
            xFieldMonthItem.reduce(
              (acc, cur) => ({
                ...acc,
                id: cur.id.replace(/\s/, ""),
                color: "",
                value: cur.id,
              }),
              {}
            )
          )
          .reduce((acc, cur) => ({ ...cur }), {});
        const xFieldMonthData = xFieldMonth.map((xFieldMonthItem) =>
          xFieldMonthItem.reduce(
            (acc, cur) => ({ [cur.id.replace(/\s/, "")]: cur.value }),
            {}
          )
        );
        const dataForMontly = {data:[...yFields.map((yFieldItem, index) => ({
          bu: item.sfo_su.c_su_name,
          buId: item.sfo_su.c_su_name.toLowerCase(),
          buReferenceId: item.n_su_id,
          yField: yFieldItem.value,
          yFieldId: yFieldItem.id,
          yFieldReference: yFieldItem.reference_field,
          ...xFieldMonthData[index],
        }))]
      }
        return {
          xFieldMonthHeader: xFieldMonthHeader,
          dataForMontly: dataForMontly,
          // trendData: trendData
        };
      });
      // const monthlyDataFormatted = monthlyData.reduce(
      //   (acc, cur) => ({ ...acc, [cur.id.replace(/\s/, "")]: cur.value }),
      //   {}
      // );
      const xField = [
        {
          id: "bu",
          value: "Business Unit",
        },
        {
          id: "periode",
          value: "Periode",
        },
        {
          id: "trend",
          color: "green",
          value: "Last 6 Months Trend",
        },
        ...(monthlyData
          .map((itemMonthly) => itemMonthly.xFieldMonthHeader)).map((item)=> item),
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
      // const dataMonthly = headerMonthly.map(() => ({
      //   data: {
      //     bu: "Toyota",
      //     buId: "toyota",
      //     buReferenceId: "1",
      //     yField: "W1",
      //     yFieldId: "w1",
      //     yFieldReference: "n_w1",
      //     ...monthlyDataFormatted,
      //   },
      // }));
      const successResponse = {
        status: true,
        message: "Ok",
        totalItems: data?.length,
        data: {
          // data,
          header: xField,
          ...monthlyData
            .map((itemMonthly) => itemMonthly.dataForMontly),
          // trendData:monthlyData
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
