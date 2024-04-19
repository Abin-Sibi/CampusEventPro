import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput, Alert } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyles";
import { firebase } from '../../firebaseConfig';
import { useNavigation, useRoute } from "@react-navigation/native";

const CommitteeHeadTeamMembers = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { committeedata } = route.params;

  const [memberData, setMemberData] = React.useState({
    membername: "",
    email: "",
    password: "",
    course: "",
    phone: "",
  });

  const handleInputChange = (name, value) => {
    setMemberData({
      ...memberData,
      [name]: value
    });
  };

  const validateInputs = () => {
    if (!memberData.membername.trim() || !memberData.email.trim() || !memberData.password.trim() || !memberData.course.trim() || !memberData.phone.trim()) {
      Alert.alert("All fields are required.");
      return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(memberData.email)) {
      Alert.alert("Please enter a valid email address.");
      return false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(memberData.phone)) {
      Alert.alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  const addMember = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');
      const docSnapshot = await festRef.get();

      docSnapshot.forEach(doc => {
        const committees = doc.data().committees;

        if (committees && committees.length > 0) {
          committees.forEach(committee => {
            if (committee.email === committeedata.email && committee.code === committeedata.committeecode) {
              const committeeId = doc.id;
              const updatedMembers = committee.members ? [...committee.members, { ...memberData}] : [{ ...memberData }];
              
              festRef.doc(committeeId).update({
                'committees': committees.map(e => {
                  if (e.email === committeedata.email && e.code === committeedata.committeecode) {
                    return { ...e, members: updatedMembers };
                  }
                  return e;
                })
              });

              console.log('Member added successfully for committee:', committeeId);
            }
          });
        }
      });
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Add Member</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Name"
          value={memberData.membername}
          onChangeText={(text) => handleInputChange('membername', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          keyboardType="email-address"
          value={memberData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry
          value={memberData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Course Name"
          value={memberData.course}
          onChangeText={(text) => handleInputChange('course', text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Phone No"
          keyboardType="phone-pad"
          value={memberData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
        />
        <Button title="Submit" color="#000080" onPress={addMember} />
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorDarkslateblue_200,
  },
  container2:{
  backgroundColor:'white',
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop:120,
  marginBottom:100,
  margin:30,
  borderRadius:10

  },
  title: {
    fontSize: FontSize.size_17xl,
    marginBottom: 20,
    fontFamily: FontFamily.irishGroverRegular,
  },
  inputContainer: {
    width: "80%",
  },
  inputField: {
    height: 40,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default CommitteeHeadTeamMembers;
