import { Link } from "react-router-dom";

const Connections = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <Link to="/" className="back-button">
                <i className="bi bi-arrow-left"></i> Back To Home
              </Link>

              <h5 className="mt-5">Given Information</h5>
              <hr />
              <h6>Your Search</h6>
              <input
                className="form-control"
                type="search"
                placeholder="Search here..."
              />
              <hr />
              <h6>Recents</h6>
              <div className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-primary">
                    <b>"Dog Bite Complaint"</b>
                  </div>
                  <div className="text-secondary heading2">10 min</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="completed">
                    <span className="text-success me-2">
                      <i className="bi bi-check-circle"></i>
                    </span>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
              <div className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-primary">
                    <b>"Neptune's Secret Recipe"</b>
                  </div>
                  <div className="text-secondary heading2">1 hour ago</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="warning">
                    <span className="text-warning me-2">
                      <i className="bi bi-alarm"></i>
                    </span>
                    <span>In progress</span>{" "}
                  </div>
                </div>
              </div>
              <div className="border rounded p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-primary">
                    <b>"Supernova Symphony"</b>
                  </div>
                  <div className="text-secondary heading2">1 days ago</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="failed">
                    <span className="text-danger me-2">
                      <i className="bi bi-x-circle"></i>
                    </span>
                    <span>Failed</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">Case Flow</h5>
              <p className="text-primary">Select the document for drafting</p>
              <p className="text-secondary">Pre illegation</p>
              <div className="row">
                <div className="col">
                  <div className="card mb-3 rounded-10 border">
                    <div className="card-body">
                      <h6>Legal Notice</h6>
                      <p className="text-secondary">
                        Generate a dummy text related to legal notice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card mb-3 rounded-10 border">
                    <div className="card-body">
                      <h6>Reply to Legal Notice</h6>
                      <p className="text-secondary">
                        Generate a dummy text related to reply to legal notice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Legal Notice Done
                </div>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Reply to Legal Notice Remaining
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2 mb-3">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Start
                </li>
                <hr className="vertical-line" />
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Continue
                </li>
                <hr className="vertical-line" />
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Analysis
                </li>
                <hr className="vertical-line" />
                <li>
                  <i className="bi bi-clock text-warning me-2"></i>
                  Additional Documents
                </li>
                <hr className="vertical-line" />
                <li>
                  <i className="bi bi-clock text-warning me-2"></i>
                  Relief
                </li>
                <hr className="vertical-line" />
                <li>
                  <i className="bi bi-clock text-warning me-2"></i>Q & A
                </li>
                <hr className="vertical-line" />
                <li>
                  <i className="bi bi-clock text-warning me-2"></i>
                  Final Draft
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
