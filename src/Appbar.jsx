import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Appbar = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    function callback2(data) {
      if (data.username) {
        setUserEmail(data.username);
      }
      // setisLoading(false);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  // if (isLoading) {
  //   return <div>loading....</div>;
  // }

  if (userEmail)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
        }}
      >
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6">Coursera</Typography>
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <div>{userEmail}</div>

          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", null);
                window.location = "/";
              }}
            >
              {" "}
              Log out
            </Button>
          </div>
        </div>
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">Coursera</Typography>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Link to="/signup">
            <Button variant="contained"> Sign up</Button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <Button variant="contained"> Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Appbar;
