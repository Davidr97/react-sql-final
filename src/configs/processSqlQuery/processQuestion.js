import processQuestionHoc from "../../components/processSqlQuery/processQuestionHoc";
import forwardProps from "../../components/processSqlQuery/forwardProps";
import trackPromiseHoc from "../../components/trackPromiseHoc";
import processQuestionPresenter from "../../components/processSqlQuery/processQuestionPresenter";
import withDataProcessQuestion from "../../components/processSqlQuery/withDataProcessQuestion";
import withErrorProcessQuestion from "../../components/processSqlQuery/withErrorProcessQuestion";
import withLoadingProcessQuestion from "../../components/processSqlQuery/withLoadingProcessQuestion";
import compose from "lodash/fp/compose";

const processQuestionContainer = compose(
    processQuestionHoc('http://127.0.0.1:5000/processInput'),
    trackPromiseHoc('processQuestion'),
    forwardProps,
    withErrorProcessQuestion,
    withLoadingProcessQuestion,
    withDataProcessQuestion
);

const ProcessQuestion = processQuestionContainer(processQuestionPresenter);

export default ProcessQuestion;