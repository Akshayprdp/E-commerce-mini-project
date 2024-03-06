import React from 'react'
import { array } from 'yup'
import './Headerr'

function Headerr() {
    let array = [
    {  project1: {name: 'Akshay', stack: 'MERN', age: '20' } },
    {  project2: { name: 'basith',stack: 'python', age: '21' } },
    {  project3: {name: 'abcdef', stack: 'python', age: '1' } },
    {  project4: { name: 'bsssssd',stack: 'python', age: '3' } },
    {  project5: {name: 'cssssdd', stack: 'python', age: '3' } }
        ]
    //    const projectList=[]
    // // let list = array.map((value) => (<div className='border'>{value.project1.name} <button type="button" style={{ marginLeft: 100, marginTop: 10 }} >button</button></div>))
    // array.forEach((project,index)=>{
    // const projectinfo=project[`project${index + 1}`]

    // projectList.push(
    // <div key={project}>
    // <p>{projectinfo.name}</p>
    // <p></p></div>)
    // })
    return (
        <div>
            <center>
                <h1>userlist</h1>
                <div>
                    {array.forEach((item,index)=>(<div key={index}><p>{item``.name}</p></div>))}
                    {/* <p>{list}</p> */}
                    {/* {projectList} */}
                </div>
            </center>
        </div>
    )
}

export default Headerr
