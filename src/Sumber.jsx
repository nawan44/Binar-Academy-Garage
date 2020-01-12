import React from 'react';
import Header from './components/AppHeader'
import Body from './components/AppBody'
import Footer from './components/AppFooter'
import AppNav from './components/AppNav'

 
class Sumber extends React.Component{
    render(){
        return(
            <div className="Hallo">
                <Header />
                <AppNav />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Sumber;