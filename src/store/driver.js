export  default  {
	namespaced: true,
	state: {
		driverCat: '12211',
	},
	getters: {
		driverCat(state) {
			return 	state.driverCat
		}
	},
	mutations: {
		newDriverCat(state, newCat) {
			state.driverCat = newCat
		}
	},
	actions: {},
	modules: {}
}