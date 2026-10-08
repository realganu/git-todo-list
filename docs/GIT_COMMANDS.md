# Git Commands Used in the Project

## 1. Repository Setup
```bash
mkdir git-todo-list
cd git-todo-list
git init
git branch -M main
git status
```

## 2. Staging and Committing
```bash
git add .
git status
git commit -m "Initial project setup"
git log --oneline
```

## 3. Branching
```bash
git branch
git checkout -b feature/todo-ui
git checkout -b feature/todo-functionality
git checkout main
```

Modern equivalent:
```bash
git switch -c feature/todo-ui
git switch main
```

## 4. Working with Remotes
Create an empty GitHub repository first, then:
```bash
git remote add origin https://github.com/YOUR-USERNAME/git-todo-list.git
git remote -v
git push -u origin main
```

## 5. Push a Feature Branch
```bash
git checkout feature/todo-ui
git add .
git commit -m "Add To-Do interface"
git push -u origin feature/todo-ui
```

## 6. Pull and Merge
```bash
git checkout main
git pull origin main
git merge feature/todo-ui
git push origin main
```

## 7. Useful Inspection Commands
```bash
git status
git branch
git log --oneline --graph --all
git remote -v
git diff
```

## Important Rule
Do not let all four members work directly on `main`.

Each member should:
1. Create a feature branch.
2. Make changes.
3. Commit the changes.
4. Push the branch.
5. Open a Pull Request.
6. Another member reviews it.
7. Merge it into `main`.
