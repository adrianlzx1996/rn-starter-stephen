import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={[styles.boxStyle, styles.viewOneStyle]} />
			<View style={[styles.boxStyle, styles.viewTwoStyle]} />
			<View style={[styles.boxStyle, styles.viewThreeStyle]} />
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: "black",
		height: 200,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	boxStyle: {
		height: 50,
		width: 50
	},
	viewOneStyle: {
		backgroundColor: "red"
	},
	viewTwoStyle: {
		backgroundColor: "blue",
		top: 50
	},
	viewThreeStyle: {
		backgroundColor: "purple"
	}
});

export default BoxScreen;
