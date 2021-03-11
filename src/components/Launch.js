const Launch = ({launch}) => {

    return (
        <div  className="card shadow-sm border-0">
        <img src={launch.links.patch.small} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h2 className="display-6">{launch.name}</h2>
                <p className="card-text">{launch.date_local.split('T')[0]}</p>
                <div className="d-flex justify-content-center align-items-center">
                    All The Cores Landed: 
                    {
                        launch.cores[0].landing_success ? 'YES' : 'NO'
                    }
                </div>
            </div>
        </div>
    );

}

export default Launch;