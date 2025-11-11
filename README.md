# 🍽️ REACTFOOD – Food Ordering UI (React)

A modern and responsive food ordering interface built using **React**.  
The base structure (meal list, cart, modals, and context) was created while following a React tutorial.  
I then extended the app with **search, filtering, UI improvements, and bug fixes** to make it more functional and user-friendly.

---

## ✅ Features

| Feature | Description | Source |
|--------|-------------|--------|
| Meals Listing Grid | Displays meals with images, description & price | Tutorial |
| Add to Cart | Add items and adjust quantities | Tutorial |
| Cart Modal | Slide-in modal to show cart contents | Tutorial |
| Checkout Modal | Collects user details before confirming order | Tutorial |
| Context API for Cart | Global cart state management | Tutorial |
| **Search by Dish Name** | Search meals live by typing | **Added by me** |
| **Filter by Veg / Non-Veg** (Dropdown) | Filter meals based on food type | **Added by me** |
| **Filter by Price Range (Pill Buttons)** | Basic / Premium / Special pricing filters | **Added by me** |
| **Improved Responsive Layout** | Search + filters align correctly across screen sizes | **Added by me** |
| **ESC Key Modal Fix** | Fixed bug where closing modal via ESC prevented reopening | **Added by me** |
| **Empty Cart Template** | Added UI message when cart has no items | **Added by me** |
| **Enhanced "No Meals Found" Template** | Styled empty state UI for better user feedback | **Added by me** |

---

## 📸 Pictures

<img width="1395" height="805" alt="Screenshot 2025-11-11 at 11 05 39 AM" src="https://github.com/user-attachments/assets/e2d123a3-c1c8-4785-b132-ee5582c6c4e8" />
<img width="1418" height="801" alt="Screenshot 2025-11-11 at 11 06 32 AM" src="https://github.com/user-attachments/assets/af8584ab-48b8-493b-a40f-d91399c8767c" />
<img width="1325" height="771" alt="Screenshot 2025-11-11 at 11 07 02 AM" src="https://github.com/user-attachments/assets/853b54b1-3f02-45bd-8ee6-c9c6ea7256e9" />
<img width="1280" height="729" alt="Screenshot 2025-11-11 at 11 07 09 AM" src="https://github.com/user-attachments/assets/7a766600-c736-4461-b81a-2507bcd44496" />
<img width="1386" height="785" alt="Screenshot 2025-11-11 at 11 07 18 AM" src="https://github.com/user-attachments/assets/50506a8e-0c2d-4db5-8aa9-b376c5648135" />
<img width="1261" height="693" alt="Screenshot 2025-11-11 at 11 07 45 AM" src="https://github.com/user-attachments/assets/29f4b306-8ba4-4065-963b-a007df4a9ed9" />


---

## 🧱 Tech Stack

- **React** (useState, useContext, custom hooks)
- **Context API** for global cart + UI state
- **CSS Flexbox + Grid** for layout
- **Custom Hooks** (`useHttp`) for data fetching

---

## 🧠 What Came From the Tutorial

- Base app layout and component structure
- Cart logic (add, remove, manage amounts)
- Modal components and checkout dialog
- Basic styling and component breakdown
- Context setup for cart + user progress

---

## 💡 What I Built Myself

- Search bar + search filtering logic
- Veg / No-Veg dropdown filter
- Price range filter pill UI + toggle logic
- Refined responsive header + layout arrangement
- Fixed ESC closing bug (modal state sync)
- Better empty-state UIs (Cart empty, Meals empty)
- Cleaned and organized CSS for consistent design

---


🔮 Possible Future Improvements
Persist filters in URL or localStorage
Add "Add to Favorites" feature
Debounced search input
API integration for real meal data

---

## 🏁 Run the Project

```bash
npm install
npm run dev    # or npm start
