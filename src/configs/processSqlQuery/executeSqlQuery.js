import executeSqlQueryHoc from "../../components/processSqlQuery/executeSqlQueryHoc";
import forwardProps from "../../components/processSqlQuery/forwardProps";
import trackPromiseHoc from "../../components/trackPromiseHoc";
import executeSqlQueryPresenter from "../../components/processSqlQuery/executeSqlQueryPresenter";
import withDataExecuteSqlQuery from "../../components/processSqlQuery/withDataExecuteSqlQuery";
import withErrorExecuteSqlQuery from "../../components/processSqlQuery/withErrorExecuteSqlQuery";
import withLoadingExecuteSqlQuery from "../../components/processSqlQuery/withLoadingExecuteSqlQuery";
import compose from "lodash/fp/compose";

const executeSqlQueryContainer = compose(
    executeSqlQueryHoc('https://localhost:44383/api/orders/payments'),
    trackPromiseHoc('executeSqlQuery'),
    forwardProps,
    withErrorExecuteSqlQuery,
    withLoadingExecuteSqlQuery,
    withDataExecuteSqlQuery,
);

const ExecuteSqlQuery = executeSqlQueryContainer(executeSqlQueryPresenter);

export default ExecuteSqlQuery;