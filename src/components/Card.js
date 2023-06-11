import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useActivity from "../utils/ActivityContext";

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
        <Text style={{color: 'gray', marginTop:15}}>{props.description}</Text>
        <View style={{flexDirection:'row', marginTop: 10}}>
            <Image source={require('../../assets/clock.png')} style={{marginRight: 5}} />
            <Text style={{color: 'gray'}}>{props.starttime} - {props.endtime}</Text>
        </View>
        {
            // props.repeat.map(day => <View><Text>day.</Text></View>)
            
        }
    </View> );
}


 
export default Card;