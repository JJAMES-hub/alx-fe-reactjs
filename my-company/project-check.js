const fs = require("fs");
const path = require("path");

// Paths
const packageJsonPath = path.join(__dirname, "package.json");
const srcPath = path.join(__dirname, "src");

// Required files
const requiredFiles = ["Home.jsx", "About.jsx", "Services.jsx", "Contact.jsx", "Navbar.jsx", "App.jsx"];

// Utility function
function fileContains(filePath, text) {
  const content = fs.readFileSync(filePath, "utf8");
  return content.includes(text);
}

// Check 1: React Installation
function checkReactInstalled() {
  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const deps = pkg.dependencies || {};
  return deps.react && deps["react-dom"]
    ? "✅ React is installed"
    : "❌ React is NOT installed";
}

// Check 2: React Router Installation
function checkRouterInstalled() {
  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const deps = pkg.dependencies || {};
  return deps["react-router-dom"]
    ? "✅ react-router-dom is installed"
    : "❌ react-router-dom is NOT installed";
}

// Check 3: Routing Implementation in App.jsx
function checkRouting() {
  const appFile = path.join(srcPath, "App.jsx");
  if (!fs.existsSync(appFile)) return "❌ App.jsx not found";

  const content = fs.readFileSync(appFile, "utf8");
  return content.includes("BrowserRouter") &&
    content.includes("Routes") &&
    content.includes("Route")
    ? "✅ Routing is implemented in App.jsx"
    : "❌ Routing is NOT implemented correctly in App.jsx";
}

// Check 4: Navbar.jsx Implementation
function checkNavbarFile() {
  const navbarFile = path.join(srcPath, "Navbar.jsx");
  if (!fs.existsSync(navbarFile)) return "❌ Navbar.jsx not found";

  const content = fs.readFileSync(navbarFile, "utf8");
  return content.includes("Link") && content.includes("react-router-dom")
    ? "✅ Navbar.jsx is implemented correctly"
    : "❌ Navbar.jsx does NOT use Link from react-router-dom";
}

// Check 5: Navbar Included in App.jsx
function checkNavbarInApp() {
  const appFile = path.join(srcPath, "App.jsx");
  if (!fs.existsSync(appFile)) return "❌ App.jsx not found";

  return fileContains(appFile, "<Navbar")
    ? "✅ Navbar is included in App.jsx"
    : "❌ Navbar is NOT included in App.jsx";
}

// Check 6: Contact Page Interactivity
function checkContactInteractivity() {
  const contactFile = path.join(srcPath, "Contact.jsx");
  if (!fs.existsSync(contactFile)) return "❌ Contact.jsx not found";

  const content = fs.readFileSync(contactFile, "utf8");
  return content.includes("useState") &&
    content.includes("onChange") &&
    content.includes("onSubmit")
    ? "✅ Contact page interactivity is implemented"
    : "❌ Contact page interactivity is missing";
}

// Check 7: All Required Files Exist
function checkFilesExist() {
  const missing = requiredFiles.filter(file => !fs.existsSync(path.join(srcPath, file)));
  return missing.length === 0
    ? "✅ All required files exist"
    : `❌ Missing files: ${missing.join(", ")}`;
}

// Check 8: Inline Styling
function checkInlineStyling() {
  let allStyled = true;
  requiredFiles.forEach(file => {
    const filePath = path.join(srcPath, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      if (!content.includes("style={{")) allStyled = false;
    }
  });
  return allStyled
    ? "✅ Inline styling is used"
    : "❌ Inline styling missing in some files";
}

// Run all checks
console.log("🔍 Running Project Checks...\n");
console.log(checkReactInstalled());
console.log(checkRouterInstalled());
console.log(checkRouting());
console.log(checkNavbarFile());
console.log(checkNavbarInApp());
console.log(checkContactInteractivity());
console.log(checkFilesExist());
console.log(checkInlineStyling());
