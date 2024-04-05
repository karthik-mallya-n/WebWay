import { api } from "~/utils/api";

export default () => {
  const { data } = api.account.getAll.useQuery({ where: { id: "clumnfce10002tj2nnymg226v" } });
  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {data?.map((account) => <li key={account.id}>{account.provider}</li>)}
      </ul>
    </div>
  );
};
