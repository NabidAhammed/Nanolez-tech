import config from '../config.json';

export const useConfig = () => {
  return config;
};

export const getProduct = (productId: string) => {
  return config.products.find(p => p.id === productId);
};

export const getProductByUrl = (url: string) => {
  return config.products.find(p => p.url === url);
};

export const getTeamMember = (memberId: string) => {
  return config.team.find(m => m.id === memberId);
};

export const getService = (serviceId: string) => {
  return config.services.find(s => s.id === serviceId);
};

export const getCompanyInfo = () => {
  return config.company;
};

export const getBranding = () => {
  return config.branding;
};

export const getSocial = () => {
  return config.social;
};

export const getDeploymentInfo = () => {
  return config.deployment;
};

export const getSEO = () => {
  return config.seo;
};

export default config;
