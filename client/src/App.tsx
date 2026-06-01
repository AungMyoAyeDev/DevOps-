import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL || "http://localhost:4000";
type user = {
  name: string;
  email: string;
};
const App = () => {
  const [userData, setUserData] = useState<user[]>([
    { name: "aa", email: "aa@a.com" },
  ]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(BASE_URL + "/api/users");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Dockerize React Application</h1>
      <div>
        {userData.map((item, i) => (
          <div key={i}>{item.name + "/" + item.email}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
