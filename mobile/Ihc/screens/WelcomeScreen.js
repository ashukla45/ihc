import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import {localData, serverData} from '../services/DataService';
import Container from '../components/Container';

export default class WelcomeScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {loading: false, errorMsg: null, successMsg: null};
  }

  goToSignin = () => {
    this.props.navigator.push({
      screen: 'Ihc.SigninScreen',
      title: 'Signin'
    });
  }

  goToSelectPatient = () => {
    this.props.navigator.push({
      screen: 'Ihc.PatientSelectScreen',
      title: 'Select patient'
    });
  }

  // Don't need to show a retry button because they could just click
  // UploadUpdates again
  /* eslint-disable no-unused-vars */
  setLoading = (val, canceled = false) => {
    this.setState({loading: val});
  }
  /* eslint-enable no-unused-vars */

  upload = () => {
    this.setState({loading: true, errorMsg: null, successMsg: null});
    const patients = localData.getPatientsToUpload();
    serverData.updatePatients(patients)
      .then(() => {
        if(this.state.loading) {
          localData.markPatientsUploaded();
          this.setState({successMsg: 'Uploaded successfully', errorMsg: null, loading: false});
        }
      })
      .catch(err => {
        if(this.state.loading) {
          this.setState({errorMsg: err.message, successMsg: null, loading: false});
        }
      });
  }

  download = () => {
    this.setState({loading: true, errorMsg: null, successMsg: null});
    const lastSynced = localData.lastSynced();

    serverData.getUpdatedPatients(lastSynced)
      .then((patients) => {
        if(this.state.loading) {
          localData.handleDownloadedPatients(patients);
          this.setState({successMsg: 'Downloaded successfully', errorMsg: null, loading: false});
        }
      })
      .catch(err => {
        if(this.state.loading) {
          this.setState({errorMsg: err.message, successMsg: null, loading: false});
        }
      });
  }

  render() {
    return (
      <Container loading={this.state.loading} 
        successMsg={this.state.successMsg}
        errorMsg={this.state.errorMsg}
        cancelLoading={this.cancelLoading}
      >
        <Text style={styles.welcome}>
          Welcome to clinic!
        </Text>
        <Button onPress={this.goToSignin}
          title="Signin"
        />
        <Button onPress={this.goToSelectPatient}
          title="Select Patient"
        />
        <Button onPress={this.upload}
          title="Upload updates"
        />
        <Button onPress={this.download}
          title="Download updates"
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
