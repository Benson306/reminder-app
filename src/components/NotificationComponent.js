import { useEffect, useState } from "react";

import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

export const notify = () =>{
 //Notifications
 const [expoPushToken, setExpoPushToken] = useState("");
 const [notification, setNotification] = useState(false);
 const notificationListener = useRef();
 const responseListener = useRef();

 useEffect(() => {
   registerForPushNotificationsAsync().then((token) =>
     setExpoPushToken(token)
   );

   notificationListener.current =
     Notifications.addNotificationReceivedListener((notification) => {
       setNotification(notification);
     });

   responseListener.current =
     Notifications.addNotificationResponseReceivedListener((response) => {
       console.log(response);
     });

   return () => {
   Notifications.removeNotificationSubscription(
       notificationListener.current
   );
   Notifications.removeNotificationSubscription(responseListener.current);
   };
   }, []);


   async function schedulePushNotification() {
       await Notifications.scheduleNotificationAsync({
         content: {
           title: "You've got mail! 📬",
           body: 'Here is the notification body',
           data: { data: 'goes here' },
         },
         trigger: {
           seconds: 10
           // hour:  11,
           // minute: 53,
           // repeats:false,
         },
       });
   }
   
   async function registerForPushNotificationsAsync() {
   let token;
   
   if (Platform.OS === 'android') {
       await Notifications.setNotificationChannelAsync('default', {
       name: 'default',
       importance: Notifications.AndroidImportance.MAX,
       vibrationPattern: [0, 250, 250, 250],
       lightColor: '#FF231F7C',
       });
   }
   
   if (Device.isDevice) {
       const { status: existingStatus } = await Notifications.getPermissionsAsync();
       let finalStatus = existingStatus;
       if (existingStatus !== 'granted') {
       const { status } = await Notifications.requestPermissionsAsync();
       finalStatus = status;
       }
       if (finalStatus !== 'granted') {
       alert('Failed to get push token for push notification!');
       return;
       }
       token = (await Notifications.getExpoPushTokenAsync({experienceId: "@username/projectSlug", projectId:'e8ddaa39-0d65-496e-903e-9de6822c1452' })).data;
       console.log(token);
   } else {
       alert('Must use physical device for Push Notifications');
   }
   
   return token;
   }
}