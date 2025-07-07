import React, {useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="bg-gray-500 p-4 text-2xl text-white font-bold">
        Followers : {data.followers}
        <img src={data.avatar_url} alt="img" width="200px" />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
