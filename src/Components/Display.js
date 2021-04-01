import Button from 'react-bootstrap/Button';
import moment from 'moment';


export default function PastLaunches(props) {
    
    const displayLaunches = (props) => {
        const {filteredLaunches} = props;
        console.log(filteredLaunches)
        if (filteredLaunches.length > 0) {
            return(
                
                filteredLaunches.map((launch, index) => {
                    return(
                        <div className="col" style={{ paddingTop: '20px' }}>
                            <div class="card" style={{ width: 'auto', padding: '10px'}}>
                                <img src={launch.links.patch.small} alt={launch.name} className="card-img-top" />
                                
                                <div class="card-body">
                                    <h5 className="card-title">{launch.name}</h5>
                                    <p className="card-text" style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: 'bold' }}>Launch Date: </span> 
                                        {moment(launch.date_utc).format("MMMM Do YYYY, h:mm:ss a")}
                                    </p>
                                    <Button href="#" className="btn btn-primary" disabled>{launch.cores[0].landing_success  ? 'Yes' : 'No'}</Button>
                                </div>
                            </div>
                        </div>
                    )
                })
                
            )
        } else {
            return (<h3>No past launches</h3>)
        }
    }

    return (
        <div className="row row-cols-4">
            {displayLaunches(props)}
        </div>
    )
}
