import React from 'react';
const Table = (props) => {
    const rows = props.data.map(({ filghtPatch, name, launchDate, success }) => {
        return (<tr>
            <td>
            <div style={{height: '105px'}}>
                <img style={{height: '100px'}} src={filghtPatch}
                onError={(e)=>{e.target.onerror = null; e.target.src="default.jpeg"}}
            alt="Image is not available"></img></div></td>
            <td>{name}</td>
            <td>{launchDate}</td>
            <td>{success}</td>
        </tr>)
    })
    return (
        <React.Fragment>
<table>
                <thead>
                    <tr>
                        <th>
                            Flight patch
                </th>
                        <th>
                            Name
                </th>
                        <th>
                            Launch date
                </th>
                        <th>
                            successfully landed
                </th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </table>
        </React.Fragment>
            
    )
}
export default Table;