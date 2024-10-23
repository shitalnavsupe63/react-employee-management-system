


const employees = [ 
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e@e.com",
    "password": "123",

    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Quarterly Report Completion",
        "description": "Complete the quarterly report",
        "date": "2024-10-21",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Project Status Update",
        "description": "Update team on project status",
        "date": "2024-10-19",
        "category": "Communication"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Client Presentation Preparation",
        "description": "Prepare presentation for the client",
        "date": "2024-10-25",
        "category": "Preparation"
      }
    ]
    
  },
  {
    "id": 2,
    "firstname": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",

    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Marketing Strategy Development",
        "description": "Develop new marketing strategy",
        "date": "2024-10-22",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Market Research Conduct",
        "description": "Conduct market research",
        "date": "2024-10-30",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Product Launch Finalization",
        "description": "Finalize product launch details",
        "date": "2024-10-15",
        "category": "Planning"
      }
    ]

  },
  {
    "id": 3,
    "firstname": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",

    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Budget Allocation Review",
        "description": "Review budget allocations",
        "date": "2024-10-23",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Sales Data Analysis",
        "description": "Analyze sales data",
        "date": "2024-10-18",
        "category": "Analysis"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Tax Document Preparation",
        "description": "Prepare tax documents",
        "date": "2024-10-31",
        "category": "Compliance"
      }
    ]
    
  },
  {
    "id": 4,
    "firstname": "Riya",
    "email": "employee4@example.com",
    "password": "123",

    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Team Building Event Organization",
        "description": "Organize team building event",
        "date": "2024-10-28",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Employee Survey Conduct",
        "description": "Conduct employee surveys",
        "date": "2024-10-10",
        "category": "Feedback"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Employee Benefits Review",
        "description": "Review employee benefits",
        "date": "2024-10-25",
        "category": "Benefits"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Ananya",
    "email": "employee5@example.com",
    "password": "123",

    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Website Content Update",
        "description": "Update website content",
        "date": "2024-10-21",
        "category": "Web"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "App Feature Testing",
        "description": "Test new features on the app",
        "date": "2024-10-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Bug Fixing Report",
        "description": "Fix bugs reported by users",
        "date": "2024-10-15",
        "category": "Maintenance"
      }
    ]
  }
];

const admin = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () =>{


    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    // parse for in array form

    // console.log(employees, admin )

    return {employees, admin}
}

