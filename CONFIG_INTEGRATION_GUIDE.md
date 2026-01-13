# Configuration System Guide

## Overview

Your project now has a centralized configuration system that integrates throughout the entire application. Update `src/config.json` once, and all changes automatically propagate across the entire site.

## File Structure

```
src/
├── config.json          # Your single source of truth
├── lib/
│   └── useConfig.ts    # Utility hooks to access config
└── App.tsx             # Main app using config
```

## Configuration File (`src/config.json`)

This JSON file contains all your project information organized into sections:

### 1. Company Information
```json
{
  "company": {
    "name": "Nanolez Tech",
    "email": "contact@nanolez.tech",
    "phone": "",
    "website": "",
    "address": "",
    "logo": ""
  }
}
```

### 2. Products
```json
{
  "products": [
    {
      "id": "scholarmind-ai",
      "name": "ScholarMind AI",
      "url": "nl-scholarmindai.vercel.app",
      "description": "Your product description",
      "status": "active",
      "launchDate": "",
      "features": ["Feature 1", "Feature 2"]
    }
  ]
}
```

### 3. Services
```json
{
  "services": [
    {
      "id": "service-id",
      "name": "Service Name",
      "description": "Service description",
      "price": "",
      "features": ["Feature 1"]
    }
  ]
}
```

### 4. Team
```json
{
  "team": [
    {
      "id": "member-1",
      "name": "John Doe",
      "role": "Founder & CTO",
      "email": "john@example.com",
      "github": "https://github.com/johndoe"
    }
  ]
}
```

### 5. Social Media & Links
```json
{
  "social": {
    "github": "https://github.com/yourrepo",
    "twitter": "https://twitter.com/yourhandle",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "instagram": "",
    "discord": "",
    "facebook": ""
  }
}
```

### 6. Branding
```json
{
  "branding": {
    "primaryColor": "#6366f1",
    "secondaryColor": "#ec4899",
    "accentColor": "#f59e0b",
    "fontFamily": "Inter, system-ui, sans-serif",
    "logo": ""
  }
}
```

## Using Configuration in Components

### Option 1: Use the Hook
```tsx
import { useConfig } from '@/lib/useConfig';

export function MyComponent() {
  const config = useConfig();
  return <h1>{config.company.name}</h1>;
}
```

### Option 2: Use Specific Helpers
```tsx
import { 
  getProduct,
  getProductByUrl,
  getTeamMember,
  getSocial,
  getCompanyInfo,
  getBranding
} from '@/lib/useConfig';

export function MyComponent() {
  const companyName = getCompanyInfo().name;
  const product = getProduct('scholarmind-ai');
  const social = getSocial();
  
  return (
    <div>
      <h1>{companyName}</h1>
      <a href={`https://${product.url}`}>{product.name}</a>
      <a href={social.github}>GitHub</a>
    </div>
  );
}
```

## Where Configuration is Currently Used

### ✅ Navbar
- Company name dynamically displayed

### ✅ Products Section
- All products from `config.products` are displayed
- Each product's URL is auto-linked
- Features and descriptions pull from config

### ✅ Services Section
- Services from `config.services` displayed
- Icons mapped from service IDs
- Features automatically rendered

### ✅ Team Section
- Founder information from first team member
- Social links from config (GitHub, LinkedIn, Twitter)

### ✅ Footer
- Company name dynamically shown
- Social media links from config
- Email/contact information from config

## How to Update Information

### Example: Update Company Name
1. Open `src/config.json`
2. Change `"company": { "name": "New Company Name" }`
3. Save the file
4. **Company name updates everywhere automatically!**

### Example: Add a New Product
1. Open `src/config.json`
2. Add to `products` array:
```json
{
  "id": "new-product",
  "name": "New Product Name",
  "url": "new-product.vercel.app",
  "description": "What this does",
  "status": "active",
  "features": ["Feature 1", "Feature 2"]
}
```
3. Save the file
4. **New product appears in Products section!**

### Example: Update Product URL
1. Open `src/config.json`
2. Find the product and update:
```json
"url": "nl-scholarmindai.vercel.app"
```
3. Save
4. **All links update automatically!**

### Example: Update Team Information
1. Open `src/config.json`
2. Update team member info
3. Save
4. **Team section updates automatically!**

## Adding New Fields

If you need to add more information:

1. **Add to config.json**
```json
{
  "newSection": {
    "newField": "value"
  }
}
```

2. **Update useConfig.ts** (optional, for convenience helpers)
```tsx
export const getNewSection = () => {
  return config.newSection;
};
```

3. **Use in components**
```tsx
const { newSection } = useConfig();
```

## Best Practices

✅ **DO:**
- Keep config.json organized and well-structured
- Use descriptive IDs for products/services/team
- Include all information users need to know
- Update config.json before deploying changes
- Use the helper functions for common operations

❌ **DON'T:**
- Store secrets or API keys in config.json
- Keep hardcoded values in components (use config instead)
- Forget to update config.json before deploying
- Leave empty required fields

## Testing Changes

After updating config.json:
1. Save the file
2. The dev server will hot-reload
3. Check that changes appear across all sections
4. If not, try restarting the dev server

## Future Enhancements

Consider implementing:
- **Dynamic loading** from a server endpoint
- **Multi-language support** with language-specific configs
- **Theme customization** UI based on branding colors
- **Admin panel** to edit config without touching JSON
- **Auto-generated sitemap** from config data

## Troubleshooting

**Changes not appearing?**
- Ensure file is saved
- Check browser console for errors
- Restart dev server: `npm run dev`

**Can't find config?**
- Verify path is `src/config.json`
- Check imports use correct paths
- Ensure TypeScript is recognizing the file

**Need to use config in other files?**
```tsx
import { useConfig, getProductByUrl, getSocial } from '@/lib/useConfig';
```
