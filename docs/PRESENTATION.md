# Presentation Plan – Git Collaboration Project

## Slide 1 – Title
**Presenter: Member 1**
- Git Collaboration Project
- Simple To-Do List
- Names of all four members
- MCA / subject / faculty details

## Slide 2 – Problem Statement
**Presenter: Member 1**
- Managing daily tasks manually can be difficult.
- We created a simple web To-Do List.
- The project also demonstrates team collaboration using Git.

## Slide 3 – Project Objectives
**Presenter: Member 1**
- Build a simple To-Do application.
- Learn Git repository management.
- Practice staging and commits.
- Use branches and remote repositories.
- Demonstrate team collaboration.

## Slide 4 – Technologies Used
**Presenter: Member 2**
- HTML
- CSS
- JavaScript
- Git
- GitHub

## Slide 5 – Repository Setup
**Presenter: Member 2**
Show screenshot:
- `git init`
- `git status`
- GitHub repository

Explain:
- A Git repository tracks project changes.
- GitHub stores and shares the remote repository.

## Slide 6 – Staging and Committing
**Presenter: Member 2**
Show screenshot:
```bash
git add .
git commit -m "Initial project setup"
git log --oneline
```

Explain:
- Working directory → staging area → repository.

## Slide 7 – Branching
**Presenter: Member 3**
Show:
```bash
git branch
git checkout -b feature/todo-ui
```

Explain:
- A branch lets a developer work independently without directly changing `main`.

## Slide 8 – Four-Member Collaboration
**Presenter: Member 3**
Show:
- `feature/repository-setup`
- `feature/todo-ui`
- `feature/todo-functionality`
- `feature/testing-docs`

Explain each member's responsibility.

## Slide 9 – Remote Repository
**Presenter: Member 3**
Show:
```bash
git remote -v
git push -u origin feature/todo-ui
```

Explain:
- `origin` represents the GitHub remote repository.
- `push` uploads local commits.

## Slide 10 – Pull Request and Merge
**Presenter: Member 4**
Show GitHub Pull Request screenshot.

Explain:
- Developer submits changes.
- Team reviews changes.
- Approved branch is merged into `main`.

## Slide 11 – Application Demo
**Presenter: Member 4**
Demonstrate:
1. Add task
2. Complete task
3. Delete task
4. Clear completed tasks

## Slide 12 – Git Commit History
**Presenter: Member 4**
Show:
```bash
git log --oneline --graph --all
```

Explain how multiple members contributed separate commits.

## Slide 13 – Testing
**Presenter: Member 4**
Show testing table and final application screenshot.

## Slide 14 – Conclusion
**Presenter: All members**
- Successfully developed a Simple To-Do List.
- Practiced Git repository setup.
- Used staging and commits.
- Used branches.
- Worked with GitHub remotes.
- Demonstrated collaborative software development.

## Suggested Speaking Rule
Each member should explain only their assigned slides and demonstrate their own Git contribution.
