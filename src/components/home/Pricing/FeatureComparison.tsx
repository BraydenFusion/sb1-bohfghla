import React from 'react';
import { Check, Minus } from 'lucide-react';

const features = [
  {
    category: 'AI Capabilities',
    items: [
      { name: 'AI Customer Support', starter: true, growth: true, enterprise: true },
      { name: 'Custom AI Training', starter: false, growth: true, enterprise: true },
      { name: 'Multi-language Support', starter: false, growth: true, enterprise: true },
      { name: 'Advanced AI Analytics', starter: false, growth: false, enterprise: true }
    ]
  },
  {
    category: 'Integration & API',
    items: [
      { name: 'Basic Integrations', starter: true, growth: true, enterprise: true },
      { name: 'API Access', starter: false, growth: true, enterprise: true },
      { name: 'Custom Webhooks', starter: false, growth: true, enterprise: true },
      { name: 'SSO Integration', starter: false, growth: false, enterprise: true }
    ]
  }
];

export const FeatureComparison = () => {
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12">Feature Comparison</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6">Feature</th>
              <th className="text-center py-4 px-6">Starter</th>
              <th className="text-center py-4 px-6">Growth</th>
              <th className="text-center py-4 px-6">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((category) => (
              <React.Fragment key={category.category}>
                <tr>
                  <td
                    colSpan={4}
                    className="py-4 px-6 text-lg font-semibold bg-white/5"
                  >
                    {category.category}
                  </td>
                </tr>
                {category.items.map((feature) => (
                  <tr key={feature.name} className="border-b border-white/10">
                    <td className="py-4 px-6">{feature.name}</td>
                    <td className="text-center py-4 px-6">
                      {feature.starter ? (
                        <Check className="w-5 h-5 text-accent-neon mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-text-muted mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {feature.growth ? (
                        <Check className="w-5 h-5 text-accent-neon mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-text-muted mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {feature.enterprise ? (
                        <Check className="w-5 h-5 text-accent-neon mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-text-muted mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};