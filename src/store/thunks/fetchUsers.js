import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/user");
  return response.data;
});

export { fetchUsers };

//https://2ality.com/2015/07/es6-module-exports.html

//-----------------error generated when returned the response and not response.data---------------------

// page.bundle.js:6 A non-serializable value was detected in an action, in the path: `payload.headers`. Value:
// AxiosHeaders {content-length: '43', content-type: 'application/json'}

// Take a look at the logic that dispatched this action:
// {type: 'users/fetch/fulfilled', payload: {…}, meta: {…}}

// (See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)
// (To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)
// await in (anonymous)
// dispatch	@	page.bundle.js:6
// (anonymous)	@	UsersList.js:9
