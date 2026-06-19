'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spin } from 'antd';
import { useUser } from '@/app/hooks/useUser';

interface AuthOptions {
  requireResident?: boolean;
  blockResident?: boolean;
}

export default function withAuth(
  Component: React.ComponentType<any>,
  options?: AuthOptions
) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const { user, loading, error } = useUser();

    // Helper to check if the user is a resident based on the nested role object
    const checkIsResident = (userData: any) => {
      if (!userData) return false;
      // Check the nested role.name, fallback to residentType if role is somehow missing
      return userData.role?._id === "667941cf70d74498c63ce9d2"
        || userData.role?.name?.toUpperCase() === "RESIDENT"
        || userData.resident?.residentType !== undefined;
    };

    useEffect(() => {
      // 1. If finished loading and no user exists, redirect to login
      if (!loading && (!user || error)) {
        router.replace('/auth/sign-in');
        return;
      }

      // 2. Binary Role Verification (Resident vs. Everyone Else)
      if (!loading && user) {
        const isResident = checkIsResident(user);

        // If the page is ONLY for clients, kick out admins/staff
        if (options?.requireResident && !isResident) {
          router.replace('/dashboard/finance'); // Send staff to their main dashboard
          return;
        }

        // If the page is ONLY for staff, kick out residents
        if (options?.blockResident && isResident) {
          router.replace('/resident/dashboard');
          return;
        }
      }
    }, [user, loading, error, router]); //options

    // Show spinner while checking auth status
    if (loading) {
      return <Spin fullscreen size="large" description="Verifying access..." />;
    }

    // If no user, return null (prevent content flash)
    if (!user || error) {
      return null;
    }

    // Prevent content flash if they are logged in but about to be redirected
    const isResident = checkIsResident(user);
    if (options?.requireResident && !isResident) return null;
    if (options?.blockResident && isResident) return null;

    // User is authenticated and authorized; render the component
    return <Component {...props} />;
  };
}