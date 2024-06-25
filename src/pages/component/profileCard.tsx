import React, { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface CardData {
    id: number;
    profile_img: string;
    name: string;
    email: string;
    phone: number;
    age: number;
    status: boolean;
    type: string;
}

const fakeData: CardData[] = [
  {
    id: 1,
    profile_img: require("../../assets/user.png"),
    name: "Muhammad Talha",
    email: "muhammadtalha99@gmail.com",
    phone: 23456465467,
    age: 22,
    status: true,
    type: "Student",
  },
];

const ProfileCard: React.FC = () => {
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
          <Card
            key={data.id}
            style={{
              width: "95%",
              margin: "10px",
              marginLeft: "20px",
              backgroundColor: "white",
              color: "#000",
              display: "flex",
            }}
          >
            <CardContent style={{ display: "flex", alignItems: "center", width: "35%" }}>
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
                <img
                  src={data.profile_img}
                  alt="Profile"
                  style={{ width: "30px" }}
                />
              </div>
              <Typography variant="h5" component="div">
                {data.name}
              </Typography>
            </CardContent>

            <CardContent style={{ display: "flex", flexDirection: "column", width: "65%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" component="div" style={{ flex: 1 }}>
                  <strong>Phone:</strong> {data.phone}
                </Typography>
                <Typography variant="body2" component="div" style={{ flex: 1 }}>
                  <strong>Email:</strong> {data.email}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" component="div" style={{ flex: 1 }}>
                  <strong>Age:</strong> {data.age}
                </Typography>
                <Typography variant="body2" component="div" style={{ flex: 1 }}>
                  <strong>Type:</strong> {data.type}
                </Typography>
              </div>
              <Typography variant="body2" component="div" style={{ marginTop: "10px" }}>
                <strong>Status:</strong> {data.status ? "Active" : "Inactive"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Grid>
  );
};

export default ProfileCard;
