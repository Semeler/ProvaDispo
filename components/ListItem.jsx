// ListItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ListItem = ({ item, onEdit, onDelete }) => {
    // ... (O restante do código permanece o mesmo)
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
// ... (O restante do código de estilos permanece o mesmo)
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#FFF",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        color: "#333",
    },
    buttonGroup: {
        flexDirection: "row",
    },
    editButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: "#F44336",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 14,
    },
});


export default ListItem;