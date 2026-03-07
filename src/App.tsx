import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const AwsEcsDeployment = lazy(() => import("./pages/projects/AwsEcsDeployment"));
const DjangoNginxMysql = lazy(() => import("./pages/projects/DjangoNginxMysql"));
const GitWorkflowCI = lazy(() => import("./pages/projects/GitWorkflowCI"));
const AwsServerlessLambda = lazy(() => import("./pages/projects/AwsServerlessLambda"));
const DjangoJenkinsCICD = lazy(() => import("./pages/projects/DjangoJenkinsCICD"));
const KubernetesChatApp = lazy(() => import("./pages/projects/KubernetesChatApp"));
const MultiServiceMonitoring = lazy(() => import("./pages/projects/MultiServiceMonitoring"));
const WanderlustMegaProject = lazy(() => import("./pages/projects/WanderlustMegaProject"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects/aws-ecs-container-deployment" element={<AwsEcsDeployment />} />
              <Route path="/projects/django-nginx-mysql-docker" element={<DjangoNginxMysql />} />
              <Route path="/projects/git-workflow-ci-governance" element={<GitWorkflowCI />} />
              <Route path="/projects/aws-serverless-lambda" element={<AwsServerlessLambda />} />
              <Route path="/projects/django-jenkins-cicd" element={<DjangoJenkinsCICD />} />
              <Route path="/projects/kubernetes-chat-app" element={<KubernetesChatApp />} />
              <Route path="/projects/multi-service-monitoring" element={<MultiServiceMonitoring />} />
              <Route path="/projects/wanderlust-mega-project" element={<WanderlustMegaProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
