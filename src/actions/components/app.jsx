var React = require('react');
var ReactDOM = require('react-dom');
var RecipeBox = require('./recipe_box.jsx');
var Router = require('react-router');
var Route = Router.Route;
var History = require('react-router');
var RecipeForm = require('./recipe_form.jsx');









ReactDOM.render((<Router history={History}>
    							<Route path="/" component={RecipeBox}/>
									<Route path="/add" component={RecipeForm}/>
  							</Router>
								),document.querySelector(".row"));
