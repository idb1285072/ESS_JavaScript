- Function, Call Back Function, Arrow Function, Recursive Function
- Object
- Classes
- Array, Array Methods
- Regular Expression

---

- Loops
- Scope
- Strict Mode
- Template Literals
- Spread, Nullish, Optional Chaining Operators
- Modules
- JSON
- JavaScript Datatypes
- Let, Const
- Style Guide, Best Practices & Performance
- String, String Methods


# GitHub push

- `git init`
- `git add .`
- `git commit -m "Inital Commit"`
- `git remote add origin https://github.com/your-username/your-repo.git`
- `git push -u origin master`

# GitHub Changed

- `git status`
- `git add .` or `git add fileName1, fileName2`
- `git commit -m "Add feature X / Fix bug Y / Update README"`
- `git push`

# Git Clone

```bush
git clone https://github.com/username/project.git
git clone git@github.com:username/project.git
git clone https://github.com/username/project.git my-folder-name
```

# Repository Link

`https://github.com/idb1285072/JS/`


---

# how to deploy a subfolder
Alright — you want **Option B** (using the `gh-pages` npm package) to **publish multiple folders in the same repository as separate live sites**.
I’ll walk you through it step-by-step, assuming you’re starting fresh and are a beginner.

---

## **1️⃣ Install gh-pages**

First, open a terminal in your repo’s root folder and install the package:

```bash
npm init -y         # if you don't have a package.json yet
npm install gh-pages --save-dev
```

This creates:

* `package.json` — project config file.
* `node_modules` — installed packages folder.

---

## **2️⃣ Understand how GitHub Pages works with `gh-pages`**

* The `gh-pages` package takes the files from **any local folder** you specify and pushes them to a **`gh-pages` branch**.
* GitHub Pages then serves that branch as a website.
* If you want **multiple folders** as websites, you can run `gh-pages` multiple times, putting each in a **subfolder** of `gh-pages` branch.

---

## **3️⃣ Structure for multiple folders**

Example repo layout:

```
ESS_JavaScript/
│
├── important_topic/
│   ├── 19_cookie/
│   │   └── cookie/
│   │       ├── index.html
│   │       └── app.js
│   │
│   ├── 20_storage/
│   │   └── storage_app/
│   │       ├── index.html
│   │       └── app.js
│   │
│   └── ... more folders
│
└── package.json
```

---

## **4️⃣ Add npm scripts for each folder**

In `package.json`, add something like:

```json
{
  "name": "ess_javascript",
  "version": "1.0.0",
  "scripts": {
    "deploy:cookie": "gh-pages -d important_topic/19_cookie/cookie -b gh-pages -d important_topic/19_cookie/cookie --dest important_topic/19_cookie/cookie",
    "deploy:storage": "gh-pages -d important_topic/20_storage/storage_app --dest important_topic/20_storage/storage_app -b gh-pages",
    "deploy:all": "npm run deploy:cookie && npm run deploy:storage"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

### Key parts:

* `-d` → source folder to publish (on your computer).
* `--dest` → destination subfolder inside the `gh-pages` branch.
* `-b gh-pages` → publish to the `gh-pages` branch.

---

## **5️⃣ First deployment**

1. Make sure all HTML/JS/CSS files in each folder use **relative paths** for assets.
2. Run:

```bash
npm run deploy:cookie
npm run deploy:storage
```

or run **all**:

```bash
npm run deploy:all
```

---

## **6️⃣ Enable GitHub Pages**

1. Go to **GitHub → Your Repo → Settings → Pages**.
2. Under **Source**, select:

   * **Branch:** `gh-pages`
   * **Folder:** `/ (root)`
3. Save.

---

## **7️⃣ Access your sites**

After deployment, your URLs will be:

```
https://idb1285072.github.io/ESS_JavaScript/important_topic/19_cookie/cookie/
https://<username>.github.io/ESS_JavaScript/important_topic/20_storage/storage_app/
```

---

## **8️⃣ Adding another folder later**

When you create another mini app, just:

* Add another script in `package.json`:

```json
"deploy:newapp": "gh-pages -d important_topic/21_newapp --dest important_topic/21_newapp -b gh-pages"
```

* Run:

```bash
npm run deploy:newapp
```

---

## ✅ Advantages of `gh-pages` method

* Simple — no GitHub Actions needed.
* Works with any static HTML/JS/CSS project.
* Easy to publish **multiple folders** as **sub-sites**.

---

If you want, I can give you **a ready-to-use `package.json`** for your current repo so you just paste and deploy without figuring out the commands.
Do you want me to prepare that for you?
