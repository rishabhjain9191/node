var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
      {this.props.message}
      <script src = '/assets/bundle.js' />
      </div>
    );
  }
});
