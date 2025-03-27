import dotenv from 'dotenv';

dotenv.config();

export interface AIModelConfig {
  modelName: string;
  apiKey: string;
  endpoint: string;
  maxTokens: number;
  temperature: number;
}

export const menuRecommendationConfig: AIModelConfig = {
  modelName: 'gpt-4-turbo-preview',
  apiKey: process.env.OPENAI_API_KEY || '',
  endpoint: 'https://api.openai.com/v1/chat/completions',
  maxTokens: 1000,
  temperature: 0.7,
};

export const inventoryPredictionConfig: AIModelConfig = {
  modelName: 'gpt-4-turbo-preview',
  apiKey: process.env.OPENAI_API_KEY || '',
  endpoint: 'https://api.openai.com/v1/chat/completions',
  maxTokens: 1000,
  temperature: 0.3,
};

export const laborOptimizationConfig: AIModelConfig = {
  modelName: 'gpt-4-turbo-preview',
  apiKey: process.env.OPENAI_API_KEY || '',
  endpoint: 'https://api.openai.com/v1/chat/completions',
  maxTokens: 1000,
  temperature: 0.5,
};

export const complianceAnalysisConfig: AIModelConfig = {
  modelName: 'gpt-4-turbo-preview',
  apiKey: process.env.OPENAI_API_KEY || '',
  endpoint: 'https://api.openai.com/v1/chat/completions',
  maxTokens: 1000,
  temperature: 0.2,
}; 