import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { Component } from "react";

const ListScreen = () => {
	const friends = [
		{ name: "Friends #1", age: "1" },
		{ name: "Friends #2", age: "2" },
		{ name: "Friends #3", age: "3" },
		{ name: "Friends #4", age: "4" },
		{ name: "Friends #5", age: "5" },
		{ name: "Friends #6", age: "6" },
		{ name: "Friends #7", age: "7" },
		{ name: "Friends #8", age: "8" },
		{ name: "Friends #9", age: "9" }
	];

	return (
		<FlatList
			keyExtractor={friend => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} Age: {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default ListScreen;
