import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = ({ source, title, score }) => {
	return (
		<View>
			<Image source={source} />
			<Text>{title}</Text>
			<Text>Image Score - {score}</Text>
		</View>
	);
};

export default ImageDetails;
