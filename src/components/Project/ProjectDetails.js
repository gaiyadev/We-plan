import React from 'react';

const ProjectSummary = props => {
    const { id } = props.match.params;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title" >Project Summary</span>
                    <p>
                        lorem   btetenthtjh | lowerbb bbbbfbfbf {id}
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">Posted bt obed
                <div >@nd Setempber 33</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSummary;