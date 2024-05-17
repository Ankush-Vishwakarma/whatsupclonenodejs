import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import Vector from "../rwx/assets/Vector(1).svg";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import { cardData } from "./data";
import SwitcherIcons1 from "../rwx/assets/SwitcherIcons1.svg";
import SwitcherIcons2 from "../rwx/assets/SwitcherIcons2.svg";
import SwitcherIcons3 from "../rwx/assets/SwitcherIcons3.svg";
import AccessibleTable from "./AccessibleTable";

const Home = () => {
  const card = [
    {
      icon: (
        <AddIcon sx={{ color: "#00A89F", height: "50px", width: "50px" }} />
      ),
      title:
        "“I’m Familiar with IP Solutions Portal and I know where I want to start”",
      backgroundColor: "#EAFDFC",
      actionText: "START NOW",
      actionColor: "#00A89F",
    },
    {
      icon: (
        <ForumIcon sx={{ color: "#00A89F", height: "50px", width: "50px" }} />
      ),
      title: "“I want some help and I’m not sure where to start”",
      backgroundColor: "#EAFDFC",
      actionText: "GUIDE ME",
      actionColor: "#00A89F",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", width: "100%" }}
      >
        <Grid
          item
          xs={12}
          md={2.9}
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <Container
            sx={{
              height: "85vh",
              backgroundColor: "white",
              marginTop: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}
            >
              Updates and Reminders
            </Typography>
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: card.backgroundColor,
                  marginTop: "20px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: "medium" }}>
                      {card.title}
                    </Typography>
                    <DisabledByDefaultRoundedIcon />
                  </Box>
                  <Typography sx={{ fontSize: "16px" }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "right" }}>
                  {card.showArrow && <ArrowForwardIcon />}
                </CardActions>
              </Card>
            ))}
          </Container>
        </Grid>
        <Grid item xs={12} md={8.9}>
          <Container
            sx={{
              height: "35vh",
              backgroundColor: "white",
              marginTop: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              What would you like to do today?
            </Typography>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "space-between",
                marginTop: "10px",
                gap:3
              }}
            >
              {card.map((card, index) => (
                <Card
                  key={index}
                  sx={{ backgroundColor: card.backgroundColor }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      padding: 0,
                    }}
                  >
                    <img src={Vector} alt="" />
                    {card.icon}
                    <Typography sx={{ color: "#00A89F", fontWeight: "bold" }}>
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ backgroundColor: "#00A89F", marginTop: "20px" }}
                  >
                    <Button sx={{ color: "#FFFFFF" }}>
                      {card.actionText}
                      <ArrowForwardIcon />
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Container>
        </Grid>
        <Grid
    item
    xs={12}
    md={8.9}
    sx={{
    position: "absolute",
    bottom: 10,
    right:-10,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  }}
>
  <Container
    sx={{
      height: "48vh",
      backgroundColor: "white",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
       // Adjust margin-top as needed
       
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
      >
        Completed Tasks
      </Typography>
      <Box
        sx={{
          border: "1px solid #D9D9D9",
          display: "flex",
          gap: "2px",
          marginTop: "20px",
        }}
      >
        <img src={SwitcherIcons1} alt="" />
        <Typography sx={{ color: "#D9D9D9" }}>|</Typography>
        <img src={SwitcherIcons2} alt="" />
        <Typography sx={{ color: "#D9D9D9" }}>|</Typography>
        <img src={SwitcherIcons3} alt="" />
      </Box>
    </Box>
    <AccessibleTable />
  </Container>
</Grid>


      </Grid>
    </Box>
  );
};

export default Home;