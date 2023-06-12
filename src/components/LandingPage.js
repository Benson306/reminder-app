import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../utils/AuthContext';

export default function LandingPage({ navigation }) {
    
    const insets = useSafeAreaInsets();

    const [name, setName] = useState();

    const { addName } = useContext(AuthContext);

    const handleSetName = () =>{
      addName(name);
    }

  return (
    <View style={{...styles.container}}>

    <Text style={styles.h1}>Stay on track with our helpful <Text style={{color:'#ff944d'}}>reminder app!</Text></Text>

    <Image source={require('../../assets/reminder.png')} style={{width: 200, height: 200}} />

    <Text style={styles.h2}>Never miss a task or appointment again.</Text>
    <Text style={styles.h2}>Let us help you stay organized and focused.</Text>

    <TextInput
    onChangeText={setName}
    placeholder="Enter Name"
    placeholderTextColor="gray"
    selectionColor="#ff944d"
    style={{
      borderBottomWidth:1,
      borderBottomColor:'#ff944d',
      width:100,
      marginTop:20,
      color:'#fff',
      textAlign:'center'
    }}
    />

    {
      name?.length > 2 && <TouchableOpacity 
        style={styles.button} 
        onPress={()=> handleSetName()}
    >
        <Text style={styles.buttonText}>Let's Start</Text>
        <AntDesign name="arrowright" size={20} color="white" />
    </TouchableOpacity> }

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#050a14',
      alignItems: 'center',
      justifyContent: 'center'
    },
    h1:{
        color:'#fff',
        fontWeight:'900',
        fontSize: 28,
        textAlign:'center',
        padding:22,
    },
    h2:{
        color:'gray',
        textAlign:'left',
    },
    button:{
        backgroundColor:'#ff944d',
        marginTop:10,
        padding:10,
        borderRadius: 25,
        width:140,
        position:'absolute',
        bottom:60,
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonText:{
        color:'#fff',
        fontWeight:'800',
        marginRight:5,
        fontSize:16
    }
    
  });