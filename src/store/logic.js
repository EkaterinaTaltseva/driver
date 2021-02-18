export  default  {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		driverCatChange(context, CatArr ) {
			context.commit('driver/newDriverCat', CatArr,  { root: true } )
		}
	},
	modules: {}
}