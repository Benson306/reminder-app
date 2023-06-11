import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Card from "./Card";
import { AntDesign } from '@expo/vector-icons';
import useActivity from "../utils/ActivityContext";
import { useEffect } from "react";

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const { user, activities } = useActivity();

    useEffect(()=>{
    

    }   
    )

    return ( <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, backgroundColor: '#000' }}>

        <TouchableOpacity>
            <MaterialIcons name="date-range" size={24} color="#ccccff" style={{marginTop: 10, paddingRight:25, alignSelf:'flex-end'}} />
        </TouchableOpacity>
        
        
        <Text style={{color:'gray', alignSelf:'center', marginTop:20}}>Hello, <Text style={{color:'#ff944d', fontSize:16}} >Ben Ndiwa!</Text></Text>

        <View 
        style={{alignSelf:'center', backgroundColor:'#00004d', marginTop: 20, padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius:25, flexDirection:'row'}}
        >
            <Image source={require('../../assets/activity.png')} style={{marginRight:10, marginTop:3}} />
            <Text style={{color:'#ccccff', textAlign:'center', fontSize: 14}}>You Have 8 Activities Today</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-evenly'}}>

            <View style={{padding: 15, borderRadius:10, backgroundColor:'#333333',width: 160}}>
                <MaterialIcons name="pending-actions" size={40} color="#ff944d" style={{alignSelf:'center'}} />
                <View>
                    <Text style={{color:'#fff', textAlign:'center', fontSize:12}}>Pending Activities</Text>
                    <Text style={{color:'#ccccff', fontSize:20, textAlign:'center'}}>10</Text>
                </View>
            </View>

            <View style={{padding: 15, borderRadius:10, backgroundColor:'#333333',width: 160}}>
                <Feather name="check-circle" size={40} color="#ff944d" style={{alignSelf:'center'}} />
                <View>
                    <Text style={{color:'#fff', textAlign:'center', fontSize: 12}}>Completed Activities</Text>
                    <Text style={{color:'#ccccff', fontSize:20, textAlign:'center'}}>10</Text>
                </View>
            </View>
        </View>

        <View style={{margin:20, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'#fff', fontSize: 18, fontWeight:'bold'}}>Today's Activities</Text>
            <TouchableOpacity>
                <Text style={{color:'#ff944d', fontSize: 12, fontWeight:'bold'}}>See all</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            position: 'absolute',
            bottom: 20,
            right: 20,
            height: 60,
            backgroundColor: '#ff944d',
            borderRadius: 100,
            zIndex:1

            }}

            onPress={()=>{ navigation.navigate('Add')  }}
        >
            <AntDesign name="plus" size={24} color="#fff" />
        </TouchableOpacity>

        <ScrollView style={{marginBottom:30}}>
            {
                activities.length < 1 && <View>
                    <Text style={{color:'#fff', padding: 10, textAlign:'center', fontSize: 12}}>You Have No upcoming activities scheduled.</Text>
                </View>
            }
            {
                activities.map(activity =>
                    <View key={activity.id}>
                        <Card id={activity.id} title={activity.title} description={activity.description} starttime={activity.startTime} endtime={activity.endTime} repeat={activity.repeatEvery} />
                    </View>
                    
                
                    )
            }

        </ScrollView>

        

    </View> );
}


 
export default Home;