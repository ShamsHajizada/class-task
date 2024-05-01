import { BASE_URL } from "./practise.js";

fetch(`${BASE_URL}/products`, {
  method: "GET",
})
  .then((res) => res.json())
  .catch((data) => {
    console.log(data);
  });
  function addNewData(payload){
fetch(`${BASE_URL}`,{
    method: "POST",
    headers: {

        "Content-Type"; "Application/json", v
    }
})
  }
 