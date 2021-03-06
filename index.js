// let RNAndroidInstalledApps = require("react-native").NativeModules
//   .RNAndroidInstalledApps;

import { NativeModules } from 'react-native'

const { RNAndroidInstalledApps } = NativeModules

module.exports = {
	getApps(): Promise<any> {
		return RNAndroidInstalledApps.getApps()
	},
	getNonSystemApps(): Promise<any> {
		return RNAndroidInstalledApps.getNonSystemApps()
	},
	getSystemApps(): Promise<any> {
		return RNAndroidInstalledApps.getSystemApps()
	},
	getNonsystemAppsCats(): Promise<any> {
		return RNAndroidInstalledApps.getNonsystemAppsCats()
	},
	getAppDrawerApps(): Promise<any> {
		return RNAndroidInstalledApps.getAppDrawerApps()
	},
	getAppDrawerAppsCats(): Promise<any> {
		return RNAndroidInstalledApps.getAppDrawerAppsCats()
	},
	handleCategoryIndividual(string): Promise<any> {
		return RNAndroidInstalledApps.handleCategoryIndividual(string)
	},
}
