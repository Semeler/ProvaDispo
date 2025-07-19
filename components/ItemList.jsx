// ItemList.js
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "./ListItem";

const ItemList = ({ items, onEdit, onDelete }) => {
    // ... (O restante do código permanece o mesmo)
    const renderItem = ({ item }) => (
        <ListItem item={item} onEdit={onEdit} onDelete={onDelete} />
    );

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Nenhum item disponível</Text>
                </View>
            }
            contentContainerStyle={items.length === 0 && styles.emptyList}
        />
    );
};
// ... (O restante do código de estilos permanece o mesmo)
const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: "#999",
    },
    emptyList: {
        flexGrow: 1,
        justifyContent: "center",
    },
});

export default ItemList;