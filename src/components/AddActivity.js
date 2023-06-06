import { Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddActivity = () => {

    const insets = useSafeAreaInsets();

    return ( <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, backgroundColor: '#000' }}>
        <View style={{marginLeft:20, marginRight: 20}}>
            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10 }}>Title</Text>
            <TextInput style={{
                backgroundColor: '#333333',
                padding:10,
                borderRadius:20,
                margin:5
            }}
            />

            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Description</Text>
            <TextInput style={{
                backgroundColor: '#333333',
                padding:10,
                borderRadius:20,
                margin:5
            }}
            />

            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Date</Text>
            <TextInput style={{
                backgroundColor: '#333333',
                padding:10,
                borderRadius:20,
                margin:5
            }}
            />


            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Start Time</Text>
                    <TextInput style={{
                        backgroundColor: '#333333',
                        padding:10,
                        borderRadius:20,
                        margin:5
                    }}
                    />
                </View>

                <View>
                    <Text style={{color:'#fff', fontSize: 18, fontWeight:'900'}}>End Time</Text>
                    <TextInput style={{
                        backgroundColor: '#333333',
                        padding:10,
                        borderRadius:20,
                        margin:5
                    }}
                    />
                </View>
            </View>

            <Text style={{color:'#fff', fontSize: 18, fontWeight:'900', marginLeft:10}}>Notify Before</Text>
            <TextInput style={{
                backgroundColor: '#333333',
                padding:10,
                borderRadius:20,
                margin:5
            }}
            />

        </View>
    </View> );
}
 
export default AddActivity;