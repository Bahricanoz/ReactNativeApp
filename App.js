import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/Router";
import  { UserContextProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
          <Router/>
        </NavigationContainer>
    </UserContextProvider>
        
    
  );
}

