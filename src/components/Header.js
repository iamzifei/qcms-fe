import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  grow: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 3
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Qantas Cars
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/faq" color="inherit">
          Faq
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Header));
