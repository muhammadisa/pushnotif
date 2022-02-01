import React, { useEffect } from "react"
import { Text, View, Button, StyleSheet } from "react-native"
import {
  LocalNotification,
  ConfigurePushNotification,
  CreateChannel,
} from "./src/push-notification/Initialization"

const App = () => {
  useEffect(() => {
    CreateChannel()
    ConfigurePushNotification()
  }, [])

  const handlePushLocalNotificationAndroid = () => {
    LocalNotification()
  }

  const handlePushLocalNotificationIos = () => {
    LocalNotification()
  }

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title={"Local Push Notification Android"}
          onPress={handlePushLocalNotificationAndroid}
        />

        <View style={{ marginVertical: 5 }} />

        <Button
          title={"Local Push Notification iOS"}
          onPress={handlePushLocalNotificationIos}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
})
export default App
