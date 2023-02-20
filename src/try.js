
const user = {
      name: 'Alex',
      location: {
        city: 'New York',
        state: 'NY'
      }
    };



    const copy = Object.assign({}, user);
    // OR
    // const copy = { ...user };
    copy.location.city = 'Albany';
    console.log('original: ', user.location);
    console.log('copy:', copy.location);

// use ====>   

// 'origin: {city: 'New York',
      //  state: 'NY'}
// 'copy:  {city: 'Albany',
        //state: 'NY'}
