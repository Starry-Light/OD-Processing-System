import React, { useState } from "react";
import DateTimePicker from "./DateTimePicker";
import InputFileUpload from "./InputFileUpload";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Grid2} from "@mui/material";
import Typography from "@mui/material/Typography";
import Textarea from "@mui/joy/Textarea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Form() {
    const [formData, setFormData] = useState({
        dateTime: "",
        description: "",
        files: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                    OD Form
                </Typography>

                <hr style={{ border: "0.1px solid #EEEEEE", marginBottom: "20px" }} />

                <Card sx={{ p: 3, borderRadius: 2, boxShadow: 1 }}>
                    <CardContent>
                        <form action="/ODForm" method="POST" onSubmit={handleSubmit}>
                            <Grid2 container spacing={3} direction="column">
                                {/* DateTime Picker */}
                                <Grid2 item>
                                    <DateTimePicker />
                                </Grid2>

                                {/* Text Area */}
                                <Grid2 item>
                                    <Textarea
                                        size="md"
                                        name="description"
                                        placeholder="Enter description"
                                        fullWidth
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </Grid2>

                                {/* File Upload */}
                                <Grid2 item>
                                    <InputFileUpload />
                                </Grid2>

                                {/* Submit Button */}
                                <Grid2 item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Submit
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
