import PushNotification, { Importance } from "react-native-push-notification"

// CreateChannel create notification channel for specify
// notification segment and separation for other kind
// notification channel
export const CreateChannel = () => {
  PushNotification.createChannel(
    {
      channelId: "push-notification-test-channel-id",
      channelName: "Push Notification Test Channel",
      channelDescription: "A push notification test channel description",
      playSound: true,
      soundName: "notification.mp3",
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log(`created channel '${created}'`)
  )
}

// LocalNotification this function for invoking push notification
// to inside in app notification and used for call notification
// when in application notification triggered by fcm sender
export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: "push-notification-test-channel-id",
    autoCancel: true,
    bigText: "This is local notification demo in React Native app",
    subText: "Local Notification Demo",
    title: "Local Notification Title",
    message: "Expand me to see more",
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: "notification.mp3",
    actions: '["Yes", "No"]',
  })
}

// ConfigurePushNotification configure the notification event handler
// modify the callback as you want to manipulate data as you need
export const ConfigurePushNotification = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log("On Register Callback", token)
    },
    onNotification: function (notification) {
      console.log("On Notification Callback", notification)
    },
    onAction: function (notification) {
      console.log("On Action Callback", notification)
    },
    onRegistrationError: function (error) {
      console.log("On Registration Error Callback", error)
    },
    onRemoteFetch: function (notificationData) {
      console.log("On Remote Fetch Callback", notificationData)
    },
    popInitialNotification: true,
    requestPermissions: true,
  })
}
