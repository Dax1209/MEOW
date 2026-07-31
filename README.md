# 💜 Happy Girlfriend's Day Website

A beautiful, highly animated lavender-themed love website made for your girlfriend.  
Perfect for GitHub Pages — free & easy to publish.

---

## ✨ Features

- Soft **lavender** color theme everywhere
- Floating hearts & particle animations
- Smooth scroll reveal animations
- Photo gallery (easy to replace images)
- “Why I Love You” cards
- Personal love letter section
- Interactive **“Want to say something?”** message box with heart confetti
- Fully responsive (looks great on phone too)

---

## 📁 Folder Structure

```
girlfriend-day/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/          ← put your photos here
│   ├── her-main.jpg
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── README.md
```

---

## 🖼️ How to Add Your Photos

1. Put your pictures inside the `images/` folder.
2. Recommended names (or change the paths in `index.html`):

| File name       | Where it appears          |
|-----------------|---------------------------|
| `her-main.jpg`  | Big photo in “About You”  |
| `photo1.jpg`    | Gallery card 1            |
| `photo2.jpg`    | Gallery card 2            |
| `photo3.jpg`    | Gallery card 3            |
| `photo4.jpg`    | Gallery card 4            |
| `photo5.jpg`    | Gallery card 5            |
| `photo6.jpg`    | Gallery card 6            |

You can use `.jpg`, `.png` or `.webp`.  
Square or portrait photos look best.

---

## ✏️ How to Edit the Text

Open `index.html` in any text editor (VS Code, Notepad, etc.).

Look for the comments that say:

```html
<!-- EDIT THIS TEXT -->
<!-- EDIT -->
```

You can change:

- Her name / title in the hero
- The paragraphs in “About You”
- Captions under every photo
- The 6 “Why I Love You” reasons
- The entire love letter
- Your name at the end of the letter

Just replace the placeholder text with your own words.

---

## 🚀 How to Publish on GitHub Pages (Free)

### Method 1 – Quick (recommended)

1. Create a new repository on GitHub (e.g. `girlfriend-day` or `for-my-love`).
2. Upload **all** the files and folders (`index.html`, `css/`, `js/`, `images/`).
3. Go to the repository → **Settings** → **Pages**.
4. Under “Source”, choose **Deploy from a branch**.
5. Select branch `main` (or `master`) and folder `/ (root)`.
6. Click **Save**.
7. Wait 1–2 minutes. Your site will be live at:

```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

### Method 2 – Using GitHub Desktop or git

```bash
git init
git add .
git commit -m "Happy Girlfriend's Day 💜"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin main
```

Then enable GitHub Pages as shown above.

---

## 💡 Tips

- Keep image sizes reasonable (under 1–2 MB each) so the site loads fast.
- You can add more gallery items by copying a `.gallery-item` block.
- Want to change colors? Open `css/style.css` and edit the variables at the top (`:root`).
- The message she types is only shown to her on the page (it is not saved online). It’s a sweet interactive moment.

---

Made with love and a whole lot of lavender 💜  
Happy Girlfriend’s Day!
