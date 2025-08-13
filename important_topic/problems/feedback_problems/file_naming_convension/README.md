# file naming convensions

`kebab-case`

- file and folder names
- CSS class and id
- HTML attribute
  ```html
  <input type="text" aria-label="username" data-user-id="42" />
  ```
- URL Paths and Slugs
  ```js
  https://example.com/user-profile/settings
  ```
- API Endpoints
  ```js
  GET / api / v1 / user - profile;
  POST / api / v1 / order - history;
  ```
- CLI Commands & Flags
  ```js
  npm run build-prod
  git checkout feature-user-auth
  ```

## General Rules for Angular File and Folder Name

- **Use kebab-case** (lowercase with hyphens) for all file and folder names.
- **Match file names to their feature/component/service**.
- **Include type suffix** (`.component.ts`, `.service.ts`, etc.).
- No spaces, camelCase, or PascalCase in file names.

Example:

```
user-profile.component.ts
user-profile.service.ts
```

---

## File Naming Conventions in Angular

Every file name should follow:

```
<feature-name>.<type>.ts
```

Where:

- **feature-name** → kebab-case description of what it is.
- **type** → one of Angular’s recognized types.

### Common Type Suffixes:

| Type            | Suffix                        | Example                   |
| --------------- | ----------------------------- | ------------------------- |
| Component       | `.component.ts`               | `login-form.component.ts` |
| Service         | `.service.ts`                 | `auth.service.ts`         |
| Directive       | `.directive.ts`               | `highlight.directive.ts`  |
| Pipe            | `.pipe.ts`                    | `date-format.pipe.ts`     |
| Module          | `.module.ts`                  | `user.module.ts`          |
| Routing Module  | `.routing.module.ts`          | `app-routing.module.ts`   |
| Interface/Model | `.model.ts` / `.interface.ts` | `user.model.ts`           |
| Guard           | `.guard.ts`                   | `auth.guard.ts`           |
| Enum            | `.enum.ts`                    | `status.enum.ts`          |

---

## Folder Naming Conventions

- Folders also use **kebab-case**.
- Each **feature** gets its own folder.
- Components, services, etc., for a feature live in the same folder.

Example:

```
/src/app/
  user-profile/
    user-profile.component.ts
    user-profile.component.html
    user-profile.component.scss
    user-profile.service.ts
```

---

## Recommended Angular Folder Structure

```
src/
  app/
    core/                # Singleton services, config, global guards
    shared/              # Shared components, pipes, directives
    features/            # Feature modules
      auth/
        auth.module.ts
        auth.service.ts
        login/
          login.component.ts
          login.component.html
          login.component.scss
    app-routing.module.ts
    app.component.ts
    app.module.ts
```

---

## Best Practices

- **Keep related files together** (component + HTML + SCSS in same folder).
- **One component per file** — don’t mix multiple components in one file.
- **Use barrel files (`index.ts`)** for re-exports in shared modules.
- **Avoid deep nesting** — usually max 3–4 levels.
- **Consistent naming = easy to find & auto-import** in IDEs.

---

**Example: User Profile Feature**

```
user-profile/
  user-profile.component.ts
  user-profile.component.html
  user-profile.component.scss
  user-profile.service.ts
  user-profile.model.ts
```
