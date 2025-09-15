import { NavigationContainer } from "@react-navigation/native"

import { StackRoutes } from "./bottom-tabs.routes"

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}