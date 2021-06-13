import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
import styles from './App.module.css'

const App = () => {
	return (
	<>
		<BrowserRouter>
			<div className={styles.wrapper}>
				<Header />
				<Switch>
					{routesConfig.map(({path, exact, component}, index)=>{
 	 				 return <Route key={index} path={path} exact={exact}  component={component}/>})} 	
				</Switch>
			</div>
		</BrowserRouter>
	</>
	)
}

export default App;
