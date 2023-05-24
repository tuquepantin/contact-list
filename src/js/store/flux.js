const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLBASE: 'https://assets.breatheco.de/apis/fake/contact',
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getContact: async () => {
				const store = getStore()
				try{
					let response = await fetch(`${store.URLBASE}/agenda/victorpantin`)
					let data = await response.json()
		
					if(response.status == 404){
						console.log("error")
						
					}else{
						setStore({
							contacts: data
						})
					}
		
		
		
				}catch(err){
					console.log(err)
				}
		
			},
			createContact: async (data) => {
				const store = getStore()
				const actions = getActions()
				try {
					let response = await fetch(`${store.URLBASE}/`, {
						method: "POST",
						headers:{
							"Content-Type":"application/json"
						},
						body:JSON.stringify(data)
					})

					if (response.ok){
						actions.getContact()
					}else{
						console.log("error")
					}
					

				} catch (error) {
					console.log(error)
				}
			},
			deleteContact: async (id) => {
				const store = getStore()
				try{
					let response = await fetch(`${store.URLBASE}/${id}`, {
						method:"DELETE",
					})
					
					console.log(response)
		
					if (response.ok){
						getActions().getContact()
					}else{
						console.log("error")
					}
		
		
		
				}catch(err){
					console.log(err)
				}
		
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
