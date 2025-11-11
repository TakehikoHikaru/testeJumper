import { Box, Typography } from "@mui/material"
import AspectRatio from '@mui/joy/AspectRatio';


export default function TypeCard(props) {

    let color = "red"

    switch (props.text.toLowerCase()) {
        case "plant":
            color = "green"
            
            break
        case "fogo":
            color = "orange"
            break
    }


    return (
        <Box sx={{
            border: 1,
            width: 45,
            height: 15,
            display: "flex",
            justifyContent: "center",
            borderRadius: 1,
            backgroundColor: color
        }}>
            <AspectRatio   ratio="4/3">
                <Typography sx={{
                fontSize: 10,
                color: "white",
                textShadow: "1px 1px black"
            }}>{props.text}</Typography>
            </AspectRatio>
            
        </Box>
    )

}