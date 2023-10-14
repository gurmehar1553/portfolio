import React from 'react'

export default function SkillBar({skillName,skillVal}) {
    
  return (
    <>
        <div>
            <h2 className='text-success'>{skillName}</h2>
        </div>
        <div className="progress" style={{"height":"10px"}}>
            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${skillVal}%`}}>{skillVal}</div>
        </div>
    </>
  )
}
