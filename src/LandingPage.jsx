import { Typography, Button, Container, Grid, Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #2196F3, #21CBF3)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center" sx={{ color: "#fff" }}>
              Welcome to Our Course Platform
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" sx={{ color: "#fff" }}>
              Enhance your skills with our diverse range of courses.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" size="large" sx={{ marginTop: 4 }}>
              Explore Courses
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
