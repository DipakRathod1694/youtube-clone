import { useState } from "react";
import { Paper, TextField } from "@material-ui/core"

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if(event.key == "Enter"){
            onSubmit(searchTerm);
        }
    }

    return(
        <Paper elevation={6} styling={{ padding: "25px" }}>
            <TextField
                fullWidth
                label = "Search..."
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={onKeyPress}
            >

            </TextField>
        </Paper>
    )
}

export default SearchBar;