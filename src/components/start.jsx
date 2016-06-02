import { Router, Route, browserHistory} from 'react-router'
var React = require('react');
var ReactDOM = require('react-dom');
var RecipeBox = require('./recipe_box.jsx');
var RecipeForm = require('./recipe_form.jsx');
var RecipeEditForm = require('./recipe_edit_form.jsx');





var App  = require('./app.jsx');
{/*
ReactDOM.render((<Router history={browserHistory} >
                <Route path="/" component={App}/>
                 <Route path="/add" component={RecipeForm} />
                <Route path="/add/edit" component={RecipeEditForm}/>

                </Router>)
                ,document.querySelector(".node  "));
*/}
ReactDOM.render(<App/>,document.querySelector(".node"));
