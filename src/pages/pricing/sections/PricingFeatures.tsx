import React from 'react';
import { Check, Minus } from 'lucide-react';
import { featureComparison } from '../data/features';

export const PricingFeatures = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6">Feature</th>
                <th className="text-center py-4 px-6">Starter</th>
                <th className="text-center py-4 px-6">Professional</th>
                <th className="text-center py-4 px-6">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((category) => (
                <React.Fragment key={category.name}>
                  <tr>
                    <td
                      colSpan={4}
                      className="py-4 px-6 text-lg font-semibold bg-white/5"
                    >
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-b border-white/10">
                      <td className="py-4 px-6">{feature.name}</td>
                      {['starter', 'professional', 'enterprise'].map((plan) => (
                        <td key={plan} className="text-center py-4 px-6">
                          {feature[plan as keyof typeof feature] ? (
                            <Check className="w-5 h-5 text-accent-neon mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-text-muted mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};