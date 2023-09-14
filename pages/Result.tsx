import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarChart } from 'react-native-chart-kit';
import Entypo from 'react-native-vector-icons/Entypo';
import GeneralButton from '../components/GeneralButton';
import axios from 'axios';
import LoadingSppiner from '../components/LoadingSppiners';

export default function Result({navigation}: {navigation: any}) {

    const [openness, setOpenness] = useState(0);
    const [conscientiousness, setConscientiousness] = useState(0);
    const [extraversion, setExtraversion] = useState(0);
    const [agreeableness, setAgreeableness] = useState(0);
    const [neuroticism, setNeuroticism] = useState(0);
    const [values, setValues] = useState<number[]>([]);

    const [loading, setLoading] = useState(false);

    const calculateChartData = (numbers : any) => {

        if (numbers.length === 0) {
            return 0;
          }
        
        const sum = numbers.reduce((total : any , current : any) => total + current, 0);
        const average = sum / numbers.length;
        return average;
    }

    const getData = async () => {
        try {
            const ext = await AsyncStorage.getItem('ext');
            const est = await AsyncStorage.getItem('est');
            const agr = await AsyncStorage.getItem('agr');
            const csn = await AsyncStorage.getItem('csn');
            const opn = await AsyncStorage.getItem('opn');

            if (ext !== null && est !== null && agr !== null && csn !== null && opn !== null) {

                const parseExt = JSON.parse(ext);
                setExtraversion(calculateChartData(parseExt))
                const parseEst = JSON.parse(est);
                setNeuroticism(calculateChartData(parseEst))
                const parseAgr = JSON.parse(agr);
                setAgreeableness(calculateChartData(parseAgr))
                const parseCsn = JSON.parse(csn);
                setConscientiousness(calculateChartData(parseCsn))
                const parseOpn = JSON.parse(opn);
                setOpenness(calculateChartData(parseOpn))

                const finalData = [...parseExt, ...parseEst, ...parseAgr, ...parseCsn, ...parseOpn];
                setValues([]);
                setValues(pre => [...pre, ...finalData]);
            }
            
        } catch (err) {
            console.log(err);
        }
    };

    const getResult = async () => {

        setLoading(true);

        await AsyncStorage.removeItem('cluster');

        await axios.post('https://personality-ml.onrender.com/predict', {
            values: values
        })
        .then(function (response) {
            
            AsyncStorage.setItem('cluster', response.data.data);
            if(response.data.data && response.status === 200) {
                navigation.navigate('tracks');
                setLoading(false);
            } 
            
            console.log(response.data.data);
        })
        .catch(function (error) {
            setLoading(false);
            console.log(error);
        });

        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.darker} barStyle="dark-content" />
            <View>
            <Text style={{fontSize: 25, color:"#ff8fb8", textAlign: "center", padding: 20, marginTop: 30}}>Your Personality Profile Result</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Entypo name="dot-single" color="white" size={50} />
                    <Text style={{color: "white"}}>
                        OPN - Openness
                    </Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Entypo name="dot-single" color="white" size={50} />
                    <Text style={{color: "white"}}>
                        CSN - Conscientiousness
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Entypo name="dot-single" color="white" size={50} />
                    <Text style={{color: "white"}}>
                        EXT - Extraversion
                    </Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Entypo name="dot-single" color="white" size={50} />
                    <Text style={{color: "white"}}>
                        AGR - Agreeableness
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Entypo name="dot-single" color="white" size={50} />
                <Text style={{color: "white"}}>
                    NEU - Neuroticism
                </Text>
            </View>
            <View style={{marginTop: 30}}>
            <BarChart
                data={{
                labels: ["OPN", "CSN", "EXT", "AGR", "NEU"],
                datasets: [
                    {
                    data: [
                        openness,
                        conscientiousness,
                        extraversion,
                        agreeableness,
                        neuroticism
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                withHorizontalLabels={false}
                chartConfig={{
                backgroundColor: "red",
                backgroundGradientFrom: "green",
                backgroundGradientTo: "#6495ED",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {

                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                }
                }}
                style={{
                margin: 10,
                borderRadius: 10,
                }}
            />
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
                    click={() => getResult()} 
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});
