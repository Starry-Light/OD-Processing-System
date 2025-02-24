import React, { useState } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Container, 
    Grid,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Sample data for teacher's subjects and classes
const teacherSubjects = [
    {
        id: 1,
        subject: 'Mathematics',
        class: 'IT - B',
        students: [
            {
                id: 1,
                name: 'Nanditha S',
                registerNumber: '20IT101',
                odDate: '2024-02-20',
                reason: 'Technical Symposium',
                status: 'Approved'
            },
            {
                id: 2,
                name: 'Mughilan Paul',
                registerNumber: '20IT102',
                odDate: '2024-02-21',
                reason: 'Sports Event',
                status: 'Rejected'
            },
            {
                id: 3,
                name: 'Nilaa A J',
                registerNumber: '20IT103',
                odDate: '2024-02-24',
                reason: 'Being too cute',
                status: 'Pending'
            }
        ]
    },
    {
        id: 2,
        subject: 'Mathematics',
        class: 'IT - A',
        students: [
            {
                id: 3,
                name: 'Irfana',
                registerNumber: '20IT201',
                odDate: '2024-02-19',
                reason: 'Workshop',
                status: 'Approved'
            },
            {
                id: 1, // Duplicate entry for John Doe
                name: 'Irfan',
                registerNumber: '20IT101',
                odDate: '2024-02-20',
                reason: 'Technical Symposium',
                status: 'Approved'
            }
        ]
    }
];

// SubjectCard component to display each subject and its students
const SubjectCard = ({ subject, class: className, students }) => {
    const [expanded, setExpanded] = useState(false);

    // Filter unique students based on their register number
    const uniqueStudents = Array.from(new Set(students.map(student => student.registerNumber)))
        .map(registerNumber => students.find(student => student.registerNumber === registerNumber));

    return (
        <Card 
            variant="outlined" 
            sx={{ 
                mb: 2,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
            }}
        >
            <CardContent>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: expanded ? 2 : 0
                }}>
                    <Box>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                            {subject}
                        </Typography>
                        <Typography color="text.secondary">
                            Class: {className}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip 
                            label={`${uniqueStudents.length} Students`} 
                            color="primary" 
                            size="small"
                            sx={{ backgroundColor: "#015498" }}
                        />
                        <IconButton 
                            onClick={() => setExpanded(!expanded)}
                            aria-label="show more"
                        >
                            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </Box>
                </Box>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <TableContainer component={Paper} elevation={0}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Register Number</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>OD Date</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Reason</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {uniqueStudents.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell>{student.name}</TableCell>
                                        <TableCell>{student.registerNumber}</TableCell>
                                        <TableCell>{student.odDate}</TableCell>
                                        <TableCell>{student.reason}</TableCell>
                                        <TableCell>
                                            <Chip 
                                                label={student.status}
                                                color={student.status === 'Approved' ? 'success' : student.status === 'Rejected' ? 'error' : 'warning'}
                                                size="small"
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Collapse>
            </CardContent>
        </Card>
    );
};

export default function Students() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
                <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{ 
                        fontWeight: 600,
                        color: '#015498',
                        mb: 3
                    }}
                >
                    Students OD Submissions
                </Typography>

                {teacherSubjects.map((subjectData) => (
                    <SubjectCard 
                        key={subjectData.id}
                        subject={subjectData.subject}
                        class={subjectData.class}
                        students={subjectData.students}
                    />
                ))}
            </Box>
        </Container>
    );
} 