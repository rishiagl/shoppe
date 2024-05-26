import { NavWidget } from './NavWidget'
import './App.css'
import { CustomerPage } from './Pages/CustomerPage'
import { Product } from './Product';
import { Link, Route, Switch } from "wouter";
import { HomePage } from './Pages/HomepAge';
import { DefaultPage } from './Pages/DefaultPage';

function App() {

  return (
    <>
      <div className="relative flex bg-slate-950 h-dvh text-slate-100 pb-12">
        <Switch>
          <Route path='/' component={HomePage} />
          <Route path="/customer" component={CustomerPage} />
          <Route path="/product" component={Product} />
          <Route component={DefaultPage}/>
        </Switch>
        <NavWidget></NavWidget>
      </div >
    </>
  )
}

export default App
