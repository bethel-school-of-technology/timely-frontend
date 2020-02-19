import React from 'react';

export default class Values extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.values}</div>
        <button onClick={this.props.onGetValues}>Get Values!</button>
      </div>
    );
  }
}