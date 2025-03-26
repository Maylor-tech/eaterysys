# EaterySys Cursor Rules

## Project Overview
EaterySys is an AI-powered restaurant management system with four core modules:
- **MenuMaster**: Menu management and optimization
- **InventoryIQ**: Inventory tracking and waste reduction
- **LaborFlow**: Staff scheduling and no-show prediction
- **ComplianceGuard**: Regulatory compliance and monitoring

## Tech Stack
- Frontend: Next.js with React (TypeScript)
- Backend: Node.js with Express (TypeScript)
- Database: Supabase (PostgreSQL)
- Authentication: Supabase Auth
- Caching: Redis
- AI: TensorFlow.js, OpenAI API
- Deployment: Docker, Kubernetes

## Code Structure
- Components should be placed in the `components/` directory
- Use TypeScript for all new code
- Follow React functional component patterns

## Naming Conventions
- Components: PascalCase (e.g., `MenuList.tsx`)
- Files: kebab-case (e.g., `menu-utils.ts`)
- Functions: camelCase (e.g., `getMenuItems()`)

## Code Style
- Use arrow functions for component definitions
- Prefer const over let
- Use async/await over .then()
- Include proper TypeScript types

## Component Structure
```typescript
import React from 'react';

interface ComponentProps {
  // Props definition
}

export const Component: React.FC<ComponentProps> = ({ props }) => {
  // Component logic
  return (
    // JSX
  );
};
```

## Testing
- Write tests for all new components
- Place tests in `__tests__` directory
- Use React Testing Library for component tests 