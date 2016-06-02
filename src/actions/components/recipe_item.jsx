var React = require('react');





var RecipeItem = React.createClass({







				getInitialState: function(){


									return {
											name: ' ',
											ingr:  ' ',
											isChecked: false
									}

				},


				buttonHandler: function(){

						 			if(!this.state.isClicked){
										var caption = "Name: " + this.props.name;
										var ing = "Ingredients: " + this.props.ingr;
									this.setState( {  name: caption,
						 						      ingr:  ing,
						 						      isClicked: true
						 						    });

			 			}
						 			else
						 			{
						 			this.setState( {  name: ' ',
						 						      ingr:  ' ',
						 						      isClicked: false
						 						    });


						 			}


						},



				render: function(){

						var visible = "hidden"

									if(this.state.isClicked)visible = "visible" ; else visible = "hidden";



						return (
								<div>
								<div className="recipe_item">
								<a className="btn btn-default btn-primary" onClick={this.buttonHandler}>{this.props.name}</a>
								</div>
								<div className="recipe_item">
								{this.state.name}
								</div>
								<div className="recipe_item">
								<span>{this.state.ingr}</span>
								</div>
								<div className="recipe_item">
								<div className= {visible}>
								<a className="btn btn-default btn-sm btn-warning" onClick={this.handleDel}>Delete </a>
								</div>
								</div>
								</div>


						);
						},


					handleDel: function(){
							var ky = this.props.id;
							console.log("in Handle Del");
							this.props.handee(ky);

					},







});

module.exports = RecipeItem;
