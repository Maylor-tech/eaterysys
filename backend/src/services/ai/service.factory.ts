import { MenuAIService } from './menu.service';
import { InventoryAIService } from './inventory.service';
import { LaborAIService } from './labor.service';
import { ComplianceAIService } from './compliance.service';

export class AIServiceFactory {
  private static menuService: MenuAIService;
  private static inventoryService: InventoryAIService;
  private static laborService: LaborAIService;
  private static complianceService: ComplianceAIService;

  static getMenuService(): MenuAIService {
    if (!this.menuService) {
      this.menuService = new MenuAIService();
    }
    return this.menuService;
  }

  static getInventoryService(): InventoryAIService {
    if (!this.inventoryService) {
      this.inventoryService = new InventoryAIService();
    }
    return this.inventoryService;
  }

  static getLaborService(): LaborAIService {
    if (!this.laborService) {
      this.laborService = new LaborAIService();
    }
    return this.laborService;
  }

  static getComplianceService(): ComplianceAIService {
    if (!this.complianceService) {
      this.complianceService = new ComplianceAIService();
    }
    return this.complianceService;
  }
} 