import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setImageLink("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
        <TextField
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true}
          label="Description"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={imageLink}
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
          fullWidth={true}
          label="Image Link"
          variant="outlined"
        />
        <br />
        <br />
        <Button
          size={"large"}
          variant="contained"
          onClick={() => {
            function callback2(data) {
              clearForm();
              alert("Course added");
            }
            function callback1(res) {
              res.json().then(callback2);
            }
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: imageLink,
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(callback1);
          }}
        >
          {" "}
          Add course
        </Button>
      </Card>
    </div>
  );
}

export default AddCourse;
