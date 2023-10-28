# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## For Hosting into Firebase

1. Run ` firebase init`
2. select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
3. What do you want to use as your public directory? `dist/file-manager`
4. Configure as a single-page app (rewrite all urls to /index.html)? (y/N)   `Y`
5. Set up automatic builds and deploys with GitHub? (y/N) `N`
