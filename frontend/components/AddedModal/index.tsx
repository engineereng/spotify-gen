import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {
    Circle,
    Ellipse,
  } from 'react-native-svg';

export type Props = {};

const AddedModal = (props: Props) => {

    const update = () => { 
        props.onPress();
    }

    return (
        <View style={styles.container}>
            <View style={{position: 'absolute'}}>
                <Svg height="300" width="350">
                    <Circle cx="320" cy="300" r="70" fill="transparent" stroke="hsla(252, 100%, 66%, 0.1)" strokeWidth="70" />
                </Svg>
            </View>
            <View style={{position: 'absolute'}}>
                <Svg height="300" width="350">
                    <Circle cx="10" cy="300" r="50" fill="hsla(252, 100%, 66%, 0.1)"/>
                </Svg>
            </View>
            <View style={styles.topContainer}>
                <Svg height="200" width="200">
                    <Circle cx="100" cy="60" r="60" fill="hsla(252, 100%, 66%, 0.1)"  />
                </Svg>
                <AntDesign
                    name="smileo"
                    size={90}
                    color={'black'}
                    style={{position: 'absolute', padding: 13}}
                />
                <View style={{backgroundColor:'white', position: 'absolute', borderRadius: 100, right: 40, bottom: 10}}>
                    <Ionicons
                        name="checkmark-circle-sharp"
                        size={40}
                        color={'#86D407'}
                    />
                </View>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.title}>{props.name} added to Spotify!</Text>
                <Text style={styles.subheader}>Open Spotify to check out your newly added playlist</Text>
                
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={update}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>OKAY</Text>
                </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default AddedModal;