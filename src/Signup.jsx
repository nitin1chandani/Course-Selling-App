import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: 200,
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome to Coursera, Sign up Below
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          style={{
            width: 400,
            padding: 20,
          }}
        >
          <TextField
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            type="email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            type="password"
            variant="outlined"
          />
          <br /> <br />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => res.json()) // Return JSON data here
                .then((data) => {
                  if (data.token) {
                    localStorage.setItem("token", data.token);
                  } else {
                    // Handle the case when token is not available in the response
                    console.error("Token not found in response");
                  }
                })
                .catch((error) => {
                  console.error("Signup error:", error);
                });
            }}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default Signup;
