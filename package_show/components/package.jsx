var React = require('react');

module.exports = React.createClass({
  render: function() {
    var destinationName = this.props.destinationName;
    var days = this.props.days;
    var nights = this.props.nights;
    var price = this.props.price;
    var imageUrl = this.props.imageUrl;
    return (
      <div class="col-sm-6" style = {{border: '1px solid #b19191'}}>
         <div class="best-package-box">
            <a>
               <img style={{height: '219px', width: '361px', display: 'inline'}} src={imageUrl} />
               </a><div class="text-center btn-box"><a>
                 </a>
               </div>

            <div class="description">
               <h3 class="f17 fw7 mb8">{destinationName}<small>({days}D &amp; {nights}N)</small></h3>
               <p>Rs. {price}<small>(per person)</small></p>
            </div>
         </div>
      </div>
    );
  }
});
