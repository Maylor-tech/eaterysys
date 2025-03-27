import { Router } from 'express';
import { MenuController } from '../controllers/menu.controller';

const router = Router();
const menuController = new MenuController();

// Menu routes
router.post('/menus', (req, res) => menuController.createMenu(req, res));
router.get('/menus', (req, res) => menuController.getMenus(req, res));
router.get('/menus/:id', (req, res) => menuController.getMenuById(req, res));
router.put('/menus/:id', (req, res) => menuController.updateMenu(req, res));
router.delete('/menus/:id', (req, res) => menuController.deleteMenu(req, res));

export default router; 