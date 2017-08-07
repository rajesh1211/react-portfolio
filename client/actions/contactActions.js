export const contactRequest = (user) => {
  console.log("You clicked on user: ", user);
  return {
    type: 'CONTACTED',
    payload: user
  }
};