import { SafeAreaView, Text, Image, StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native';
import Logo from '../assets/headerIcon.png';

export default function MyHeader() {
    return (
        <SafeAreaView >
        <StatusBar/>
            <View style={styles.headerContainer}>
                <Image style={styles.headerLogo} source={Logo} />
                <Text style={styles.headerText}>Barista</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    headerLogo: {
        backgroundColor: 'white',
        borderRadius: 100,
        height: 30,
        width: 30,
    },
    headerText: {
        paddingHorizontal: 6,
        fontSize: 18,
        color: 'white',
    },
});
