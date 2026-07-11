export interface AdminUser {
  username: string;
  displayName: string;
  password: string;
}

const defaultAdminPassword = 'IAmFoundation2025!';

export function getAdminPassword() {
  return process.env.NEXT_PUBLIC_ADMIN_PASSWORD?.trim() || defaultAdminPassword;
}

export const adminUsers: AdminUser[] = [
  {
    username: 'admin',
    displayName: 'Primary Admin',
    password: getAdminPassword(),
  },
  {
    username: 'editor',
    displayName: 'Content Editor',
    password: getAdminPassword(),
  },
];
