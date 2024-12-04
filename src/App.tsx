import React from "react";
import GanttChart from "./components/gantt";
import KnabanChart from "./components/kanban";
import EditableGridTable from "./components/editable-grid-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const App: React.FC = () => {
  return (
    <div className="p-4 lg:p-8 container mx-auto">
      <Tabs defaultValue="board">
        <TabsList>
          <TabsTrigger value="board">Board</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
        <TabsContent value="board">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Knaban Board</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <KnabanChart />
            </CardContent>
            <CardFooter>
              {/* <p>Card Footer</p> */}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Gantt Chart</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <GanttChart />
            </CardContent>
            <CardFooter>
              {/* <p>Card Footer</p> */}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Editable Grid Table</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <EditableGridTable />
            </CardContent>
            <CardFooter>
              {/* <p>Card Footer</p> */}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default App