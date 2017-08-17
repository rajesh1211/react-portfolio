export const contactRequest = (user) => {
  console.log("You clicked on user: ", user);
  return {
    type: 'CONTACTED',
    payload: user
  }
};

export const closeContactRequest = (user) => {
  return {
    type: 'CLOSE_CONTACT',
    payload: user
  }
};
