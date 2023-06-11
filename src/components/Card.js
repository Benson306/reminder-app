import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useActivity from "../utils/ActivityContext";
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Card = (props) => {

    const { deleteActivity } = useActivity();

    return ( <View style={{
        backgroundColor:'#333333',
        marginLeft:18,
        marginRight:18,
        borderRadius:15,
        padding:20,
        marginTop:10
    }}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'#ccccff', fontWeight: '900', fontSize:18}}>{props.title}</Text>
            

            <TouchableOpacity onPress={()=>{deleteActivity(props.id)}}>
                <MaterialCommunityIcons name="delete-circle" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
        <Text style={{color: 'gray', marginTop:10}}>{props.description}</Text>
        <View style={{flexDirection:'row', marginTop: 10, alignItems:'center'}}>
            <EvilIcons name="clock" size={20} color="#fff" style={{marginRight:4}} />
            <Text style={{color: 'gray'}}>{props.starttime} - {props.endtime}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:8, alignItems:'center'}}>
            <Ionicons name="ios-repeat" size={17} color="#fff" style={{marginRight:5}}/>
            {
                props.repeat.map(day =>{
                    if(day.ring){
                    return <View key={day.day} style={{padding: 4, backgroundColor:'#ff944d', marginRight: 5, justifyContent:'center', borderRadius:5}}><Text style={{color:'black', textAlign:'center', fontSize:10, textTransform:'uppercase'}}>{day.day}</Text></View>
                    }
                } )
                
            }
        </View>
        
    </View> );
}


 
export default Card;