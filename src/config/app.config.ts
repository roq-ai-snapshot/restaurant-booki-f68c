interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Chef', 'Wait Staff'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menu items', 'Make a reservation', 'Place an order'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage reservations',
    'Manage restaurant orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/cdc42110-7426-4a23-8eca-ccc512ba6608',
};
