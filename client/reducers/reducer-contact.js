const initialState = {
  name: '',
  email: '',
  message: '',
  popupMessage: '',
  isShow: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CONTACTED':
      return Object.assign(action.payload, state, {
        popupMessage: "Thanks "+action.payload.name + " for trying to contact but this is just a modal to show the react-redux flow. If you want to connect with me please email me at rajesh.raikwar1211@gmail.com",
        isShow: true
      })  
      break;

    case 'CLOSE_CONTACT':
      return Object.assign(action.payload, state, {
        popupMessage: "",
        isShow: false
      })  
      break;  
  }
  return state;
}