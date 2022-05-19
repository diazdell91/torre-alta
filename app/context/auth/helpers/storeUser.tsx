import AsyncStorage from '@react-native-async-storage/async-storage';

const saveUser = async (value: object) => {
	let success;
	if (value) {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem('session', jsonValue);
			success = true;
		} catch (e) {
			success = false;
		}
	} else {
		success = false;
	}

	return success;
};

const getUser = async () => {
	let response;
	try {
		const jsonValue = await AsyncStorage.getItem('session');
		response = jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		response = null;
	}
	return response;
};

const clearStore = async () => {
	await AsyncStorage.clear();
};

export { saveUser, getUser, clearStore };
