import Grid from '@mui/material/GridLegacy';

const Temp = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <div className="hidden">
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        zIndex="100"
        sx={{
          height: '48vh',
        }}
      >
        <h1>Esta página está en construcción.</h1>
        <h2>Disculpe las molestias.</h2>
      </Grid>
    </div>
  );
};

export default Temp;
