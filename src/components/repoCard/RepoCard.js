import React from 'react'
import { connect } from 'react-redux'
import './RepoCard.css'

import StarIcon from 'react-ionicons/lib/MdStar'

class RepoCard extends React.Component {
    render(){
        return(
            <section className="section-repo">
                <h6 className="mt-4">Popular Repositories</h6>
                {
                    console.log( this.props.data.apiData)
                }
                <div class="row">
                    {
                        this.props.data.apiData.map(repo => {
                            return (
                                <div class="col-sm-6 mb-3">
                                <div class="card cardNormalize">
                                <div class="card-body">
                                    <h6><a href="#">{repo.name}</a></h6>
                                    <p className="description">{repo.description}</p>
                                    <span className='repo-language-color' ></span>
                                    <span>Javascript</span>
                                    <StarIcon fontSize="16px" color='#555' className="ml-3 mr-1" /><span className="star">1</span>
                                </div>
                                </div>
                            </div>
                            )
                        })
                    }
                   

                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data : state
    })
}

export default connect(mapStateToProps)(RepoCard)