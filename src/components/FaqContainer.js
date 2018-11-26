import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Faq from './Faq';

const FAQ_QUERY = gql`
  {
    cms {
      faqs {
        title
        body
      }
    }
  }
`;

const drawerWidth = 360;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      marginRight: drawerWidth
    }
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    position: 'fixed',
    bottom: 0
  },
  toolbar: theme.mixins.toolbar
});

class FaqContainer extends Component {
  state = {
    faq: null
  };

  handleMenuClick = faq => {
    this.setState({
      faq
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Query query={FAQ_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

            const FaqToRender = data.cms.faqs;
            const drawer = (
              <List>
                {FaqToRender.map((faq, index) => (
                  <ListItem button key={index} onClick={() => this.handleMenuClick(faq)}>
                    <ListItemText primary={faq.title} />
                  </ListItem>
                ))}
              </List>
            );
            return (
              <React.Fragment>
                <nav className={classes.drawer}>
                  <Hidden xsDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper
                      }}
                      variant="permanent"
                      anchor="right"
                      open
                    >
                      <div className={classes.toolbar} />
                      {drawer}
                    </Drawer>
                  </Hidden>
                </nav>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Faq faq={this.state.faq || FaqToRender[0]} />
                </main>
                <Hidden smUp implementation="css">
                  <Paper className={classes.paper} elevation={1}>
                    {drawer}
                  </Paper>
                </Hidden>
              </React.Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

FaqContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaqContainer);
