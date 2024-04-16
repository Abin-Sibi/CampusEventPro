import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { firebase } from '../../firebaseConfig';
import { useRoute } from "@react-navigation/native";

const Organizereventmeberslist = () => {
  const [members, setMembers] = React.useState([]);
    const route = useRoute();
  const { events } = route.params;
  console.log(events)

    const fetchMembers = async () => {
        try {
            const db = firebase.firestore();
            const festRef = db.collection('festData');

            // Get the document snapshot
            const docSnapshot = await festRef.get();

            const membersData = [];

            // Iterate through the documents
            docSnapshot.forEach(doc => {
                const eventdata = doc.data().events;

                if (eventdata && eventdata.length > 0) {
                  eventdata.forEach(event => {
                        if (event.members && event.members.length > 0 && event.eventname === events.eventname) {
                            event.members.forEach(member => {
                                membersData.push(member);
                            });
                        }
                    });
                }
            });

            console.log('Members:', membersData);
            setMembers(membersData);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    React.useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <View style={styles.eventheadceventmeberdetails}>
            <Text style={styles.eventMembers}>Event members</Text>
            <View style={[
                styles.eventheadceventmeberdetailsChild,
                styles.eventheadceventmeberdetailsShadowBox,
            ]} >
 {members.map((member, index) => (
                <View key={index} style={styles.memberContainer}>
                <View style={styles.content}>
                  <View style={styles.leftContent}>
                  <Image
                  style={styles.maleUserIcon}
                  contentFit="cover"
                  source={require("../../assets/Male User.png")}
              /><Text style={styles.membername}>
              {`Name: ${member.membername}\n`}
            </Text>
                  </View>
                  <View style={styles.rightContent}>
                  <Text style={styles.eventMemberDetails}>
                  {`${member.email}\nCourse: ${member.course}\nPhone no: ${member.phone}\n`}
              </Text>
                  </View>
                </View>
              </View>
            ))}
            </View>
            <Image
                style={styles.peopleIcon}
                contentFit="cover"
                source={require("../../assets/People.png")}
            />
           
        </View>
    );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  leftContent: {
    flex: 1,
    
  },
  rightContent: {
    paddingTop:10,
    flexShrink: 0,
  },
  eventheadceventmeberdetailsShadowBox: {
    height: "auto",
    width: 335,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xl,
    left: 29,
    position: "absolute",
  },
  membername:{
        top:55
  },
  maleIconLayout: {
    height: 90,
    width: 90,
    left: 41,
  },
  eventTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 133,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  maleUserIcon2Position: {
    top: 324,
    position: "absolute",
  },
  eventMembers: {
    top: 45,
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorWhite,
    width: 274,
    height: 54,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    left: 29,
    position: "absolute",
  },
  eventheadceventmeberdetailsChild: {
    top: 140,
  },
  peopleIcon: {
    top: 21,
    left: 287,
    width: 67,
    height: 94,
    position: "absolute",
  },
  maleUserIcon: {
    top: 5,
    height:50,
    width:50,
    position: "absolute",
  },
  eventheadCourseName: {
    top: 159,
    position: "absolute",
  },
  eventheadceventmeberdetailsItem: {
    top: 305,
  },
  eventheadceventmeberdetailsInner: {
    top: 470,
  },
  maleUserIcon1: {
    top: 489,
    position: "absolute",
  },
  eventMemberCourse: {
    top: 498,
    position: "absolute",
  },
  maleUserIcon2: {
    height: 90,
    width: 90,
    left: 41,
  },
  eventMemberCourse1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 133,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  eventheadceventmeberdetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  memberContainer: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: 8,
    margin:20,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
export default Organizereventmeberslist;
