import { View } from "react-native";
import {styles} from "../../styles/homestyles"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/Notifications"}>visit notification screen</Link>
    </View>
  );
}

