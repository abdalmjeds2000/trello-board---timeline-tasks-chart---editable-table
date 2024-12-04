import * as React from "react";
// import {
//   Table,
//   Header,
//   HeaderRow,
//   HeaderCell,
//   Body,
//   Row,
//   Cell,
// } from '@table-library/react-table-library/table';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme, Theme } from '@table-library/react-table-library/theme';
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import axios from "axios";

// const BASE_URL = 'http://hn.algolia.com/api/v1/search';

const THEME: Theme = {
  Table: `
  font-family: "Inter", sans-serif;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #DFDFDF;
    border-radius: 8px;
    overflow: auto;
    height: 100%;
    width: 100%;
    min-width: 600px;
  `,

  BaseRow: `
    font-size: 14px;
  `,
  HeaderRow: `
    background-color: #E8E8EF;
  `,
  Row: `
    &:nth-child(odd) {
      background-color: #FFFFFF;
    }

    &:nth-child(even) {
      background-color: #F9F9F9;
    }

    &:hover {
      background-color: #F6F6F6;
    }
  `,
  BaseCell: `
    padding: 10px 16px;
  `,
};

const users = [
  {
    "id": "oiewf98b32f0",
    "name": "Akmal Aldahdouh",
    "email": "akmal.eldahdouh@salic.com"
  },
  {
    "id": "932nyv327834v",
    "name": "SALIC",
    "email": "stsadmin@salic.onmicrosoft.com"
  }
]
const nodes = [
  {
    id: '0',
    name: 'Shopping List',
    deadline: new Date(2020, 1, 15),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: true,
    nodes: 3,
  },
  {
    id: '1',
    name: 'Task ID #2',
    deadline: new Date(2023, 5, 4),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: true,
    nodes: 5,
  },
  {
    id: '2',
    name: 'Team Meeting Notes',
    deadline: new Date(2022, 10, 20),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: false,
    nodes: 4,
  },
  {
    id: '3',
    name: 'Develop Feature X',
    deadline: new Date(2023, 8, 15),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: false,
    nodes: 7,
  },
  {
    id: '4',
    name: 'Book Appointments',
    deadline: new Date(2023, 3, 10),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: true,
    nodes: 2,
  },
  {
    id: '5',
    name: 'Design Sprint Plan',
    deadline: new Date(2023, 7, 5),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: false,
    nodes: 6,
  },
  {
    id: '6',
    name: 'Write Blog Post',
    deadline: new Date(2021, 11, 30),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: true,
    nodes: 1,
  },
  {
    id: '7',
    name: 'Prepare Presentation',
    deadline: new Date(2022, 4, 25),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: true,
    nodes: 5,
  },
  {
    id: '8',
    name: 'Fix Bug Y',
    deadline: new Date(2023, 6, 12),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: false,
    nodes: 3,
  },
  {
    id: '9',
    name: 'Organize Workspace',
    deadline: new Date(2023, 9, 3),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: false,
    nodes: 2,
  },
  {
    id: '10',
    name: 'Plan Workshop',
    deadline: new Date(2022, 7, 8),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: true,
    nodes: 4,
  },
  {
    id: '11',
    name: 'Review Design Drafts',
    deadline: new Date(2023, 1, 17),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: false,
    nodes: 3,
  },
  {
    id: '12',
    name: 'Upload Project Files',
    deadline: new Date(2021, 9, 22),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: true,
    nodes: 1,
  },
  {
    id: '13',
    name: 'Finalize Contract',
    deadline: new Date(2023, 12, 9),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: false,
    nodes: 6,
  },
  {
    id: '14',
    name: 'Organize Team Event',
    deadline: new Date(2023, 11, 2),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: true,
    nodes: 5,
  },
  {
    id: '15',
    name: 'Research Competitor Analysis',
    deadline: new Date(2023, 2, 14),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: true,
    nodes: 7,
  },
  {
    id: '16',
    name: 'Update Documentation',
    deadline: new Date(2023, 8, 19),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: false,
    nodes: 4,
  },
  {
    id: '17',
    name: 'Deploy Version 1.2',
    deadline: new Date(2022, 12, 31),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: true,
    nodes: 3,
  },
  {
    id: '18',
    name: 'Evaluate Vendor Proposals',
    deadline: new Date(2023, 10, 15),
    createdBy: {
      "id": "932nyv327834v",
      "name": "SALIC",
      "email": "stsadmin@salic.onmicrosoft.com"
    },
    isComplete: false,
    nodes: 6,
  },
  {
    id: '19',
    name: 'Set Quarterly Goals',
    deadline: new Date(2023, 5, 18),
    createdBy: {
      "id": "oiewf98b32f0",
      "name": "Akmal Aldahdouh",
      "email": "akmal.eldahdouh@salic.com"
    },
    isComplete: true,
    nodes: 4,
  },
];

