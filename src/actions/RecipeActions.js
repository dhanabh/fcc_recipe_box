var Reflux = require('reflux');

var RecipeActions = Reflux.createActions([
'createRecipe',
'editRecipe',
'deleteRecipe'
]);

module.exports = RecipeActions;
