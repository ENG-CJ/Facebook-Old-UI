import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// ^ Day 2
// // using expression
// const name="Mohamed";
// const lastName="ali";
// const age=32;

// // ! Bishaan
// // expression
// const elements=(
//     <>
//     <div className='container'>
//         <div className='card'>
//             <div className='card-titer'>
//                 <h3>Hello ReactJs</h3>
//             </div>
//             <div className='card-content'>
//                 <p>I am ENG-CJ I Am Editor & Developer
//                 </p>
//             </div>
//         </div>
//     </div>
//     <div className='user'>
//         <h3>{name+" "+lastName+"\n"}
//        Its Age{" "+age}</h3>
       
//     </div>
//     </>
// )
// ReactDOM.render(elements,document.getElementById('root'))

// ^ Day 3
// components in react 
// components is a like javascript function that returns jsx ;
// components are : class based and function based;

// creating one components
// ! Note: using compoent use PascalCase for function
// ! and lowerCase for html elements
// const HelloFunction=()=>{
//     return(
//         <>
//         <h2>Hello World</h2>
//         <h2>Hello World</h2>
//         </>
//     )
// }


// component 2
// using props to make content dynamically
//todo Props Stands For properties is prop that is used 
// to pass function as an argument
// const Page=(props)=>{
//     return(
//         <>
//             <div className='container'>
//                 <h3>Courses</h3>
//                 <ul>
//                     <li>{props.courses[3]}</li>
//                     <li>{props.courses[4]}</li>
//                     <li>{props.courses[2]}
//                         <ul>
//                             <li>OOPS</li>
//                         </ul>
//                     </li>
//                     <li>{props.courses[5]}</li>
//                 </ul>
//             </div>
//         </>
//     )
// }

// // rendering function
// ReactDOM.render(
//     <Page courses={["HTML","CSS","PYTHON","JAVA","SQL SERVER","SQL","JS"]}/>, 
//     document.getElementById('root')
// )

// // component that display a name using props
// // const DisplayMyName=(props)=>{
// //     return(
// //         <h1>Hello {props.name} Welcome To ReactJs</h1>
// //     )
// // }
// // ReactDOM.render(
// //     <DisplayMyName name={prompt("What is Your Name: ")}/>
// //     ,document.getElementById('root')
// // )

// // component that adds two numbers
// const Add=(props)=>{
//     return(
//         <>
//         <h3>{props.numbers.number_1}+
//         {props.numbers.number_2}={props.numbers['number_1']+props.numbers['number_2']}</h3>
//         </>
//     )
// }
// // ReactDOM.render(
// //     <Add numbers={
// //        {number_1: parseInt(prompt('numbers')),number_2: parseInt(prompt("Number2"))}
// //     }/>,
// //     document.getElementById('root-2')
// // )

// // more elements
// const PageComp=(props)=>{
//     return(
//         <>
//             <div className='container' style={{background : "#2b2b2b", padding : 40+"px",maxWidth: 700+"px", maxHeight : 1200+"px", boxShadow: 0+"px"}}>
//                 <div className='sub-class'>
//                     <div className='sheeko'>
//                         <h1 className='title' style={{color:"aliceblue"}}>Why We Use ReactJs?</h1>
//                     </div>
//                     <div className='content'style={{color: "white"}}>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas tenetur rem perspiciatis, sit distinctio itaque sunt unde nesciunt officiis quae aliquid quos aperiam magnam dignissimos laudantium quis quia iusto!</p>
//                     </div>

//                     <div className='sheeko'>
//                         <h1 className='title' style={{color: "red",fontFamily: "sans-serif",fontSize: 30+"px"}}>Facebook Gradient ReactJs</h1>
//                     </div>
//                     <div className='content'style={{color : "white"}}>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas tenetur rem perspiciatis, sit distinctio itaque sunt unde nesciunt officiis quae aliquid quos aperiam magnam dignissimos laudantium quis quia iusto!</p>
//                     </div>
//                     <div className='sheeko'>
//                         <h1 className='title' style={{color: "#6c3fff",fontFamily: "sans-serif",fontSize: 30+"px"}}>Facebook Gradient ReactJs</h1>
//                     </div>
//                     <div className='content'style={{color : "white"}}>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas tenetur rem perspiciatis, sit distinctio itaque sunt unde nesciunt officiis quae aliquid quos aperiam magnam dignissimos laudantium quis quia iusto!</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// ReactDOM.render(
//     <PageComp />,
//     document.getElementById('root-2')
// )

ReactDOM.render(<App/>,document.getElementById('root'))