import React from 'react';

function CvSection(props) {
    return (
      <React.Fragment>
          <div className="d-flex flex-column flex-sm-row">
            <h5 className="col-12 col-sm-3">{props.time} <span dangerouslySetInnerHTML={{__html:props.company}}></span></h5> 
            <div className="col-12 col-sm-9">
             <h5>{props.title}</h5>
              {props.list.length > 0 &&
                <ul>
                  {props.list.map((li,ind) => <li key={ind}>{li}</li>)}
                </ul>
              }
             </div>
       </div>
      </React.Fragment>
    )
}

export default CvSection;