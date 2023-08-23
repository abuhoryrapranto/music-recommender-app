import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RadioButton, Provider as PaperProvider} from 'react-native-paper';
import GeneralButton from '../components/GeneralButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressBar } from 'react-native-paper';
import LoadingSppiner from '../components/LoadingSppiners';

export default function QuestionFive({navigation}: {navigation: any}) {
  const [selectedValue1, setSelectedValue1] = React.useState('');
  const [selectedValue2, setSelectedValue2] = React.useState('');
  const [selectedValue3, setSelectedValue3] = React.useState('');
  const [selectedValue4, setSelectedValue4] = React.useState('');
  const [selectedValue5, setSelectedValue5] = React.useState('');
  const [selectedValue6, setSelectedValue6] = React.useState('');
  const [selectedValue7, setSelectedValue7] = React.useState('');
  const [selectedValue8, setSelectedValue8] = React.useState('');
  const [selectedValue9, setSelectedValue9] = React.useState('');
  const [selectedValue10, setSelectedValue10] = React.useState('');

  const [loading, setLoading] = useState(false);

  const data = {
    values: [
      selectedValue1 == '' ? 3 : parseInt(selectedValue1),
      selectedValue2 == '' ? 3 : parseInt(selectedValue2),
      selectedValue3 == '' ? 3 : parseInt(selectedValue3),
      selectedValue4 == '' ? 3 : parseInt(selectedValue4),
      selectedValue5 == '' ? 3 : parseInt(selectedValue5),
      selectedValue6 == '' ? 3 : parseInt(selectedValue6),
      selectedValue7 == '' ? 3 : parseInt(selectedValue7),
      selectedValue8 == '' ? 3 : parseInt(selectedValue8),
      selectedValue9 == '' ? 3 : parseInt(selectedValue9),
      selectedValue10 == '' ? 3 : parseInt(selectedValue10),
    ],
  };

  const save = async () => {

    setLoading(true);

    const items = {
      route: 'result',
    };

    try {
      const value = await AsyncStorage.getItem('opn');

      if (value !== null) {
        await AsyncStorage.removeItem('opn');
        const jsonValue = JSON.stringify(data.values);
        await AsyncStorage.setItem('opn', jsonValue);
        navigation.navigate('result');
        setLoading(false);
      } else {
        const jsonValue = JSON.stringify(data.values);
        await AsyncStorage.setItem('opn', jsonValue);
        navigation.navigate('result');
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#40E0D0" barStyle="light-content" />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.darker}
              size={20}
            />
            <Text style={{fontSize: 17, color: Colors.darker, fontWeight: '500'}}>
              Openness - 10 Questions
            </Text>
          </TouchableOpacity>

          <View style={{marginTop: 30}}>
            <ProgressBar progress={0.90} color="#8E44AD" style={{height: 7, backgroundColor: "white"}} />
          </View>

          <TouchableOpacity style={{marginTop: 10}} onPress={() => save()}>
            <Text style={{textAlign: 'right', fontSize: 17, color: Colors.darker, fontWeight:'700'}}>Skip</Text>
          </TouchableOpacity>

          <ScrollView contentContainerStyle={{paddingBottom: 110}}>
            <View style={{marginTop: 10}}>
              <View>
                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 1: I feel little concern for others.{' '}
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue1(newValue)}
                  value={selectedValue1}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 2: I am interested in people.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue2(newValue)}
                  value={selectedValue2}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 3: I insult people.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue3(newValue)}
                  value={selectedValue3}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 4: I sympathize with others' feelings.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue4(newValue)}
                  value={selectedValue4}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 5: I am not interested in other people's problems.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue5(newValue)}
                  value={selectedValue5}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 6: I have a soft heart.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue6(newValue)}
                  value={selectedValue6}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 7: I am not really interested in others.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue7(newValue)}
                  value={selectedValue7}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 8: I take time out for others.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue8(newValue)}
                  value={selectedValue8}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 9: I feel others' emotions.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue9(newValue)}
                  value={selectedValue9}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                <Text style={{color: '#DE3163', fontSize: 20}}>
                  Question 10: I make people feel at ease.
                </Text>
                <RadioButton.Group
                  onValueChange={newValue => setSelectedValue10(newValue)}
                  value={selectedValue10}>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="1" />
                      <Text style={styles.radioText}>Strongly Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="2" />
                      <Text style={styles.radioText}>Disagree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="3" />
                      <Text style={styles.radioText}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="4" />
                      <Text style={styles.radioText}>Agree</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="5" />
                      <Text style={styles.radioText}>Strongly Agree</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
            </View>

            <View style={{marginTop: 20}}>

              {
                loading == false ? 
                  <GeneralButton
                  name={"Get Result"}
                  backgroudColor="#DE3163"
                  padding={10}
                  color="white"
                  borderRadius={10}
                  fontSize={18}
                  click={() => save()}
                /> : 

                  <LoadingSppiner name='Loading'
                  backgroudColor="#DE3163"
                  padding={10}
                  color="white"
                  borderRadius={10}
                  fontSize={18}
                  />

              }

              

              
              
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0',
  },

  cardText: {
    width: '33%',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 15,
  },

  logoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  logoImage: {
    height: 180,
    width: 180,
  },

  radioText: {
    fontSize: 17,
    color: 'black',
  },
});
