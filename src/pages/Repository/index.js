import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Browser } from './styles';

export default class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { route } = this.props;
    const { repository } = route.params;
    return <Browser source={{ uri: repository.html_url }} />;
  }
}

Repository.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};
