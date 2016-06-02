import { Router, Route, browserHistory} from 'react-router'
var React = require('react');
var RecipeActions = require('../actions/RecipeActions.js')
var RecipeStore = require('../stores/RecipeStore.js');



var RecipeEditForm = React.createClass({

					render: function(){
							return(
										<div>
										<div>
										<h3>EDIT RECIPE</h3>
										</div>
										<div>
										<form onSubmit={this.frmSubmit}>
										<div className="form-group">
										<label for="nam">Recipe Name:</label>
										<input id="nam" className="form-control" type="text" ref="rcpName" onChange={this.onChange} defaultValue={this.props.data.nm}></input>
										</div>
										<div className="form-group">
										<label for="ing">Ingredients:</label>
										<input type="text" className="form-control" id="ing" ref="rcpIngr" onChange={this.onChange} defaultValue={this.props.data.ing}></input>
										</div>
										<button type="submit"  onClick={this.btnClick}>Update </button>
										</form>
										</div>
										</div>
									);


					},

					btnClick: function(e){

					console.log("btn clicked...")


					},

					onChange: function(){


					},
					frmSubmit: function(e){

					 e.preventDefault();

					var name = this.refs.rcpName.value.trim();
					var ingr = this.refs.rcpIngr.value.trim();
						ingr = ingr.split(',');

					if(!name || !ingr) return;


					RecipeActions.editRecipe(this.props.data.key,name,ingr);
				{/*	this.props.addNew(name,ingr);*/}
					this.refs.rcpName.value = '';
					this.refs.rcpIngr.value ='';
					this.props.onEdit();
				{/*	this.props.history.push("/"); */}

					},


});
module.exports  = RecipeEditForm;
