import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [url]);

  return <div></div>;
};

export default Bookings;
