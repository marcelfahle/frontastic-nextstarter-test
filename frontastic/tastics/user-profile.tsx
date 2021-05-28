import { UserMenu } from "./user-menu";
import { useContext } from "frontastic";

export function UserProfile({ data }) {
  const { context, isLoading, isError } = useContext();
  if (!context) return null;
  console.log("user profile", data, context);
  const { firstName } = context.session.account;

  return (
    <div className="flex w-full mx-auto" style={{ maxWidth: "1000px" }}>
      <div className="w-48">
        <UserMenu />
      </div>
      <div className={`flex-auto md:shadow-lg md:order-2 md:ml-5`}>
        <div className="flex flex-col flex-1 text-center justify-center items-center w-64 mx-auto my-5">
          <div>
            <div className="mx-auto mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-indigo-200 fill-current"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold text-2xl mb-2">
                Welcome
                {firstName}
              </div>
              <div className="text-sm text-neutral-600">
                Here you can view your latest orders and change your account
                details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
