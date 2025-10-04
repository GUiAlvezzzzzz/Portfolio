import { Button, Container, Grid, styled, Typography } from  "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";



const Hero = () => {
  
    const StyledHero = styled("div")(()=> ({
        backgroundColor:"black",
        height: "100vh",
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius:"50%"

    }))

    return (
      <>
        <StyledHero>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <StyledImg src={Avatar}/>
                </Grid>
                <Grid item xs={8}>
                  <Typography color= "primary" variant="h1" textAlign="Center" >Guilherme Alves</Typography>
                  <Typography color= "primary" variant="h2" textAlign="Center" >Técnico em Informática</Typography>
                  <Button>
                    
                    Baixar CV</Button>
                  <Button>
                  
                    Me contate</Button>
                </Grid>
              </Grid>
            
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  