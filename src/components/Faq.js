import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const Faq = props => {
  const {
    faq: { title, body },
    classes
  } = props;
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
        {title}
      </Typography>
      <Typography component="h5">{ReactHtmlParser(body)}</Typography>
    </Paper>
  );
};

Faq.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Faq);
