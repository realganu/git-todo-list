# Git Collaboration Project – Simple To-Do List

## Project Overview
A simple web-based To-Do List developed by a 4-member team to demonstrate Git and GitHub collaboration.

## Team
| Member | Responsibility | Git Work |
|---|---|---|
| Member 1 | Repository & project setup | Repository, README, initial commit |
| Member 2 | To-Do UI | HTML/CSS, feature branch |
| Member 3 | To-Do functionality | JavaScript, feature branch |
| Member 4 | Testing & documentation | Testing, screenshots, documentation, etc |

> Replace Member 1–4 with your actual names.

## Features
- Add a task
- Mark a task as completed
- Delete a task
- Clear completed tasks
- Simple responsive interface

## Technologies
- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Git Concepts Demonstrated
1. Repository Setup
2. Staging and Committing
3. Branching
4. Working with Remotes
5. Pulling and merging changes
6. Team collaboration

## Run the Project
Open `index.html` in a web browser.

## Suggested Git Workflow
```bash
git clone <repository-url>
cd git-todo-list

git status
git add .
git commit -m "Initial project setup"
git push origin main

git checkout -b feature/todo-ui
git add .
git commit -m "Add To-Do user interface"
git push -u origin feature/todo-ui

git checkout main
git pull origin main
git merge feature/todo-ui
git push origin main
```

## Evidence / Screenshots
Place screenshots in `docs/screenshots/`.

Recommended screenshots:
1. `01-repository-created.png`
2. `02-git-status.png`
3. `03-git-add-commit.png`
4. `04-branches.png`
5. `05-git-log.png`
6. `06-github-remote.png`
7. `07-push.png`
8. `08-merge.png`
9. `09-final-project.png`

## Final Demonstration
During the presentation:
- Show the GitHub repository
- Show branches
- Show commit history
- Show collaboration/merge
- Run the To-Do List
- Explain each member's contribution
