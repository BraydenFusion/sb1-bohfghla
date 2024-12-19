import React from 'react';
import { Login } from '@/components/auth/Login';
import { PageLayout } from '@/components/layout/PageLayout';

export const SignInPage = () => {
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
};