Bella Wellness Website — Rules

Context

You are an expert full-stack web developer using Next.js (App Router). You are building a highly aesthetic, sleek, and modern informational website for a women-only wellness brand called "Bella Wellness" located in Ohana Hills, Beirut.

The primary goal of this website is to convey a premium, welcoming, and holistic vibe. There are NO calls to action (CTAs) in this phase. No "Book Now" buttons, no pricing, no forms. The site is purely informational to build brand equity and desire. Phase 2 will introduce CTAs and WhatsApp integration later.

Stack and Architecture

•
Framework: Next.js (latest version, using the App Router and src directory).

•
Styling: Tailwind CSS v4 (use native @theme in CSS where possible, otherwise standard Tailwind utility classes).

•
Deployment: The final output will be deployed to Vercel.

•
Images: Images will be served statically from the /public/images/ directory. Assume images are named logically (e.g., pool.jpg, yoga.jpg, massage.jpg).

Design and Typography Guidelines

•
Vibe: Sleek, modern, minimal, premium, feminine but not cliché. Use generous whitespace, large typography, and smooth, subtle transitions.

•
Fonts: Do NOT use generic AI fonts like Montserrat, Poppins, or Open Sans.

•
Headings: Use a clean, web-safe font stack with light weights and generous letter spacing. Example: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif or a high-end serif like Playfair Display.

•
Body: Use a clean sans-serif or an elegant serif like Georgia.



•
Colors: The color palette will be applied by the user via Tailwind config later, so use placeholder classes (like bg-primary, text-secondary, bg-accent) or standard Tailwind neutral/slate tones for now.

File Structure and Pages

The site consists of three main pages and a global footer.

1. Landing Page (app/page.tsx)

•
Hero Section: Full-width, sleek design. No buttons. Just the main tagline: "A community of women thriving in wellness."

•
Intro Strip: A warm welcome paragraph explaining the sanctuary in Ohana Hills.

•
Services Grid: A visual grid or cards showcasing:

•
Movement and Fitness (Pilates, Yoga, Gym)

•
Recovery and Relaxation (Jacuzzi, Pool, Massage)

•
Body Sculpting (InLine Body Machine)

•
Beauty Salon (Hair, Nails, Barbering)

•
Health and Nutrition (Dietician, Nutritionist, Physiotherapist)



•
Why Bella: Four pillars (Exclusive Space, Holistic Approach, Expert Care, Sanctuary Atmosphere).

2. About Page (app/about/page.tsx)

•
The Story: Origin and vision of Bella.

•
The Space: Walkthrough of the environment (pool, studio, salon).

•
The Team: Highlighting the experts (trainers, health specialists, beauty pros).

•
The Philosophy: Reinforcing the community and empowerment tagline.

3. Gallery Page (app/gallery/page.tsx)

•
Minimal text. A visual masonry or grid layout.

•
Subtle categories if needed (Movement, Recovery, Beauty and Care), but let the images dominate the space.

4. Global Footer (components/Footer.tsx)

•
Reiterate tagline: "A community of women thriving in wellness."

•
Location: Ohana Hills, Beirut (link to Google Maps).

•
Social: Instagram icon/link.

•
Note: No WhatsApp link yet (Phase 2).

Execution Rules

1.
Plan First: Before writing any code, generate an implementation_plan.md detailing the component structure, file modifications, and design approach. Wait for approval.

2.
Component-Driven: Keep components modular (e.g., <HeroSection>, <ServiceCard>, <PillarCard>).

3.
Strict Copy Adherence: Use the exact copy provided in the attached content files. Do not rewrite the brand voice unless necessary for HTML formatting.

4.
No CTAs: Do not generate any <button> elements or href links that lead to booking, pricing, or registration.

5.
Responsive: Ensure perfect responsiveness across all devices.

Attached Assets

Please refer to the provided content files for the exact text to be used on the Landing Page, About Page, Gallery Page, and Footer.

