var React = require('react');
var RecipeBox= require('./recipe_box.jsx');



var App = React.createClass({


render: function(){

        return(
        <div>

        <div>
        <RecipeBox/>
        </div>
        <div>

        </div>
        </div>
        )

}

});

module.exports = App;
