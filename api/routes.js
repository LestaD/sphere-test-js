
import { Router } from 'express';
import { weather, empty } from './controllers';

const router = Router();

router.get('/', empty);
router.get('/weather', weather);

export default router;
