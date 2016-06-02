import { Router, Route, browserHistory} from 'react-router'
var React = require('react');
var RecipeActions = require('../actions/RecipeActions.js')
var RecipeStore = require('../stores/RecipeStore.js');



var RecipeForm = React.createClass({

					render: function(){
							return(
										<div>
										<div>
										<h3> ADD NEW RECIPE</h3>
										</div>
										<div>
										<form onSubmit={this.frmSubmit}>
										<div className="form-group">
										<label for="nam">Recipe Name:</label>
										<input id="nam" className="form-control" type="text" ref="rcpName"></input>
										</div>
										<div className="form-group">
										<label for="ing" >Ingredients:</label>
										<input id="ing" className="form-control" type="text" ref="rcpIngr" placeholder="please enter items seperated by commas"></input>
										</div>
										<div classname="container">

									   <div classname="row">


										<div className="form-buttons">
										<button type="submit"  onClick={this.btnClick}>Add recipe </button>


										<div className="cancel-button">
										<button className="" type="submit"  onClick={this.props.onCancelAdd}>Cancel </button>
										</div>
										</div>

										</div> {/* row */}

										</div>
										</form>
										</div>
										</div>
									);


					},

					btnClick: function(e){

					console.log("btn clicked...")


					},

					frmSubmit: function(e){

					e.preventDefault();

					var name = this.refs.rcpName.value.trim();
					var ingr = this.refs.rcpIngr.value.trim();
						ingr = ingr.split(',');

					if(!name || !ingr) return;

					console.log("Recipe Name: " + name + " Ingrdients: " + ingr);
					var num = 0;
					if(RecipeStore.getNumOfRecipes()){
					 num = RecipeStore.getIDofLast() +1;
				 }
					RecipeActions.createRecipe(num,name,ingr);
				{/*	this.props.addNew(name,ingr);*/}
					this.refs.rcpName.value = '';
					this.refs.rcpIngr.value ='';
					//this.props.history.push("/");
            this.props.onAdd();
					},


});
module.exports  = RecipeForm;
