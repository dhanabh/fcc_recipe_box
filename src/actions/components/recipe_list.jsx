var React = require('react');
var RecipeItem = require('./recipe_item.jsx');




var RecipeList = React.createClass({






				render: function(){
				var handee = this.props.handee;

				var list_nodes = this.props.data.map(function(ob){

					return (

					          <RecipeItem  name= {ob.name}  ingr= {ob.ingr.join(',')} key={ob.id} id={ob.id} handee={handee}/>

							);
					});

					return (
							<div className="container">
							{list_nodes}
							</div>

					);



				},




});

module.exports= RecipeList;
