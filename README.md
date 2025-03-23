# EaterySys: AI-Powered Restaurant Management System

![Version 1.0](https://img.shields.io/badge/version-1.0-blue)
![Updated](https://img.shields.io/badge/updated-March%2022%2C%202025-green)

## Overview

EaterySys is an AI-powered platform designed for restaurants and food service businesses to streamline operations, reduce waste, optimize staffing, and maintain menu consistency. The system integrates advanced technologies like AI, real-time data tracking, and cloud-based tools to enhance operational efficiency.

## Features

### 1. Menu Management System (MenuMaster)
- AI-assisted menu creation and optimization
- Digital menu library with version control
- Allergy and ingredient tracking
- Real-time menu distribution to staff devices

### 2. InventoryIQ Agent
- Real-time inventory tracking with IoT sensor integration
- Predictive ordering based on sales trends
- Waste analytics dashboard

### 3. LaborFlow Scheduler
- Dynamic shift optimization using weather/event data
- No-show prediction with AI (85% accuracy)
- Mobile app for staff shift confirmations

### 4. ComplianceGuard AI
- Automated health code monitoring
- Real-time alerts for compliance violations
- Audit report generation

### 5. Analytics Dashboard
- Visualize key metrics like food cost percentage, labor costs, and compliance scores
- Best-selling item trends and seasonal forecasting

## Tech Stack

### Frontend:
- Framework: Next.js (React-based)
- Styling: Tailwind CSS

### Backend:
- Framework: Node.js with FastAPI for specific microservices

### Database & Auth:
- Database: Supabase (PostgreSQL-based)
- Authentication: Supabase Auth

### Payments Integration:
- Stripe for subscription management and tiered pricing

## Setup Instructions

### 1. Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Stripe account

### 2. Clone the Repository
```bash
git clone https://github.com/your-repo/eaterysys.git
cd eaterysys
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
```

### 5. Run the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the application.

## Usage Instructions

1. Log in using your Supabase authentication credentials.
2. Navigate to the "Menu Management" tab to create or edit menus.
3. Use "InventoryIQ" to track stock levels and automate ordering.
4. Access "LaborFlow" for staff scheduling and no-show predictions.
5. Generate compliance reports via "ComplianceGuard."

## Project Structure
```
├── components/   # Reusable UI components
├── pages/        # Next.js pages
├── public/       # Static assets
├── styles/       # Tailwind CSS styles
├── utils/        # Helper functions and utilities
├── .env.local    # Environment variables (not included in repo)
└── README.md     # Project documentation
```

## Stripe Product Setup

The Stripe product page includes three subscription tiers:
1. **Essentials**: $497/month - Basic inventory and reporting.
2. **Professional**: $1,995/month - Full feature set with AI optimization.
3. **Enterprise**: $4,500/month - Includes custom development and priority support.

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- **Email:** support@eaterysys.com
- **Website:** www.eaterysys.com