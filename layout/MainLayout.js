import React from 'react'
import Link from 'next/link'

class MainLayout extends React.Component{
    render() {
        return (
             <div>
                 <div>
                     <Link href={"/"}>Index</Link>
                     <Link href={{ pathname:"repo",query:{name:"zeit/next.js"}}}>next.js</Link>
                     <Link href={{ pathname:"repo",query:{name:"facebook/react"}}}>React</Link>
                     <Link href={"/about"}>About</Link>
                 </div>
                 {this.props.children}
             </div>
        );
    }

}
export default MainLayout