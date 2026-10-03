# Dar Zayna Café — Sellable Website Template

## Included
- Modern Moroccan café customer website
- Responsive mobile design
- Menu categories and prices
- Admin dashboard
- Password login
- Add / edit / delete menu items
- Changes instantly reflected on the customer website in the same browser
- No backend required for the demo

## Demo admin
Open `/admin/`
Password: `admin123`

## Important for selling to a real client
This version stores menu changes in browser localStorage. That is excellent for a demo/prototype, but it is NOT a multi-device production CMS.

For a real client deployment, connect the admin panel to Supabase:
1. Create a Supabase project.
2. Create a `menu_items` table.
3. Enable Row Level Security.
4. Add owner authentication.
5. Replace localStorage calls in `admin.js` with Supabase reads/writes.
6. Deploy the site to Vercel, Netlify, or GitHub Pages.
7. Connect the client's domain.

Then the café owner can log in from their phone and change prices/items, and every customer sees the update.
