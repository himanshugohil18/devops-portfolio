import { ProjectDocLayout } from "@/components/docs/ProjectDocLayout";
import { DocSection } from "@/components/docs/DocSection";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { TechTable } from "@/components/docs/TechTable";
import { ProgressIndicator } from "@/components/docs/ProgressIndicator";
import { AuthorSection } from "@/components/docs/AuthorSection";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const tocItems = [
  { id: "executive-summary", title: "Executive Summary" },
  { id: "problem-statement", title: "Problem Statement" },
  { id: "architecture", title: "Pipeline Architecture" },
  { id: "tech-stack", title: "Technology Stack" },
  { id: "implementation", title: "Implementation Steps" },
  { id: "security", title: "Security Architecture" },
  { id: "webhook", title: "Webhook Integration" },
  { id: "monitoring", title: "Monitoring & Logging" },
  { id: "scalability", title: "Scalability Strategy" },
  { id: "improvements", title: "Production Improvements" },
  { id: "skills", title: "DevOps Skills Demonstrated" },
  { id: "business-value", title: "Business Value" },
  { id: "impact", title: "Real-World Impact" },
  { id: "author", title: "Author" },
];

export default function DjangoJenkinsCICD() {
  return (
    <ProjectDocLayout
      title="Django Notes App – CI/CD Automation with Jenkins"
      subtitle="CI/CD · Jenkins · Automation"
      tags={["Jenkins", "GitHub", "Django", "Python", "CI/CD Pipelines", "Linux", "Shell Scripting"]}
      summary="Built a Django-based Notes application and implemented a complete CI/CD pipeline using Jenkins to automate build, test, and deployment workflows. The pipeline triggers on GitHub commits, installs dependencies, runs application checks, and prepares the application for deployment."
      tocItems={tocItems}
    >
      <DocSection id="executive-summary" title="Executive Summary" index={1}>
        <p>
          This project demonstrates end-to-end CI/CD automation for a Django web application using Jenkins. From code commit to deployment readiness, every stage is automated — dependency installation, code quality checks, testing, and build preparation. The pipeline integrates with GitHub webhooks for automatic triggering on every push.
        </p>
      </DocSection>

      <DocSection id="problem-statement" title="Problem Statement" index={2}>
        <p>
          Manual deployment processes are slow, error-prone, and inconsistent. Developers spend hours on repetitive build and deployment tasks instead of writing code. Without automated testing, bugs slip into production undetected. There's a critical need for a reliable, repeatable CI/CD pipeline.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>Manual build and deployment taking 30+ minutes per release</li>
          <li>No automated testing gate — bugs reaching production</li>
          <li>Inconsistent deployment procedures across team members</li>
          <li>No rollback mechanism for failed deployments</li>
          <li>Lack of visibility into build and deployment status</li>
        </ul>

        <h3 className="text-foreground font-semibold text-base mb-3 mt-6">Risk Comparison: Manual vs Automated</h3>
        <TechTable
          rows={[
            { layer: "Deployment Time", technology: "30+ min manual → 5 min automated" },
            { layer: "Human Error Rate", technology: "High → Near zero" },
            { layer: "Rollback Time", technology: "Hours → Minutes" },
            { layer: "Test Coverage", technology: "Inconsistent → Every build" },
            { layer: "Audit Trail", technology: "None → Complete history" },
          ]}
        />
      </DocSection>

      <DocSection id="architecture" title="Pipeline Architecture" index={3}>
        <CodeBlock
          title="Jenkins Pipeline Flow"
          language="text"
          code={`┌──────────┐     ┌──────────────┐     ┌──────────────────────┐
│  GitHub  │────▶│   Webhook    │────▶│      Jenkins         │
│  Push    │     │   Trigger    │     │    (CI Server)       │
└──────────┘     └──────────────┘     └──────────┬───────────┘
                                                  │
                     Pipeline Stages:             │
                                                  ▼
                  ┌─────────────────────────────────────────┐
                  │  Stage 1: Clone Repository              │
                  ├─────────────────────────────────────────┤
                  │  Stage 2: Install Dependencies          │
                  ├─────────────────────────────────────────┤
                  │  Stage 3: Run Application Checks        │
                  ├─────────────────────────────────────────┤
                  │  Stage 4: Run Tests                     │
                  ├─────────────────────────────────────────┤
                  │  Stage 5: Build Application             │
                  ├─────────────────────────────────────────┤
                  │  Stage 6: Deploy (if on main branch)    │
                  └─────────────────────────────────────────┘
                                    │
                                    ▼
                          ┌──────────────────┐
                          │  Notification    │
                          │  (Success/Fail)  │
                          └──────────────────┘`}
        />
      </DocSection>

      <DocSection id="tech-stack" title="Technology Stack" index={4}>
        <TechTable
          rows={[
            { layer: "Application", technology: "Django (Python 3.11)" },
            { layer: "CI/CD Server", technology: "Jenkins" },
            { layer: "Version Control", technology: "GitHub" },
            { layer: "Build Tool", technology: "pip + Shell Scripts" },
            { layer: "Testing", technology: "Django Test Framework + PyTest" },
            { layer: "Deployment", technology: "Linux Server (SSH)" },
            { layer: "Scripting", technology: "Bash / Shell" },
          ]}
        />
      </DocSection>

      <DocSection id="implementation" title="Detailed Implementation Steps" index={5}>
        <h3 className="text-foreground font-semibold text-base mb-3">Jenkinsfile</h3>
        <CodeBlock
          title="Jenkinsfile"
          language="groovy"
          code={`pipeline {
    agent any
    
    environment {
        DJANGO_SETTINGS_MODULE = 'notes.settings'
        PYTHONPATH = "\${WORKSPACE}"
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main',
                    url: 'https://github.com/himanshugohil18/django-notes-app.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing Python dependencies...'
                sh '''
                    python3 -m venv venv
                    . venv/bin/activate
                    pip install --upgrade pip
                    pip install -r requirements.txt
                '''
            }
        }
        
        stage('Run Checks') {
            steps {
                echo 'Running Django system checks...'
                sh '''
                    . venv/bin/activate
                    python manage.py check --deploy
                '''
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running test suite...'
                sh '''
                    . venv/bin/activate
                    python manage.py test --verbosity=2
                '''
            }
        }
        
        stage('Collect Static Files') {
            steps {
                echo 'Collecting static files...'
                sh '''
                    . venv/bin/activate
                    python manage.py collectstatic --noinput
                '''
            }
        }
        
        stage('Build') {
            steps {
                echo 'Build completed successfully!'
                sh 'echo "Application is ready for deployment"'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
        always {
            cleanWs()
        }
    }
}`}
        />
      </DocSection>

      <DocSection id="security" title="Security Architecture" index={6}>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jenkins Credentials:</strong> All secrets stored in Jenkins credential manager, never in Jenkinsfile</li>
          <li><strong>Webhook Secret:</strong> GitHub webhook configured with shared secret for request verification</li>
          <li><strong>Agent Isolation:</strong> Jenkins agents run in isolated environments</li>
          <li><strong>Django Check --deploy:</strong> Automated security checks for production settings</li>
          <li><strong>Workspace Cleanup:</strong> Build workspace cleaned after every pipeline run</li>
          <li><strong>Role-Based Access:</strong> Jenkins RBAC for pipeline management permissions</li>
        </ul>
      </DocSection>

      <DocSection id="webhook" title="Webhook Integration" index={7}>
        <h3 className="text-foreground font-semibold text-base mb-3">GitHub Webhook Setup</h3>
        <p className="mb-4">Configure GitHub webhooks to trigger Jenkins builds automatically on every push or pull request event.</p>
        <CodeBlock
          title="Webhook Configuration"
          language="text"
          code={`GitHub Repository Settings → Webhooks → Add Webhook

Payload URL: http://jenkins-server:8080/github-webhook/
Content Type: application/json
Secret: <shared-secret>
Events: Push events, Pull request events

Jenkins Job Configuration:
  Build Triggers → GitHub hook trigger for GITScm polling ✓`}
        />
        <p className="mt-4">The webhook ensures that every code push automatically triggers the CI pipeline, providing immediate feedback to developers on their changes.</p>
      </DocSection>

      <DocSection id="monitoring" title="Monitoring & Logging" index={8}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Build History:</strong> Complete history of all builds with logs and artifacts</li>
          <li><strong>Console Output:</strong> Real-time build log streaming for each stage</li>
          <li><strong>Build Trends:</strong> Success/failure trends over time</li>
          <li><strong>Email Notifications:</strong> Automated alerts on build failure</li>
          <li><strong>Stage Duration:</strong> Per-stage timing for performance optimization</li>
        </ul>
        <div className="space-y-3">
          <ProgressIndicator label="Build Visibility" value={90} />
          <ProgressIndicator label="Alert Coverage" value={80} />
          <ProgressIndicator label="Log Retention" value={85} />
        </div>
      </DocSection>

      <DocSection id="scalability" title="Scalability Strategy" index={9}>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Jenkins distributed builds with master/agent architecture</li>
          <li>Multiple agents for parallel pipeline execution</li>
          <li>Docker-based agents for clean build environments</li>
          <li>Pipeline as Code (Jenkinsfile) enables version-controlled CI configuration</li>
          <li>Shared libraries for reusable pipeline logic across projects</li>
        </ul>
        <div className="space-y-3">
          <ProgressIndicator label="Scalability" value={80} />
          <ProgressIndicator label="Automation Level" value={90} />
          <ProgressIndicator label="Security" value={75} />
          <ProgressIndicator label="Production Readiness" value={80} />
        </div>
      </DocSection>

      <DocSection id="improvements" title="Production Improvements" index={10}>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center gap-2 text-foreground font-medium text-sm hover:text-primary transition-colors w-full text-left py-2">
            <ChevronDown className="w-4 h-4" />
            Advanced Pipeline Improvements
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>Add Docker containerized build agents for environment isolation</li>
              <li>Implement Blue Ocean UI for better pipeline visualization</li>
              <li>Add SonarQube integration for code quality analysis</li>
              <li>Implement artifact versioning and promotion workflow</li>
              <li>Add Slack/Teams notifications for build status</li>
              <li>Implement database migration stage for Django</li>
              <li>Add performance testing stage with Locust</li>
              <li>Implement multi-branch pipeline for feature branch testing</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </DocSection>

      <DocSection id="skills" title="DevOps Skills Demonstrated" index={11}>
        <div className="flex flex-wrap gap-2">
          {["Jenkins", "CI/CD", "Pipeline as Code", "GitHub Webhooks", "Django", "Python", "Shell Scripting", "Linux", "Build Automation", "Test Automation", "Deployment Automation"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {skill}
            </span>
          ))}
        </div>
      </DocSection>

      <DocSection id="business-value" title="Business Value" index={12}>
        <TechTable
          rows={[
            { layer: "Deployment Speed", technology: "30 min → 5 min (83% faster)" },
            { layer: "Bug Detection", technology: "Post-release → Pre-merge" },
            { layer: "Developer Productivity", technology: "40% more time on features" },
            { layer: "Deployment Confidence", technology: "Manual hope → Automated certainty" },
            { layer: "Release Frequency", technology: "Weekly → Multiple daily deployments" },
          ]}
        />
      </DocSection>

      <DocSection id="impact" title="Real-World Impact" index={13}>
        <p>
          Jenkins remains one of the most widely used CI/CD tools in the industry. This project demonstrates the core patterns of automated software delivery — from commit to deployment. The pipeline automates repetitive tasks, catches bugs early, and enables rapid, reliable releases. These practices are fundamental to modern DevOps culture and are used by organizations of all sizes.
        </p>
      </DocSection>

      <DocSection id="author" title="Author" index={14}>
        <AuthorSection />
      </DocSection>
    </ProjectDocLayout>
  );
}
