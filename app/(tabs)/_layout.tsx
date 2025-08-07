import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"


export default function Tablayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false
    }}>
      <Tabs.Screen 
      name="index"
      options={{
        tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
      }}/>
      <Tabs.Screen 
      name="Bookmark"
       options={{
        tabBarIcon: ({size, color}) => <Ionicons name="bookmark" size={size} color={color}/>
      }}/>
      <Tabs.Screen 
      name="Create"
       options={{
        tabBarIcon: ({size, color}) => <Ionicons name="send" size={size} color={color}/>
      }}/> 
      <Tabs.Screen 
      name="Notifications"
       options={{
        tabBarIcon: ({size, color}) => <Ionicons name="heart" size={size} color={color}/>
      }}/>
      <Tabs.Screen 
      name="Profile"
       options={{
        tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color}/>
      }}/>
    </Tabs>
  )
} 