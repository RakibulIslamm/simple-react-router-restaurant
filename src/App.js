import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Categories from './Components/Category/Categories';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MealDetail from './Components/MealDetails/MealDetail';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/categories">
            <Categories></Categories>
          </Route>
          <Route path="/meal-detail/:id">
            <MealDetail></MealDetail>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
