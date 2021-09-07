import React from 'react'
import ReactDom from 'react-dom'
import '../src/index.css'
// method 1
// function Greeting(){
//  return <h4>hi this is femey</h4>
// }


// method 2---------commonly used
// function Greeting(){
//  return(
//   <div>
//   <h4>hi this is femey</h4>
//   </div> 
//  )
// }


// method 3
// const Greeting= () =>{
//   return React.createElement('h1',{},"Hello World")
// }
// arrow fn


// method 4
// const Greeting= () =>{
//   return React.createElement('div',{},React.createElement('h1',{},"Hello World"))
// }

// when more components are used

function Greeting() {
  return (
    // <div>
     <section className="main">
      <First />
      <Second />
    {/* </div> */}
    </section>
  )
}

const First = () => <h4>hi this is femey  </h4>

// const Second = () => <h4>how are you</h4>

// or

const Second = () => 
{
return(
<article>
<h4>how are you</h4>
<h4>how are you</h4>
<h4>how are you</h4>
<Image></Image>
</article>
)
}

const Image = () => {
  return(
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="image1" />
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))