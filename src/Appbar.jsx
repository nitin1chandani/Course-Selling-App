import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Appbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <div>
        <Typography variant="h6">Coursera</Typography>
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
