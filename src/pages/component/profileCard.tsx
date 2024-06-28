import React from "react";
import { Card, Grid, Typography, Box, Select, MenuItem, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";

const fakeData = {
  id: 1,
  profile_img: require("../../assets/user.png"),
  name: "Muhammad Talha",
  email: "muhammadtalha99@gmail.com",
  phone: 23456465467,
  age: 22,
  status: true,
  type: "Student",
};

interface FileUploadProps {
  imageUrl: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Profile" style={{ width: 100, height: 100, borderRadius: '50%' }} />
    </div>
  );
};

const ProfileCard: React.FC = () => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <Box sx={{ paddingTop: 5, paddingBottom: 5, paddingInline: 2 }}>
        <Grid container spacing={2} p={0.5} alignItems={{ md: "center", lg: "flex-start" }}>
          <Grid item xs={12} md={3}>
            <h2 style={{ fontSize: 32, textAlign: "center", whiteSpace: "nowrap" }}>
              Your Info
            </h2>
            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12, alignItems: "center" }}>
                <FileUpload imageUrl={fakeData.profile_img} />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={9} sx={{ marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={5}>
                <div style={{ marginBottom: 8 }}>
                  <label>Your Name *</label>
                </div>
                <TextField
                  fullWidth
                  value={fakeData.name}
                  size="small"
                  placeholder="Your Name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <div style={{ marginBottom: 8 }}>
                  <label>Your Surname</label>
                </div>
                <TextField
                  fullWidth
                  value=""
                  size="small"
                  placeholder="Your Surname"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <div style={{ marginBottom: 8 }}>
                  <label>Gender</label>
                </div>
                <Select
                  fullWidth
                  value=""
                  variant="standard"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="unspecified">Unspecified</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <div style={{ marginBottom: 8 }}>
                  <label>Date of Birth</label>
                </div>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    value={null}
                    onChange={() => {}}
                    renderInput={(params) => <TextField {...params} fullWidth variant="standard" />}
                  />
                </LocalizationProvider> */}
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <div style={{ marginBottom: 8 }}>
                  <label>Email</label>
                </div>
                <TextField
                  fullWidth
                  value={fakeData.email}
                  size="small"
                  placeholder="Email"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6} lg={5}>
                <div style={{ marginBottom: 8 }}>
                  <label>Phone Number *</label>
                </div>
                <TextField
                  fullWidth
                  value={fakeData.phone.toString()}
                  size="small"
                  placeholder="Phone Number"
                  variant="standard"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} md={10} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained">Update Profile</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ProfileCard;
