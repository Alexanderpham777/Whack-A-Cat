import { StyleSheet } from 'react-native';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Styles = StyleSheet.create({
    page: {
        flex: 1,
        fontSize: 25,
        backgroundColor: getRandomColor(),
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 2,
    },
    clearButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 2,
    },
    input: {
        fontSize: 15,
        backgroundColor: 'white',
        width: 300,
        margin: 10,
        borderWidth: 2,
        padding: 25,
    },
    title: {
        top: 1,
        fontSize: 50,
        alignItems: 'center',
        //justifyContent: 'top',
        fontWeight: 'bold',
        //flexDirection: 'row',

    },
    title2: {
        top: -50,
        fontSize: 75,
        alignItems: 'center',
        //justifyContent: 'top',
        fontWeight: 'bold',
        flexDirection: 'row',

    },
    space: {
        width: 20,
        height: 20,
    },
    text: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 350,
    },
    text2: {
        //top: -50,
        right: -40,
        textAlign: 'justify',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 275,
        height: 250,
        borderWidth: 1,
        padding: 15,
    },
    sign: {
        //top: 100,
        right: -40,
        textAlign: 'justify',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 275,
        height: 100,
        borderWidth: 1,
        padding: 10,
    },
    date: {
        //top: 100,
        right: -40,
        textAlign: 'justify',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 275,
        height: 100,
        borderWidth: 1,
        padding: 10,
    },
    title1: {
        position: 'absolute',
        left: -125,
        top: 400,
        fontSize: 75,
        fontWeight: 'bold',
        transform: [{ rotate: '-90deg' }],
        textAlign: 'right',
        flexDirection: 'row',

    },
    img: {
        width: 75,
        height: 150,
        position: 'absolute',
        left: 5,
        top: 125,

    },
});

export default Styles;