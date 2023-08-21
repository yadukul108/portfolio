import React from 'react'

const Portfolio = () => {
  return (
    <div className='container'>
        <br /><br />
        <h2 className='text-center' style={{marginLeft:"130px",fontWeight:"bold"}}>Portfolio</h2>
        <div className="home--img" style={{float:"left",padding:"50px"}}  ></div>
        <div className="container" style={{margin:"10px",paddingLeft:"388px"}}>
            <h3>Newsapp</h3>
            <p>This was my first project I built it in my summer break with help of code with Harry</p>
            <p>In this project I have made a newsapp which delivers live news to it's user using NewsAPI.My Newsapp covers news on various fields  like general,entertainment,sports,science and other fields.
                <br />
                <br />
                <h4>Skills learned:-</h4>  
                <ul><li>Function based components in ReactJS</li>
                <li>How to use API</li>
                <li>Bootstrap</li>
                <li>React-Router Dom</li></ul>
                <svg xmlns="http://www.w3.org/2000/svg" margin="-276px" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                <i className="bi bi-github"></i>
            </p>
        </div>
        <br /><br />
        <div className="home---img" style={{float:"right",padding:"50px"}}  ></div>

        <div className="container" style={{margin:"10px",paddingRight:"388px"}}>
            <h3>LivePoll</h3>
            <p>This is my second project I am working upon right now.</p>
            <p>In this project I am willing to make a Live Polling website with help of socket.io.Then in this app I will be adding features like live data chart visualization and live polling on differengt devices. 
                <br />
                <br />
                <h4>Skills learned:-</h4>  
                <ul><li>Function based components in ReactJS</li>
                <li>How to use socket.io</li>
                <li>Charts in HTML</li>
                <li>React-Router Dom</li></ul>
                <div style={{paddingLeft:"936px"}}>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                <i className="bi bi-github"></i>
                </div>
            </p>
        </div>
    </div>
  )
}

export default Portfolio
