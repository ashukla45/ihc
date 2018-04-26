import PatientModel from '../models/Patient';
import SoapModel from '../models/Soap';
import StatusModel from '../models/Status';
import TriageModel from '../models/Triage';
import DrugUpdateModel from '../models/DrugUpdate';

const PatientController = {
  GetPatient: function(req, res){
    PatientModel.findOne({key: req.params.key}, function(err, patient) {
      if(!patient) {
        err = new Error("Patient with key " + req.params.key + " doesn't exist");
      }
      if(err) {
        res.json({status: false, error: err.message});
        return;
      }
      res.json({status: true, patient: patient});
    });
  },
  GetPatients: function(req, res){
  },
  CreatePatient: function(req, res){
    // Check that no patient with that key exists
    PatientModel.findOne({key: req.body.patient.key}, function(err, patient) {
      if (patient) {
        // Hopefully shouldn't happen, but would be rare enough to not worry
        // about
        err = new Error("Patient already exists with that name and birthday. Use a different name");
      }
      if(err) {
        res.json({status: false, error: err.message});
        return;
      }
    });

    const patient = PatientModel.create(req.body.patient, function (err) {
      if(err) {
        res.json({status: false, error: err.message});
        return;
      }
      res.json({status: true});
    })
  },
  UpdatePatient: function(req, res){
  },
  GetUpdates: function(req, res){
  },
  GetSoap: function(req, res){
  },
  GetStatus: function(req, res){
  },
  GetTriage: function(req, res){
  },
  GetDrugUpdates: function(req, res){
  },
  UpdateSoap: function(req, res){
  },
  UpdateStatus: function(req, res){
  },
  UpdateTriage: function(req, res){
  },
  UpdateDrugUpdates: function(req, res){
  }
};

module.exports = PatientController;
