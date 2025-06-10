import { Tabs } from "expo-router";


export default function Tablayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false
    }}>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="Bookmark"/>
      <Tabs.Screen name="Create"/>
      <Tabs.Screen name="Notifications"/>
      <Tabs.Screen name="Profile "/>
    </Tabs>
  )
} 