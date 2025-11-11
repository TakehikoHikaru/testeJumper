import { Box } from "@mui/material";

export default function Separador(props) {
    return (
        <Box sx={{ 
            width: '100vw', 
            backgroundColor: props.color, 
            height: '5px',
            margin : '10px'
        }} />
    )
}
