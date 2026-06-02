import { useEffect, useState } from "react";

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
        const res = await fetch("api/users");
        const response = await res.json();
        console.log(response);
        setUserData(response.data);
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
