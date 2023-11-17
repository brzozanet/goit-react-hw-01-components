import user from "../database/user.json";
import data from "../database/data.json";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
