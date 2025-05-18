# Wedding Information/RSVP Site Task List

#Rules
Keep the code clean and easy to understand.
Always check the tasks list before starting a new task.
And mark each "[ ]" as "[x]" when completed.



#Tasks

## 1. Set up Nuxt Project
[x] Initialize a new Nuxt 3 project in the working directory.
[x] Configure basic project structure.

## 2. Integrate Supabase
[x] Set up Supabase project (using existing "Wedding" project).
[x] Connect Nuxt app to Supabase (installed @nuxtjs/supabase module).
[x] Enable email authentication.
[x] Implement email confirmation functionality.

## 3. Create Homepage
[x] Welcome message: "Welcome to the wedding reception of Fawad & Nimrah"
[x] Add names: “Fawad & Nimrah” prominently.
[x] Implement a countdown timer to October 11, 17:00. Which is when the party starts
[x] Add sections for wedding info (venue, parking) with dummy content for later editing.

## 4. RSVP Functionality
[x] Create RSVP form (name, email, attendance, dietary requirements, etc.).
[x] Save RSVP responses to Supabase.
[x] Require email confirmation for RSVP submission.

## 5. Styling and UX
#Use Tailwind CSS for styling and Motion Library for animations.
[x] Theme is islamic and aesthetic, and mobile-friendly design. Nikahnama-inspired layout with gold/burgundy, ornate borders, elegant fonts. Tailwind CSS is now used for styling throughout.
[x] Ensure all text/content is easily editable for future updates.
[x] Add tasteful motion/animation using the motion library and Tailwind transitions on page sections, navigation, and main elements.

## 6. Testing
[ ] Test email confirmation flow.
[ ] Test RSVP submission and data storage.
[ ] Test countdown accuracy.

## 7. Deployment
[ ] Prepare for deployment Vercel.
[ ] Ensure environment variables are handled securely.
