import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { AIController } from '../controllers/ai.controller';
import { validateRequest } from '../middleware/validation.middleware';
import {
  menuRecommendationsSchema,
  inventoryPredictionSchema,
  scheduleOptimizationSchema,
  inspectionAnalysisSchema,
} from '../validations/ai.schemas';

const router = Router();
const aiController = new AIController();

// Rate limiting configuration
const aiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again later.',
  },
});

// Apply rate limiting to all AI routes
router.use(aiRateLimiter);

// Menu AI routes
router.post(
  '/menu/recommendations',
  validateRequest(menuRecommendationsSchema),
  (req, res) => aiController.generateMenuRecommendations(req, res)
);

// Inventory AI routes
router.post(
  '/inventory/predict',
  validateRequest(inventoryPredictionSchema),
  (req, res) => aiController.predictInventoryNeeds(req, res)
);

// Labor AI routes
router.post(
  '/labor/optimize-schedule',
  validateRequest(scheduleOptimizationSchema),
  (req, res) => aiController.optimizeSchedule(req, res)
);

// Compliance AI routes
router.post(
  '/compliance/analyze-inspection',
  validateRequest(inspectionAnalysisSchema),
  (req, res) => aiController.analyzeInspectionResults(req, res)
);

export default router; 