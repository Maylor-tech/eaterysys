import { MenuAIService } from '../../services/ai/menu.service';
import { MenuItem } from '../../models/menu.model';

describe('MenuAIService', () => {
  let menuService: MenuAIService;

  beforeEach(() => {
    menuService = new MenuAIService();
  });

  describe('generateMenuRecommendations', () => {
    it('should generate menu recommendations successfully', async () => {
      const currentMenu: MenuItem[] = [
        {
          id: '1',
          name: 'Test Item',
          description: 'Test Description',
          price: 10,
          category: 'Test Category',
          allergens: ['nuts'],
          nutritional_info: {
            calories: 100,
            protein: 10,
            carbs: 20,
            fats: 5,
          },
          is_active: true,
          preparation_time: 15,
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const customerPreferences = {
        dietaryRestrictions: ['vegetarian'],
        priceRange: { min: 5, max: 20 },
        favoriteCategories: ['Test Category'],
      };

      const seasonalIngredients = ['tomato', 'lettuce'];

      const result = await menuService.generateMenuRecommendations(
        currentMenu,
        customerPreferences,
        seasonalIngredients
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });

    it('should handle errors gracefully', async () => {
      const result = await menuService.generateMenuRecommendations(
        [],
        {},
        []
      );

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('optimizeMenuItem', () => {
    it('should optimize menu item successfully', async () => {
      const item: MenuItem = {
        id: '1',
        name: 'Test Item',
        description: 'Test Description',
        price: 10,
        category: 'Test Category',
        allergens: ['nuts'],
        nutritional_info: {
          calories: 100,
          protein: 10,
          carbs: 20,
          fats: 5,
        },
        is_active: true,
        preparation_time: 15,
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 'user1',
        updated_by: 'user1',
      };

      const result = await menuService.optimizeMenuItem(item);

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });

  describe('generateMenuItemDescription', () => {
    it('should generate menu item description successfully', async () => {
      const item: MenuItem = {
        id: '1',
        name: 'Test Item',
        description: 'Test Description',
        price: 10,
        category: 'Test Category',
        allergens: ['nuts'],
        nutritional_info: {
          calories: 100,
          protein: 10,
          carbs: 20,
          fats: 5,
        },
        is_active: true,
        preparation_time: 15,
        created_at: new Date(),
        updated_at: new Date(),
        created_by: 'user1',
        updated_by: 'user1',
      };

      const result = await menuService.generateMenuItemDescription(item);

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });
}); 