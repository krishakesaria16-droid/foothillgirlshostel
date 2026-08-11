# Foothill Haven

Build a premium, luxury-looking, fully responsive website for The Foothill Girls Hostel located inside MIT-WPU Campus, Kothrud, Pune, India.

The website should feel modern, trustworthy, minimal, and designed to convert visitors into inquiries. The target audience is students and parents looking for a safe, premium girls hostel near MIT-WPU.

Take design inspiration from Youthville Hostel, but create a completely unique design with better UI/UX, smoother animations, and premium aesthetics.

The website should look like it was built by a professional agency charging ₹1,00,000+.

Brand Identity
Hostel Name

The Foothill Girls Hostel

Tagline

Your Safe & Comfortable Home Near MIT-WPU

Theme

Premium

Minimal

Nature-inspired

Elegant

Modern

Color Palette

Primary Green #2E7D32

Light Green #E8F5E9

White

Yellow Accent #FFD54F

Dark Grey #222222

Typography

Poppins

Outfit

Rounded corners

Soft shadows

Glassmorphism

Smooth gradients

Website Pages

Create the following pages:

Home

About

Rooms

Gallery

Facilities

FAQ

Contact

Privacy Policy

HOME PAGE
Hero Section

Use a full-width image slider with hostel exterior and room images.

Headline

Premium Girls Hostel Inside MIT-WPU Campus

Subheading

Safe • Peaceful • Hygienic • Comfortable Living

Buttons

Book a Visit

Enquire Now

Call Now

WhatsApp

Include smooth scrolling animation.

Why Choose Us

Modern icon cards.

✔ Located Inside MIT Campus

✔ Safe Girls Hostel

✔ Spacious Premium Rooms

✔ Daily Housekeeping

✔ High-Speed WiFi

✔ CCTV Security

✔ Individual Cupboards

✔ Healthy Vegetarian Food

✔ Peaceful Green Environment

✔ Natural Ventilation

Animate each card on scroll.

About Section

Write professional marketing copy highlighting:

The Foothill Girls Hostel offers a peaceful, secure, and premium living experience exclusively for girls studying near MIT-WPU. Located inside the campus vicinity and surrounded by greenery, the hostel provides spacious rooms, hygienic food, high-speed WiFi, daily housekeeping, CCTV security, and a comfortable environment that feels like home.

Room Types

Create elegant pricing cards.

Double Sharing

Triple Sharing

Quad Sharing

Each card should include:

Large room image

Spacious Wardrobes

Comfortable Beds

Study Space

Attached/Common Washroom

Natural Lighting

Book Now button

Add a small badge saying:

"Most Preferred"

on the Triple Sharing option.

Amenities

Create premium feature cards.

Free WiFi

Daily Housekeeping

CCTV Surveillance

24×7 Security

Pure Vegetarian Food

Individual Storage

Huge Windows

Natural Surroundings

Study Friendly Environment

Clean Washrooms

Gallery

Create a beautiful masonry image gallery.

Clicking images should open a fullscreen lightbox.

Use hover animations.

Safety Section

Dark premium section.

Title

Your Safety is Our Priority

Include

24×7 CCTV Monitoring

Dedicated Watchman

Girls Only Hostel

Secure Campus

Parents Trust Us

Testimonials

Design Google-style review cards.

★★★★★

Very nice and quiet place.

★★★★★

The food is hygienic and tasty, and all the essential facilities are available.

★★★★★

Good food served by the Maharaj.

★★★★★

Clean rooms and peaceful surroundings.

Display Google Rating

⭐ 5.0

FAQ

Add expandable accordion FAQs.

Examples

Is the hostel inside MIT-WPU campus?

Is food included?

Is WiFi available?

What room sharing options are available?

Is CCTV available?

How can I book a room?

Contact Section

Display

Phone

Email

Address

Google Maps Embed

Inquiry Form

ENQUIRY POPUP

After 10 seconds, show a beautiful modal popup.

Do NOT show it again for 24 hours after dismissal (use local storage).

Title

Looking for a Safe Girls Hostel Near MIT-WPU?

Subtitle

Fill in your details and we'll contact you shortly.

Fields

Student Name

Phone Number

Email

College

Course

Year

Preferred Sharing

Joining Month

Parent Contact Number

Message

Buttons

Submit Inquiry

Close

CONTACT FORM

Create a premium inquiry form.

Fields

Student Name

Phone

Email

College

Course

Year

Preferred Sharing

Expected Joining Date

Parent Phone

Message

AUTOMATION (IMPORTANT)

When the popup form OR contact form is submitted:

Store all inquiries in Supabase.

Create a table called:

hostel_inquiries

Columns

id

student_name

phone

email

college

course

year

sharing

joining_date

parent_phone

message

created_at

status

(Default = New)

Automatically send an email notification to:

nmchhajed@gmail.com

Subject:

🎉 New Hostel Inquiry Received

Email Body:

New Hostel Inquiry

Student Name:

Phone:

Email:

College:

Course:

Year:

Preferred Sharing:

Joining Date:

Parent Contact:

Message:

Submission Time:

Automatically send a confirmation email to the student.

Subject

Thank you for contacting The Foothill Girls Hostel

Body

Hi {{student_name}},

Thank you for your interest in The Foothill Girls Hostel.

We have received your inquiry successfully.

Our team will contact you shortly.

Regards,

The Foothill Girls Hostel

Phone:
+91 8007660249

Email:
nmchhajed@gmail.com

ADMIN PANEL

Create a secure admin dashboard accessible only after login.

Dashboard Features

View all inquiries

Search inquiries

Filter by status

Mark inquiry as Contacted

Delete inquiry

Export inquiries to CSV

Display

Today's inquiries

Monthly inquiries

Total inquiries

SEO

Optimize every page for Google.

Target keywords:

Girls Hostel in Kothrud

Girls Hostel Near MIT-WPU

Girls PG in Pune

Premium Girls Hostel Pune

MIT-WPU Girls Accommodation

Hostel Inside MIT Campus

Use proper meta titles, meta descriptions, Open Graph tags, structured data (LocalBusiness), XML sitemap, robots.txt, canonical URLs, and optimized image alt text.

PERFORMANCE

Target Google Lighthouse score above 95.

Use lazy loading for images, optimized assets, responsive image sizes, code splitting, and fast page transitions.

DESIGN DETAILS

Use:

React + Next.js
Tailwind CSS
Framer Motion animations
Lucide Icons
Responsive layout for desktop, tablet, and mobile
Sticky navigation
Sticky mobile bottom bar with Call, WhatsApp, and Enquire Now
Scroll progress indicator
Back-to-top button
Elegant page loader
Smooth scrolling
Glassmorphism cards
Hover micro-interactions
Soft shadows and premium spacing
GOOGLE MAP

Embed the hostel location with a "Get Directions" button.

FOOTER

Include:

Quick Links
Contact Information
Address
Google Rating (5.0 ★)
Social Media placeholders
Copyright
Privacy Policy
Terms & Conditions
FINAL GOAL

The finished website should look like a premium, agency-built hostel website that inspires confidence in both parents and students. It should prioritize trust, ease of inquiry, mobile responsiveness, fast loading, and high conversion rates. The design should feel clean, modern, luxurious, and welcoming while maintaining a nature-inspired aesthetic that reflects The Foothill Girls Hostel's peaceful environment.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://foothillgirlshostel.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/03878bcc-7ce3-4dd2-b70a-e32ac2a957f7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
