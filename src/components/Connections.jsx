import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";

const steps = [
  {
    label: "Pre litigation",
    content: [
      {
        title: "Legal Notice",
        icon: <DescriptionIcon />,
        text: "A formal notice informing the other party of the intention to undertake legal proceedings.",
      },
      {
        title: "Reply to Legal Notice",
        icon: <DescriptionIcon />,
        text: "A formal response to the legal notice, addressing the claims made in it.",
      },
    ],
  },
  {
    label: "Litigation",
    content: [
      {
        title: "Plaint/Complaint",
        icon: <DescriptionIcon />,
        text: "A formal statement initiating a lawsuit, outlining the plaintiff’s case.",
      },
      {
        title: "Vakalatnama",
        icon: <DescriptionIcon />,
        text: "A document authorizing a lawyer to represent a client in court.",
      },
      {
        title: "Written Statement/Answer",
        icon: <DescriptionIcon />,
        text: "The defendant's formal response to the plaint.",
      },
      {
        title: "Reply to written statement",
        icon: <DescriptionIcon />,
        text: "Address points raised in the defendant's written statement.",
      },
    ],
  },
  {
    label: "Interlocutory Applications",
    content: [
      {
        title: "Application for Temporary Injuction",
        icon: <DescriptionIcon />,
        text: "Seeks immediate court intervention to presentstatus quo.",
      },
      {
        title: "Counter-Affidavit to Opposition's Application",
        icon: <DescriptionIcon />,
        text: "Respond to interlocutory applications from the opposing party.",
      },
    ],
  },
];

const thirdSectionSteps = [
  { label: "Start", icon: <CheckCircleIcon className="text-primary" /> },
  { label: "Continue", icon: <CheckCircleIcon className="text-primary" /> },
  { label: "Analysis", icon: <CheckCircleIcon className="text-primary" /> },
  {
    label: "Additional Documents",
    icon: <CheckCircleIcon className="text-secondary" />,
  },
  { label: "Relief", icon: <CheckCircleIcon className="text-secondary" /> },
  { label: "Q & A", icon: <CheckCircleIcon className="text-secondary" /> },
  {
    label: "Final Draft",
    icon: <CheckCircleIcon className="text-secondary" />,
  },
];

const Connections = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div
            className="card shadow-sm equal-height"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
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
                      <span>In progress</span>
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
                      <span>Failed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div
            className="card shadow-sm equal-height"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Case Flow</h5>
                <p className="text-primary">Select the document for drafting</p>
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={index} active>
                        <StepLabel>
                          <Typography variant="h6">{step.label}</Typography>
                        </StepLabel>
                        <StepContent>
                          {step.content.map((item, idx) => (
                            <Box
                              key={idx}
                              mb={2}
                              className="border rounded p-3 mb-3"
                            >
                              <Box display="flex" alignItems="center">
                                {item.icon}
                                <Typography variant="subtitle1" ml={1}>
                                  {item.title}
                                </Typography>
                              </Box>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                ml={4}
                              >
                                {item.text}
                              </Typography>
                            </Box>
                          ))}
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2 mb-3">
          <div
            className="card shadow-sm equal-height"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Progress</h5>
                <Box sx={{ maxWidth: 200 }}>
                  <Stepper orientation="vertical">
                    {thirdSectionSteps.map((step, index) => (
                      <Step key={index} active>
                        <StepLabel icon={step.icon}>
                          <Typography variant="subtitle1">
                            {step.label}
                          </Typography>
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
              <Button variant="contained" className="mt-3 back-button">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
