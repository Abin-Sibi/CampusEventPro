// EditEventForm.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Color, FontSize, Border } from '../../GlobalStyles';

const EditEventForm = ({ route, onSubmit, onCancel }) => {
  const { eventId, eventDetails } = route.params;
  const [event, setEvent] = useState(eventDetails);

  console.log(eventDetails, "event details from route params");

  useEffect(() => {
    setEvent(eventDetails);
  }, [eventDetails]);

  const handleChange = (name, value) => {
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(event);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Event Name"
        value={event.eventname || ""}
        onChangeText={(text) => handleChange("eventname", text)}
      />
      {/* Add other input fields */}
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#000080" onPress={handleSubmit} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" color="#000080" onPress={onCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorDarkslateblue_200,
    padding: 20,
  },
  inputField: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
  },
});

export default EditEventForm;
