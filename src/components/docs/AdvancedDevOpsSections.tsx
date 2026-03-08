import { DocSection } from "./DocSection";
import { ArchitectureLayers, ArchLayer } from "./ArchitectureLayers";
import { DevOpsPipelineFlow, PipelineStep } from "./DevOpsPipelineFlow";
import { IaCSection, IaCResource } from "./IaCSection";
import { ObservabilityStack, ObservabilityMetric } from "./ObservabilityStack";
import { DevOpsPractices, Practice } from "./DevOpsPractices";
import { ProductionReadiness } from "./ProductionReadiness";
import { ChallengesSolutions, Challenge } from "./ChallengesSolutions";
import { ScalingArchitecture, ScalingConcept } from "./ScalingArchitecture";
import { DevOpsLifecycle } from "./DevOpsLifecycle";

export interface AdvancedDevOpsConfig {
  startIndex: number;
  layers?: ArchLayer[];
  pipelineSteps?: PipelineStep[];
  iacResources?: IaCResource[];
  iacTool?: string;
  iacDescription?: string;
  observabilityMetrics?: ObservabilityMetric[];
  observabilityTools?: { name: string; logo: string; role: string }[];
  practices?: Practice[];
  productionFeatures?: string[];
  challenges?: Challenge[];
  scalingConcepts?: ScalingConcept[];
}

export const advancedDevOpsTocItems = [
  { id: "architecture-layers", title: "Architecture Layers" },
  { id: "devops-pipeline-flow", title: "DevOps Pipeline Flow" },
  { id: "iac-provisioning", title: "Infrastructure Provisioning (IaC)" },
  { id: "observability-stack", title: "Observability Stack" },
  { id: "devops-practices", title: "DevOps Engineering Practices" },
  { id: "production-readiness", title: "Production Readiness Features" },
  { id: "engineering-challenges", title: "Engineering Challenges Solved" },
  { id: "scaling-architecture", title: "Scaling Architecture" },
  { id: "devops-lifecycle", title: "DevOps Lifecycle Implemented" },
];

export function AdvancedDevOpsSections({ startIndex, layers, pipelineSteps, iacResources, iacTool, iacDescription, observabilityMetrics, observabilityTools, practices, productionFeatures, challenges, scalingConcepts }: AdvancedDevOpsConfig) {
  let idx = startIndex;

  return (
    <>
      <DocSection id="architecture-layers" title="Architecture Layers" index={idx++}>
        <ArchitectureLayers layers={layers} />
      </DocSection>

      <DocSection id="devops-pipeline-flow" title="DevOps Pipeline Flow" index={idx++}>
        <DevOpsPipelineFlow steps={pipelineSteps} />
      </DocSection>

      <DocSection id="iac-provisioning" title="Infrastructure Provisioning (IaC)" index={idx++}>
        <IaCSection resources={iacResources} tool={iacTool} description={iacDescription} />
      </DocSection>

      <DocSection id="observability-stack" title="Observability Stack" index={idx++}>
        <ObservabilityStack metrics={observabilityMetrics} tools={observabilityTools} />
      </DocSection>

      <DocSection id="devops-practices" title="DevOps Engineering Practices" index={idx++}>
        <DevOpsPractices practices={practices} />
      </DocSection>

      <DocSection id="production-readiness" title="Production Readiness Features" index={idx++}>
        <ProductionReadiness features={productionFeatures} />
      </DocSection>

      <DocSection id="engineering-challenges" title="Engineering Challenges Solved" index={idx++}>
        <ChallengesSolutions challenges={challenges} />
      </DocSection>

      <DocSection id="scaling-architecture" title="Scaling Architecture" index={idx++}>
        <ScalingArchitecture concepts={scalingConcepts} />
      </DocSection>

      <DocSection id="devops-lifecycle" title="DevOps Lifecycle Implemented" index={idx++}>
        <DevOpsLifecycle />
      </DocSection>
    </>
  );
}
