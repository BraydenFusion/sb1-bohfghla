interface Feature {
  name: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}

interface FeatureCategory {
  name: string;
  features: Feature[];
}

export const featureComparison: FeatureCategory[] = [
  {
    name: 'AI Capabilities',
    features: [
      {
        name: 'AI Customer Support',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'Custom AI Training',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Multi-language Support',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Advanced AI Analytics',
        starter: false,
        professional: false,
        enterprise: true
      }
    ]
  },
  {
    name: 'Integration & API',
    features: [
      {
        name: 'Basic Integrations',
        starter: true,
        professional: true,
        enterprise: true
      },
      {
        name: 'API Access',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Custom Webhooks',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'SSO Integration',
        starter: false,
        professional: false,
        enterprise: true
      }
    ]
  }
];