import { FC, useState } from "react"
import { KanbanBoard, ControlledBoard, OnDragEndNotification, moveCard } from '@caldwell619/react-kanban'
import { v4 as uuid } from "uuid";
import CustomCard from "./CustomCard";
import "./styles.css";


const board: KanbanBoard<CustomCardProps> = {
  columns: [
    {
      id: uuid(),
      title: 'To Do',
      cards: [
        {
          id: uuid(),
          title: 'Create Card Feature',
          description: 'Develop a feature that allows users to create new cards in any column.',
          status: 'Pending',
          tags: ['Admin Request', 'Business Gate'],
        },
        {
          id: uuid(),
          title: 'User Interface Improvements',
          description: 'Enhance the user interface to make it more user-friendly and visually appealing.',
          status: 'Pending',
          tags: ['Design', 'Frontend'],
        },
        {
          id: uuid(),
          title: 'User Authentication',
          description: 'Build user login and registration functionality to secure the application.',
          status: 'Pending',
          tags: ['Feature', 'User Management'],
        },
      ],
    },
    {
      id: uuid(),
      title: 'In Progress',
      cards: [
        {
          id: uuid(),
          title: 'Financial Reporting System',
          description: 'Implement a system to manage financial processes and generate reports.',
          status: 'Pending',
          tags: ['KPI', 'Sector', 'Corporate'],
        },
      ],
    },
    {
      id: uuid(),
      title: 'Done',
      cards: [
        {
          id: uuid(),
          title: 'Custom Card Component Page',
          description: 'Successfully created a new page that uses a custom card component.',
          status: 'Approved',
          tags: ['SALIC Gate'],
        },
        {
          id: uuid(),
          title: 'Database Migration Completed',
          description: 'Migrated the application’s database to a new server without issues.',
          status: 'Approved',
          tags: ['Database', 'Backend'],
        },
      ],
    },
  ],
};

const KnabanChart: FC = () => {
  const [controlledBoard, setBoard] = useState<KanbanBoard<CustomCardProps>>({ ...board })

  const handleCardMove: OnDragEndNotification<CustomCardProps> = (_card, source, destination) => {
    setBoard(currentBoard => {
      return moveCard(currentBoard, source, destination)
    })
  }

  return (
    <div>
      <ControlledBoard
        renderCard={card => <CustomCard {...card} />}
        onCardDragEnd={handleCardMove}
        disableColumnDrag
        allowAddCard={false}
        allowRenameColumn={false}

        renderColumnHeader={column => (
          <div key={column.id} className="mb-2">
            <h2 className="font-semibold">{column.title}</h2>
          </div>
        )}
        onCardRemove={({ board, card, column }) => {
          console.log({ board, card, column })
        }}
        allowAddColumn
        renderColumnAdder={() => (
          <div className="bg-gray-200 p-4 rounded-lg">
            <input placeholder="Add new column" className="px-4 py-2 rounded-l-md" />
            <button type="button" className="bg-teal-600 px-4 py-2 text-white rounded-r-md">Add</button>
          </div>
        )}
      >
        {controlledBoard}
      </ControlledBoard>
    </div>
  )
}

export default KnabanChart