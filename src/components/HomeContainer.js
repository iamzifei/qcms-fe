import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './Home';

const HOME_QUERY = gql`
  {
    cms {
      homepage {
        heading
        subheading
        heroImageUrl
      }
    }
  }
`;

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Query query={HOME_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <CircularProgress />;
            if (error) return <div>Error</div>;

            const homepage = data.cms.homepage;

            return <Home homepage={homepage} />;
          }}
        </Query>
      </div>
    );
  }
}

export default HomeContainer;
