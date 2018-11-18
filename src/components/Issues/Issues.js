import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Issues.css';
import { connect } from 'react-redux';
import { fetchIssues } from '../../state/issues/actions';

class Issues extends Component {
  componentDidMount() {
    this.props.dispatch(fetchIssues('Singh'));
  }
  render() {
    const { prop } = this.props;
    return (
      <div className={styles.Issues}>
        <span>{prop}</span>
      </div>
    );
  }
}

export { Issues as IssuesNotConnected };

Issues.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default connect()(Issues);
