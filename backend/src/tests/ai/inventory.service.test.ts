import { InventoryAIService } from '../../services/ai/inventory.service';
import { InventoryItem, InventoryTransaction } from '../../models/inventory.model';

describe('InventoryAIService', () => {
  let inventoryService: InventoryAIService;

  beforeEach(() => {
    inventoryService = new InventoryAIService();
  });

  describe('predictInventoryNeeds', () => {
    it('should predict inventory needs successfully', async () => {
      const currentInventory: InventoryItem[] = [
        {
          id: '1',
          name: 'Tomatoes',
          sku: 'VEG-TOM-001',
          category: 'vegetables',
          unit: 'kg',
          quantity: 50,
          reorder_point: 20,
          optimal_quantity: 100,
          price_per_unit: 2.5,
          supplier_id: 'supplier-1',
          location: 'main_storage',
          expiry_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const historicalTransactions: InventoryTransaction[] = [
        {
          id: '1',
          item_id: '1',
          type: 'received',
          quantity: 100,
          unit_price: 2.5,
          transaction_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          notes: 'Weekly delivery',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
        {
          id: '2',
          item_id: '1',
          type: 'used',
          quantity: 50,
          unit_price: 2.5,
          transaction_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          notes: 'Used in daily preparation',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const upcomingEvents = [
        {
          name: 'Summer Food Festival',
          date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          expected_attendance: 500,
          menu_items: ['tomato_salad', 'bruschetta'],
        },
      ];

      const result = await inventoryService.predictInventoryNeeds(
        currentInventory,
        historicalTransactions,
        upcomingEvents
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });

    it('should handle errors gracefully', async () => {
      const result = await inventoryService.predictInventoryNeeds(
        [],
        [],
        []
      );

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('optimizeReorderPoints', () => {
    it('should optimize reorder points successfully', async () => {
      const inventoryItems: InventoryItem[] = [
        {
          id: '1',
          name: 'Tomatoes',
          sku: 'VEG-TOM-001',
          category: 'vegetables',
          unit: 'kg',
          quantity: 50,
          reorder_point: 20,
          optimal_quantity: 100,
          price_per_unit: 2.5,
          supplier_id: 'supplier-1',
          location: 'main_storage',
          expiry_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const historicalUsage: InventoryTransaction[] = [
        {
          id: '1',
          item_id: '1',
          type: 'used',
          quantity: 100,
          unit_price: 2.5,
          transaction_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          notes: 'Weekly usage',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const result = await inventoryService.optimizeReorderPoints(
        inventoryItems,
        historicalUsage
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });

  describe('analyzeWastePatterns', () => {
    it('should analyze waste patterns successfully', async () => {
      const wasteTransactions: InventoryTransaction[] = [
        {
          id: '1',
          item_id: '1',
          type: 'waste',
          quantity: 10,
          unit_price: 2.5,
          transaction_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          notes: 'Expired produce',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const result = await inventoryService.analyzeWastePatterns(
        wasteTransactions
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });
}); 