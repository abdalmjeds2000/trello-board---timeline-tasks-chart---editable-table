import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Calendar1, Volleyball } from "lucide-react";


type ViewSwitcherProps = {
  viewMode: ViewMode;
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  viewMode,
  onViewModeChange,
  onViewListChange,
  isChecked
}) => {

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <Button
        size="sm" 
        variant={viewMode === ViewMode.QuarterDay ? "default" : "secondary"} 
        onClick={() => onViewModeChange(ViewMode.QuarterDay)}>
        <Calendar1 /> Quarter of Day
      </Button>
      <Button 
        size="sm" 
        variant={viewMode === ViewMode.HalfDay ? "default" : "secondary"}
        onClick={() => onViewModeChange(ViewMode.HalfDay)}>
        Half of Day
      </Button>
      <Button 
        size="sm" 
        variant={viewMode === ViewMode.Day ? "default" : "secondary"}
        onClick={() => onViewModeChange(ViewMode.Day)}>
        <Volleyball /> Day
      </Button>
      <Button 
        size="sm" 
        variant={viewMode === ViewMode.Week ? "default" : "secondary"}
        onClick={() => onViewModeChange(ViewMode.Week)}>
        Week
      </Button>
      <Button 
        size="sm" 
        variant={viewMode === ViewMode.Month ? "default" : "secondary"}
        onClick={() => onViewModeChange(ViewMode.Month)}>
        Month
      </Button>

      <div className="flex items-center space-x-2 ml-8">
        <Switch id="terms" defaultChecked={isChecked} onCheckedChange={(checked: boolean) => onViewListChange(checked)} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show Task List
        </label>
      </div>
      
      {/* <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div> */}
    </div>
  );
};
