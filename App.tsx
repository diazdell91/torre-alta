import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./app/hooks/useCachedResources";
import Navigation from "./app/router/Root";

import { AuthProvider } from "./app/context/auth/auth.provider";
import { ThemeProvider } from "./app/hooks/useTheme";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <ThemeProvider>
            <StatusBar />
            <Navigation />
          </ThemeProvider>
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
