const db = require("../models");
const SpdmainAkomadasi = db.spdmainAkomodasi;
const SpdmainJenis = db.spdmainJenis;
const SpdmainStatus = db.spdmainStatus;
const SpdmainTransportasi = db.spdmainTransportasi;
const SpdmainTujuandinas = db.spdmainTujuandinas;
const SpdmainUangMuka = db.spdmainUangmuka;


// Retrieve all SPD main data from the database.
exports.findAllAkomodasi = (req, res) => {
    SpdmainAkomadasi.findAll()
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
            err.message || "Some error occurred while retrieving SPD data Akomodasi.",
        };
        res.status(500).send(errorResponse);
      });
  };
// Retrieve all SPD main data from the database.
exports.findAllJenis = (req, res) => {
    SpdmainJenis.findAll()
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
            err.message || "Some error occurred while retrieving SPD data Jenis.",
        };
        res.status(500).send(errorResponse);
      });
  };
// Retrieve all SPD main data from the database.
exports.findAllStatus = (req, res) => {
    SpdmainStatus.findAll()
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
            err.message || "Some error occurred while retrieving SPD data Status.",
        };
        res.status(500).send(errorResponse);
      });
  };
// Retrieve all SPD main data from the database.
exports.findAllTransportasi = (req, res) => {
    SpdmainTransportasi.findAll()
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
            err.message || "Some error occurred while retrieving SPD data Transportasi.",
        };
        res.status(500).send(errorResponse);
      });
  };
// Retrieve all SPD main data from the database.
exports.findAllTujuanDinas = (req, res) => {
    SpdmainTujuandinas.findAll()
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
            err.message || "Some error occurred while retrieving SPD data Tujuan Dinas.",
        };
        res.status(500).send(errorResponse);
      });
  };
// Retrieve all SPD main data from the database.
exports.findAllUangMuka = (req, res) => {
    SpdmainUangMuka.findAll()
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
            err.message || "Some error occurred while retrieving SPD data Uang Muka.",
        };
        res.status(500).send(errorResponse);
      });
  };