
var React = require('react');
var RecipeList = require('./recipe_list.jsx');
var RecipeForm = require('./recipe_form.jsx');
var RecipeStore = require('../stores/RecipeStore.js');
var { Link } = require('react-router');




var RecipeBox = React.createClass({


		getInitialState: function(){

						 return {
						 			data: RecipeStore.getRecipes()

						 }



		},

		onChange: function(data){
			this.setState({data: data})

		},




		componentDidMount: function(){

							this.subscribe = RecipeStore.listen(this.onChange);

	},

	 componentWillUnmount: function(){

							this.unsubscribe();

	 },

		addRecipe: function(txtName, arrIngr){

			var newID = 0;
			if(this.state.data.length)
			{
			newID = this.state.data[this.state.data.length -1].id +1;
			}
		var newRecipe = { id: newID ,
						name: txtName,
						ingr: arrIngr
						};
		this.setState({
							data: this.state.data.concat(newRecipe)


		})




		},

		render: function(){


				 return(

				 		<div>

				 		<p> In recipe box: </p>

				 	{/*	<RecipeList data={this.state.data} handee={this.upper} />
				 		<RecipeForm  addNew={this.addRecipe}/> */}
						<RecipeList data={this.state.data} />
						<Link to="/add" className="active">Add Recipe</Link>


				 		</div>

				 );

		},

		upper: function(ky){

			var array = this.state.data.slice();
			/*for(var n=0 ; n < array.length ; n++){

			if (array[n].id === ky){

					array = array.splice(n,1);
			this.setState({
  			data: array,
			})

			}



			}
			*/
this.setState({
    data: this.state.data.filter((val, i) => val.id !== ky)
  });





					console.log("key: " + ky);

				},

});


module.exports = RecipeBox;
