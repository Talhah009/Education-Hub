import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Grid, Typography } from "@mui/material";
// import { toggleDarkMode } from "../../store/slice";
import { hover } from "@testing-library/user-event/dist/hover";

interface CardData {
  id: number;
  title: string;
  desc:string;
  numbers: number;
  imgSrc: string;
}

const fakeData: CardData[] = [
  {
    id: 1,
    title: "Reviewers",
    desc:"This will show you the structure of the orders table, including the newly added total_amount column.",
    numbers: 10,
    imgSrc: require("../../assets/user.png"),
  },
  {
    id: 2,
    title: "Contributor",
    desc:"This will show you the structure of the orders table, including the newly added total_amount column.",
    numbers: 15,
    imgSrc: require("../../assets/users.png"),
  },
  {
    id: 3,
    title: "Resource",
    desc:"This will show you the structure of the orders table, including the newly added total_amount column.",
    numbers: 5,
    imgSrc: require("../../assets/document-signed.png"),
  },
  {
    id: 4,
    title: "Category",
    desc:"This will show you the structure of the orders table, including the newly added total_amount column.",
    numbers: 20,
    imgSrc: require("../../assets/apps.png"),
  },
];

interface DarkThemeColors {
  backgroundColor: string;
  textColor: string;
}

const darkThemeColors: DarkThemeColors = {
  backgroundColor: "rgb(18, 18, 18)",
  textColor: "#fff",
};

const MyCard: React.FC<CardData> = ({ title, numbers, imgSrc, desc }) => {
  const darkMode = useSelector((state: any) => state.user.darkMode);

  const [hovered, setHovered] = useState(false);

  const { backgroundColor, textColor } = darkMode
    ? darkThemeColors
    : { backgroundColor: "#fff", textColor: "#000" };

  return (
    <Grid item xs={12} sm={6} md={3} xl={3}>
      <Card
        style={{
          width: "95%",
          margin: "10px",
          marginLeft: "20px",
          backgroundColor: backgroundColor,
          color: textColor,
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.03)" : "scale(1)",
          boxShadow: hovered? "0 0 15px rgb(0 0 0 / 45%)": "",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              marginRight: "10px",
              width: 50,
              height: 50,
              background: "rgb(235, 238, 246)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
            }}
          >
            <img src={imgSrc} alt="Image" style={{ width: "30px" }} />
          </div>

          <div style={{ flex: 1 }}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography  variant="body2" component="div" className="truncate">
              {desc}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                margin: "0px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#21536f",
              }}
            >
              {numbers}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

const MyCardList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          marginRight: "20px",
        }}
      >
        {fakeData.map((data) => (
          <MyCard key={data.id} {...data} />
        ))}
      </div>
    </Grid>
  );
};

export default MyCardList;
