import trackChartStateHoc from "../../components/visualization/trackChartState";
import pieChartPresenter from "../../components/pieChart/pieChartPresenter";

const PieChart = trackChartStateHoc('firstColumnValue','secondColumnValue','aggregateByValue')
                                   (pieChartPresenter);

export default PieChart;