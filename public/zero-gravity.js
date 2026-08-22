/**
 * Zero-Gravity Floating Tech Logos Background Canvas Engine
 * Interactive 2D Physics with zero-gravity floaters, elastic collision,
 * boundary bouncing, glowing glass orbs, and mouse repulsion physics.
 * Includes Applied AI, GenAI, Data Science, and Developer Tech Stack.
 */

(function () {
    const TECH_STACK = [
        // --- Applied AI & GenAI ---
        { 
            name: 'ChatGPT', short: 'GPT', color: '#10A37F', textOnBrand: '#FFFFFF', bg: 'rgba(16, 163, 127, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#10A37F"/><path fill="#FFF" d="M101.3 54.3a24.1 24.1 0 0 0-2.3-19.4 24.4 24.4 0 0 0-19.1-11.8 24.1 24.1 0 0 0-20.9-8.4A24.4 24.4 0 0 0 38.6 22 24.1 24.1 0 0 0 19.3 32a24.4 24.4 0 0 0-3.3 22.3 24.1 24.1 0 0 0 2.3 19.4 24.4 24.4 0 0 0 19.1 11.8 24.1 24.1 0 0 0 20.9 8.4 24.4 24.4 0 0 0 20.4-7.3 24.1 24.1 0 0 0 19.3-10 24.4 24.4 0 0 0 3.3-22.3zM64 102c-21 0-38-17-38-38s17-38 38-38 38 17 38 38-17 38-38 38zm0-62c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 36c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/></svg>` 
        },
        { 
            name: 'Claude', short: 'Claude', color: '#D97757', textOnBrand: '#FFFFFF', bg: 'rgba(217, 119, 87, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#D97757"/><path fill="#FFF" d="M64 20l11 31 33-3-22 25 22 25-33-3-11 31-11-31-33 3 22-25-22-25 33 3z"/></svg>` 
        },
        { 
            name: 'Hugging Face', short: 'HF', color: '#FFD21E', textOnBrand: '#000000', bg: 'rgba(255, 210, 30, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><circle cx="64" cy="64" r="58" fill="#FFD21E"/><circle cx="44" cy="52" r="8" fill="#000"/><circle cx="84" cy="52" r="8" fill="#000"/><path fill="none" stroke="#000" stroke-width="7" stroke-linecap="round" d="M40 76c8 12 40 12 48 0"/><path fill="#000" d="M20 56c4 12 12 20 20 20s12-8 8-20-28 0-28 0zm88 0c-4 12-12 20-20 20s-12-8-8-20 28 0 28 0z"/></svg>` 
        },
        { 
            name: 'LangChain', short: 'LangChain', color: '#1C3C3C', textOnBrand: '#FFFFFF', bg: 'rgba(45, 114, 217, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#1C3C3C"/><path fill="#34D399" d="M40 38h48v16H40zm0 36h48v16H40z"/><path fill="#60A5FA" d="M38 40h16v48H38zm36 0h16v48H74z"/></svg>` 
        },

        // --- Data Science & ML/DL ---
        { 
            name: 'Python', short: 'PY', color: '#3776AB', textOnBrand: '#FFFFFF', bg: 'rgba(55, 118, 171, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#3776AB" d="M63.1 2c-15.3 0-24.3 2.1-24.3 2.1l-1.3 13.8s10.3-.2 24.3-.2c14.2 0 23.8 2.3 23.8 9.9v10.9H44.1c-12.8 0-23.9 7.7-23.9 22.9v10.7c0 14.9 10.1 23 23.9 23h9.6v-12.7c0-14.2 12.2-25.5 26.5-25.5h26v-13C106.2 16.7 94.6 2 63.1 2zm-12.9 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"/><path fill="#FFD43B" d="M64.9 126c15.3 0 24.3-2.1 24.3-2.1l1.3-13.8s-10.3.2-24.3.2c-14.2 0-23.8-2.3-23.8-9.9V89.5h41.5c12.8 0 23.9-7.7 23.9-22.9V55.9c0-14.9-10.1-23-23.9-23h-9.6v12.7c0 14.2-12.2 25.5-26.5 25.5h-26v13c0 26.2 11.6 40.9 43.1 40.9zm12.9-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"/></svg>` 
        },
        { 
            name: 'Pandas', short: 'Pandas', color: '#150458', textOnBrand: '#FFFFFF', bg: 'rgba(21, 4, 88, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#150458"/><rect x="24" y="24" width="16" height="80" rx="6" fill="#FF4B4B"/><rect x="48" y="44" width="16" height="60" rx="6" fill="#12B886"/><rect x="72" y="24" width="16" height="80" rx="6" fill="#339AF0"/><rect x="96" y="54" width="16" height="50" rx="6" fill="#FCC419"/></svg>` 
        },
        { 
            name: 'NumPy', short: 'NumPy', color: '#4DABCF', textOnBrand: '#FFFFFF', bg: 'rgba(77, 171, 207, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#013243"/><path fill="#4DABCF" d="M64 20L20 44v40l44 24 44-24V44L64 20zm0 16l28 15-28 15-28-15 28-15zm-28 26l24 13v25L36 87V62zm56 0v25L68 100V75l24-13z"/></svg>` 
        },
        { 
            name: 'Scikit-learn', short: 'Sklearn', color: '#F7931E', textOnBrand: '#FFFFFF', bg: 'rgba(247, 147, 30, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#3499CD"/><circle cx="64" cy="64" r="36" fill="#F7931E"/><path fill="#FFF" d="M52 44l32 20-32 20V44z"/></svg>` 
        },
        { 
            name: 'TensorFlow', short: 'TF', color: '#FF6F00', textOnBrand: '#FFFFFF', bg: 'rgba(255, 111, 0, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#FF6F00" d="M64 8l44 26v50L64 110 20 84V34L64 8z"/><path fill="#FFA000" d="M64 8v102l44-26V34L64 8z"/><path fill="#FFF" d="M64 36v56l24-14V50L64 36z"/></svg>` 
        },
        { 
            name: 'PyTorch', short: 'PyTorch', color: '#EE4C2C', textOnBrand: '#FFFFFF', bg: 'rgba(238, 76, 44, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#EE4C2C" d="M72 16l-8 16 20 20c-12 28-44 16-44 40a28 28 0 1 0 56 0c0-20-12-32-24-44l8-16 12 12 8-8-28-20z"/><circle cx="88" cy="28" r="6" fill="#EE4C2C"/></svg>` 
        },
        { 
            name: 'OpenCV', short: 'OpenCV', color: '#5C3EE8', textOnBrand: '#FFFFFF', bg: 'rgba(92, 62, 232, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><circle cx="64" cy="38" r="22" fill="#EE2A29"/><circle cx="40" cy="80" r="22" fill="#3CA550"/><circle cx="88" cy="80" r="22" fill="#2973B8"/><circle cx="64" cy="38" r="10" fill="#FFF"/><circle cx="40" cy="80" r="10" fill="#FFF"/><circle cx="88" cy="80" r="10" fill="#FFF"/></svg>` 
        },
        { 
            name: 'Jupyter', short: 'Jupyter', color: '#F37626', textOnBrand: '#FFFFFF', bg: 'rgba(243, 118, 38, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="none" stroke="#F37626" stroke-width="12" d="M24 64a40 40 0 0 1 80 0 40 40 0 0 1-80 0"/><circle cx="34" cy="34" r="10" fill="#767676"/><circle cx="94" cy="94" r="10" fill="#F37626"/><circle cx="64" cy="64" r="12" fill="#616161"/></svg>` 
        },
        { 
            name: 'Apache Spark', short: 'Spark', color: '#E25A1C', textOnBrand: '#FFFFFF', bg: 'rgba(226, 90, 28, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#E25A1C" d="M64 12c4 24 24 36 44 40-24 8-32 28-36 52-8-24-20-40-48-44 24-8 36-24 40-48z"/></svg>` 
        },

        // --- Data Analytics & Visualization ---
        { 
            name: 'Power BI', short: 'PBI', color: '#F2C811', textOnBrand: '#000000', bg: 'rgba(242, 200, 17, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#111"/><rect x="28" y="60" width="18" height="44" rx="4" fill="#F2C811"/><rect x="55" y="40" width="18" height="64" rx="4" fill="#F2C811"/><rect x="82" y="24" width="18" height="80" rx="4" fill="#F2C811"/></svg>` 
        },
        { 
            name: 'Tableau', short: 'Tableau', color: '#E97627', textOnBrand: '#FFFFFF', bg: 'rgba(233, 118, 39, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#E97627" d="M60 16h8v28h28v8H68v28h-8V52H32v-8h28V16zm0 64h8v32h-8V80zm32-16h24v8H92v-8zM12 64h24v8H12v-8z"/></svg>` 
        },
        { 
            name: 'Excel', short: 'Excel', color: '#1D6F42', textOnBrand: '#FFFFFF', bg: 'rgba(29, 111, 66, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#1D6F42"/><path fill="#FFF" d="M38 38l22 26-22 26h16l14-18 14 18h16L76 64l22-26H82L68 46 54 38H38z"/></svg>` 
        },

        // --- Backend, Cloud & MLOps ---
        { 
            name: 'FastAPI', short: 'FastAPI', color: '#009688', textOnBrand: '#FFFFFF', bg: 'rgba(0, 150, 136, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><circle cx="64" cy="64" r="58" fill="#009688"/><path fill="#FFF" d="M68 20L32 72h28l-4 36 36-52H64l4-36z"/></svg>` 
        },
        { 
            name: 'AWS', short: 'AWS', color: '#FF9900', textOnBrand: '#000000', bg: 'rgba(255, 153, 0, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#232F3E"/><path fill="#FF9900" d="M32 44l10 32h8l8-22 8 22h8l10-32h-9l-5 20-8-20h-8l-8 20-5-20H32zm-8 48c20 12 48 12 68 0l-4-6c-16 10-40 10-56 0l-8 6z"/></svg>` 
        },
        { 
            name: 'MLflow', short: 'MLflow', color: '#0194E2', textOnBrand: '#FFFFFF', bg: 'rgba(1, 148, 226, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#0194E2"/><path fill="#FFF" d="M28 88L64 24l36 64H82L64 52 46 88H28z"/></svg>` 
        },
        { 
            name: 'W&B', short: 'W&B', color: '#FFBE00', textOnBrand: '#000000', bg: 'rgba(255, 190, 0, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><rect width="128" height="128" rx="28" fill="#FFBE00"/><path fill="#000" d="M32 32h16v64H32zm24 0h16v64H56zm24 0h16v64H80z"/></svg>` 
        },

        // --- Core Web & Software Engineering Stack ---
        { 
            name: 'JavaScript', short: 'JS', color: '#F7DF1E', textOnBrand: '#000000', bg: 'rgba(247, 223, 30, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#F7DF1E" d="M0 0h128v128H0z"/><path fill="#000" d="M67.31 104.2c2.8 4.6 7.4 8.2 14.8 8.2 6.3 0 10.3-3.1 10.3-7.5 0-5.2-4.1-7.1-11-10.1l-3.8-1.7c-11.2-4.8-18.6-10.8-18.6-23.3 0-11.6 9.2-20.4 23.3-20.4 10.1 0 17.1 3.5 22.3 12.5l-10.5 6.7c-2.4-4.2-5.6-5.8-11.2-5.8-4.9 0-8.2 2.8-8.2 6.4 0 4.4 3.1 6.3 9.4 9l3.8 1.6c13.1 5.6 20.6 11.2 20.6 24.5 0 14-11 21.6-26.6 21.6-14.3 0-23.4-7.3-28.1-16.4l13.5-5.3zm-39.7 1.8c2.2 3.8 5.2 6.8 10.5 6.8 5.3 0 8.7-2.7 8.7-12.8V49.8h15.2v50.9c0 18.2-10.6 26.1-25.2 26.1-12.8 0-21.2-6.8-25.2-16.3l16-9.7z"/></svg>` 
        },
        { 
            name: 'React', short: 'React', color: '#61DAFB', textOnBrand: '#20232A', bg: 'rgba(97, 218, 251, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><circle cx="64" cy="64" r="12" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" stroke-width="7"><ellipse cx="64" cy="64" rx="52" ry="20"/><ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)"/></g></svg>` 
        },
        { 
            name: 'TypeScript', short: 'TS', color: '#3178C6', textOnBrand: '#FFFFFF', bg: 'rgba(49, 120, 198, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#3178C6" d="M0 0h128v128H0z"/><path fill="#FFF" d="M66 40h48v12H96v60H81V52H66V40zm-35 8c2.9 0 5.4.3 7.8 1.1 2.3.7 4.5 1.9 6.4 3.4l-6.8 9.5c-1.4-1.1-2.9-1.9-4.5-2.4-1.6-.5-3.2-.8-4.9-.8-2.6 0-4.6.6-6 1.8-1.4 1.2-2.1 2.7-2.1 4.6 0 1.5.5 2.8 1.6 3.7 1.1.9 2.9 1.7 5.4 2.5l4.3 1.4c4.6 1.5 8.1 3.4 10.4 5.9 2.3 2.5 3.5 5.7 3.5 9.7 0 5.1-1.9 9.1-5.6 12.1-3.7 3-8.8 4.5-15.3 4.5-3.8 0-7.3-.6-10.4-1.8-3.1-1.2-5.9-3-8.2-5.4l7.4-9.3c1.8 1.7 3.8 3 6 3.9 2.2.9 4.6 1.3 7.1 1.3 2.8 0 5-.6 6.5-1.9 1.5-1.3 2.3-2.9 2.3-5 0-1.7-.6-3.1-1.7-4.1-1.1-1-2.9-1.9-5.3-2.7l-4.3-1.4c-4.6-1.5-8-3.4-10.3-5.8C2.8 62.9 1.6 59.8 1.6 56c0-4.7 1.8-8.5 5.3-11.4 3.5-2.8 8.2-4.2 14.1-4.2z"/></svg>` 
        },
        { 
            name: 'C++', short: 'C++', color: '#00599C', textOnBrand: '#FFFFFF', bg: 'rgba(0, 89, 156, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#00599C" d="M64 8l52 30v60L64 120 12 98V38L64 8z"/><path fill="#FFF" d="M52 48c-10 0-18 8-18 16s8 16 18 16c5 0 9-2 12-5l6 6c-5 5-11 7-18 7-14 0-26-11-26-24s12-24 26-24c7 0 13 2 18 7l-6 6c-3-3-7-5-12-5zm28 12h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4zm22 0h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4z"/></svg>` 
        },
        { 
            name: 'Java', short: 'Java', color: '#F89820', textOnBrand: '#FFFFFF', bg: 'rgba(248, 152, 32, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#5382A1" d="M48 88s-5 4 4 5c12 1 20 1 32-2 0 0 3-2-2-3-12-3-22-3-34 0zm-2-12s-6 5 2 6c14 2 26 2 41-2 0 0 4-3-3-4-15-3-26-3-40 0z"/><path fill="#F89820" d="M72 16s8 9-2 22c-9 11-3 17 3 24 0 0-14-6-8-19 6-11 11-15 7-27zm-14 10s12 12 0 25c-8 8-3 14 3 20 0 0-14-5-8-17 7-11 9-16 5-28z"/><path fill="#5382A1" d="M38 106s-6 6 11 7c22 1 38-1 57-6 0 0-35 9-68-1zm53-27c15-8 10-16 10-16s-2 5-11 9c-8 3-13 8-13 8s5 0 14-1z"/></svg>` 
        },
        { 
            name: 'Node.js', short: 'Node', color: '#339933', textOnBrand: '#FFFFFF', bg: 'rgba(51, 153, 51, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#339933" d="M64 8l52 30v60L64 120 12 98V38L64 8zm0 18L28 47v44l36 21 36-21V47L64 26z"/><path fill="#FFF" d="M52 50h24v8H60v10h14v8H60v12h16v8H52V50z"/></svg>` 
        },
        { 
            name: 'HTML5', short: 'HTML', color: '#E34F26', textOnBrand: '#FFFFFF', bg: 'rgba(227, 79, 38, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#E34F26" d="M19 12l9 100 36 10 36-10 9-100H19z"/><path fill="#EF652A" d="M64 113l29-8 8-85H64v93z"/><path fill="#FFF" d="M64 52H44l-1-14h42l-1 14H64v13h20l-3 30-17 5v-13l8-2 1-13H64V52z"/></svg>` 
        },
        { 
            name: 'CSS3', short: 'CSS', color: '#1572B6', textOnBrand: '#FFFFFF', bg: 'rgba(21, 114, 182, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#1572B6" d="M19 12l9 100 36 10 36-10 9-100H19z"/><path fill="#33A9DC" d="M64 113l29-8 8-85H64v93z"/><path fill="#FFF" d="M64 52H44l-1-14h42v14H64v13h19l-2 24-17 5-17-5-1-11h13l1 5 4 1 5-1 1-6H64V52z"/></svg>` 
        },
        { 
            name: 'Git', short: 'Git', color: '#F05032', textOnBrand: '#FFFFFF', bg: 'rgba(240, 80, 50, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#F05032" d="M122 57L71 6a12 12 0 0 0-17 0L6 57a12 12 0 0 0 0 17l51 51a12 12 0 0 0 17 0l51-51a12 12 0 0 0 0-17z"/><circle cx="48" cy="48" r="8" fill="#FFF"/><circle cx="80" cy="80" r="8" fill="#FFF"/><circle cx="48" cy="80" r="8" fill="#FFF"/><path stroke="#FFF" stroke-width="6" fill="none" d="M48 48v32M48 64c12 0 20 2 32 16"/></svg>` 
        },
        { 
            name: 'Docker', short: 'Docker', color: '#2496ED', textOnBrand: '#FFFFFF', bg: 'rgba(36, 150, 237, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#2496ED" d="M120 62c-3-2-9-2-13 0-4-6-12-8-19-6-1 0-2 0-3 1C77 41 53 45 42 62H8v12c0 18 15 32 34 32h50c18 0 32-13 32-30 0-5-2-10-4-14z"/><rect x="36" y="44" width="12" height="12" rx="2" fill="#2496ED"/><rect x="52" y="44" width="12" height="12" rx="2" fill="#2496ED"/><rect x="68" y="44" width="12" height="12" rx="2" fill="#2496ED"/><rect x="52" y="28" width="12" height="12" rx="2" fill="#2496ED"/></svg>` 
        },
        { 
            name: 'Tailwind', short: 'Tailwind', color: '#06B6D4', textOnBrand: '#FFFFFF', bg: 'rgba(6, 182, 212, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#06B6D4" d="M32 32c10 0 18 6 22 14 6-12 18-18 32-18 20 0 32 12 32 32 0 8-3 15-8 20-10 0-18-6-22-14-6 12-18 18-32 18-20 0-32-12-32-32 0-8 3-15 8-20z"/></svg>` 
        },
        { 
            name: 'Figma', short: 'Figma', color: '#F24E1E', textOnBrand: '#FFFFFF', bg: 'rgba(242, 78, 30, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><circle cx="44" cy="28" r="16" fill="#F24E1E"/><circle cx="84" cy="28" r="16" fill="#FF7262"/><circle cx="84" cy="60" r="16" fill="#1ABCFE"/><circle cx="44" cy="60" r="16" fill="#A259FF"/><path fill="#0ACF83" d="M28 92a16 16 0 0 0 32 0V76H44a16 16 0 0 0-16 16z"/></svg>` 
        },
        { 
            name: 'Linux', short: 'Linux', color: '#FCC624', textOnBrand: '#000000', bg: 'rgba(252, 198, 36, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><ellipse cx="64" cy="68" rx="28" ry="36" fill="#222"/><ellipse cx="64" cy="72" rx="20" ry="26" fill="#FFF"/><circle cx="54" cy="50" r="4" fill="#222"/><circle cx="74" cy="50" r="4" fill="#222"/><path fill="#FCC624" d="M58 58s6 6 12 0c0 0-2 8-12 0zM36 96s8-6 20 0c0 0-12 12-20 0zm56 0s-8-6-20 0c0 0 12 12 20 0z"/></svg>` 
        },
        { 
            name: 'VS Code', short: 'VS Code', color: '#007ACC', textOnBrand: '#FFFFFF', bg: 'rgba(0, 122, 204, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#007ACC" d="M96 12l24 12v80l-24 12-52-44L20 92 8 84V44l12-8 24 20 52-44zm0 28L68 64l28 24V40z"/></svg>` 
        },
        { 
            name: 'Go', short: 'Go', color: '#00ADD8', textOnBrand: '#FFFFFF', bg: 'rgba(0, 173, 216, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><path fill="#00ADD8" d="M20 52h40v12H34v12h26v12H20V52zm50 0h38v36H70V52zm12 12v12h14V64H82z"/></svg>` 
        },
        { 
            name: 'SQL', short: 'SQL', color: '#38BDF8', textOnBrand: '#FFFFFF', bg: 'rgba(56, 189, 248, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><ellipse cx="64" cy="32" rx="40" ry="16" fill="#38BDF8"/><path fill="#38BDF8" d="M24 32v64c0 9 18 16 40 16s40-7 40-16V32H24z"/><ellipse cx="64" cy="64" rx="40" ry="16" fill="#0284C7"/><ellipse cx="64" cy="96" rx="40" ry="16" fill="#0369A1"/></svg>` 
        },
        { 
            name: 'Rust', short: 'Rust', color: '#DEA584', textOnBrand: '#000000', bg: 'rgba(222, 165, 132, 0.35)', 
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><circle cx="64" cy="64" r="44" fill="none" stroke="#DEA584" stroke-width="12" stroke-dasharray="8 6"/><path fill="#DEA584" d="M48 40h24c8 0 14 4 14 11 0 5-4 9-9 11l11 26H73L64 64h-4v24H48V40zm16 14h6c3 0 5-1 5-3s-2-3-5-3h-6v6z"/></svg>` 
        }
    ];

    let canvas, ctx;
    let width, height;
    let orbs = [];
    let mouse = { x: -1000, y: -1000, radius: 220, active: false };

    // Preload SVG Data URLs for instant cross-browser vector rendering
    const loadedImages = new Map();
    TECH_STACK.forEach((item) => {
        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(item.svg);
        loadedImages.set(item.name, img);
    });

    class ZeroGOrb {
        constructor(tech, x, y) {
            this.tech = tech;
            this.x = x;
            this.y = y;
            // Responsive zero-g ball size suited for expanded stack
            this.radius = Math.min(Math.max(window.innerWidth * 0.022, 24), 38); 
            this.mass = this.radius;

            // Zero gravity initial velocities
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.35 + Math.random() * 0.75;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;

            // Rotation in 0G
            this.rotation = (Math.random() - 0.5) * 0.5;
            this.vRotation = (Math.random() - 0.5) * 0.008;

            // Floating pulse
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update() {
            // Zero-gravity position update
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.vRotation;
            this.pulsePhase += 0.025;

            // Bounce off boundaries in Zero Gravity
            const padding = this.radius + 2;
            if (this.x - padding < 0) {
                this.x = padding;
                this.vx = Math.abs(this.vx) * 0.98;
            } else if (this.x + padding > width) {
                this.x = width - padding;
                this.vx = -Math.abs(this.vx) * 0.98;
            }

            if (this.y - padding < 0) {
                this.y = padding;
                this.vy = Math.abs(this.vy) * 0.98;
            } else if (this.y + padding > height) {
                this.y = height - padding;
                this.vy = -Math.abs(this.vy) * 0.98;
            }

            // Mouse Repulsion in Zero Gravity
            if (mouse.active) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius && dist > 0) {
                    const force = (1 - dist / mouse.radius) * 2.2;
                    this.vx += (dx / dist) * force;
                    this.vy += (dy / dist) * force;
                    this.vRotation += (Math.random() - 0.5) * 0.02;
                }
            }

            // Cap velocity in zero-g
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            const maxSpeed = 3.5;
            if (speed > maxSpeed) {
                this.vx = (this.vx / speed) * maxSpeed;
                this.vy = (this.vy / speed) * maxSpeed;
            } else if (speed < 0.2) {
                // Ensure floating continuous motion in zero-g
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);

            const pulse = Math.sin(this.pulsePhase) * 1.8;
            const r = this.radius + pulse;

            // 1. Vibrant Outer Neon Glow Aura
            ctx.shadowColor = this.tech.color;
            ctx.shadowBlur = 20;

            // 2. Glass Orb Sphere Background
            const orbGrad = ctx.createRadialGradient(-r * 0.35, -r * 0.35, 2, 0, 0, r);
            orbGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
            orbGrad.addColorStop(0.4, this.tech.bg);
            orbGrad.addColorStop(0.85, 'rgba(10, 18, 38, 0.92)');
            orbGrad.addColorStop(1, 'rgba(3, 7, 18, 0.98)');

            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fillStyle = orbGrad;
            ctx.fill();

            // 3. Crisp Glass Orb Rim / Border Light
            ctx.lineWidth = 1.8;
            ctx.strokeStyle = this.tech.color;
            ctx.stroke();

            // 4. Highlight Reflection Ring
            ctx.beginPath();
            ctx.arc(-r * 0.3, -r * 0.3, r * 0.5, Math.PI * 1.15, Math.PI * 1.8);
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
            ctx.stroke();

            // 5. Draw SVG Logo inside zero-g ball
            ctx.shadowBlur = 0; // Clear blur for crisp logo artwork
            ctx.rotate(this.rotation);

            const img = loadedImages.get(this.tech.name);
            const iconSize = r * 1.25;

            let imageDrawn = false;
            if (img && img.complete && img.naturalWidth !== 0) {
                try {
                    ctx.drawImage(img, -iconSize / 2, -iconSize / 2, iconSize, iconSize);
                    imageDrawn = true;
                } catch (e) {
                    imageDrawn = false;
                }
            }

            if (!imageDrawn) {
                // High-precision canvas fallbacks with tech brand styling
                ctx.save();
                ctx.beginPath();
                ctx.roundRect(-r * 0.7, -r * 0.35, r * 1.4, r * 0.7, 8);
                ctx.fillStyle = this.tech.color;
                ctx.fill();

                ctx.fillStyle = this.tech.textOnBrand || '#FFFFFF';
                ctx.font = `800 ${Math.floor(r * 0.42)}px 'Plus Jakarta Sans', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.tech.short, 0, 1);
                ctx.restore();
            }

            ctx.restore();
        }
    }

    // Resolve elastic collisions between floating zero-g balls
    function handleCollisions() {
        for (let i = 0; i < orbs.length; i++) {
            for (let j = i + 1; j < orbs.length; j++) {
                const b1 = orbs[i];
                const b2 = orbs[j];

                const dx = b2.x - b1.x;
                const dy = b2.y - b1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = b1.radius + b2.radius + 6;

                if (dist < minDist) {
                    const nx = dx / (dist || 1);
                    const ny = dy / (dist || 1);

                    // Separate overlapping balls
                    const overlap = minDist - dist;
                    b1.x -= nx * overlap * 0.5;
                    b1.y -= ny * overlap * 0.5;
                    b2.x += nx * overlap * 0.5;
                    b2.y += ny * overlap * 0.5;

                    // Momentum bounce
                    const kx = b1.vx - b2.vx;
                    const ky = b1.vy - b2.vy;
                    const p = 2 * (nx * kx + ny * ky) / (b1.mass + b2.mass);

                    b1.vx -= p * b2.mass * nx;
                    b1.vy -= p * b2.mass * ny;
                    b2.vx += p * b1.mass * nx;
                    b2.vy += p * b1.mass * ny;
                }
            }
        }
    }

    function initCanvas() {
        canvas = document.getElementById('zeroGCanvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'zeroGCanvas';
            document.body.prepend(canvas);
        }

        ctx = canvas.getContext('2d');
        resize();

        window.addEventListener('resize', resize);

        const updateMouse = (x, y) => {
            mouse.x = x;
            mouse.y = y;
            mouse.active = true;
        };

        window.addEventListener('mousemove', (e) => updateMouse(e.clientX, e.clientY));
        window.addEventListener('mouseleave', () => { mouse.active = false; });
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) updateMouse(e.touches[0].clientX, e.touches[0].clientY);
        });

        // Create zero gravity tech orbs distributed across the screen
        orbs = [];
        const cols = Math.ceil(Math.sqrt(TECH_STACK.length));
        const rows = Math.ceil(TECH_STACK.length / cols);
        TECH_STACK.forEach((tech, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const x = (width / (cols + 1)) * (col + 1) + (Math.random() - 0.5) * 40;
            const y = (height / (rows + 1)) * (row + 1) + (Math.random() - 0.5) * 40;
            orbs.push(new ZeroGOrb(tech, x, y));
        });

        animate();
    }

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        if (ctx) {
            ctx.scale(dpr, dpr);
        }

        orbs.forEach(orb => {
            if (orb.x > width) orb.x = width - orb.radius - 20;
            if (orb.y > height) orb.y = height - orb.radius - 20;
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw cosmic starfield dust in zero gravity
        drawStarDust();

        handleCollisions();

        orbs.forEach(orb => {
            orb.update();
            orb.draw();
        });

        requestAnimationFrame(animate);
    }

    // Ambient twinkling stardust particles
    let stars = [];
    function drawStarDust() {
        if (stars.length === 0) {
            for (let i = 0; i < 60; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 1.8 + 0.4,
                    alpha: Math.random(),
                    speed: Math.random() * 0.018 + 0.005
                });
            }
        }

        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0.1) star.speed = -star.speed;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(186, 230, 253, ${Math.abs(star.alpha) * 0.45})`;
            ctx.fill();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCanvas);
    } else {
        initCanvas();
    }
})();
