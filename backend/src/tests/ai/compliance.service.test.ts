import { ComplianceAIService } from '../../services/ai/compliance.service';
import { Inspection, ComplianceTask, ComplianceViolation } from '../../models/compliance.model';

describe('ComplianceAIService', () => {
  let complianceService: ComplianceAIService;

  beforeEach(() => {
    complianceService = new ComplianceAIService();
  });

  describe('analyzeInspectionResults', () => {
    it('should analyze inspection results successfully', async () => {
      const inspection: Inspection = {
        id: '1',
        type: 'health',
        inspector: 'John Smith',
        date: new Date(),
        score: 95,
        status: 'completed',
        findings: [
          {
            category: 'food_safety',
            description: 'Food storage temperature above safe limit',
            severity: 'critical',
            action_required: 'Adjust refrigerator temperature',
            due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        ],
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 'user1',
        updated_by: 'user1',
      };

      const historicalInspections: Inspection[] = [
        {
          id: '2',
          type: 'health',
          inspector: 'Jane Doe',
          date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          score: 98,
          status: 'completed',
          findings: [],
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const result = await complianceService.analyzeInspectionResults(
        inspection,
        historicalInspections
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });

  describe('generateCompliancePlan', () => {
    it('should generate compliance plan successfully', async () => {
      const violations: ComplianceViolation[] = [
        {
          id: '1',
          type: 'health',
          description: 'Food storage temperature above safe limit',
          severity: 'critical',
          status: 'open',
          due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const tasks: ComplianceTask[] = [
        {
          id: '1',
          title: 'Fix refrigerator temperature',
          description: 'Adjust refrigerator temperature to maintain safe food storage',
          category: 'food_safety',
          frequency: 'daily',
          priority: 'high',
          due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          status: 'pending',
          assigned_to: 'kitchen_manager',
          evidence_required: true,
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const result = await complianceService.generateCompliancePlan(
        violations,
        tasks
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });

  describe('assessRiskLevel', () => {
    it('should assess risk level successfully', async () => {
      const inspection: Inspection = {
        id: '1',
        type: 'health',
        inspector: 'John Smith',
        date: new Date(),
        score: 95,
        status: 'completed',
        findings: [
          {
            category: 'food_safety',
            description: 'Food storage temperature above safe limit',
            severity: 'critical',
            action_required: 'Adjust refrigerator temperature',
            due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        ],
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 'user1',
        updated_by: 'user1',
      };

      const violations: ComplianceViolation[] = [
        {
          id: '1',
          type: 'health',
          description: 'Food storage temperature above safe limit',
          severity: 'critical',
          status: 'open',
          due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const result = await complianceService.assessRiskLevel(
        inspection,
        violations
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });
}); 