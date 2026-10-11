# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/bc579d64-f99e-4fee-ab6b-34fc6ac4e123

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/bc579d64-f99e-4fee-ab6b-34fc6ac4e123) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/bc579d64-f99e-4fee-ab6b-34fc6ac4e123) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Extraordinaire archive

`/extraordinaire` is an unlisted archive with eight category pages at
`/extraordinaire/:categoryId` and individual records at
`/extraordinaire/:categoryId/:entryId`. The main navigation does not link to it.

Open a category, then an entry to edit its story, impact, progress, additional
sections, and supporting links. Use **Add entry** to create a record. Edits are
saved in localStorage in the current browser only; they do not update the
repository, another device, or the deployed site's shared content. Use **Export
backup** regularly and **Import backup** to transfer JSON records. Import merges
records by ID and preserves existing local edits on conflicts. Clearing browser
storage removes local edits. There is no authentication, shared database, or
file-upload service.

Baseline records live in `src/data/extraordinaire.ts`. The supplied Notion titles,
percentages, and page IDs have been transcribed; page contents and attachments
have not been imported. The curated baseline contains 22 entries matching the latest requested list,
with High Salary left empty. Summaries distinguish published sources, existing
portfolio claims, and details still needing confirmation. Public artifacts are
linked at their original hosts; private Notion attachments are not copied.
Category assignments can be changed in the editor. Percentages are the owner's recorded progress,
not verified evidence status. Each record includes programme context with direct source citations where the
event can be identified. Programme-level facts are distinguished from evidence
of personal participation. Publication titles and private emails remain needed
where the linked Notion content is inaccessible. Removed baseline entries are hidden even when
present in old browser drafts, but retained in JSON exports to avoid data loss.

The route and its subpages request no indexing through page metadata and a
Vercel response header. This is not access control: the page and bundled baseline
records are public. Keep sensitive originals in private storage.
