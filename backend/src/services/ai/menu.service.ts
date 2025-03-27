import { BaseAIService, AIResponse } from './base.service';
import { menuRecommendationConfig } from '../../config/ai.config';
import { MenuItem } from '../../models/menu.model';

export class MenuAIService extends BaseAIService {
  constructor() {
    super(menuRecommendationConfig);
  }

  async generateMenuRecommendations(
    currentMenu: MenuItem[],
    customerPreferences: any,
    seasonalIngredients: string[]
  ): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Generate menu recommendations',
      currentMenu,
      customerPreferences,
      seasonalIngredients,
      requirements: {
        considerSeasonality: true,
        maintainPriceRange: true,
        balanceNutrition: true,
        considerAllergens: true,
      },
    });

    return this.callAI(prompt);
  }

  async optimizeMenuItem(item: MenuItem): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Optimize menu item',
      item,
      requirements: {
        improveNutrition: true,
        enhanceFlavor: true,
        reduceCost: true,
        maintainQuality: true,
      },
    });

    return this.callAI(prompt);
  }

  async generateMenuItemDescription(item: MenuItem): Promise<AIResponse> {
    const prompt = this.formatPrompt({
      task: 'Generate menu item description',
      item,
      requirements: {
        highlightKeyIngredients: true,
        emphasizeUniqueFeatures: true,
        includeNutritionalBenefits: true,
        maintainAppeal: true,
      },
    });

    return this.callAI(prompt);
  }
} 