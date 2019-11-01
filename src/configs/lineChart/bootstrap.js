import trackChartStateHoc from "../../components/visualization/trackChartState";
import lineChartPresenter from "../../components/lineChart/lineChartPresenter";

const LineChart = trackChartStateHoc('firstColumnValue','secondColumnValue','thirdColumnValue','aggregateByValue')
(lineChartPresenter);

export default LineChart;