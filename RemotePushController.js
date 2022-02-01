import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },
  popInitialNotification: true,
  requestPermissions: true
})

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token)
      },
// (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification)
        
        // PROCESS ANJING
        if (notification.foreground) { 
            PushNotification.localNotification({
            channelId: "bau-bacin-x3",
            autoCancel: true,
            bigText: notification.message,
            subText: 'Local Notification Demo',
            title: notification.title,
            message: 'Expand me to see more',
            vibrate: true,
            vibration: 300,
            playSound: true,
            soundName: 'default',
            actions: '["AHHH", "IKEH"]'
          })
        }
// process the notification here
      },
      // Android only: GCM or FCM Sender ID
      senderID: '256218572662',
      popInitialNotification: true,
      requestPermissions: true
    })
  }, [])
return null
}
export default RemotePushController