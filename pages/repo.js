import React from 'react'
import Link from 'next/link'
import MainLayout from '../layout/MainLayout';
require('isomorphic-fetch')

class Repo extends React.Component{
    static async getInitialProps({query}){
        
        const res=await fetch(`https://api.github.com/repos/${query.name}`)
        const json=await res.json()

        return{
            name:json.name,
            star:json.stargazers_count
        }

    }
    render(){
        return(
            <MainLayout>
            <p>Name:{this.props.name}</p>
            <p>Stars: {this.props.star}</p>
            <style jsx>
            {
                `
                p{
                    color:orange;
                }
                `
             }</style>
            </MainLayout>
        )
    }
}

export default Repo