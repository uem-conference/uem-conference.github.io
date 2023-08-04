import React from 'react'
import {importantDeadlines} from "../../../data/importantDates"


const index = () => {
  return (
    <>
    <style jsx>{`
    
    .homepage__deadlines {
      width: 90%;
      margin: 2rem auto;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* padding: 15px; */
      background-color: var(--color-primary);
      border-radius: 1rem;
      border: var(--color-primary) 2px solid;
      font-size: clamp(1.4rem, 3vw, 1.6rem);
      height: fit-content;
      position: relative;
      /* top: 10%; */
    }
    
    .homepage__deadlines__heading {
      padding: 1rem;
      width: 100%;
      background-color: var(--color-primary);
      color: rgb(255, 236, 236);
      /* margin-bottom: 10px; */
      text-align: center;
      text-transform: uppercase;
      /* border-bottom: white 2px solid; */
    }
    
    .homepage__deadlines ul {
      width: 100%;
      display: grid;
      text-align: center;
      grid-template-columns: 5fr 4fr;
      gap: 0.2rem 0rem;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .homepage__deadlines__text {
      margin: 0;
      min-height: 5rem;
      width: 100%;
      height: 100%;
      /* padding: 5px 5px; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* border-bottom: 2px solid black; */
      /* border-radius: 5px; */
      /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); */
    }
    
    .homepage__deadlines__text:nth-child(even){
      background-color: #fff;
      /* margin-bottom: 1rem; */
    }
    .homepage__deadlines__text:nth-child(odd){
      background-color: #c4c4c4;
      /* margin-bottom: 1rem; */
    }
    
    @media screen and (max-width: 768px) {
      
      .homepage__deadlines {
        /* padding: 5px; */
        width: 80%;
        margin: 1rem auto;
        /* top: 0; */
      }
      .homepage__deadlines ul {
        // grid-template-columns: 1fr;
        /* width: 85%; */
        // gap: 0;
        /* height: auto; */
        padding: 0.3rem;
      }
      .homepage__deadlines__text:nth-child(even){
        /* background-color: #fff; */
        /* margin-bottom: 1rem; */
        // border-bottom: 3px solid var(--color-primary);
      }
      .homepage__deadlines__text:last-child{
        /* background-color: #fff; */
        /* margin-bottom: 1rem; */
        border-bottom: none;
      }
    }
    
    @media screen and (max-width: 450px) {
      .homepage__about{
        width: 95%;
      }
      .homepage__grid--about {
        grid-template-columns: 1fr;
        /* gap: 2rem; */
      }
      .homepage__deadlines {
        width: 80%;
        margin: 4rem auto 2rem;
        /* padding: 2rem; */
        /* top: 0; */
      }
      .homepage__deadlines__text{
        min-height: fit-content;
        padding: 1rem;
      }
      /* .homepage__deadlines ul {
        grid-template-columns: 1fr;
        /* width: 100%;
        height: auto; *
        padding: 0.3rem;
      } */
    }
    `}</style>
    
    <div className="homepage__deadlines">
					<h3 className="heading heading--3 homepage__deadlines__heading">
						Important Deadlines
					</h3>
					<ul>
						{importantDeadlines.map((data) => {
							return (
								<p key={data} className="homepage__deadlines__text">
									{data}
								</p>
							);
						})}
					</ul>
				</div>
        </>
  )
}

export default index
