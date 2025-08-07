const phases = [
  { id: 1, name: "Planning" },
  { id: 2, name: "Execution" },
  { id: 3, name: "Monitoring" },
  { id: 4, name: "Closure" },
  { id: 5, name: "Post-Analysis" },
];

const stages = [
  // Planning
  { id: 1, name: "Market Research", fkPhaseId: 1 },
  { id: 2, name: "Budgeting", fkPhaseId: 1 },
  { id: 3, name: "Stakeholder Alignment", fkPhaseId: 1 },
  // Execution
  { id: 4, name: "Development", fkPhaseId: 2 },
  { id: 5, name: "Testing", fkPhaseId: 2 },
  { id: 6, name: "Deployment", fkPhaseId: 2 },
  // Monitoring
  { id: 7, name: "Performance Tracking", fkPhaseId: 3 },
  { id: 8, name: "Issue Logging", fkPhaseId: 3 },
  { id: 9, name: "Weekly Reviews", fkPhaseId: 3 },
  // Closure
  { id: 10, name: "Final Reporting", fkPhaseId: 4 },
  { id: 11, name: "Client Handover", fkPhaseId: 4 },
  { id: 12, name: "Team Retrospective", fkPhaseId: 4 },
  // Post-Analysis
  { id: 13, name: "Data Collection", fkPhaseId: 5 },
  { id: 14, name: "Root Cause Analysis", fkPhaseId: 5 },
  { id: 15, name: "Future Recommendations", fkPhaseId: 5 },
];

const steps = [
  // Stage 1
  { id: 1, name: "Survey Customers", fkStageId: 1 },
  { id: 2, name: "Analyze Trends", fkStageId: 1 },
  { id: 3, name: "Study Competitors", fkStageId: 1 },
  // Stage 2
  { id: 4, name: "Estimate Costs", fkStageId: 2 },
  { id: 5, name: "Allocate Budget", fkStageId: 2 },
  // Stage 3
  { id: 6, name: "Identify Key Stakeholders", fkStageId: 3 },
  { id: 7, name: "Schedule Meetings", fkStageId: 3 },
  // Stage 4
  { id: 8, name: "Write Code", fkStageId: 4 },
  { id: 9, name: "Code Review", fkStageId: 4 },
  // Stage 5
  { id: 10, name: "Unit Testing", fkStageId: 5 },
  { id: 11, name: "Integration Testing", fkStageId: 5 },
  { id: 12, name: "QA Approval", fkStageId: 5 },
  // Stage 6
  { id: 13, name: "Create Release Package", fkStageId: 6 },
  { id: 14, name: "Deploy to Production", fkStageId: 6 },
  // Stage 7
  { id: 15, name: "Setup Dashboards", fkStageId: 7 },
  { id: 16, name: "Track KPIs", fkStageId: 7 },
  // Stage 8
  { id: 17, name: "Log Issues in Tracker", fkStageId: 8 },
  { id: 18, name: "Assign Severity Levels", fkStageId: 8 },
  // Stage 9
  { id: 19, name: "Prepare Weekly Report", fkStageId: 9 },
  { id: 20, name: "Review with Team", fkStageId: 9 },
  // Stage 10
  { id: 21, name: "Compile Final Results", fkStageId: 10 },
  { id: 22, name: "Submit to Client", fkStageId: 10 },
  // Stage 11
  { id: 23, name: "Transfer Knowledge", fkStageId: 11 },
  { id: 24, name: "Finalize Documentation", fkStageId: 11 },
  // Stage 12
  { id: 25, name: "Conduct Retrospective", fkStageId: 12 },
  { id: 26, name: "Collect Feedback", fkStageId: 12 },
  // Stage 13
  { id: 27, name: "Extract Data from Tools", fkStageId: 13 },
  { id: 28, name: "Clean & Prepare Data", fkStageId: 13 },
  // Stage 14
  { id: 29, name: "Identify Root Issues", fkStageId: 14 },
  { id: 30, name: "Document Findings", fkStageId: 14 },
  // Stage 15
  { id: 31, name: "Suggest Process Improvements", fkStageId: 15 },
  { id: 32, name: "Create Action Plan", fkStageId: 15 },
];
const dataSet = document.getElementById("dataSet");

phases.forEach((phase) => {
  const phaseDiv = document.createElement("div");
  phaseDiv.classList.add("phase");

  const phaseBtn = document.createElement("button");
  phaseBtn.textContent = `${phase.name}`;
  phaseDiv.appendChild(phaseBtn);

  const stageContainer = document.createElement("div");
  stageContainer.classList.add("hidden");

  stages
    .filter((stage) => stage.fkPhaseId === phase.id)
    .forEach((stage) => {
      const stageDiv = document.createElement("div");
      stageDiv.classList.add("stage");

      const stageBtn = document.createElement("button");
      stageBtn.textContent = `${stage.name}`;
      stageDiv.appendChild(stageBtn);

      const stepContainer = document.createElement("ul");
      stepContainer.classList.add("hidden");

      steps
        .filter((step) => step.fkStageId === stage.id)
        .forEach((step) => {
          const li = document.createElement("li");
          li.classList.add("step");
          li.textContent = step.name;
          stepContainer.appendChild(li);
        });

      stageBtn.addEventListener("click", () => {
        stepContainer.classList.toggle("hidden");
        stageBtn.textContent = stepContainer.classList.contains("hidden")
          ? `${stage.name}`
          : `${stage.name}`;
      });

      stageDiv.appendChild(stepContainer);
      stageContainer.appendChild(stageDiv);
    });

  phaseBtn.addEventListener("click", () => {
    stageContainer.classList.toggle("hidden");
    phaseBtn.textContent = stageContainer.classList.contains("hidden")
      ? `${phase.name}`
      : `
      ${phase.name}`;
  });

  phaseDiv.appendChild(stageContainer);
  dataSet.appendChild(phaseDiv);
});
