import React from 'react';
// import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res)
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div className="gas-prices">
        {/* {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )} */}
        {this.state.friends.map(friend => {
          return (
            <div>
              <p>{friend.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Friends;
