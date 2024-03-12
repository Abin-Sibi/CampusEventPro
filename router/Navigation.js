import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import AddEvent from '../screens/AddEvent';
import Addeventform from '../screens/Addeventform';
import FestDetails from '../screens/FestDetails';

import Committee from '../screens/Committee';
import AddCommitteeForm from '../screens/AddCommitteeForm';
import CommitteeDetails from '../screens/CommitteDetails';
import OrganizerCommitteTask from '../screens/OrganizerCommitteTask';


import EventDetails from '../screens/EventDetails';
import ChangeeventHead from '../screens/ChangeeventHead';
import AddTeammembers from '../screens/AddTeammembers';
import CreateFest from '../screens/CreateFest';
import CreateFestForm from '../screens/CreateFestForm';
import Organizereventnotification from '../screens/Organizereventnotification';
import Organizereventeaddtask from '../screens/Organizereventeaddtask';
import Organizereventcompletedtask from '../screens/Organizereventcompletedtask';
import Organizeeventependingtask from '../screens/Organizereventependingtask';
import Organizereventmeberslist from '../screens/Organizereventmeberslis';
import AddCommitte from '../screens/AddCommitte';
import AdminLogin from '../screens/AdminLogin';
import OrganizerCommitteeDetails from '../screens/OrganizerCommitteeDetails';
import Organizernotification from '../screens/Organizernotification';
import Organizercommitteaddtask from '../screens/organizercommitteaddtask';

import Organizercommittependingtask from '../screens/organizercommittependingtask';
import Organizercommittememberslist from '../screens/organizercommittememberslist';
import Committeeheadpage from '../screens/Committeeheadpage';
import Committeeheadnotification from '../screens/Committeeheadnotification';
import Committeeheadaddtask from '../screens/Committeeheadaddtask';
import Committeheadteammembers from '../screens/Committeheadteammembers';
import Committeheadcommittememberdeta from '../screens/Committeheadcommittememberde';
import Committeeheadpendingtask from '../screens/Committeeheadpendingtask';
import Committeeheadcompletedtask from '../screens/Committeeheadcompletedtask';
import Committeememberspage from '../screens/Committeememberspage';
import Committeemembernotification from '../screens/Committeemembernotification';
import Committeememberpendingtask from '../screens/Committeememberpendingtask';
import Committeememberpendingtaskupda from '../screens/Committeememberpendingtaskupda';
import Committeemembercompletedtask from '../screens/Committeemembercompletedtask';
import Committeemembergeneratereports from '../screens/Committeemembergeneratereports';
import CommitteemembersGeneratedRep from '../screens/CommitteemembersGeneratedRep';
import Committeemenbercontactdeatils from '../screens/Committeemenbercontactdeatils';

import Eventheadnotification from '../screens/Eventheadnotification';
import Eventheadaddtask from '../screens/Eventheadaddtask';
import Eventtheadpage from '../screens/Eventtheadpage';
import Eventheadteammembers from '../screens/Eventheadteammembers';
import Eventtheadcompletedtask from '../screens/Eventtheadcompletedtask';
import Eventheadpendingtask from '../screens/Eventheadpendingtask';
import Eventheadceventmeberdetails from '../screens/Eventheadceventmeberdetails';
import Eventmemberspage from '../screens/Eventmemberspage';
import Eventmembernotification from '../screens/Eventmembernotification';
import Eventmemberpendingtask from '../screens/Eventmemberpendingtask';
import Eventmemberpendingtaskupdation from '../screens/Eventmemberpendingtaskupdation';
import Eventmembercompletedtask from '../screens/Eventmembercompletedtask';
import Eventmembergeneratereports from '../screens/Eventmembergeneratereports';
import EventmemberGeneratedReports from '../screens/EventmemberGeneratedReports';
import Eventmenbercontactdeatils from '../screens/Eventmenbercontactdeatils';
import Others from '../screens/Others';






const Stack = createStackNavigator();


