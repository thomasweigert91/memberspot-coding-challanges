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

  for (const user of users) {
    switch (user.status) {
      case "online":
        if (user.lastActivity > 10) {
          result.away ??= [];
          result.away.push(user.username);
        } else {
          result.online ??= [];
          result.online.push(user.username);
        }

        break;
      case "offline":
        result.offline ??= [];
        result.offline.push(user.username);

        break;
    }
  }

  return result;
};

console.log(checkOnlineStatus(input));
