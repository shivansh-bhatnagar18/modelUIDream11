import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface SearchDropdownProps {
    label: string;
    periodData: { label: string }[];
}

export default function SearchDropdown({ label, periodData }: SearchDropdownProps) {
    return (
        <Autocomplete
            disablePortal
            id="select-period"
            options={periodData}
            sx={{ width: 300 }}
            renderInput={(params: any) => <TextField {...params} label={label} />}
        />
    );
}