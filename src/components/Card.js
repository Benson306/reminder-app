import { Image, Text, TouchableOpacity, View } from "react-native";

const Card = (props) => {
    return ( <View style={{
        backgroundColor:'#333333',
        marginLeft:18,
        marginRight:18,
        borderRadius:15,
        padding:20,
        marginTop:10
    }}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'white', fontWeight: '900', fontSize:18}}>{props.title}</Text>
            

            <TouchableOpacity>
                <Text style={{backgroundColor: '#ccccff', padding:3, borderRadius:10, fontSize:12, width:40, textAlign:'center'}}>Edit</Text>
            </TouchableOpacity>
        </View>
        <Text style={{color: 'gray', marginTop:15}}>{props.description}</Text>
        <View style={{flexDirection:'row', marginTop: 10}}>
            <Image source={require('../../assets/clock.png')} style={{marginRight: 5}} />
            <Text style={{color: 'gray'}}>{props.starttime} - {props.endtime}</Text>
        </View>
    </View> );
}


 
export default Card;