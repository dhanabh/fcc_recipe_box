var React = require('react');




var RecipeForm = React.createClass({

					render: function(){
							return(
										<form onSubmit={this.frmSubmit}>
										<label>Recipe Name:</label>
										<input type="text" ref="rcpName"></input>
										<label>Ingredients:</label>
										<input type="text" ref="rcpIngr"></input>
										<button type="submit"  onClick={this.btnClick}>Add Submit </button>
										</form>
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
					this.props.addNew(name,ingr);
					this.refs.rcpName.value = '';
					this.refs.rcpIngr.value ='';


					},


});
module.exports  = RecipeForm;