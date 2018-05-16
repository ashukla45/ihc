import {stringDate} from '../util/Date';
export default class DrugUpdate {
  // Insert any class methods here

  static extractFromForm(form, patientKey) {
    const update = Object.assign({}, form);
    update.patientKey = patientKey;
    update.date = stringDate(new Date());
    return update;
  }

  static getInstance() {
    return {
      patientKey: 'firstname&father&mother&20000101',
      name: 'tylenol',
      date: '20180101',
      dose: '1',
      frequency: '1',
      duration: '1',
      lastUpdated: new Date().getTime()
    };
  }
}

DrugUpdate.schema = {
  name: 'DrugUpdate',
  properties: {
    patientKey: 'string',
    name: 'string', // drug name
    date: 'string',
    dose: 'string',
    frequency: 'string',
    duration: 'string',
    notes: 'string?',
    lastUpdated: 'int',
  }
};
