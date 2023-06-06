import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = () => {
    const insets = useSafeAreaInsets();

    return ( <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, backgroundColor: '#000' }}>

        <MaterialIcons name="date-range" size={24} color="#ccccff" style={{marginTop: 30, paddingRight:40, alignSelf:'flex-end'}} />
        
        
        <Text style={{color:'gray', alignSelf:'center', marginTop:30}}>Hello, <Text style={{color:'#ff944d', fontSize:16}} >Ben Ndiwa!</Text></Text>

        <View 
        style={{alignSelf:'center', backgroundColor:'#00004d', marginTop: 20, padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius:25, flexDirection:'row'}}
        >
            <Image source={require('../../assets/activity.png')} style={{marginRight:10, marginTop:3}} />
            <Text style={{color:'#ccccff', textAlign:'center', fontSize: 14}}>You Have 8 Activities Today</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:30, justifyContent:'space-evenly'}}>

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
            <Text style={{color:'#ff944d', fontSize: 12, fontWeight:'bold'}}>See all</Text>
        </View>

    </View> );
}


 
export default Home;