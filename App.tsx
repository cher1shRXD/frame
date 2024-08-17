import Navigation from "./components/navigation";
import { useFonts } from "expo-font";

const App = () => {

  const [fontsLoaded] = useFonts({
    "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.otf"),
    "Pretendard-Light": require("./assets/fonts/Pretendard-Light.otf"),
    'Logo': require("./assets/fonts/ShadowsIntoLight-Regular.ttf"),
    'Sign': require("./assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Navigation/>
  );
}

export default App;