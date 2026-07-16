interface UserInput {
  username: string;
  status: "online" | "offline";
  lastActivity: number;
}

interface OnlineStatusResult {
  online?: string[];
  offline?: string[];
  away?: string[];
}

const input: UserInput[] = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const checkOnlineStatus = (users: UserInput[]): OnlineStatusResult => {
  const result: OnlineStatusResult = {};

  const addUser = (
    status: keyof OnlineStatusResult,
    username: string,
  ): void => {
    result[status] ??= [];
    result[status].push(username);
  };

  for (const user of users) {
    if (user.status === "offline") {
      addUser("offline", user.username);
      continue;
    }

    const status = user.lastActivity > 10 ? "away" : "online";
    addUser(status, user.username);
  }

  return result;
};

console.log(checkOnlineStatus(input));
