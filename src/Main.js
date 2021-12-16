import React, { Fragment } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import MainStory from './components/MainStory';

const Main = () => {
    const list = [
        { profileImg: 'https://s.pstatic.net/static/www/u/2014/0328/mma_20432863.png', id: 'homin_joo', contentImg: 'https://s.pstatic.net/static/www/mobile/edit/20211215/cropImg_728x360_81495224983272200.jpeg' },
        { profileImg: 'https://s.pstatic.net/static/www/u/2014/0328/mma_20432863.png', id: 'homin_joo', contentImg: 'https://s.pstatic.net/static/www/mobile/edit/20211215/cropImg_728x360_81495224983272200.jpeg' },
        { profileImg: 'https://s.pstatic.net/static/www/u/2014/0328/mma_20432863.png', id: 'homin_joo', contentImg: 'https://s.pstatic.net/static/www/mobile/edit/20211215/cropImg_728x360_81495224983272200.jpeg' },
    ];
    return (
        <View>
            <ScrollView>
                {list.map((v, k) => (
                    <MainStory
                        item={v}
                        key={k} 
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Main;