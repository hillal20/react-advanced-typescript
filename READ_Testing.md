## 1 \*\* Enzyme testing front-end with redux

import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

## 2 \*\* mocking

const reactRedux = jest.mock('react-redux', () => ({
useDispatch: jest.fn(),
useSelector: jest.fn()
},
}));

const useStatespy = jest.spyOn(React, 'useState');
expect(spy).toHaveBeenCalled();

const initialState = {};
const mockStore = configureMockStore(initialState);
const store = mockStore({ startup: { complete: false } });
const onSubmitFn = jest.fn();

### 3 \*\* creating the rapper via mount form enzyme

```

const wrapperFn = props => mount(
  <Provider store={store}>
    <CreateEventForm {...props} onSubmit={onSubmitFn} />
  </Provider>,
);

```

## 4 \*\* we have to use jest.mock and to kill it we have to jest.unmock()

beforeEach(() => {

wrapper = wrapperFn(props);

component = findByDataAttribute(wrapper, 'create-event');
expect(component.text()).toEqual('Hello, World!');
});

```
 const findDataByAttribute  = (wrapper, attribute) => wrapper.find('[data-test="header"]')
```

## Events triggering

link.at(0).simulate('click');
submitButton.simulate('click');

nameInput[i].props().onChange('test');
descInput[i].props().onChange('test');
expect(nameInput[i].props().value).toEqual('test');
expect(descInput[i].props().value).toEqual('test');

## 5 \*\* jest.spyOne vs jest.mock

- jest.spyOn is used to spy on a specific function within a module,
- jest.mock is used to replace an entire module with a mock object.

## 6 \*\* testing the server

const server = require('./server.js')
const request = require('supertest');

/// get test
const expectedBody = { api: 'running!' };

const response = await request(server).get('/');

expect(response.status).toBe(200);
expect(response.type).toEqual('application/json');
expect(response.body).toEqual(expectedBody);

// post test

const res = await request(app)
.post('/users')
.send({ name: 'John', age: 30 });
expect(res.status).toEqual(201);
expect(res.body).toHaveProperty('name', 'John');
expect(res.body).toHaveProperty('age', 30);

## 7 \*\* mocking axios

jest.mock('axios');

```
  const mockedResponse = { data: { message: 'Hello World' } };

    axios.get.mockResolvedValue(mockedResponse);

    const res = await request(app).get('/');


    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello World' });

```

## 8 \*\* jest.requireActual('mongodb')

in some scenarios we need to mock only a portion of mongodb and not all of it but we still
need the original parts along with the mocked portion

```
jest.mock('mongodb', () => {

    const originalModule = jest.requireActual('mongodb');

    return {
        __esModule: true,
        ...originalModule,
        MongoClient: jest.fn().mockImplementation(() => {
            return {
                connect: jest.fn().mockResolvedValue(null),
                db: jest.fn().mockReturnValue({})
                {
        {

```

## 9 shallow vs mount in enzyme

shallow to render the parent without children but mount is to render everything

## 10 \*\* chai is a popular assertion for node

const chai = require('chai');
const expect = chai.expect;

const myValue = 5;
expect(myValue).to.equal(5);

## 11 ** Sinon.js is a library for creating and manipulating spies, and mocks

const myFunction = (a, b) => { return a + b };
const spy = sinon.spy(myFunction);

console.log(spy(1, 2)); // 3
console.log(spy.called); // true
console.log(spy.callCount); // 1
console.log(spy.firstCall.args); // [1, 2]
console.log(spy.firstCall.returnValue); // 3

## 12 ** Mocka is less then jest 

## 13 ** react testing liberary 


import {  screen, fireEvent , act, render , waitFor} from '@testing-library/react';
