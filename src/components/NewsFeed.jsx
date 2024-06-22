import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [activeTab, setActiveTab] = useState("Questions");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
              <p className="para text-secondary">
                As we explore the depths of technology and its impact on
                society, our focus remains steadfast on innovation and
                collaboration. We aim to harness the power of AI-driven insights
                to empower individuals and organizations worldwide. Through
                meticulous research and dedicated efforts, we strive to uncover
                solutions that redefine possibilities and drive positive change.
              </p>
              <hr />
              <h6>Uploads</h6>
              <div className="card upload-card rounded-10">
                <div className="upload-item">
                  <i className="bi bi-file-earmark-pdf"></i> Case Document.pdf
                </div>
                <div className="upload-item">
                  <i className="bi bi-file-earmark-pdf"></i> Case Document.pdf
                </div>
                <div className="upload-item">
                  <i className="bi bi-file-earmark-pdf"></i> Case Document.pdf
                </div>
                <div className="upload-item">
                  <i className="bi bi-file-earmark-pdf"></i> Case Document.pdf
                </div>
                <div className="upload-item">
                  <i className="bi bi-file-earmark-pdf"></i> Case Document.pdf
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card mb-3" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "Questions" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Questions")}
                  >
                    Questions
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "Support" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Support")}
                  >
                    Support
                  </button>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className={`tab-pane ${
                    activeTab === "Questions" ? "active show" : ""
                  }`}
                >
                  <h5>Questions</h5>
                  <ol>
                    <li>
                      <strong>Who is the CEO of Google?</strong>
                      <br />
                      <span className="text-secondary">Sundar Pichai</span>
                    </li>
                    <hr />
                    <li>
                      <strong>What is the capital of France?</strong>
                      <br />
                      <span className="text-secondary">Paris</span>
                    </li>
                    <hr />
                    <li>
                      <strong>When was the Eiffel Tower completed?</strong>
                      <br />
                      <span className="text-secondary">1889</span>
                    </li>
                    <hr />
                    <li>
                      <strong>Who painted the Mona Lisa?</strong>
                      <br />
                      <span className="text-secondary">Leonardo da Vinci</span>
                    </li>
                    <hr />
                    <li>
                      <strong>What is the currency of Japan?</strong>
                      <br />
                      <span className="text-secondary">Japanese Yen</span>
                    </li>
                  </ol>
                </div>

                <div
                  className={`tab-pane ${
                    activeTab === "Support" ? "active show" : ""
                  }`}
                >
                  <h5>Support Information</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
