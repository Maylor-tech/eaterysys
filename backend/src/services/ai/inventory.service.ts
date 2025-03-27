import { BaseAIService, AIResponse } from './base.service';
import { inventoryPredictionConfig } from '../../config/ai.config';
import { InventoryItem, InventoryTransaction } from '../../models/inventory.model';

export class InventoryAIService extends BaseAIService {
  constructor() {
    super(inventoryPredictionConfig);
  }

  async predictInventoryNeeds(
    currentInventory: InventoryItem[],
    historicalTransactions: InventoryTransaction[],
    upcomingEvents: any[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Predict inventory needs',
      currentInventory,
      historicalTransactions,
      upcomingEvents,
      requirements: {
        considerSeasonality: true,
        accountForEvents: true,
        optimizeStockLevels: true,
        minimizeWaste: true,
      },
    });

    return this.callAI(prompt);
  }

  async optimizeReorderPoints(
    inventoryItems: InventoryItem[],
    historicalUsage: InventoryTransaction[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Optimize reorder points',
      inventoryItems,
      historicalUsage,
      requirements: {
        preventStockouts: true,
        minimizeHoldingCosts: true,
        considerLeadTimes: true,
        accountForVariability: true,
      },
    });

    return this.callAI(prompt);
  }

  async analyzeWastePatterns(
    inventoryTransactions: InventoryTransaction[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Analyze waste patterns',
      inventoryTransactions,
      requirements: {
        identifyWasteCauses: true,
        suggestReductionStrategies: true,
        optimizeOrdering: true,
        improveStorage: true,
      },
    });

    return this.callAI(prompt);
  }
} 