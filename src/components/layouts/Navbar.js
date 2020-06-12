import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Navbar(props) {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Link to="/">
        <img src={props.logo} width="250px" />
      </Link>
      <Grid item>
        <Button style={{margin: "10px"}} size="large" variant="outlined" color="primary" href="https://forms.gle/Y7ZjScCKMkK6VJfr5" target="_blank">
          Request for Coding Help
        </Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;
