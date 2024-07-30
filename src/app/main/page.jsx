"use client";

import axios from "axios";
import { observer } from "mobx-react-lite";
function Main() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  const handleTest = async () => {
    console.log("주소:",apiBaseUrl);
    try {
      const response = await axios.get(`${apiBaseUrl}/test`);
      console.log(response.data); // 응답 데이터를 콘솔에 출력
    } catch (err) {
      console.log("오류",err)
    }
  };
  return <div><button type="button" onClick={handleTest}>{apiBaseUrl}</button></div>;
}

export default observer(Main);
