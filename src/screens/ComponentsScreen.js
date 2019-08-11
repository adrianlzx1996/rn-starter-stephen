import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
	const greeting = <Text style={styles.textStyle2}>Hi there!</Text>;

	return (
		<View>
			<Text style={styles.textStyle1}>
				Getting started with react native
			</Text>
			{greeting}
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle1: {
		fontSize: 45
	},
	textStyle2: {
		fontSize: 20
	}
});

export default ComponentsScreen;
