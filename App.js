import React from 'react'
import { Text, View, Button, StyleSheet, Alert } from 'react-native'
import { LocalNotification } from './LocalPushController'
import RemotePushController from './RemotePushController'
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {useState, useEffect} from 'react';
const App = () => {
  // const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const type = 'notification';

    PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
      critical: true,
    }).then(
      (data) => {
        console.log('PushNotificationIOS.requestPermissions', data);
      },
      (data) => {
        console.log('PushNotificationIOS.requestPermissions failed', data);
      },
    );

    PushNotificationIOS.addEventListener('register', onRegistered);
    PushNotificationIOS.addEventListener(
      'registrationError',
      onRegistrationError,
    );
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
    
  });

  const onRemoteNotification = (notification) => {
    console.log('Notif ios ', notification)
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };

  const onRegistrationError = (error) => {
    Alert.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [
        {
          text: 'Dismiss',
          onPress: null,
        },
      ],
    );
  };


   const onRegistered = (deviceToken) => {
     console.log('toket: ', deviceToken)
    Alert.alert('Registered For Remote Push', `Device Token: ${deviceToken}`, [
      {
        text: 'Dismiss',
        onPress: null,
      },
    ]);
  };

  const sendLocalNotificationWithSound = () => {
    PushNotificationIOS.addNotificationRequest({
      id: 'notificationWithSound',
      title: 'Sample Title IOS',
      subtitle: 'Sample Subtitle',
      body: 'Sample local notification with custom sound',
      sound: 'customSound.wav',
      badge: 1,
    });
  };

  const handleButtonPress = () => {
    LocalNotification()
  }

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{ marginTop: 20 }}>
        <Button title={'Local Push Notification Android'} onPress={handleButtonPress} />
        <Button title={'Local Push Notification Ios'} onPress={sendLocalNotificationWithSound} />
      </View>
      <View>
        <RemotePushController />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})
export default App