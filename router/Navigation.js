import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/PublicScreens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import AddEvent from '../screens/Organizer/AddEvent';
import Addeventform from '../screens/Organizer/Addeventform';
import FestDetails from '../screens/Organizer/FestDetails';

import Committee from '../screens/Organizer/Committee';
import AddCommitteeForm from '../screens/Organizer/AddCommitteeForm';
import CommitteeDetails from '../screens/Organizer/CommitteDetails';
import OrganizerCommitteTask from '../screens/Organizer/OrganizerCommitteTask';


import EventDetails from '../screens/Organizer/EventDetails';
import AddTeammembers from '../screens/Organizer/AddTeammembers';
import CreateFest from '../screens/Organizer/CreateFest';
import CreateFestForm from '../screens/Organizer/CreateFestForm';
import Organizereventnotification from '../screens/Organizer/Organizereventnotification';
import Organizereventeaddtask from '../screens/Organizer/Organizereventeaddtask';
import Organizereventcompletedtask from '../screens/Organizer/Organizereventcompletedtask';
import Organizeeventependingtask from '../screens/Organizer/Organizereventependingtask';
import Organizereventmeberslist from '../screens/Organizer/Organizereventmeberslis';
import AddCommitte from '../screens/Organizer/AddCommitte';
import AdminLogin from '../screens/PublicScreens/AdminLogin';
import OrganizerCommitteeDetails from '../screens/Organizer/OrganizerCommitteeDetails';
import Organizernotification from '../screens/Organizer/Organizernotification';
import Organizercommitteaddtask from '../screens/Organizer/organizercommitteaddtask';

import Organizercommittependingtask from '../screens/Organizer/organizercommittependingtask';
import Organizercommittememberslist from '../screens/Organizer/organizercommittememberslist';
import Committeeheadpage from '../screens/CommitteeHead/Committeeheadpage';
import Committeeheadnotification from '../screens/CommitteeHead/Committeeheadnotification';
import Committeeheadaddtask from '../screens/CommitteeHead/Committeeheadaddtask';
import Committeheadteammembers from '../screens/CommitteeHead/Committeheadteammembers';
import Committeheadcommittememberdeta from '../screens/CommitteeHead/Committeheadcommittememberde';
import Committeeheadpendingtask from '../screens/CommitteeHead/Committeeheadpendingtask';
import Committeeheadcompletedtask from '../screens/CommitteeHead/Committeeheadcompletedtask';
import Committeememberspage from '../screens/CommitteeMembers/Committeememberspage';
import Committeemembernotification from '../screens/CommitteeMembers/Committeemembernotification';
import Committeememberpendingtask from '../screens/CommitteeMembers/Committeememberpendingtask';
import Committeemembercompletedtask from '../screens/CommitteeMembers/Committeemembercompletedtask';
import Committeemembergeneratereports from '../screens/CommitteeMembers/Committeemembergeneratereports';
import CommitteemembersGeneratedRep from '../screens/CommitteeMembers/CommitteemembersGeneratedRep';
import Committeemenbercontactdeatils from '../screens/CommitteeMembers/Committeemenbercontactdeatils';

import Eventheadnotification from '../screens/EventHead/Eventheadnotification';
import Eventheadaddtask from '../screens/EventHead/Eventheadaddtask';
import Eventtheadpage from '../screens/EventHead/Eventtheadpage';
import Eventheadteammembers from '../screens/EventHead/Eventheadteammembers';
import Eventtheadcompletedtask from '../screens/EventHead/Eventtheadcompletedtask';
import Eventheadpendingtask from '../screens/EventHead/Eventheadpendingtask';
import Eventheadceventmeberdetails from '../screens/EventHead/Eventheadceventmeberdetails';
import Eventmemberspage from '../screens/EventMembers/Eventmemberspage';
import Eventmembernotification from '../screens/EventMembers/Eventmembernotification';
import Eventmemberpendingtask from '../screens/EventMembers/Eventmemberpendingtask';
import Eventmembercompletedtask from '../screens/EventMembers/Eventmembercompletedtask';
import Eventmembergeneratereports from '../screens/EventMembers/Eventmembergeneratereports';
import EventmemberGeneratedReports from '../screens/EventMembers/EventmemberGeneratedReports';
import Eventmenbercontactdeatils from '../screens/EventMembers/Eventmenbercontactdeatils';
import Others from '../screens/PublicScreens/Others';






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