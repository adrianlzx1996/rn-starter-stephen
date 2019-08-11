import { View, Text, StyleSheet, Button } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, action) => {
	// state === { count: number }
	// action === { type: 'increment' || 'decrement' , paylaod: 1 }

	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const { count } = state;
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({ type: "increment", payload: 1 });
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: "decrement", payload: 1 });
				}}
			/>
			<Text>Current Count: {count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
