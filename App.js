import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NoteScreen from './src/Components/NoteScreen.jsx';
import CreditsScreen from './src/Components/CreditsScreen.jsx';
import MetasScreen from './src/Components/MetasScreen.jsx'

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name ="Metas" component={MetasScreen} options={{headerShown: false}} />
        <Drawer.Screen name ="Diario" component={NoteScreen} options={{ headerShown: false}} />
        <Drawer.Screen name ="Creditos" component={CreditsScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


