import { Box, Typography } from "@mui/material";
import TypeCard from "./TypeCard";

function PokeCard(props) {

    let typeList = [
        "planta",
        "Fogo",
    ]

    return (
        <Box sx={{
            width: '300px',
            height: '150px',
            backgroundColor: "red",
            display: 'flex',
            flexDirection: 'row'
        }}>
            <Box sx={{
                width: '40%',
                height: '100%',
                backgroundColor: "blue",
                display: "flex",
                justifyContent: "center",

            }}>
                <Box
                    sx={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: "black",
                        margin: '10px'
                    }}
                >
                    <img style={{width: "100%"}} src={props.img}/>
                </Box>

            </Box>
            <Box sx={{
                width: '60%',
                height: '100%',
                backgroundColor: "grey",
                display: 'flex',
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundImage:  'url({props.img })'
            }}>
                <Box sx={{
                    width: '90%',
                    height: '40px',
                    backgroundColor: "green",
                    display: "flex",
                    alignItems: "center"
                }}> 
                <Typography>{props.name}</Typography></Box>
                <Box sx={{
                    width: '90%',
                    height: '40px',
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                    flexWrap: "wrap"
                }}>

                { 
                    typeList.map( (item) => {
                        return <TypeCard text={item}/>
                    } )
                }

                </Box>
                <Box sx={{
                    width: '90%',
                    height: '40px',
                    backgroundColor: "aquamarine",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{
                        width: "100%",
                        backgroundColor: "red",
                        height: "32%",
                        display:"flex",
                        alignItems: "center"
                    }}>
                    <Typography sx={{fontSize: 10}}>Tamanho: 1234</Typography>
                        
                    </Box>

                       <Box sx={{
                        width: "100%",
                        backgroundColor: "green",
                        height: "32%",
                        display:"flex",
                        alignItems: "center"
                    }}>
                    <Typography sx={{fontSize: 10}}>Peso: 1234kg</Typography>
                        
                    </Box>
       <Box sx={{
                        width: "100%",
                        backgroundColor: "yellow",
                        height: "32%",
                        display:"flex",
                        alignItems: "center"
                    }}>
                    <Typography sx={{fontSize: 10}}>Força: 1234</Typography>
                        
                    </Box>


                </Box>
            </Box>
        </Box>

    )
}

export default PokeCard;