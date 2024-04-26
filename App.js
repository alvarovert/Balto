import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NoteScreen from './src/Components/NoteScreen.jsx';
import CreditsScreen from './src/Components/CreditsScreen.jsx';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name ="Note" component={NoteScreen} options={{ headerShown: false}} />
        <Drawer.Screen name ="Credits" component={CreditsScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


