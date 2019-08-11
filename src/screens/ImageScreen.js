import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
	return (
		<View>
			<ImageDetails
				title="Forest"
				score={9}
				source={require("../../assets/forest.jpg")}
			/>
			<ImageDetails
				title="Mountain"
				score={7}
				source={require("../../assets/mountain.jpg")}
			/>

			<ImageDetails
				title="Beach"
				score={4}
				source={require("../../assets/beach.jpg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
