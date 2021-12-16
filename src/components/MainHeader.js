import { Text, View } from "react-native";


const MainHeader = () => {
    return (
        <View
            style={styles.headerWrap}
        >
            <Text styles={styles.headerTitie}>MainPage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerWrap: {
        height: 100
    },
    headerTitie: {
        fontSize: 16,
        color: '#000'
    }
});