import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import BooksPage from "./pages/BooksPage";
import SatsangPage from "./pages/SatsangPage";
import SaintsPage from "./pages/SaintsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DonationPage from "./pages/DonationPage";

function Router() {
  return (
    <Switch>
      <Route path={"\\"} component={HomePage} />
      <Route path={"/about"} component={AboutUsPage} />
      <Route path={"/books"} component={BooksPage} />
      <Route path={"/satsang"} component={SatsangPage} />
      <Route path={"/saints"} component={SaintsPage} />
      <Route path={"/contact"} component={ContactUsPage} />
      <Route path={"/donate"} component={DonationPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
