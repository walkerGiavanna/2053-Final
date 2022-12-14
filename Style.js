import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
      },
    termDefinition: {
        padding: 30,
        fontSize: 18,
        height: 88,
        backgroundColor: "lightgreen",
        textAlign: "center",
    },
    border: {
        borderWidth: 1,
        borderColor: "black",
    },
    term: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: "beige",
    },
    termDescription: {
        padding: 10,
        fontSize: 10,
        height: 44,
        backgroundColor: "lightgreen",
    },
    add: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: "beige",
      },
    borderAdd: {
        borderWidth: 4,
        borderColor: "blue",
    },
    delButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    delText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
   
});

export { styles }