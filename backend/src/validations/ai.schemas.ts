import { z } from 'zod';

// Menu AI schemas
export const menuRecommendationsSchema = z.object({
  currentMenu: z.array(z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    allergens: z.array(z.string()),
    nutritional_info: z.object({
      calories: z.number(),
      protein: z.number(),
      carbs: z.number(),
      fats: z.number(),
    }),
  })),
  customerPreferences: z.object({
    dietaryRestrictions: z.array(z.string()).optional(),
    priceRange: z.object({
      min: z.number(),
      max: z.number(),
    }).optional(),
    favoriteCategories: z.array(z.string()).optional(),
  }),
  seasonalIngredients: z.array(z.string()),
});

// Inventory AI schemas
export const inventoryPredictionSchema = z.object({
  currentInventory: z.array(z.object({
    name: z.string(),
    sku: z.string(),
    quantity: z.number(),
    reorder_point: z.number(),
    optimal_quantity: z.number(),
  })),
  historicalTransactions: z.array(z.object({
    type: z.enum(['received', 'used', 'waste', 'adjustment']),
    quantity: z.number(),
    transaction_date: z.string().datetime(),
  })),
  upcomingEvents: z.array(z.object({
    date: z.string().datetime(),
    type: z.string(),
    expected_attendance: z.number().optional(),
  })),
});

// Labor AI schemas
export const scheduleOptimizationSchema = z.object({
  employees: z.array(z.object({
    id: z.string().uuid(),
    name: z.string(),
    role: z.string(),
    availability: z.record(z.array(z.object({
      start: z.string(),
      end: z.string(),
    }))),
  })),
  historicalData: z.array(z.object({
    week_start_date: z.string().datetime(),
    total_hours: z.number(),
    total_cost: z.number(),
  })),
  businessHours: z.object({
    open: z.string(),
    close: z.string(),
    days: z.array(z.string()),
  }),
  specialEvents: z.array(z.object({
    date: z.string().datetime(),
    type: z.string(),
    expected_attendance: z.number(),
  })),
});

// Compliance AI schemas
export const inspectionAnalysisSchema = z.object({
  inspection: z.object({
    type: z.string(),
    date: z.string().datetime(),
    score: z.number().min(0).max(100).optional(),
    findings: z.array(z.object({
      category: z.string(),
      description: z.string(),
      severity: z.enum(['minor', 'major', 'critical']),
    })),
  }),
  historicalInspections: z.array(z.object({
    date: z.string().datetime(),
    score: z.number().min(0).max(100).optional(),
    findings: z.array(z.object({
      category: z.string(),
      severity: z.enum(['minor', 'major', 'critical']),
    })),
  })),
}); 