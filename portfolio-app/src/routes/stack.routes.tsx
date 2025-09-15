import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator()

import { Main } from "../screens/Main"
import { Skills } from "../screens/Skills"

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="Main" 
        component={Main} 
        options={{
          title: 'About Me',
          headerShown: false
        }}
      />
      <Screen 
        name="Skills" 
        component={Skills} 
      />
    </Navigator>
  )
}