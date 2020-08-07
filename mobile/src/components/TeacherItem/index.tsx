import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';

function TeacherItem() {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source = {{uri: 'https://github.com/curtisyoung.png'}}
                    />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Curtis Young</Text>
                    <Text style={styles.subject}>Educação Física</Text>
                </View>
            </View>

            <Text style={styles.bio}>The branch of fisic-education.</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$80,00</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    {/* <Image source={heartOutlineIcon}></Image> */}
                    <Image source={unfavoriteIcon}></Image>
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon}></Image>
                    <Text style={styles.contactButtonText}>Contato</Text>
                </RectButton>
            </View>
        </View>
    );
}


export default TeacherItem;