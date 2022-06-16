import { CloseFullscreenOutlined } from "@mui/icons-material";
import { Container, Grid, Typography, Rating } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const ReviewSection = ({ isMobile }) => {
    const themes = useTheme();
    const isLarge = useMediaQuery(themes.breakpoints.down('lg'));

    const today = new Date();
    const month = today.toDateString().slice(4,7);
    const year = today.getFullYear();


    return (
        <Container>
        <Grid container bgcolor=""
            justifyContent="center"
            alignItems="center"
            mt={8}
            mb={2}
        >
            <Grid container item gap={5}  justifyContent="center" alignItems='center' bgcolor="">
                <Grid item  justifyContent="center" alignItems='center' bgcolor="common.beige" width={isLarge? 460 : 590} height={335}>
                    <Typography
                        variant={ isMobile ? 'h3' : 'h2' }
                        color='text'
                        textAlign='center'
                        mt={5}
                        mb={2}
                    >
                        Average Google <br />Customer Review
                    </Typography>
                    <Rating name='review_rating' value={4.5}  precision={0.5} size='small' sx={{ color: 'black',  display: 'flex', justifyContent: 'center'  }} readOnly />
                    <Typography fontSize={100} fontWeight='bold' color='text' lineHeight={1.2} textAlign='center' mt={1}>
                        4.5
                    </Typography>
                    <Typography variant='body1' color='text' textAlign='center' mb={3}>
                        As of {month}, {year}
                    </Typography>
                </Grid>
                <Grid container item   justifyContent="center" alignItems='center' bgcolor="common.beige" width={isLarge? 460 : 590}  height={335}>
                    <Grid item px={ isMobile ? 2: 8 } justifyContent="center" alignItems='top'>
                    <Typography
                        variant={ isMobile ? 'h3' : 'h2' }
                        color='text'
                        align='center'
                        mt={0} mb={3}
                    >
                        Here’s what another <br />franchise owner says
                    </Typography>
                    <Typography variant='body1' fontStyle='italic' color={'text'} align='center' mb={3} >
                    “Sushi Rollin’ was such a great opportunity for me as a first time franchisee. The team was there to support and train me from start to finish. The results are already very promising.”
                    </Typography>
                    <Typography variant='body1' color="333333" textAlign="center">
                    -2nd Franchisee-
                    </Typography>
                    </Grid>
                </Grid>

            </Grid>


        </Grid>
        </Container>
    )
}



export default ReviewSection;