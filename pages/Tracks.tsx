import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { all } from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import GeneralButton from '../components/GeneralButton';
import LoadingSppiner from '../components/LoadingSppiners';

export default function Tracks() {

  const [allTracks, setAllTracks] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const getTracks = async () => {

    setLoading(true);

    setAllTracks([]);

    const cluster = await AsyncStorage.getItem('cluster');

    if(cluster !== null) {

      await axios.post('https://recommender-4cdh.onrender.com/recommend', {
            cluster: parseInt(cluster)
      })
      .then(function (response) {

        const tracks = response.data.data.map((obj : any) => {
          getSongs(obj.track_id);
        });

      })
      .catch(function (error) {
          setLoading(false);
          console.log(error);
      });
    }

    //console.log(allTracks.length);

  }

  const getSongs = async (track_id : string) => {

    const aceessToken = await AsyncStorage.getItem('access_token');
    await axios.get(`https://api.spotify.com/v1/tracks/${track_id}`, {
      headers: {
        Authorization: 'Bearer '+aceessToken
      }
    })
    .then(res => {

      if(res.status === 200) {

        const song : any = {
          'name' : res.data.name,
          'album' : res.data.album.name,
          'artist' : res.data.artists[0].name,
          'album_image_url': res.data.album.images[0].url
        };

        setAllTracks(prev => [...prev, song])
        setLoading(false);
        console.log(song)
      }
    })
    .catch(err => {
      setLoading(false);
      console.log(err)
    })

  }

  useEffect(() => {
    getTracks()
  }, [])

  const renderItem = ({ item } : any) => (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
      <Image style={{height: 100, width: 100, borderRadius: 10, borderColor: "#0FE38A", borderWidth: 2}} source={{uri: item.album_image_url}} />
      <View style={{marginLeft: 10}}>
      <Text style={{color: "#0FE38A", fontSize: 17, textAlign: 'left'}}>
        <Text style={{color: 'white'}}>Track: </Text>
        {item.name}
      </Text>
      <Text style={{color: "#0FE38A", fontSize: 17, textAlign: 'left'}}>
        <Text style={{color: 'white'}}>Album: </Text>
        {item.album}
      </Text>
      <Text style={{color: "#0FE38A", fontSize: 17, textAlign: 'left'}}>
      <Text style={{color: 'white'}}>Artist: </Text>
        {item.artist}
      </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20}}>
        <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>Tracks</Text>
        
        <View style={{}}>
          <FlatList data={allTracks} renderItem={renderItem} keyExtractor={item => item.name} />
        </View>
      </View>

      <View style={{marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
              {
                loading == false ? 
                <GeneralButton 
                    name='Get Tracks' 
                    color='black' 
                    padding={10} 
                    borderRadius={10} 
                    fontSize={20} 
                    backgroudColor='#0FE38A' 
                    width={300} 
                    click={() => getTracks()} 
                /> : 

                  <LoadingSppiner name='Loading'
                    backgroudColor="#0FE38A"
                    padding={10}
                    color="black"
                    borderRadius={10}
                    fontSize={18}
                    width={300}
                  />

              }
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
      justifyContent: 'space-between',
  },

  gridItem: {
    
  },
})