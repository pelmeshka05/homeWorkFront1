import React from "react";

type AddressType = {
  street?: string; // ПОДПРАВЛЯЕМ any
  city?: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  // ПРИДЕТСЯ САМОМУ)
  id: number;
  name: string;
  age: number;
  address: AddressType;
};

export type UserListPropsType = {
  user: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList: React.FC<UserListPropsType> = (props: UserListPropsType) => {
  return (
    <div id={"hw01-users"}>
      <h2>User List:</h2>

      <ul>
        {props.user.map((user) => {
          // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          return (
            <li key={user.id} id={`hw01-user-${user.id}`}>
              <strong>{user.name}</strong> (Age: {user.age})
              <strong> Address:</strong>
              {user.address.street}, {user.address.city}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
