import React, { useRef } from "react";

const Home = () => {
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <h5 className="card-title mb-4">Recent Studies</h5>
              <div className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-primary">
                    <b>"Dog Bite Complaint"</b>
                  </div>
                  <div className="text-secondary heading2">2 days ago</div>
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
                    <b>"Peoples on the beach"</b>
                  </div>
                  <div className="text-secondary heading2">2 days ago</div>
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
                    <b>"Quantum Coffee Break"</b>
                  </div>
                  <div className="text-secondary heading2">2 days ago</div>
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
                  <div className="text-secondary heading2">2 days ago</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="failed">
                    <span className="text-danger me-2">
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
                  <div className="text-secondary heading2">2 days ago</div>
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

        <div className="col-md-8">
          <div className="card mb-3" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-search me-2"></i>
                <h5 className="card-title mb-0">
                  Get complete info about any case from AI-driven research
                  assistance
                </h5>
              </div>
              <textarea
                className="form-control mb-3"
                placeholder="Ex: What is React.js"
                rows="3"
              ></textarea>
              <div className="upload-box mb-3" onClick={handleBoxClick}>
                <i className="bi bi-upload"></i>
                <p>
                  Drag and drop here or{" "}
                  <span className="link" onClick={handleBoxClick}>
                    Upload a file
                  </span>
                </p>
                <p>Maximum uploads: 1</p>
                <p>File format: JPG, PNG, Docx, etc.</p>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <h6>
                Uploaded files: <span className="badge bg-secondary">3/5</span>
              </h6>
              <div className="alert alert-light d-flex align-items-center mb-2">
                <i className="bi bi-file-earmark-pdf me-2"></i>
                <span>Case Document.pdf</span>
              </div>
              <div className="alert alert-light d-flex align-items-center mb-2">
                <i className="bi bi-file-earmark-word me-2"></i>
                <span>Case Document.docx</span>
              </div>
              <div className="alert alert-light d-flex align-items-center mb-2">
                <i className="bi bi-file-earmark-word me-2"></i>
                <span>Case Document.docx</span>
              </div>
              <div className="d-flex justify-content-end">
                <button className="start-button">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
