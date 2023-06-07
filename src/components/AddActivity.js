import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Checkbox from 'expo-checkbox';
import {Picker} from '@react-native-picker/picker';

const AddActivity = () => {

    const insets = useSafeAreaInsets();

    const [everyMonday, setEveryMonday] = useState(false);
    const [everyTuesday, setEveryTuesday] = useState(false);
    const [everyWed, setEveryWed] = useState(false);
    const [everyThur, setEveryThur] = useState(false);
    const [everyFri, setEveryFri] = useState(false);
    const [everySat, setEverySat] = useState(false);
    const [everySun, setEverySun] = useState(false);

    const [date, setDate] = useState(new Date());
    const [isChecked, setChecked] = useState(false);

    const [selectedNotifyTime, setSelectedNotifyTime] = useState();

    return ( <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, backgroundColor: '#000' }}>
        <View style={{marginLeft:20, marginRight: 20}}>
            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10 }}>Title</Text>
            <View style={{backgroundColor:'#333333', padding:10, borderRadius:25, margin: 5}}>
                <TextInput style={{
                    borderRadius:25,
                    marginLeft: 15,
                    color:'#fff'
                }}
                />
            </View>
            

            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Description</Text>
            <View style={{backgroundColor:'#333333', padding:10, borderRadius:25, margin: 5}}>
                <TextInput style={{
                    borderRadius:25,
                    marginLeft: 15,
                    color:'#fff'
                }}
                />
            </View>

            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Date</Text>
            {/* <TextInput style={{
                backgroundColor: '#333333',
                padding:10,
                borderRadius:20,
                margin:5
            }}
            /> */}
            {/* <RNDateTimePicker mode="date" value={new Date()} display={"default"} /> */}
            <View>
                <DateTimePicker
                value={date}
                onDateChange={setDate}
                />
            </View>


            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Start Time</Text>
                    
                </View>

                <View>
                    <Text style={{color:'#fff', fontSize: 18, fontWeight:'900'}}>End Time</Text>
                    
                </View>
            </View>

            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10, marginTop:10}}>Repeat Every:</Text>

            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:10, marginBelow:20}}>
                <View>
                    <Text style={styles.dayHeader}>Sun</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everySun}
                        onValueChange={setEverySun}
                        color={everySun ? '#ff944d' : '#fff'}
                    />
                </View>

                <View>
                    <Text style={styles.dayHeader}>Mon</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everyMonday}
                        onValueChange={setEveryMonday}
                        color={everyMonday ? '#ff944d' : '#fff'}
                    />
                </View>

                <View>
                    <Text style={styles.dayHeader}>Tue</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everyTuesday}
                        onValueChange={setEveryTuesday}
                        color={everyTuesday ? '#ff944d' : '#fff'}
                    />
                </View>

                <View>
                    <Text style={styles.dayHeader}>Wed</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everyWed}
                        onValueChange={setEveryWed}
                        color={everyWed ? '#ff944d' : '#fff'}
                    />
                </View>

                <View>
                    <Text style={styles.dayHeader}>Thur</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everyThur}
                        onValueChange={setEveryThur}
                        color={everyThur ? '#ff944d' : '#fff'}
                    />
                </View>

                <View>
                    <Text style={styles.dayHeader}>Fri</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everyFri}
                        onValueChange={setEveryFri}
                        color={everyFri ? '#ff944d' : '#fff'}
                    />
                </View>

                <View>
                    <Text style={styles.dayHeader}>Sat</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={everySat}
                        onValueChange={setEverySat}
                        color={everySat ? '#ff944d' : '#fff'}
                    />
                </View>
            </View>
            
            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10, marginTop:20}}>Notify Before</Text>

            <View style={{ backgroundColor:'#333333', marginTop:10,borderRadius:25}}>
                <Picker
                selectedValue={selectedNotifyTime}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedNotifyTime(itemValue)
                }
                dropdownIconColor={"#fff"}
                style={{
                    color:'#fff'
                }}
                
                >
                    <Picker.Item label="5 mins" value="5" />
                    <Picker.Item label="10 mins" value="10" />
                    <Picker.Item label="15 mins" value="15" />
                    <Picker.Item label="20 mins" value="20" />
                    <Picker.Item label="25 mins" value="25" />
                    <Picker.Item label="30 mins" value="30" />
                    <Picker.Item label="35 mins" value="35" />
                    <Picker.Item label="40 mins" value="40" />
                    <Picker.Item label="45 mins" value="45" />
                    <Picker.Item label="50 mins" value="50" />
                    <Picker.Item label="55 mins" value="55" />
                    <Picker.Item label="60 mins" value="60" />
                </Picker>
            </View>

            <TouchableOpacity  style={{
            borderWidth: 1,
            alignItems: 'center',
            alignSelf:'center',
            justifyContent: 'center',
            width: 200,
            marginTop: 60,
            height: 50,
            backgroundColor: '#ff944d',
            borderRadius: 50,

            }}>
                <Text style={{color:'#fff'}}>Add Activity</Text>
            </TouchableOpacity>

        </View>
    </View> );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
    dayHeader:{
        color:'#fff'
    }
  });
 
export default AddActivity;