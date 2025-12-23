import { ArrowLeft, Download, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";

const AnswerKeyHeader = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-foreground">Answer Key</h1>
            <Badge className="bg-primary/20 text-primary text-xs">SOLUTIONS</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Complete solutions with explanations</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default AnswerKeyHeader;
