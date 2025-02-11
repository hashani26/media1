import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUsers = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  await pause(1000);

  return response.data;
});

const pause = (duration) => {
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { addUsers };
