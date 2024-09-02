import express from 'express';
import * as prospectApi from './prospect.js';
import * as customerStoryApi from './customer-story.js';
import * as resultApi from './result.js';

const router = express.Router();

// Prospect routes
router.post('/prospects', prospectApi.createProspect);
router.get('/prospects', prospectApi.getProspects);
router.get('/prospects/:id', prospectApi.getProspect);
router.put('/prospects/:id', prospectApi.updateProspect);
router.delete('/prospects/:id', prospectApi.deleteProspect);

// Customer Story routes
router.post('/customer-stories', customerStoryApi.createCustomerStory);
router.get('/customer-stories', customerStoryApi.getCustomerStories);
router.get('/customer-stories/:id', customerStoryApi.getCustomerStory);
router.put('/customer-stories/:id', customerStoryApi.updateCustomerStory);
router.delete('/customer-stories/:id', customerStoryApi.deleteCustomerStory);

// Result routes
router.post('/results', resultApi.createResult);
router.get('/results', resultApi.getResults);
router.get('/results/:id', resultApi.getResult);
router.put('/results/:id', resultApi.updateResult);
router.delete('/results/:id', resultApi.deleteResult);

export default router;