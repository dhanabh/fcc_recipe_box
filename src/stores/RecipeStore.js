var Reflux = require('reflux');
var RecipeActions = require('../actions/RecipeActions.js');
var jquery = require('jquery');
var _recipes = [];

var RecipeStore = Reflux.createStore({
    init: function(){
          this.listenTo(RecipeActions.createRecipe,this.onCreate);
          this.listenTo(RecipeActions.editRecipe,this.onEdit);
          this.listenTo(RecipeActions.deleteRecipe,this.onDelete);

    },
    onCreate: function(ID,nm,ing){
			var num = ID +1;
			var newObj = {
				id: num,
				name: nm,
				ingr: ing
			}
      _recipes.push(newObj);
			console.log("_recipes" + _recipes);
			this.storeRecipes();
		  this.trigger(_recipes);
    },
    onEdit: function(key,name,ingr){
      for(var n=0; n < _recipes.length;n++){
          if(_recipes[n].id === key){
            _recipes[n].name = name;
            _recipes[n].ingr = ingr;

          }
        }
				this.storeRecipes();
        this.trigger(_recipes);
    },
    onDelete: function(ky){
      //to be added
			var arr = [];
			arr = _recipes.filter((val,i)=> val.id !== ky);
			_recipes = arr;
			this.storeRecipes();
			this.trigger(_recipes);

    },

    getRecipes: function(){
              return _recipes;

    },

    getRecipeById: function(id){
        for(var n =0; n < _recipes.length;n++){
          if(_recipes[n].id === id){
            return _recipes[n];
          }

        }

    },
		getIDofLast: function(){
				return (_recipes[_recipes.length -1].id);

		},
		getNumOfRecipes: function(){
			return _recipes.length;
		},

	  storeRecipes: function(){
			var data_length = _recipes.length;
      var first_run = 'true';
      localStorage.setItem('_jay1015_recipes_first_run', first_run);
			localStorage.setItem('_jay1015_recipes_data_length', data_length);
			for(var n=0; n < _recipes.length;n++){

				 var kee = '_jay1015_recipes' + String(n);
				 console.log('key: ' + kee);

					localStorage.setItem(kee, JSON.stringify(_recipes[n]));

			}


		},

		retrieveRecipes: function(){
						var data_length = Number(localStorage.getItem('_jay1015_recipes_data_length'));
            var first_run = localStorage.getItem('_jay1015_recipes_first_run');
						var objects = [];

						if(data_length){
							_recipes = [];
						for(var n = 0; n < data_length; n++){
							var obj = {};
							var kee = '_jay1015_recipes' + String(n);
							obj = JSON.parse(localStorage.getItem(kee));
							objects.push(obj);
						}

						_recipes = objects;
					}
					else{
                if(!first_run){
							_recipes = [{
								id: 0,
								name: 'Cake',
								ingr: ['eggs','flour','sugar','butter'],
							},
							{
								id: 1,
								name: 'Vanilla Cake',
								ingr: ['eggs','flour','sugar','butter', 'vanilla'],
							},
							{
								id: 2,
								name: 'Vanilla Icecream',
								ingr: ['milk','cream','sugar', 'vanilla'],
							},
							{
								id: 3,
								name: 'Maggie Noodles',
								ingr: ['Maggie Noodles','water','salt to test'],
							},
							{
								id: 4,
								name: 'Patanjali Noodles',
								ingr: ['Patanjali Noodles','water','salt to test'],
							},
							{
								id: 5,
								name: "Ching's Noodles",
								ingr: ["Ching's Noodles",'water','salt to test'],
							}
							];
            }






					}

						return _recipes;

		}

});

module.exports = RecipeStore;
