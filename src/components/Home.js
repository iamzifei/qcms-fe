import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  hero: {
    position: 'absolute',
    top: '50%',
    width: '100vw',
    textAlign: 'center',
    color: '#fff'
  },
  media: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
});

const Home = props => {
  const {
    classes,
    homepage: { heading, subheading, heroImageUrl }
  } = props;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div
        className={classes.media}
        style={{
          backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.7)
      ),url(${heroImageUrl})`
        }}
        alt="Qantas Cars"
      />
      <section className={classes.hero}>
        <Typography gutterBottom variant="h2" component="h1" color="inherit">
          {heading}
        </Typography>
        <Typography variant="h5" component="p" color="inherit">
          {subheading}
        </Typography>
      </section>
    </main>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
