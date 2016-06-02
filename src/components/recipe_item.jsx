import { Router, Route, browserHistory} from 'react-router'
var React = require('react');

var RecipeActions = require('../actions/RecipeActions.js')
var RecipeStore = require('../stores/RecipeStore.js');



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
										var ing = "Ingredients: " + this.props.ingr.join(',');
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
								<div className="alpha">
								<div className="recipe_item">
								<a className="btn btn-default btn-primary" onClick={this.buttonHandler}>{this.props.name}</a>
								</div>

								<div className= {visible}>
								<a className="btn  btn-sm btn-warning" onClick={this.handleDel}>Delete </a>
								</div>

                	<div className= {visible}>
								<a className="btn  btn-sm btn-success" onClick={this.handleEdit}>Edit </a>
								</div>

                <div className= {visible}>
								<a className="btn  btn-sm btn-danger btn-close " onClick={this.handleClose}>X </a>
								</div>
								<div className="wrapper">
								<div className="recipe_item">
								{this.state.name}
								</div>
								<div className="recipe_item">
								<span>{this.state.ingr}</span>
								</div>
								</div>
								</div>


						);
						},


					handleDel: function(){
							var ky = this.props.id;
							console.log("in Handle Del");
							//this.props.handee(ky);
              RecipeActions.deleteRecipe(ky);
					},
          handleEdit: function(){
            var id = this.props.id;
            var nm = this.props.name;
            var ig = this.props.ingr;
            var url = "/" +":"+ id;
            url += "/" +":"+ nm;
            url +=  "/" +":"+ ig;
            this.props.handee(id,nm,ig);
          },
          handleClose: function(){
            this.setState( {  name: ' ',
                        ingr:  ' ',
                        isClicked: false
                      });

          }






});

module.exports = RecipeItem;
