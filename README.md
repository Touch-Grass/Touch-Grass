# GitHub Branch Naming Convention

In this repository, we use a concise branch naming convention:

- Use one of the following prefixes: `feature/`, `hotfix/`, `bugfix/`, or `refactor/`, followed by the name of the branch.

For example:
- `feature/user-authentication`
- `hotfix/fix-login-issue`
- `bugfix/404-page-bug`
- `refactor/update-database-schema`

By following this simple convention, we categorize branches by their purpose, making it easy to understand their intent at a glance.

## CSS Class Naming Convention

In addition to our branch naming convention, we also maintain a CSS class naming convention to ensure consistency in our styles. This convention follows the "this-is-a-class" style, where class names are written in lowercase letters with hyphens between words.
Additionally, we ensure that we always include a unique component name as a prefix, so styles do not overlap and pollute other components.

Typically, to make this process easier, we will extract the component name as an SCSS variable like so:

`$c: my-component;`

This allows us a consistent-by-default approach:

`.#{$c}-boxed-container` will resolve to `my-component-boxed-container`.

### Example CSS Class Names:

- `.header-container`
- `.button-primary`
- `.navigation-menu`
- `.card-info`

By adhering to this convention, we make our CSS code more readable and organized, helping us easily identify and manage styles throughout our project.

Feel free to use these naming conventions in your project to maintain consistency and clarity in your branch names and CSS class names.

## Project Structure

We believe in an organized project structure that promotes modularity and maintainability. Here's how our project should be structured:
```
project-root/
├── src/
│ ├── components/
│ │ ├── Component1/
│ │ │ ├── Component1.tsx
│ │ │ └── Component1.css
│ │ │
│ │ ├── Component2/
│ │ │ ├── Component2.tsx
│ │ │ └── Component2.css
│ │ │
│ │ └── ... (other components)
│ │
│ ├── pages/
│ │ ├── Page1/
│ │ │ ├── Page1.tsx
│ │ │ └── Page1.css
│ │ │
│ │ ├── Page2/
│ │ │ ├── Page2.tsx
│ │ │ └── Page2.css
│ │ │
│ │ └── ... (other pages)
│
├── .gitignore
├── package.json
├── README.md
└── ... (other project files)
```
### Component and Page Structure

- **src/components/**: This directory houses reusable React components. Each component should have its own folder with `.tsx` and `.css` files, for example:
```
  Component1/
├── Component1.tsx
└── Component1.css
```

- **src/pages/**: The `pages` directory contains Next.js page components. Like components, each page should have its own folder with `.tsx` and `.css` files, for example:
```
Page1/
├── Page1.tsx
└── Page1.css
```

This simplified project structure and naming conventions aim to keep our codebase clean, modular, and maintainable, while adhering to your specific requirements for component and page organization with separate folders for `.tsx` and `.css` files.

## Local DB Setup

### Deploy mongoDB 
To deploy your mongoDB, just enter the /dev folder through your console and run 
```
docker compose up
```

### Create touch-grass database
Now mongoDB is empty, but we need a brand new DB to contain all the information regarding Touch Grass. To do so, leave your current console open and create a new console where you will run
```
docker exec -it dev-mongo-1 bash
```
Et voilà, now you're inside the container! Now we need to access the mongo shell. Easy peasy, we just run 
```
mongosh --username  root --password root
```
And now we create the database by doing 
```
use touch-grass
```

### Create a admin user for touch-grass
In the same console now run: 
```
db.createUser(
  {
    user: "local",
    pwd: "local",
    roles: [ { role: "root", db: "admin" } ]
  }
)
```

### Create .local.env file
Now we need to tell our website what user to user. We create a new '.local.env' file in '/next-app' with the following content: 
```
MONGODB_URI=mongodb://local:local@127.0.0.1:27017/touch-grass
```

Now you should be ready to go. Rememeber to use the 'local' user to access your database while using any external tool, such as 'Robo3T'
