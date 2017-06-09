export default {

	/**
	 * https://medium.com/@chekofif/using-es6-s-proxy-for-safe-object-property-access-f42fa4380b2c
	 * @param obj
	 * @param key
	 * @return {*}
	 */
	deepAccessUsingString: (obj, key) => {
		return key.split('.').reduce((nestedObject, key) => {
			if(nestedObject && key in nestedObject) {
				return nestedObject[key];
			}
			return undefined;
		}, obj);
	}
}
