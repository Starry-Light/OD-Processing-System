import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Grid2 } from '@mui/material';

const cards = [
  {
    id: 1,
    title: 'Mentees',
    description: 'View Mentees\' OD submissions',
  },
  {
    id: 2,
    title: 'Students',
    description: 'View Students\' OD submissions',
  },

];

function TeacherCardList() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Grid2 container spacing={2} direction={'column'} alignItems={'center'}>
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Grid2>

        <Card key={index}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid2>
      ))}
    </Box>
    </Grid2>

  );
}

export default TeacherCardList;
