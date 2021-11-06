import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from './styles';
import {Song} from "../../types";

export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <View style={styles.sub}>
                    <Text style={styles.artist}>{song.artist}</Text>
                    <Text style={styles.duration}>{song.duration}</Text>
                </View>
            </View>
        </View>
    )
}

export default SongListItem;