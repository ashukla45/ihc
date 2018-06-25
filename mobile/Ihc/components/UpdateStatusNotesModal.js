import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  View
} from 'react-native';

/*
 * Modal to update a status object's notes field
 */
export default class UpdateStatusNotesModal extends Component<{}> {
  /*
   * Expects in props:
   *  {
   *    showModal: boolean
   *    closeModal: function
   *    saveModal: function
   *    name: patient's name to display
   *    currNotes: string, current notes to display
   *    updateNotes: function to update notes in parent
   *  }
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.showModal}
        onRequestClose={this.props.closeModal} >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text>Notes:</Text>
            <TextInput style={styles.notesInput}
              multiline={true}
              numberOfLines={4}
              value={this.props.currNotes}
              onChangeText={this.props.updateNotes} />
            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.buttonContainer} onPress={this.props.closeModal}>
                <Text style={styles.button}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer}
                onPress={this.props.saveModal}>
                <Text style={styles.button}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '80%',
    height: '60%',
    backgroundColor: '#f6fdff',
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalFooter: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: 150,
    height: 40,
    margin: 10,
    padding: 8,
    elevation: 4,
    borderRadius: 2,
    backgroundColor: '#2196F3',
  },
  button: {
    fontWeight: '500',
    color: '#fefefe',
    textAlign: 'center',
  },
  notesInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    margin: 8,
    borderWidth: 1
  }
});
