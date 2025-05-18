# Wedding Invitation Website

A beautiful, elegant wedding invitation website with RSVP functionality built with Nuxt.js and Supabase.

## Overview

This project is a digital wedding invitation that allows guests to:
- View wedding details and information
- RSVP online with guest and dietary information
- Receive email confirmations upon RSVP submission

## Tech Stack

- **Frontend**: [Nuxt.js](https://nuxt.com/) with Vue 3
- **UI/Design**: [TailwindCSS](https://tailwindcss.com/) for styling
- **Backend**: [Supabase](https://supabase.com/) for database and authentication
- **Email**: [Resend](https://resend.com/) via Supabase Edge Functions (currently WIP)

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- NPM or Yarn
- Supabase account
- Resend account for email functionality

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd weddinginvite
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Supabase Configuration

### Database Schema

The RSVP system uses a table called `rsvp` with the following structure:

- `id` - Primary key
- `created_at` - Timestamp
- `guest_type` - String ('bride' or 'groom')
- `family_name` - String
- `full_name` - String
- `email` - String
- `phone` - String (optional)
- `attending` - Boolean
- `guest_count` - Integer
- `under_10_count` - Integer
- `allergies` - Text (optional)
- `notes` - Text (optional)
- `email_confirmed` - Boolean

### Row Level Security (RLS)

For the RSVP feature to work without authentication, RLS is disabled on the `rsvp` table. In a production environment, consider implementing proper security policies.

## Edge Functions

The project uses a Supabase Edge Function for sending confirmation emails:

### Send Confirmation Email

Located in `supabase/functions/send-confirmation/index.ts`

This function:
1. Retrieves the latest RSVP submission
2. Formats an HTML email with the RSVP details
3. Sends the confirmation email via Resend

### Configuration

To deploy the Edge Function:

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref <your-project-id>
   ```

4. Set environment variables for the Edge Function:
   ```bash
   supabase secrets set RESEND_API_KEY=your_resend_api_key
   ```

5. Deploy the function:
   ```bash
   supabase functions deploy send-confirmation
   ```

## RSVP System

The RSVP system is implemented using:

1. A form component (`components/RsvpForm.vue`)
2. Supabase database storage
3. Email confirmation via Edge Functions

When a guest submits the RSVP:
- Form data is validated on the client side
- The submission is saved to the Supabase database
- A confirmation email is sent to the guest
- A success message is displayed
