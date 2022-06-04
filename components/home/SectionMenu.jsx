import { Button, Container, Grid, Typography } from "@mui/material";
import { section1 } from "../../data/homemenu";
import MuiNextLink from "@components/MuiNextLink";
import ImageListWithTitle from "../menu/ImageListWithTitle";

export default function SectionMenu(props) {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "common.beige",
      }}
    >
      <Container sx={{ mt: props.isMobile ? 5 : 7 }}>
        <Typography
          color="text"
          variant={props.isMobile ? "h3" : "h2"}
          align="center"
          sx={{ pb: props.isMobile ? 3 : 3 }}
        >
          What We are Rollin’
        </Typography>

        <Typography color="text" 
        variant={props.isMobile ? "h5" : "h3"} align="center"
        sx={{ pb: props.isMobile ? 3 : 5,
          px: props.isMobile ? 0 : 20 
        }}
        >
        Asian cuisine has surpassed all other categories for the last 15 years and it continues to grow. We have 60+ rolls & sushi items and 30+ flavorful dishes on the menu.
        </Typography>

        <Grid align="center"  pb={props.isMobile ? 3 : 0}>
          <MuiNextLink href="/menu" underline="none" sx={{ py: 2 }}>
            <Button> View More Menu</Button>
          </MuiNextLink>
        </Grid>

        <ImageListWithTitle
          imgData={section1}
          isHome={props.isHome}
          isMobile={props.isMobile}
        />
      </Container>
    </Grid>
  );
}
