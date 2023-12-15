import React from 'react'
import './about.css'
function about() {
  return (
    <>
      <div id='jatin' className="about">
        <div className="skill">
          <div className="area1">
            <h1>My skills</h1> <br />
            <span>
              I have a strong foundation in the following programming languages: C,C++. As a Computer Science student, I want to be a software engineer. I have completed with the theory of DSA, Now I am practicing DSA and CP from few Days.
            </span>
            <div className="boxes">
              <div className="box1">
                <p>&#128214;</p> <span>FrontEnd</span><br />
                <p>10+</p>
                <span>Total Projects</span>
              </div>
              <div className="box1">

                <p>&#128214;</p><span>BackEnd</span><br />
                <p>1</p>
                <span>Total Projects</span>
              </div>
              <div className="box1">
                <br />
                <span>C,C++</span><br />
                <p>120+</p>
                <span>LeetCode Questions Solved</span>
              </div>
            </div>
          </div>
          <div className="area2">
            <h1>Courses</h1>
            <div className="baksha">
              <div className="box2"><p>&#128214; Algorithms-1</p></div>
              <div className="box2"><p>&#128214; Discrete Mathematics</p></div>
              <div className="box2"><p>&#128214; Probablity and Statisticks</p></div>
              <div className="box2"><p>&#128214; Linear Algebra</p></div>
              <div className="box2"><p>&#128214; Programming and Data Structures</p></div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about