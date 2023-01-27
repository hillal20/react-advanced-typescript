import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';






// mocking 
const useStatespy = jest.spyOn(React, 'useState');

const initialState = {};
const mockStore = configureMockStore(initialState);
const store = mockStore({ startup: { complete: false } });
const onSubmitFn = jest.fn();

```

const wrapperFn = props => mount(
  <Provider store={store}>
    <CreateEventForm {...props} onSubmit={onSubmitFn} />
  </Provider>,
);

```

``` 

beforeEach(() => {
    wrapper = wrapperFn(props);
    component = findByDataAttribute(wrapper, 'create-event');
  });
  
```
