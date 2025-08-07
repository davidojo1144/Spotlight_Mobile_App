import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

function RootLayoutNav() {
  return (
    <ClerkProvider>
      <Slot />
    </ClerkProvider>
  )
}

export default function RootLayout() {
  return ( 
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <Stack screenOptions={{headerShown: false}}/>
      </SafeAreaView>
    </SafeAreaProvider>
        
  )
}
