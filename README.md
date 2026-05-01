# lalalostcode — Portfolio SPA

A high-performance, single-page application (SPA) portfolio built with Next.js (App Router), Tailwind CSS, Framer Motion, and TypeScript. Designed with a "Structural Sophistication" aesthetic featuring a Kahf-inspired light/dark theme, interactive triple-stacked hero terminal, and fluid glassmorphism.

---

## 🛠️ How to Update Content (Self-Maintenance Guide)

The entire application is designed to be **content-driven**. You do not need to dive into complex React components to update your portfolio. **All your personal information, skills, experiences, and projects are centralized in one file:**

👉 **`src/lib/data.ts`**

### 1. Updating Personal Info & Socials
Open `src/lib/data.ts` and locate the `personalInfo` object at the top. Here you can change:
- `name`, `title`, `bio`
- Social links: `github`, `linkedin`, `email`, `cv`
*(Changes here will automatically propagate to the Hero, About, and Footer sections).*

### 2. Updating Skills
Locate the `skills` object in `data.ts`. It is categorized into arrays:
- `programmingLanguages`, `dataEngineering`, `aiAndLlm`, `cloudAndDevOps`, `cybersecurity`, `humanLanguages`
- To add a new skill, just add an object to the appropriate array: 
  ```typescript
  { name: "New Tech", icon: "code" }
  ```
- **Supported Icons**: The system uses a lightweight inline icon map in `about-experience.tsx`. Some available icons include: `python`, `code`, `database`, `terminal`, `spark`, `airflow`, `kafka`, `pipeline`, `docker`, `mongodb`, `cpu`, `sliders`, `bot`, `sigma`, `pandas`, `brain`, `cloud`, `boxes`, `workflow`, `shield`, `network`, `check`, `globe`, `hand`.

### 3. Updating Experience
Locate the `experience` array. Each object represents a job role.
- Add a new role at the top of the array to make it appear first.
- The `achievements` array automatically renders as a bulleted S.T.A.R. list.

### 4. Updating Projects (Works Section)
Locate the `projects` array. 
- You can categorize projects using exact category strings: `"AI" | "Data Engineering" | "IoT" | "Cloud Engineering"`.
- **S.T.A.R. Details**: Each project has a `star` object (`situation`, `task`, `action`, `result`). This data populates the side drawer when a project is clicked.
- **Links**: Add URLs to `github` and `demo`. If left empty or undefined, the "Links not available yet" message will gracefully appear in the drawer.

### 5. Updating Credentials & Certifications
Locate the `certifications` array.
- Categories include: `"Education" | "Training" | "Certification" | "Award"`.
- The system automatically assigns the correct icon based on this type.
- Include a `link` to provide a "View Proof" button, otherwise it will just display as a static entry.

---

## 🎨 Theme & Visual Tweaks

### Changing Global Colors
If you ever want to adjust the "Kahf" color palette, go to **`src/app/globals.css`**. Look for the `:root` (Light mode) and `.dark` (Dark mode) blocks.
- **Sage (Primary Accent)**: `--primary` or `--color-sage`
- **Olive (Dark Accent)**: `--color-olive`

### Modifying the Terminal Animation
If you want to change what the animated hero terminal types out, go to **`src/components/sections/hero.tsx`** and look for the `TERMINAL_LINES` array at the top of the file. You can adjust the commands, add new progress bars (`type: "progress"`), or add cycling text arrays (`type: "cycling"`).

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to preview changes.
