import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Card from "./Card";
import { AntDesign } from '@expo/vector-icons';
import useActivity from "../utils/ActivityContext";
import { useEffect, useRef, useState } from "react";
import moment from 'moment';

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    

    const today = moment();
    const startDate = today.clone().subtract(7, 'days');
    const endDate = today.clone().add(7,'days');

    const days = [];

    let currentDate = startDate;

    while (currentDate.isSameOrBefore(endDate,'day')){
        const formattedDate = currentDate.isSame(today, 'day') ? 'Today' : currentDate.format('ddd, MMM D');
        days.push(formattedDate);
        currentDate = currentDate.clone().add(1, 'day');
    }

    const scrollContainerRef = useRef(null);

    const { user, activities } = useActivity();

    const [sortedActivities, setSortedActivites] = useState([]);


    const [selectedDate, setSelectedDate] = useState('');


    useEffect(()=>{
        let filteredActivities = []; 
        
        activities.map(activity => {
            const formattedDate = moment(activity.date).format('ddd, MMM D');

            const formatSelectedDate = selectedDate.substring(0, 3).toLowerCase();// e.g get 'Mon'

            const nameOfToday = moment(today).format('ddd').toLowerCase();
            
            if(selectedDate == 'Today'){
                if(formattedDate == moment(today).format('ddd, MMM D')){
                    filteredActivities.push(activity);
                }
                else
                {
                    //Check if Activity is to be repeat for this day
                    activity.repeatEvery.map( dow => { 
                        if(dow.day == nameOfToday && dow.ring){ //Check if activity is to be repeated for this day of the week.
                            filteredActivities.push(activity)
                        }
                    })
                }
            }else{
                if(formattedDate == selectedDate){
                    filteredActivities.push(activity)
                }
                else
                {
                    //Check if Activity is to be repeat for this day
                    activity.repeatEvery.map( dow => { 
                        if(dow.day == formatSelectedDate && dow.ring){ //Check if activity is to be repeated for this day of the week.
                            filteredActivities.push(activity)
                        }
                    })
                    
                }
            }
            
        })

        setSortedActivites(filteredActivities);

    }, [selectedDate, activities]);

    useEffect(()=>{
        let filteredActivities = []; 

        activities.map(activity => {

            const formattedDay = moment(today).format('ddd').toLowerCase();

            const formattedDate = moment(activity.date).format('ddd, MMM D');

                if(formattedDate == moment(today).format('ddd, MMM D')){
                    filteredActivities.push(activity)
                }else{
                    activity.repeatEvery.map( dow => { 
                        if(dow.day == formattedDay && dow.ring){ //Check if activity is to be repeated for this day of the week.
                            filteredActivities.push(activity)
                        }
                    })
                }
            }
        )
        setSortedActivites(filteredActivities);
    },[])


    useEffect(() => {
        const todayIndex = days.findIndex((day) => day === 'Today');
        const scrollPosition = todayIndex * 100 - (Dimensions.get('window').width / 2);
    
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ x: scrollPosition, animated: true });
        }
      }, []);

    return ( <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, backgroundColor: '#000' }}>
        
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
                    <Text style={{color:'#fff', fontSize:20, textAlign:'center'}}>10</Text>
                </View>
            </View>

            <View style={{padding: 15, borderRadius:10, backgroundColor:'#333333',width: 160}}>
                <Feather name="check-circle" size={38} color="#ff944d" style={{alignSelf:'center'}} />
                <View style={{marginTop:2}}>
                    <Text style={{color:'#fff', textAlign:'center', fontSize: 12}}>Completed Activities</Text>
                    <Text style={{color:'#fff', fontSize:20, textAlign:'center'}}>10</Text>
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

        <ScrollView 
        horizontal={true} 
        style={{flexGrow:0, padding:5, marginLeft:15, marginRight:5}}
        showsHorizontalScrollIndicator={false}
        ref={scrollContainerRef}
        
        >
            {
                days.map((day, index)=>{
                    return <TouchableOpacity 
                    style={{backgroundColor:'#333333', padding:8, borderRadius:20, marginHorizontal:5}} 
                    key={index} 
                    onPress={()=> { setSelectedDate(day); }}
                    >
                            {
                                day == selectedDate   ?
                                    <Text style={{color:'#ff944d', fontSize:10}} >{ day }</Text>
                                :
                                    <Text style={{color:'#fff', fontSize:10}} >{ day }</Text>
                            }
                        </TouchableOpacity>
                })
            }

        </ScrollView>

        <ScrollView style={{marginBottom:30}}>
            {
                sortedActivities.length < 1 && <View>
                    <Text style={{color:'#fff', padding: 10, textAlign:'center', fontSize: 12, marginTop: 20}}>You Have No activities scheduled.</Text>
                </View>
            }
            {
                sortedActivities.map(activity =>
                    <View key={activity.id}>
                        <Card id={activity.id} title={activity.title} description={activity.description} starttime={activity.startTime} endtime={activity.endTime} repeat={activity.repeatEvery} />
                    </View>
                    )
            }

        </ScrollView>

        

    </View> );
}


 
export default Home;