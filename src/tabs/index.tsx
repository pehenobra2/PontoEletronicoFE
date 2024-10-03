import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./home";
import Ponto from "./ponto";
import Ionicons from "react-native-vector-icons/Ionicons"
import Perfil from "./perfil";

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon: ()=>(
                        <Ionicons name="home"/>
                    )
                }}
            />
            <Tab.Screen
                name="Ponto"
                component={Ponto}
                options={{
                    headerShown:false,
                    tabBarIcon: ()=>(
                        <Ionicons name="camera"/>
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown:false,
                    tabBarIcon: ()=>(
                        <Ionicons name="person-circle-sharp"/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}