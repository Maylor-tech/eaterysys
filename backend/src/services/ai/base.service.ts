import { AIModelConfig } from '../../config/ai.config';

export interface AIResponse {
  success: boolean;
  data: any;
  error?: string;
}

export class BaseAIService {
  protected config: AIModelConfig;

  constructor(config: AIModelConfig) {
    this.config = config;
  }

  protected async callAI(prompt: string): Promise<AIResponse> {
    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({
          model: this.config.modelName,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: this.config.maxTokens,
          temperature: this.config.temperature,
        }),
      });

      if (!response.ok) {
        throw new Error(`AI API error: ${response.statusText}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result.choices[0].message.content,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  protected formatPrompt(context: any): string {
    return JSON.stringify(context, null, 2);
  }
} 