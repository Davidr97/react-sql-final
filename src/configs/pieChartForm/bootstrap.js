import chartStateForm from "../../components/visualization/chartStateForm";

const PieChartForm = chartStateForm('firstColumnValues','secondColumnValues','aggregateByValues')
                                   ('firstColumnValue','secondColumnValue','aggregateByValue');

export default PieChartForm;