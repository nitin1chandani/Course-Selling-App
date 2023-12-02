import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Course = () => {
  let { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);

  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) {
      course = courses[i];
    }
  }
  if (!course) {
    return (
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h5"}>Course not Found !</Typography>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CourseCard course={course} courses={courses} setCourses={setCourses} />
      <UpdateCard course={course} courses={courses} setCourses={setCourses} />
    </div>
  );
};

const CourseCard = (props) => {
  const course = props.course;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ margin: 10, width: 300, minHeight: 200 }}>
        <Typography textAlign={"center"}>{course.title}</Typography>
        <Typography textAlign={"center"}>{course.description}</Typography>
        <img src={course.imageLink} style={{ width: 300, height: 300 }} />
      </Card>
    </div>
  );
};
const UpdateCard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setImageLink("");
  };
  const course = props.course;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
        <TextField
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
          label="Update Title"
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
          label="Update Description"
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
          label="Update Image Link"
          variant="outlined"
        />
        <br />
        <br />
        <Button
          size={"large"}
          variant="contained"
          onClick={() => {
            function callback2(data) {
              let updatedCourses = [];

              for (let i = 0; i < props.courses.length; i++) {
                if (props.courses[i].id == course.id) {
                  updatedCourses.push({
                    id: course.id,
                    title: title,
                    description: description,
                    imageLink: imageLink,
                  });
                } else {
                  updatedCourses.push(props.courses[i]);
                }
              }
              props.setCourses(updatedCourses);
              clearForm();
            }
            function callback1(res) {
              res.json().then(callback2);
            }
            fetch("http://localhost:3000/admin/courses/" + course.id, {
              method: "PUT",
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
          Updatecourse
        </Button>
      </Card>
    </div>
  );
};
export default Course;
