
var React = require('react');
var RecipeList = require('./recipe_list.jsx');
var RecipeForm = require('./recipe_form.jsx');
var RecipeEditForm = require('./recipe_edit_form.jsx');
var RecipeStore = require('../stores/RecipeStore.js');
var { Link } = require('react-router');




var RecipeBox = React.createClass({


		getInitialState: function(){

						 return {
                  isAdd: false,
							 		edObj: {
													isEdit: false,
													key: null,
													nm: ' ',
													ing:' ',
												},
						 			data: RecipeStore.retrieveRecipes(),

						 }



		},

		onChange: function(data){
			this.setState({data: data})

		},




		componentDidMount: function(){

							this.subscribe = RecipeStore.listen(this.onChange);

	},

	 componentWillmount: function(){

							this.subscribe= RecipeStore.listen(this.onChange);

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

			if(!this.state.edObj.isEdit && !this.state.isAdd){
				 return(
					 <div  className='main-div'>


				 		<h3> RECIPE BOX </h3>
             <div>
               <div className="add_button">
                <a className="btn btn-default btn-warning add_new" onClick= {this.addHandle}>Add New Recipe</a>
               </div>
              <div>
				 		<RecipeList data={this.state.data} handee={this.upper} />
				 	{/*	<RecipeForm  addNew={this.addRecipe}/>
						<RecipeList data={this.state.data} /> */}
               </div>

             </div>
{/*						<Link to="/add" className="active">Add Recipe</Link>
*/}


				 		</div>

				 );
			 }
      else if (!this.state.edObj.isEdit && this.state.isAdd){
          return(
            <div>
            <div>

            </div>
            <div>
                  <RecipeForm onAdd={this.onAdd} onCancelAdd={this.onCancelAdd} />
             </div>
              </div>

          )

      }
			 else{
				 			return(
								<div className="edit_form">
				 			<RecipeEditForm onEdit={this.quitEdit} data={this.state.edObj} />
							</div>
						);
			 }
		},

	onCancelAdd: function(){

		this.setState({
		isAdd: false
	});
		this.render();


	},
  addHandle: function(){
     this.setState({
  isAdd: true
});
  this.render();

  },
  onAdd: function(){

  this.setState({
  isAdd: false
});
  this.render();
},
		quitEdit: function(){

			var newObj = {
						isEdit: false,
							key: null,
							nm: " ",
							ing: " " ,
				 }

				this.setState({edObj: newObj});

		},

		upper: function(ky, nam, ingr){

		{/*}	var array = this.state.data.slice();
			/*for(var n=0 ; n < array.length ; n++){

			if (array[n].id === ky){

					array = array.splice(n,1);
			this.setState({
  			data: array,
			})

			}



			}

this.setState({
    data: this.state.data.filter((val, i) => val.id !== ky)
  });

*/}
					var newObj = {
					 			isEdit: true,
							 		key: ky,
							    nm: nam,
							    ing:   ingr,
						 }

						this.setState({edObj: newObj},function(){

							console.log("flag1 " + newObj.isEdit);
							console.log("key1 :  " + newObj.key);
							console.log("name1 :  " + newObj.nm);
							console.log("ingr1 :  " + newObj.ing);
							console.log("------------------------------");

							console.log("flag: " + this.state.edObj.isEdit);
							console.log("key:  " + this.state.edObj.key);
							console.log("name:  " + this.state.edObj.nm);
							console.log("ingr:  " + this.state.edObj.ing);

							this.render();

						}
						);




				},

});
module.exports = RecipeBox;
