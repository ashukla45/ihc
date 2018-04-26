import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PatientSchema = Schema({
  key: String, // A unique identifier created from front end
  firstName: String,
  fatherName: String, // last name
  motherName: String, // last name
  birthday: String,
  gender: Number, // 1 = boy, 2 = girl, 0 = undefined
  phone: String,
  motherHeight: Number,
  fatherHeight: Number,
  medications: [{ type: Schema.Types.ObjectId, ref: 'DrugUpdate' }],
  soaps: [{ type: Schema.Types.ObjectId, ref: 'Soap' }],
  triages: [{ type: Schema.Types.ObjectId, ref: 'Triage' }],
  statuses: [{ type: Schema.Types.ObjectId, ref: 'Status' }],
  lastUpdated: Number // timestamp
});
const PatientModel = mongoose.model('Patient', PatientSchema);
module.exports = PatientModel;