const EditableGridTable = () => {
  const [data, setData] = React.useState({ nodes });
  const theme = useTheme(THEME);
  console.log(data)
  // const fetchData = React.useCallback(async () => {
  //   const url = `${BASE_URL}?query=react`;
  //   const result = await axios.get(url);

  //   setData({ nodes: result.data.hits });
  // }, []);
  const handleUpdate = (value, id, property) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          const newVal = property === "createdBy" ? users.find((user) => user.id === value) : value
          console.log(newVal, property)
          return { ...node, [property]: newVal };
        } else {
          return node;
        }
      }),
    }));
  };


  const COLUMNS = [
    {
      label: "Task",
      renderCell: (item) => (
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.name}
          onChange={(event) =>
            handleUpdate(event.target.value, item.id, "name")
          }
        />
      ),
    },
    {
      label: "Deadline",
      renderCell: (item) => (
        <input
          type="date"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.deadline.toISOString().substr(0, 10)}
          onChange={(event) =>
            handleUpdate(new Date(event.target.value), item.id, "deadline")
          }
        />
      ),
    },
    {
      label: "Created by",
      renderCell: (item) => (
        <Select value={item.createdBy.id} onValueChange={(value) => handleUpdate(value, item.id, "createdBy")}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oiewf98b32f0">
              <div className="flex items-center gap-2">
                <Avatar className="w-5 h-5">
                  <AvatarImage src="https://salic.sharepoint.com/sites/Portal/_layouts/15/userphoto.aspx?size=l&username=akmal.eldahdouh@salic.com" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <p className="text-xs">Akmal Aldahdouh</p>
              </div>
            </SelectItem>
            <SelectItem value="932nyv327834v">
              <div className="flex items-center gap-2">
                <Avatar className="w-5 h-5">
                  <AvatarImage src="https://salic.sharepoint.com/sites/Portal/_layouts/15/userphoto.aspx?size=l&username=stsadmin@salic.onmicrosoft.com" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <p className="text-xs">SALIC</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        // <select
        //   style={{
        //     width: "100%",
        //     border: "none",
        //     fontSize: "1rem",
        //     padding: 0,
        //     margin: 0,
        //   }}
        //   value={item.type}
        //   onChange={(event) =>
        //     handleUpdate(event.target.value, item.id, "type")
        //   }
        // >
        //   <option value="SETUP">SETUP</option>
        //   <option value="LEARN">LEARN</option>
        // </select>
      ),
    },
    {
      label: "Complete",
      renderCell: (item) => (
        <Checkbox checked={item.isComplete} onCheckedChange={(check) => handleUpdate(check, item.id, "isComplete")} />
      ),
    },
    {
      label: "Tasks",
      renderCell: (item) => (
        <input
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={
            typeof item.nodes === "number" ? item.nodes : item.nodes?.length
          }
          onChange={(event) =>
            handleUpdate(Number(event.target.value), item.id, "nodes")
          }
        />
      ),
    },
  ];


  // React.useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <div className="h-96">
      <CompactTable columns={COLUMNS} data={data} theme={theme} />
      {/* <Table data={data} theme={theme}>
        {(tableList) => (
          <Header>
            <HeaderRow>
              <HeaderCell resize={{ minWidth: 50, resizerWidth: 5, resizerHighlight: '#000000' }}>Title</HeaderCell>
              <HeaderCell resize={{ resizerWidth: 5, resizerHighlight: '#000000' }}>Created at</HeaderCell>
              <HeaderCell resize={{ resizerWidth: 5, resizerHighlight: '#000000' }}>Points</HeaderCell>
              <HeaderCell resize={{ resizerWidth: 5, resizerHighlight: '#000000' }}>Comments</HeaderCell>
            </HeaderRow>
            <Body>
              {tableList.map((item) => (
                <Row key={item.objectID} item={item}>
                  <Cell>
                    <a href={item.url}>{item.title}</a>
                  </Cell>
                  <Cell>
                    {new Date(
                      item.created_at
                    ).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </Cell>
                  <Cell>{item.points}</Cell>
                  <Cell>{item.num_comments}</Cell>
                </Row>
              ))}
            </Body>
          </Header>
        )}
      </Table> */}
    </div>
  );
};

export default EditableGridTable;
