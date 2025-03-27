import { BaseAIService, AIResponse } from './base.service';
import { complianceAnalysisConfig } from '../../config/ai.config';
import { ComplianceTask, Inspection, ComplianceViolation } from '../../models/compliance.model';

export class ComplianceAIService extends BaseAIService {
  constructor() {
    super(complianceAnalysisConfig);
  }

  async analyzeInspectionResults(
    inspection: Inspection,
    historicalInspections: Inspection[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Analyze inspection results',
      inspection,
      historicalInspections,
      requirements: {
        identifyTrends: true,
        suggestImprovements: true,
        prioritizeIssues: true,
        recommendActions: true,
      },
    });

    return this.callAI(prompt);
  }

  async generateCompliancePlan(
    violations: ComplianceViolation[],
    tasks: ComplianceTask[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Generate compliance plan',
      violations,
      tasks,
      requirements: {
        prioritizeViolations: true,
        createActionableTasks: true,
        setRealisticTimelines: true,
        ensureCompliance: true,
      },
    });

    return this.callAI(prompt);
  }

  async assessRiskLevel(
    inspection: Inspection,
    violations: ComplianceViolation[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Assess compliance risk level',
      inspection,
      violations,
      requirements: {
        evaluateSeverity: true,
        considerFrequency: true,
        assessImpact: true,
        recommendMitigation: true,
      },
    });

    return this.callAI(prompt);
  }
} 