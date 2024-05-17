import React, { useState } from 'react';
import { Box, Button, Checkbox, FormLabel, Input, InputAdornment, ListItemIcon, MenuItem, Select, Typography, styled } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// CSS rule to remove border-bottom properties
const styles = `
    .css-19q1m9k-MuiInputBase-root-MuiInput-root::before {
        border-bottom: none !important;
    }

    .css-19q1m9k-MuiInputBase-root-MuiInput-root::after {
        border-bottom: none !important;
    }
`;

// Styled component for custom Input
const TextInputFeildContainer = styled(Input)`
    border-bottom: none !important;
`;

const InputField = () => {
    const [selected, setSelected] = useState(null);

    const handleChange = (event, value) => {
        if (selected === value) {
            setSelected(null);
        } else {
            setSelected(value); 
        }
    };

    const fields = [
        { label: "Client Reference Number", placeholder: "Select Client Reference Number" },
        { label: "Account Number / Name", placeholder: "Select Account Number / Name" },
        { label: "Title", placeholder: "Select Title" },
        { label: "Applicant Name", placeholder: "Select Applicant Name" },
        { label: "IP Number", placeholder: "Select Filter Name" },
        { label: "IP Type", placeholder: "Select Filter Name" },
        { label: "Country", placeholder: "Select Account Number / Name" },
        { label: "Client Reference Number", placeholder: "Select Client Reference Number" },
        { label: "Account Number / Name", placeholder: "Select Account Number / Name" },
        { label: "Title", placeholder: "Select Title" },
        { label: "Applicant Name", placeholder: "Select Applicant Name" },
    ];

    return (
        <Box
            sx={{
                border: '2px solid #FFFFFF',
                width: '475px',
                backgroundColor: '#FFFFFF',
                margin: 'auto',
                padding: '20px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <style>{styles}</style> {/* Apply CSS rules */}

            <Box sx={{
                overflowY: 'auto',
                height: '614px',
                lineHeight: '32px',
            }}>
                {fields.map((field, index) => (
                    <Box key={index} >
                        <FormLabel
                            sx={{
                                fontWeight: 700,
                                fontSize: '14px',
                                color: '#000000',
                            }}
                        >
                            {field.label}
                        </FormLabel>
                        <TextInputFeildContainer
                            placeholder={field.placeholder}
                            sx={{
                                width: '100%',
                                height: '40px',
                                border: '1px solid #CCCCCC',
                                borderRadius: '5px',
                                paddingLeft: '10px',
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <ChevronRightRoundedIcon />
                                </InputAdornment>
                            }
                        />
                    </Box>
                ))}
                <FormLabel
                    sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#000000',
                        marginBottom: '8px',
                    }}
                >
                    IP Number
                </FormLabel>
                <Select
                    sx={{
                        width: '100%',
                        height: '40px',
                        border: '1px solid #CCCCCC',
                        borderRadius: '5px',
                        paddingLeft: '10px',
                    }}
                    displayEmpty
                    value={selected || ""}
                    onChange={(event) => setSelected(event.target.value)}
                >
                    <MenuItem value="" disabled>
                        #135
                    </MenuItem>
                    <MenuItem value={1}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                onChange={(event) => handleChange(event, 1)}
                                checked={selected === 1}
                                inputProps={{ 'aria-labelledby': 'checkbox-list-label' }}
                            />
                        </ListItemIcon>
                        #13567AB
                    </MenuItem>
                    <MenuItem value={2}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                onChange={(event) => handleChange(event, 2)}
                                checked={selected === 2}
                                inputProps={{ 'aria-labelledby': 'checkbox-list-label' }}
                            />
                        </ListItemIcon>
                        #13579AB
                    </MenuItem>
                    <MenuItem value={3}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                onChange={(event) => handleChange(event, 3)}
                                checked={selected === 3}
                                inputProps={{ 'aria-labelledby': 'checkbox-list-label' }}
                            />
                        </ListItemIcon>
                        #13589CD
                    </MenuItem>
                </Select>

            </Box>
            <Box>
                <FormLabel
                    sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#000000',
                        marginBottom: '8px',
                        display: "flex"
                    }}
                >
                    IP Type
                </FormLabel>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, }}>
                <Button
                    sx={{
                        border: "1px solid #00A89F",
                        fontSize: "10px",
                        borderRadius: "2px",
                        color: "#00A89F"
                    }}
                >
                    CLEAR
                </Button>
                <Button sx={{ backgroundColor: "#00A89F", fontSize: "10px", borderRadius: "2px", color: "#FFFFFF" }}>
                    APPLY
                </Button>
            </Box>
        </Box>
    );
};

export default InputField;
