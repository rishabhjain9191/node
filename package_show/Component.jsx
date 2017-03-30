var React = require('react');

module.exports = React.createClass({
  componentWillMount: function() {
    this.setState({text: "AAAA"})
    if(typeof document !== 'undefined') {
      document.addEventListener('data-updated', function(e) {
        this.setState({text: e.detail.text});
      }.bind(this))
    }
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div>
      {
        this.state.text
      }
      <script src = '/assets/bundle.js' />
      </div>
    );
  }
});
