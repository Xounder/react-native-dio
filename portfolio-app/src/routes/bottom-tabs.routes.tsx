import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const { Navigator, Screen } = createBottomTabNavigator()

import { Main } from "../screens/Main"
import { Skills } from "../screens/Skills"

import { Ionicons } from '@expo/vector-icons';

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="Main" 
        component={Main} 
        options={{
          title: 'About Me',
          tabBarIcon: ({ size, color } ) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
      <Screen 
        name="Skills" 
        component={Skills} 
        options={{
          tabBarIcon: ({ size, color } ) => (
            <Ionicons name="code-slash" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}