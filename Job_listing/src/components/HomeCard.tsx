import Card from "./Card";


function HomeCard() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Card>
              <div className="card-body">
                <h5 className="card-title">Job Seekers</h5>
                <p className="card-text">
                  Browse our React jobs and start your career today
                </p>
                <a href="/jobs.html" className="btn btn-dark">
                  Browse Jobs
                </a>
              </div>
            </Card>
          </div>
          <div className="col">
            <Card bg="bg-info">
              <div className="card-body">
                <h5 className="card-title">Employers</h5>
                <p className="card-text">
                  List your job to find the perfect developer for the role
                </p>
                <a href="/add-job.html" className="btn btn-primary">
                  Add Job
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCard;
