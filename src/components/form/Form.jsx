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
import { BorderColor } from "@mui/icons-material";
import 'react-datepicker/dist/react-datepicker.css'

export default function Form() {
    const [formData, setFormData] = useState({
        startDateTime: null,
        endDateTime: null,
        description: "",
        files: [],
    });
    
    const handleStartDateChange = (date) => {
        setFormData((prev) => ({ ...prev, startDateTime: date }));
    };

    const handleEndDateChange = (date) => {
        setFormData((prev) => ({ ...prev, endDateTime: date }));
    };

    const handleFileChange = (files) => {
        setFormData((prev) => ({ ...prev, files }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.startDateTime || !formData.endDateTime){
            alert('Please select date and time');
        if (formData.files.length === 0){
            alert('Please upload a file before submitting.');
        return;
        }
        }
        console.log("Form Data:", formData);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" fontWeight="bold" sx={{color: "#015498"}} gutterBottom>
                    OD Form
                </Typography>

                <hr style={{ border: "0.1px solid #EEEEEE", marginBottom: "20px" }} />

                <Card sx={{ p: 3, borderRadius: 2, boxShadow: 1 }}>
                    <CardContent>
                        <form action="/ODForm" method="POST" onSubmit={handleSubmit}>
                            <Grid2 container spacing={3} direction="column">
                                {/* DateTime Picker */}
                                <Grid2 item>
                                    <DateTimePicker 
                                        onStartDateChange={handleStartDateChange} 
                                        onEndDateChange={handleEndDateChange} 
                                    />
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
                                    <InputFileUpload onFilesSelected={handleFileChange}/>
                                </Grid2>

                                {/* Submit Button */}
                                <Grid2 item>
                                    <Button type="submit" variant="contained" sx={{ backgroundColor: "#015498" }} fullWidth>
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