function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="AdminLogin" component={AdminLogin} />
            <Stack.Screen name="CreateFest" component={CreateFest} />
            <Stack.Screen name="CreateFestForm" component={CreateFestForm} />
            <Stack.Screen name="FestDetails" component={FestDetails} />
            <Stack.Screen name="AddEvent" component={AddEvent} />
            <Stack.Screen name="Addeventform" component={Addeventform} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="Committee" component={Committee} />
            <Stack.Screen name="AddCommitteeForm" component={AddCommitteeForm} />
            <Stack.Screen name="CommitteeDetails" component={CommitteeDetails} />
            <Stack.Screen name="OrganizerCommitteTask" component={OrganizerCommitteTask} />
            <Stack.Screen name="Organizereventnotification" component={Organizereventnotification} />
            <Stack.Screen name="Organizereventeaddtask" component={Organizereventeaddtask} />
            <Stack.Screen name="Organizereventcompletedtask" component={Organizereventcompletedtask} />
            <Stack.Screen name="Organizeeventependingtask" component={Organizeeventependingtask} />
            <Stack.Screen name="Organizereventmeberslist" component={Organizereventmeberslist} />
            <Stack.Screen name="AddCommitte" component={AddCommitte} />
           
            <Stack.Screen name="AddTeammembers" component={AddTeammembers} />
            <Stack.Screen name="OrganizerCommitteeDetails" component={OrganizerCommitteeDetails} />
            <Stack.Screen name="Organizernotification" component={Organizernotification} />
            <Stack.Screen name="Organizercommitteaddtask" component={Organizercommitteaddtask} />
            <Stack.Screen name="Organizercommittecompletedtask" component={Organizereventcompletedtask} />
            <Stack.Screen name="Organizercommittependingtask" component={Organizercommittependingtask} />
            <Stack.Screen name="Organizercommittememberslist" component={Organizercommittememberslist} />


            <Stack.Screen name="Committeeheadpage" component={Committeeheadpage} />
            <Stack.Screen name="Committeeheadnotification" component={Committeeheadnotification} />
            <Stack.Screen name="Committeeheadaddtask" component={Committeeheadaddtask} />
            <Stack.Screen name="Committeheadteammembers" component={Committeheadteammembers} />
            <Stack.Screen name="Committeheadcommittememberdeta" component={Committeheadcommittememberdeta} />
            <Stack.Screen name="Committeeheadpendingtask" component={Committeeheadpendingtask} />
            <Stack.Screen name="Committeeheadcompletedtask" component={Committeeheadcompletedtask} />

            <Stack.Screen name="Committeememberspage" component={Committeememberspage} />
            <Stack.Screen name="Committeemembernotification" component={Committeemembernotification} />
            <Stack.Screen name="Committeememberpendingtask" component={Committeememberpendingtask} />
            <Stack.Screen name="Committeemembercompletedtask" component={Committeemembercompletedtask} />
            <Stack.Screen name="Committeemenbercontactdeatils" component={Committeemenbercontactdeatils} />


            <Stack.Screen name="Eventtheadpage" component={Eventtheadpage} />
            <Stack.Screen name="Eventheadnotification" component={Eventheadnotification} />
            <Stack.Screen name="Eventheadaddtask" component={Eventheadaddtask} />
            <Stack.Screen name="Eventheadteammembers" component={Eventheadteammembers} />
            <Stack.Screen name="Eventtheadcompletedtask" component={Eventtheadcompletedtask} />
            <Stack.Screen name="Eventheadpendingtask" component={Eventheadpendingtask} />
            <Stack.Screen name="Eventheadceventmeberdetails" component={Eventheadceventmeberdetails} />


            <Stack.Screen name="Eventmemberspage" component={Eventmemberspage} />
            <Stack.Screen name="Eventmembernotification" component={Eventmembernotification} />
            <Stack.Screen name="Eventmemberpendingtask" component={Eventmemberpendingtask} />
            <Stack.Screen name="Eventmembercompletedtask" component={Eventmembercompletedtask} />
            <Stack.Screen name="Eventmenbercontactdeatils" component={Eventmenbercontactdeatils} />
            <Stack.Screen name="Others" component={Others} />
            
            
            {/* <Stack.Screen name="Eventmembergeneratereports" component={Eventmembergeneratereports} />
            <Stack.Screen name="EventmemberGeneratedReports" component={EventmemberGeneratedReports} /> */}
             {/* <Stack.Screen name="Committeemembergeneratereports" component={Committeemembergeneratereports} />
            <Stack.Screen name="CommitteemembersGeneratedRep" component={CommitteemembersGeneratedRep} /> */}
            {/* <Stack.Screen name="ChangeeventHead" component={ChangeeventHead} /> */}

            
           
            </Stack.Navigator>
        </NavigationContainer>

        

    )
}

export default Navigation