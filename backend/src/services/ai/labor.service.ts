import { BaseAIService, AIResponse } from './base.service';
import { laborOptimizationConfig } from '../../config/ai.config';
import { Employee, Shift, Schedule } from '../../models/labor.model';

export class LaborAIService extends BaseAIService {
  constructor() {
    super(laborOptimizationConfig);
  }

  async optimizeSchedule(
    employees: Employee[],
    historicalData: Schedule[],
    businessHours: any,
    specialEvents: any[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Optimize employee schedule',
      employees,
      historicalData,
      businessHours,
      specialEvents,
      requirements: {
        minimizeLaborCosts: true,
        maintainServiceQuality: true,
        respectEmployeePreferences: true,
        handleSpecialEvents: true,
      },
    });

    return this.callAI(prompt);
  }

  async predictStaffingNeeds(
    historicalData: Schedule[],
    upcomingEvents: any[],
    businessMetrics: any
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Predict staffing needs',
      historicalData,
      upcomingEvents,
      businessMetrics,
      requirements: {
        considerSeasonality: true,
        accountForEvents: true,
        optimizeCosts: true,
        maintainServiceLevels: true,
      },
    });

    return this.callAI(prompt);
  }

  async analyzeLaborCosts(
    schedules: Schedule[],
    employeePerformance: any
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Analyze labor costs',
      schedules,
      employeePerformance,
      requirements: {
        identifyCostDrivers: true,
        suggestOptimizations: true,
        considerProductivity: true,
        maintainQuality: true,
      },
    });

    return this.callAI(prompt);
  }
} 