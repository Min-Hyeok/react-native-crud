import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';


const { height, width } = Dimensions.get('window');
const MainStory = (props) => {
    const [width, height] = useState(0);

    useEffect(() => {
        // alert(props.item.id);
    });
    return (
        <View style={styles.mainStoryWrap}>
            <View style={styles.profileWrap}>
                <Image
                    source={{
                        uri: 'https://s.pstatic.net/static/www/u/2014/0328/mma_20432863.png',
                    }}
                    style={styles.profileImg}
                />
                <Text style={styles.profileTitle}>{props.item.id}</Text>
            </View>
            <View style={styles.contentWrap}>
                <Image
                    style={styles.contentImage}
                    source={{
                        uri: 'https://s.pstatic.net/static/www/mobile/edit/20211215/cropImg_728x360_81495224983272200.jpeg'
                    }}
                ></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStoryWrap: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: height * 0.7,
      marginBottom: 30
    },
    profileWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom: 15,
        marginTop: 15
    },
    profileImg: {
        width: 25,
        height: 25
    },
    profileTitle: {
        fontSize: 14,
        color: '#000',
        marginLeft: 10
    },
    contentWrap: {

    },
    contentImage: {
        maxHeight: height / 2,
        height: '100%',
        resizeMode: 'cover'
    }
  });

export default MainStory;