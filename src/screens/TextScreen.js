import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
	const [password, setPassword] = useState("");
	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				secureTextEntry
				style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={text => setPassword(text)}
			/>
			{password.length < 4 && (
				<Text>Password must be longer than 5 characters</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1
	}
});

export default TextScreen;
