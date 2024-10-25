const employees = [
  {
    id: 1,
    firstName: "Sia",
    email: "sia@me.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design the homepage",
        taskDescription: "Create a responsive homepage layout.",
        taskDate: "2024-10-23",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix header alignment",
        taskDescription: "Resolve the alignment issue in the header section.",
        taskDate: "2024-10-24",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test login functionality",
        taskDescription: "Ensure all login scenarios are properly tested.",
        taskDate: "2024-10-25",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Write documentation",
        taskDescription: "Document the new API endpoints.",
        taskDate: "2024-10-22",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update footer links",
        taskDescription: "Update the social media links in the footer.",
        taskDate: "2024-10-21",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rajesh",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Optimize images",
        taskDescription: "Compress images to improve page load time.",
        taskDate: "2024-10-26",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create SEO strategy",
        taskDescription: "Develop a strategy to improve organic search traffic.",
        taskDate: "2024-10-27",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Set up Google Analytics",
        taskDescription: "Install and configure Google Analytics for the website.",
        taskDate: "2024-10-28",
        category: "Analytics",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Pooja",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Organize team meeting",
        taskDescription: "Schedule a team meeting for next week.",
        taskDate: "2024-10-30",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare project report",
        taskDescription: "Compile the progress report for the project.",
        taskDate: "2024-11-01",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Review pull requests",
        taskDescription: "Go over the open pull requests on GitHub.",
        taskDate: "2024-10-29",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Kiran",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Run security audit",
        taskDescription: "Perform a security audit on the application.",
        taskDate: "2024-11-02",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix security vulnerabilities",
        taskDescription: "Address the identified security vulnerabilities.",
        taskDate: "2024-11-05",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = {
  id: 1,
  firstName: "Aalekh",
  email: "aalekh@gmail.com",
  password: "123"
};


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return { employees, admin };
};






