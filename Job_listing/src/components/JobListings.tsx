import jobs from '../jobs.json';


console.log(jobs);


function JobListings(){
    return (
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-primary text-center mb-4">Browse Jobs</h2>
          <div className="row g-4">
            {/* <!-- Job Listing 1 --> */}
            {jobs.map((job) => (
              <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="badge bg-secondary">{job.type}</span>
                    </div>
                    <h3 className="card-title">{job.title}</h3>
                    <p className="card-text">{ job.description }</p>
                    <h3 className="text-primary">{ job.salary }</h3>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-warning">
                        <i className="fa-solid fa-location-dot"></i> {job.location}
                      </div>
                      <a href="job.html" className="btn btn-primary btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

}

export default JobListings;