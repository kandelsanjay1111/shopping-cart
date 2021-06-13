export const reduce = (state,action)=>{
	if(action.type==="REMOVE_ITEM"){
		return {
			...state,
			item:state.item.filter((current_item)=>{
				return current_item.id !== action.payload
			}),
		};
	}

	if(action.type==="CLEAR_CART"){
		return {
			...state,
			item:[]
		}
	}
	if(action.type==="INCREMENT"){
		let updatedCart=state.item.map((element)=>{
			if(element.id===action.payload){
				return {
					...element,
					quantity:element.quantity + 1
				};
			}
			return element;
		});
		return {...state,item:updatedCart};
	}

	if(action.type==="DECREMENT"){
		const updatedCart=state.item.map((element)=>{
			if(element.id===action.payload){
				return{
					...element,
					quantity:element.quantity - 1
				};
			}
			return element;
		}).filter((element)=>{
			return element.quantity!==0;
		});
		return {...state, item:updatedCart};
	}

	if(action.type==='GET_TOTAL'){
		let  {totalItem}=state.item.reduce((accum,curVal)=>{
			let {quantity}=curVal;
			accum.totalItem += quantity;
			return accum;
		},{totalItem:0}
		);

		let {totalAmount}=state.item.reduce((accum,element)=>{
			accum.totalAmount+=element.price*element.quantity;
			return accum;
		},{totalAmount:0});


		/*let{totalAmount}=state.item.reduce(()=>{

		},{totalAmount:0});*/
		return {...state,totalItem,totalAmount};
	}

	return state;
};
