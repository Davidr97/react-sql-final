import trackChartTypeState from "../../components/visualization/trackChartTypeState";
import withNoChartType from "../../components/visualization/withNoChartType";
import withNoChart from "../../components/visualization/withNoChart";
import withPieChart from "../../components/visualization/withPieChart";
import withScatterPlot from "../../components/visualization/withScatterPlot";
import withLineChart from "../../components/visualization/withLineChart";
import withBarChart from "../../components/visualization/withBarChart";
import visualizationPresenter from "../../components/visualization/visualizationPresenter";

import compose from "lodash/fp/compose";

const VisualizationContainer = compose(
    trackChartTypeState,
    withNoChartType,
    withNoChart,
    withPieChart,
    withScatterPlot,
    withLineChart,
    withBarChart
);

const Visualization = VisualizationContainer(visualizationPresenter);

export default Visualization;
