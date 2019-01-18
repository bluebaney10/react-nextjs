import React from 'react'
import MainLayout from '../layout/MainLayout';

class Index extends React.Component{
    state={Count:0}
    increaseCounter=()=>{
        this.setState({
            Count:this.state.Count+10
        })
    }

    decreaseCounter=()=>{
        this.setState({
            Count:this.state.Count-10
        })

    }

    render(){
        return(
            <MainLayout>
                
            <h1>About</h1>
            <p>{this.state.Count}</p>
            <button onClick={this.increaseCounter}>+</button> 
            <button onClick={this.decreaseCounter}>-</button> 
            </MainLayout>
        )
    }
}

export default Index