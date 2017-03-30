var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      destinationName: this.props.destinationName,
      days: this.props.days,
      nights: this.props.nights,
      price: this.props.price,
      imageUrl: this.props.imageUrl
    };
  },
  componentWillMount: function() {
    if(typeof document !== "undefined") {
      document.addEventListener('package-updated', function(event) {
        this.setState({
          destinationName: event.detail.destinationName,
          days: event.detail.days,
          nights: event.detail.nights,
          price: event.detail.price,
          imageUrl: event.detail.imageUrl
        });
      }.bind(this));
    }
  },
  render: function() {
    return (
      <div class="col-sm-5" style = {{border: '1px solid #b19191'}}>
         <div class="best-package-box">
            <a>
               <img style={{height: '219px', width: '361px', display: 'inline'}} src={this.state.imageUrl} />
               </a><div class="text-center btn-box"><a>
                 </a>
               </div>

            <div class="description">
               <h3 class="f17 fw7 mb8">{this.state.destinationName}<small>({this.state.days}D &amp; {this.state.nights}N)</small></h3>
               <p>Rs. {this.state.price}<small>(per person)</small></p>
            </div>
         </div>
        <script src = '/assets/bundle.js' />
      </div>
    );
  }
});
