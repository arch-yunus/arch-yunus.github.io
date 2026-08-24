import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "@/pages/Home";
import Arsenal from "@/pages/Arsenal";
import Operations from "@/pages/Operations";
import Comms from "@/pages/Comms";
import { Intelligence } from "@/pages/Intelligence";
import Doctrine from "@/pages/Doctrine";
import ProjectDetail from "@/pages/ProjectDetail";
import { CyberShell } from "./components/layout/CyberShell";
import { VaultProvider } from "./contexts/VaultContext";

function Router() {
  return (
    <CyberShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/arsenal" component={Arsenal} />
        <Route path="/operations" component={Operations} />
        <Route path="/intelligence" component={Intelligence} />
        <Route path="/doctrine" component={Doctrine} />
        <Route path="/operations/:projectId" component={ProjectDetail} />
        <Route path="/comms" component={Comms} />
        <Route component={NotFound} />
      </Switch>
    </CyberShell>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <VaultProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </VaultProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
