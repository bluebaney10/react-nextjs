import React from 'react'
import Link from 'next/link'
import MainLayout from '../layout/MainLayout';

class Index extends React.Component{
    static getInitialProps(){
        return{
            name:"Blue"
        }

    }
    render(){
        return(
            <MainLayout>
            <p>Hello, {this.props.name}</p>
            <style jsx>
            {
                `
                p{
                    color:red;
                }
                `
             }</style>
            </MainLayout>
        )
    }
}

export default Index