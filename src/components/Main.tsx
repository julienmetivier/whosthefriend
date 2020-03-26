import React, { Component } from 'react'
import { API, graphqlOperation } from "aws-amplify"
import { castVote } from "../graphql/mutations"
import { listCandidates } from '../graphql/queries';
import awsmobile from '../aws-exports';

API.configure(awsmobile);

interface Props {
    
}
interface State {
    list: Array<String>,
    error: boolean
}

class Main extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: false,
            list: []
        }

        this.updateAllCandidates(); 
    }

    startGame = () => {

    }

    addCandidate = async () => {

    }

    castVoteForCandidate = (id: string) => {
        const vote = { id: id };
        API.graphql(graphqlOperation(castVote, { input: vote }));
    }

    updateAllCandidates = async () => {
        let allCandiddates = await API.graphql(graphqlOperation(listCandidates));
        this.setState({ list: allCandiddates.data.listCandidates.items });
    }

    checkForWinner = async () => {

    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.list.map(candidate => {
                        return <li className="list-group-item" key={candidate['id']}>
                            <span>{candidate['name']} has {candidate['votes']} vote(s).</span>
                        </li>
                    })}
                </ul>
                <hr/>
                {this.state.list.map(candidate => {
                    return <div className="mb-2">
                        <button onClick={() => this.castVoteForCandidate(candidate['id'])} className="btn btn-primary">Vote for {candidate['name']}</button>
                    </div>
                })}
            </div>
        )
    }
}

export default Main
