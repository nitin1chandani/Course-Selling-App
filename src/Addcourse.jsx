import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
const Addcourse = () => {
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          width: 400,
          padding: 20,
        }}
      >
        <TextField fullWidth label="title" variant="outlined" />
        <TextField fullWidth label="Description" variant="outlined" />
        <Button size="large" variant="contained">
          Add Course
        </Button>
      </Card>
    </div>
  );
};

export default Addcourse;
