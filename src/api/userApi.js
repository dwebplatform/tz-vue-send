import axios from "axios";
export async function getUsers() {
  return await axios.get(
    "https://my-json-server.typicode.com/Vespand/crmm-tasks/users"
  );
}
