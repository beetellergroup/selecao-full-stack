import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";

import NavTop from "./NavTop";
import Dashboard from "./Dashboard";
import List from "./List";


function ProtectedPage() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="background">
        <NavTop />
        <Dashboard/>
        <List/>
      </div>
      <p>{res}</p>
    </div>
  );
}

export default ProtectedPage;