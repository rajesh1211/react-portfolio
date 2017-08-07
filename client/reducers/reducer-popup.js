const initialState = {
  isShow: false,
  message: 'no popup'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CONTACTED':
      return Object.assign({}, state, {
        message: 'Thank you for contacting',
        isShow: true
      })
      break;
  }
  return state;
}