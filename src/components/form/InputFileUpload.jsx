import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({ onFilesSelected }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    if (onFilesSelected) {
      onFilesSelected(files);
    }
  };

  return (
    <Box textAlign="center">
      {/* Upload Button */}
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
      </Button>

      {/* Display List of Uploaded Files */}
      {selectedFiles.length > 0 && (
        <Box
          sx={{
            marginTop: 2,
            padding: 2,
            backgroundColor: "#f5f5f5", // Light gray background
            borderRadius: 2,
            maxWidth: 700,
            marginX: "auto", // Centers the box horizontally
            textAlign: "center",
            boxShadow: 1, // Adds a slight shadow
          }}
        >
          <Typography variant="body1" color="gray">
            Uploaded Files:
          </Typography>
          <List sx={{ padding: 0 }}>
            {selectedFiles.map((file, index) => (
              <ListItem key={index} sx={{ justifyContent: "center", color: "#555" }}>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}
