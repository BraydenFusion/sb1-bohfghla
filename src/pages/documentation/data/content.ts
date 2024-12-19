export const docContent = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Learn how to integrate and build with Fusion AI\'s powerful automation platform.',
    subsections: [
      {
        id: 'overview',
        title: 'Overview',
        description: 'Fusion AI provides a comprehensive suite of AI-powered automation tools.'
      }
    ]
  },
  {
    id: 'quick-start',
    title: 'Quick Start',
    description: 'Get up and running with Fusion AI in minutes.',
    code: `import { FusionAI } from '@fusion/sdk';

const client = new FusionAI({
  apiKey: 'your-api-key'
});

// Create an AI agent
const agent = await client.createAgent({
  name: 'Customer Support',
  model: 'gpt-4',
  prompt: 'You are a helpful customer support agent...'
});`,
  },
  {
    id: 'authentication',
    title: 'Authentication',
    description: 'Learn how to authenticate your requests to the Fusion AI API.',
    code: `// Using API key authentication
const headers = {
  'Authorization': 'Bearer your-api-key',
  'Content-Type': 'application/json'
};

// Make authenticated request
const response = await fetch('https://api.fusion.ai/v1/agents', {
  headers
});`
  }
];