const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLBASE: 'https://assets.breatheco.de/apis/fake/contact/',
			contacts: [],
			id: ""
			
		},
		actions: {
			getContact: async () => {
				const store = getStore()
				try{
					let response = await fetch(`${store.URLBASE}agenda/victorpantin`)
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
					let response = await fetch(`${store.URLBASE}`, {
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
					let response = await fetch(`${store.URLBASE}${id}`, {
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
			updateContact: async (data, id) => {
				const store = getStore()
				
				try {
					let response = await fetch(`${store.URLBASE}${id}`, {
						method: "PUT",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(data)
					})

					if (response.ok) {
						getActions().getContact()
					} else {
						console.log(id)
					}

				} catch (err) {
					console.log(err)
				}
		
			}
		}
	};
};

export default getState;
