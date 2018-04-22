import React, { Component } from 'react';

export default class ScheduleList extends Component{
    componentDidMount(){
        // TODO: Get dynamic data here!!
    }

    componentWillMount(){
        // TODO: Destroy data here!!
    }

    getDatas(){
        // THIS IS ONLY MOCK UP DATA!! Use http consume from server using third party Axios or Fetch
        return [
            {_id: 1, text: "This is Senin data"},
            {_id: 2, text: "This is Selasa data"},
            {_id: 3, text: "This is Rabu data"},
            {_id: 4, text: "This is Kamis data"},
            {_id: 5, text: "This is Jumat data"},
            {_id: 6, text: "This is Sabtu data"},
        ]

    }

    renderData(){
        // Todo: All data from server map here!
        return this.getDatas().map(({ _id, text}) => {
            return <li className="collection-item" key={_id}>
                <p>{text}</p>
            </li>
        })
    }

    render(){
        return(
            <div>
                <ul className="collection">
                    {this.renderData()}
                </ul>
            </div>
        )
    }
}