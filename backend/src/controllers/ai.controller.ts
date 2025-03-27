import { Request, Response } from 'express';
import { AIServiceFactory } from '../services/ai/service.factory';
import { CacheService } from '../services/cache.service';
import { BaseResponse } from '../types/common';

export class AIController {
  private cacheService: CacheService;

  constructor() {
    this.cacheService = CacheService.getInstance();
  }

  // Menu AI endpoints
  async generateMenuRecommendations(req: Request, res: Response) {
    try {
      const cacheKey = this.cacheService.generateKey('menu_recommendations', req.body);
      const cachedResult = await this.cacheService.get<BaseResponse<any>>(cacheKey);

      if (cachedResult) {
        return res.status(200).json(cachedResult);
      }

      const { currentMenu, customerPreferences, seasonalIngredients } = req.body;
      const menuService = AIServiceFactory.getMenuService();
      const result = await menuService.generateMenuRecommendations(
        currentMenu,
        customerPreferences,
        seasonalIngredients
      );

      if (!result.success) {
        return res.status(500).json({
          status: 'error',
          message: result.error,
        });
      }

      const response: BaseResponse<any> = {
        status: 'success',
        data: result.data,
      };

      await this.cacheService.set(cacheKey, response, 3600); // Cache for 1 hour
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to generate menu recommendations',
      });
    }
  }

  // Inventory AI endpoints
  async predictInventoryNeeds(req: Request, res: Response) {
    try {
      const cacheKey = this.cacheService.generateKey('inventory_prediction', req.body);
      const cachedResult = await this.cacheService.get<BaseResponse<any>>(cacheKey);

      if (cachedResult) {
        return res.status(200).json(cachedResult);
      }

      const { currentInventory, historicalTransactions, upcomingEvents } = req.body;
      const inventoryService = AIServiceFactory.getInventoryService();
      const result = await inventoryService.predictInventoryNeeds(
        currentInventory,
        historicalTransactions,
        upcomingEvents
      );

      if (!result.success) {
        return res.status(500).json({
          status: 'error',
          message: result.error,
        });
      }

      const response: BaseResponse<any> = {
        status: 'success',
        data: result.data,
      };

      await this.cacheService.set(cacheKey, response, 1800); // Cache for 30 minutes
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to predict inventory needs',
      });
    }
  }

  // Labor AI endpoints
  async optimizeSchedule(req: Request, res: Response) {
    try {
      const cacheKey = this.cacheService.generateKey('schedule_optimization', req.body);
      const cachedResult = await this.cacheService.get<BaseResponse<any>>(cacheKey);

      if (cachedResult) {
        return res.status(200).json(cachedResult);
      }

      const { employees, historicalData, businessHours, specialEvents } = req.body;
      const laborService = AIServiceFactory.getLaborService();
      const result = await laborService.optimizeSchedule(
        employees,
        historicalData,
        businessHours,
        specialEvents
      );

      if (!result.success) {
        return res.status(500).json({
          status: 'error',
          message: result.error,
        });
      }

      const response: BaseResponse<any> = {
        status: 'success',
        data: result.data,
      };

      await this.cacheService.set(cacheKey, response, 3600); // Cache for 1 hour
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to optimize schedule',
      });
    }
  }

  // Compliance AI endpoints
  async analyzeInspectionResults(req: Request, res: Response) {
    try {
      const cacheKey = this.cacheService.generateKey('inspection_analysis', req.body);
      const cachedResult = await this.cacheService.get<BaseResponse<any>>(cacheKey);

      if (cachedResult) {
        return res.status(200).json(cachedResult);
      }

      const { inspection, historicalInspections } = req.body;
      const complianceService = AIServiceFactory.getComplianceService();
      const result = await complianceService.analyzeInspectionResults(
        inspection,
        historicalInspections
      );

      if (!result.success) {
        return res.status(500).json({
          status: 'error',
          message: result.error,
        });
      }

      const response: BaseResponse<any> = {
        status: 'success',
        data: result.data,
      };

      await this.cacheService.set(cacheKey, response, 7200); // Cache for 2 hours
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to analyze inspection results',
      });
    }
  }
} 