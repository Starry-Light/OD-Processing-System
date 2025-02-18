import DateTimePicker from "./DateTimePicker";
import Button from '@mui/material/Button';
import InputFileUpload from "./InputFileUpload";
import Container from '@mui/material/Container';
import '../../styles/components/Form.css'
import { Grid2 } from "@mui/material";
import {Typography} from "@mui/material";
import Textarea from '@mui/joy/Textarea';

import TextField from "@mui/material/TextField";

export default function Form() {
    return (
        <>
        <Container>

            <form action="">
                <Grid2 container spacing={2} direction={'column'} alignItems={'center'}>
                    <Grid2>
                    <Typography variant="h1" gutterBottom>
                        OD FORM
                    </Typography>
                    </Grid2>
                    <Grid2>

                        <DateTimePicker />  
                    </Grid2>
                    <Grid2>
                    <Textarea size="lg" name="Size" placeholder="Large" />
                        {/* <TextField
                            id="filled-multiline-flexible"
                            label="Multiline"
                            multiline
                            maxRows={4}
                            variant="filled"
                            /> */}
                    </Grid2>
                    <Grid2>
                        <Button id="submitFormButton" variant="contained">Submit</Button>

                    </Grid2>
                    <Grid2>
                    <InputFileUpload />

                    </Grid2>

                </Grid2>
            </form>

        </Container>
    
        </>
    )
}