import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Card from "./Card";
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();

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
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
            <Card title="Finance App Design" description="Solve the Finance app bug and build to get it ready for deployment." starttime="10.00 pm" endtime="10.30pm" />
        </ScrollView>

        

    </View> );
}


 
export default Home;