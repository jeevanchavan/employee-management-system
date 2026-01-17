localStorage.clear()

    const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "emp1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Login Page UI",
        description: "Create login page design",
        date: "2026-01-10",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve navbar alignment issue",
        date: "2026-01-08",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate payment API",
        date: "2026-01-05",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "emp2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Dashboard UI",
        description: "Design dashboard layout",
        date: "2026-01-11",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Form Validation",
        description: "Add form validations",
        date: "2026-01-09",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CSS Cleanup",
        description: "Remove unused CSS",
        date: "2026-01-06",
        category: "Optimization"
      }
    ]
  },
  {
    id: 3,
    firstName: "Suresh",
    email: "emp3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "REST API",
        description: "Create user API",
        date: "2026-01-12",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Migration",
        description: "Migrate old DB",
        date: "2026-01-07",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Testing",
        description: "Test all endpoints",
        date: "2026-01-08",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    firstName: "Vikas",
    email: "emp4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Auth Module",
        description: "Implement authentication",
        date: "2026-01-13",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "JWT Setup",
        description: "Setup JWT tokens",
        date: "2026-01-09",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Role Management",
        description: "Add role based access",
        date: "2026-01-06",
        category: "Backend"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kunal",
    email: "emp5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Performance Check",
        description: "Analyze app performance",
        date: "2026-01-14",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review team code",
        date: "2026-01-10",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Documentation",
        description: "Write project docs",
        date: "2026-01-07",
        category: "Documentation"
      }
    ]
  }
];


const admin = [
    {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}