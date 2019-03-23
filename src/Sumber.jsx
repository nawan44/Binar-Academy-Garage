import React from 'react';
import Header from './components/AppHeader'
import Body from './components/AppBody'
import Footer from './components/AppFooter'

 
class Sumber extends React.Component{
    render(){
        return(
            <div className="Hallo">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Sumber;