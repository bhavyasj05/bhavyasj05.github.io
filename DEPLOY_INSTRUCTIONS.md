# How to Update Your Live Website on Netlify

## Option 1: If Netlify is Connected to Git (Recommended)

### Step 1: Get Your Git Repository URL
1. Go to your Netlify dashboard: https://app.netlify.com
2. Click on your site
3. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
4. You'll see your connected Git repository URL

### Step 2: Update Git Remote
Replace `YOUR_GIT_URL` with your actual repository URL:

```bash
git remote set-url origin YOUR_GIT_URL
git push origin master
```

This will automatically trigger a new deployment on Netlify!

---

## Option 2: Manual Redeploy in Netlify Dashboard

1. Go to https://app.netlify.com
2. Click on your site
3. Go to **Deploys** tab
4. Click **Trigger deploy** → **Deploy site**
5. Netlify will redeploy your site with the latest files

---

## Option 3: Drag and Drop Deploy

1. Go to https://app.netlify.com/drop
2. Drag your entire project folder (`E:\Desktop\tyu ort`)
3. Drop it on the Netlify page
4. Your site will be deployed instantly!

---

## Quick Fix: Update Remote URL

If you know your GitHub/GitLab repository URL, run:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push origin master
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual values.

---

**Note**: If Netlify is connected to Git, pushing to the repository will automatically update your live site within 1-2 minutes!

