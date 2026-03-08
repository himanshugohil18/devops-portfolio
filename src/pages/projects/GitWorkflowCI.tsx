import { ProjectDocLayout } from "@/components/docs/ProjectDocLayout";
import { DocSection } from "@/components/docs/DocSection";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { TechTable } from "@/components/docs/TechTable";
import { ProgressIndicator, ProgressCard } from "@/components/docs/ProgressIndicator";
import { AuthorSection } from "@/components/docs/AuthorSection";
import { ArchitectureOverview } from "@/components/docs/ArchitectureOverview";
import { ProductionMetrics } from "@/components/docs/ProductionMetrics";
import { ProjectImpact } from "@/components/docs/ProjectImpact";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { AdvancedDevOpsSections, advancedDevOpsTocItems } from "@/components/docs/AdvancedDevOpsSections";
import archGitWorkflow from "@/assets/arch-git-workflow.png";

const gitLayers = [
  { name: "Version Control Layer", tools: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ]},
  { name: "CI/CD Layer", tools: [
    { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  ]},
  { name: "Quality Layer", tools: [
    { name: "ESLint", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
    { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  ]},
];

const gitPipeline = [
  { label: "Developer", icon: "👨‍💻" },
  { label: "Feature Branch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "Pull Request", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { label: "CI Validation", icon: "🧪" },
  { label: "Code Review", icon: "👀" },
  { label: "Merge", icon: "✅" },
  { label: "Deploy", icon: "🚀" },
];

const gitChallenges = [
  { problem: "Unreviewed code was reaching the main branch, causing production incidents.", solution: "Implemented branch protection rules requiring 2 approvals and passing CI checks before any merge to main." },
  { problem: "Inconsistent commit messages made release tracking difficult.", solution: "Enforced Conventional Commits standard with automated changelog generation from commit history." },
];

const tocItems = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "architecture-overview", title: "Architecture Overview" },
  ...advancedDevOpsTocItems,
  { id: "problem-statement", title: "Problem Statement" },
  { id: "architecture", title: "Branching Model" },
  { id: "tech-stack", title: "Technology Stack" },
  { id: "implementation", title: "Implementation Steps" },
  { id: "security", title: "Security & Governance" },
  { id: "cicd", title: "CI Workflow" },
  { id: "monitoring", title: "Monitoring & Quality" },
  { id: "scalability", title: "Scalability Strategy" },
  { id: "production-metrics", title: "Production Metrics" },
  { id: "project-impact", title: "Project Impact" },
  { id: "improvements", title: "Production Improvements" },
  { id: "skills", title: "DevOps Skills Demonstrated" },
  { id: "business-value", title: "Business Value" },
  { id: "impact", title: "Real-World Impact" },
  { id: "author", title: "Author" },
];

export default function GitWorkflowCI() {
  return (
    <ProjectDocLayout
      title="Enterprise Git Workflow Automation with CI Pipeline"
      subtitle="DevOps · CI/CD · Git Governance"
      tags={["Git", "GitHub", "CI Pipelines", "GitHub Actions", "Jenkins", "Linux"]}
      summary="Implemented an enterprise-grade Git workflow with feature branches, pull requests, and CI validation. Automated build and test stages to ensure code quality and safe merges."
      tocItems={tocItems}
    >
      <DocSection id="executive-summary" title="Executive Summary" index={1}>
        <p>This project establishes a standardized Git workflow for enterprise teams. It enforces branching strategies, code review processes, automated testing, and merge governance.</p>
      </DocSection>

      <DocSection id="architecture-overview" title="Architecture Overview" index={2}>
        <ArchitectureOverview imageSrc={archGitWorkflow} title="Git Branching Strategy" caption="main (protected) → release branches → develop → feature branches → staging with automated CI validation" />
      </DocSection>

      <AdvancedDevOpsSections
        startIndex={3}
        layers={gitLayers}
        pipelineSteps={gitPipeline}
        challenges={gitChallenges}
        iacTool="GitHub Actions"
        iacDescription="CI/CD workflows are defined as code using GitHub Actions YAML files, providing version-controlled, reproducible automation for every repository."
        practices={[
          { title: "Branch Protection", description: "Enforced review requirements and CI gates on protected branches", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { title: "Automated CI", description: "GitHub Actions validates every PR with lint, test, and security scans", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { title: "Code Quality Gates", description: "ESLint + SonarQube enforce code standards automatically", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
          { title: "Security Scanning", description: "Dependabot + Trivy detect vulnerabilities in dependencies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { title: "Conventional Commits", description: "Standardized commit messages for automated changelogs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { title: "CODEOWNERS", description: "Automatic reviewer assignment based on file ownership", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        ]}
        productionFeatures={["Branch Protection Rules", "Required PR Reviews", "CI Gate Enforcement", "CODEOWNERS Auto-assign", "GPG Signed Commits", "Secret Scanning", "Dependabot Alerts", "Conventional Commits"]}
        observabilityTools={[
          { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", role: "CI/CD Monitoring" },
        ]}
      />

      <DocSection id="problem-statement" title="Problem Statement" index={12}>
        <p>Without structured Git workflows, teams face merge conflicts, broken builds, and unreviewed code reaching production.</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>Unstructured branching leads to merge conflicts and broken releases</li>
          <li>No automated testing gate before merging to main branch</li>
          <li>Inconsistent code review standards across teams</li>
          <li>Production deployments from untested code</li>
          <li>No audit trail for code changes and approvals</li>
        </ul>
      </DocSection>

      <DocSection id="architecture" title="Branching Model" index={13}>
        <CodeBlock title="Git Branching Strategy" language="text" code={"main (protected)\n  ├── release/v1.2.0\n  │     └── hotfix/critical-fix\n  ├── develop\n  │     ├── feature/user-auth → PR (2 approvals)\n  │     ├── feature/payment-api → PR (CI pass)\n  │     └── bugfix/login-error → PR\n  └── staging → Auto-deploy from develop\n\nBranch Protection:\n  main    → 2 approvals + CI pass + no force push\n  develop → 1 approval  + CI pass\n  staging → auto-deploy trigger"} />
      </DocSection>

      <DocSection id="tech-stack" title="Technology Stack" index={14}>
        <TechTable rows={[
          { layer: "Version Control", technology: "Git" },
          { layer: "Platform", technology: "GitHub" },
          { layer: "CI/CD", technology: "GitHub Actions / Jenkins" },
          { layer: "Code Quality", technology: "ESLint, Pylint, SonarQube" },
          { layer: "Testing", technology: "Jest, PyTest" },
          { layer: "Security Scanning", technology: "Dependabot, Trivy" },
          { layer: "Documentation", technology: "Conventional Commits" },
        ]} />
      </DocSection>

      <DocSection id="implementation" title="Detailed Implementation Steps" index={15}>
        <h3 className="text-foreground font-semibold text-base mb-3">PR Template</h3>
        <CodeBlock title=".github/pull_request_template.md" language="markdown" code={`## Description
<!-- What does this PR do? -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No sensitive data exposed`} />

        <h3 className="text-foreground font-semibold text-base mb-3 mt-6">Commit Convention</h3>
        <CodeBlock title="Conventional Commits" language="text" code={`feat: add user authentication module
fix: resolve login redirect loop
docs: update API documentation
refactor: optimize database queries
test: add unit tests for payment service
ci: update GitHub Actions workflow
chore: update dependencies`} />
      </DocSection>

      <DocSection id="security" title="Security & Governance" index={16}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Branch Protection:</strong> Force push disabled on main and develop branches</li>
          <li><strong>Required Reviews:</strong> Minimum 2 approvals for main, 1 for develop</li>
          <li><strong>CODEOWNERS:</strong> Automatic reviewer assignment based on file paths</li>
          <li><strong>Signed Commits:</strong> GPG commit signing required for main branch</li>
          <li><strong>Dependency Scanning:</strong> Dependabot alerts for vulnerable dependencies</li>
          <li><strong>Secret Scanning:</strong> GitHub secret scanning prevents credential leaks</li>
        </ul>
        <h3 className="text-foreground font-semibold text-base mb-3 mt-6">Risk Reduction</h3>
        <TechTable rows={[
          { layer: "Unreviewed Code", technology: "Eliminated by required PR reviews" },
          { layer: "Broken Builds", technology: "Prevented by CI gate requirements" },
          { layer: "Credential Leaks", technology: "Detected by secret scanning" },
          { layer: "Vulnerable Deps", technology: "Auto-detected by Dependabot" },
          { layer: "Force Push Issues", technology: "Disabled on protected branches" },
        ]} />
      </DocSection>

      <DocSection id="cicd" title="CI Workflow" index={17}>
        <CodeBlock title=".github/workflows/ci.yml" language="yaml" code={`name: CI Pipeline

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --coverage
      - uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage/

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          severity: 'HIGH,CRITICAL'

  build:
    runs-on: ubuntu-latest
    needs: [lint, test, security]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build`} />
      </DocSection>

      <DocSection id="monitoring" title="Monitoring & Quality" index={18}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>PR merge time tracking for process optimization</li>
          <li>CI pipeline duration and failure rate monitoring</li>
          <li>Code coverage trend tracking across releases</li>
          <li>Review turnaround time metrics</li>
        </ul>
        <ProgressCard title="Quality Metrics">
          <ProgressIndicator label="Code Coverage" value={85} />
          <ProgressIndicator label="CI Pass Rate" value={95} />
          <ProgressIndicator label="Review Compliance" value={100} />
        </ProgressCard>
      </DocSection>

      <DocSection id="scalability" title="Scalability Strategy" index={19}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Workflow scales to teams of 50+ developers with consistent governance</li>
          <li>CODEOWNERS file automates reviewer assignment as team grows</li>
          <li>Reusable CI workflows reduce maintenance across multiple repositories</li>
          <li>Branch naming conventions enable automated deployment triggers</li>
        </ul>
        <ProgressCard title="Readiness Scores">
          <ProgressIndicator label="Scalability" value={90} />
          <ProgressIndicator label="Automation Level" value={85} />
          <ProgressIndicator label="Security" value={95} />
          <ProgressIndicator label="Production Readiness" value={90} />
        </ProgressCard>
      </DocSection>

      <DocSection id="production-metrics" title="Production Metrics Dashboard" index={20}>
        <ProductionMetrics metrics={[
          { label: "Deployment Automation", value: 85 },
          { label: "System Reliability", value: 92 },
          { label: "Monitoring Coverage", value: 80 },
          { label: "Infrastructure Scalability", value: 90 },
          { label: "Security Implementation", value: 95 },
        ]} />
      </DocSection>

      <DocSection id="project-impact" title="Project Impact" index={21}>
        <ProjectImpact />
      </DocSection>

      <DocSection id="improvements" title="Production Improvements" index={22}>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center gap-2 text-foreground font-medium text-sm hover:text-primary transition-colors w-full text-left py-2">
            <ChevronDown className="w-4 h-4" />
            Advanced Governance Improvements
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>Implement GitOps with ArgoCD for deployment automation</li>
              <li>Add SonarQube quality gates as required CI checks</li>
              <li>Implement release automation with semantic versioning</li>
              <li>Add changelog generation from conventional commits</li>
              <li>Implement trunk-based development for faster releases</li>
              <li>Add pre-commit hooks for local validation</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </DocSection>

      <DocSection id="skills" title="DevOps Skills Demonstrated" index={23}>
        <div className="flex flex-wrap gap-2">
          {["Git", "GitHub Actions", "CI/CD", "Branch Protection", "Code Review", "Security Scanning", "Conventional Commits", "CODEOWNERS", "Workflow Automation", "Quality Gates"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {skill}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection id="business-value" title="Business Value" index={24}>
        <TechTable rows={[
          { layer: "Deployment Failures", technology: "Reduced by 70% with CI gates" },
          { layer: "Code Review Time", technology: "Reduced by 50% with automated assignment" },
          { layer: "Onboarding Time", technology: "Reduced by 60% with standardized workflows" },
          { layer: "Security Incidents", technology: "Reduced by 80% with automated scanning" },
          { layer: "Release Frequency", technology: "Increased 3x with automated pipelines" },
        ]} />
      </DocSection>

      <DocSection id="impact" title="Real-World Impact" index={25}>
        <p>Enterprise Git workflows are foundational to modern software development. This project demonstrates the governance, automation, and security practices used by leading technology companies.</p>
      </DocSection>

      <DocSection id="author" title="Author" index={26}>
        <AuthorSection />
      </DocSection>
    </ProjectDocLayout>
  );
}
